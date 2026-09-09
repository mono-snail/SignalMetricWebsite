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
VITE_APP_STORE_URL=https://apps.apple.com/app/signalmetric/id6797239928
```

`VITE_APP_STORE_URL` is optional: the real public store URL above is also the
shared default in `src/content/site.ts`. A missing build variable never
disables download links. No prices are embedded in structured data.

## Cloudflare Pages

Create the project through Git integration. Use the repository root, production
branch `main`, build command `npm run build`, and output directory `dist`.
Associate `signalmetric.monoware.app` only after the first `*.pages.dev`
production deployment succeeds.

The build uses React server rendering and an HTML parser to generate all four
routes in English, `/zh-CN/`, `/ja/`, and `/ko/`: 16 complete pages with unique
metadata, canonical URLs, reciprocal language alternatives and a sitemap.
The static `404.html` prevents unknown URLs from becoming soft-404 copies.
Legacy `?lang=` links continue to work and normalize to locale paths.

Before pushing the production branch, run lint, type checks, tests and build.
The build fails if any localized page is missing its download links, language
alternatives, complete glossary, or export privacy disclosure.

Browser gate (start the dev server first):

```bash
npx playwright install chromium
node scripts/verify-browser.mjs
```

The browser gate checks 390px and 1440px layouts, four languages, navigation,
legacy links, search and privacy. It does not submit the support form.
After pushing, verify the production domain's HTML and assets. A successful
Git push alone is not deployment confirmation.
