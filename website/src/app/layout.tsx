import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Builders, Refurbishment & Planning Drawings in Croydon & London`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Fair Trade 23 Limited: Croydon-based building and renovation experts working across London. New builds, extensions, loft conversions, full refurbishments, planning and architectural drawings.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    images: ["/logo.png"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#1c2124" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  url: site.url,
  telephone: "+447598610612",
  email: site.email,
  image: `${site.url}/logo.png`,
  address: { "@type": "PostalAddress", addressLocality: "Croydon", addressRegion: "London", addressCountry: "GB" },
  areaServed: { "@type": "City", name: "London" },
  priceRange: "££££",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
