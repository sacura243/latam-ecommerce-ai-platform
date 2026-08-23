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
      { id: 'ORD-9286', buyer: 'Mariana L.', dest: '里约热内卢（BR）', product: '护肤保湿精华套装', amount: '$32', status: '待发货' },
      { id: 'ORD-9285', buyer: 'Diego F.', dest: '蒙特雷（MX）', product: '蓝牙耳机 TWS Pro', amount: '$26.90', status: '运输中' },
      { id: 'ORD-9284', buyer: 'Lucía R.', dest: '圣地亚哥（CL）', product: '空气炸锅 5.5L', amount: '$59.90', status: '已签收' },
      { id: 'ORD-9283', buyer: 'João S.', dest: '圣保罗（BR）', product: 'USB-C 65W快充头', amount: '$18.50', status: '异常件' },
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
    markets: [
      { name: '墨西哥', value: '$83.89 · 3单' },
      { name: '巴西', value: '$50.50 · 2单' },
      { name: '智利', value: '$59.90 · 1单' },
    ],
    accounts: [
      { handle: '@outdoor_mx', meta: '墨西哥 · 48.2K粉', status: '未授权' },
      { handle: '@beauty_mx', meta: '墨西哥 · 23.1K粉', status: '未授权' },
      { handle: '@tech_brasil', meta: '巴西 · 67.4K粉', status: '已授权' },
      { handle: '@home_chile', meta: '智利 · 12.8K粉', status: '未授权' },
    ],
  },
  products: [
    { name: '蓝牙耳机 TWS Pro', cat: '3C', sales: '312', revenue: '$8,393', stock: '37', state: '预警' },
    { name: 'USB-C 65W快充头', cat: '3C', sales: '243', revenue: '$4,496', stock: '89', state: '正常' },
    { name: '户外便携露营椅', cat: '户外', sales: '184', revenue: '$4,598', stock: '326', state: '正常' },
    { name: '护肤保湿精华套装', cat: '美妆', sales: '167', revenue: '$5,344', stock: '512', state: '正常' },
    { name: '空气炸锅 5.5L', cat: '家电', sales: '98', revenue: '$5,870', stock: '64', state: '预警' },
    { name: '户外折叠桌椅套装', cat: '户外', sales: '76', revenue: '$6,004', stock: '203', state: '正常' },
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
        <div class="panel-head"><div><div class="panel-title">近 7 日 GMV</div><div class="panel-sub">三国汇总 (USD)</div></div><button class="inline-btn">数据洞察 →</button></div>
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
        <div class="panel-head"><div><div class="panel-title">市场分布（三国）</div><div class="panel-sub">订单数 × 销售额</div></div></div>
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
  const items = demoData.products.filter(p => `${p.name} ${p.cat} ${p.state}`.toLowerCase().includes(query.toLowerCase()));
  return `
    <section class="band">
      <div class="band-head"><div><div class="band-title">商品中心</div><div class="band-sub">销售、库存和预警信息统一管理</div></div><button class="inline-btn">同步商品</button></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>商品</th><th>类目</th><th>销量</th><th>销售额</th><th>库存</th><th>状态</th></tr></thead>
          <tbody>
            ${items.map((p, i) => `<tr class="table-row"><td>${i + 1}</td><td>${esc(p.name)}</td><td>${esc(p.cat)}</td><td>${esc(p.sales)}</td><td>${esc(p.revenue)}</td><td>${esc(p.stock)}</td><td><span class="status ${p.state === '预警' ? 'wait' : 'ok'}">${esc(p.state)}</span></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFactory() {
  return `
    <section class="factory-grid">
      <div class="panel">
        <div class="panel-head"><div><div class="panel-title">AI 视频工厂</div><div class="panel-sub">脚本、配音、混剪、字幕、批量发布</div></div><button class="inline-btn" data-action="new-video">+ 批量生成视频</button></div>
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
          <div class="content-card"><strong>4. 生成输出</strong><div class="meta">封面、字幕、配音、成片</div></div>
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
  return `<section class="band"><div class="band-head"><div><div class="band-title">选品雷达</div><div class="band-sub">拉美热销趋势 · AI 热度评分 · 一键入库</div></div><button class="inline-btn" data-action="sync">↻ 同步趋势</button></div><div class="grid-products">${items.map(x => `<article class="product-card"><div class="product-title">${esc(x[0])}<span class="score">🔥 ${x[2]}</span></div><div class="tag-row"><span class="tag">${x[1]}</span><span class="tag green">${x[4]}</span><span class="tag cyan">↗ +${Math.round(Number(x[2]) / 3)}%</span></div><strong class="profit">预计净利 ${x[3]}</strong><p>💡 拉美市场需求增长，搜索量持续上升，适合短视频种草。</p><div class="product-actions"><button class="secondary action-btn" data-action="analyze">AI 分析</button><button class="primary action-btn" data-action="add">＋ 入库</button></div></article>`).join('')}</div></section>`;
}

function renderSettings() {
  const cfg = JSON.parse(localStorage.getItem('latam-api-config') || '{}');
  return `<section class="band settings-panel"><div class="band-head"><div><div class="band-title">管理配置</div><div class="band-sub">连接你的后端代理后，按钮才会调用真实平台 API。密钥只保存在当前浏览器。</div></div><span class="status ${cfg.baseUrl ? 'ok' : 'wait'}">${cfg.baseUrl ? '已配置' : '演示模式'}</span></div><form id="settingsForm" class="settings-form"><label>后端 API 地址<input name="baseUrl" value="${esc(cfg.baseUrl || '')}" placeholder="https://api.example.com" /></label><label>LLM API Key<input name="llmKey" type="password" value="${esc(cfg.llmKey || '')}" placeholder="sk-..." /></label><label>TikTok Shop 店铺 ID<input name="shopId" value="${esc(cfg.shopId || '')}" placeholder="授权后填写" /></label><div class="modal-actions"><button class="secondary" type="button" data-action="clear-config">清除配置</button><button class="primary" type="submit">保存并测试连接</button></div></form><div class="api-note">当前页面内置演示数据，可先体验界面；真实同步需要你自己的后端代理，避免把密钥暴露在前端。</div></section>`;
}

function renderPlaceholder(title, sub) {
  return `<section class="band empty-state"><div class="empty-icon">◇</div><div class="band-title">${title}</div><div class="band-sub">${sub}</div><button class="primary" data-action="settings">去配置接口</button></section>`;
}

function render(viewName) {
  const q = searchInput.value.trim();
  if (viewName === 'products') view.innerHTML = renderProducts(q);
  else if (viewName === 'factory') view.innerHTML = renderFactory();
  else if (viewName === 'calendar') view.innerHTML = renderCalendar();
  else if (viewName === 'radar') view.innerHTML = renderRadar();
  else if (viewName === 'settings') view.innerHTML = renderSettings();
  else if (viewName === 'orders') view.innerHTML = renderPlaceholder('订单物流', '接入 TikTok Shop 订单接口后，在这里查看订单、履约和异常件。');
  else if (viewName === 'analytics') view.innerHTML = renderPlaceholder('数据洞察', '接入店铺数据后，查看 GMV、转化率、素材表现和市场对比。');
  else if (viewName === 'voice') view.innerHTML = renderPlaceholder('声音工厂', '配置 TTS 服务后，可生成西语、葡语和英语配音。');
  else if (viewName === 'rpa') view.innerHTML = renderPlaceholder('RPA 上架', '授权店铺后，可将商品资料批量同步到平台。');
  else view.innerHTML = renderDashboard();
  const titles = { dashboard: '工作台', radar: '选品雷达', products: '商品中心', calendar: '内容日历', factory: 'AI 视频工厂', orders: '订单物流', analytics: '数据洞察', voice: '声音工厂', rpa: 'RPA 上架', settings: '管理配置' };
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
  if (action === 'settings') { render('settings'); sidebar.classList.remove('open'); return; }
  if (action === 'sync') { runApiAction('/api/products/sync', {}, '趋势数据已刷新'); return; }
  if (action === 'analyze') { runApiAction('/api/products/analyze', {}, 'AI 分析任务已加入队列'); return; }
  if (action === 'add') { runApiAction('/api/products', { action: 'add' }, '商品已加入待入库列表'); return; }
  if (action === 'clear-config') { localStorage.removeItem('latam-api-config'); render('settings'); notify('接口配置已清除'); return; }
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
  if (e.target.id !== 'settingsForm') return;
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  localStorage.setItem('latam-api-config', JSON.stringify(data));
  const status = document.getElementById('engineStatus');
  if (status) status.textContent = data.baseUrl ? '已配置' : '演示数据';
  notify(data.baseUrl ? '配置已保存，连接测试将在后端完成' : '已保存为演示模式');
  render('settings');
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

render('dashboard');
