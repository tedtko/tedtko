import type { Metadata } from "next";
import Link from "next/link";
import { formatGBP, packages, setupFee, site } from "@/lib/site";
import { PageHero } from "@/components/Sections";

export const metadata: Metadata = { title: "Terms & Conditions", description: `Terms & Conditions for ${site.tradingName} remote CAD drawing services.` };

import { LAST_UPDATED } from "@/lib/site";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: {LAST_UPDATED}</p>

          <h2>1. About us</h2>
          <p>
            These terms apply to all orders placed with <strong>{site.legalName}</strong>, trading as{" "}
            <strong>{site.tradingName}</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), a company registered in England &amp; Wales
            under company number {site.companyNumber}, with its registered office at {site.registeredOffice}
            {site.vatNumber ? `, VAT number ${site.vatNumber}` : ""}. You can contact us at{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or {site.phoneDisplay}.
          </p>

          <h2>2. Our services</h2>
          <p>
            We provide <strong>bespoke digital CAD drafting and architectural drawing production</strong>. We prepare 2D
            and 3D architectural drawings, planning drawing sets, building regulations drawing packs and related technical
            documents, based entirely on dimensions, sketches, photos and information you supply.
          </p>
          <ul>
            <li>Our services are delivered <strong>100% remotely</strong>. We do not visit your property and do not carry out measured site surveys.</li>
            <li>We supply digital files only (PDF, DWG, image files and, where stated, DOCX). We do not supply physical goods.</li>
            <li>We do not carry out, manage or supervise any physical building, construction or renovation work.</li>
            <li>
              We are an architectural CAD design and drafting studio providing CAD drafting services. We are{" "}
              <strong>not registered with the ARB</strong>, and we do not use any professional title protected by UK
              law.
            </li>
            <li>
              Unless agreed in writing, we do not act as Principal Designer under the Construction (Design and Management)
              Regulations 2015 or the Building Regulations, and we do not provide structural engineering services.
            </li>
          </ul>

          <h2>3. Ordering</h2>
          <p>
            You place an order by choosing a package, agreeing to these terms and paying online. Your contract with us is
            formed when we email you to confirm your order. If we can&apos;t accept your order (for example, because the
            project falls outside what we can draft remotely), we&apos;ll tell you and refund you in full.
          </p>

          <h2>4. Prices &amp; payment</h2>
          <ul>
            <li>
              Package prices are fixed fees shown <strong>excluding VAT</strong>. VAT at the current UK rate (20%) is added
              where applicable and shown at checkout. Current prices:{" "}
              {packages.map((p) => `${p.name} ${formatGBP(p.price)}`).join(", ")} (+ VAT).
            </li>
            <li>
              Payment is normally taken in full when you order. On request, we may agree stage payments of a 50% booking
              deposit and 50% before release of your final CAD/DWG files.
            </li>
            <li>We release final unwatermarked files only once full payment has cleared.</li>
          </ul>

          <h2>5. Your information &amp; measurement responsibility</h2>
          <p>
            Because our services are entirely remote and we make no physical site visits, <strong>you are solely
            responsible for the accuracy and completeness of all measurements, boundary lines, levels, property photos and
            other information you submit</strong>. We draft to the information you give us. We&apos;ll point out obvious
            inconsistencies we notice, but we are not responsible for errors, omissions or consequences (including
            refusals, rework or building costs) that result from inaccurate or incomplete information supplied by you.
            You should check all dimensions on site before relying on the drawings for any building work or for ordering
            materials.
          </p>
          <p>
            You confirm you have the right to send us any plans, photos or documents you upload, including any created by
            third parties.
          </p>

          <h2>6. Scope, revisions &amp; exclusions</h2>
          <h3>Revisions</h3>
          <ul>
            {packages.map((p) => (<li key={p.id}><strong>{p.name}:</strong> {p.revisions}.</li>))}
          </ul>
          <p>
            A revision round is one consolidated set of amendments to the drawings already produced, within the original
            scope of the project. New designs, changes to the overall scheme, or revisions requested after the revision
            window has closed are outside scope, and we&apos;ll quote for them separately before doing any work.
          </p>
          <h3>Not included unless expressly stated in your package</h3>
          <ul>
            <li>Structural engineering calculations or designs</li>
            <li>Statutory council fees, including planning application and building control fees</li>
            <li>Submitting applications on your behalf, or acting as your agent with the council</li>
            <li>Measured or topographical surveys, site visits or inspections</li>
            <li>Party wall surveyor services</li>
            <li>Any physical building, construction or renovation work</li>
          </ul>

          <h2>7. Timelines</h2>
          <p>
            Delivery timelines for each package are stated in business days and start once we have received complete
            measurements and information from you. They are our good-faith estimates. If we need more information, the
            timeline pauses until we receive it. If you asked us not to start during the 14-day cancellation period, the
            timeline starts after that period ends.
          </p>

          <h2>8. Approvals</h2>
          <p>
            Our drawings are prepared with the aim of meeting the relevant planning requirements and UK Building
            Regulations. Decisions on planning permission and building control approval are made by the local authority or
            an approved inspector, and <strong>we cannot guarantee any application will be approved</strong>. If a planning
            officer or building control body requests amendments within the scope of your package, these count towards your
            included revision rounds.
          </p>

          <h2>9. Intellectual property</h2>
          <p>
            Full copyright in the final CAD/PDF drawings we produce for you <strong>transfers to you on receipt of full,
            cleared payment</strong>. Until then, the drawings remain our property and must not be used or submitted.
            Our standard templates, title blocks and generic construction details remain ours, but you have a permanent
            licence to use them as part of your drawings. We&apos;ll only show your project in our portfolio with your
            permission.
          </p>

          <h2>10. Cancellation &amp; refunds</h2>
          <p>
            Your cancellation rights, and the amounts we refund at each stage, are set out in our{" "}
            <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, which forms part of these terms. In
            summary: full refund before drafting begins; refund less a {formatGBP(setupFee)} set-up charge after your intake
            has been reviewed but before the first draft; and normally no refund once the first draft set has been
            delivered.
          </p>

          <h2>11. Our liability</h2>
          <ul>
            <li>
              Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud,
              or for anything else that cannot be limited by law.
            </li>
            <li>
              If you are a consumer, we must provide our services with reasonable care and skill, and you have legal rights
              under the Consumer Rights Act 2015. Nothing in these terms affects those rights.
            </li>
            <li>
              We are not responsible for losses caused by inaccurate information you supply, by your failure to check
              dimensions, by decisions of the planning or building control authority, or by building work carried out by
              others.
            </li>
            <li>
              If you are a business customer, our total liability to you is limited to the fees you paid for the relevant
              package, and we are not liable for indirect or consequential loss or loss of profit.
            </li>
          </ul>

          <h2>12. Complaints</h2>
          <p>
            If you&apos;re unhappy with our service, email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
            We&apos;ll reply within {site.responseTime} and work with you to put things right. Please contact us before
            raising a dispute with your bank or card provider. This does not affect your legal rights.
          </p>

          <h2>13. Data protection</h2>
          <p>We use your personal data as described in our <Link href="/privacy-policy">Privacy Policy</Link>.</p>

          <h2>14. General</h2>
          <ul>
            <li>We may update these terms. The version on the website when you place your order applies to that order.</li>
            <li>If any part of these terms is found to be unenforceable, the rest remains in effect.</li>
            <li>
              These terms are governed by the law of <strong>England and Wales</strong>, and the courts of England and Wales
              have jurisdiction. If you are a consumer living in Scotland or Northern Ireland, you may also bring proceedings
              in your local courts.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
