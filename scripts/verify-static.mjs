import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parse } from "parse5";

const lock = JSON.parse(await readFile("package-lock.json", "utf8"));
for (const dependency of Object.values(lock.packages)) {
  if (dependency.resolved) {
    assert.equal(new URL(dependency.resolved).hostname, "registry.npmjs.org",
      "Dependencies must be downloadable by the public deployment environment");
  }
}

const attr = (node, key) => node.attrs?.find((item) => item.name === key)?.value;
function all(node, predicate) {
  return [...(predicate(node) ? [node] : []),
    ...(node.childNodes ?? []).flatMap((child) => all(child, predicate))];
}
const text = (node) => node.nodeName === "#text" ? node.value :
  (node.childNodes ?? []).map(text).join("");
function isStoreLink(node) {
  if (node.tagName !== "a") return false;
  const url = new URL(attr(node, "href") ?? "", "https://signalmetric.monoware.app");
  return url.hostname === "apps.apple.com" && url.pathname.endsWith("/id6797239928");
}
function isPortfolioLink(node) {
  if (node.tagName !== "a") return false;
  const url = new URL(attr(node, "href") ?? "", "https://signalmetric.monoware.app");
  return url.hostname === "monoware.app" && url.hash === "#products";
}
const languageTag = (locale) => locale === "zh-CN" ? "zh-Hans" : locale;
let count = 0;
for (const locale of ["en", "zh-CN", "zh-Hant", "ja", "ko"]) {
  for (const page of ["", "measurements/", "support/", "privacy/"]) {
    const path = `${locale === "en" ? "" : `${locale}/`}${page}`;
    const document = parse(await readFile(`dist/${path}index.html`, "utf8"));
    const nodes = (predicate) => all(document, predicate);
    const html = nodes((node) => node.tagName === "html")[0];
    assert.equal(attr(html, "lang"), languageTag(locale));
    assert.equal(nodes((node) => node.tagName === "h1").length, 1);
    const canonical = nodes((node) => attr(node, "rel") === "canonical");
    assert.equal(canonical.length, 1);
    assert.equal(attr(canonical[0], "href"), `https://signalmetric.monoware.app/${path}`);
    assert.equal(nodes((node) => attr(node, "hreflang")).length, 6);
    const store = nodes(isStoreLink);
    assert.ok(store.length >= 2, `Missing download path: ${path}`);
    assert.ok(nodes(isPortfolioLink).length >= 2, `Missing portfolio path: ${path}`);
    const structured = nodes((node) => attr(node, "id") === "seo-structured-data");
    assert.equal(structured.length, 1);
    assert.ok(JSON.parse(text(structured[0]))["@graph"].length >= 4);
    assert.equal(nodes((node) => attr(node, "name") === "apple-itunes-app").length, 1);
    if (page === "measurements/") {
      assert.equal(nodes((node) => attr(node, "class") === "metric-definition").length, 31);
    }
    if (page === "privacy/") {
      assert.ok(nodes((node) => node.tagName === "section" && attr(node, "id") === "measurements").length);
    }
    if (!page) {
      assert.equal(nodes((node) => node.tagName === "a" &&
        attr(node, "href")?.startsWith("https://monoware.app/blog/")).length, 3);
    }
    count++;
  }
}
const sitemap = await readFile("dist/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<loc>/g) ?? []).length, 20);
console.log(`Verified ${count} full pages, store and portfolio links, language alternatives, guide content and privacy exports.`);
