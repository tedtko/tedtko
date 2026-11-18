import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/Sections";
import { LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: `How ${site.tradingName} collects and uses your personal data.` };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: {LAST_UPDATED}</p>

          <h2>1. Who we are</h2>
          <p>
            <strong>{site.legalName}</strong> (trading as {site.tradingName}), company number {site.companyNumber},
            registered office {site.registeredOffice}, is the <strong>data controller</strong> for the personal data
            described in this policy. Contact us about privacy at{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>
          <p>
            This policy explains how we handle your data under the UK General Data Protection Regulation (UK GDPR), the Data
            Protection Act 2018 and the Data (Use and Access) Act 2025.
          </p>

          <h2>2. What we collect</h2>
          <ul>
            <li><strong>Contact details:</strong> name, email address, phone number.</li>
            <li><strong>Project details:</strong> the property address, your brief, and the measurements, sketches, floor plans, photos and documents you upload.</li>
            <li>
              <strong>Order &amp; billing details:</strong> what you bought, amounts paid, billing address, and a record of the
              terms and cancellation choices you agreed to. Card details are handled by our payment processor. We never see
              or store your full card number.
            </li>
            <li><strong>Communications:</strong> emails, form messages and WhatsApp messages you send us.</li>
            <li><strong>Technical data:</strong> basic server logs (such as IP address and browser type) kept by our hosting provider for security, and your cookie choices.</li>
          </ul>
          <p>
            Photos of your property may show people, vehicles or neighbouring properties. Please avoid including people
            where possible.
          </p>

          <h2>3. Why we use it, and our lawful bases</h2>
          <table>
            <thead><tr><th scope="col">Purpose</th><th scope="col">Lawful basis</th></tr></thead>
            <tbody>
              <tr><td>Taking your order, producing and delivering your drawings, handling revisions and refunds</td><td>Contractual necessity</td></tr>
              <tr><td>Keeping accounting and tax records for HMRC</td><td>Legal obligation</td></tr>
              <tr><td>Answering enquiries before you order</td><td>Steps at your request before entering a contract / legitimate interests</td></tr>
              <tr><td>Preventing fraud, keeping our website secure, and handling disputes or legal claims</td><td>Legitimate interests</td></tr>
              <tr><td>Optional analytics cookies (only if you accept them)</td><td>Consent, which you can withdraw at any time</td></tr>
            </tbody>
          </table>
          <p>We don&apos;t sell your data, use it for marketing without your consent, or make decisions about you by automated means.</p>

          <h2>4. Who we share it with</h2>
          <p>We use trusted service providers (processors) who handle data only on our instructions:</p>
          <ul>
            <li><strong>Payment processors</strong>: Stripe and/or Dodo Payments, to take payments and prevent fraud.</li>
            <li><strong>Website hosting</strong>: Vercel, which hosts this website.</li>
            <li><strong>Email hosting</strong>: Google (Gmail / Google Workspace), for email and form submissions.</li>
            <li><strong>Cloud file storage</strong>: for storing project files and delivering drawings (e.g. Google Drive), and any file-transfer service you choose to use.</li>
            <li><strong>WhatsApp (Meta)</strong>: only if you choose to message us there.</li>
            <li><strong>Our accountants</strong> and professional advisers, and HMRC or other authorities where the law requires.</li>
          </ul>
          <p>
            Some of these providers process data outside the UK (for example in the USA). Where they do, the transfer is
            protected by UK adequacy regulations (such as the UK–US data bridge) or the UK International Data Transfer
            Agreement or Addendum.
          </p>

          <h2>5. How long we keep it</h2>
          <ul>
            <li>Order, invoice and payment records: <strong>6 years</strong> after the end of the financial year they relate to (HMRC requirement).</li>
            <li>Project files and drawings: <strong>6 years</strong> after completion, in case of queries or claims.</li>
            <li>Enquiries that don&apos;t lead to an order: <strong>12 months</strong>.</li>
            <li>Cookie choices: until you change them or clear your browser storage.</li>
          </ul>

          <h2>6. Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li><strong>Access</strong>: get a copy of the personal data we hold about you</li>
            <li><strong>Rectification</strong>: have inaccurate data corrected</li>
            <li><strong>Erasure</strong>: have your data deleted where there is no reason for us to keep it</li>
            <li><strong>Restriction</strong>: ask us to limit how we use your data</li>
            <li><strong>Portability</strong>: receive data you gave us in a machine-readable format</li>
            <li><strong>Objection</strong>: object to our use of your data based on legitimate interests</li>
            <li><strong>Withdraw consent</strong> at any time, for example using <em>Cookie Settings</em> in the footer</li>
          </ul>
          <p>
            To use any of these rights, email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We&apos;ll
            respond within <strong>one month</strong>. This can be extended by up to two further months for complex
            requests, and if so we&apos;ll tell you why.
          </p>

          <h2>7. Complaints</h2>
          <p>
            If you&apos;re unhappy with how we&apos;ve handled your data, please complain to us first at{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We&apos;ll acknowledge your complaint within{" "}
            <strong>30 days</strong> (we aim for {site.responseTime}), look into it promptly, and tell you the outcome
            without undue delay.
          </p>
          <p>
            You also have the right to complain to the <strong>Information Commissioner&apos;s Office (ICO)</strong>, the UK
            data protection regulator: <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a> or 0303 123 1113.
          </p>

          <h2>8. Security</h2>
          <p>
            We use encrypted connections (HTTPS), reputable providers, and access controls to protect your data. No system
            is completely secure, so please don&apos;t send unnecessary sensitive information.
          </p>

          <h2>9. Cookies</h2>
          <p>See our <Link href="/cookie-policy">Cookie Policy</Link>.</p>

          <h2>10. Changes</h2>
          <p>We may update this policy. The latest version will always be on this page, with the date it was last updated.</p>
        </div>
      </section>
    </>
  );
}
