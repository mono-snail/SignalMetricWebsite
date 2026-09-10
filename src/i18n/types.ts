export const locales = ["en", "zh-CN", "zh-Hant", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export interface InstrumentCopy {
  id: "monitor" | "spectrum" | "timeline" | "scope";
  name: string;
  eyebrow: string;
  description: string;
  evidence: string[];
  image: string;
  alt: string;
}

export interface MetricGroupCopy {
  id: string;
  name: string;
  summary: string;
  metrics: string;
}

export interface FaqCopy {
  question: string;
  answer: string;
}

export interface PrivacySectionCopy {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface SiteCopy {
  languageName: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
    measurementsTitle: string;
    measurementsDescription: string;
    supportTitle: string;
    supportDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
  nav: {
    instruments: string;
    measurements: string;
    privacy: string;
    support: string;
    mainSite: string;
    moreApps: string;
    menu: string;
    close: string;
  };
  common: {
    skipContent: string;
    tagline: string;
    primaryNavigation: string;
    mobileNavigation: string;
    technicalSpecification: string;
    metricGroups: string;
    privacySections: string;
    appearance: string;
    language: string;
    clearSearch: string;
    appStore: string;
    comingSoon: string;
    learnMeasurements: string;
    digitalNotSpl: string;
    localOnly: string;
    readMore: string;
    backHome: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    heroNote: string;
    heroImageAlt: string;
    proof: Array<{ value: string; label: string }>;
    instrumentsEyebrow: string;
    instrumentsTitle: string;
    instrumentsLead: string;
    instruments: InstrumentCopy[];
    metricsEyebrow: string;
    metricsTitle: string;
    metricsLead: string;
    metricGroups: MetricGroupCopy[];
    privacyEyebrow: string;
    privacyTitle: string;
    privacyLead: string;
    privacyPoints: Array<{ title: string; detail: string }>;
    themesEyebrow: string;
    themesTitle: string;
    themesLead: string;
    themeNames: string[];
    portfolioEyebrow: string;
    portfolioTitle: string;
    portfolioLead: string;
    ctaTitle: string;
    ctaLead: string;
  };
  measurements: {
    eyebrow: string;
    title: string;
    lead: string;
    boundaryTitle: string;
    boundaryBody: string;
    searchPlaceholder: string;
    allGroups: string;
    noResults: string;
    summaryLabel: string;
    window: string;
    howToRead: string;
    limit: string;
    diagrams: {
      levelTitle: string;
      levelDescription: string;
      loudnessTitle: string;
      loudnessDescription: string;
      dynamicsTitle: string;
      dynamicsDescription: string;
      spectrumTitle: string;
      spectrumDescription: string;
      zcrTitle: string;
      zcrDescription: string;
      headroomLabel: string;
      gatedSessionLabel: string;
      averageLoudnessLabel: string;
      peakLabel: string;
      dynamicsLabel: string;
      centroidLabel: string;
      bandwidthLabel: string;
      zeroCrossingLabel: string;
      secondsShort: string;
    };
  };
  support: {
    eyebrow: string;
    title: string;
    lead: string;
    faqTitle: string;
    directContact: string;
    faqs: FaqCopy[];
    formEyebrow: string;
    formTitle: string;
    formLead: string;
    typeLabel: string;
    types: Record<"feature_request" | "bug" | "improvement" | "other", string>;
    titleLabel: string;
    titlePlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    privacyWarning: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    reference: string;
    another: string;
    errors: {
      title: string;
      description: string;
      email: string;
      generic: string;
      tooLarge: string;
      unavailable: string;
    };
  };
  privacy: {
    eyebrow: string;
    title: string;
    lead: string;
    effective: string;
    effectiveDate: string;
    sections: PrivacySectionCopy[];
  };
  footer: {
    statement: string;
    boundary: string;
    contact: string;
    rights: string;
    principles: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
  };
}
