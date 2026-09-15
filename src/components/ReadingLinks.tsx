import { ArrowUpRight } from "lucide-react";
import { monowareUrl } from "@/content/site";
import { useCopy } from "@/i18n/store";

const articles = [
  "how-to-read-an-audio-signal",
  "building-signalmetric-four-views-of-one-live-signal",
  "a-practical-signalmetric-session-from-demo-to-local-recording",
];

const labels = {
  en: {
    heading: "From a recording to an informed decision.",
    titles: ["Read the signal: loudness, peaks and spectrum", "Inside the real-time analysis engine", "Your first session, from Demo to local recording"],
  },
  "zh-CN": {
    heading: "从一段录音，到有依据的判断。",
    titles: ["读懂信号：响度、峰值与频谱", "实时音频分析引擎的内部实现", "第一次使用：从 Demo 到本地录音"],
  },
  "zh-Hant": {
    heading: "從一段錄音，到有依據的判斷。",
    titles: ["讀懂信號：響度、峰值與頻譜", "即時音訊分析引擎的內部實作", "第一次使用：從 Demo 到本機錄音"],
  },
  ja: {
    heading: "録音を、判断の根拠に。",
    titles: ["ラウドネス・ピーク・スペクトルの読み方", "リアルタイム解析エンジンの仕組み", "最初のセッション：Demoからローカル録音へ"],
  },
  ko: {
    heading: "녹음에서 근거 있는 판단까지.",
    titles: ["라우드니스, 피크, 스펙트럼 읽기", "실시간 오디오 분석 엔진의 내부", "첫 세션: Demo에서 로컬 녹음까지"],
  },
};

export default function ReadingLinks() {
  const { locale } = useCopy();
  const text = labels[locale];
  return (
    <section className="section-shell reading-section">
      <h2>{text.heading}</h2>
      <div className="reading-links">
        {articles.map((slug, index) => (
          <a href={monowareUrl(locale, `/blog/${slug}`)} key={slug}>
            <span className="reading-number">0{index + 1}</span>
            <h3>{text.titles[index]}</h3>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
