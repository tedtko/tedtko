"use client";

import { openCookieSettings } from "./CookieBanner";

export default function CookieSettingsButton() {
  return (
    <button type="button" className="btn btn-outline" onClick={openCookieSettings}>
      Open Cookie Settings
    </button>
  );
}
