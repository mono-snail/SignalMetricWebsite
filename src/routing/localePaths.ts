import { locales, type Locale } from "@/i18n/types";

export function routeLocale(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return locales.find((locale) => locale !== "en" && locale === segment) ?? "en";
}

export function contentPath(pathname: string): string {
  const locale = routeLocale(pathname);
  const path = locale === "en" ? pathname : pathname.slice(locale.length + 1);
  return `${path.replace(/\/+$/, "")}/`;
}

export function localizedRoute(pathname: string, locale: Locale): string {
  const path = contentPath(pathname);
  return locale === "en" ? path : `/${locale}${path}`;
}

export function languageTag(locale: Locale): string {
  return locale === "zh-CN" ? "zh-Hans" : locale;
}
