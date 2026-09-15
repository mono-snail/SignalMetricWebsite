# SignalMetric Website

SignalMetric 的公开营销、测量指南、支持与隐私网站。

## 页面

- `/`：产品首页
- `/measurements/`：31 项专业音频指标指南
- `/support/`：FAQ 与 Monoware Support API 反馈表单
- `/privacy/`：App Store 公开隐私政策

默认语言为英文，通过 `/zh-CN/`、`/zh-Hant/`、`/ja/`、`/ko/` 提供简体中文、繁体中文、日文和韩文。旧的 `?lang=` 链接仍然兼容。

首页现已按 SignalMetric 2.0 的实际工作流组织：发布前检查、环境噪声、录制前检查和专业仪表。页面截图来自当前 iOS 模拟器构建，源文件位于 `public/images/v2/`；各语言首页使用 `public/images/v2/<locale>/` 下的本地化截图。

首屏直接展示 `www.monoware.app` 主站入口；顶部导航、移动菜单和页脚也提供主站回链。下方产品矩阵区继续跳转到 `https://monoware.app/#products` 浏览其他 App。Android 入口仅展示“即将推出”状态，在公开商店页面就绪前不配置 URL。

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
VITE_APP_STORE_URL=https://apps.apple.com/app/signalmetric/id6797239928
```

未提供 `VITE_APP_STORE_URL` 时，使用同一真实商店地址作为默认值，不会隐藏下载入口。

构建会生成 20 个完整静态页面、语言标记及 sitemap，并自动验证 iOS 下载入口、无链接的 Android 待发布状态、MonoWare 产品入口、31 项指标正文与导出隐私说明。未知地址通过独立 `404.html` 返回，不能配置统一首页回退。

浏览器验收：启动本地服务后执行 `node scripts/verify-browser.mjs`，首次使用先运行 `npx playwright install chromium`。

生产发布参数见 [`docs/release-config.md`](docs/release-config.md)。
