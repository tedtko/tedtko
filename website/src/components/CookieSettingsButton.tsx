"use client";

import { openCookieSettings } from "./CookieBanner";

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" className="btn btn-outline" onClick={openCookieSettings}>
      {label}
    </button>
  );
}
