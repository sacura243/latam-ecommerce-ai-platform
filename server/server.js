import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

const port = Number(process.env.PORT || 8787);
const dataDir = join(process.cwd(), 'data');
const taskFile = join(dataDir, 'tasks.json');
const tasks = new Map();

async function bootstrap() {
  await mkdir(dataDir, { recursive: true });
  try {
    const saved = JSON.parse(await readFile(taskFile, 'utf8'));
    saved.forEach(task => tasks.set(task.id, task));
  } catch { /* First run has no persisted task list. */ }
}

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function setCors(req, res) {
  const origin = req.headers.origin || '';
  const allowed = process.env.ALLOWED_ORIGIN || '';
  if (!allowed || origin === allowed) res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
}

async function body(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 1_000_000) throw new Error('请求体过大');
  }
  return raw ? JSON.parse(raw) : {};
}

function configured() {
  return {
    product: Boolean(process.env.PRODUCT_SOURCE_URL),
    llm: Boolean(process.env.LLM_API_URL && process.env.LLM_API_KEY),
    tts: Boolean(process.env.TTS_API_URL && process.env.TTS_API_KEY),
    video: Boolean(process.env.VIDEO_API_URL && process.env.VIDEO_API_KEY),
    rpa: Boolean(process.env.RPA_API_URL && process.env.RPA_API_TOKEN)
  };
}

