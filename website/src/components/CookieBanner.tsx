"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import Rich from "./Rich";

// PECR / ePrivacy consent: nothing non-essential runs until the visitor opts in.
// Accept and Reject are equally prominent; no optional box is pre-ticked.
// The site uses NO analytics today. If NEXT_PUBLIC_GA_ID is set, Google
// Analytics loads only after consent.

const KEY = "ftds-cookie-consent";
const EVENT = "ftds-open-cookie-settings";
const VERSION = 1;

type Consent = { v: number; analytics: boolean; date: string };

export function openCookieSettings() {
  window.dispatchEvent(new Event(EVENT));
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c.v === VERSION ? c : null;
  } catch {
    return null;
  }
}

function loadAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || document.getElementById("ga-src")) return;
  const s = document.createElement("script");
  s.id = "ga-src";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true });
}

export default function CookieBanner({ locale, c }: { locale: Locale; c: Dict["cookie"] }) {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const cur = readConsent();
    if (!cur) setOpen(true);
    else {
      setAnalytics(cur.analytics);
      if (cur.analytics) loadAnalytics();
    }
    const onOpen = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setShowPrefs(true);
      setOpen(true);
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  function save(choice: boolean) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: VERSION, analytics: choice, date: new Date().toISOString() }));
    } catch {
      /* storage blocked: the banner will show again next visit */
    }
    setOpen(false);
    setShowPrefs(false);
    if (choice) loadAnalytics();
    else if (document.getElementById("ga-src")) window.location.reload();
  }

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <h2 id="cookie-title">{c.title}</h2>
      <p id="cookie-desc"><Rich text={c.text} locale={locale} /></p>
      {showPrefs && (
        <div className="prefs">
          <label className="check">
            <input type="checkbox" checked disabled />
            <span><strong>{c.necessary}</strong> {c.necessaryDesc}</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <span><strong>{c.analytics}</strong> {c.analyticsDesc}</span>
          </label>
        </div>
      )}
      <div className="btn-row">
        <button type="button" className="btn btn-outline" onClick={() => save(false)}>{c.reject}</button>
        <button type="button" className="btn btn-outline" onClick={() => save(true)}>{c.accept}</button>
        {showPrefs ? (
          <button type="button" className="btn btn-primary" onClick={() => save(analytics)}>{c.save}</button>
        ) : (
          <button type="button" className="btn btn-outline" style={{ borderColor: "var(--line)" }} onClick={() => setShowPrefs(true)}>{c.manage}</button>
        )}
      </div>
    </div>
  );
}
