export const locales = ["en", "de", "fr", "es", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

// Used for number/currency formatting and Open Graph.
export const intlTag: Record<Locale, string> = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
};

/** Locale-prefixed path. English (default) has no prefix: /packages, /de/packages. */
export function lp(locale: Locale, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** Remove a locale prefix from a browser pathname. */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (seg && isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || "/";
  }
  return pathname || "/";
}

/** Fill {placeholders} in a translated string. */
export function t(str: string, vars: Record<string, string | number> = {}) {
  return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

/** English site uses pounds; the European language sites use euros. */
export const currencyFor = (locale: Locale): "GBP" | "EUR" => (locale === "en" ? "GBP" : "EUR");

export function money(amount: number, locale: Locale, currency: "GBP" | "EUR" | "USD" = currencyFor(locale)) {
  return new Intl.NumberFormat(intlTag[locale], {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}
