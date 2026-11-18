"use client";

import { useState } from "react";
import { services, site } from "@/lib/site";

export default function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError((err as Error).message);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="alert alert-success">
        Thank you. Your enquiry has been sent and we&apos;ll be in touch shortly. For anything urgent, call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="postcode">Project postcode</label>
          <input id="postcode" name="postcode" autoComplete="postal-code" placeholder="e.g. CR0 1AA" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="service">Type of work</label>
          <select id="service" name="service" defaultValue={defaultService}>
            <option value="">Select…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Approximate budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Select…</option>
            <option>Under £25,000</option>
            <option>£25,000 – £50,000</option>
            <option>£50,000 – £100,000</option>
            <option>£100,000 – £250,000</option>
            <option>£250,000+</option>
            <option>Drawings only (£5k – £12k)</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="timescale">When would you like to start?</label>
        <select id="timescale" name="timescale" defaultValue="">
          <option value="">Select…</option>
          <option>As soon as possible</option>
          <option>Within 3 months</option>
          <option>3 – 6 months</option>
          <option>6+ months</option>
          <option>Just planning for now</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about your project *</label>
        <textarea id="message" name="message" required placeholder="e.g. Rear single-storey extension on a 3-bed semi in Croydon, need planning drawings and the build." />
      </div>
      <div className="hp" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && <p className="alert alert-error">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send my enquiry"}
      </button>
      <p className="note">We usually reply within one working day. Your details are only used to respond to your enquiry.</p>
    </form>
  );
}
