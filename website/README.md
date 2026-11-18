# Fair Trade 23 Limited: Website

Next.js website with Stripe payments for drawing packages, consultations and invoices.

## Pages

| Page | What it does |
|---|---|
| `/` | Home: services, drawings, before/after, process, areas covered |
| `/services` | All services in detail |
| `/planning-drawings` | Essential £5,000 / Standard £8,000 / Premium £12,000, **buy online with Stripe** |
| `/consultation` | £250 site survey, **book & pay with Stripe** (deducted if they go ahead) |
| `/pay` | Clients pay any invoice by entering invoice number + amount (**Stripe**) |
| `/projects` | Before/after sliders and drawings |
| `/quote`, `/contact` | Quote form, emailed to you |

A WhatsApp button floats on every page.

## Changing content

Almost everything (phone, email, prices, package contents, services, boroughs) is in
**`src/lib/site.ts`**. Edit it and redeploy.

To use real photos: add them to `public/projects/` and swap the illustrations in
`src/app/projects/page.tsx` for `<img src="/projects/photo.jpg" alt="..." />`.

## Go live on Vercel (about 15 minutes)

1. Sign up at vercel.com with GitHub. Click **Add New → Project**, pick this repo and set
   **Root Directory** to `website`. Deploy.
2. **Stripe:** at dashboard.stripe.com → Developers → API keys, copy the **Secret key**.
   In Vercel → Settings → Environment Variables, add `STRIPE_SECRET_KEY`.
   Use `sk_test_...` first and pay with card `4242 4242 4242 4242`; switch to `sk_live_...` when ready.
3. **Payment emails:** in Stripe → Developers → Webhooks → Add endpoint, enter
   `https://YOURDOMAIN/api/stripe-webhook` and choose the event `checkout.session.completed`.
   Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.
4. **Quote form email:** create a Gmail App Password (Google Account → Security →
   2-Step Verification → App passwords). Then add `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`,
   `SMTP_USER=your gmail`, `SMTP_PASS=app password`.
5. Add `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.co.uk`, then **Redeploy**.
6. **Your domain:** in Vercel → Settings → Domains, add your domain and copy the DNS records
   it shows into your domain provider (GoDaddy, 123-reg, etc.).

Optional: in Stripe → Settings → Payment methods, turn on **Apple Pay, Google Pay** and
**Pay by Bank**. Bank payments have much lower fees on £5k–£12k payments.

## Run locally

```bash
cd website
cp .env.example .env.local   # fill in values
npm install
npm run dev                  # http://localhost:3000
```
