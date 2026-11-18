import Link from "next/link";
import { site } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function CtaBand({
  title = "Ready to start your project?",
  text = "Tell us what you're planning and we'll come back with a clear, honest quote.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <Link href="/quote" className="btn btn-light">Get a free quote</Link>
          <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <IconWhatsApp size={20} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
