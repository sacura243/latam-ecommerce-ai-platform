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
        <div class="table-wrap">
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
        <div class="cards">
          ${d.gmv.map(([day,val]) => `<div class="content-card"><strong>${esc(day)}</strong><div class="meta">${esc(val)}</div></div>`).join('')}
          <div class="content-card"><strong>日均 GMV</strong><div class="meta">$10,492 / 天</div></div>
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
  const saved = JSON.parse(localStorage.getItem('latam-integrations') || '{}');
  return `<section class="band"><div class="band-head"><div><div class="band-title">接口中心</div><div class="band-sub">每类服务单独配置、测试和替换。密钥仅保存在当前浏览器。</div></div><span class="status wait">${Object.keys(saved).length}/5 已配置</span></div><div class="integration-grid">${integrationDefinitions.map(def => { const c = saved[def.id] || {}; return `<article class="integration-card"><div class="integration-head"><div><strong>${def.name}</strong><p>${def.description}</p></div><span class="status ${c.url ? 'ok' : 'wait'}">${c.url ? '已配置' : '未配置'}</span></div><form class="integration-form" data-integration="${def.id}">${def.fields.map(([key,label,placeholder]) => `<label>${label}<input name="${key}" type="${key === 'key' ? 'password' : 'text'}" value="${esc(c[key] || '')}" placeholder="${placeholder}" /></label>`).join('')}<div class="integration-actions"><button class="secondary" type="button" data-action="test-integration" data-integration-id="${def.id}">测试连接</button><button class="primary" type="submit">保存接口</button></div></form></article>`; }).join('')}</div><div class="api-note">推荐所有第三方密钥都放在你自己的后端代理中，前端只保存接口地址；当前配置仅用于演示和开发测试。</div></section>`;
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
  if (action === 'test-integration') { testIntegration(e.target.dataset.integrationId); return; }
  if (action === 'sync') { runApiAction('/api/products/sync', {}, '趋势数据已刷新'); return; }
  if (action === 'analyze') { runApiAction('/api/products/analyze', {}, 'AI 分析任务已加入队列'); return; }
  if (action === 'add') { runApiAction('/api/products', { action: 'add' }, '商品已加入待入库列表'); return; }
  if (action === 'clear-config') { localStorage.removeItem('latam-integrations'); render('integrations'); notify('接口配置已清除'); return; }
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

document.addEventListener('submit', e => {
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
  const saved = getIntegrations(); const el = document.getElementById('engineStatus');
  if (el) el.textContent = `${Object.keys(saved).length}/5 已配置`;
}

async function syncProducts() {
  const cfg = getIntegrations().product;
  if (!cfg?.url) { notify('请先在接口中心配置商品接口'); render('integrations'); return; }
  notify('正在同步真实商品…');
  try {
    const response = await fetch(cfg.url, { headers: cfg.key ? { Authorization: cfg.key } : {} });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const items = Array.isArray(payload) ? payload : payload.products || payload.data || [];
    if (!items.length) throw new Error('接口没有返回商品数组');
    syncedProducts = items.map((p, i) => ({ id: p.id || p.product_id || `remote-${i}`, name: p.name || p.title || '未命名商品', cat: p.cat || p.category || '未分类', sales: p.sales ?? p.orders ?? '-', revenue: p.revenue ?? p.gmv ?? '-', sellPrice: p.sellPrice ?? p.price ?? p.sale_price ?? '-', cost: p.cost ?? p.purchase_price ?? '-', profit: p.profit ?? '-', margin: p.margin ?? p.profit_margin ?? '-', stock: p.stock ?? p.inventory ?? '-', state: p.state || '正常', media: p.media || p.images || p.image_urls || p.videos || [], raw: p }));
    localStorage.setItem('latam-products', JSON.stringify(syncedProducts)); render('products'); notify(`已同步 ${items.length} 个真实商品`);
  } catch (error) { notify(`同步失败：${error.message}`); }
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
  const run = { id: `run-${Date.now()}`, productName: product.name, mode, status: '分析中', updatedAt: new Date().toLocaleString(), analysis: '', script: '', storyboard: '', audioUrl: '', videoUrl: '' };
  productionRuns.unshift(run); saveRuns(); render('factory'); notify('已创建任务，正在分析商品…');
  const llm = getIntegrations().llm;
  try {
    if (!llm?.url) throw new Error('请先配置 LLM 脚本接口');
    const prompt = `请分析这个电商商品并输出严格 JSON，字段为 analysis、script、storyboard。商品：${JSON.stringify(product.raw || product)}。script 是 30 秒短视频旁白，storyboard 是包含 shot、visual、voiceover、duration 的数组。`;
    const res = await fetch(llm.url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(llm.key ? { Authorization: llm.key } : {}) }, body: JSON.stringify({ model: llm.model || 'deepseek-chat', messages: [{ role: 'user', content: prompt }], response_format: { type: 'json_object' } }) });
    if (!res.ok) throw new Error(`LLM HTTP ${res.status}`);
    const data = await res.json(); const content = data.choices?.[0]?.message?.content || data.output || data;
    const parsed = typeof content === 'string' ? JSON.parse(content.replace(/^```json\s*|\s*```$/g, '')) : content;
    Object.assign(run, { status: '脚本已生成', analysis: parsed.analysis || '', script: parsed.script || '', storyboard: parsed.storyboard || [] }); saveRuns(); render('factory'); notify('脚本和分镜已生成，继续制作声音与视频…');
    await produceMedia(run, assets);
  } catch (error) { run.status = '失败'; run.error = error.message; saveRuns(); render('factory'); notify(`生产暂停：${error.message}`); }
}

