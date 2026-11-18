import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { site } from "@/lib/site";

// Fonts are downloaded at build time and served from this site,
// so visitors' browsers never contact Google.
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-head", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.tradingName} | Remote Architectural CAD Drawings & Planning Packs`,
    template: `%s | ${site.tradingName}`,
  },
  description:
    "Fixed-fee 2D & 3D architectural design packs, floor plans and building regulations drawings produced remotely from your measurements and photos. Delivered digitally in PDF & DWG.",
  openGraph: { type: "website", locale: "en_GB", siteName: site.tradingName },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#17643c" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.tradingName,
  legalName: site.legalName,
  url: site.url,
  email: site.supportEmail,
  telephone: "+447933574769",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description: "Remote architectural CAD drafting and planning drawing packs delivered digitally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
