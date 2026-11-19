import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

// English is the default and lives at unprefixed URLs (/packages).
// Other languages use a prefix (/de/packages). Internally every page is
// served from app/[lang], so unprefixed requests are rewritten to /en/...
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // /en/... is not a public URL: redirect to the unprefixed English page.
  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (first && isLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next.js internals and files with an extension (icon.svg, robots.txt, sitemap.xml).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
