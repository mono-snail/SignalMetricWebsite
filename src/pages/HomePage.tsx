import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  Download,
  FileCheck2,
  Gauge,
  Globe2,
  Headphones,
  Mic2,
  ShieldCheck,
  Smartphone,
  Waves,
} from "lucide-react";
import DeviceShot from "@/components/DeviceShot";
import ReadingLinks from "@/components/ReadingLinks";
import { homeV2 } from "@/content/homeV2";
import {
  appStoreUrl,
  monowareHomeUrl,
  monowareProductsUrl,
} from "@/content/site";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useCopy } from "@/i18n/store";
import type { Locale } from "@/i18n/types";
import { Link } from "@/routing/router";

const workflowIcons = {
  publish: FileCheck2,
  noise: Waves,
  prepare: Mic2,
};

const workflowImages: Record<keyof typeof workflowIcons, string> = {
  publish: "report.jpg",
  noise: "noise.jpg",
  prepare: "setup.jpg",
};

const imageLocalePath: Record<Locale, string> = {
  en: "en",
  "zh-CN": "zh-CN",
  "zh-Hant": "zh-Hant",
  ja: "ja",
  ko: "ko",
};

function v2Image(locale: Locale, fileName: string) {
  return `/images/v2/${imageLocalePath[locale]}/${fileName}`;
}

