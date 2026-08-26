# SignalMetric Website Release Configuration

```text
GitHub repository: mono-snail/SignalMetricWebsite
Local path: SignalMetricWebsite
Git remote: origin
Production branch: main
Package manager: npm
Install command: npm ci
Lint command: npm run lint
Type-check command: npm run check
Test command: npm test
Build command: npm run build
Output directory: dist
Cloudflare Pages project: signalmetric-site
Canonical domain: https://signalmetric.monoware.app/
Pages Functions: none
Resource bindings: none
Route handling: prerendered HTML for public routes plus a static `404.html`
```

## Production Variables

Configure these values in the Cloudflare Pages Production environment:

```text
VITE_PUBLIC_SITE_URL=https://signalmetric.monoware.app
VITE_APP_STORE_URL=<public App Store URL when available>
```

`VITE_APP_STORE_URL` is optional before the App Store listing is public. When
it is absent, download actions display a non-clickable coming-soon state.

## Cloudflare Pages

Create the project through Git integration. Use the repository root, production
branch `main`, build command `npm run build`, and output directory `dist`.
Associate `signalmetric.monoware.app` only after the first `*.pages.dev`
production deployment succeeds.

The build prerenders `/measurements/`, `/support/`, and `/privacy/` into
route-specific HTML files with unique metadata and structured data. The static
`404.html` prevents unknown URLs from being served as soft-404 copies of the
home page.
