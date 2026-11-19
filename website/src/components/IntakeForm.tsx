"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import Rich from "./Rich";

const MAX = 4 * 1024 * 1024;

export default function IntakeForm({
  kind = "intake", defaultRef = "", locale, f, errors, packNames,
}: {
  kind?: "intake" | "contact"; defaultRef?: string; locale: Locale;
  f: Dict["forms"]; errors: Dict["errors"]; packNames: string[];
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const intake = kind === "intake";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const total = fd.getAll("files").reduce((n, x) => n + (x instanceof File ? x.size : 0), 0);
    if (total > MAX) {
      setError(errors.too_large);
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/intake", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.code || "generic");
      setStatus("sent");
    } catch (err) {
      const code = (err as Error).message as keyof Dict["errors"];
      setError(errors[code] || errors.generic);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <div className="alert alert-success" role="status">{intake ? f.sentIntake : f.sentContact}</div>;
  }

  return (
    <form className="form" onSubmit={onSubmit} encType="multipart/form-data">
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="lang" value={locale} />
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${kind}-name`}>{f.name}</label>
          <input id={`${kind}-name`} name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-email`}>{f.email}</label>
          <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${kind}-phone`}>{f.phone} <span className="hint">{f.optional}</span></label>
          <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" />
        </div>
        {intake ? (
          <div className="field">
            <label htmlFor="intake-ref">{f.orderRef} <span className="hint">{f.orderRefHint}</span></label>
            <input id="intake-ref" name="reference" defaultValue={defaultRef} />
          </div>
        ) : (
          <div className="field">
            <label htmlFor="contact-pack">{f.interested} <span className="hint">{f.optional}</span></label>
            <select id="contact-pack" name="pack" defaultValue="">
              <option value="">{f.notSure}</option>
              {packNames.map((n) => <option key={n} value={n}>{n} {f.packSuffix}</option>)}
            </select>
          </div>
        )}
      </div>
      {intake && (
        <>
          <div className="form-row">
            <div className="field">
              <label htmlFor="intake-pack">{f.yourPack}</label>
              <select id="intake-pack" name="pack" required defaultValue="">
                <option value="" disabled>{f.select}</option>
                {packNames.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="intake-address">{f.address}</label>
              <input id="intake-address" name="address" required autoComplete="street-address" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="intake-files">{f.files} <span className="hint">{f.filesHint}</span></label>
            <input id="intake-files" name="files" type="file" multiple accept=".jpg,.jpeg,.png,.heic,.webp,.pdf,.dwg,.dxf,.doc,.docx,.txt" />
          </div>
          <div className="field">
            <label htmlFor="intake-link">{f.link} <span className="hint">{f.linkHint}</span></label>
            <input id="intake-link" name="link" type="url" placeholder="https://" />
          </div>
        </>
      )}
      <div className="field">
        <label htmlFor={`${kind}-message`}>{intake ? f.brief : f.message}</label>
        <textarea id={`${kind}-message`} name="message" required placeholder={intake ? f.briefPlaceholder : ""} />
      </div>
      <div className="hp" aria-hidden>
        <label htmlFor={`${kind}-company`}>Company</label>
        <input id={`${kind}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" && <p className="alert alert-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? f.sending : intake ? f.sendIntake : f.sendContact}
      </button>
      <p className="fineprint">
        <Rich text={f.privacy} locale={locale} />
        {intake && ` ${f.accuracy}`}
      </p>
    </form>
  );
}
