"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { lp, stripLocale, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import { IconClose, IconMenu, LogoMark } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={40} />
      <span style={{ lineHeight: 1.05 }}>
        <span style={{ display: "block", fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.12rem", letterSpacing: "-0.01em", color: light ? "#fff" : "var(--ink)" }}>
          Fair Trade
        </span>
        <span style={{ display: "block", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: light ? "#8fd0aa" : "var(--green)" }}>
          Design Studio
        </span>
      </span>
    </span>
  );
}

export default function Header({ locale, nav }: { locale: Locale; nav: Dict["nav"] }) {
  const [open, setOpen] = useState(false);
  const current = stripLocale(usePathname() || "/");
  const close = () => setOpen(false);
  const links = [
    { href: "/packages", label: nav.packages },
    { href: "/how-it-works", label: nav.howItWorks },
    { href: "/sample-deliverables", label: nav.samples },
    { href: "/faq", label: nav.faq },
    { href: "/pay", label: nav.payInvoice },
    { href: "/contact", label: nav.contact },
  ];

  return (
    <header className="header">
      <div className="container">
        <Link href={lp(locale, "/")} className="brand" aria-label={`${site.tradingName}, ${nav.home}`} onClick={close}>
          <Wordmark />
        </Link>
        <div className="header-right">
          <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={lp(locale, l.href)} aria-current={current === l.href ? "page" : undefined} onClick={close}>
                {l.label}
              </Link>
            ))}
            <Link href={lp(locale, "/packages")} className="btn btn-primary" onClick={close}>{nav.cta}</Link>
          </nav>
          <LanguageSwitcher locale={locale} label={nav.language} />
          <button className="menu-toggle" aria-label={open ? nav.menuClose : nav.menuOpen} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
            {open ? <IconClose size={28} /> : <IconMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
