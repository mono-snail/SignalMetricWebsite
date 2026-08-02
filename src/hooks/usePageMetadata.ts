import { useEffect } from "react";
import { useCopy } from "@/i18n/store";
import { useLocation } from "@/routing/routerContext";

type PageKind = "home" | "measurements" | "support" | "privacy";

const publicSiteUrl =
  import.meta.env.VITE_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  window.location.origin;

export const usePageMetadata = (page: PageKind) => {
  const { copy, locale } = useCopy();
  const location = useLocation();

  useEffect(() => {
    const title = copy.meta[`${page}Title`];
    const description = copy.meta[`${page}Description`];
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', locale.replace("-", "_"));

    const canonicalUrl = `${publicSiteUrl}${location.pathname}`;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) {
      canonical.href = canonicalUrl;
    }
    setMeta('meta[property="og:url"]', canonicalUrl);
  }, [copy, locale, location.pathname, page]);
};
