import type { Locale } from "@/i18n/types";

const store = new URL(
  import.meta.env.VITE_APP_STORE_URL?.trim() ||
  "https://apps.apple.com/app/signalmetric/id6797239928"
);
if (store.protocol !== "https:" || store.hostname !== "apps.apple.com" ||
    !store.pathname.endsWith("/id6797239928")) {
  throw new Error("VITE_APP_STORE_URL must point to SignalMetric on the App Store");
}
export const appStoreUrl = store.href;

export const publicSiteUrl = (
  import.meta.env.VITE_PUBLIC_SITE_URL?.trim() ||
  "https://signalmetric.monoware.app"
).replace(/\/$/, "");

export const appStoreId = "6797239928";

const monowareLanguage: Partial<Record<Locale, string>> = {
  "zh-CN": "zh-Hans",
  "zh-Hant": "zh-Hans",
  ja: "ja",
  ko: "ko",
};

export function monowareUrl(locale: Locale, path: string): string {
  const url = new URL(path, "https://monoware.app");
  const language = monowareLanguage[locale];
  if (language) {
    url.searchParams.set("lang", language);
  }
  return url.href;
}

export const monowareProductsUrl = (locale: Locale) =>
  monowareUrl(locale, "/#products");
