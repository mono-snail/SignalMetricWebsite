import { AlertTriangle } from "lucide-react";
import MetricDiagram, {
  type DiagramKind,
} from "@/components/MetricDiagram";
import MetricGlossary from "@/components/MetricGlossary";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useCopy } from "@/i18n/store";

const diagrams: DiagramKind[] = [
  "level",
  "loudness",
  "dynamics",
  "spectrum",
  "zcr",
];

export default function MeasurementsPage() {
  const { copy } = useCopy();
  usePageMetadata("measurements");

  return (
    <>
      <section className="page-hero section-shell">
        <div>
          <p className="eyebrow">{copy.measurements.eyebrow}</p>
          <h1>{copy.measurements.title}</h1>
        </div>
        <p>{copy.measurements.lead}</p>
      </section>

      <section className="section-shell measurement-boundary">
        <AlertTriangle size={24} aria-hidden="true" />
        <div>
          <h2>{copy.measurements.boundaryTitle}</h2>
          <p>{copy.measurements.boundaryBody}</p>
        </div>
        <strong>0 dBFS ≠ 0 dB SPL</strong>
      </section>

      <section className="section-shell diagram-section">
        {diagrams.map((diagram) => (
          <MetricDiagram kind={diagram} key={diagram} />
        ))}
      </section>

      <section className="section-shell glossary-section">
        <div className="glossary-intro">
          <span>31 READINGS · 6 GROUPS</span>
          <p>{copy.common.digitalNotSpl}</p>
        </div>
        <MetricGlossary />
      </section>
    </>
  );
}
