"use client";

import { useState } from "react";

type Props = {
  payload: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
};

export async function startCheckout(payload: Record<string, unknown>) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) throw new Error(data.error || "Payment could not be started.");
  window.location.href = data.url;
}

export default function CheckoutButton({ payload, children, className = "btn btn-primary btn-block" }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <button
        className={className}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          setError("");
          try {
            await startCheckout(payload);
          } catch (e) {
            setError((e as Error).message);
            setLoading(false);
          }
        }}
      >
        {loading ? "Opening secure checkout…" : children}
      </button>
      {error && <p className="alert alert-error" style={{ marginTop: 12 }}>{error}</p>}
    </div>
  );
}
