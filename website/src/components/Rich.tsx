import Link from "next/link";
import { Fragment } from "react";
import { lp, type Locale } from "@/i18n/config";

// Renders **bold** and [text](href). Internal links (starting with "/") get the
// current language prefix; external links open normally.
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

export default function Rich({ text, locale }: { text: string; locale: Locale }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        const m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (m) {
          const [, label, href] = m;
          if (href.startsWith("/")) return <Link key={i} href={lp(locale, href)}>{label}</Link>;
          const external = href.startsWith("http");
          return (
            <a key={i} href={href} {...(external ? { rel: "noopener noreferrer" } : {})}>{label}</a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
