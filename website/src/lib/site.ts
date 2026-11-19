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
export const incVat = (net: number) => Math.round(net * (1 + VAT_RATE) * 100) / 100;

export type Currency = "GBP" | "EUR";
export type PackageId = "essential" | "standard" | "premium";

// The English site charges in pounds; the German, French, Spanish and Italian
// sites charge in euros. Euro prices are FIXED (not live exchange rates), so the
// price shown is exactly the price charged at checkout. They were calculated at
// £1 = €1.16 and rounded to the nearest €10. Change them here if the rate moves.
export const EUR_RATE = 1.16;

// Prices excluding VAT. Wording for each pack is in the dictionaries.
export const packages: { id: PackageId; price: Record<Currency, number>; featured?: boolean }[] = [
  { id: "essential", price: { GBP: 1850, EUR: 2150 } },
  { id: "standard", price: { GBP: 3250, EUR: 3770 }, featured: true },
  { id: "premium", price: { GBP: 4950, EUR: 5740 } },
];

// Cancellation charge once the intake has been reviewed, before the first draft.
export const setupFee: Record<Currency, number> = { GBP: 500, EUR: 580 };

// Limits for the "Pay an invoice" page (total due including VAT, either currency).
export const invoiceLimits = { min: 1, max: 25000 };

export const LAST_UPDATED = "2026-11-19"; // shown (localised) on the legal pages
