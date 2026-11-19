import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales, lp } from "@/i18n/config";

const pages = [
  "/", "/packages", "/how-it-works", "/sample-deliverables", "/faq", "/pay", "/contact",
  "/terms", "/refund-policy", "/privacy-policy", "/cookie-policy", "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (p: string) => new URL(p, site.url).toString();
  return pages.flatMap((p) =>
    locales.map((l) => ({
      url: abs(lp(l, p)),
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.6,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, abs(lp(x, p))])) },
    })),
  );
}
