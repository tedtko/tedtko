"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { IconClose, IconMenu, IconPhone } from "./Icons";

const links = [
  { href: "/services", label: "Services" },
  { href: "/planning-drawings", label: "Planning & Drawings" },
  { href: "/projects", label: "Projects" },
  { href: "/consultation", label: "Book a Survey" },
  { href: "/pay", label: "Pay Invoice" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Based in {site.base} · Working {site.coverage}</span>
          <a href={site.phoneHref}>Call {site.phoneDisplay}</a>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
            <img src="/logo.png" alt={site.name} width={94} height={62} />
          </Link>
          <button className="menu-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <IconClose size={28} /> : <IconMenu size={28} />}
          </button>
          <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/quote" className="btn btn-primary" onClick={() => setOpen(false)}>
              <IconPhone size={16} /> Free Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
