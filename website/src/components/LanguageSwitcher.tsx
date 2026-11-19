"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { localeNames, locales, lp, stripLocale, type Locale } from "@/i18n/config";

// A plain <details> dropdown: works without JavaScript and is keyboard accessible.
// Uses ordinary links so each language loads as its own page (correct <html lang>).
export default function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || "/";
  const rest = stripLocale(pathname);
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) ref.current.open = false;
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <details className="lang" ref={ref}>
      <summary aria-label={`${label}: ${localeNames[locale]}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        <span>{locale.toUpperCase()}</span>
      </summary>
      <ul role="list">
        {locales.map((l) => (
          <li key={l}>
            <a href={lp(l, rest)} hrefLang={l} lang={l} aria-current={l === locale ? "true" : undefined}>
              <span className="code">{l.toUpperCase()}</span> {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
