"use client";

import { useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import { startCheckout } from "./CheckoutButton";
import Rich from "./Rich";

// Collects the consents consumer law needs before taking an order: agreement to
// the terms, and an optional express request to start within the 14-day
// cancellation/withdrawal period (UK CCR 2013 reg. 36; EU Directive 2011/83/EU art. 16).
export default function OrderButton({
  id, label, featured, locale, o, errors,
}: { id: string; label: string; featured?: boolean; locale: Locale; o: Dict["order"]; errors: Dict["errors"] }) {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const uid = useId();
  const cls = `btn ${featured ? "btn-primary" : "btn-outline"} btn-block`;

  if (!open) {
    return <button type="button" className={cls} onClick={() => setOpen(true)} aria-expanded={false}>{label}</button>;
  }

  return (
    <div>
      <div className="order-panel" role="group" aria-label={o.groupLabel}>
        <label className="check" htmlFor={`${uid}-agree`}>
          <input id={`${uid}-agree`} type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span><Rich text={o.agree} locale={locale} /></span>
        </label>
        <label className="check" htmlFor={`${uid}-start`}>
          <input id={`${uid}-start`} type="checkbox" checked={start} onChange={(e) => setStart(e.target.checked)} />
          <span><Rich text={o.start} locale={locale} /></span>
        </label>
      </div>
      <button
        type="button"
        className={cls}
        disabled={!agree || loading}
        onClick={async () => {
          setLoading(true);
          setError("");
          try {
            await startCheckout({ type: "package", id, agreeTerms: agree, requestStart: start, locale });
          } catch (e) {
            const code = (e as Error).message as keyof Dict["errors"];
            setError(errors[code] || errors.generic);
            setLoading(false);
          }
        }}
      >
        {loading ? o.opening : o.continue}
      </button>
      {!start && agree && <p className="fineprint" style={{ marginTop: 8 }}>{o.noStartNote}</p>}
      {error && <p className="alert alert-error" role="alert" style={{ marginTop: 10 }}>{error}</p>}
    </div>
  );
}
