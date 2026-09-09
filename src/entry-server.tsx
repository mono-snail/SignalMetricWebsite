import { renderToString } from "react-dom/server";
import App from "@/App";
import { copy } from "@/i18n/copy";
import { RenderLocaleContext } from "@/i18n/store";
import { locales, type Locale } from "@/i18n/types";
import { buildStructuredData, type PageKind } from "@/hooks/usePageMetadata";
import { appStoreId, publicSiteUrl } from "@/content/site";
import { languageTag, localizedRoute } from "@/routing/localePaths";

const routes = {
  "/": "home",
  "/measurements/": "measurements",
  "/support/": "support",
  "/privacy/": "privacy",
} as const;

export function pages() {
  return locales.flatMap((locale) => Object.entries(routes).map(([path, page]) =>
    renderPage(path, page, locale)));
}

function renderPage(path: string, page: Exclude<PageKind, "notFound">, locale: Locale) {
  const pathname = localizedRoute(path, locale);
  const title = copy[locale].meta[`${page}Title`];
  const description = copy[locale].meta[`${page}Description`];
  const canonical = `${publicSiteUrl}${pathname}`;
  return {
    pathname, title, description, canonical, appStoreId,
    locale: languageTag(locale),
    ogType: page === "measurements" ? "article" : "website",
    alternates: [...locales, "x-default"].map((language) => ({
      language: language === "x-default" ? language : languageTag(language as Locale),
      href: `${publicSiteUrl}${localizedRoute(path, language === "x-default" ? "en" : language as Locale)}`,
    })),
    structuredData: buildStructuredData(page, title, description, canonical, copy[locale], locale),
    markup: renderToString(
      <RenderLocaleContext.Provider value={locale}>
        <App initialLocation={{ pathname, search: "", hash: "" }} />
      </RenderLocaleContext.Provider>,
    ),
  };
}
