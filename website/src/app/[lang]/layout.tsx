import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { site } from "@/lib/site";
import { intlTag, locales } from "@/i18n/config";
import { resolve, type LangParams } from "@/i18n/page";

// Fonts are downloaded at build time and served from this site, so visitors'
// browsers never contact Google.
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin", "latin-ext"], weight: ["700", "800"], variable: "--font-head", display: "swap" });

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.tradingName} | ${d.meta.siteTitle}`, template: `%s | ${site.tradingName}` },
    description: d.meta.siteDescription,
    openGraph: { type: "website", siteName: site.tradingName, locale: intlTag[locale].replace("-", "_") },
    icons: { icon: "/icon.svg" },
  };
}

export const viewport: Viewport = { themeColor: "#17643c" };

export default async function RootLayout({ children, params }: { children: React.ReactNode } & LangParams) {
  const { locale, d } = await resolve(params);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.tradingName,
    legalName: site.legalName,
    url: site.url,
    email: site.supportEmail,
    telephone: site.phoneHref.replace("tel:", ""),
    vatID: site.vatNumber.replace(/\s/g, ""),
    address: { "@type": "PostalAddress", streetAddress: "Flat 1-4, 67 Wellesley Road", addressLocality: "Croydon", postalCode: "CR0 2AJ", addressCountry: "GB" },
    description: d.meta.siteDescription,
    availableLanguage: ["en", "de", "fr", "es", "it"],
    areaServed: ["United Kingdom", "European Union", "United States"],
  };
  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip">{d.nav.skip}</a>
        <Header locale={locale} nav={d.nav} />
        <main id="main">{children}</main>
        <Footer locale={locale} f={d.footer} waText={d.contact.waText} />
        <CookieBanner locale={locale} c={d.cookie} />
      </body>
    </html>
  );
}
