import { useEffect } from "react";
import { useCopy } from "@/i18n/store";
import { useLocation } from "@/routing/routerContext";

type PageKind = "home" | "measurements" | "support" | "privacy" | "notFound";

const publicSiteUrl =
  import.meta.env.VITE_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  window.location.origin;
const appStoreUrl =
  (import.meta.env.VITE_APP_STORE_URL as string | undefined) ??
  "https://apps.apple.com/us/app/signalmetric/id6797239928";

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

    const canonicalUrl = `${publicSiteUrl}${location.pathname}`;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) {
      canonical.href = canonicalUrl;
    }
    setMeta('meta[property="og:url"]', canonicalUrl);

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
      buildStructuredData(page, title, description, canonicalUrl, copy),
    );
  }, [copy, locale, location.pathname, page]);
};

function buildStructuredData(
  page: PageKind,
  title: string,
  description: string,
  canonicalUrl: string,
  copy: ReturnType<typeof useCopy>["copy"],
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
      inLanguage: document.documentElement.lang || "en",
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
      screenshot: `${publicSiteUrl}/images/optimized/1.jpg`,
      downloadUrl: appStoreUrl,
      installUrl: appStoreUrl,
      featureList: [
        "Live microphone analysis",
        "LUFS, True Peak, dynamics and spectrum readings",
        "Waveform and spectrogram inspection",
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
