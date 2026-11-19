/** Starts a checkout. Throws an Error whose message is an error code (see Dict["errors"]). */
export async function startCheckout(payload: Record<string, unknown>) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) throw new Error(data.code || "generic");
  window.location.href = data.url;
}
