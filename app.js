const demoData = {
  dashboard: {
    kpis: [
      { label: '今日 GMV (USD)', value: '$12,846', meta: '7日累计 $73,446', tone: 'good' },
      { label: '视频总播放', value: '21.0K', meta: '共 4 条 · 已发布 2 条', tone: 'good' },
      { label: '累计订单', value: '6', meta: '签收率 33%', tone: 'warn' },
      { label: '矩阵粉丝总量', value: '15.2W', meta: '4 个账号 · 已授权 1/4', tone: 'good' },
      { label: '待发货', value: '1', meta: '运输中 2 · 异常 1', tone: 'warn' },
      { label: '库存预警', value: '1', meta: '最低 37 件', tone: 'bad' },
      { label: '工厂已完成商品', value: '0 / 6', meta: '音色库 0 · 视频任务 0', tone: 'warn' },
      { label: '在售商品', value: '6', meta: '总库存 1231 件 · 4 大类目', tone: 'good' },
    ],
    orders: [
      { id: 'ORD-9286', buyer: 'Mariana L.', dest: '墨西哥城（MX）', product: '护肤保湿精华套装', amount: '$32', status: '待发货' },
      { id: 'ORD-9285', buyer: 'Diego F.', dest: '蒙特雷（MX）', product: '蓝牙耳机 TWS Pro', amount: '$26.90', status: '运输中' },
      { id: 'ORD-9284', buyer: 'Lucía R.', dest: '瓜达拉哈拉（MX）', product: '空气炸锅 5.5L', amount: '$59.90', status: '已签收' },
      { id: 'ORD-9283', buyer: 'João S.', dest: '坎昆（MX）', product: 'USB-C 65W快充头', amount: '$18.50', status: '异常件' },
    ],
    gmv: [
      ['8/17', '8.2k'], ['8/18', '9.4k'], ['8/19', '8.9k'], ['8/20', '11.2k'], ['8/21', '10.5k'], ['8/22', '12.4k'], ['今天', '12.8k']
    ],
    categories: [
      { name: '户外', value: '$10,602', detail: '2款 / 库存529件' },
      { name: '美妆', value: '$5,344', detail: '1款 / 库存512件' },
      { name: '家电', value: '$5,870', detail: '1款 / 库存64件' },
      { name: '3C', value: '$12,888', detail: '2款 / 库存126件' },
    ],
    markets: [{ name: '墨西哥', value: '$83.89 · 6单' }],
    accounts: [
      { handle: '@outdoor_mx', meta: '墨西哥 · 48.2K粉', status: '未授权' },
      { handle: '@beauty_mx', meta: '墨西哥 · 23.1K粉', status: '未授权' },
      { handle: '@tech_mexico', meta: '墨西哥 · 67.4K粉', status: '已授权' },
      { handle: '@home_mexico', meta: '墨西哥 · 12.8K粉', status: '未授权' },
    ],
  },
  products: [
    { name: '蓝牙耳机 TWS Pro', cat: '3C', sales: '312', revenue: '$8,393', sellPrice: 26.90, cost: 12.40, profit: 14.50, margin: 53.9, stock: '37', state: '预警', media: [] },
    { name: 'USB-C 65W快充头', cat: '3C', sales: '243', revenue: '$4,496', sellPrice: 18.50, cost: 7.20, profit: 11.30, margin: 61.1, stock: '89', state: '正常', media: [] },
    { name: '户外便携露营椅', cat: '户外', sales: '184', revenue: '$4,598', sellPrice: 24.99, cost: 13.10, profit: 11.89, margin: 47.6, stock: '326', state: '正常', media: [] },
    { name: '护肤保湿精华套装', cat: '美妆', sales: '167', revenue: '$5,344', sellPrice: 32.00, cost: 15.50, profit: 16.50, margin: 51.6, stock: '512', state: '正常', media: [] },
    { name: '空气炸锅 5.5L', cat: '家电', sales: '98', revenue: '$5,870', sellPrice: 59.90, cost: 34.20, profit: 25.70, margin: 42.9, stock: '64', state: '预警', media: [] },
    { name: '户外折叠桌椅套装', cat: '户外', sales: '76', revenue: '$6,004', sellPrice: 79.00, cost: 48.00, profit: 31.00, margin: 39.2, stock: '203', state: '正常', media: [] },
  ],
  factory: [
    { title: '户外露营椅卖点展示', duration: '15s', meta: '真实AI生成 · 西班牙语配音 · 户外便携露营椅 · 未发布', status: '待发布', progress: 68 },
    { title: '美妆达人开箱视频', duration: '15s', meta: '西班牙语配音 · 护肤保湿精华套装 · 8.6K 播放', status: '已发布', progress: 100 },
    { title: '3C快充头测评对比', duration: '30s', meta: '葡萄牙语配音 · USB-C 65W快充头 · 12.4K 播放', status: '已发布', progress: 100 },
    { title: '空气炸锅美食场景', duration: '20s', meta: '西班牙语配音 · 空气炸锅 5.5L · 未发布', status: '待发布', progress: 42 },
  ],
  calendar: [
    { day: '周一', date: '8/19', slots: [{ label: '户外椅场景视频', type: 'plan', time: '14:00 CST' }] },
    { day: '周二', date: '8/20', slots: [{ label: '3C快充头测评', type: 'live', time: '18:30 BRT' }] },
    { day: '周三', date: '8/21', slots: [{ label: '美妆护肤教程', type: 'live', time: '20:00 CLT' }] },
    { day: '周四', date: '8/22', slots: [{ label: '空气炸锅短视频', type: 'plan', time: '11:00 CST' }] },
    { day: '周五', date: '8/23', slots: [{ label: '直播复盘', type: 'live', time: '16:00 CST' }] },
    { day: '周六', date: '8/24', slots: [{ label: '商品上新批次', type: 'plan', time: '10:00 CST' }] },
    { day: '周日', date: '8/25', slots: [{ label: '账号矩阵排期', type: 'plan', time: '19:00 CST' }] },
  ]
};

