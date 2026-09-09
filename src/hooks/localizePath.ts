import type { Locale } from "@/i18n/types";
import { localizedRoute } from "@/routing/localePaths";

export const localizePath = (path: string, locale: Locale) => {
  const url = new URL(path, "https://signalmetric.invalid");
  url.pathname = localizedRoute(url.pathname, locale);
  url.searchParams.delete("lang");
  return `${url.pathname}${url.search}${url.hash}`;
};
