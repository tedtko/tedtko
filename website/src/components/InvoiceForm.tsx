"use client";

import { useState } from "react";
import { invoiceLimits } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import { startCheckout } from "./CheckoutButton";
import { IconLock } from "./Icons";

export default function InvoiceForm({ locale, f, errors }: { locale: Locale; f: Dict["forms"]; errors: Dict["errors"] }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await startCheckout({ type: "invoice", locale, ...data });
    } catch (err) {
      const code = (err as Error).message as keyof Dict["errors"];
      setError(errors[code] || errors.generic);
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="inv-name">{f.invName}</label>
          <input id="inv-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="inv-email">{f.invEmail}</label>
          <input id="inv-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="inv-ref">{f.invNumber}</label>
          <input id="inv-ref" name="reference" required />
        </div>
        <div className="field">
          <label htmlFor="inv-amount">{f.invAmount}</label>
          <input id="inv-amount" name="amount" type="number" required inputMode="decimal" min={invoiceLimits.min} max={invoiceLimits.max} step="0.01" />
        </div>
      </div>
      {error && <p className="alert alert-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? f.opening : f.invSubmit}</button>
      <p className="secure"><IconLock size={16} /> {f.secure}</p>
    </form>
  );
}
