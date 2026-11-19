import type { Metadata } from "next";
import { LAST_UPDATED } from "@/lib/site";
import { localDate, pageMeta, resolve, type LangParams } from "@/i18n/page";
import { LegalView } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/refund-policy", d.legal.refund.metaTitle, d.legal.refund.metaDescription);
}

export default async function Page({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  return <LegalView doc={d.legal.refund} d={d} locale={locale} date={localDate(LAST_UPDATED, locale)} />;
}
