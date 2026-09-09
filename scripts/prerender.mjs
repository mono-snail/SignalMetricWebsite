import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse, parseFragment, serialize } from "parse5";
import { createServer } from "vite";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const template = await readFile(resolve(dist, "index.html"), "utf8");

function find(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes ?? []) {
    const match = find(child, predicate);
    if (match) return match;
  }
}

const attr = (node, name) => node.attrs?.find((entry) => entry.name === name)?.value;
const setAttr = (node, name, value) => {
  const entry = node.attrs.find((entry) => entry.name === name);
  if (entry) entry.value = value;
  else node.attrs.push({ name, value });
};

function element(tag, attrs = {}, text) {
  const node = parseFragment(`<${tag}></${tag}>`).childNodes[0];
  for (const [key, value] of Object.entries(attrs)) setAttr(node, key, value);
  if (text !== undefined) {
    node.childNodes = [{ nodeName: "#text", value: text, parentNode: node }];
  }
  return node;
}

const server = await createServer({
  root,
  configFile: false,
  cacheDir: resolve(root, "node_modules/.vite-prerender"),
  resolve: { alias: { "@": resolve(root, "src") } },
  esbuild: { jsx: "automatic" },
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
});

try {
  const { pages } = await server.ssrLoadModule("/src/entry-server.tsx");
  const rendered = pages();
  for (const page of rendered) {
    const document = parse(template);
    const html = find(document, (node) => node.tagName === "html");
    const head = find(document, (node) => node.tagName === "head");
    const container = find(document, (node) => attr(node, "id") === "root");
    if (!head || !container || !html) throw new Error("Missing HTML entry nodes");
    setAttr(html, "lang", page.locale);
    container.childNodes = parseFragment(page.markup).childNodes;
    container.childNodes.forEach((node) => { node.parentNode = container; });
    head.childNodes = head.childNodes.filter((node) =>
      node.tagName !== "title" && attr(node, "rel") !== "canonical" &&
      !attr(node, "hreflang") && attr(node, "id") !== "seo-structured-data");

    const append = (node) => { node.parentNode = head; head.childNodes.push(node); };
    const meta = (key, name, value) => {
      let node = head.childNodes.find((node) => node.tagName === "meta" && attr(node, key) === name);
      if (!node) { node = element("meta", { [key]: name }); append(node); }
      setAttr(node, "content", value);
    };
    append(element("title", {}, page.title));
    append(element("link", { rel: "canonical", href: page.canonical }));
    page.alternates.forEach((alternate) => append(element("link", {
      rel: "alternate", hreflang: alternate.language, href: alternate.href,
    })));
    meta("name", "description", page.description);
    meta("name", "apple-itunes-app", `app-id=${page.appStoreId}`);
    meta("property", "og:title", page.title);
    meta("property", "og:description", page.description);
    meta("property", "og:url", page.canonical);
    meta("property", "og:locale", page.locale.replace("-", "_"));
    meta("property", "og:type", page.ogType);
    meta("name", "twitter:title", page.title);
    meta("name", "twitter:description", page.description);
    append(element("script", { id: "seo-structured-data", type: "application/ld+json" },
      JSON.stringify(page.structuredData).replaceAll("<", "\\u003c")));
    const destination = resolve(dist, `.${page.pathname}`, "index.html");
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, serialize(document));
  }
  const xmlEscape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  const sitemap = rendered.map((page) =>
    `<url><loc>${xmlEscape(page.canonical)}</loc>${page.alternates.map((alt) =>
      `<xhtml:link rel="alternate" hreflang="${alt.language}" href="${xmlEscape(alt.href)}"/>`).join("")}</url>`).join("\n");
  await writeFile(resolve(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${sitemap}</urlset>\n`);
  console.log(`Prerendered ${rendered.length} complete, localized SignalMetric routes.`);
} finally {
  await server.close();
}
