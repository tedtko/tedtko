"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { IconClose, IconMenu, LogoMark } from "./Icons";

const links = [
  { href: "/packages", label: "Packages" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/sample-deliverables", label: "Sample Deliverables" },
  { href: "/faq", label: "FAQ" },
  { href: "/pay", label: "Pay Invoice" },
  { href: "/contact", label: "Contact" },
];

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="brand" aria-label={`${site.tradingName}, home`} onClick={close}>
          <Wordmark />
        </Link>
        <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
          {open ? <IconClose size={28} /> : <IconMenu size={28} />}
        </button>
        <nav id="main-nav" className={`nav${open ? " open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/packages" className="btn btn-primary" onClick={close}>View Drawing Packages</Link>
        </nav>
      </div>
    </header>
  );
}
