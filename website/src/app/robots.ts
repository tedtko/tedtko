import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/i18n/config";

export default function robots(): MetadataRoute.Robots {
  const nonEn = locales.filter((l) => l !== "en");
  const disallow = ["/api/", "/payment/", "/intake", ...nonEn.flatMap((l) => [`/${l}/payment/`, `/${l}/intake`])];
  return { rules: { userAgent: "*", allow: "/", disallow }, sitemap: `${site.url}/sitemap.xml` };
}
