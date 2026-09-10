import { ChevronDown, LifeBuoy } from "lucide-react";
import FeedbackForm from "@/components/FeedbackForm";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useCopy } from "@/i18n/store";

export default function SupportPage() {
  const { copy } = useCopy();
  usePageMetadata("support");

  return (
    <>
      <section className="page-hero section-shell">
        <div>
          <p className="eyebrow">{copy.support.eyebrow}</p>
          <h1>{copy.support.title}</h1>
        </div>
        <p>{copy.support.lead}</p>
      </section>

      <section className="section-shell support-layout">
        <div className="faq-column">
          <div className="support-section-title">
            <LifeBuoy size={22} aria-hidden="true" />
            <h2>{copy.support.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {copy.support.faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <ChevronDown size={17} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="direct-contact">
            <span>{copy.support.directContact}</span>
            <a href="mailto:support@monoware.app">support@monoware.app</a>
          </div>
        </div>

        <div className="feedback-column">
          <FeedbackForm />
        </div>
      </section>
    </>
  );
}
