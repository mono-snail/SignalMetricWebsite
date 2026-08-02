import type { Locale } from "@/i18n/types";

export const localizePath = (path: string, locale: Locale) => {
  const url = new URL(path, "https://signalmetric.invalid");
  if (locale === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  return `${url.pathname}${url.search}${url.hash}`;
};