async function produceMedia(run, assets) {
  const tts = getIntegrations().tts; const video = getIntegrations().video;
  if (!tts?.url || !video?.url) { run.status = '脚本已生成'; run.error = '请在接口中心配置声音和视频接口后继续'; saveRuns(); render('factory'); return; }
  run.status = '生成配音'; saveRuns(); render('factory');
  const audioRes = await fetch(tts.url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(tts.key ? { Authorization: tts.key } : {}) }, body: JSON.stringify({ text: run.script, voice: tts.model }) });
  if (!audioRes.ok) throw new Error(`TTS HTTP ${audioRes.status}`); const audio = await audioRes.json(); run.audioUrl = audio.url || audio.audio_url || '';
  run.status = '生成视频'; saveRuns(); render('factory');
  const videoRes = await fetch(video.url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(video.key ? { Authorization: video.key } : {}) }, body: JSON.stringify({ mode: run.mode, storyboard: run.storyboard, script: run.script, audioUrl: run.audioUrl, assets: assets.map(x => typeof x === 'string' ? x : x.url || x.src || x.name).filter(Boolean) }) });
  if (!videoRes.ok) throw new Error(`视频 HTTP ${videoRes.status}`); const result = await videoRes.json(); run.videoUrl = result.url || result.video_url || result.task_id || ''; run.status = '已完成'; saveRuns(); render('factory'); notify('视频已生成，可进入发布流程');
}

function saveRuns() { localStorage.setItem('latam-production-runs', JSON.stringify(productionRuns)); }
function openRunResult(id) {
  const run = productionRuns.find(x => x.id === id); if (!run) return;
  const modal = document.createElement('div'); modal.className = 'modal-mask open'; modal.innerHTML = `<div class="modal result-modal"><div class="band-title">${esc(run.productName)} · ${esc(run.status)}</div><h4>商品分析</h4><pre>${esc(run.analysis || run.error || '暂无结果')}</pre><h4>脚本</h4><pre>${esc(run.script || '暂无结果')}</pre><h4>分镜</h4><pre>${esc(JSON.stringify(run.storyboard || [], null, 2))}</pre>${run.videoUrl ? `<a class="primary" href="${esc(run.videoUrl)}" target="_blank">打开视频结果</a>` : ''}<div class="modal-actions"><button class="secondary" data-close>关闭</button></div></div>`; modal.addEventListener('click', ev => { if (ev.target === modal || ev.target.hasAttribute('data-close')) modal.remove(); }); document.body.appendChild(modal);
}

render('dashboard');