export default function HomePage() {
  const { copy, locale } = useCopy();
  const content = homeV2[locale];
  const localizedPath = useLocalizedPath();
  const screenshot = (fileName: string) => v2Image(locale, fileName);
  usePageMetadata("home");

  const themeImages = [
    { image: screenshot("instrument-studio.jpg"), name: copy.home.themeNames[0] },
    { image: screenshot("instrument-paper.jpg"), name: copy.home.themeNames[1] },
    { image: screenshot("instrument-pulse.jpg"), name: copy.home.themeNames[4] },
    { image: screenshot("instrument-mono.jpg"), name: copy.home.themeNames[5] },
  ];
  const orderedWorkflows = (["noise", "prepare", "publish"] as const).map(
    (id) => content.workflows.find((workflow) => workflow.id === id)!,
  );

  return (
    <>
      <section className="hero-v2 section-shell">
        <div className="hero-v2-copy reveal">
          <a
            className="main-site-relay"
            href={monowareHomeUrl(locale)}
            aria-label={`${copy.nav.mainSite}: www.monoware.app`}
          >
            <span className="main-site-relay-mark">
              <Globe2 size={15} aria-hidden="true" />
            </span>
            <span className="main-site-relay-copy">
              <small>{copy.nav.mainSite}</small>
              <strong>www.monoware.app</strong>
            </span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <h1>SignalMetric</h1>
          <p className="hero-v2-lead">{content.heroLead}</p>

          <div className="platform-actions" aria-label={content.availabilityTitle}>
            <a className="platform-button platform-button-active" href={appStoreUrl}>
              <span className="platform-button-icon">
                <Download size={19} aria-hidden="true" />
              </span>
              <span>
                <small>{content.appStoreStatus}</small>
                <strong>{content.appStore}</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <span className="platform-button platform-button-pending" aria-disabled="true">
              <span className="platform-button-icon">
                <Smartphone size={19} aria-hidden="true" />
              </span>
              <span>
                <small>{content.androidStatus}</small>
                <strong>{content.android}</strong>
              </span>
            </span>
          </div>

          <div className="hero-v2-foot">
            <ShieldCheck size={17} aria-hidden="true" />
            <span>{content.heroNote}</span>
            <Link to={localizedPath("/measurements/")}>
              {content.guide}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-v2-visual reveal reveal-delay">
          <div className="hero-v2-grid" aria-hidden="true" />
          <DeviceShot
            src={screenshot("home.jpg")}
            alt={content.heroImageAlt}
            priority
            className="hero-v2-device"
          />
          <div className="hero-v2-signal" aria-hidden="true">
            <span>CHECK</span>
            <i />
            <span>PREPARE</span>
            <i />
            <span>MEASURE</span>
          </div>
        </div>
      </section>

      <section className="proof-rail-v2" aria-label={copy.common.technicalSpecification}>
        <div className="section-shell proof-grid-v2">
          {content.proof.map((item) => (
            <div key={item.label} className="proof-item-v2">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="instrument-lab section-block" id="instruments">
        <div className="section-shell instrument-lab-grid">
          <div className="instrument-lab-visual">
            <div className="instrument-trace" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <DeviceShot
              src={screenshot("instrument-studio.jpg")}
              alt={content.instrumentImageAlt}
              priority
            />
          </div>
          <div className="instrument-lab-copy">
            <h2>{content.instrumentsTitle}</h2>
            <p>{content.instrumentsLead}</p>
            <ul className="instrument-points">
              {content.instrumentPoints.map((point, index) => (
                <li key={point}>
                  <span>0{index + 1}</span>
                  <strong>{point}</strong>
                </li>
              ))}
            </ul>
            <Link className="text-link" to={localizedPath("/measurements/")}>
              {content.guide}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell workflow-section section-block">
        <header className="section-heading-v2">
          <h2>{content.workflowsTitle}</h2>
        </header>

        <div className="workflow-stack-v2">
          {orderedWorkflows.map((workflow, index) => {
            const Icon = workflowIcons[workflow.id];
            return (
              <article
                className={`workflow-row-v2 workflow-${workflow.id} ${
                  index % 2 ? "workflow-row-v2-reverse" : ""
                }`}
                key={workflow.id}
              >
                <div className="workflow-copy-v2">
                  <span className="workflow-icon-v2" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.description}</p>
                  <ul className="evidence-list">
                    {workflow.evidence.map((evidence) => (
                      <li key={evidence}>
                        <Check size={14} aria-hidden="true" />
                        {evidence}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="workflow-visual-v2">
                  <DeviceShot
                    src={screenshot(workflowImages[workflow.id])}
                    alt={workflow.alt}
                    priority
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="appearance-section section-block">
        <div className="section-shell">
          <header className="section-heading-v2">
            <h2>{content.themesTitle}</h2>
          </header>
          <div className="appearance-grid">
            {themeImages.map((theme) => (
              <figure key={theme.image}>
                <img
                  src={theme.image}
                  alt={`${theme.name} · SignalMetric ${copy.common.appearance}`}
                  loading="eager"
                  width={738}
                  height={1604}
                />
                <figcaption>
                  <span>{theme.name}</span>
                  <Gauge size={15} aria-hidden="true" />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell privacy-feature-v2 section-block">
        <div className="privacy-copy">
          <h2>{content.privacyTitle}</h2>
          <p>{content.privacyLead}</p>
          <Link className="text-link" to={localizedPath("/privacy/")}>
            {copy.nav.privacy}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="privacy-evidence-v2">
          <article>
            <Mic2 size={20} aria-hidden="true" />
            <strong>{copy.home.privacyPoints[0].title}</strong>
            <p>{copy.home.privacyPoints[0].detail}</p>
          </article>
          <article>
            <Headphones size={20} aria-hidden="true" />
            <strong>{copy.home.privacyPoints[2].title}</strong>
            <p>{copy.home.privacyPoints[2].detail}</p>
          </article>
          <article>
            <ShieldCheck size={20} aria-hidden="true" />
            <strong>{copy.home.privacyPoints[3].title}</strong>
            <p>{copy.home.privacyPoints[3].detail}</p>
          </article>
        </div>
      </section>

      <ReadingLinks />

      <section className="portfolio-bridge">
        <div className="section-shell portfolio-bridge-grid">
          <div className="portfolio-bridge-copy">
            <h2>{copy.home.portfolioTitle}</h2>
          </div>
          <div className="portfolio-bridge-action">
            <div className="portfolio-product-list" aria-hidden="true">
              {["Senvra", "MonoProxy", "MonoPump", "MonoNight", "MonoTools"].map(
                (product) => <span key={product}>{product}</span>,
              )}
            </div>
            <a
              className="button button-secondary"
              href={monowareProductsUrl(locale)}
            >
              <Boxes size={17} aria-hidden="true" />
              {copy.nav.moreApps}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell availability-cta">
        <div>
          <h2>{content.availabilityTitle}</h2>
        </div>
        <div className="availability-actions">
          <a className="platform-button platform-button-active" href={appStoreUrl}>
            <span className="platform-button-icon">
              <Download size={19} aria-hidden="true" />
            </span>
            <span>
              <small>{content.appStoreStatus}</small>
              <strong>{content.appStore}</strong>
            </span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <span className="platform-button platform-button-pending" aria-disabled="true">
            <span className="platform-button-icon">
              <Smartphone size={19} aria-hidden="true" />
            </span>
            <span>
              <small>{content.androidStatus}</small>
              <strong>{content.android}</strong>
            </span>
          </span>
        </div>
      </section>
    </>
  );
}
