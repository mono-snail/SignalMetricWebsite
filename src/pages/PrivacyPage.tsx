import { LockKeyhole, Mail } from "lucide-react";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useCopy } from "@/i18n/store";
import { measurementPrivacy } from "@/content/measurementPrivacy";

export default function PrivacyPage() {
  const { copy, locale } = useCopy();
  const sections = copy.privacy.sections.flatMap((section) =>
    section.id === "imports" ? [section, measurementPrivacy[locale]] : [section]);
  usePageMetadata("privacy");

  return (
    <>
      <section className="page-hero section-shell privacy-hero">
        <div>
          <p className="eyebrow">{copy.privacy.eyebrow}</p>
          <h1>{copy.privacy.title}</h1>
        </div>
        <div>
          <p>{copy.privacy.lead}</p>
          <span className="effective-date">
            {copy.privacy.effective} · {new Intl.DateTimeFormat(locale, {
              dateStyle: "long", timeZone: "UTC",
            }).format(new Date("2026-09-09T00:00:00Z"))}
          </span>
        </div>
      </section>

      <section className="section-shell policy-layout">
        <aside className="policy-nav">
          <LockKeyhole size={22} aria-hidden="true" />
          <strong>SIGNAL / METRIC</strong>
          <nav aria-label="Privacy policy sections">
            {sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="policy-content">
          {sections.map((section, index) => (
            <section id={section.id} key={section.id}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
              </header>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <a className="policy-contact" href="mailto:privacy@monoware.app">
            <Mail size={19} aria-hidden="true" />
            privacy@monoware.app
          </a>
        </article>
      </section>
    </>
  );
}
