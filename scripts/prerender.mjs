import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const siteUrl = "https://signalmetric.monoware.app";
const appStoreUrl =
  process.env.VITE_APP_STORE_URL ||
  "https://apps.apple.com/us/app/signalmetric/id6797239928";

const pages = [
  {
    path: "/",
    title: "SignalMetric - Professional Audio Analysis for iPhone",
    description:
      "Inspect LUFS, True Peak, FFT spectrum, dynamics, waveform and spectral history privately on iPhone.",
    heading: "Audio, measured.",
    lead: "Private on-device evidence for loudness, dynamics, spectrum, waveform and signal integrity.",
    pageType: "WebPage",
    mainEntity: `${siteUrl}/#application`,
  },
  {
    path: "/measurements/",
    title: "Measurement Guide - SignalMetric",
    description:
      "Understand every SignalMetric reading, from dBFS and LUFS to True Peak, dynamics, spectrum and signal integrity.",
    heading: "Read every number honestly.",
    lead: "Units, measurement windows, practical interpretation and limits for every SignalMetric reading.",
    pageType: "TechArticle",
  },
  {
    path: "/support/",
    title: "Support & Feedback - SignalMetric",
    description:
      "Get SignalMetric help or send a feature request, improvement or bug report to MonoWare Support.",
    heading: "Precise help for a precise instrument.",
    lead: "Common answers and a direct path to MonoWare Support.",
    pageType: "WebPage",
  },
  {
    path: "/privacy/",
    title: "Privacy Policy - SignalMetric",
    description:
      "How SignalMetric handles microphone analysis, recordings, imported audio, preferences and optional feedback.",
    heading: "Private by construction.",
    lead: "SignalMetric analyzes audio on your device without accounts, advertising, analytics or tracking.",
    pageType: "WebPage",
  },
];

const template = await readFile(resolve(dist, "index.html"), "utf8");

for (const page of pages) {
  const canonical = `${siteUrl}${page.path}`;
  const breadcrumbName =
    page.path === "/" ? "SignalMetric" : page.heading.replace(/\.$/, "");
  const graph = [
    {
      "@type": "Organization",
      "@id": "https://monoware.app/#organization",
      name: "MonoWare",
      url: "https://monoware.app/",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "SignalMetric",
      url: `${siteUrl}/`,
      publisher: { "@id": "https://monoware.app/#organization" },
    },
    {
      "@type": page.pageType,
      "@id": canonical,
      url: canonical,
      name: page.title,
      headline: page.pageType === "TechArticle" ? page.heading : undefined,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: page.mainEntity ? { "@id": page.mainEntity } : undefined,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement:
        page.path === "/"
          ? [
              {
                "@type": "ListItem",
                position: 1,
                name: "SignalMetric",
                item: `${siteUrl}/`,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 1,
                name: "SignalMetric",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: breadcrumbName,
                item: canonical,
              },
            ],
    },
  ];

  if (page.path === "/") {
    graph.splice(3, 0, {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#application`,
      name: "SignalMetric",
      alternateName: "SignalMetric by MonoWare",
      applicationCategory: "MusicApplication",
      applicationSuite: "MonoWare",
      operatingSystem: "iOS 17 or later",
      url: `${siteUrl}/`,
      description: page.description,
      image: `${siteUrl}/social-card.png`,
      screenshot: `${siteUrl}/images/optimized/1.jpg`,
      downloadUrl: appStoreUrl,
      installUrl: appStoreUrl,
      featureList: [
        "Live microphone analysis",
        "LUFS, True Peak, dynamics and spectrum readings",
        "Waveform and spectrogram inspection",
        "Private on-device analysis",
      ],
      brand: { "@id": "https://monoware.app/#organization" },
      creator: { "@id": "https://monoware.app/#organization" },
    });
  }

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${page.title}</title>`)
    .replace(
      /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i,
      `<meta name="description" content="${page.description}" />`,
    )
    .replace(
      /<meta\b(?=[^>]*\bproperty=["']og:title["'])[^>]*>/i,
      `<meta property="og:title" content="${page.title}" />`,
    )
    .replace(
      /<meta\b(?=[^>]*\bproperty=["']og:description["'])[^>]*>/i,
      `<meta property="og:description" content="${page.description}" />`,
    )
    .replace(
      /<meta\b(?=[^>]*\bproperty=["']og:url["'])[^>]*>/i,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta\b(?=[^>]*\bname=["']twitter:title["'])[^>]*>/i,
      `<meta name="twitter:title" content="${page.title}" />`,
    )
    .replace(
      /<meta\b(?=[^>]*\bname=["']twitter:description["'])[^>]*>/i,
      `<meta name="twitter:description" content="${page.description}" />`,
    )
    .replace(
      /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<div id="root"><\/div>/i,
      `<div id="root"><main id="main-content"><h1>${page.heading}</h1><p>${page.lead}</p></main></div>`,
    )
    .replace(
      "</head>",
      `    <script id="seo-structured-data" type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graph,
      })}</script>\n  </head>`,
    );

  const destination =
    page.path === "/"
      ? resolve(dist, "index.html")
      : resolve(dist, page.path.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

console.log(`Prerendered ${pages.length} SignalMetric routes.`);
