# ValXperts

Validation, GxP testing, and the digital stack behind both. For life sciences manufacturers.

Built with Next.js 14 (App Router) + TypeScript. Eight routes: home, services, industries, approach, why us, about, careers, contact. Light-first design with a dark aurora hero on the home screen, Ubuntu typography, custom inline SVGs throughout.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or import this repo at [vercel.com/new](https://vercel.com/new). Framework preset: **Next.js** (auto-detected). First deploy takes about 60 seconds. Attach your custom domain under Project → Settings → Domains.

## Project layout

```
app/
├── layout.tsx            — root layout: metadata, Ubuntu font, Nav/Footer/Modal provider
├── globals.css           — tokens + aurora + nav + sections + cards + modals (plain CSS, no preprocessor)
├── page.tsx              — home
├── services/page.tsx
├── industries/page.tsx
├── approach/page.tsx
├── why/page.tsx
├── about/page.tsx
├── careers/page.tsx
└── contact/page.tsx

components/
├── Nav.tsx               — client: Portals dropdown, mobile toggle, active-route underline
├── Footer.tsx            — client: dynamic year + modal triggers for compliance links
├── Modal.tsx             — client: compliance + email modals, Esc/outside-click close, copy-to-clipboard
├── HeroPod.tsx           — dark pod with contained aurora (home only)
├── Aurora.tsx            — three-blob emerald/cobalt/teal radial gradients, mix-blend-mode: screen
├── ClosingCta.tsx        — reusable dark-navy closing band
├── Eyebrow.tsx           — the small uppercase label used across section heads
├── Logo.tsx              — ValXperts wordmark with gradient X
├── ContactForm.tsx       — client: form state + Zoho CRM webform stub
├── StatsRow.tsx          — client: count-up stats via IntersectionObserver
├── HeroWords.tsx         — client: word-stagger entry animation
└── Reveal.tsx            — client: scroll-reveal wrapper via IntersectionObserver
```

## Swap Zoho endpoints in one pass

| Placeholder | Live destination |
| --- | --- |
| `https://support.valxperts.zohodesk.com` | Zoho Desk subdomain (Customer login, Help & support) |
| `https://projects.zoho.in/portal/valxperts` | Zoho Projects client portal |
| `https://recruit.zoho.in/recruit/Portal.na?digest=valxperts` | Zoho Recruit career apply URLs |
| `https://www.linkedin.com/company/valxperts` | LinkedIn company page |
| `contact@valxperts.com` | Inbox |

Find-and-replace once per subdomain when the real URLs land.

## Zoho CRM webform wiring

`components/ContactForm.tsx` has a comment block with the exact swap steps:

1. In Zoho CRM, Setup → Developer Space → Webforms, create the form.
2. Zoho generates a form action URL plus hidden fields (`xnQsjsdp`, `xmIwtLD`, `actionType`, `returnURL`).
3. Replace the `<form>` opening tag with Zoho's generated version.
4. Paste Zoho's hidden fields right after the opening tag.
5. Keep input ids (`cname`, `cemail`, `corg`, `ctopic`, `cmsg`); set each `name=` to Zoho's prescribed field names.
6. Remove the client-side `onSubmit` and the status `<p>`; use Zoho's `returnURL` for the thanks page.
