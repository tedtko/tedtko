// ---------------------------------------------------------------------------
// Company details, contact details and prices (shared by every language).
// Translated wording lives in src/i18n/dictionaries/<language>.ts
// ---------------------------------------------------------------------------

export const site = {
  tradingName: "Fair Trade Design Studio",
  legalName: "Fair Trade 23 Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fairtradedesign.pro",

  // Companies Act 2006 disclosures
  companyNumber: "17279876",
  registeredOffice: "Flat 1-4, 67 Wellesley Road, Croydon, England, CR0 2AJ",
  vatNumber: "GB 523 1091 33",
  // Name of the director(s). German "Impressum" rules expect the authorised
  // representative to be named. Leave "" to hide the line.
  director: "",

  // Contact
  supportEmail: "studio@fairtradedesign.pro",
  phoneDisplay: "+44 7598 610612",
  phoneHref: "tel:+447598610612",
  whatsappNumber: "447933574769",
};

export const whatsappHref = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const VAT_RATE = 0.2;
export const incVat = (pounds: number) => Math.round(pounds * (1 + VAT_RATE) * 100) / 100;

export type PackageId = "essential" | "standard" | "premium";

// Prices in pounds, excluding VAT. Wording for each pack is in the dictionaries.
export const packages: { id: PackageId; price: number; featured?: boolean }[] = [
  { id: "essential", price: 1850 },
  { id: "standard", price: 3250, featured: true },
  { id: "premium", price: 4950 },
];

// Cancellation charge once the intake has been reviewed, before the first draft.
export const setupFee = 500;

// Limits for the "Pay an invoice" page (pounds, total due including VAT).
export const invoiceLimits = { min: 1, max: 20000 };

export const LAST_UPDATED = "2026-11-19"; // shown (localised) on the legal pages
