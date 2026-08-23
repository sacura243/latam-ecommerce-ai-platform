# 后端代理服务

## 本地运行

```powershell
cd server
Copy-Item .env.example .env
$env:PRODUCT_SOURCE_URL = "..."
$env:LLM_API_URL = "..."
$env:LLM_API_KEY = "..."
npm start
```

健康检查：`GET http://localhost:8787/health`

前端只需要配置后端地址，例如 `https://your-service.onrender.com`。

## 服务端环境变量

完整字段见 `.env.example`。第三方密钥只放在部署平台的 Environment Variables 中，不要写入 GitHub。

## 接口约定

商品源 `PRODUCT_SOURCE_URL` 可以返回数组，也可以返回 `{ "products": [] }` 或 `{ "data": [] }`。每个商品建议包含：

```json
{
  "id": "sku-1",
  "name": "商品名称",
  "category": "3C",
  "price": 26.9,
  "purchase_price": 12.4,
  "inventory": 37,
  "images": ["https://.../cover.jpg"],
  "videos": ["https://.../demo.mp4"]
}
```

LLM 使用 OpenAI 兼容的 Chat Completions 接口。TTS 和视频服务由后端按统一 JSON 转发。视频返回 `url`/`video_url` 表示完成，也可以先返回 `task_id`，再由后续服务扩展轮询。

## Render 部署

仓库根目录已经提供 `render.yaml`。创建 Web Service 时选择该仓库，补齐 `.env.example` 中的环境变量即可。
