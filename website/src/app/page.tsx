import Link from "next/link";
import { boroughs, consultation, formatGBP, packages, services, site } from "@/lib/site";
import { IconCheck, IconClock, IconPin, IconRuler, IconShield, IconWhatsApp, serviceIcons } from "@/components/Icons";
import BeforeAfter from "@/components/BeforeAfter";
import { FloorPlan, HouseFront } from "@/components/Illustrations";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">Croydon · All across London</span>
            <h1>
              Building &amp; renovation <span>experts</span> you can trust
            </h1>
            <p className="lead">
              New builds, extensions, loft conversions and full refurbishments, plus in-house planning and architectural
              drawings. One team from first sketch to final handover.
            </p>
            <ul className="hero-badges">
              <li><IconCheck size={18} /> {site.yearsTrading} years trading</li>
              <li><IconCheck size={18} /> Drawings &amp; build under one roof</li>
              <li><IconCheck size={18} /> Fixed-price drawing packages</li>
            </ul>
            <div className="btn-row">
              <Link href="/quote" className="btn btn-primary">Get a free quote</Link>
              <a href={site.whatsappHref} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <IconWhatsApp size={20} /> WhatsApp us
              </a>
              <a href={site.phoneHref} className="btn btn-outline">{site.phoneDisplay}</a>
            </div>
          </div>
          <div className="hero-logo">
            <img src="/logo.png" alt={`${site.name}: ${site.tagline}`} width={478} height={315} />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Why choose us">
        <div className="container">
          <div className="stat"><div className="stat-icon"><IconClock /></div><div><strong>{site.yearsTrading} Years</strong><span>Trading experience</span></div></div>
          <div className="stat"><div className="stat-icon"><IconPin /></div><div><strong>All London</strong><span>Based in Croydon</span></div></div>
          <div className="stat"><div className="stat-icon"><IconRuler /></div><div><strong>In-House</strong><span>Planning &amp; drawings</span></div></div>
          <div className="stat"><div className="stat-icon"><IconShield /></div><div><strong>Quality</strong><span>Safety &amp; excellence</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">What we do</span>
            <h2>Our services</h2>
            <p className="lead">From a single bathroom to a full new build, we handle the design, the paperwork and the construction.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug];
              return (
                <Link key={s.slug} href={`/services#${s.slug}`} className="card service-card" style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="icon">{Icon && <Icon size={26} />}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Link>
              );
            })}
            <Link href="/consultation" className="card service-card" style={{ textDecoration: "none", color: "inherit", background: "var(--ink)", borderColor: "var(--ink)" }}>
              <div className="icon" style={{ background: "var(--green)", color: "#fff" }}><IconPin size={26} /></div>
              <h3 style={{ color: "#fff" }}>Book a site survey</h3>
              <p style={{ color: "#b9c1c6" }}>{formatGBP(consultation.price)} on-site consultation, deducted from your project if you go ahead.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">Planning &amp; drawings</span>
            <h2>Professional drawings that get approved</h2>
            <p className="lead">
              Our design team produces full planning and building regulations drawings, and we submit and manage the
              application with your council for you.
            </p>
            <ul className="ticks">
              <li>Measured survey, existing &amp; proposed plans and elevations</li>
              <li>Planning applications &amp; building control handled</li>
              <li>3D visuals so you can see it before it&apos;s built</li>
              <li>Fixed fees from {formatGBP(packages[0].price)} to {formatGBP(packages[packages.length - 1].price)}, payable securely online</li>
            </ul>
            <div className="btn-row">
              <Link href="/planning-drawings" className="btn btn-primary">View drawing packages</Link>
              <Link href="/consultation" className="btn btn-outline">Book a consultation</Link>
            </div>
          </div>
          <figure className="figure">
            <div className="drawing"><FloorPlan /></div>
            <figcaption><strong>Proposed ground floor plan</strong><span>Example drawing, rear extension</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <figure className="figure">
            <BeforeAfter label="House front refurbishment" before={<HouseFront />} after={<HouseFront after />} />
            <figcaption><strong>Full house refurbishment</strong><span>Drag the slider to compare. Illustration.</span></figcaption>
          </figure>
          <div>
            <span className="eyebrow">Transformations</span>
            <h2>See the difference</h2>
            <p className="lead">
              New roofs, windows, render, extensions and full internal refits. We take tired properties and make them
              homes people are proud of.
            </p>
            <Link href="/projects" className="btn btn-primary">See more projects</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">How it works</span>
            <h2>From idea to handover</h2>
          </div>
          <div className="grid grid-4 steps">
            <div className="step"><h3>Consultation</h3><p>We visit your property, listen to your ideas and talk through budget and options.</p></div>
            <div className="step"><h3>Design &amp; drawings</h3><p>Our team produces your drawings and 3D visuals, and handles planning and building regs.</p></div>
            <div className="step"><h3>Clear quote</h3><p>A detailed, itemised build price with no hidden extras and an agreed programme.</p></div>
            <div className="step"><h3>Build &amp; handover</h3><p>One project manager, regular updates and a clean, finished home handed back to you.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Areas we cover</span>
          <h2>Based in Croydon, working across London</h2>
          <p className="lead">We take on projects in every London borough and the surrounding areas.</p>
          <ul className="areas">
            {boroughs.map((b) => (
              <li key={b} className={b === site.base ? "home" : undefined}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