const view = document.getElementById('app-view');
const navItems = [...document.querySelectorAll('.nav-item[data-view]')];
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const searchInput = document.getElementById('searchInput');
let syncedProducts = JSON.parse(localStorage.getItem('latam-products') || 'null') || demoData.products.map((p, index) => ({ id: `demo-${index + 1}`, ...p }));
let productionRuns = JSON.parse(localStorage.getItem('latam-production-runs') || '[]');

const runtimeConfigKey = 'latam-integrations-v2';
const authKey = 'latam-local-admin';
const defaultRuntimeConfig = {
  mode: 'direct',
  seedance: { baseUrl: '', apiKey: '', videoModel: 'doubao-seedance-1-0-pro-250528', imageModel: 'doubao-seedream-3-0-t2i-250415' },
  llm: { baseUrl: '', apiKey: '', model: 'deepseek-chat' },
  tts: { baseUrl: '', apiKey: '', voice: 'longxiaochun_v2' },
  rpa: { baseUrl: 'http://127.0.0.1:8899', apiKey: '' },
  backend: { url: '' }
};

function getRuntimeConfig() {
  try { const stored = JSON.parse(localStorage.getItem(runtimeConfigKey) || '{}'); return { ...defaultRuntimeConfig, ...stored, seedance: { ...defaultRuntimeConfig.seedance, ...(stored.seedance || {}) }, llm: { ...defaultRuntimeConfig.llm, ...(stored.llm || {}) }, tts: { ...defaultRuntimeConfig.tts, ...(stored.tts || {}) }, rpa: { ...defaultRuntimeConfig.rpa, ...(stored.rpa || {}) }, backend: { ...defaultRuntimeConfig.backend, ...(stored.backend || {}) } }; } catch { return JSON.parse(JSON.stringify(defaultRuntimeConfig)); }
}
function getRuntimeMode() { return getRuntimeConfig().mode || 'direct'; }
function getServiceConfig(id) { return getRuntimeConfig()[id] || {}; }
function authHeaders(cfg = {}) { return cfg.apiKey ? { Authorization: cfg.apiKey.startsWith('Bearer ') ? cfg.apiKey : `Bearer ${cfg.apiKey}` } : {}; }
async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, '0')).join('');
}
function authState() { try { return JSON.parse(localStorage.getItem(authKey) || '{}'); } catch { return {}; } }
function renderAuthGate(mode = 'login', error = '') {
  const gate = document.getElementById('authGate');
  const firstRun = mode === 'setup';
  gate.innerHTML = `<div class="auth-card"><div class="auth-brand"><div class="brand-mark">LA</div><div><strong>拉美电商 AI 中台</strong><span>本地管理员入口</span></div></div><h2>${firstRun ? '创建本地管理员' : '管理员登录'}</h2><p class="auth-note">${firstRun ? '首次使用请设置一个本机管理员账号。' : '请输入本机管理员账号后继续。'} 密钥仍建议放在后端环境变量中。</p>${error ? `<div class="auth-error">${esc(error)}</div>` : ''}<form id="authForm" class="auth-form"><label>管理员账号<input name="username" autocomplete="username" required minlength="2" placeholder="例如 admin" /></label><label>密码<input name="password" type="password" autocomplete="${firstRun ? 'new-password' : 'current-password'}" required minlength="6" placeholder="至少 6 位" /></label>${firstRun ? '<label>确认密码<input name="confirm" type="password" required minlength="6" placeholder="再次输入密码" /></label>' : ''}<button class="primary" type="submit">${firstRun ? '创建并进入' : '登录工作台'}</button></form><div class="auth-disclaimer">仅保护当前浏览器界面，不提供服务器级安全认证。</div></div>`;
  gate.classList.add('open');
  gate.querySelector('#authForm').addEventListener('submit', async (e) => {
    e.preventDefault(); const data = Object.fromEntries(new FormData(e.target).entries());
    if (firstRun && data.password !== data.confirm) { renderAuthGate('setup', '两次输入的密码不一致'); return; }
    const hash = await sha256(`${data.username}:${data.password}`);
    if (firstRun) { localStorage.setItem(authKey, JSON.stringify({ username: data.username, hash })); localStorage.setItem(`${authKey}-session`, '1'); gate.classList.remove('open'); render('dashboard'); notify('本地管理员已创建'); }
    else if (hash === authState().hash && data.username === authState().username) { localStorage.setItem(`${authKey}-session`, '1'); gate.classList.remove('open'); render('dashboard'); notify('登录成功'); }
    else renderAuthGate('login', '账号或密码错误');
  });
}
function initAuth() {
  const state = authState();
  if (!state.hash) { renderAuthGate('setup'); return; }
  // 本地工具默认记住管理员；用户主动退出后，下一次打开才要求重新登录。
  if (localStorage.getItem(`${authKey}-session`) !== 'logged-out') localStorage.setItem(`${authKey}-session`, '1');
  else renderAuthGate('login');
}
function logoutAdmin() { localStorage.setItem(`${authKey}-session`, 'logged-out'); renderAuthGate('login'); }

