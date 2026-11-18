"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// PECR-compliant consent: nothing non-essential runs until the visitor opts in.
// The site currently uses NO analytics or marketing cookies. If you add Google
// Analytics, set NEXT_PUBLIC_GA_ID and it will only load after "Accept All".

const KEY = "ftds-cookie-consent";
const EVENT = "ftds-open-cookie-settings";
export const CONSENT_VERSION = 1;

type Consent = { v: number; analytics: boolean; date: string };

export function openCookieSettings() {
  window.dispatchEvent(new Event(EVENT));
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c.v === CONSENT_VERSION ? c : null;
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

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setOpen(true);
    else {
      setAnalytics(c.analytics);
      if (c.analytics) loadAnalytics();
    }
    const onOpen = () => {
      const cur = readConsent();
      setAnalytics(cur?.analytics ?? false);
      setShowPrefs(true);
      setOpen(true);
    };
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  function save(choice: boolean) {
    const c: Consent = { v: CONSENT_VERSION, analytics: choice, date: new Date().toISOString() };
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {
      /* storage blocked: banner will show again next visit */
    }
    setOpen(false);
    setShowPrefs(false);
    if (choice) loadAnalytics();
    // Withdrawing consent after analytics loaded needs a reload to stop it.
    else if (document.getElementById("ga-src")) window.location.reload();
  }

  if (!open) return null;

  return (
    <div className="cookie" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <h2 id="cookie-title">Cookies on this website</h2>
      <p id="cookie-desc">
        We use strictly necessary storage to make this site work and remember your choice. With your permission we&apos;d
        also like to use analytics cookies to understand how the site is used. These stay off unless you accept.{" "}
        <Link href="/cookie-policy">Read our Cookie Policy</Link>.
      </p>
      {showPrefs && (
        <div className="prefs">
          <label className="check">
            <input type="checkbox" checked disabled aria-describedby="nec-desc" />
            <span><strong>Strictly necessary</strong> <span id="nec-desc">(always on): security, checkout and saving your cookie choice.</span></span>
          </label>
          <label className="check">
            <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} />
            <span><strong>Analytics</strong> (optional): anonymous statistics on page visits.</span>
          </label>
        </div>
      )}
      <div className="btn-row">
        <button type="button" className="btn btn-outline" onClick={() => save(false)}>Reject Non-Essential</button>
        <button type="button" className="btn btn-outline" onClick={() => save(true)}>Accept All</button>
        {showPrefs ? (
          <button type="button" className="btn btn-primary" onClick={() => save(analytics)}>Save my choices</button>
        ) : (
          <button type="button" className="btn btn-outline" style={{ borderColor: "var(--line)" }} onClick={() => setShowPrefs(true)}>Manage settings</button>
        )}
      </div>
    </div>
  );
}
