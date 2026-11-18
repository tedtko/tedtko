"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { startCheckout } from "./CheckoutButton";

// Collects the consents UK consumer law needs before taking an order:
// agreement to terms, and an express request to start within the
// 14-day cancellation period (Consumer Contracts Regulations 2013, reg. 36).
export default function OrderButton({ id, label, featured }: { id: string; label: string; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const uid = useId();

  if (!open) {
    return (
      <button type="button" className={`btn ${featured ? "btn-primary" : "btn-outline"} btn-block`} onClick={() => setOpen(true)} aria-expanded={false}>
        {label}
      </button>
    );
  }

  return (
    <div>
      <div className="order-panel" role="group" aria-label="Confirm your order">
        <label className="check" htmlFor={`${uid}-agree`}>
          <input id={`${uid}-agree`} type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <span>
            I agree to the <Link href="/terms" target="_blank">Terms &amp; Conditions</Link> and{" "}
            <Link href="/refund-policy" target="_blank">Refund &amp; Cancellation Policy</Link>. I understand all drawings
            are produced remotely from the measurements and photos I supply, and I am responsible for their accuracy.
          </span>
        </label>
        <label className="check" htmlFor={`${uid}-start`}>
          <input id={`${uid}-start`} type="checkbox" checked={start} onChange={(e) => setStart(e.target.checked)} />
          <span>
            <strong>Optional:</strong> I ask you to start work as soon as I submit my measurements, within the 14-day
            cancellation period. I understand that if I then cancel I must pay for work already done, and that I lose my
            right to cancel once the service has been fully performed.
          </span>
        </label>
      </div>
      <button
        type="button"
        className={`btn ${featured ? "btn-primary" : "btn-outline"} btn-block`}
        disabled={!agree || loading}
        onClick={async () => {
          setLoading(true);
          setError("");
          try {
            await startCheckout({ type: "package", id, agreeTerms: agree, requestStart: start });
          } catch (e) {
            setError((e as Error).message);
            setLoading(false);
          }
        }}
      >
        {loading ? "Opening secure checkout…" : "Continue to secure payment"}
      </button>
      {!start && agree && (
        <p className="fineprint" style={{ marginTop: 8 }}>Without the optional box, we&apos;ll start drafting after your 14-day cancellation period ends.</p>
      )}
      {error && <p className="alert alert-error" role="alert" style={{ marginTop: 10 }}>{error}</p>}
    </div>
  );
}
