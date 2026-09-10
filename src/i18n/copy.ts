import type { Locale, SiteCopy } from "./types";

export const copy: Record<Locale, SiteCopy> = {
  en: {
    languageName: "English",
    meta: {
      homeTitle: "SignalMetric — Audio Analyzer for iPhone and iPad",
      homeDescription:
        "Check loudness, peaks and frequencies from your microphone or local recordings on iPhone and iPad. One purchase. No ads or subscriptions.",
      measurementsTitle: "Measurement Guide — SignalMetric",
      measurementsDescription:
        "Understand every SignalMetric reading, from dBFS and LUFS to True Peak, dynamics, spectrum and signal integrity.",
      supportTitle: "Support & Feedback — SignalMetric",
      supportDescription:
        "Get SignalMetric help or send a feature request, improvement or bug report to Monoware Support.",
      privacyTitle: "Privacy Policy — SignalMetric",
      privacyDescription:
        "How SignalMetric handles microphone analysis, recordings, imported audio, preferences and optional feedback.",
    },
    nav: {
      instruments: "Instruments",
      measurements: "Measurements",
      privacy: "Privacy",
      support: "Support",
      moreApps: "More apps",
      menu: "Open navigation",
      close: "Close navigation",
    },
    common: {
      skipContent: "Skip to content",
      tagline: "Audio, measured.",
      primaryNavigation: "Primary navigation",
      mobileNavigation: "Mobile navigation",
      technicalSpecification: "Technical specification",
      metricGroups: "Metric groups",
      privacySections: "Privacy policy sections",
      appearance: "appearance",
      language: "Language",
      clearSearch: "Clear search",
      appStore: "View on the App Store",
      comingSoon: "Coming to the App Store",
      learnMeasurements: "Open the measurement guide",
      digitalNotSpl: "Digital full-scale. Not calibrated SPL.",
      localOnly: "Private, on-device analysis",
      readMore: "Read the definition",
      backHome: "Back to SignalMetric",
    },
    home: {
      heroEyebrow: "AUDIO ANALYZER FOR IPHONE & IPAD",
      heroTitle: "SignalMetric",
      heroLead:
        "Check loudness, peaks and frequencies in your voice-overs, podcasts and recordings. Open your audio or inspect a live microphone, privately on your device.",
      heroNote:
        "One purchase. No ads. No subscriptions. Your audio stays on your device.",
      heroImageAlt:
        "SignalMetric Monitor showing live dBFS level, Peak Hold, spectrum and measurement deck",
      proof: [
        { value: "2,048", label: "POINT HANN FFT" },
        { value: "64", label: "LOG SPECTRAL BANDS" },
        { value: "4×", label: "TRUE PEAK ESTIMATE" },
        { value: "30", label: "DISPLAY FPS" },
        { value: "0", label: "ACCOUNTS OR TRACKERS" },
      ],
      instrumentsEyebrow: "FOUR COHERENT WORKSPACES",
      instrumentsTitle: "One engine. Four ways to inspect it.",
      instrumentsLead:
        "Switch the view without interrupting the source or resetting the session. Every workspace exposes its resolution, window and limits.",
      instruments: [
        {
          id: "monitor",
          name: "Monitor",
          eyebrow: "LEVEL + SIGNAL OVERVIEW",
          description:
            "Read RMS, Peak Hold, True Peak estimate, headroom and broad spectral shape at a glance.",
          evidence: ["30 FPS display", "Fixed dBFS scale", "Signal-health state"],
          image: "/images/optimized/1.jpg",
          alt: "SignalMetric Monitor workspace in Studio dark appearance",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          eyebrow: "FREQUENCY EVIDENCE",
          description:
            "Inspect 64 logarithmic bands, spectral statistics and the strongest coherent FFT components in Hz and dBFS.",
          evidence: ["45 Hz–16 kHz", "Six strongest components", "Touch inspection"],
          image: "/images/optimized/2.jpg",
          alt: "SignalMetric measurement deck and spectral statistics in Studio appearance",
        },
        {
          id: "timeline",
          name: "Timeline",
          eyebrow: "30-SECOND SPECTRAL HISTORY",
          description:
            "See when low and high frequencies appeared. Time moves left to right; brightness represents relative energy.",
          evidence: ["30 second window", "64 bands", "8 history FPS"],
          image: "/images/optimized/3.jpg",
          alt: "SignalMetric Timeline showing a rolling spectral history",
        },
        {
          id: "scope",
          name: "Scope",
          eyebrow: "TRIGGERED TIME DOMAIN",
          description:
            "Inspect waveform shape, trigger position, DC estimate and time-per-division with a stable 256-bin envelope.",
          evidence: ["256 envelope bins", "Rising trigger", "Full-scale graticule"],
          image: "/images/optimized/4.jpg",
          alt: "SignalMetric Scope workspace showing a live time-domain waveform",
        },
      ],
      metricsEyebrow: "MEASUREMENT DECK",
      metricsTitle: "Readings that explain each other.",
      metricsLead:
        "A peak without average level lacks context. Integrated loudness without range hides variation. SignalMetric keeps related evidence together.",
      metricGroups: [
        {
          id: "loudness",
          name: "Loudness",
          summary: "Perceptual programme level across complementary time windows.",
          metrics: "M / S / I LUFS · LRA · target delta",
        },
        {
          id: "level",
          name: "Level & Peak",
          summary: "Digital sample energy, inter-sample risk and remaining headroom.",
          metrics: "RMS · Sample Peak · True Peak* · Hold",
        },
        {
          id: "dynamics",
          name: "Dynamics",
          summary: "How peaks relate to average and loudness over the session.",
          metrics: "Crest · PSR · PLR · SNR · Floor P10",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          summary: "Where energy sits and how concentrated or noise-like it is.",
          metrics: "Dominant · Centroid · Width · R85 · Flatness",
        },
        {
          id: "musical",
          name: "Musical",
          summary: "Carefully gated pitch and rhythm context, never false certainty.",
          metrics: "Nearest note · Cents · BPM · Confidence",
        },
        {
          id: "integrity",
          name: "Signal Integrity",
          summary: "Compact evidence about bias, crossings, clipping and format.",
          metrics: "DC · ZCR · Clip events · Rate · Channels",
        },
      ],
      privacyEyebrow: "PRIVATE BY CONSTRUCTION",
      privacyTitle: "The signal stays on the device.",
      privacyLead:
        "SignalMetric needs no account, ad profile or analytics SDK. Its network boundary is narrow and explicit.",
      privacyPoints: [
        {
          title: "Mic is live-only",
          detail: "Normal microphone analysis creates no audio file and uploads nothing.",
        },
        {
          title: "Recording is unmistakable",
          detail: "A local M4A is created only after Record, with a visible red state and timer.",
        },
        {
          title: "Files remain local",
          detail: "Imports and recordings leave the app only through an explicit share action.",
        },
        {
          title: "Feedback is deliberate",
          detail: "A network request occurs only when you submit the support form yourself.",
        },
      ],
      themesEyebrow: "SIX VISUAL SYSTEMS",
      themesTitle: "Different light. Identical analysis.",
      themesLead:
        "Studio, Pulse, Mono and three daylight systems change the complete visual token set, never the measurement engine.",
      themeNames: ["Studio", "Paper", "Red", "Green", "Pulse", "Mono"],
      portfolioEyebrow: "THE MONOWARE FAMILY",
      portfolioTitle: "More local-first tools. One clear standard.",
      portfolioLead:
        "Explore apps for private media, local networks, pulse records, sleep audio and browser utilities.",
      ctaTitle: "Carry a measurement deck in your pocket.",
      ctaLead:
        "Analyze the microphone, an imported file or an explicit local recording without an account or subscription.",
    },
    measurements: {
      eyebrow: "FIELD GUIDE",
      title: "Read every number honestly.",
      lead:
        "Each reading below states its unit, measurement window, practical interpretation and limit. SignalMetric favors transparent evidence over authoritative-looking guesses.",
      boundaryTitle: "The critical boundary",
      boundaryBody:
        "dBFS and dBTP describe a digital signal relative to full scale. They are not calibrated dB SPL, dBA or a hearing-safety dose. Legal, occupational and certified delivery decisions require validated equipment and procedure.",
      searchPlaceholder: "Search LUFS, headroom, centroid…",
      allGroups: "All readings",
      noResults: "No measurement matches this search.",
      summaryLabel: "31 READINGS · 6 GROUPS",
      window: "Window / method",
      howToRead: "How to read it",
      limit: "Limit",
      diagrams: {
        levelTitle: "Digital level and headroom",
        levelDescription:
          "Zero dBFS is the ceiling. Useful signals are negative values; the distance to zero is digital headroom.",
        loudnessTitle: "Three loudness time scales",
        loudnessDescription:
          "Momentary reacts in 400 ms, Short-Term describes 3 seconds, and Integrated accumulates a gated session.",
        dynamicsTitle: "Peak versus average",
        dynamicsDescription:
          "Crest, PSR and PLR compare peak energy with RMS, short-term loudness and integrated loudness respectively.",
        spectrumTitle: "Spectral shape",
        spectrumDescription:
          "Centroid is the energy-weighted center, bandwidth describes spread, and R85 marks the frequency below which 85% of energy falls.",
        zcrTitle: "Zero crossings",
        zcrDescription:
          "ZCR counts sign changes. More high-frequency or noisy content usually crosses zero more often.",
        headroomLabel: "HEADROOM",
        gatedSessionLabel: "GATED SESSION",
        averageLoudnessLabel: "AVERAGE / LOUDNESS",
        peakLabel: "PEAK",
        dynamicsLabel: "DYNAMICS",
        centroidLabel: "CENTROID",
        bandwidthLabel: "BANDWIDTH",
        zeroCrossingLabel: "ZERO-CROSSING EVENTS / WINDOW",
        secondsShort: "sec",
      },
    },
    support: {
      eyebrow: "SUPPORT",
      title: "Precise help for a precise instrument.",
      lead:
        "Check the common answers below or send Monoware Support a reproducible issue, improvement or feature request.",
      faqTitle: "Common questions",
      directContact: "DIRECT CONTACT",
      faqs: [
        {
          question: "What is the difference between Demo and Mic?",
          answer:
            "Demo is a clearly labeled deterministic reference signal and needs no permission. Mic analyzes the current input route in real time. You can switch at any time in Input & Controls.",
        },
        {
          question: "Does Mic record me?",
          answer:
            "No. Normal Mic mode analyzes short windows in memory and discards them. A file is created only after you explicitly tap Record, and the red recording state remains visible.",
        },
        {
          question: "How do I analyze an audio file?",
          answer:
            "Choose Audio in Input & Controls or open a supported audio file from Files or another app. SignalMetric keeps one protected import-cache item and shows a seekable local player.",
        },
        {
          question: "Why is True Peak marked as an estimate?",
          answer:
            "SignalMetric oversamples by 4× to estimate inter-sample peaks. That is useful evidence, but the app is not a certified delivery-compliance meter.",
        },
        {
          question: "Why is this not an SPL decibel meter?",
          answer:
            "The iPhone input is not calibrated here for acoustic pressure. SignalMetric reports digital dBFS and loudness values, not dBA, dBC, dose or legal sound exposure.",
        },
        {
          question: "Can I certify a broadcast master with it?",
          answer:
            "No. The EBU R128 and ATSC A/85 references are visual targets. Formal delivery requires a compliant meter, channel workflow and validation procedure.",
        },
        {
          question: "How do I delete recordings?",
          answer:
            "Open Recordings from Input & Controls, choose Delete for the local item and confirm. Removing the app also removes its private recording storage.",
        },
        {
          question: "Microphone access was denied. What now?",
          answer:
            "Open iOS Settings, find SignalMetric, enable Microphone, return to the app and choose Mic again. Demo and imported-file analysis remain available without it.",
        },
      ],
      formEyebrow: "DIRECT FEEDBACK",
      formTitle: "Help shape SignalMetric.",
      formLead:
        "Your message goes to Monoware Support. Required fields are validated locally before submission.",
      typeLabel: "Feedback type",
      types: {
        feature_request: "Feature request",
        bug: "Bug",
        improvement: "Improvement",
        other: "Other",
      },
      titleLabel: "Title",
      titlePlaceholder: "Short summary",
      descriptionLabel: "Description",
      descriptionPlaceholder: "What happened, what did you expect, and how can we reproduce it?",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      privacyWarning:
        "Do not include audio, passwords, tokens, payment information, customer data or private logs. The form and limited page context are sent only after you submit.",
      send: "Send feedback",
      sending: "Sending…",
      successTitle: "Feedback received.",
      successBody:
        "Your message reached Monoware Support. Keep the reference below if you need to follow up.",
      reference: "Reference",
      another: "Send another",
      errors: {
        title: "Enter a title between 3 and 160 characters.",
        description: "Enter a description between 10 and 5,000 characters.",
        email: "Enter a valid email address.",
        generic: "Feedback could not be sent. Check your connection and try again.",
        tooLarge: "This feedback is too large to send.",
        unavailable: "The feedback service is temporarily unavailable.",
      },
    },
    privacy: {
      eyebrow: "PRIVACY POLICY",
      title: "Private by construction.",
      lead:
        "SignalMetric analyzes audio on your device. There is no account, advertising, analytics or tracking.",
      effective: "Effective",
      effectiveDate: "August 2, 2026",
      sections: [
        {
          id: "microphone",
          title: "Microphone",
          paragraphs: [
            "Microphone access is optional and requested only after you choose Mic or Record. SignalMetric processes short sample windows in memory to calculate digital level, loudness, spectrum, waveform, dominant frequency and rhythm estimates.",
          ],
          bullets: [
            "Normal Mic audio is not written to a file.",
            "Normal Mic audio is not uploaded or transmitted.",
            "Normal Mic audio is discarded after the current analysis window.",
            "Demo remains available without microphone access.",
          ],
        },
        {
          id: "recording",
          title: "Explicit recording",
          paragraphs: [
            "SignalMetric records only after you tap Record. A red state and elapsed timer remain visible. Stopping or interrupting recording finalizes a local M4A in the app's private Application Support storage.",
            "A recording leaves the app only when you explicitly choose a destination in the iOS share sheet. You can delete recordings individually; removing the app also removes them.",
          ],
        },
        {
          id: "imports",
          title: "Imported audio",
          paragraphs: [
            "When you open an audio file, SignalMetric copies it into a protected one-item cache for local playback and analysis. Importing another item removes the older cached import. Imported audio is not uploaded.",
          ],
        },
        {
          id: "feedback",
          title: "Optional feedback",
          paragraphs: [
            "If you submit the in-app or website feedback form, SignalMetric sends the selected category, title, description, email address and limited non-sensitive version context to Monoware Support over HTTPS.",
            "Feedback is used to respond to support requests and improve the product. It is not used for advertising or tracking. Do not include audio, passwords, access tokens, payment details, customer data or private logs.",
          ],
        },
        {
          id: "preferences",
          title: "Local preferences",
          paragraphs: [
            "The selected instrument, response, appearance and onboarding completion state are stored locally. These preferences contain no audio, measurement history or account identity.",
          ],
        },
        {
          id: "website",
          title: "Website",
          paragraphs: [
            "The SignalMetric website uses no analytics, advertising or tracking script. A language preference may be stored in your browser. A network request to Monoware Support occurs only when you submit feedback.",
          ],
        },
        {
          id: "contact",
          title: "Contact and changes",
          paragraphs: [
            "Material changes will be published here with a revised effective date. Privacy questions can be sent to privacy@monoware.app.",
          ],
        },
      ],
    },
    footer: {
      statement: "Professional audio evidence, measured privately on iPhone.",
      boundary:
        "SignalMetric is not a calibrated SPL meter or certified delivery-compliance instrument.",
      contact: "Privacy contact",
      rights: "Monoware. All rights reserved.",
      principles: "ON-DEVICE · NO TRACKING · ONE INSTRUMENT",
    },
    notFound: {
      eyebrow: "404 · NO SIGNAL",
      title: "This route is silent.",
      body: "The requested page does not exist or has moved.",
    },
  },
  "zh-CN": {
    languageName: "简体中文",
    meta: {
      homeTitle: "SignalMetric — iPhone 与 iPad 音频分析仪",
      homeDescription:
        "在 iPhone 与 iPad 上检查配音、播客和录音的响度、峰值与频谱。本地分析，一次买断，无广告、无订阅。",
      measurementsTitle: "测量指南 — SignalMetric",
      measurementsDescription:
        "理解 SignalMetric 的每项读数，从 dBFS、LUFS 到 True Peak、动态、频谱与信号完整性。",
      supportTitle: "支持与反馈 — SignalMetric",
      supportDescription: "获取 SignalMetric 帮助，或向 Monoware 提交需求、改进与 Bug。",
      privacyTitle: "隐私政策 — SignalMetric",
      privacyDescription:
        "了解 SignalMetric 如何处理麦克风分析、录音、导入音频、本地偏好和主动反馈。",
    },
    nav: {
      instruments: "仪器",
      measurements: "测量指南",
      privacy: "隐私",
      support: "支持",
      moreApps: "更多 App",
      menu: "打开导航",
      close: "关闭导航",
    },
    common: {
      skipContent: "跳到正文",
      tagline: "音频，精确测量。",
      primaryNavigation: "主导航",
      mobileNavigation: "移动端导航",
      technicalSpecification: "技术规格",
      metricGroups: "测量分组",
      privacySections: "隐私政策章节",
      appearance: "外观",
      language: "语言",
      clearSearch: "清除搜索",
      appStore: "前往 App Store",
      comingSoon: "即将登陆 App Store",
      learnMeasurements: "打开测量指南",
      digitalNotSpl: "数字满量程，不是校准 SPL。",
      localOnly: "私密的端侧分析",
      readMore: "查看定义",
      backHome: "返回 SignalMetric",
    },
    home: {
      heroEyebrow: "IPHONE 与 IPAD 音频分析仪",
      heroTitle: "SignalMetric",
      heroLead:
        "检查配音、播客和录音的响度、峰值与频率。打开自己的音频，或观察实时麦克风，所有分析在设备本地完成。",
      heroNote:
        "一次买断。无广告。无订阅。音频留在你的设备上。",
      heroImageAlt: "SignalMetric Monitor 显示实时 dBFS、电平保持、频谱和测量面板",
      proof: [
        { value: "2,048", label: "点 HANN FFT" },
        { value: "64", label: "对数频谱带" },
        { value: "4×", label: "TRUE PEAK 估算" },
        { value: "30", label: "显示 FPS" },
        { value: "0", label: "账号或跟踪器" },
      ],
      instrumentsEyebrow: "四个一致的工作区",
      instrumentsTitle: "同一个分析内核，四种观察方式。",
      instrumentsLead:
        "切换视图不会中断输入或重置会话。每个工作区都会明确展示分辨率、时间窗和能力边界。",
      instruments: [
        {
          id: "monitor",
          name: "Monitor",
          eyebrow: "电平与信号总览",
          description: "一眼读取 RMS、Peak Hold、True Peak 估算、余量和整体频谱形状。",
          evidence: ["30 FPS 显示", "固定 dBFS 刻度", "信号健康状态"],
          image: "/images/optimized/1.jpg",
          alt: "Studio 深色外观下的 SignalMetric Monitor 工作区",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          eyebrow: "频率证据",
          description:
            "检查 64 个对数频带、频谱统计，以及最强的相干 FFT 分量对应的 Hz 与 dBFS。",
          evidence: ["45 Hz–16 kHz", "六个最强分量", "触摸检查"],
          image: "/images/optimized/2.jpg",
          alt: "SignalMetric Studio 外观下的测量面板和频谱统计",
        },
        {
          id: "timeline",
          name: "Timeline",
          eyebrow: "30 秒频谱历史",
          description: "观察低频和高频何时出现。时间从左向右，亮度表示相对能量。",
          evidence: ["30 秒窗口", "64 频带", "8 FPS 历史"],
          image: "/images/optimized/3.jpg",
          alt: "SignalMetric Timeline 滚动频谱历史",
        },
        {
          id: "scope",
          name: "Scope",
          eyebrow: "触发式时域",
          description: "用稳定的 256-bin 包络检查波形形状、触发位置、DC 估算和时基。",
          evidence: ["256 包络 bin", "上升沿触发", "满量程网格"],
          image: "/images/optimized/4.jpg",
          alt: "SignalMetric Scope 实时时域波形",
        },
      ],
      metricsEyebrow: "测量面板",
      metricsTitle: "让读数彼此解释。",
      metricsLead:
        "只有峰值而没有平均电平，就缺少上下文；只有综合响度而没有范围，就会隐藏变化。SignalMetric 把相关证据放在一起。",
      metricGroups: [
        {
          id: "loudness",
          name: "响度",
          summary: "通过互补时间窗描述节目的感知电平。",
          metrics: "M / S / I LUFS · LRA · 目标差值",
        },
        {
          id: "level",
          name: "电平与峰值",
          summary: "数字采样能量、采样间风险和剩余余量。",
          metrics: "RMS · Sample Peak · True Peak* · Hold",
        },
        {
          id: "dynamics",
          name: "动态",
          summary: "峰值与平均值、响度之间在会话中的关系。",
          metrics: "Crest · PSR · PLR · SNR · Floor P10",
        },
        {
          id: "spectrum",
          name: "频谱",
          summary: "能量位于何处，以及它集中还是更接近噪声。",
          metrics: "Dominant · Centroid · Width · R85 · Flatness",
        },
        {
          id: "musical",
          name: "音乐性",
          summary: "经过置信度门限的音高与节奏信息，不伪造确定性。",
          metrics: "最近音名 · 音分 · BPM · 置信度",
        },
        {
          id: "integrity",
          name: "信号完整性",
          summary: "关于偏置、过零、削波和格式的紧凑证据。",
          metrics: "DC · ZCR · 削波事件 · 采样率 · 声道",
        },
      ],
      privacyEyebrow: "从设计上保护隐私",
      privacyTitle: "信号留在设备上。",
      privacyLead:
        "SignalMetric 不需要账号、广告画像或分析 SDK，网络边界狭窄且明确。",
      privacyPoints: [
        {
          title: "Mic 只做实时分析",
          detail: "普通麦克风分析不会创建音频文件，也不会上传内容。",
        },
        {
          title: "录音状态明确",
          detail: "只有点击 Record 后才创建本地 M4A，并持续显示红色状态与计时。",
        },
        {
          title: "文件保持本地",
          detail: "导入和录音文件只有在你明确分享时才离开 App。",
        },
        {
          title: "反馈由你主动发起",
          detail: "只有你亲自提交支持表单时才会产生网络请求。",
        },
      ],
      themesEyebrow: "六套视觉系统",
      themesTitle: "光线不同，分析一致。",
      themesLead:
        "Studio、Pulse、Mono 与三套日光主题会改变完整视觉 Token，但绝不改变测量内核。",
      themeNames: ["Studio", "Paper", "Red", "Green", "Pulse", "Mono"],
      portfolioEyebrow: "MONOWARE 产品矩阵",
      portfolioTitle: "更多本地优先工具，同一套清晰标准。",
      portfolioLead:
        "探索面向私密媒体、本地网络、脉搏记录、睡眠声音和浏览器工作的其他 App。",
      ctaTitle: "把专业测量台放进口袋。",
      ctaLead:
        "无需账号或订阅，即可分析麦克风、导入文件或明确创建的本地录音。",
    },
    measurements: {
      eyebrow: "指标指南",
      title: "诚实地理解每个数字。",
      lead:
        "下面的每项读数都说明单位、测量时间窗、实际读法和限制。SignalMetric 选择透明证据，而不是看似权威的猜测。",
      boundaryTitle: "最重要的边界",
      boundaryBody:
        "dBFS 和 dBTP 描述相对于数字满量程的信号，不是校准的 dB SPL、dBA 或听力安全剂量。法律、职业安全和认证交付需要经过验证的设备与流程。",
      searchPlaceholder: "搜索 LUFS、余量、频谱质心…",
      allGroups: "全部读数",
      noResults: "没有匹配的测量项。",
      summaryLabel: "31 项读数 · 6 个分组",
      window: "时间窗 / 方法",
      howToRead: "如何理解",
      limit: "限制",
      diagrams: {
        levelTitle: "数字电平与余量",
        levelDescription:
          "0 dBFS 是上限。有效信号通常是负值，与 0 的距离就是数字余量。",
        loudnessTitle: "三种响度时间尺度",
        loudnessDescription:
          "Momentary 响应 400 ms，Short-Term 描述 3 秒，Integrated 累积经过门限的会话。",
        dynamicsTitle: "峰值与平均值",
        dynamicsDescription:
          "Crest、PSR 和 PLR 分别比较峰值与 RMS、短时响度和综合响度。",
        spectrumTitle: "频谱形状",
        spectrumDescription:
          "Centroid 是能量加权中心，Bandwidth 描述扩散，R85 表示其下包含 85% 能量的频率。",
        zcrTitle: "过零率",
        zcrDescription: "ZCR 统计符号变化。高频或噪声更多的内容通常会更频繁地过零。",
        headroomLabel: "余量",
        gatedSessionLabel: "门限会话",
        averageLoudnessLabel: "平均值 / 响度",
        peakLabel: "峰值",
        dynamicsLabel: "动态",
        centroidLabel: "质心",
        bandwidthLabel: "带宽",
        zeroCrossingLabel: "时间窗内的过零事件",
        secondsShort: "秒",
      },
    },
    support: {
      eyebrow: "支持",
      title: "为精密仪器提供精确帮助。",
      lead: "先查看常见答案，或向 Monoware Support 提交可复现的问题、改进和功能需求。",
      faqTitle: "常见问题",
      directContact: "直接联系",
      faqs: [
        {
          question: "Demo 和 Mic 有什么区别？",
          answer:
            "Demo 是明确标识的确定性参考信号，不需要权限。Mic 会实时分析当前输入路由。你可以随时在 Input & Controls 中切换。",
        },
        {
          question: "Mic 会录下我的声音吗？",
          answer:
            "不会。普通 Mic 模式只在内存中分析短窗口并立即丢弃。只有明确点击 Record 后才会创建文件，且红色录音状态会持续显示。",
        },
        {
          question: "如何分析音频文件？",
          answer:
            "在 Input & Controls 中选择 Audio，或从 Files/其他 App 打开支持的音频。SignalMetric 只保留一个受保护的导入缓存，并提供可拖动的本地播放器。",
        },
        {
          question: "为什么 True Peak 标记为 Estimate？",
          answer:
            "SignalMetric 通过 4× 过采样估算采样间峰值。这是有用证据，但 App 不是经过认证的交付合规表。",
        },
        {
          question: "为什么它不是 SPL 分贝计？",
          answer:
            "这里没有把 iPhone 输入校准到声压。SignalMetric 报告数字 dBFS 和响度，不报告 dBA、dBC、剂量或法定声暴露。",
        },
        {
          question: "可以用它认证广播母带吗？",
          answer:
            "不可以。EBU R128 和 ATSC A/85 只是视觉参考目标。正式交付需要合规仪表、正确声道流程和验证程序。",
        },
        {
          question: "如何删除录音？",
          answer:
            "从 Input & Controls 打开 Recordings，选择本地项目的 Delete 并确认。删除 App 也会移除私有录音存储。",
        },
        {
          question: "麦克风权限被拒绝后怎么办？",
          answer:
            "打开 iOS 设置，找到 SignalMetric 并启用麦克风，然后返回 App 再选择 Mic。Demo 和导入文件分析不需要该权限。",
        },
      ],
      formEyebrow: "直接反馈",
      formTitle: "参与塑造 SignalMetric。",
      formLead: "消息会发送给 Monoware Support。必填字段会在提交前进行本地校验。",
      typeLabel: "反馈类型",
      types: {
        feature_request: "功能需求",
        bug: "Bug",
        improvement: "改进建议",
        other: "其他",
      },
      titleLabel: "标题",
      titlePlaceholder: "简短摘要",
      descriptionLabel: "描述",
      descriptionPlaceholder: "发生了什么、你预期什么，以及如何复现？",
      emailLabel: "邮箱",
      emailPlaceholder: "you@example.com",
      privacyWarning:
        "不要包含音频、密码、令牌、支付信息、客户数据或私密日志。只有提交后，表单和有限页面上下文才会被发送。",
      send: "发送反馈",
      sending: "发送中…",
      successTitle: "反馈已收到。",
      successBody: "消息已到达 Monoware Support。如需跟进，请保留下方编号。",
      reference: "编号",
      another: "继续反馈",
      errors: {
        title: "标题需为 3–160 个字符。",
        description: "描述需为 10–5,000 个字符。",
        email: "请输入有效邮箱。",
        generic: "反馈未能发送，请检查网络后重试。",
        tooLarge: "反馈内容过长，无法发送。",
        unavailable: "反馈服务暂时不可用。",
      },
    },
    privacy: {
      eyebrow: "隐私政策",
      title: "从设计上保护隐私。",
      lead: "SignalMetric 在你的设备上分析音频，不含账号、广告、分析或跟踪。",
      effective: "生效日期",
      effectiveDate: "2026 年 8 月 2 日",
      sections: [
        {
          id: "microphone",
          title: "麦克风",
          paragraphs: [
            "麦克风权限是可选的，只有选择 Mic 或 Record 后才会请求。SignalMetric 在内存中处理短采样窗口，用于计算数字电平、响度、频谱、波形、主频与节奏估算。",
          ],
          bullets: [
            "普通 Mic 音频不会写入文件。",
            "普通 Mic 音频不会上传或传输。",
            "普通 Mic 音频会在当前分析窗口后丢弃。",
            "没有麦克风权限仍可使用 Demo。",
          ],
        },
        {
          id: "recording",
          title: "明确录音",
          paragraphs: [
            "只有点击 Record 后才会录音，红色状态和计时会持续显示。停止或中断时，录音会完成为 App 私有 Application Support 中的本地 M4A。",
            "只有你明确使用 iOS 分享菜单选择目的地时，录音才会离开 App。你可以单独删除录音；删除 App 也会移除它们。",
          ],
        },
        {
          id: "imports",
          title: "导入音频",
          paragraphs: [
            "打开音频文件时，SignalMetric 会将其复制到受保护的单项缓存，用于本地播放和分析。导入新项目会删除旧缓存，导入音频不会上传。",
          ],
        },
        {
          id: "feedback",
          title: "可选反馈",
          paragraphs: [
            "如果你提交 App 内或网站反馈表单，SignalMetric 会通过 HTTPS 向 Monoware Support 发送所选类别、标题、描述、邮箱和有限的非敏感版本信息。",
            "反馈只用于响应支持请求和改进产品，不用于广告或跟踪。请勿包含音频、密码、访问令牌、支付信息、客户数据或私密日志。",
          ],
        },
        {
          id: "preferences",
          title: "本地偏好",
          paragraphs: [
            "所选仪器、响应、外观和引导完成状态存储在本地，不包含音频、测量历史或账号身份。",
          ],
        },
        {
          id: "website",
          title: "网站",
          paragraphs: [
            "SignalMetric 网站不使用分析、广告或跟踪脚本。浏览器可能保存语言偏好；只有提交反馈时才会向 Monoware Support 发起网络请求。",
          ],
        },
        {
          id: "contact",
          title: "联系与变更",
          paragraphs: [
            "重大变更会在这里公布并更新生效日期。隐私问题可发送至 privacy@monoware.app。",
          ],
        },
      ],
    },
    footer: {
      statement: "在 iPhone 上私密测量专业音频证据。",
      boundary: "SignalMetric 不是校准 SPL 表或认证交付合规仪器。",
      contact: "隐私联系",
      rights: "Monoware 保留所有权利。",
      principles: "设备端 · 无跟踪 · 一台精密仪器",
    },
    notFound: {
      eyebrow: "404 · 无信号",
      title: "这个路由没有声音。",
      body: "请求的页面不存在或已移动。",
    },
  },
  "zh-Hant": {
    languageName: "繁體中文",
    meta: {
      homeTitle: "SignalMetric — iPhone 與 iPad 音訊分析儀",
      homeDescription:
        "在 iPhone 與 iPad 上檢查配音、播客和錄音的響度、峰值與頻譜。本機分析，一次買斷，無廣告、無訂閱。",
      measurementsTitle: "測量指南 — SignalMetric",
      measurementsDescription:
        "理解 SignalMetric 的每項讀數，從 dBFS、LUFS 到 True Peak、動態、頻譜與信號完整性。",
      supportTitle: "支援與意見回饋 — SignalMetric",
      supportDescription: "取得 SignalMetric 協助，或向 Monoware 提交需求、改進與 Bug。",
      privacyTitle: "隱私政策 — SignalMetric",
      privacyDescription:
        "瞭解 SignalMetric 如何處理麥克風分析、錄音、匯入音訊、本機偏好和主動意見回饋。",
    },
    nav: {
      instruments: "儀器",
      measurements: "測量指南",
      privacy: "隱私",
      support: "支援",
      moreApps: "更多 App",
      menu: "開啟導覽",
      close: "關閉導覽",
    },
    common: {
      skipContent: "跳到主要內容",
      tagline: "音訊，精確測量。",
      primaryNavigation: "主要導覽",
      mobileNavigation: "行動版導覽",
      technicalSpecification: "技術規格",
      metricGroups: "測量分組",
      privacySections: "隱私政策章節",
      appearance: "外觀",
      language: "語言",
      clearSearch: "清除搜尋",
      appStore: "前往 App Store",
      comingSoon: "即將登上 App Store",
      learnMeasurements: "開啟測量指南",
      digitalNotSpl: "數位滿量程，不是校準 SPL。",
      localOnly: "私密的裝置端分析",
      readMore: "檢視定義",
      backHome: "返回 SignalMetric",
    },
    home: {
      heroEyebrow: "IPHONE 與 IPAD 音訊分析儀",
      heroTitle: "SignalMetric",
      heroLead:
        "檢查配音、播客與錄音的響度、峰值及頻率。開啟自己的音訊，或觀察即時麥克風，所有分析都在裝置上完成。",
      heroNote:
        "一次買斷。無廣告。無訂閱。音訊留在你的裝置上。",
      heroImageAlt: "SignalMetric Monitor 顯示即時 dBFS、電平保持、頻譜和測量面板",
      proof: [
        { value: "2,048", label: "點 HANN FFT" },
        { value: "64", label: "對數頻譜帶" },
        { value: "4×", label: "TRUE PEAK 估算" },
        { value: "30", label: "顯示 FPS" },
        { value: "0", label: "帳號或追蹤器" },
      ],
      instrumentsEyebrow: "四個一致的工作區",
      instrumentsTitle: "同一個分析內核，四種觀察方式。",
      instrumentsLead:
        "切換視圖不會中斷輸入或重置工作階段。每個工作區都會清楚呈現解析度、時間窗與能力邊界。",
      instruments: [
        {
          id: "monitor",
          name: "Monitor",
          eyebrow: "電平與信號總覽",
          description: "一眼讀取 RMS、Peak Hold、True Peak 估算、餘量與整體頻譜形狀。",
          evidence: ["30 FPS 顯示", "固定 dBFS 刻度", "信號健康狀態"],
          image: "/images/optimized/1.jpg",
          alt: "Studio 深色外觀下的 SignalMetric Monitor 工作區",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          eyebrow: "頻率證據",
          description:
            "檢查 64 個對數頻帶、頻譜統計，以及最強的相干 FFT 分量對應的 Hz 與 dBFS。",
          evidence: ["45 Hz–16 kHz", "六個最強分量", "觸控檢查"],
          image: "/images/optimized/2.jpg",
          alt: "SignalMetric Studio 外觀下的測量面板和頻譜統計",
        },
        {
          id: "timeline",
          name: "Timeline",
          eyebrow: "30 秒頻譜歷史",
          description: "觀察低頻與高頻何時出現。時間從左向右，亮度表示相對能量。",
          evidence: ["30 秒時間窗", "64 頻帶", "8 FPS 歷史"],
          image: "/images/optimized/3.jpg",
          alt: "SignalMetric Timeline 滾動頻譜歷史",
        },
        {
          id: "scope",
          name: "Scope",
          eyebrow: "觸發式時域",
          description: "用穩定的 256-bin 包絡檢查波形形狀、觸發位置、DC 估算與時基。",
          evidence: ["256 包絡 bin", "上升沿觸發", "滿量程網格"],
          image: "/images/optimized/4.jpg",
          alt: "SignalMetric Scope 即時時域波形",
        },
      ],
      metricsEyebrow: "測量面板",
      metricsTitle: "讓讀數彼此解釋。",
      metricsLead:
        "只有峰值而沒有平均電平，就缺少脈絡；只有整合響度而沒有範圍，就會隱藏變化。SignalMetric 把相關證據放在一起。",
      metricGroups: [
        {
          id: "loudness",
          name: "響度",
          summary: "透過互補時間窗描述節目的感知電平。",
          metrics: "M / S / I LUFS · LRA · 目標差值",
        },
        {
          id: "level",
          name: "電平與峰值",
          summary: "數位取樣能量、取樣間風險與剩餘餘量。",
          metrics: "RMS · Sample Peak · True Peak* · Hold",
        },
        {
          id: "dynamics",
          name: "動態",
          summary: "峰值與平均值、響度之間在工作階段中的關係。",
          metrics: "Crest · PSR · PLR · SNR · Floor P10",
        },
        {
          id: "spectrum",
          name: "頻譜",
          summary: "能量位於何處，以及它是集中還是更接近噪聲。",
          metrics: "Dominant · Centroid · Width · R85 · Flatness",
        },
        {
          id: "musical",
          name: "音樂性",
          summary: "經過可信度門限的音高與節奏資訊，不營造虛假的確定性。",
          metrics: "最近音名 · 音分 · BPM · 可信度",
        },
        {
          id: "integrity",
          name: "信號完整性",
          summary: "關於偏置、過零、削波與格式的精簡證據。",
          metrics: "DC · ZCR · 削波事件 · 取樣率 · 聲道",
        },
      ],
      privacyEyebrow: "從設計上保護隱私",
      privacyTitle: "信號留在裝置上。",
      privacyLead:
        "SignalMetric 不需要帳號、廣告畫像或分析 SDK，網路邊界狹窄且明確。",
      privacyPoints: [
        {
          title: "Mic 只做即時分析",
          detail: "一般麥克風分析不會建立音訊檔案，也不會上傳內容。",
        },
        {
          title: "錄音狀態明確",
          detail: "只有點擊 Record 後才建立本機 M4A，並持續顯示紅色狀態與計時。",
        },
        {
          title: "檔案保持本機",
          detail: "匯入與錄音檔案只有在你明確分享時才離開 App。",
        },
        {
          title: "意見回饋由你主動發起",
          detail: "只有你親自提交支援表單時才會產生網路請求。",
        },
      ],
      themesEyebrow: "六套視覺系統",
      themesTitle: "光線不同，分析一致。",
      themesLead:
        "Studio、Pulse、Mono 與三套日光主題會改變完整視覺 Token，但絕不改變測量內核。",
      themeNames: ["Studio", "Paper", "Red", "Green", "Pulse", "Mono"],
      portfolioEyebrow: "MONOWARE 產品矩陣",
      portfolioTitle: "更多本機優先工具，同一套清晰標準。",
      portfolioLead:
        "探索針對私密媒體、區域網路、脈搏紀錄、睡眠音訊與瀏覽器工作的其他 App。",
      ctaTitle: "把專業測量台放進口袋。",
      ctaLead:
        "無需帳號或訂閱，即可分析麥克風、匯入檔案或明確建立的本機錄音。",
    },
    measurements: {
      eyebrow: "指標指南",
      title: "誠實地理解每個數字。",
      lead:
        "下面的每項讀數都說明單位、測量時間窗、實際讀法與限制。SignalMetric 選擇透明證據，而不是看似權威的猜測。",
      boundaryTitle: "最重要的邊界",
      boundaryBody:
        "dBFS 和 dBTP 描述相對於數位滿量程的信號，不是校準的 dB SPL、dBA 或聽力安全劑量。法律、職業安全和認證交付需要經過驗證的裝置與流程。",
      searchPlaceholder: "搜尋 LUFS、餘量、頻譜質心…",
      allGroups: "全部讀數",
      noResults: "沒有符合搜尋條件的測量項目。",
      summaryLabel: "31 項讀數 · 6 個分組",
      window: "時間窗 / 方法",
      howToRead: "如何理解",
      limit: "限制",
      diagrams: {
        levelTitle: "數位電平與餘量",
        levelDescription:
          "0 dBFS 是上限。有效信號通常是負值，與 0 的距離就是數位餘量。",
        loudnessTitle: "三種響度時間尺度",
        loudnessDescription:
          "Momentary 反應 400 ms，Short-Term 描述 3 秒，Integrated 累積經過門限的工作階段。",
        dynamicsTitle: "峰值與平均值",
        dynamicsDescription:
          "Crest、PSR 與 PLR 分別比較峰值與 RMS、短時響度和整合響度。",
        spectrumTitle: "頻譜形狀",
        spectrumDescription:
          "Centroid 是能量加權中心，Bandwidth 描述擴散，R85 表示其下包含 85% 能量的頻率。",
        zcrTitle: "過零率",
        zcrDescription: "ZCR 統計符號變化。高頻或噪聲更多的內容通常會更頻繁地過零。",
        headroomLabel: "餘量",
        gatedSessionLabel: "門限會話",
        averageLoudnessLabel: "平均值 / 響度",
        peakLabel: "峰值",
        dynamicsLabel: "動態",
        centroidLabel: "質心",
        bandwidthLabel: "頻寬",
        zeroCrossingLabel: "時間窗內的過零事件",
        secondsShort: "秒",
      },
    },
    support: {
      eyebrow: "支援",
      title: "為精密儀器提供精確協助。",
      lead: "先檢視常見答案，或向 Monoware Support 提交可復現的問題、改進和功能需求。",
      faqTitle: "常見問題",
      directContact: "直接聯絡",
      faqs: [
        {
          question: "Demo 和 Mic 有什麼差異？",
          answer:
            "Demo 是清楚標示的確定性參考信號，不需要權限。Mic 會即時分析目前輸入路由。你可以隨時在 Input & Controls 中切換。",
        },
        {
          question: "Mic 會錄下我的聲音嗎？",
          answer:
            "不會。一般 Mic 模式只在記憶體中分析短時間窗並立即丟棄。只有明確點擊 Record 後才會建立檔案，且紅色錄音狀態會持續顯示。",
        },
        {
          question: "如何分析音訊檔案？",
          answer:
            "在 Input & Controls 中選擇 Audio，或從 Files/其他 App 開啟支援的音訊。SignalMetric 只保留一個受保護的匯入快取，並提供可拖曳的本機播放器。",
        },
        {
          question: "為什麼 True Peak 標記為 Estimate？",
          answer:
            "SignalMetric 透過 4× 過取樣估算取樣間峰值。這是有用的證據，但 App 不是經過認證的交付合規儀表。",
        },
        {
          question: "為什麼它不是 SPL 分貝計？",
          answer:
            "這裡沒有把 iPhone 輸入校準到聲壓。SignalMetric 報告數位 dBFS 和響度，不報告 dBA、dBC、劑量或法定聲暴露。",
        },
        {
          question: "可以用它認證廣播母帶嗎？",
          answer:
            "不可以。EBU R128 和 ATSC A/85 只是視覺參考目標。正式交付需要合規儀表、正確聲道流程和驗證程序。",
        },
        {
          question: "如何刪除錄音？",
          answer:
            "從 Input & Controls 開啟 Recordings，選擇本機項目的 Delete 並確認。刪除 App 也會移除私有錄音儲存。",
        },
        {
          question: "麥克風權限被拒絕後怎麼辦？",
          answer:
            "開啟 iOS 設定，找到 SignalMetric 並啟用麥克風，然後返回 App 再選擇 Mic。Demo 與匯入檔案分析不需要該權限。",
        },
      ],
      formEyebrow: "直接意見回饋",
      formTitle: "參與塑造 SignalMetric。",
      formLead: "訊息會發送給 Monoware Support。必填欄位會在提交前進行本機驗證。",
      typeLabel: "意見回饋類型",
      types: {
        feature_request: "功能需求",
        bug: "Bug",
        improvement: "改進建議",
        other: "其他",
      },
      titleLabel: "標題",
      titlePlaceholder: "簡短摘要",
      descriptionLabel: "描述",
      descriptionPlaceholder: "發生了什麼、你預期什麼，以及如何復現？",
      emailLabel: "電子郵件",
      emailPlaceholder: "you@example.com",
      privacyWarning:
        "不要包含音訊、密碼、存取權杖、付款資訊、客戶資料或私密日誌。只有提交後，表單與有限的頁面脈絡才會被傳送。",
      send: "發送意見回饋",
      sending: "發送中…",
      successTitle: "意見回饋已收到。",
      successBody: "訊息已到達 Monoware Support。如需跟進，請保留下方編號。",
      reference: "編號",
      another: "繼續意見回饋",
      errors: {
        title: "標題需為 3–160 個字元。",
        description: "描述需為 10–5,000 個字元。",
        email: "請輸入有效的電子郵件地址。",
        generic: "意見回饋未能發送，請檢查網路後重試。",
        tooLarge: "意見回饋內容過長，無法發送。",
        unavailable: "意見回饋服務暫時不可用。",
      },
    },
    privacy: {
      eyebrow: "隱私政策",
      title: "從設計上保護隱私。",
      lead: "SignalMetric 在你的裝置上分析音訊，不含帳號、廣告、分析或追蹤。",
      effective: "生效日期",
      effectiveDate: "2026 年 8 月 2 日",
      sections: [
        {
          id: "microphone",
          title: "麥克風",
          paragraphs: [
            "麥克風權限是選用功能，只有選擇 Mic 或 Record 後才會請求。SignalMetric 在記憶體中處理短取樣時間窗，用於計算數位電平、響度、頻譜、波形、主頻與節奏估算。",
          ],
          bullets: [
            "一般 Mic 音訊不會寫入檔案。",
            "一般 Mic 音訊不會上傳或傳輸。",
            "一般 Mic 音訊會在目前分析時間窗後丟棄。",
            "沒有麥克風權限仍可使用 Demo。",
          ],
        },
        {
          id: "recording",
          title: "明確錄音",
          paragraphs: [
            "只有點擊 Record 後才會錄音，紅色狀態和計時會持續顯示。停止或中斷時，錄音會完成為 App 私有 Application Support 中的本機 M4A。",
            "只有你明確使用 iOS 分享選單選擇目的地時，錄音才會離開 App。你可以單獨刪除錄音；刪除 App 也會移除它們。",
          ],
        },
        {
          id: "imports",
          title: "匯入音訊",
          paragraphs: [
            "開啟音訊檔案時，SignalMetric 會將其複製到受保護的單項快取，用於本機播放和分析。匯入新項目會刪除舊快取，匯入音訊不會上傳。",
          ],
        },
        {
          id: "feedback",
          title: "可選意見回饋",
          paragraphs: [
            "如果你提交 App 內或網站意見回饋表單，SignalMetric 會透過 HTTPS 向 Monoware Support 傳送所選類別、標題、描述、電子郵件與有限的非敏感版本資訊。",
            "意見回饋只用於回應支援請求與改進產品，不用於廣告或追蹤。請勿包含音訊、密碼、存取權杖、付款資訊、客戶資料或私密日誌。",
          ],
        },
        {
          id: "preferences",
          title: "本機偏好",
          paragraphs: [
            "所選儀器、反應模式、外觀與引導完成狀態儲存在本機，不包含音訊、測量歷史或帳號識別資訊。",
          ],
        },
        {
          id: "website",
          title: "網站",
          paragraphs: [
            "SignalMetric 網站不使用分析、廣告或追蹤腳本。瀏覽器可能儲存語言偏好；只有提交意見回饋時才會向 Monoware Support 發起網路請求。",
          ],
        },
        {
          id: "contact",
          title: "聯絡方式與變更",
          paragraphs: [
            "重大變更會在這裡公布並更新生效日期。隱私問題可寄至 privacy@monoware.app。",
          ],
        },
      ],
    },
    footer: {
      statement: "在 iPhone 上私密測量專業音訊證據。",
      boundary: "SignalMetric 不是校準 SPL 表或認證交付合規儀器。",
      contact: "隱私聯絡",
      rights: "Monoware 保留所有權利。",
      principles: "裝置端 · 無追蹤 · 一台精密儀器",
    },
    notFound: {
      eyebrow: "404 · 無信號",
      title: "這個路由沒有聲音。",
      body: "請求的頁面不存在或已移動。",
    },
  },
  ja: {
    languageName: "日本語",
    meta: {
      homeTitle: "SignalMetric — iPhone・iPadの音声解析",
      homeDescription:
        "LUFS、True Peak、FFT、ダイナミクス、波形、スペクトル履歴をiPhone上でプライベートに解析。",
      measurementsTitle: "測定ガイド — SignalMetric",
      measurementsDescription:
        "dBFS、LUFS、True Peak、ダイナミクス、スペクトル、信号品質の読み方を解説します。",
      supportTitle: "サポートとフィードバック — SignalMetric",
      supportDescription:
        "SignalMetricのヘルプ、機能要望、改善案、不具合報告をMonowareへ送信できます。",
      privacyTitle: "プライバシーポリシー — SignalMetric",
      privacyDescription:
        "マイク解析、録音、読み込み音声、設定、任意フィードバックの取り扱いについて。",
    },
    nav: {
      instruments: "インストゥルメント",
      measurements: "測定ガイド",
      privacy: "プライバシー",
      support: "サポート",
      moreApps: "ほかのApp",
      menu: "ナビゲーションを開く",
      close: "ナビゲーションを閉じる",
    },
    common: {
      skipContent: "本文へ移動",
      tagline: "音声を、測る。",
      primaryNavigation: "メインナビゲーション",
      mobileNavigation: "モバイルナビゲーション",
      technicalSpecification: "技術仕様",
      metricGroups: "測定グループ",
      privacySections: "プライバシーポリシーのセクション",
      appearance: "外観",
      language: "言語",
      clearSearch: "検索を消去",
      appStore: "App Storeで見る",
      comingSoon: "App Storeで近日公開",
      learnMeasurements: "測定ガイドを開く",
      digitalNotSpl: "デジタルフルスケール。校正SPLではありません。",
      localOnly: "プライベートなオンデバイス解析",
      readMore: "定義を読む",
      backHome: "SignalMetricへ戻る",
    },
    home: {
      heroEyebrow: "IPHONE・IPAD向け音声アナライザー",
      heroTitle: "SignalMetric",
      heroLead:
        "ナレーション、ポッドキャスト、録音のラウドネス・ピーク・周波数を確認。音声ファイルもライブマイクも、デバイス内で解析できます。",
      heroNote:
        "買い切り。広告なし。サブスクリプションなし。音声はデバイス内に。",
      heroImageAlt:
        "ライブdBFS、Peak Hold、スペクトル、測定デッキを表示するSignalMetric Monitor",
      proof: [
        { value: "2,048", label: "ポイント HANN FFT" },
        { value: "64", label: "対数スペクトル帯域" },
        { value: "4×", label: "TRUE PEAK 推定" },
        { value: "30", label: "表示 FPS" },
        { value: "0", label: "アカウント・追跡" },
      ],
      instrumentsEyebrow: "一貫した4つのワークスペース",
      instrumentsTitle: "一つのエンジン。四つの見方。",
      instrumentsLead:
        "表示を切り替えても入力やセッションは途切れません。各画面は解像度、窓、限界を明示します。",
      instruments: [
        {
          id: "monitor",
          name: "Monitor",
          eyebrow: "レベル＋信号概要",
          description:
            "RMS、Peak Hold、True Peak推定、ヘッドルーム、スペクトル形状を一目で確認。",
          evidence: ["30 FPS表示", "固定dBFS目盛", "信号状態"],
          image: "/images/optimized/1.jpg",
          alt: "Studioダーク外観のSignalMetric Monitor",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          eyebrow: "周波数の根拠",
          description:
            "64対数帯域、スペクトル統計、主要なFFT成分をHzとdBFSで確認。",
          evidence: ["45 Hz–16 kHz", "主要6成分", "タッチ検査"],
          image: "/images/optimized/2.jpg",
          alt: "Studio外観のSignalMetric測定デッキとスペクトル統計",
        },
        {
          id: "timeline",
          name: "Timeline",
          eyebrow: "30秒スペクトル履歴",
          description:
            "低域と高域がいつ現れたかを表示。時間は左から右、明るさは相対エネルギーです。",
          evidence: ["30秒窓", "64帯域", "履歴8 FPS"],
          image: "/images/optimized/3.jpg",
          alt: "SignalMetric Timelineのローリングスペクトル履歴",
        },
        {
          id: "scope",
          name: "Scope",
          eyebrow: "トリガー付き時間領域",
          description:
            "安定した256-bin包絡で波形、トリガー、DC推定、時間軸を確認。",
          evidence: ["256包絡bin", "立上りトリガー", "フルスケール目盛"],
          image: "/images/optimized/4.jpg",
          alt: "ライブ時間波形を表示するSignalMetric Scope",
        },
      ],
      metricsEyebrow: "測定デッキ",
      metricsTitle: "互いを説明する測定値。",
      metricsLead:
        "平均なしのピークには文脈がなく、範囲なしの統合ラウドネスは変化を隠します。関連する根拠を同じ場所に配置します。",
      metricGroups: [
        {
          id: "loudness",
          name: "ラウドネス",
          summary: "相補的な時間窓で知覚的な番組レベルを記述。",
          metrics: "M / S / I LUFS · LRA · 目標差",
        },
        {
          id: "level",
          name: "レベルとピーク",
          summary: "デジタルエネルギー、サンプル間リスク、残りの余裕。",
          metrics: "RMS · Sample Peak · True Peak* · Hold",
        },
        {
          id: "dynamics",
          name: "ダイナミクス",
          summary: "ピークと平均・ラウドネスの関係。",
          metrics: "Crest · PSR · PLR · SNR · Floor P10",
        },
        {
          id: "spectrum",
          name: "スペクトル",
          summary: "エネルギーの位置、集中度、ノイズらしさ。",
          metrics: "Dominant · Centroid · Width · R85 · Flatness",
        },
        {
          id: "musical",
          name: "音楽情報",
          summary: "確信を装わず、信頼度で制御した音高とリズム。",
          metrics: "近似音名 · Cents · BPM · Confidence",
        },
        {
          id: "integrity",
          name: "信号品質",
          summary: "バイアス、ゼロ交差、クリップ、形式の簡潔な根拠。",
          metrics: "DC · ZCR · Clip · Rate · Channels",
        },
      ],
      privacyEyebrow: "設計からプライベート",
      privacyTitle: "信号はデバイスに残ります。",
      privacyLead:
        "アカウント、広告プロファイル、解析SDKは不要。ネットワーク境界は狭く明確です。",
      privacyPoints: [
        {
          title: "Micはライブ専用",
          detail: "通常のマイク解析は音声ファイルを作らず、アップロードもしません。",
        },
        {
          title: "録音は明確",
          detail: "Record後だけローカルM4Aを作成し、赤い状態とタイマーを表示します。",
        },
        {
          title: "ファイルはローカル",
          detail: "読み込み・録音ファイルは明示的な共有時だけアプリ外へ出ます。",
        },
        {
          title: "フィードバックは任意",
          detail: "サポートフォームを自分で送信した時だけ通信します。",
        },
      ],
      themesEyebrow: "6つのビジュアルシステム",
      themesTitle: "光が変わっても、解析は同じ。",
      themesLead:
        "Studio、Pulse、Monoと3つの明色テーマは見た目だけを変え、測定エンジンは変えません。",
      themeNames: ["Studio", "Paper", "Red", "Green", "Pulse", "Mono"],
      portfolioEyebrow: "MONOWARE 製品ファミリー",
      portfolioTitle: "ローカルファーストの道具を、同じ明確な基準で。",
      portfolioLead:
        "プライベートメディア、ローカルネットワーク、脈拍記録、睡眠音声、ブラウザ作業のためのアプリを紹介します。",
      ctaTitle: "測定デッキをポケットに。",
      ctaLead:
        "アカウントやサブスクリプションなしで、マイク、読み込み音声、明示的なローカル録音を解析。",
    },
    measurements: {
      eyebrow: "フィールドガイド",
      title: "すべての数値を正直に読む。",
      lead:
        "各測定値の単位、時間窓、実用的な読み方、限界を明記します。権威的に見える推測より透明な根拠を優先します。",
      boundaryTitle: "最重要の境界",
      boundaryBody:
        "dBFSとdBTPはデジタルフルスケール基準です。校正dB SPL、dBA、聴覚安全量ではありません。法的・職業的・認証判断には検証済み機器と手順が必要です。",
      searchPlaceholder: "LUFS、ヘッドルーム、重心を検索…",
      allGroups: "すべて",
      noResults: "一致する測定値がありません。",
      summaryLabel: "31の測定値 · 6グループ",
      window: "窓 / 方法",
      howToRead: "読み方",
      limit: "限界",
      diagrams: {
        levelTitle: "デジタルレベルと余裕",
        levelDescription:
          "0 dBFSが上限です。有効信号は負値で、0までの距離がヘッドルームです。",
        loudnessTitle: "3つのラウドネス時間軸",
        loudnessDescription:
          "Momentaryは400 ms、Short-Termは3秒、Integratedはゲート付きセッションを累積します。",
        dynamicsTitle: "ピーク対平均",
        dynamicsDescription:
          "Crest、PSR、PLRはピークをRMS、短期、統合ラウドネスと比較します。",
        spectrumTitle: "スペクトル形状",
        spectrumDescription:
          "Centroidはエネルギー重心、Bandwidthは広がり、R85は85%のエネルギーが下にある周波数です。",
        zcrTitle: "ゼロ交差",
        zcrDescription:
          "ZCRは符号変化を数えます。高域やノイズが多いほど一般に交差が増えます。",
        headroomLabel: "ヘッドルーム",
        gatedSessionLabel: "ゲート付きセッション",
        averageLoudnessLabel: "平均 / ラウドネス",
        peakLabel: "ピーク",
        dynamicsLabel: "ダイナミクス",
        centroidLabel: "重心",
        bandwidthLabel: "帯域幅",
        zeroCrossingLabel: "窓内のゼロ交差イベント",
        secondsShort: "秒",
      },
    },
    support: {
      eyebrow: "サポート",
      title: "精密な計測器に、的確なサポート。",
      lead:
        "よくある質問を確認するか、再現可能な問題、改善案、機能要望をMonoware Supportへ送信してください。",
      faqTitle: "よくある質問",
      directContact: "直接連絡",
      faqs: [
        {
          question: "DemoとMicの違いは？",
          answer:
            "Demoは明示された決定論的な基準信号で、権限不要です。Micは現在の入力をリアルタイム解析します。Input & Controlsからいつでも切替できます。",
        },
        {
          question: "Micは録音しますか？",
          answer:
            "いいえ。通常のMicは短い窓をメモリ内で解析して破棄します。Recordを明示的に押した時だけファイルを作成し、赤い録音状態を表示します。",
        },
        {
          question: "音声ファイルを解析するには？",
          answer:
            "Input & ControlsでAudioを選ぶか、Filesなどから対応音声を開きます。保護された1件のキャッシュとシーク可能なローカルプレーヤーを使用します。",
        },
        {
          question: "True Peakが推定なのはなぜ？",
          answer:
            "4×オーバーサンプリングでサンプル間ピークを推定するためです。有用な根拠ですが、認証済みの納品検査計ではありません。",
        },
        {
          question: "SPLメーターではないのですか？",
          answer:
            "iPhone入力を音圧に校正していません。dBFSとラウドネスを報告し、dBA、dBC、曝露量は報告しません。",
        },
        {
          question: "放送マスターの認証に使えますか？",
          answer:
            "使えません。EBU R128とATSC A/85は視覚的な基準です。正式納品には準拠計、正しいチャンネル処理、検証手順が必要です。",
        },
        {
          question: "録音を削除するには？",
          answer:
            "Input & ControlsからRecordingsを開き、項目のDeleteを確認します。アプリを削除するとプライベート録音領域も消えます。",
        },
        {
          question: "マイク権限を拒否した場合は？",
          answer:
            "iOS設定でSignalMetricのマイクを許可し、アプリに戻ってMicを再選択してください。Demoとファイル解析は権限なしで使えます。",
        },
      ],
      formEyebrow: "直接フィードバック",
      formTitle: "SignalMetricを一緒に改善。",
      formLead: "メッセージはMonoware Supportへ送信され、必須項目は端末内で検証されます。",
      typeLabel: "種類",
      types: {
        feature_request: "機能要望",
        bug: "不具合",
        improvement: "改善",
        other: "その他",
      },
      titleLabel: "タイトル",
      titlePlaceholder: "短い概要",
      descriptionLabel: "説明",
      descriptionPlaceholder: "何が起き、何を期待し、どう再現できますか？",
      emailLabel: "メール",
      emailPlaceholder: "you@example.com",
      privacyWarning:
        "音声、パスワード、トークン、支払情報、顧客データ、私的ログを含めないでください。送信後にのみフォームと限定的なページ情報が送られます。",
      send: "フィードバックを送信",
      sending: "送信中…",
      successTitle: "受け付けました。",
      successBody: "Monoware Supportに届きました。問い合わせ用に番号を保存してください。",
      reference: "受付番号",
      another: "別の内容を送る",
      errors: {
        title: "タイトルは3〜160文字で入力してください。",
        description: "説明は10〜5,000文字で入力してください。",
        email: "有効なメールアドレスを入力してください。",
        generic: "送信できませんでした。接続を確認して再試行してください。",
        tooLarge: "内容が長すぎて送信できません。",
        unavailable: "フィードバックサービスは一時的に利用できません。",
      },
    },
    privacy: {
      eyebrow: "プライバシーポリシー",
      title: "設計からプライベート。",
      lead:
        "SignalMetricは端末上で音声を解析します。アカウント、広告、解析、追跡はありません。",
      effective: "発効日",
      effectiveDate: "2026年8月2日",
      sections: [
        {
          id: "microphone",
          title: "マイク",
          paragraphs: [
            "マイク権限は任意で、MicまたはRecordを選んだ時だけ要求します。短いサンプル窓をメモリ内で処理し、レベル、ラウドネス、スペクトル、波形、主周波数、テンポを算出します。",
          ],
          bullets: [
            "通常のMic音声はファイルに書きません。",
            "通常のMic音声は送信・アップロードしません。",
            "現在の解析窓の後に破棄します。",
            "権限なしでもDemoを使えます。",
          ],
        },
        {
          id: "recording",
          title: "明示的な録音",
          paragraphs: [
            "Recordを押した時だけ録音し、赤い状態と経過時間を表示します。停止・中断時はアプリのプライベート領域にローカルM4Aを完成させます。",
            "iOS共有シートで明示的に送信先を選んだ時だけ外部へ出ます。個別削除またはアプリ削除で消去できます。",
          ],
        },
        {
          id: "imports",
          title: "読み込み音声",
          paragraphs: [
            "音声を開くと、ローカル再生・解析用の保護された1件のキャッシュにコピーします。次の読み込みで古い項目を削除し、アップロードはしません。",
          ],
        },
        {
          id: "feedback",
          title: "任意のフィードバック",
          paragraphs: [
            "アプリ内またはWebフォームを送信すると、カテゴリ、タイトル、説明、メール、限定的なバージョン情報をHTTPSでMonoware Supportへ送信します。",
            "サポート対応と改善にのみ利用し、広告・追跡には使いません。音声、パスワード、トークン、支払情報、顧客データ、私的ログを含めないでください。",
          ],
        },
        {
          id: "preferences",
          title: "ローカル設定",
          paragraphs: [
            "インストゥルメント、応答、外観、オンボーディング完了状態を端末内に保存します。音声、測定履歴、アカウント識別子は含みません。",
          ],
        },
        {
          id: "website",
          title: "Webサイト",
          paragraphs: [
            "解析、広告、追跡スクリプトは使いません。言語設定をブラウザに保存する場合があります。通信はフィードバック送信時だけです。",
          ],
        },
        {
          id: "contact",
          title: "連絡先と変更",
          paragraphs: [
            "重要な変更は発効日を更新して公開します。プライバシーに関する連絡先はprivacy@monoware.appです。",
          ],
        },
      ],
    },
    footer: {
      statement: "iPhone上で、プロの音声根拠をプライベートに測定。",
      boundary: "SignalMetricは校正SPL計でも認証済み納品検査機器でもありません。",
      contact: "プライバシー窓口",
      rights: "Monoware. All rights reserved.",
      principles: "オンデバイス · 追跡なし · 一つの計測器",
    },
    notFound: {
      eyebrow: "404 · NO SIGNAL",
      title: "このルートは無音です。",
      body: "ページが存在しないか移動しました。",
    },
  },
  ko: {
    languageName: "한국어",
    meta: {
      homeTitle: "SignalMetric — iPhone 및 iPad 오디오 분석",
      homeDescription:
        "LUFS, True Peak, FFT 스펙트럼, 다이내믹, 파형과 스펙트럼 기록을 iPhone에서 비공개로 분석하세요.",
      measurementsTitle: "측정 가이드 — SignalMetric",
      measurementsDescription:
        "dBFS와 LUFS부터 True Peak, 다이내믹, 스펙트럼, 신호 무결성까지 모든 수치를 설명합니다.",
      supportTitle: "지원 및 피드백 — SignalMetric",
      supportDescription:
        "SignalMetric 도움말을 확인하거나 기능 요청, 개선 의견, 버그를 Monoware에 보내세요.",
      privacyTitle: "개인정보 처리방침 — SignalMetric",
      privacyDescription:
        "마이크 분석, 녹음, 가져온 오디오, 로컬 설정과 선택적 피드백 처리 방법입니다.",
    },
    nav: {
      instruments: "인스트루먼트",
      measurements: "측정 가이드",
      privacy: "개인정보",
      support: "지원",
      moreApps: "다른 앱",
      menu: "내비게이션 열기",
      close: "내비게이션 닫기",
    },
    common: {
      skipContent: "본문으로 이동",
      tagline: "오디오를 측정하다.",
      primaryNavigation: "기본 내비게이션",
      mobileNavigation: "모바일 내비게이션",
      technicalSpecification: "기술 사양",
      metricGroups: "측정 그룹",
      privacySections: "개인정보 처리방침 섹션",
      appearance: "외관",
      language: "언어",
      clearSearch: "검색 지우기",
      appStore: "App Store에서 보기",
      comingSoon: "App Store 출시 예정",
      learnMeasurements: "측정 가이드 열기",
      digitalNotSpl: "디지털 풀스케일. 보정된 SPL이 아닙니다.",
      localOnly: "비공개 온디바이스 분석",
      readMore: "정의 보기",
      backHome: "SignalMetric으로 돌아가기",
    },
    home: {
      heroEyebrow: "IPHONE 및 IPAD 오디오 분석기",
      heroTitle: "SignalMetric",
      heroLead:
        "보이스오버, 팟캐스트, 녹음의 라우드니스, 피크와 주파수를 확인하세요. 오디오 파일과 실시간 마이크를 기기 안에서 비공개로 분석합니다.",
      heroNote:
        "한 번 구매. 광고 없음. 구독 없음. 오디오는 기기에 보관됩니다.",
      heroImageAlt:
        "라이브 dBFS, Peak Hold, 스펙트럼과 측정 덱을 표시하는 SignalMetric Monitor",
      proof: [
        { value: "2,048", label: "포인트 HANN FFT" },
        { value: "64", label: "로그 스펙트럼 밴드" },
        { value: "4×", label: "TRUE PEAK 추정" },
        { value: "30", label: "디스플레이 FPS" },
        { value: "0", label: "계정 또는 추적기" },
      ],
      instrumentsEyebrow: "일관된 네 개의 작업 공간",
      instrumentsTitle: "하나의 엔진, 네 가지 관찰 방식.",
      instrumentsLead:
        "화면을 전환해도 소스나 세션이 중단되지 않습니다. 각 작업 공간은 해상도, 창과 한계를 명확히 표시합니다.",
      instruments: [
        {
          id: "monitor",
          name: "Monitor",
          eyebrow: "레벨 + 신호 개요",
          description:
            "RMS, Peak Hold, True Peak 추정, 헤드룸과 전체 스펙트럼 형상을 한눈에 읽습니다.",
          evidence: ["30 FPS 표시", "고정 dBFS 눈금", "신호 상태"],
          image: "/images/optimized/1.jpg",
          alt: "Studio 다크 외관의 SignalMetric Monitor",
        },
        {
          id: "spectrum",
          name: "Spectrum",
          eyebrow: "주파수 근거",
          description:
            "64개 로그 밴드, 스펙트럼 통계와 가장 강한 FFT 성분을 Hz와 dBFS로 확인합니다.",
          evidence: ["45 Hz–16 kHz", "가장 강한 6개 성분", "터치 검사"],
          image: "/images/optimized/2.jpg",
          alt: "Studio 외관의 SignalMetric 측정 덱과 스펙트럼 통계",
        },
        {
          id: "timeline",
          name: "Timeline",
          eyebrow: "30초 스펙트럼 기록",
          description:
            "저역과 고역이 언제 나타났는지 봅니다. 시간은 왼쪽에서 오른쪽으로, 밝기는 상대 에너지를 뜻합니다.",
          evidence: ["30초 창", "64 밴드", "기록 8 FPS"],
          image: "/images/optimized/3.jpg",
          alt: "SignalMetric Timeline의 롤링 스펙트럼 기록",
        },
        {
          id: "scope",
          name: "Scope",
          eyebrow: "트리거 시간 영역",
          description:
            "안정된 256-bin 엔벌로프로 파형, 트리거, DC 추정과 시간 눈금을 확인합니다.",
          evidence: ["256 엔벌로프 bin", "상승 트리거", "풀스케일 격자"],
          image: "/images/optimized/4.jpg",
          alt: "라이브 시간 영역 파형을 표시하는 SignalMetric Scope",
        },
      ],
      metricsEyebrow: "측정 덱",
      metricsTitle: "서로를 설명하는 수치.",
      metricsLead:
        "평균이 없는 피크에는 맥락이 없고, 범위가 없는 통합 라우드니스는 변화를 숨깁니다. 관련 근거를 함께 배치했습니다.",
      metricGroups: [
        {
          id: "loudness",
          name: "라우드니스",
          summary: "서로 보완하는 시간 창으로 지각 프로그램 레벨을 설명합니다.",
          metrics: "M / S / I LUFS · LRA · 목표 차이",
        },
        {
          id: "level",
          name: "레벨과 피크",
          summary: "디지털 에너지, 샘플 사이 위험과 남은 헤드룸.",
          metrics: "RMS · Sample Peak · True Peak* · Hold",
        },
        {
          id: "dynamics",
          name: "다이내믹",
          summary: "피크와 평균 및 라우드니스의 관계.",
          metrics: "Crest · PSR · PLR · SNR · Floor P10",
        },
        {
          id: "spectrum",
          name: "스펙트럼",
          summary: "에너지의 위치, 집중도와 노이즈 특성.",
          metrics: "Dominant · Centroid · Width · R85 · Flatness",
        },
        {
          id: "musical",
          name: "음악 정보",
          summary: "과도한 확신 없이 신뢰도로 제어한 음정과 리듬.",
          metrics: "가까운 음 · Cents · BPM · Confidence",
        },
        {
          id: "integrity",
          name: "신호 무결성",
          summary: "바이어스, 영점 교차, 클리핑과 형식에 대한 근거.",
          metrics: "DC · ZCR · Clip · Rate · Channels",
        },
      ],
      privacyEyebrow: "설계부터 비공개",
      privacyTitle: "신호는 기기에 남습니다.",
      privacyLead:
        "계정, 광고 프로필, 분석 SDK가 없습니다. 네트워크 경계는 좁고 명확합니다.",
      privacyPoints: [
        {
          title: "Mic는 라이브 전용",
          detail: "일반 마이크 분석은 오디오 파일을 만들거나 업로드하지 않습니다.",
        },
        {
          title: "녹음은 명확하게",
          detail: "Record 이후에만 로컬 M4A를 만들고 빨간 상태와 타이머를 표시합니다.",
        },
        {
          title: "파일은 로컬에",
          detail: "가져온 파일과 녹음은 명시적으로 공유할 때만 앱을 떠납니다.",
        },
        {
          title: "피드백은 선택",
          detail: "지원 양식을 직접 제출할 때만 네트워크 요청이 발생합니다.",
        },
      ],
      themesEyebrow: "여섯 가지 비주얼 시스템",
      themesTitle: "빛이 달라도 분석은 같습니다.",
      themesLead:
        "Studio, Pulse, Mono와 세 가지 밝은 테마는 전체 시각 토큰만 바꾸며 측정 엔진은 바꾸지 않습니다.",
      themeNames: ["Studio", "Paper", "Red", "Green", "Pulse", "Mono"],
      portfolioEyebrow: "MONOWARE 제품군",
      portfolioTitle: "더 많은 로컬 우선 도구, 하나의 명확한 기준.",
      portfolioLead:
        "개인 미디어, 로컬 네트워크, 맥박 기록, 수면 오디오와 브라우저 작업을 위한 앱을 살펴보세요.",
      ctaTitle: "측정 덱을 주머니에.",
      ctaLead:
        "계정이나 구독 없이 마이크, 가져온 오디오, 명시적인 로컬 녹음을 분석하세요.",
    },
    measurements: {
      eyebrow: "필드 가이드",
      title: "모든 숫자를 정직하게 읽기.",
      lead:
        "각 수치의 단위, 시간 창, 실용적인 해석과 한계를 설명합니다. 권위적으로 보이는 추측보다 투명한 근거를 우선합니다.",
      boundaryTitle: "가장 중요한 경계",
      boundaryBody:
        "dBFS와 dBTP는 디지털 풀스케일 기준 신호입니다. 보정된 dB SPL, dBA 또는 청력 안전 용량이 아닙니다. 법적·산업·인증 판단에는 검증된 장비와 절차가 필요합니다.",
      searchPlaceholder: "LUFS, 헤드룸, 중심 주파수 검색…",
      allGroups: "모든 수치",
      noResults: "일치하는 측정값이 없습니다.",
      summaryLabel: "31개 측정값 · 6개 그룹",
      window: "창 / 방법",
      howToRead: "읽는 방법",
      limit: "한계",
      diagrams: {
        levelTitle: "디지털 레벨과 헤드룸",
        levelDescription:
          "0 dBFS가 상한입니다. 유효 신호는 음수이고 0까지의 거리가 디지털 헤드룸입니다.",
        loudnessTitle: "세 가지 라우드니스 시간 축",
        loudnessDescription:
          "Momentary는 400 ms, Short-Term은 3초, Integrated는 게이트된 세션을 누적합니다.",
        dynamicsTitle: "피크 대 평균",
        dynamicsDescription:
          "Crest, PSR, PLR은 피크를 각각 RMS, 단기, 통합 라우드니스와 비교합니다.",
        spectrumTitle: "스펙트럼 형상",
        spectrumDescription:
          "Centroid는 에너지 중심, Bandwidth는 분포, R85는 85% 에너지가 아래에 있는 주파수입니다.",
        zcrTitle: "영점 교차",
        zcrDescription:
          "ZCR은 부호 변화를 셉니다. 고역이나 노이즈가 많을수록 일반적으로 더 자주 교차합니다.",
        headroomLabel: "헤드룸",
        gatedSessionLabel: "게이트 세션",
        averageLoudnessLabel: "평균 / 라우드니스",
        peakLabel: "피크",
        dynamicsLabel: "다이내믹",
        centroidLabel: "중심",
        bandwidthLabel: "대역폭",
        zeroCrossingLabel: "창 내 영점 교차 이벤트",
        secondsShort: "초",
      },
    },
    support: {
      eyebrow: "지원",
      title: "정밀한 인스트루먼트를 위한 정확한 도움.",
      lead:
        "자주 묻는 질문을 확인하거나 재현 가능한 문제, 개선 의견, 기능 요청을 Monoware Support로 보내세요.",
      faqTitle: "자주 묻는 질문",
      directContact: "직접 문의",
      faqs: [
        {
          question: "Demo와 Mic의 차이는 무엇인가요?",
          answer:
            "Demo는 명확히 표시된 결정론적 기준 신호이며 권한이 필요 없습니다. Mic는 현재 입력을 실시간 분석합니다. Input & Controls에서 언제든 전환할 수 있습니다.",
        },
        {
          question: "Mic가 소리를 녹음하나요?",
          answer:
            "아닙니다. 일반 Mic는 짧은 창을 메모리에서 분석한 뒤 폐기합니다. Record를 명시적으로 눌렀을 때만 파일을 만들고 빨간 녹음 상태가 계속 표시됩니다.",
        },
        {
          question: "오디오 파일은 어떻게 분석하나요?",
          answer:
            "Input & Controls에서 Audio를 선택하거나 Files 등에서 지원 오디오를 여세요. 보호된 1개 캐시와 탐색 가능한 로컬 플레이어를 사용합니다.",
        },
        {
          question: "True Peak가 추정값인 이유는?",
          answer:
            "4× 오버샘플링으로 샘플 사이 피크를 추정하기 때문입니다. 유용한 근거지만 인증된 납품 검증 미터는 아닙니다.",
        },
        {
          question: "왜 SPL 데시벨 미터가 아닌가요?",
          answer:
            "iPhone 입력을 음압으로 보정하지 않았습니다. dBFS와 라우드니스를 보고하며 dBA, dBC, 노출 용량은 보고하지 않습니다.",
        },
        {
          question: "방송 마스터 인증에 사용할 수 있나요?",
          answer:
            "아닙니다. EBU R128과 ATSC A/85는 시각 기준입니다. 공식 납품에는 준수 미터, 올바른 채널 작업과 검증 절차가 필요합니다.",
        },
        {
          question: "녹음은 어떻게 삭제하나요?",
          answer:
            "Input & Controls에서 Recordings를 열고 항목의 Delete를 확인하세요. 앱을 삭제하면 비공개 녹음 저장소도 제거됩니다.",
        },
        {
          question: "마이크 권한을 거부했다면?",
          answer:
            "iOS 설정에서 SignalMetric 마이크를 허용한 뒤 앱으로 돌아와 Mic를 다시 선택하세요. Demo와 파일 분석은 권한 없이 사용할 수 있습니다.",
        },
      ],
      formEyebrow: "직접 피드백",
      formTitle: "SignalMetric을 함께 개선하세요.",
      formLead:
        "메시지는 Monoware Support로 전송되며 필수 항목은 제출 전에 로컬에서 검증됩니다.",
      typeLabel: "피드백 유형",
      types: {
        feature_request: "기능 요청",
        bug: "버그",
        improvement: "개선",
        other: "기타",
      },
      titleLabel: "제목",
      titlePlaceholder: "짧은 요약",
      descriptionLabel: "설명",
      descriptionPlaceholder: "무슨 일이 있었고, 무엇을 기대했으며, 어떻게 재현할 수 있나요?",
      emailLabel: "이메일",
      emailPlaceholder: "you@example.com",
      privacyWarning:
        "오디오, 비밀번호, 토큰, 결제 정보, 고객 데이터 또는 비공개 로그를 포함하지 마세요. 제출 후에만 양식과 제한된 페이지 정보가 전송됩니다.",
      send: "피드백 보내기",
      sending: "전송 중…",
      successTitle: "피드백을 받았습니다.",
      successBody:
        "Monoware Support에 도착했습니다. 후속 문의를 위해 아래 번호를 보관하세요.",
      reference: "접수 번호",
      another: "다른 피드백 보내기",
      errors: {
        title: "제목은 3–160자로 입력하세요.",
        description: "설명은 10–5,000자로 입력하세요.",
        email: "유효한 이메일 주소를 입력하세요.",
        generic: "전송하지 못했습니다. 연결을 확인하고 다시 시도하세요.",
        tooLarge: "내용이 너무 길어 전송할 수 없습니다.",
        unavailable: "피드백 서비스를 일시적으로 사용할 수 없습니다.",
      },
    },
    privacy: {
      eyebrow: "개인정보 처리방침",
      title: "설계부터 비공개.",
      lead:
        "SignalMetric은 기기에서 오디오를 분석합니다. 계정, 광고, 분석 또는 추적이 없습니다.",
      effective: "시행일",
      effectiveDate: "2026년 8월 2일",
      sections: [
        {
          id: "microphone",
          title: "마이크",
          paragraphs: [
            "마이크 권한은 선택 사항이며 Mic 또는 Record를 선택한 후에만 요청합니다. 짧은 샘플 창을 메모리에서 처리해 레벨, 라우드니스, 스펙트럼, 파형, 주 주파수와 템포를 계산합니다.",
          ],
          bullets: [
            "일반 Mic 오디오는 파일에 기록하지 않습니다.",
            "일반 Mic 오디오는 전송하거나 업로드하지 않습니다.",
            "현재 분석 창 이후 폐기합니다.",
            "권한 없이도 Demo를 사용할 수 있습니다.",
          ],
        },
        {
          id: "recording",
          title: "명시적 녹음",
          paragraphs: [
            "Record를 누른 후에만 녹음하며 빨간 상태와 경과 시간을 표시합니다. 중지 또는 중단 시 앱의 비공개 Application Support에 로컬 M4A를 완성합니다.",
            "iOS 공유 시트에서 목적지를 직접 선택할 때만 앱을 떠납니다. 개별 삭제 또는 앱 삭제로 제거할 수 있습니다.",
          ],
        },
        {
          id: "imports",
          title: "가져온 오디오",
          paragraphs: [
            "오디오 파일을 열면 로컬 재생과 분석을 위해 보호된 1개 캐시에 복사합니다. 새 파일을 가져오면 이전 캐시를 삭제하며 업로드하지 않습니다.",
          ],
        },
        {
          id: "feedback",
          title: "선택적 피드백",
          paragraphs: [
            "앱 또는 웹 양식을 제출하면 선택 유형, 제목, 설명, 이메일과 제한된 버전 정보를 HTTPS로 Monoware Support에 보냅니다.",
            "지원 응답과 제품 개선에만 사용하며 광고나 추적에는 사용하지 않습니다. 오디오, 비밀번호, 토큰, 결제 정보, 고객 데이터, 비공개 로그를 포함하지 마세요.",
          ],
        },
        {
          id: "preferences",
          title: "로컬 설정",
          paragraphs: [
            "선택한 인스트루먼트, 응답, 외관과 온보딩 완료 상태를 로컬에 저장합니다. 오디오, 측정 기록 또는 계정 신원은 포함하지 않습니다.",
          ],
        },
        {
          id: "website",
          title: "웹사이트",
          paragraphs: [
            "분석, 광고 또는 추적 스크립트를 사용하지 않습니다. 언어 설정을 브라우저에 저장할 수 있으며 피드백 제출 시에만 통신합니다.",
          ],
        },
        {
          id: "contact",
          title: "문의 및 변경",
          paragraphs: [
            "중요한 변경 사항은 시행일을 갱신해 게시합니다. 개인정보 문의는 privacy@monoware.app으로 보내세요.",
          ],
        },
      ],
    },
    footer: {
      statement: "iPhone에서 전문 오디오 근거를 비공개로 측정합니다.",
      boundary: "SignalMetric은 보정된 SPL 미터 또는 인증 납품 검증 기기가 아닙니다.",
      contact: "개인정보 문의",
      rights: "Monoware. All rights reserved.",
      principles: "온디바이스 · 추적 없음 · 하나의 인스트루먼트",
    },
    notFound: {
      eyebrow: "404 · NO SIGNAL",
      title: "이 경로는 무음입니다.",
      body: "요청한 페이지가 없거나 이동되었습니다.",
    },
  },
};
