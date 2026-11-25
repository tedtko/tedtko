// Shape of every language dictionary. Strings may use:
//   {placeholders}  filled with t()
//   **bold** and [link text](/path)  rendered by <Rich>  (internal links get the language prefix)

export type Block =
  | string
  | { ul: string[] }
  | { h3: string }
  | { box: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type LegalDoc = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  sections: { h: string; body: Block[] }[];
};

export type PackText = { name: string; subtitle: string; deliverables: string[]; revisions: string; timeline: string };

export type Dict = {
  meta: { siteTitle: string; siteDescription: string };
  nav: {
    packages: string; howItWorks: string; samples: string; faq: string; payInvoice: string; contact: string;
    cta: string; menuOpen: string; menuClose: string; home: string; skip: string; language: string;
  };
  hero: {
    eyebrow: string; titleA: string; titleB: string; lead: string; badgesLabel: string; badges: string[];
    ctaPrimary: string; ctaSecondary: string;
  };
  home: {
    packagesEyebrow: string; packagesTitle: string; packagesLead: string;
    howEyebrow: string; howTitle: string; howLead: string;
    samplesEyebrow: string; samplesTitle: string; samplesMore: string;
    faqEyebrow: string; faqTitle: string; faqMore: string;
  };
  packages: {
    metaTitle: string; metaDescription: string; pageEyebrow: string; pageTitle: string; pageLead: string;
    popular: string; plusVat: string; incVat: string; orderLabel: string;
    items: Record<"essential" | "standard" | "premium", PackText>;
    vatNote: string; outsideUkNote: string; excludesNote: string; cancelled: string;
    paymentTitle: string; paymentText: string;
  };
  order: { groupLabel: string; agree: string; start: string; continue: string; opening: string; noStartNote: string };
  steps: { title: string; text: string }[];
  howPage: {
    metaTitle: string; metaDescription: string; eyebrow: string; title: string; lead: string;
    sendTitle: string; sendList: string[]; uploadCta: string; goodTitle: string; goodList: string[]; goodMore: string;
  };
  samples: {
    metaTitle: string; metaDescription: string; eyebrow: string; title: string; lead: string;
    items: { title: string; text: string }[]; note: string;
  };
  faq: { metaTitle: string; metaDescription: string; eyebrow: string; title: string; items: [string, string][] };
  contact: {
    metaTitle: string; metaDescription: string; eyebrow: string; title: string; lead: string;
    emailNote: string; phoneNote: string; whatsapp: string; whatsappNote: string; already: string; formTitle: string; waText: string;
  };
  intake: { metaTitle: string; metaDescription: string; eyebrow: string; title: string; lead: string; trouble: string };
  pay: {
    metaTitle: string; metaDescription: string; eyebrow: string; title: string; lead: string; questions: string; cancelled: string;
    achTitle: string; achIntro: string; achNote: string; achRefValue: string;
    achLabels: { accountName: string; bankName: string; routing: string; account: string; accountType: string; bankAddress: string; reference: string };
  };
  forms: {
    name: string; email: string; phone: string; optional: string; orderRef: string; orderRefHint: string;
    interested: string; notSure: string; packSuffix: string; yourPack: string; select: string; address: string;
    files: string; filesHint: string; link: string; linkHint: string; brief: string; briefPlaceholder: string;
    message: string; sendIntake: string; sendContact: string; sending: string; sentIntake: string; sentContact: string;
    privacy: string; accuracy: string;
    invName: string; invEmail: string; invNumber: string; invAmount: string; invCurrency: string; invSubmit: string; opening: string; secure: string;
  };
  errors: Record<"terms_required" | "missing_fields" | "invalid_amount" | "unavailable" | "too_large" | "bad_type" | "generic", string>;
  success: {
    metaTitle: string; eyebrowPaid: string; eyebrowThanks: string; title: string; paid: string; processing: string;
    receipt: string; ref: string; next: string; upload: string; questions: string;
  };
  cta: { title: string; text: string; primary: string; secondary: string };
  footer: {
    about: string; studio: string; legal: string; contact: string;
    links: {
      packages: string; how: string; samples: string; faq: string; intake: string; pay: string;
      terms: string; refund: string; privacy: string; cookies: string; notice: string; cookieSettings: string;
    };
    whatsapp: string; replyWithin: string; registered: string; companyNo: string; office: string; vat: string;
    email: string; phone: string; arb: string;
  };
  cookie: {
    title: string; text: string; necessary: string; necessaryDesc: string; analytics: string; analyticsDesc: string;
    reject: string; accept: string; manage: string; save: string; open: string;
  };
  legal: {
    eyebrow: string; updated: string; translationNote: string;
    terms: LegalDoc; refund: LegalDoc; privacy: LegalDoc; cookies: LegalDoc; notice: LegalDoc;
  };
  samplesFigures: { fileName: string };
};
