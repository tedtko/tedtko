import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/Sections";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { LAST_UPDATED } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy", description: `How ${site.tradingName} uses cookies and similar technologies.` };

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="section">
        <div className="container prose">
          <p className="updated">Last updated: {LAST_UPDATED}</p>
          <p>
            This policy explains how {site.legalName} (trading as {site.tradingName}) uses cookies and similar technologies,
            in line with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small files stored on your device by websites you visit. Similar technologies, such as your
            browser&apos;s local storage, work in a similar way. We call them all &quot;cookies&quot; here.
          </p>

          <h2>2. Cookies we use</h2>
          <table>
            <thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr></thead>
            <tbody>
              <tr>
                <td><code>ftds-cookie-consent</code> (local storage)</td>
                <td>Strictly necessary</td>
                <td>Remembers whether you accepted or rejected non-essential cookies</td>
                <td>Until you change it or clear storage</td>
              </tr>
              <tr>
                <td>Payment provider cookies (e.g. Stripe, Dodo Payments)</td>
                <td>Strictly necessary</td>
                <td>Set on the payment provider&apos;s secure checkout page for fraud prevention and to process your payment. Governed by the provider&apos;s own policy.</td>
                <td>Set by the provider</td>
              </tr>
              <tr>
                <td><code>_ga</code>, <code>_ga_*</code> (Google Analytics)</td>
                <td>Analytics (optional)</td>
                <td>Anonymous statistics on how visitors use the site. <strong>Only set if you click &quot;Accept All&quot; or enable analytics.</strong> We may not use analytics at all. If we don&apos;t, these are never set.</td>
                <td>Up to 2 years</td>
              </tr>
            </tbody>
          </table>
          <p>
            We don&apos;t use advertising or marketing cookies. Our fonts are hosted on our own website, so loading a page
            does not send your data to font providers.
          </p>

          <h2>3. Your choices</h2>
          <p>
            When you first visit, we ask for your choice using a banner with equally prominent <strong>Accept All</strong> and{" "}
            <strong>Reject Non-Essential</strong> buttons. Nothing optional is switched on in advance, and no analytics or
            marketing scripts load until you give consent. You can change your mind at any time:
          </p>
          <p><CookieSettingsButton /></p>
          <p>
            You can also block or delete cookies in your browser settings. Blocking strictly necessary cookies may stop
            checkout from working.
          </p>

          <h2>4. More information</h2>
          <p>
            See our <Link href="/privacy-policy">Privacy Policy</Link>, or contact{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