async function request(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    const text = await response.text();
    if (!response.ok) throw new Error(`${response.status}: ${text.slice(0, 300)}`);
    return text ? JSON.parse(text) : {};
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeProduct(item, index) {
  const sellPrice = Number(item.sellPrice ?? item.price ?? item.sale_price ?? 0);
  const cost = Number(item.cost ?? item.purchase_price ?? 0);
  const profit = item.profit ?? (sellPrice && cost ? +(sellPrice - cost).toFixed(2) : null);
  const margin = item.margin ?? item.profit_margin ?? (profit !== null && sellPrice ? +((profit / sellPrice) * 100).toFixed(1) : null);
  const media = item.media || item.images || item.image_urls || item.videos || [];
  return {
    id: String(item.id || item.product_id || `product-${index + 1}`),
    name: item.name || item.title || '未命名商品',
    cat: item.cat || item.category || '未分类',
    sales: item.sales ?? item.orders ?? 0,
    revenue: item.revenue ?? item.gmv ?? 0,
    sellPrice: sellPrice || null,
    cost: cost || null,
    profit,
    margin,
    stock: item.stock ?? item.inventory ?? 0,
    state: item.state || '正常',
    media: Array.isArray(media) ? media : [media],
    raw: item
  };
}

async function persist() {
  await writeFile(taskFile, JSON.stringify([...tasks.values()], null, 2), 'utf8');
}

function update(task, patch) {
  Object.assign(task, patch, { updatedAt: new Date().toISOString() });
  persist().catch(console.error);
}

function extractJson(content) {
  if (typeof content === 'object') return content;
  const cleaned = String(content).replace(/^```json\s*|\s*```$/g, '');
  return JSON.parse(cleaned);
}

async function runProduction(task) {
  try {
    const missing = configured();
    if (!missing.llm) throw new Error('服务端未配置 LLM_API_URL 或 LLM_API_KEY');
    update(task, { status: '分析商品', stage: 'analysis' });
    const prompt = `你是墨西哥 TikTok Shop 内容运营。仅依据商品资料生成严格 JSON：{analysis:string,script:string,storyboard:[{shot:number,visual:string,voiceover:string,duration:number}] }。商品资料：${JSON.stringify(task.product)}`;
    const llm = await request(process.env.LLM_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.LLM_API_KEY}` },
      body: JSON.stringify({ model: process.env.LLM_MODEL || 'deepseek-chat', messages: [{ role: 'user', content: prompt }], response_format: { type: 'json_object' } })
    });
    const plan = extractJson(llm.choices?.[0]?.message?.content || llm.output || llm);
    update(task, { analysis: plan.analysis || '', script: plan.script || '', storyboard: plan.storyboard || [], status: '脚本与分镜已生成', stage: 'script' });

    if (!missing.tts || !missing.video) {
      update(task, { status: '等待声音或视频服务配置', stage: 'waiting_config' });
      return;
    }
    update(task, { status: '生成配音', stage: 'tts' });
    const audio = await request(process.env.TTS_API_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.TTS_API_KEY}` },
      body: JSON.stringify({ text: task.script, voice: process.env.TTS_VOICE || 'es-MX-female', language: task.language })
    });
    const audioUrl = audio.url || audio.audio_url || '';
    update(task, { audioUrl, status: '生成视频', stage: 'video' });
    const video = await request(process.env.VIDEO_API_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.VIDEO_API_KEY}` },
      body: JSON.stringify({ model: process.env.VIDEO_MODEL || 'seedance', mode: task.mode, product: task.product, storyboard: task.storyboard, script: task.script, audioUrl, assets: task.product.media || [] })
    });
    update(task, { videoUrl: video.url || video.video_url || '', providerTaskId: video.task_id || null, status: video.task_id ? '视频任务处理中' : '已完成', stage: video.task_id ? 'video_pending' : 'completed' });
  } catch (error) {
    update(task, { status: '失败', stage: 'failed', error: error.message });
  }
}

const server = createServer(async (req, res) => {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.end();
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    if (req.method === 'GET' && url.pathname === '/health') return send(res, 200, { ok: true, services: configured(), market: 'MX' });
    if (req.method === 'GET' && url.pathname === '/api/products') {
      if (!process.env.PRODUCT_SOURCE_URL) return send(res, 503, { error: '服务端未配置 PRODUCT_SOURCE_URL' });
      const payload = await request(process.env.PRODUCT_SOURCE_URL, { headers: process.env.PRODUCT_SOURCE_TOKEN ? { Authorization: process.env.PRODUCT_SOURCE_TOKEN } : {} });
      const rows = Array.isArray(payload) ? payload : payload.products || payload.data || [];
      return send(res, 200, { products: rows.map(normalizeProduct) });
    }
    if (req.method === 'POST' && url.pathname === '/api/production') {
      const input = await body(req);
      if (!input.product?.id || !input.mode) return send(res, 400, { error: 'product 和 mode 为必填字段' });
      const task = { id: randomUUID(), product: input.product, mode: input.mode, language: input.language || 'es-MX', status: '已创建', stage: 'queued', analysis: '', script: '', storyboard: [], audioUrl: '', videoUrl: '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      tasks.set(task.id, task); await persist(); runProduction(task);
      return send(res, 202, task);
    }
    const match = url.pathname.match(/^\/api\/production\/([^/]+)$/);
    if (req.method === 'GET' && match) {
      const task = tasks.get(match[1]);
      return task ? send(res, 200, task) : send(res, 404, { error: '任务不存在' });
    }
    const publishMatch = url.pathname.match(/^\/api\/production\/([^/]+)\/publish$/);
    if (req.method === 'POST' && publishMatch) {
      const task = tasks.get(publishMatch[1]);
      if (!task) return send(res, 404, { error: '任务不存在' });
      if (!process.env.RPA_API_URL) return send(res, 503, { error: '服务端未配置 RPA_API_URL' });
      const result = await request(process.env.RPA_API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.RPA_API_TOKEN}` }, body: JSON.stringify({ taskId: task.id, videoUrl: task.videoUrl, product: task.product }) });
      update(task, { status: '已提交发布', stage: 'published', publishResult: result });
      return send(res, 200, task);
    }
    return send(res, 404, { error: '路由不存在' });
  } catch (error) {
    return send(res, 500, { error: error.message || '服务异常' });
  }
});

await bootstrap();
server.listen(port, () => console.log(`Latam AI API listening on :${port}`));
