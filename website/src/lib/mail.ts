import nodemailer from "nodemailer";
import { site } from "./site";

// Sends email through SMTP. For Gmail, use smtp.gmail.com, port 465 and an
// App Password (Google Account -> Security -> 2-Step Verification -> App passwords).
export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendMail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer; contentType?: string }[];
}) {
  if (!mailConfigured()) throw new Error("SMTP is not configured");
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"${site.tradingName} Website" <${process.env.SMTP_USER}>`,
    to: process.env.ENQUIRY_EMAIL || site.supportEmail,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    attachments: opts.attachments,
  });
}
