import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const base = process.env.SIGNALMETRIC_TEST_URL || "http://127.0.0.1:4317";
const output = process.env.SIGNALMETRIC_SCREENSHOTS || "/tmp/SignalMetricWebsiteShots";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  channel: process.env.PLAYWRIGHT_CHANNEL,
  timeout: 20_000,
});
try {
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }]) {
    const context = await browser.newContext({ viewport, reducedMotion: "reduce" });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const locale of ["en", "zh-CN", "ja", "ko"]) {
      const path = locale === "en" ? "/" : `/${locale}/`;
      await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
      await page.locator(".hero-device img").evaluate((image) => image.decode());
      const state = await page.evaluate(() => ({
        lang: document.documentElement.lang,
        heading: document.querySelector("h1")?.textContent,
        headingFits: document.querySelector("h1").scrollWidth <= document.querySelector("h1").clientWidth + 1,
        bodyFits: document.documentElement.scrollWidth <= innerWidth,
        storeLinks: [...document.querySelectorAll("a[href]")].filter((link) => {
          const url = new URL(link.href);
          return url.hostname === "apps.apple.com" && url.pathname.endsWith("/id6797239928");
        }).length,
        articles: document.querySelectorAll(".reading-links a").length,
      }));
      assert.equal(state.lang, locale === "zh-CN" ? "zh-Hans" : locale);
      assert.equal(state.heading, "SignalMetric");
      assert.ok(state.headingFits && state.bodyFits, `Overflow at ${viewport.width}: ${locale}`);
      assert.ok(state.storeLinks >= 4);
      assert.equal(state.articles, 3);
      await page.screenshot({ path: `${output}/${viewport.width}-${locale}.png` });
    }
    await page.goto(`${base}/`);
    if (viewport.width < 760) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page.locator(".mobile-languages").getByRole("button", { name: "日本語" }).click();
    } else {
      await page.getByRole("combobox", { name: "Language" }).selectOption("ja");
    }
    await page.waitForURL("**/ja/");
    await page.goBack();
    await page.waitForURL(`${base}/`);
    assert.equal(await page.locator("html").getAttribute("lang"), "en");
    await page.goto(`${base}/measurements/?lang=ko`);
    await page.waitForURL("**/ko/measurements/");
    await page.getByRole("searchbox").fill("LUFS");
    assert.ok(await page.locator(".metric-definition").count() >= 3);
    await page.locator('.footer-links a[href="/ko/privacy/"]').click();
    await page.waitForURL("**/ko/privacy/");
    assert.equal(await page.locator("section#measurements").count(), 1);
    assert.deepEqual(errors, [], `Browser exceptions at ${viewport.width}`);
    await context.close();
    console.log(`Verified ${viewport.width}px: four languages, store links, navigation, legacy URLs, search, privacy.`);
  }
} finally {
  await browser.close();
}
