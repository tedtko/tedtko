import { NextResponse } from "next/server";
import { mailConfigured, sendMail } from "@/lib/mail";
import { site } from "@/lib/site";

export const runtime = "nodejs";

// Vercel limits request bodies to about 4.5 MB, so uploads are capped at 4 MB
// in total. Larger files can be shared with a link (WeTransfer, Google Drive).
const MAX_TOTAL = 4 * 1024 * 1024;
const ALLOWED = /\.(jpe?g|png|heic|webp|pdf|dwg|dxf|docx?|txt)$/i;

const clean = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Upload too large or invalid. Keep files under 4 MB in total, or share a link." }, { status: 400 });
  }

  if (clean(form.get("company"))) return NextResponse.json({ ok: true }); // honeypot

  const d = {
    kind: clean(form.get("kind"), 20) === "contact" ? "contact" : "intake",
    name: clean(form.get("name"), 80),
    email: clean(form.get("email"), 120),
    phone: clean(form.get("phone"), 30),
    reference: clean(form.get("reference"), 60),
    pack: clean(form.get("pack"), 30),
    address: clean(form.get("address"), 200),
    link: clean(form.get("link"), 500),
    message: clean(form.get("message"), 5000),
  };

  if (!d.name || !/^\S+@\S+\.\S+$/.test(d.email) || !d.message) {
    return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  const total = files.reduce((n, f) => n + f.size, 0);
  if (total > MAX_TOTAL) {
    return NextResponse.json({ error: "Files are over 4 MB in total. Please share larger files with a link instead." }, { status: 400 });
  }
  const bad = files.find((f) => !ALLOWED.test(f.name));
  if (bad) return NextResponse.json({ error: `File type not accepted: ${bad.name}` }, { status: 400 });

  const text = [
    d.kind === "intake" ? "New project intake submission" : "New contact message",
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "-"}`,
    d.kind === "intake" ? `Order reference: ${d.reference || "-"}` : "",
    d.kind === "intake" ? `Pack: ${d.pack || "-"}` : "",
    d.kind === "intake" ? `Property address: ${d.address || "-"}` : "",
    d.link ? `Files link: ${d.link}` : "",
    `Attachments: ${files.length ? files.map((f) => f.name).join(", ") : "none"}`,
    "",
    d.kind === "intake" ? "Project brief:" : "Message:",
    d.message,
  ]
    .filter((l) => l !== "")
    .join("\n");

  if (!mailConfigured()) {
    console.warn("SMTP not configured; submission logged only:\n" + text);
    return NextResponse.json({ error: `Our form is being set up. Please email ${site.supportEmail}.` }, { status: 503 });
  }

  try {
    const attachments = await Promise.all(
      files.map(async (f) => ({ filename: f.name, content: Buffer.from(await f.arrayBuffer()), contentType: f.type || undefined })),
    );
    await sendMail({
      subject: d.kind === "intake" ? `Intake: ${d.reference || d.name} (${d.pack || "pack"})` : `Website enquiry: ${d.name}`,
      text,
      replyTo: d.email,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Form email failed", err);
    return NextResponse.json({ error: `Sorry, something went wrong. Please email ${site.supportEmail}.` }, { status: 500 });
  }
}
