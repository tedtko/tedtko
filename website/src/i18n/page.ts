import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { defaultLocale, intlTag, isLocale, locales, lp, type Locale } from "./config";
import { getDict } from "./get";

export type LangParams = { params: Promise<{ lang: string }> };

/** Resolve the [lang] route param to a supported locale and its dictionary. */
export async function resolve(params: LangParams["params"]) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return { locale: lang as Locale, d: getDict(lang as Locale) };
}

const abs = (path: string) => new URL(path, site.url).toString();

/** Page metadata with canonical URL and hreflang alternates for every language. */
export function pageMeta(locale: Locale, path: string, title: string, description: string, noindex = false): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = abs(lp(l, path));
  languages["x-default"] = abs(lp(defaultLocale, path));
  return {
    title,
    description,
    alternates: { canonical: abs(lp(locale, path)), languages },
    openGraph: { title, description, locale: intlTag[locale].replace("-", "_"), url: abs(lp(locale, path)) },
    ...(noindex ? { robots: { index: false } } : {}),
  };
}

export function localDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(intlTag[locale], { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}
