import type { Metadata } from "next";
import { LAST_UPDATED } from "@/lib/site";
import { localDate, pageMeta, resolve, type LangParams } from "@/i18n/page";
import { LegalView } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/terms", d.legal.terms.metaTitle, d.legal.terms.metaDescription);
}

export default async function Page({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  return <LegalView doc={d.legal.terms} d={d} locale={locale} date={localDate(LAST_UPDATED, locale)} />;
}
