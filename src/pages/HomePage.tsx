import {
  ArrowRight,
  Check,
  FileAudio,
  MessageSquareText,
  Mic,
  ShieldCheck,
} from "lucide-react";
import DeviceShot from "@/components/DeviceShot";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useCopy } from "@/i18n/store";
import { Link } from "@/routing/router";

const appStoreUrl = import.meta.env.VITE_APP_STORE_URL as string | undefined;

export default function HomePage() {
  const { copy } = useCopy();
  const localizedPath = useLocalizedPath();
  usePageMetadata("home");

  const privacyIcons = [Mic, FileAudio, ShieldCheck, MessageSquareText];
  const themeImages = [
    "/images/optimized/1.jpg",
    "/images/optimized/5.jpg",
    "/images/optimized/6.jpg",
    "/images/optimized/7.jpg",
  ];

  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">{copy.home.heroEyebrow}</p>
          <h1>{copy.home.heroTitle}</h1>
          <p className="hero-lead">{copy.home.heroLead}</p>
          <div className="hero-actions">
            {appStoreUrl ? (
              <a className="button button-primary" href={appStoreUrl}>
                {copy.common.appStore}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ) : (
              <span className="button button-primary button-disabled">
                {copy.common.comingSoon}
              </span>
            )}
            <Link
              className="button button-secondary"
              to={localizedPath("/measurements/")}
            >
              {copy.common.learnMeasurements}
            </Link>
          </div>
          <div className="trust-line">
            <ShieldCheck size={17} aria-hidden="true" />
            <span>{copy.home.heroNote}</span>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-readout" aria-hidden="true">
            <span>RMS</span>
            <strong>−18.7</strong>
            <small>dBFS</small>
            <i>LIVE</i>
          </div>
          <div className="signal-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <DeviceShot
            src="/images/optimized/1.jpg"
            alt={copy.home.heroImageAlt}
            priority
            className="hero-device"
          />
        </div>
      </section>

      <section className="proof-rail" aria-label="Technical specification">
        <div className="section-shell proof-grid">
          {copy.home.proof.map((item) => (
            <div key={item.label} className="proof-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-block" id="instruments">
        <header className="section-heading">
          <p className="eyebrow">{copy.home.instrumentsEyebrow}</p>
          <h2>{copy.home.instrumentsTitle}</h2>
          <p>{copy.home.instrumentsLead}</p>
        </header>

        <div className="instrument-stack">
          {copy.home.instruments.map((instrument, index) => (
            <article
              className={`instrument-row ${index % 2 ? "instrument-row-reverse" : ""}`}
              key={instrument.id}
            >
              <div className="instrument-copy">
                <span className="instrument-index">
                  0{index + 1} / {instrument.eyebrow}
                </span>
                <h3>{instrument.name}</h3>
                <p>{instrument.description}</p>
                <ul className="evidence-list">
                  {instrument.evidence.map((evidence) => (
                    <li key={evidence}>
                      <Check size={14} aria-hidden="true" />
                      {evidence}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="instrument-visual">
                <div className="instrument-axis" aria-hidden="true">
                  <span>−12</span>
                  <span>−24</span>
                  <span>−48</span>
                  <span>−72</span>
                </div>
                <DeviceShot src={instrument.image} alt={instrument.alt} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="metric-section section-block">
        <div className="section-shell">
          <header className="section-heading section-heading-wide">
            <div>
              <p className="eyebrow">{copy.home.metricsEyebrow}</p>
              <h2>{copy.home.metricsTitle}</h2>
            </div>
            <p>{copy.home.metricsLead}</p>
          </header>

          <div className="metric-group-grid">
            {copy.home.metricGroups.map((group, index) => (
              <article className="metric-group" key={group.id}>
                <span className="metric-group-number">0{index + 1}</span>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
                <code>{group.metrics}</code>
              </article>
            ))}
          </div>
          <Link
            className="text-link"
            to={localizedPath("/measurements/")}
          >
            {copy.common.learnMeasurements}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section-shell section-block privacy-feature">
        <div className="privacy-copy">
          <p className="eyebrow">{copy.home.privacyEyebrow}</p>
          <h2>{copy.home.privacyTitle}</h2>
          <p>{copy.home.privacyLead}</p>
          <Link className="text-link" to={localizedPath("/privacy/")}>
            {copy.nav.privacy}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="privacy-grid">
          {copy.home.privacyPoints.map((point, index) => {
            const Icon = privacyIcons[index];
            return (
              <article key={point.title}>
                <Icon size={20} aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="themes-section section-block">
        <div className="section-shell">
          <header className="section-heading">
            <p className="eyebrow">{copy.home.themesEyebrow}</p>
            <h2>{copy.home.themesTitle}</h2>
            <p>{copy.home.themesLead}</p>
          </header>
          <div className="theme-stage">
            {themeImages.map((image, index) => (
              <figure key={image} className={`theme-card theme-${index}`}>
                <img
                  src={image}
                  alt={`${copy.home.themeNames[index]} SignalMetric appearance`}
                  loading="lazy"
                  width={738}
                  height={1600}
                />
                <figcaption>{copy.home.themeNames[index]}</figcaption>
              </figure>
            ))}
          </div>
          <div className="theme-name-rail">
            {copy.home.themeNames.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell final-cta">
        <span className="cta-signal" aria-hidden="true" />
        <p className="eyebrow">SIGNAL / METRIC</p>
        <h2>{copy.home.ctaTitle}</h2>
        <p>{copy.home.ctaLead}</p>
        <div className="hero-actions">
          {appStoreUrl ? (
            <a className="button button-primary" href={appStoreUrl}>
              {copy.common.appStore}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          ) : (
            <span className="button button-primary button-disabled">
              {copy.common.comingSoon}
            </span>
          )}
          <Link className="button button-secondary" to={localizedPath("/support/")}>
            {copy.nav.support}
          </Link>
        </div>
      </section>
    </>
  );
}
