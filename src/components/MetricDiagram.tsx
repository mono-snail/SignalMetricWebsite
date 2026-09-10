import { useCopy } from "@/i18n/store";
import type { SiteCopy } from "@/i18n/types";

export type DiagramKind =
  | "level"
  | "loudness"
  | "dynamics"
  | "spectrum"
  | "zcr";

interface MetricDiagramProps {
  kind: DiagramKind;
}

export default function MetricDiagram({ kind }: MetricDiagramProps) {
  const { copy } = useCopy();
  const diagram = copy.measurements.diagrams;
  const content = {
    level: [diagram.levelTitle, diagram.levelDescription],
    loudness: [diagram.loudnessTitle, diagram.loudnessDescription],
    dynamics: [diagram.dynamicsTitle, diagram.dynamicsDescription],
    spectrum: [diagram.spectrumTitle, diagram.spectrumDescription],
    zcr: [diagram.zcrTitle, diagram.zcrDescription],
  }[kind];

  return (
    <figure className="metric-diagram">
      <div className="diagram-canvas">
        {kind === "level" && <LevelDiagram title={content[0]} labels={diagram} />}
        {kind === "loudness" && <LoudnessDiagram title={content[0]} labels={diagram} />}
        {kind === "dynamics" && <DynamicsDiagram title={content[0]} labels={diagram} />}
        {kind === "spectrum" && <SpectrumDiagram title={content[0]} labels={diagram} />}
        {kind === "zcr" && <ZcrDiagram title={content[0]} labels={diagram} />}
      </div>
      <figcaption>
        <strong>{content[0]}</strong>
        <span>{content[1]}</span>
      </figcaption>
    </figure>
  );
}

interface DiagramGraphicProps {
  title: string;
  labels: SiteCopy["measurements"]["diagrams"];
}

function LevelDiagram({ title, labels }: DiagramGraphicProps) {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-labelledby="level-title">
      <title id="level-title">{title}</title>
      <defs>
        <linearGradient id="level-fill" x1="0" x2="1">
          <stop offset="0" stopColor="var(--signal)" />
          <stop offset="0.76" stopColor="var(--signal)" />
          <stop offset="1" stopColor="var(--peak)" />
        </linearGradient>
      </defs>
      <g className="diagram-grid">
        {[48, 112, 176, 240, 304, 368].map((x) => (
          <line key={x} x1={x} y1="42" x2={x} y2="154" />
        ))}
      </g>
      <line className="diagram-axis" x1="32" y1="112" x2="388" y2="112" />
      <rect x="32" y="92" width="254" height="40" rx="20" fill="url(#level-fill)" />
      <line className="peak-line" x1="326" y1="72" x2="326" y2="142" />
      <circle className="peak-dot" cx="326" cy="72" r="5" />
      <g className="diagram-label">
        <text x="32" y="170">−72</text>
        <text x="137" y="170">−48</text>
        <text x="242" y="170">−24</text>
        <text x="376" y="170">0</text>
        <text x="283" y="58">{labels.headroomLabel}</text>
      </g>
      <line className="bracket" x1="286" y1="48" x2="382" y2="48" />
    </svg>
  );
}

function LoudnessDiagram({ title, labels }: DiagramGraphicProps) {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-labelledby="loudness-title">
      <title id="loudness-title">{title}</title>
      <g className="diagram-grid">
        {[55, 105, 155].map((y) => (
          <line key={y} x1="34" y1={y} x2="388" y2={y} />
        ))}
      </g>
      <path
        className="signal-path"
        d="M34 128 C58 130 61 82 88 92 S125 145 151 105 188 72 210 104 248 143 271 94 312 67 333 103 361 129 388 83"
      />
      <rect className="window momentary-window" x="222" y="38" width="38" height="120" rx="5" />
      <rect className="window short-window" x="178" y="31" width="126" height="134" rx="7" />
      <line className="integrated-line" x1="34" y1="22" x2="388" y2="22" />
      <g className="diagram-label">
        <text x="224" y="178">M · 400 ms</text>
        <text x="279" y="178">S · 3 {labels.secondsShort}</text>
        <text x="34" y="17">I · {labels.gatedSessionLabel}</text>
      </g>
    </svg>
  );
}

function DynamicsDiagram({ title, labels }: DiagramGraphicProps) {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-labelledby="dynamics-title">
      <title id="dynamics-title">{title}</title>
      <g className="diagram-grid">
        {[46, 86, 126, 166].map((y) => (
          <line key={y} x1="34" y1={y} x2="388" y2={y} />
        ))}
      </g>
      <path
        className="signal-fill"
        d="M34 143 L48 138 56 103 65 140 84 132 96 61 109 139 132 128 151 88 162 136 189 132 207 42 219 135 248 126 270 74 285 138 313 129 330 96 347 137 370 130 388 119 L388 166 L34 166 Z"
      />
      <line className="average-line" x1="34" y1="126" x2="388" y2="126" />
      <line className="peak-line" x1="207" y1="42" x2="207" y2="126" />
      <g className="diagram-label">
        <text x="42" y="121">{labels.averageLoudnessLabel}</text>
        <text x="216" y="63">{labels.peakLabel}</text>
        <text x="216" y="92">Δ {labels.dynamicsLabel}</text>
      </g>
    </svg>
  );
}

function SpectrumDiagram({ title, labels }: DiagramGraphicProps) {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-labelledby="spectrum-title">
      <title id="spectrum-title">{title}</title>
      <g className="diagram-grid">
        {[48, 108, 168, 228, 288, 348].map((x) => (
          <line key={x} x1={x} y1="28" x2={x} y2="158" />
        ))}
      </g>
      <path
        className="spectrum-fill"
        d="M34 153 C52 147 66 84 88 58 110 32 128 92 144 104 166 121 179 74 196 68 219 61 234 120 253 129 275 140 290 93 307 101 326 111 337 142 352 137 370 132 377 118 388 127 L388 158 L34 158 Z"
      />
      <line className="centroid-line" x1="181" y1="28" x2="181" y2="158" />
      <line className="rolloff-line" x1="327" y1="28" x2="327" y2="158" />
      <rect className="bandwidth-band" x="126" y="19" width="112" height="10" rx="5" />
      <g className="diagram-label">
        <text x="147" y="178">{labels.centroidLabel}</text>
        <text x="310" y="178">R85</text>
        <text x="142" y="16">{labels.bandwidthLabel}</text>
      </g>
    </svg>
  );
}

function ZcrDiagram({ title, labels }: DiagramGraphicProps) {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-labelledby="zcr-title">
      <title id="zcr-title">{title}</title>
      <line className="diagram-axis" x1="32" y1="96" x2="388" y2="96" />
      <path
        className="signal-path"
        d="M32 96 C50 42 67 43 84 96 S117 149 135 96 169 43 187 96 221 149 239 96 272 43 290 96 324 149 342 96 371 52 388 81"
      />
      {[32, 84, 135, 187, 239, 290, 342].map((x) => (
        <g key={x}>
          <circle className="zero-dot" cx={x} cy="96" r="5" />
          <line className="zero-tick" x1={x} y1="151" x2={x} y2="164" />
        </g>
      ))}
      <g className="diagram-label">
        <text x="32" y="180">{labels.zeroCrossingLabel}</text>
      </g>
    </svg>
  );
}
