import { NextResponse } from "next/server";
import { mailConfigured, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

const clean = (v: unknown, max = 200) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot field: real visitors never fill this in.
  if (clean(data.company)) return NextResponse.json({ ok: true });

  const q = {
    name: clean(data.name, 80),
    phone: clean(data.phone, 30),
    email: clean(data.email, 120),
    postcode: clean(data.postcode, 12),
    service: clean(data.service, 60),
    budget: clean(data.budget, 40),
    timescale: clean(data.timescale, 40),
    message: clean(data.message, 3000),
  };

  if (!q.name || !q.phone || !/^\S+@\S+\.\S+$/.test(q.email) || !q.message) {
    return NextResponse.json({ error: "Please fill in your name, phone, email and project details." }, { status: 400 });
  }

  const text = [
    `New quote request from the website`,
    ``,
    `Name: ${q.name}`,
    `Phone: ${q.phone}`,
    `Email: ${q.email}`,
    `Postcode: ${q.postcode || "-"}`,
    `Service: ${q.service || "-"}`,
    `Budget: ${q.budget || "-"}`,
    `Timescale: ${q.timescale || "-"}`,
    ``,
    `Project details:`,
    q.message,
  ].join("\n");

  if (!mailConfigured()) {
    console.warn("SMTP not configured; quote request logged only:\n" + text);
    return NextResponse.json(
      { error: "Our form is being set up. Please call or WhatsApp us on +44 7598 610612." },
      { status: 503 },
    );
  }

  try {
    await sendMail({ subject: `Quote request: ${q.service || "Project"} (${q.postcode || q.name})`, text, replyTo: q.email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote email failed", err);
    return NextResponse.json({ error: "Sorry, something went wrong. Please call or WhatsApp us." }, { status: 500 });
  }
}
