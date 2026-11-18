"use client";

import Link from "next/link";
import { useState } from "react";
import { packages, site } from "@/lib/site";

const MAX = 4 * 1024 * 1024;

export default function IntakeForm({ kind = "intake", defaultRef = "" }: { kind?: "intake" | "contact"; defaultRef?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const intake = kind === "intake";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const total = fd.getAll("files").reduce((n, f) => n + (f instanceof File ? f.size : 0), 0);
    if (total > MAX) {
      setError("Your files are over 4 MB in total. Please share them with a link (e.g. WeTransfer or Google Drive) instead.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/intake", { method: "POST", body: fd });
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
      <div className="alert alert-success" role="status">
        Thank you. We&apos;ve received your {intake ? "project details" : "message"} and will reply within {site.responseTime}.
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
      <input type="hidden" name="kind" value={kind} />
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${kind}-name`}>Full name</label>
          <input id={`${kind}-name`} name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-email`}>Email</label>
          <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${kind}-phone`}>Phone <span className="hint">(optional)</span></label>
          <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" />
        </div>
        {intake ? (
          <div className="field">
            <label htmlFor="intake-ref">Order reference <span className="hint">(from your confirmation email)</span></label>
            <input id="intake-ref" name="reference" defaultValue={defaultRef} />
          </div>
        ) : (
          <div className="field">
            <label htmlFor="contact-pack">Interested in <span className="hint">(optional)</span></label>
            <select id="contact-pack" name="pack" defaultValue="">
              <option value="">Not sure yet</option>
              {packages.map((p) => <option key={p.id} value={p.name}>{p.name} pack</option>)}
            </select>
          </div>
        )}
      </div>
      {intake && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="intake-pack">Your pack</label>
              <select id="intake-pack" name="pack" required defaultValue="">
                <option value="" disabled>Select…</option>
                {packages.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="intake-address">Property address &amp; postcode</label>
              <input id="intake-address" name="address" required autoComplete="street-address" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="intake-files">
              Measurements, sketches, photos &amp; floor plans{" "}
              <span className="hint">(JPG, PNG, HEIC, PDF, DWG, DXF or DOCX, up to 4 MB in total)</span>
            </label>
            <input id="intake-files" name="files" type="file" multiple accept=".jpg,.jpeg,.png,.heic,.webp,.pdf,.dwg,.dxf,.doc,.docx,.txt" />
          </div>
          <div className="field">
            <label htmlFor="intake-link">Link to larger files <span className="hint">(WeTransfer, Google Drive, Dropbox, optional)</span></label>
            <input id="intake-link" name="link" type="url" placeholder="https://" />
          </div>
        </>
      )}
      <div className="field">
        <label htmlFor={`${kind}-message`}>{intake ? "Project brief" : "Your message"}</label>
        <textarea
          id={`${kind}-message`}
          name="message"
          required
          placeholder={intake ? "What would you like to build or change? Include ceiling heights, wall thicknesses and any known boundary details." : ""}
        />
      </div>
      <div className="hp" aria-hidden>
        <label htmlFor={`${kind}-company`}>Company</label>
        <input id={`${kind}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && <p className="alert alert-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : intake ? "Submit my project details" : "Send message"}
      </button>
      <p className="fineprint">
        We use your details only to deliver your drawings and reply to you. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        {intake && " By submitting, you confirm the measurements and information supplied are accurate to the best of your knowledge."}
      </p>
    </form>
  );
}
