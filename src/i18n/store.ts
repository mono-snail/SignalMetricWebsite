import { create } from "zustand";
import { copy } from "./copy";
import { locales, type Locale } from "./types";

const storageKey = "signalmetric.language";

const isLocale = (value: string | null): value is Locale =>
  locales.includes(value as Locale);

const initialLocale = (): Locale => {
  const parameter = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(parameter)) {
    return parameter;
  }

  const stored = window.localStorage.getItem(storageKey);
  return isLocale(stored) ? stored : "en";
};

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const applyLocale = (locale: Locale) => {
  document.documentElement.lang = locale;
  window.localStorage.setItem(storageKey, locale);

  const url = new URL(window.location.href);
  if (locale === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", url);
};

export const useLocaleStore = create<LocaleState>((set) => {
  const locale = initialLocale();
  document.documentElement.lang = locale;

  return {
    locale,
    setLocale: (nextLocale) => {
      applyLocale(nextLocale);
      set({ locale: nextLocale });
    },
  };
});

export const useCopy = () => {
  const locale = useLocaleStore((state) => state.locale);
  return { locale, copy: copy[locale] };
};
