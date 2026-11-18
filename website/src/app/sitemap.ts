import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", "/packages", "/how-it-works", "/sample-deliverables", "/faq", "/contact",
    "/terms", "/refund-policy", "/privacy-policy", "/cookie-policy",
  ].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.6 }));
}
