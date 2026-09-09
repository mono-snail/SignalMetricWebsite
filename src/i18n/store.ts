import { create } from "zustand";
import { createContext, useContext } from "react";
import { copy } from "./copy";
import { locales, type Locale } from "./types";
import { localizePath } from "@/hooks/localizePath";
import { routeLocale, languageTag } from "@/routing/localePaths";

const isLocale = (value: string | null): value is Locale =>
  locales.includes(value as Locale);

const initialLocale = (): Locale => {
  if (typeof window === "undefined") return "en";
  const parameter = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(parameter)) {
    return parameter;
  }
  return routeLocale(window.location.pathname);
};

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const applyLocale = (locale: Locale) => {
  document.documentElement.lang = languageTag(locale);
  const path = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.history.pushState({}, "", localizePath(path, locale));
  window.dispatchEvent(new PopStateEvent("popstate"));
};

export const useLocaleStore = create<LocaleState>((set) => {
  const locale = initialLocale();
  if (typeof document !== "undefined") {
    document.documentElement.lang = languageTag(locale);
  }

  return {
    locale,
    setLocale: (nextLocale) => {
      applyLocale(nextLocale);
      set({ locale: nextLocale });
    },
  };
});

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    const locale = initialLocale();
    document.documentElement.lang = languageTag(locale);
    useLocaleStore.setState({ locale });
  });
}

export const RenderLocaleContext = createContext<Locale | null>(null);

export const useCopy = () => {
  const override = useContext(RenderLocaleContext);
  const selected = useLocaleStore((state) => state.locale);
  const locale = override ?? selected;
  return { locale, copy: copy[locale] };
};
