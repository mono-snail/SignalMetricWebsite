import type { Locale, PrivacySectionCopy } from "@/i18n/types";

export const measurementPrivacy: Record<Locale, PrivacySectionCopy> = {
  en: {
    id: "measurements",
    title: "Saved measurements and exports",
    paragraphs: [
      "In versions with measurement saving, saved readings, spectra, measurement conditions and any notes you enter remain in the app's private local storage until you delete them or remove the app. Saving a measurement does not upload it or create an audio recording.",
      "When you explicitly export a measurement, the report is written to the destination you select. Reports do not automatically include audio samples, source file paths or device identifiers. Review any names or notes you choose to include before sharing.",
      "If you choose iCloud Drive or another file provider, that provider handles the exported file under its own policies. SignalMetric does not independently upload measurement reports to Monoware.",
    ],
  },
  "zh-CN": {
    id: "measurements",
    title: "测量保存与导出",
    paragraphs: [
      "在支持保存测量的版本中，已保存的读数、频谱、测量条件及你填写的备注保留在 App 的本地私有存储中，直到你删除它们或移除 App。保存测量不会上传数据，也不会创建录音。",
      "只有你主动导出时，报告才会写入你选择的目标位置。报告不会自动包含音频采样、源文件路径或设备标识。分享前请检查你主动填写的名称与备注。",
      "如果你选择 iCloud Drive 或其他文件提供方，导出文件将由该提供方按其政策处理。SignalMetric 不会自行向 Monoware 上传测量报告。",
    ],
  },
  ja: {
    id: "measurements",
    title: "測定の保存と書き出し",
    paragraphs: [
      "測定保存に対応するバージョンでは、数値、スペクトル、測定条件、入力したメモは、削除またはアプリのアンインストールまで端末内の専用領域に保存されます。測定の保存ではアップロードや音声録音は行いません。",
      "明示的に書き出した場合のみ、レポートは選択した保存先に書き込まれます。音声サンプル、元ファイルのパス、端末識別子は自動的に含まれません。共有前に入力した名前やメモを確認してください。",
      "iCloud Driveなどを選ぶ場合、その事業者のポリシーが適用されます。SignalMetricが測定レポートをMonowareへ独自にアップロードすることはありません。",
    ],
  },
  ko: {
    id: "measurements",
    title: "측정 저장 및 내보내기",
    paragraphs: [
      "측정 저장을 지원하는 버전에서는 수치, 스펙트럼, 측정 조건과 입력한 메모가 삭제하거나 앱을 제거할 때까지 앱의 비공개 로컬 저장소에 보관됩니다. 측정 저장은 업로드나 오디오 녹음을 시작하지 않습니다.",
      "명시적으로 내보내기를 선택할 때만 보고서가 선택한 위치에 저장됩니다. 오디오 샘플, 원본 파일 경로, 기기 식별자는 자동으로 포함되지 않습니다. 공유 전에 직접 입력한 이름과 메모를 확인하세요.",
      "iCloud Drive 등 파일 제공자를 선택하면 해당 제공자의 정책이 적용됩니다. SignalMetric은 측정 보고서를 Monoware로 별도 업로드하지 않습니다.",
    ],
  },
};