const integrationDefinitions = [
  { id: 'product', name: '商品 / 选品接口', description: '同步 TikTok Shop、ERP 或选品工具中的真实商品', fields: [['url', '接口地址', 'https://your-api.com/products'], ['key', '访问令牌', 'Bearer Token']] },
  { id: 'llm', name: 'LLM 脚本接口', description: '分析卖点并生成脚本与分镜，支持 OpenAI 兼容接口', fields: [['url', 'Chat Completions 地址', 'https://api.example.com/v1/chat/completions'], ['key', 'API Key', 'sk-...'], ['model', '模型名称', 'deepseek-chat']] },
  { id: 'tts', name: '声音 / TTS 接口', description: '把旁白脚本合成为西语或葡语配音', fields: [['url', '接口地址', 'https://your-api.com/tts'], ['key', 'API Key', ''], ['model', '音色 / Voice', 'es-MX-female']] },
  { id: 'video', name: '视频生成接口', description: '接收分镜、旁白和商品资料并返回视频任务', fields: [['url', '接口地址', 'https://your-api.com/video/generate'], ['key', 'API Key', ''], ['model', '模型名称', 'seedance']] },
  { id: 'rpa', name: 'RPA / 发布接口', description: '将成片和商品信息提交到上架或发布流程', fields: [['url', '接口地址', 'https://your-api.com/publish'], ['key', '访问令牌', '']] }
];

