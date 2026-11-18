import type { Metadata } from "next";
import Link from "next/link";
import { formatGBP, setupFee, site } from "@/lib/site";
import { PageHero } from "@/components/Sections";
import { LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Your 14-day cancellation rights and our refund tiers for bespoke digital drawing packs.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund & Cancellation Policy" />
      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: {LAST_UPDATED}</p>
          <p>
            This policy explains how you can cancel an order with {site.legalName} trading as {site.tradingName}, and how
            much we refund. It forms part of our <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>

          <h2>1. Your 14-day right to cancel (consumers)</h2>
          <p>
            If you are a consumer (buying for purposes mainly outside your trade or business), you have the right under the{" "}
            <strong>Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013</strong> to cancel
            your order within <strong>14 days</strong> of the day we confirm your order, without giving a reason.
          </p>

          <h2>2. Asking us to start during the cancellation period</h2>
          <p>
            Each drawing pack is a <strong>bespoke service, custom-drafted to your property&apos;s specific
            measurements</strong>. We won&apos;t begin drafting during the 14-day cancellation period unless you expressly ask
            us to.
          </p>
          <ul>
            <li>
              <strong>If you don&apos;t ask us to start early,</strong> we&apos;ll begin after the 14 days have passed, and you
              can cancel for a full refund at any time before then.
            </li>
            <li>
              <strong>If you ask us to start early</strong> (by ticking the box when you order, or by asking us in writing)
              and then cancel within the 14 days, you must pay for the work we have already done up to the point you tell us
              you are cancelling. This is set out in the refund tiers below.
            </li>
            <li>
              <strong>You lose your right to cancel once the service has been fully performed</strong>, which is when your
              final drawing files have been delivered, if this happens within the 14 days at your request.
            </li>
          </ul>

          <h2>3. Refund tiers</h2>
          <p>These tiers show how we work out the value of work done. They apply to all orders, whether you cancel within or after the 14-day period.</p>
          <table>
            <thead>
              <tr><th scope="col">When you cancel</th><th scope="col">What you get back</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Before you have submitted your measurements, and before CAD drafting has begun</td>
                <td><strong>100% full refund</strong></td>
              </tr>
              <tr>
                <td>After we have started reviewing your intake (measurements, photos and brief), but before your first draft PDFs are issued</td>
                <td><strong>Full refund less a {formatGBP(setupFee)} set-up charge</strong> (+ VAT where applicable), covering intake review, set-up and base drafting work</td>
              </tr>
              <tr>
                <td>After your first draft PDF set has been delivered to you</td>
                <td>
                  <strong>Normally non-refundable.</strong> By this point the bespoke drafting work is substantially complete.
                  If any substantial part of your package has not yet been carried out, we&apos;ll refund a fair amount for
                  that part.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Business customers do not have the statutory 14-day right to cancel, but may cancel at any time on the same
            refund tiers.
          </p>

          <h2>4. How to cancel</h2>
          <p>
            Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with your name, order reference and a
            clear statement that you wish to cancel. You may use the model form below, but you don&apos;t have to.
          </p>
          <div className="card" style={{ boxShadow: "none" }}>
            <p><strong>Model cancellation form</strong></p>
            <p>
              To: {site.legalName} t/a {site.tradingName}, {site.registeredOffice}, {site.supportEmail}
              <br />I hereby give notice that I cancel my contract for the supply of the following service: [package name]
              <br />Ordered on: [date] · Order reference: [reference]
              <br />Name: [your name] · Address: [your address]
              <br />Date: [date]
            </p>
          </div>

          <h2>5. Refunds</h2>
          <p>
            We&apos;ll refund any amount due within <strong>14 days</strong> of receiving your cancellation, using the same
            payment method you used to pay. We don&apos;t charge a fee for making the refund.
          </p>

          <h2>6. If we cancel</h2>
          <p>
            If we can&apos;t complete your drawings (for example, because the project can&apos;t be drafted accurately from
            remote information), we&apos;ll tell you why and refund you for any part of the service not yet provided.
          </p>

          <h2>7. Problems &amp; disputes</h2>
          <p>
            If you have a problem with your order, please contact us first at{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We guarantee a response within{" "}
            <strong>{site.responseTime}</strong>, and we&apos;ll work with you to resolve it. Please give us the chance to
            put things right before raising a payment dispute or chargeback with your bank. None of this affects your
            statutory rights, including your rights under the Consumer Rights Act 2015.
          </p>
        </div>
      </section>
    </>
  );
}
