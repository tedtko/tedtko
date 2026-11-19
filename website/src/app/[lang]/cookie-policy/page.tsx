import type { Metadata } from "next";
import { LAST_UPDATED } from "@/lib/site";
import { localDate, pageMeta, resolve, type LangParams } from "@/i18n/page";
import { LegalView } from "@/components/Sections";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/cookie-policy", d.legal.cookies.metaTitle, d.legal.cookies.metaDescription);
}

export default async function Page({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  return (
    <LegalView
      doc={d.legal.cookies} d={d} locale={locale} date={localDate(LAST_UPDATED, locale)}
      extra={<p style={{ marginTop: 24 }}><CookieSettingsButton label={d.cookie.open} /></p>}
    />
  );
}
