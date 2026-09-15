import { useEffect } from "react";
import { useCopy } from "@/i18n/store";
import { useLocation } from "@/routing/routerContext";
import { appStoreUrl, publicSiteUrl } from "@/content/site";
import { languageTag, localizedRoute } from "@/routing/localePaths";
import { locales, type Locale } from "@/i18n/types";

export type PageKind = "home" | "measurements" | "support" | "privacy" | "notFound";

const imageLocalePath: Record<Locale, string> = {
  en: "en",
  "zh-CN": "zh-CN",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  ko: "ko",
};

function homeScreenshotUrl(locale: Locale) {
  return `${publicSiteUrl}/images/v2/${imageLocalePath[locale]}/home.jpg`;
}

export const usePageMetadata = (page: PageKind) => {
  const { copy, locale } = useCopy();
  const location = useLocation();

  useEffect(() => {
    const isNotFound = page === "notFound";
    const title = isNotFound
      ? `${copy.notFound.title} - SignalMetric`
      : copy.meta[`${page}Title`];
    const description = isNotFound
      ? copy.notFound.body
      : copy.meta[`${page}Description`];
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta(
      'meta[name="robots"]',
      isNotFound
        ? "noindex,follow,noarchive"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', locale.replace("-", "_"));
    setMeta('meta[property="og:type"]', page === "measurements" ? "article" : "website");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    const canonicalUrl = `${publicSiteUrl}${localizedRoute(location.pathname, locale)}`;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) {
      canonical.href = canonicalUrl;
    }
    setMeta('meta[property="og:url"]', canonicalUrl);
    document.querySelectorAll('link[hreflang]').forEach((link) => link.remove());
    if (!isNotFound) {
      for (const language of [...locales, "x-default"] as const) {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = language === "x-default" ? language : languageTag(language);
        link.href = `${publicSiteUrl}${localizedRoute(location.pathname, language === "x-default" ? "en" : language)}`;
        document.head.append(link);
      }
    }

    let structuredData = document.querySelector<HTMLScriptElement>(
      "#seo-structured-data",
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "seo-structured-data";
      structuredData.type = "application/ld+json";
      document.head.append(structuredData);
    }
    structuredData.textContent = JSON.stringify(
      buildStructuredData(page, title, description, canonicalUrl, copy, locale),
    );
  }, [copy, locale, location.pathname, page]);
};

export function buildStructuredData(
  page: PageKind,
  title: string,
  description: string,
  canonicalUrl: string,
  copy: ReturnType<typeof useCopy>["copy"],
  locale: Locale,
) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": "https://monoware.app/#organization",
      name: "MonoWare",
      url: "https://monoware.app/",
    },
    {
      "@type": "WebSite",
      "@id": `${publicSiteUrl}/#website`,
      name: "SignalMetric",
      url: `${publicSiteUrl}/`,
      publisher: { "@id": "https://monoware.app/#organization" },
    },
    {
      "@type": page === "measurements" ? "TechArticle" : "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: title,
      headline: page === "measurements" ? title : undefined,
      description,
      inLanguage: languageTag(locale),
      isPartOf: { "@id": `${publicSiteUrl}/#website` },
      mainEntity:
        page === "home" ? { "@id": `${publicSiteUrl}/#application` } : undefined,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement:
        page === "home"
          ? [
              {
                "@type": "ListItem",
                position: 1,
                name: "SignalMetric",
                item: `${publicSiteUrl}/`,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 1,
                name: "SignalMetric",
                item: `${publicSiteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: title,
                item: canonicalUrl,
              },
            ],
    },
  ];

  if (page === "home") {
    graph.push({
      "@type": "SoftwareApplication",
      "@id": `${publicSiteUrl}/#application`,
      name: "SignalMetric",
      alternateName: "SignalMetric by MonoWare",
      applicationCategory: "MusicApplication",
      applicationSuite: "MonoWare",
      operatingSystem: "iOS 17 or later",
      url: `${publicSiteUrl}/`,
      mainEntityOfPage: { "@id": `${publicSiteUrl}/` },
      description,
      image: `${publicSiteUrl}/social-card.png`,
      screenshot: homeScreenshotUrl(locale),
      downloadUrl: appStoreUrl,
      installUrl: appStoreUrl,
      featureList: [
        "Complete audio and video soundtrack checks",
        "Recording environment and voice preparation",
        "Environment noise monitoring",
        "Revision comparison and local reports",
        "Live professional audio instruments",
        "Private on-device analysis",
      ],
      brand: { "@type": "Brand", name: "MonoWare" },
      creator: { "@type": "Organization", name: "MonoWare" },
      publisher: { "@type": "Organization", name: "MonoWare" },
    });
  }

  if (page === "support") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: copy.support.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
