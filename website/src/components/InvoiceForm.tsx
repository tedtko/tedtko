"use client";

import { useState } from "react";
import { invoiceLimits } from "@/lib/site";
import { startCheckout } from "./CheckoutButton";
import { IconLock } from "./Icons";

export default function InvoiceForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const f = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await startCheckout({ type: "invoice", ...f });
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="inv-name">Your name</label>
          <input id="inv-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="inv-email">Email for receipt</label>
          <input id="inv-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="inv-ref">Order or invoice reference</label>
          <input id="inv-ref" name="reference" required />
        </div>
        <div className="field">
          <label htmlFor="inv-amount">Amount due, inc. VAT (£)</label>
          <input id="inv-amount" name="amount" type="number" required inputMode="decimal" min={invoiceLimits.min} max={invoiceLimits.max} step="0.01" />
        </div>
      </div>
      {error && <p className="alert alert-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Opening secure checkout…" : "Continue to secure payment"}
      </button>
      <p className="secure"><IconLock size={16} /> Card details are entered on our payment provider&apos;s secure page. We never see or store them.</p>
    </form>
  );
}