function esc(str) {
  return String(str).replace(/[&<>"]+/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));
}

function statusClass(status) {
  if (status === '已发布' || status === '已签收' || status === '正常' || status === '已授权') return 'ok';
  if (status === '待发布' || status === '预警') return 'wait';
  return 'danger';
}

function renderDashboard() {
  const d = demoData.dashboard;
  return `
    <section class="band">
      <div class="band-head">
        <div>
          <div class="band-title">运营总览</div>
          <div class="band-sub">多账号、多市场、多内容源的一屏控制</div>
        </div>
        <button class="inline-btn" data-action="new-video">+ 批量生成视频</button>
      </div>
      <div class="grid-kpis">
        ${d.kpis.map(k => `<div class="kpi ${k.tone}"><div class="kpi-label"><span>${esc(k.label)}</span></div><div class="kpi-value">${esc(k.value)}</div><div class="kpi-meta">${esc(k.meta)}</div></div>`).join('')}
      </div>
    </section>

    <section class="split">
      <div class="panel">
        <div class="panel-head"><div><div class="panel-title">订单流转看板</div><div class="panel-sub">点击状态框跳转订单列表</div></div><button class="inline-btn">全部订单 →</button></div>
        <div class="table-wrap compact-table">
          <table>
            <thead><tr><th>订单号</th><th>买家</th><th>目的地</th><th>商品</th><th>金额</th><th>状态</th></tr></thead>
            <tbody>
              ${d.orders.map(o => `<tr class="table-row"><td>${esc(o.id)}</td><td>${esc(o.buyer)}</td><td>${esc(o.dest)}</td><td>${esc(o.product)}</td><td>${esc(o.amount)}</td><td><span class="status ${statusClass(o.status)}">${esc(o.status)}</span></td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
              <div class="panel-head"><div><div class="panel-title">近 7 日 GMV</div><div class="panel-sub">墨西哥店铺汇总 (USD)</div></div><button class="inline-btn">数据洞察 →</button></div>
        <div class="gmv-list">
          ${d.gmv.map(([day,val]) => `<div class="gmv-row"><span>${esc(day)}</span><div class="gmv-track"><i style="width:${Math.min(100, Number.parseFloat(val) / 13 * 100)}%"></i></div><strong>${esc(val)}</strong></div>`).join('')}
          <div class="gmv-average"><span>日均 GMV</span><strong>$10,492 / 天</strong></div>
        </div>
      </div>
    </section>

    <section class="split">
      <div class="panel">
        <div class="panel-head"><div><div class="panel-title">类目销售分布</div><div class="panel-sub">按销量 × 售价估算</div></div><button class="inline-btn">商品中心 →</button></div>
        <div class="cards">
          ${d.categories.map(x => `<div class="content-card"><strong>${esc(x.name)}</strong><div class="meta">${esc(x.value)}</div><div class="small">${esc(x.detail)}</div></div>`).join('')}
        </div>
      </div>
      <div class="panel">
          <div class="panel-head"><div><div class="panel-title">墨西哥市场分布</div><div class="panel-sub">订单数 × 销售额</div></div></div>
        <div class="cards">
          ${d.markets.map(x => `<div class="content-card"><strong>${esc(x.name)}</strong><div class="meta">${esc(x.value)}</div></div>`).join('')}
        </div>
        <div style="height:14px"></div>
        <div class="panel-head"><div><div class="panel-title">账号矩阵状态</div><div class="panel-sub">授权、粉丝、市场覆盖</div></div><button class="inline-btn">管理账号授权 →</button></div>
        <div class="cards">
          ${d.accounts.map(x => `<div class="content-card"><strong>${esc(x.handle)}</strong><div class="meta">${esc(x.meta)}</div><div class="small"><span class="status ${statusClass(x.status)}">${esc(x.status)}</span></div></div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderProducts(query = '') {
  const items = syncedProducts.filter(p => `${p.name} ${p.cat} ${p.state}`.toLowerCase().includes(query.toLowerCase()));
  return `
    <section class="band">
      <div class="band-head"><div><div class="band-title">商品中心</div><div class="band-sub">墨西哥店铺商品、利润和素材统一管理</div></div><div class="toolbar-actions"><button class="secondary" data-action="open-integrations">配置商品接口</button><button class="primary" data-action="sync-products">↻ 同步商品</button></div></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>商品</th><th>类目</th><th>售价</th><th>成本</th><th>单件利润</th><th>利润率</th><th>库存</th><th>状态</th><th>内容生产</th></tr></thead>
          <tbody>
            ${items.map((p, i) => `<tr class="table-row"><td>${i + 1}</td><td><strong>${esc(p.name)}</strong><div class="table-meta">${p.media?.length ? `已同步 ${p.media.length} 个素材` : '素材待接口返回'}</div></td><td>${esc(p.cat)}</td><td>$${esc(p.sellPrice ?? '-')}</td><td>$${esc(p.cost ?? '-')}</td><td class="profit-cell">$${esc(p.profit ?? '-')}</td><td>${esc(p.margin ?? '-')}%</td><td>${esc(p.stock || '-')}</td><td><span class="status ${p.state === '预警' ? 'wait' : 'ok'}">${esc(p.state || '待分析')}</span></td><td><button class="inline-btn compact-btn" data-action="produce" data-product-id="${esc(p.id || p.name)}">一键生产</button></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFactory() {
  return `
    <section class="band production-board"><div class="band-head"><div><div class="band-title">生产工作台</div><div class="band-sub">商品 → 分析 → 脚本 → 分镜 → 配音 → 视频 → 发布</div></div><button class="primary" data-action="new-video">＋ 新建内容任务</button></div><div class="pipeline-steps"><span class="done">1 商品分析</span><span>2 脚本与分镜</span><span>3 声音</span><span>4 视频输出</span><span>5 发布</span></div>${productionRuns.length ? `<div class="run-list">${productionRuns.map(run => `<article class="run-card"><div><strong>${esc(run.productName)}</strong><div class="small">${esc(run.mode === 'assets' ? '素材库混剪' : 'AI 直接生成')} · ${esc(run.updatedAt)}</div></div><span class="status ${run.status === '已完成' ? 'ok' : run.status === '失败' ? 'danger' : 'wait'}">${esc(run.status)}</span><button class="inline-btn" data-action="view-run" data-run-id="${esc(run.id)}">查看结果</button></article>`).join('')}</div>` : '<div class="empty-production">还没有内容任务，从商品中心点击“一键生产”即可开始。</div>'}</section>
    <section class="factory-grid">
      <div class="panel">
          <div class="panel-head"><div><div class="panel-title">视频工厂</div><div class="panel-sub">脚本、配音、混剪、字幕、批量发布</div></div><button class="inline-btn" data-action="new-video">+ 新建任务</button></div>
        <div class="pipeline">
          ${demoData.factory.map(item => `
            <div class="task">
              <div class="task-top"><strong>${esc(item.title)}</strong><span>${esc(item.duration)}</span></div>
              <div class="small">${esc(item.meta)}</div>
              <div class="progress"><span style="width:${item.progress}%"></span></div>
              <div class="task-top"><span class="status ${item.status === '已发布' ? 'ok' : 'wait'}">${esc(item.status)}</span><button class="inline-btn">${item.status === '已发布' ? '复用模板' : '发布'}</button></div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><div class="panel-title">视频生产链路</div><div class="panel-sub">商品资料 → 脚本 → 配音 → 数字人 → 导出</div></div></div>
        <div class="cards">
          <div class="content-card"><strong>1. 资料解析</strong><div class="meta">PDF / Word / Excel / 图片</div></div>
          <div class="content-card"><strong>2. 卖点抽取</strong><div class="meta">价格、参数、场景、合规词</div></div>
          <div class="content-card"><strong>3. 脚本生成</strong><div class="meta">15s / 30s / 60s 模板</div></div>
          <div class="content-card"><strong>4. 选择输出方式</strong><div class="meta">素材库混剪 / AI 直接生成，按任务选择</div></div>
        </div>
      </div>
    </section>
  `;
}

function renderCalendar() {
  return `
    <section class="band">
      <div class="band-head"><div><div class="band-title">内容日历</div><div class="band-sub">多账号发布计划与排期同步</div></div><button class="inline-btn">+ 排期</button></div>
      <div class="calendar">
        ${demoData.calendar.map(day => `
          <div class="day">
            <div class="day-head"><strong>${esc(day.day)}</strong><span>${esc(day.date)}</span></div>
            ${day.slots.map(slot => `<div class="slot ${slot.type}">${esc(slot.time)}<br>${esc(slot.label)}</div>`).join('')}
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderRadar() {
  const items = [
    ['便携式露营灯 USB充电', '户外', '92', '$6.80 / 件', '竞争低'],
    ['防晒霜 SPF50+ 小样套装', '美妆', '89', '$8.20 / 件', '竞争中'],
    ['迷你蓝牙音箱 防水', '3C', '85', '$5.40 / 件', '竞争中'],
    ['空气炸锅 3.5L 小容量', '家电', '83', '$11.50 / 件', '竞争高'],
    ['折叠收纳箱 3件套', '家居', '78', '$7.20 / 件', '竞争低'],
    ['手机支架三脚架自拍杆', '3C', '76', '$4.10 / 件', '竞争中']
  ];
  return `<section class="band"><div class="band-head"><div><div class="band-title">选品雷达</div><div class="band-sub">墨西哥热销趋势 · AI 热度评分 · 一键入库</div></div><button class="inline-btn" data-action="sync">↻ 同步趋势</button></div><div class="grid-products">${items.map(x => `<article class="product-card"><div class="product-title">${esc(x[0])}<span class="score">🔥 ${x[2]}</span></div><div class="tag-row"><span class="tag">${x[1]}</span><span class="tag green">${x[4]}</span><span class="tag cyan">↗ +${Math.round(Number(x[2]) / 3)}%</span></div><div class="price-row"><span>售价 $${x[3].replace('$','').split(' /')[0]}</span><span class="profit">利润率 ${Math.round(Number(x[2]) / 2)}%</span></div><p>💡 墨西哥搜索量上升，适合短视频种草。</p><div class="product-actions"><button class="secondary action-btn" data-action="analyze">AI 分析</button><button class="primary action-btn" data-action="add">＋ 入库</button></div></article>`).join('')}</div></section>`;
}

function renderIntegrations() {
  const cfg = getRuntimeConfig();
  const serviceCard = (id, title, sub, fields) => `<article class="integration-card"><div class="integration-head"><div><strong>${title}</strong><p>${sub}</p></div><span class="service-badge ${getServiceConfig(id).baseUrl ? 'ready' : ''}">${getServiceConfig(id).baseUrl ? '已填写' : '待配置'}</span></div><div class="integration-fields">${fields.map(([name, label, type = 'text', placeholder = '']) => `<label>${label}<div class="secret-wrap"><input name="${name}" type="${type}" value="${esc(getServiceConfig(id)[name] || '')}" placeholder="${placeholder}" data-service="${id}" data-field="${name}" />${type === 'password' ? '<button type="button" class="reveal-btn" data-reveal>显示</button>' : ''}</div></label>`).join('')}<div class="integration-actions"><button type="button" class="secondary compact-btn" data-action="test-service" data-service-id="${id}">测试连接</button></div></div></article>`;
  return `<section class="band integrations-page"><div class="band-head"><div><div class="band-title">管理配置</div><div class="band-sub">统一管理视频、文案、声音和 RPA 接口</div></div><span class="status ${cfg.mode === 'direct' ? 'wait' : 'ok'}">${cfg.mode === 'direct' ? '本地直连' : '后端代理'}</span></div><div class="runtime-switch"><div><strong>运行模式</strong><p>${cfg.mode === 'direct' ? '接口从当前浏览器直接调用，适合本机调试。' : '浏览器只连接后端，第三方密钥放在服务器环境变量。'}</p></div><select id="runtimeMode"><option value="direct" ${cfg.mode === 'direct' ? 'selected' : ''}>本地直连模式</option><option value="backend" ${cfg.mode === 'backend' ? 'selected' : ''}>后端代理模式</option></select></div><div class="integration-grid">${serviceCard('seedance', 'Seedance 生图 / 视频', '火山引擎兼容接口，填写视频和图片模型 ID。', [['baseUrl', 'Base URL', 'text', 'https://ark.cn-beijing.volces.com/api/v3'], ['apiKey', 'API Key', 'password', '请输入 Seedance 密钥'], ['videoModel', 'Seedance 模型 ID', 'text', 'doubao-seedance-1-0-pro'], ['imageModel', 'Seedream 模型 ID', 'text', 'doubao-seedream-3-0-t2i']])}${serviceCard('llm', 'LLM 文案（OpenAI 兼容）', '用于商品分析、脚本和分镜生成。', [['baseUrl', 'Base URL', 'text', 'https://api.deepseek.com/v1'], ['apiKey', 'API Key', 'password', 'sk-...'], ['model', '模型名称', 'text', 'deepseek-chat']])}${serviceCard('tts', 'Qwen3-TTS-VC', '将西语旁白转换成配音。', [['baseUrl', 'Base URL', 'text', 'https://dashscope.aliyuncs.com/api/v1'], ['apiKey', 'API Key', 'password', '请输入 TTS 密钥'], ['voice', '音色 / Voice', 'text', 'longxiaochun_v2']])}${serviceCard('rpa', 'EasySpider RPA', '连接本机 RPA 服务执行发布动作。', [['baseUrl', 'Base URL', 'text', 'http://127.0.0.1:8899'], ['apiKey', 'API Key / Token', 'password', '没有可留空']])}</div><section class="integration-card backend-card"><div class="integration-head"><div><strong>后端连接</strong><p>公开网址建议使用后端模式，避免第三方密钥暴露给浏览器。</p></div><span class="service-badge ${cfg.backend.url ? 'ready' : ''}">${cfg.backend.url ? '已填写' : '待配置'}</span></div><label>后端 API 地址<div class="secret-wrap"><input id="backendUrl" value="${esc(cfg.backend.url || '')}" placeholder="https://your-api.onrender.com" /></div></label><div class="integration-actions"><button class="secondary" type="button" data-action="test-backend">测试后端</button></div><div id="backendServices" class="service-status-grid"><div class="api-note">保存地址后测试，可查看商品、LLM、声音、视频、RPA 配置状态。</div></div></section><div class="integration-footer"><button class="secondary" data-action="clear-local-config">清除本机接口配置</button><button class="primary" data-action="save-integrations">保存全部配置</button></div><div class="api-note warning-note">本地直连模式会把 API Key 保存到浏览器本地存储，只适合个人电脑或内网演示；公开部署请切换为后端代理模式。</div></section>`;
}

function renderSettings() { return renderIntegrations(); }

function renderPlaceholder(title, sub) {
  return `<section class="band empty-state"><div class="empty-icon">◇</div><div class="band-title">${title}</div><div class="band-sub">${sub}</div><button class="primary" data-action="settings">去配置接口</button></section>`;
}

function render(viewName) {
  const q = searchInput.value.trim();
  if (viewName === 'products') view.innerHTML = renderProducts(q);
  else if (viewName === 'factory') view.innerHTML = renderFactory();
  else if (viewName === 'calendar') view.innerHTML = renderCalendar();
  else if (viewName === 'radar') view.innerHTML = renderRadar();
  else if (viewName === 'settings' || viewName === 'integrations') view.innerHTML = renderIntegrations();
  else if (viewName === 'orders') view.innerHTML = renderPlaceholder('订单物流', '接入 TikTok Shop 订单接口后，在这里查看订单、履约和异常件。');
  else if (viewName === 'analytics') view.innerHTML = renderPlaceholder('数据洞察', '接入店铺数据后，查看 GMV、转化率、素材表现和市场对比。');
  else if (viewName === 'voice') view.innerHTML = renderPlaceholder('声音工厂', '配置 TTS 服务后，可生成西语、葡语和英语配音。');
  else if (viewName === 'rpa') view.innerHTML = renderPlaceholder('RPA 上架', '授权店铺后，可将商品资料批量同步到平台。');
  else view.innerHTML = renderDashboard();
  const titles = { dashboard: '工作台', radar: '选品雷达', products: '商品中心', calendar: '内容日历', factory: 'AI 视频工厂', orders: '订单物流', analytics: '数据洞察', voice: '声音工厂', rpa: 'RPA 上架', settings: '接口中心', integrations: '接口中心' };
  document.getElementById('pageHeading').textContent = titles[viewName] || '工作台';
  navItems.forEach(btn => btn.classList.toggle('active', btn.dataset.view === viewName));
  document.body.dataset.view = viewName;
}

navItems.forEach(btn => btn.addEventListener('click', () => render(btn.dataset.view)));
menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
document.getElementById('avatarBtn')?.addEventListener('click', () => {
  document.querySelector('.avatar-menu')?.remove();
  const menu = document.createElement('div'); menu.className = 'avatar-menu'; menu.innerHTML = '<strong>本地管理员</strong><button data-logout>退出登录</button><button data-reset>重置本机配置</button>';
  menu.querySelector('[data-logout]').addEventListener('click', () => { menu.remove(); logoutAdmin(); });
  menu.querySelector('[data-reset]').addEventListener('click', () => { localStorage.removeItem(authKey); localStorage.removeItem(`${authKey}-session`); localStorage.removeItem(runtimeConfigKey); menu.remove(); renderAuthGate('setup'); });
  document.body.appendChild(menu); const rect = document.getElementById('avatarBtn').getBoundingClientRect(); menu.style.top = `${rect.bottom + 8}px`; menu.style.right = `${Math.max(12, window.innerWidth - rect.right)}px`;
});
document.addEventListener('click', (e) => {
  const menu = document.querySelector('.avatar-menu');
  if (menu && !menu.contains(e.target) && !e.target.closest('#avatarBtn')) menu.remove();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') document.querySelector('.avatar-menu')?.remove(); });
searchInput.addEventListener('input', () => {
  if (document.body.dataset.view === 'products') render('products');
});

document.addEventListener('click', (e) => {
  const action = e.target.closest('[data-action]')?.dataset.action;
  if (action === 'settings' || action === 'open-integrations') { render('integrations'); sidebar.classList.remove('open'); return; }
  if (action === 'sync-products') { syncProducts(); return; }
  if (action === 'produce') {
    const id = e.target.closest('[data-product-id]').dataset.productId;
    const product = syncedProducts.find(p => String(p.id || p.name) === id);
    if (product) openProductionModal(product);
    return;
  }
  if (action === 'view-run') { openRunResult(e.target.closest('[data-run-id]').dataset.runId); return; }
  if (action === 'publish-run') { publishRun(e.target.dataset.runId); return; }
  if (action === 'test-integration') { testIntegration(e.target.dataset.integrationId); return; }
  if (action === 'test-service') { testService(e.target.dataset.serviceId); return; }
  if (action === 'test-backend') { testBackend(); return; }
  if (action === 'sync') { runApiAction('/api/products/sync', {}, '趋势数据已刷新'); return; }
  if (action === 'analyze') { runApiAction('/api/products/analyze', {}, 'AI 分析任务已加入队列'); return; }
  if (action === 'add') { runApiAction('/api/products', { action: 'add' }, '商品已加入待入库列表'); return; }
  if (action === 'clear-config' || action === 'clear-local-config') { localStorage.removeItem(runtimeConfigKey); localStorage.removeItem('latam-backend-config'); render('integrations'); notify('接口配置已清除'); return; }
  if (action === 'save-integrations') { saveIntegrations(); return; }
  if (action === 'new-video') {
    const modal = document.createElement('div');
    modal.className = 'modal-mask open';
    modal.innerHTML = `
      <div class="modal">
        <div class="band-title">创建视频任务</div>
        <input placeholder="视频标题，例如：户外露营椅卖点展示" />
        <textarea rows="4" placeholder="输入商品卖点、风格、时长和语言"></textarea>
        <div class="modal-actions">
          <button class="secondary" data-close>取消</button>
          <button class="primary" data-close>保存任务</button>
        </div>
      </div>`;
    modal.addEventListener('click', ev => { if (ev.target === modal || ev.target.hasAttribute('data-close')) modal.remove(); });
    document.body.appendChild(modal);
  }
});

document.addEventListener('change', e => {
  if (e.target.id === 'runtimeMode') {
    const cfg = getRuntimeConfig(); cfg.mode = e.target.value; localStorage.setItem(runtimeConfigKey, JSON.stringify(cfg)); render('integrations'); notify(`已切换为${e.target.value === 'direct' ? '本地直连' : '后端代理'}模式`);
  }
});

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-reveal]'); if (!btn) return;
  const input = btn.parentElement.querySelector('input'); input.type = input.type === 'password' ? 'text' : 'password'; btn.textContent = input.type === 'password' ? '显示' : '隐藏';
});

document.addEventListener('submit', e => {
  if (e.target.id === 'backendForm') {
    e.preventDefault();
    localStorage.setItem('latam-backend-config', JSON.stringify(Object.fromEntries(new FormData(e.target).entries())));
    notify('后端地址已保存'); render('integrations'); return;
  }
  if (e.target.matches('.integration-form')) {
    e.preventDefault();
    const all = JSON.parse(localStorage.getItem('latam-integrations') || '{}');
    all[e.target.dataset.integration] = Object.fromEntries(new FormData(e.target).entries());
    localStorage.setItem('latam-integrations', JSON.stringify(all));
    updateEngineStatus(); notify('接口配置已保存'); render('integrations'); return;
  }
  if (e.target.id === 'productionForm') {
    e.preventDefault();
    const product = syncedProducts.find(p => String(p.id || p.name) === e.target.dataset.productId);
    const mode = new FormData(e.target).get('mode');
    const assets = product?.media || [];
    e.target.closest('.modal-mask').remove();
    executeProduction(product, mode, assets);
  }
});

function notify(message) {
  const toast = document.createElement('div');
  toast.className = 'toast'; toast.textContent = message; document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

async function runApiAction(path, body, successMessage) {
  const cfg = JSON.parse(localStorage.getItem('latam-api-config') || '{}');
  if (!cfg.baseUrl) { notify(`${successMessage}（当前为演示数据）`); return; }
  notify('正在请求后端接口…');
  try {
    const response = await fetch(`${cfg.baseUrl.replace(/\/$/, '')}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    notify(`${successMessage}（后端已响应）`);
  } catch (error) {
    notify(`接口请求失败：${error.message}`);
  }
}

function getIntegrations() { return JSON.parse(localStorage.getItem('latam-integrations') || '{}'); }
function updateEngineStatus() {
  const cfg = getRuntimeConfig(); const el = document.getElementById('engineStatus');
  const count = ['seedance', 'llm', 'tts', 'rpa'].filter(id => cfg[id]?.baseUrl && cfg[id]?.apiKey).length;
  if (el) el.textContent = `${count}/4 服务已配置`;
}

async function syncProducts() {
  if (getRuntimeMode() === 'direct') { notify('本地直连模式暂未配置商品数据源，请切换后端模式或补充商品接口'); render('integrations'); return; }
  const backend = getBackendUrl();
  if (!backend) { notify('请先在接口中心配置后端地址'); render('integrations'); return; }
  notify('正在同步真实商品…');
  try {
    const response = await fetch(`${backend}/api/products`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const items = Array.isArray(payload) ? payload : payload.products || payload.data || [];
    if (!items.length) throw new Error('接口没有返回商品数组');
    syncedProducts = items.map((p, i) => ({ id: p.id || p.product_id || `remote-${i}`, name: p.name || p.title || '未命名商品', cat: p.cat || p.category || '未分类', sales: p.sales ?? p.orders ?? '-', revenue: p.revenue ?? p.gmv ?? '-', sellPrice: p.sellPrice ?? p.price ?? p.sale_price ?? '-', cost: p.cost ?? p.purchase_price ?? '-', profit: p.profit ?? '-', margin: p.margin ?? p.profit_margin ?? '-', stock: p.stock ?? p.inventory ?? '-', state: p.state || '正常', media: p.media || p.images || p.image_urls || p.videos || [], raw: p }));
    localStorage.setItem('latam-products', JSON.stringify(syncedProducts)); render('products'); notify(`已同步 ${items.length} 个真实商品`);
  } catch (error) { notify(`同步失败：${error.message}`); }
}

function getBackendUrl() { return (getRuntimeConfig().backend?.url || JSON.parse(localStorage.getItem('latam-backend-config') || '{}').url || '').replace(/\/$/, ''); }
async function testBackend() {
  const input = document.querySelector('#backendUrl'); const url = (input?.value || getBackendUrl()).replace(/\/$/, '');
  if (!url) { notify('请先填写后端地址'); return; }
  notify('正在测试后端…');
  try {
    const response = await fetch(`${url}/health`); const data = await response.json(); if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    const target = document.getElementById('backendServices');
    if (target) target.innerHTML = Object.entries(data.services || {}).map(([key, ok]) => `<div class="service-status"><strong>${key.toUpperCase()}</strong><span class="status ${ok ? 'ok' : 'wait'}">${ok ? '已配置' : '待配置'}</span></div>`).join('');
    notify(`后端连接成功 · ${data.market || 'MX'}`);
  } catch (error) { notify(`后端连接失败：${error.message}`); }
}

function saveIntegrations() {
  const cfg = getRuntimeConfig();
  document.querySelectorAll('.integration-card input[data-service]').forEach(input => { cfg[input.dataset.service] = cfg[input.dataset.service] || {}; cfg[input.dataset.service][input.dataset.field] = input.value.trim(); });
  const backendUrl = document.querySelector('#backendUrl')?.value.trim(); if (backendUrl !== undefined) cfg.backend.url = backendUrl;
  localStorage.setItem(runtimeConfigKey, JSON.stringify(cfg)); localStorage.setItem('latam-backend-config', JSON.stringify({ url: cfg.backend.url })); updateEngineStatus(); render('integrations'); notify('全部接口配置已保存');
}

async function testService(id) {
  const cfg = getServiceConfig(id); if (!cfg.baseUrl) { notify('请先填写 Base URL'); return; }
  notify(`正在测试 ${id.toUpperCase()}…`);
  try {
    const response = await fetch(cfg.baseUrl.replace(/\/$/, ''), { method: 'OPTIONS', headers: authHeaders(cfg) });
    notify(response.ok || response.status < 500 ? `${id.toUpperCase()} 地址可访问` : `${id.toUpperCase()} 返回 HTTP ${response.status}`);
  } catch (error) { notify(`${id.toUpperCase()} 连接失败：${error.message}`); }
}

function testIntegration(id) {
  const cfg = getIntegrations()[id];
  if (!cfg?.url) { notify('请先填写接口地址'); return; }
  notify(`正在测试 ${integrationDefinitions.find(x => x.id === id)?.name || id}…`);
  fetch(cfg.url, { method: 'OPTIONS', headers: cfg.key ? { Authorization: cfg.key } : {} }).then(r => notify(r.ok ? '连接成功' : `连接返回 HTTP ${r.status}`)).catch(e => notify(`连接失败：${e.message}`));
}

function openProductionModal(product) {
  const modal = document.createElement('div'); modal.className = 'modal-mask open';
  const mediaCount = product.media?.length || 0;
  modal.innerHTML = `<div class="modal production-modal"><div class="band-title">一键生产：${esc(product.name)}</div><div class="small">商品资料和素材会随同步结果自动带入，不需要你手动复制或上传。</div><div class="auto-media"><strong>自动素材</strong><span>${mediaCount ? `已找到 ${mediaCount} 个商品图片/视频` : '当前接口没有返回素材，将由后端素材服务自动抓取'}</span></div><label class="mode-option"><input type="radio" name="mode" value="assets" checked /> 素材库混剪 <span>使用商品自动素材和模板完成混剪</span></label><label class="mode-option"><input type="radio" name="mode" value="ai" /> AI 直接生成视频 <span>根据分镜调用视频模型生成</span></label><label>目标语言<select name="language"><option>西班牙语（墨西哥）</option><option>英语</option></select></label><div class="modal-actions"><button class="secondary" data-close>取消</button><button class="primary" type="submit" form="productionForm">开始自动生产</button></div><form id="productionForm" data-product-id="${esc(product.id || product.name)}"></form></div>`;
  const form = modal.querySelector('#productionForm');
  form.innerHTML = '<input type="hidden" name="mode" value="assets"><input type="hidden" name="language" value="西班牙语（墨西哥）">';
  modal.querySelectorAll('input[name="mode"]').forEach(input => input.addEventListener('change', () => form.querySelector('[name="mode"]').value = input.value));
  modal.querySelector('select[name="language"]').addEventListener('change', e => form.querySelector('[name="language"]').value = e.target.value);
  modal.addEventListener('click', ev => { if (ev.target === modal || ev.target.hasAttribute('data-close')) modal.remove(); }); document.body.appendChild(modal);
}

async function executeProduction(product, mode, assets) {
  if (getRuntimeMode() === 'direct') { return executeDirectProduction(product, mode, assets); }
  const backend = getBackendUrl();
  if (!backend) { notify('请先在接口中心配置后端地址'); render('integrations'); return; }
  notify('正在创建后端生产任务…');
  try {
    const res = await fetch(`${backend}/api/production`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ product: { ...product, media: assets }, mode, language: 'es-MX' }) });
    const task = await res.json(); if (!res.ok) throw new Error(task.error || `HTTP ${res.status}`);
    upsertRun(task); render('factory'); notify('任务已创建，正在后台自动生产'); pollRun(task.id, backend);
  } catch (error) { notify(`任务创建失败：${error.message}`); }
}

async function executeDirectProduction(product, mode, assets) {
  const llm = getServiceConfig('llm');
  if (!llm.baseUrl || !llm.apiKey) { notify('本地直连模式请先配置 LLM 的 Base URL 和 API Key'); render('integrations'); return; }
  notify('正在调用 LLM 生成商品分析与脚本…');
  const endpoint = /chat\/completions$/.test(llm.baseUrl) ? llm.baseUrl : `${llm.baseUrl.replace(/\/$/, '')}/chat/completions`;
  const prompt = `请为商品${product?.name || '未命名商品'}生成墨西哥西班牙语短视频内容。输出商品分析、15秒脚本和三段分镜，严格使用已知商品信息，不要编造参数。`;
  try {
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders(llm) }, body: JSON.stringify({ model: llm.model || 'deepseek-chat', messages: [{ role: 'user', content: prompt }], temperature: 0.4 }) });
    const data = await res.json(); if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`);
    const content = data.choices?.[0]?.message?.content || JSON.stringify(data);
    const task = { id: `direct-${Date.now()}`, productName: product?.name || '未命名商品', mode, status: '已完成', analysis: content, script: content, storyboard: [], updatedAt: Date.now(), media: assets };
    upsertRun(task); render('factory'); notify('LLM 内容已生成，可继续配置 TTS/视频接口');
  } catch (error) { notify(`直连生成失败：${error.message}`); }
}

function upsertRun(task) {
  const run = { ...task, productName: task.productName || task.product?.name || '未命名商品', updatedAt: new Date(task.updatedAt || Date.now()).toLocaleString() };
  const index = productionRuns.findIndex(item => item.id === run.id);
  if (index >= 0) productionRuns[index] = run; else productionRuns.unshift(run);
  saveRuns();
}

async function pollRun(id, backend, tries = 0) {
  if (tries > 120) return;
  try {
    const response = await fetch(`${backend}/api/production/${id}`); const task = await response.json(); if (!response.ok) throw new Error(task.error || `HTTP ${response.status}`);
    upsertRun(task); if (document.body.dataset.view === 'factory') render('factory');
    if (!['已完成', '失败', '等待声音或视频服务配置', '已提交发布'].includes(task.status)) setTimeout(() => pollRun(id, backend, tries + 1), 3000);
  } catch (error) { notify(`任务状态获取失败：${error.message}`); }
}

function saveRuns() { localStorage.setItem('latam-production-runs', JSON.stringify(productionRuns)); }
function openRunResult(id) {
  const run = productionRuns.find(x => x.id === id); if (!run) return;
  const modal = document.createElement('div'); modal.className = 'modal-mask open'; modal.innerHTML = `<div class="modal result-modal"><div class="band-title">${esc(run.productName)} · ${esc(run.status)}</div><h4>商品分析</h4><pre>${esc(run.analysis || run.error || '暂无结果')}</pre><h4>脚本</h4><pre>${esc(run.script || '暂无结果')}</pre><h4>分镜</h4><pre>${esc(JSON.stringify(run.storyboard || [], null, 2))}</pre>${run.videoUrl ? `<div class="modal-actions"><a class="primary" href="${esc(run.videoUrl)}" target="_blank">打开视频结果</a><button class="primary" data-action="publish-run" data-run-id="${esc(run.id)}">提交 RPA 发布</button></div>` : ''}<div class="modal-actions"><button class="secondary" data-close>关闭</button></div></div>`; modal.addEventListener('click', ev => { if (ev.target === modal || ev.target.hasAttribute('data-close')) modal.remove(); }); document.body.appendChild(modal);
}

async function publishRun(id) {
  const backend = getBackendUrl(); if (!backend) { notify('请先配置后端地址'); return; }
  try { const response = await fetch(`${backend}/api/production/${id}/publish`, { method: 'POST' }); const data = await response.json(); if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`); upsertRun(data); render('factory'); notify('已提交 RPA 发布'); } catch (error) { notify(`发布失败：${error.message}`); }
}

initAuth();
if (localStorage.getItem(`${authKey}-session`) === '1') render('dashboard');
