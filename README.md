# SignalMetric Website

SignalMetric 的公开营销、测量指南、支持与隐私网站。

## 页面

- `/`：产品首页
- `/measurements/`：31 项专业音频指标指南
- `/support/`：FAQ 与 Monoware Support API 反馈表单
- `/privacy/`：App Store 公开隐私政策

默认语言为英文，通过 `?lang=zh-CN`、`?lang=ja`、`?lang=ko` 提供简体中文、日文和韩文。

## 本地开发

```bash
npm install
npm run dev
```

## 质量检查

```bash
npm run check
npm run lint
npm run test
npm run build
```

## 发布变量

```text
VITE_PUBLIC_SITE_URL=https://signalmetric.monoware.app
VITE_APP_STORE_URL=https://apps.apple.com/...
```

未提供 `VITE_APP_STORE_URL` 时，下载入口会显示为 `Coming to the App Store`，不会链接到其他产品。

生产静态托管必须为 React Router 配置 SPA fallback，并确保 `/support/`、`/privacy/` 和 `/measurements/` 直接刷新时仍返回 `index.html`。

生产发布参数见 [`docs/release-config.md`](docs/release-config.md)。
