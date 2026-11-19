# Fair Trade Design Studio: Website

Website for **Fair Trade 23 Limited t/a Fair Trade Design Studio**, a remote, digital-only
architectural CAD drawing studio. Built with Next.js and deployed on Vercel.

## Before going live: fill these in `src/lib/site.ts`
- `companyNumber`: Companies House number
- `registeredOffice`: registered office address
- `vatNumber`: VAT number, or `""` if not VAT registered (then also review the "+ VAT" pricing)
- `supportEmail`: e.g. support@yourdomain.co.uk once you have a domain

Prices, package contents, FAQs and the legal pages' "last updated" date are in the same file.

## Languages
English (default, no URL prefix), German `/de`, French `/fr`, Spanish `/es`, Italian `/it`.
All wording, including legal pages, is in `src/i18n/dictionaries/<lang>.ts`. Company details and prices
are shared in `src/lib/site.ts`. Each page sets `<html lang>` and hreflang alternates automatically.
Never add the protected titles "architect" / "Architekt" / "architecte" / "arquitecto" / "architetto".

## Pages
`/` home · `/packages` · `/how-it-works` · `/sample-deliverables` · `/faq` · `/contact`
`/intake` (customers upload measurements after ordering) · `/pay` (pay an invoice, any amount, via Stripe)
`/terms` · `/refund-policy` · `/privacy-policy` · `/cookie-policy` · `/legal-notice` (Impressum & international terms)

## Payments
- **Stripe** (default): set `STRIPE_SECRET_KEY`. Checkout adds a 20% VAT line and records the
  customer's consent to the terms and the early-start request (Consumer Contracts Regulations).
- **Dodo Payments or any hosted payment link:** create one product per pack, then set
  `PAYMENT_LINK_ESSENTIAL`, `PAYMENT_LINK_STANDARD` and `PAYMENT_LINK_PREMIUM` to the checkout URLs.
  The "Order" buttons will send customers there instead of Stripe. The consent checkboxes still apply.

## Email (contact & intake forms)
Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS` (Gmail: smtp.gmail.com, 465, an App Password).
Uploads are capped at 4 MB per submission (Vercel limit); customers can paste a WeTransfer or Drive link for bigger files.

## Cookies
No analytics or marketing cookies are used. To add Google Analytics, set `NEXT_PUBLIC_GA_ID`;
it loads only after a visitor clicks "Accept All".

## Run locally
```bash
cd website && cp .env.example .env.local && npm install && npm run dev
```
