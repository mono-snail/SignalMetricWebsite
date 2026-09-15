import type { Locale } from "@/i18n/types";

interface WorkflowCopy {
  id: "publish" | "noise" | "prepare";
  title: string;
  description: string;
  evidence: string[];
  image: string;
  alt: string;
}

interface HomeV2Copy {
  heroLead: string;
  heroNote: string;
  heroImageAlt: string;
  appStore: string;
  appStoreStatus: string;
  android: string;
  androidStatus: string;
  guide: string;
  proof: Array<{ value: string; label: string }>;
  workflowsTitle: string;
  workflows: WorkflowCopy[];
  instrumentsTitle: string;
  instrumentsLead: string;
  instrumentPoints: string[];
  instrumentImageAlt: string;
  themesTitle: string;
  privacyTitle: string;
  privacyLead: string;
  availabilityTitle: string;
}

export const homeV2: Record<Locale, HomeV2Copy> = {
  en: {
    heroLead:
      "Check exports, prepare recordings, compare revisions, and inspect live audio. Privately, on device.",
    heroNote: "One purchase. No ads or subscription.",
    heroImageAlt:
      "SignalMetric home screen with publishing, recording, comparison and professional instrument workflows",
    appStore: "Download for iPhone & iPad",
    appStoreStatus: "Available now",
    android: "Android",
    androidStatus: "Coming soon",
    guide: "Measurement guide",
    proof: [
      { value: "10", label: "FILES PER BATCH" },
      { value: "5", label: "INTERFACE LANGUAGES" },
      { value: "4", label: "LIVE WORKSPACES" },
      { value: "0", label: "AUDIO UPLOADS" },
    ],
    workflowsTitle: "From room tone to final export.",
    workflows: [
      {
        id: "publish",
        title: "Find what needs another listen.",
        description:
          "Scan audio or video for loudness, peaks and silence, with time-linked findings.",
        evidence: [
          "LUFS and True Peak",
          "PDF, CSV and JSON reports",
        ],
        image: "/images/v2/report.jpg",
        alt: "SignalMetric file check report showing loudness, peak and silence findings",
      },
      {
        id: "noise",
        title: "See what the room adds.",
        description:
          "Watch FAST, LAeq, minimum and maximum levels without recording audio.",
        evidence: [
          "Relative dBFS(A) or calibrated dBA",
          "No audio file is created",
        ],
        image: "/images/v2/noise.jpg",
        alt: "SignalMetric environment noise monitor with FAST response, LAeq, minimum and maximum readings",
      },
      {
        id: "prepare",
        title: "Compare room tone with your voice.",
        description:
          "Compare a five-second room sample with your voice before the real take.",
        evidence: [
          "Room-to-voice level comparison",
          "Save results without audio",
        ],
        image: "/images/v2/setup.jpg",
        alt: "SignalMetric recording setup screen preparing an environment sample",
      },
    ],
    instrumentsTitle: "Full signal. Four views.",
    instrumentsLead:
      "Monitor level, FFT, spectral history and waveform without interrupting the session.",
    instrumentPoints: [
      "Monitor, Spectrum, Timeline and Scope",
      "LUFS, dBFS, True Peak and dynamics",
    ],
    instrumentImageAlt:
      "SignalMetric professional Monitor workspace with input controls, level meter and spectrum",
    themesTitle: "Six appearances. Same measurements.",
    privacyTitle: "Your audio stays yours.",
    privacyLead: "No account, tracking, ads or cloud media library.",
    availabilityTitle: "iPhone and iPad now. Android next.",
  },
  "zh-CN": {
    heroLead: "检查成片、准备录音、对比修改并查看实时信号。全程本地处理。",
    heroNote: "一次买断，无广告、无订阅。",
    heroImageAlt: "SignalMetric 首页，包含发布前检查、录音准备、版本对比和专业仪表入口",
    appStore: "下载 iPhone 与 iPad 版",
    appStoreStatus: "现已提供",
    android: "Android",
    androidStatus: "即将推出",
    guide: "测量指南",
    proof: [
      { value: "10", label: "单批文件" },
      { value: "5", label: "界面语言" },
      { value: "4", label: "实时工作区" },
      { value: "0", label: "音频上传" },
    ],
    workflowsTitle: "从房间底噪到最终成片。",
    workflows: [
      {
        id: "publish",
        title: "找到需要重听的位置。",
        description:
          "扫描音频或视频的响度、峰值和静音区间，并直接定位问题。",
        evidence: ["LUFS 与 True Peak", "PDF、CSV 与 JSON 报告"],
        image: "/images/v2/report.jpg",
        alt: "SignalMetric 文件检查报告，展示响度、峰值与静音问题",
      },
      {
        id: "noise",
        title: "看清房间里的噪声。",
        description:
          "无需录音，即可查看 FAST、LAeq、最小值与最大值。",
        evidence: ["相对 dBFS(A) 或校准后 dBA", "不会创建音频文件"],
        image: "/images/v2/noise.jpg",
        alt: "SignalMetric 环境噪声监测，包含 FAST、LAeq、最小值和最大值",
      },
      {
        id: "prepare",
        title: "比较房间底噪与人声。",
        description:
          "正式录制前，用 5 秒环境样本与人声确认声音余量。",
        evidence: ["人声与房间电平对比", "只保存结果，不保存音频"],
        image: "/images/v2/setup.jpg",
        alt: "SignalMetric 录音准备界面，等待开始环境采样",
      },
    ],
    instrumentsTitle: "完整信号，四种视图。",
    instrumentsLead:
      "查看电平、FFT、频谱历史与波形，切换时不中断会话。",
    instrumentPoints: [
      "Monitor、Spectrum、Timeline 与 Scope",
      "LUFS、dBFS、True Peak 与动态指标",
    ],
    instrumentImageAlt: "SignalMetric 专业 Monitor 工作区，包含输入控制、电平表与频谱",
    themesTitle: "六套外观，同一测量结果。",
    privacyTitle: "你的音频只属于你。",
    privacyLead: "无需账号，不追踪、无广告、无云端媒体库。",
    availabilityTitle: "iPhone 与 iPad 现已提供，Android 即将推出。",
  },
  "zh-Hant": {
    heroLead: "檢查成片、準備錄音、比較修改並查看即時訊號。全程在裝置上處理。",
    heroNote: "一次買斷，無廣告、無訂閱。",
    heroImageAlt: "SignalMetric 首頁，包含發佈前檢查、錄音準備、版本比較和專業儀表入口",
    appStore: "下載 iPhone 與 iPad 版",
    appStoreStatus: "現已提供",
    android: "Android",
    androidStatus: "即將推出",
    guide: "測量指南",
    proof: [
      { value: "10", label: "單批檔案" },
      { value: "5", label: "介面語言" },
      { value: "4", label: "即時工作區" },
      { value: "0", label: "音訊上傳" },
    ],
    workflowsTitle: "從房間底噪到最終成片。",
    workflows: [
      {
        id: "publish",
        title: "找到需要重聽的位置。",
        description:
          "掃描音訊或影片的響度、峰值與靜音區間，直接定位問題。",
        evidence: ["LUFS 與 True Peak", "PDF、CSV 與 JSON 報告"],
        image: "/images/v2/report.jpg",
        alt: "SignalMetric 檔案檢查報告，顯示響度、峰值與靜音問題",
      },
      {
        id: "noise",
        title: "看清房間裡的噪聲。",
        description:
          "無需錄音，即可查看 FAST、LAeq、最小值與最大值。",
        evidence: ["相對 dBFS(A) 或校準後 dBA", "不會建立音訊檔案"],
        image: "/images/v2/noise.jpg",
        alt: "SignalMetric 環境噪聲監測，包含 FAST、LAeq、最小值與最大值",
      },
      {
        id: "prepare",
        title: "比較房間底噪與人聲。",
        description:
          "正式錄製前，用 5 秒環境樣本與人聲確認聲音餘量。",
        evidence: ["人聲與房間電平比較", "只儲存結果，不儲存音訊"],
        image: "/images/v2/setup.jpg",
        alt: "SignalMetric 錄音準備介面，等待開始環境採樣",
      },
    ],
    instrumentsTitle: "完整訊號，四種視圖。",
    instrumentsLead:
      "查看電平、FFT、頻譜歷史與波形，切換時不中斷會話。",
    instrumentPoints: [
      "Monitor、Spectrum、Timeline 與 Scope",
      "LUFS、dBFS、True Peak 與動態指標",
    ],
    instrumentImageAlt: "SignalMetric 專業 Monitor 工作區，包含輸入控制、電平表與頻譜",
    themesTitle: "六套外觀，同一測量結果。",
    privacyTitle: "你的音訊只屬於你。",
    privacyLead: "無需帳號，不追蹤、無廣告、無雲端媒體庫。",
    availabilityTitle: "iPhone 與 iPad 現已提供，Android 即將推出。",
  },
  ja: {
    heroLead:
      "書き出し確認、録音準備、修正版比較、ライブ測定を端末内で完結。",
    heroNote: "買い切り。広告・サブスクリプションなし。",
    heroImageAlt: "公開前チェック、録音準備、比較、プロ向け計測を備えたSignalMetricのホーム画面",
    appStore: "iPhone・iPad版をダウンロード",
    appStoreStatus: "配信中",
    android: "Android",
    androidStatus: "近日公開",
    guide: "測定ガイド",
    proof: [
      { value: "10", label: "1バッチのファイル数" },
      { value: "5", label: "表示言語" },
      { value: "4", label: "ライブ画面" },
      { value: "0", label: "音声アップロード" },
    ],
    workflowsTitle: "部屋のノイズから最終書き出しまで。",
    workflows: [
      {
        id: "publish",
        title: "聴き直す場所を見つける。",
        description:
          "音声や動画のラウドネス、ピーク、無音区間を時間情報付きで確認。",
        evidence: ["LUFS・True Peak", "PDF・CSV・JSONレポート"],
        image: "/images/v2/report.jpg",
        alt: "ラウドネス、ピーク、無音の指摘を表示するSignalMetricのファイルレポート",
      },
      {
        id: "noise",
        title: "部屋のノイズを見える形に。",
        description:
          "録音せずにFAST、LAeq、最小値、最大値を確認。",
        evidence: ["相対dBFS(A)または校正後dBA", "音声ファイルを作成しない"],
        image: "/images/v2/noise.jpg",
        alt: "FAST、LAeq、最小値、最大値を備えたSignalMetric環境ノイズ画面",
      },
      {
        id: "prepare",
        title: "部屋の音と声を比べる。",
        description:
          "5秒間の環境音と声を比べ、本番前にレベル差を確認。",
        evidence: ["声と部屋のレベル比較", "音声を残さず結果だけ保存"],
        image: "/images/v2/setup.jpg",
        alt: "環境サンプル開始前のSignalMetric録音準備画面",
      },
    ],
    instrumentsTitle: "信号全体を4つの表示で。",
    instrumentsLead:
      "レベル、FFT、周波数履歴、波形をセッションを止めずに確認。",
    instrumentPoints: [
      "Monitor、Spectrum、Timeline、Scope",
      "LUFS、dBFS、True Peak、ダイナミクス",
    ],
    instrumentImageAlt: "入力コントロール、レベルメーター、スペクトラムを表示するSignalMetric Monitor",
    themesTitle: "6つの外観。同じ測定結果。",
    privacyTitle: "音声はあなたのもの。",
    privacyLead: "アカウント、追跡、広告、クラウド素材庫はありません。",
    availabilityTitle: "iPhone・iPad版を配信中。Android版は近日公開。",
  },
  ko: {
    heroLead:
      "완성본 점검, 녹음 준비, 수정본 비교, 실시간 측정을 기기 안에서 처리합니다.",
    heroNote: "한 번 구매. 광고와 구독 없음.",
    heroImageAlt: "게시 전 점검, 녹음 준비, 비교, 전문 계측 기능이 있는 SignalMetric 홈 화면",
    appStore: "iPhone 및 iPad용 다운로드",
    appStoreStatus: "지금 이용 가능",
    android: "Android",
    androidStatus: "출시 예정",
    guide: "측정 가이드",
    proof: [
      { value: "10", label: "배치당 파일" },
      { value: "5", label: "인터페이스 언어" },
      { value: "4", label: "라이브 작업공간" },
      { value: "0", label: "오디오 업로드" },
    ],
    workflowsTitle: "룸 노이즈부터 최종 출력까지.",
    workflows: [
      {
        id: "publish",
        title: "다시 들을 구간을 찾으세요.",
        description:
          "오디오와 영상의 라우드니스, 피크, 무음 구간을 시간 정보와 함께 확인합니다.",
        evidence: ["LUFS 및 True Peak", "PDF, CSV, JSON 보고서"],
        image: "/images/v2/report.jpg",
        alt: "라우드니스, 피크, 무음 문제를 보여 주는 SignalMetric 파일 점검 보고서",
      },
      {
        id: "noise",
        title: "공간의 소음을 확인하세요.",
        description:
          "녹음하지 않고 FAST, LAeq, 최소값과 최대값을 확인합니다.",
        evidence: ["상대 dBFS(A) 또는 보정 후 dBA", "오디오 파일을 생성하지 않음"],
        image: "/images/v2/noise.jpg",
        alt: "FAST, LAeq, 최소값, 최대값을 표시하는 SignalMetric 환경 소음 화면",
      },
      {
        id: "prepare",
        title: "공간 소리와 목소리를 비교하세요.",
        description:
          "5초간 측정한 환경음과 목소리로 본 녹음 전 레벨 차이를 확인합니다.",
        evidence: ["목소리와 공간 레벨 비교", "오디오 없이 결과만 저장"],
        image: "/images/v2/setup.jpg",
        alt: "환경 샘플을 시작하기 전 SignalMetric 녹음 준비 화면",
      },
    ],
    instrumentsTitle: "전체 신호를 4가지 화면으로.",
    instrumentsLead:
      "레벨, FFT, 주파수 이력, 파형을 세션 중단 없이 확인합니다.",
    instrumentPoints: [
      "Monitor, Spectrum, Timeline, Scope",
      "LUFS, dBFS, True Peak 및 다이내믹스",
    ],
    instrumentImageAlt: "입력 제어, 레벨 미터, 스펙트럼을 표시하는 SignalMetric Monitor 화면",
    themesTitle: "6가지 화면. 같은 측정 결과.",
    privacyTitle: "오디오는 사용자만의 것입니다.",
    privacyLead: "계정, 추적, 광고, 클라우드 미디어 보관함이 없습니다.",
    availabilityTitle: "iPhone과 iPad에서 이용 가능. Android는 출시 예정.",
  },
};
