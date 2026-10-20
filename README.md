# ValXperts

Validation, GxP testing, and the digital stack behind both. For life sciences manufacturers.

Single-page static site: Ubuntu typography, aurora hero, hash-routed screens (`/#home`, `/#services`, `/#industries`, `/#approach`, `/#why`, `/#about`, `/#careers`, `/#contact`), portal dropdown, modal system for compliance pages, custom inline SVGs throughout. No build step, no node_modules, no framework. Open `index.html` in a browser and it works.

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (Vercel will detect it as a static site).
4. Click Deploy. First deploy takes about 20 seconds.

Attach your custom domain under Project → Settings → Domains once Vercel is live.

## Local preview

Any static server works. Pick one:

    # Python
    python3 -m http.server 8000

    # Node
    npx serve .

Then open http://localhost:8000.

## Edit the site

Everything lives in `index.html`. Structure:

- Head: meta, OG tags, favicon (inline SVG data URI), Google Fonts (Ubuntu).
- Inline `<style>`: tokens on `:root`, aurora + hero pod, nav, sections, cards, modals, dropdown. One file, no preprocessor.
- `<body>`: nav, routed `<section class="screen">` blocks, footer, modal overlay, inline `<script>` with router + reveal + stats count-up + dropdown + modal logic.

To change copy, open `index.html` and search. Every destination that will swap once Zoho is live is in one of three spots:

| Placeholder | Live destination |
| --- | --- |
| `https://support.valxperts.zohodesk.com` | Zoho Desk subdomain (customer login, help & support) |
| `https://projects.zoho.in/portal/valxperts` | Zoho Projects client portal |
| `https://recruit.zoho.in/recruit/Portal.na?digest=valxperts` | Zoho Recruit apply URLs on each role card |
| `https://www.linkedin.com/company/valxperts` | LinkedIn company page |
| `contact@valxperts.com` | Inbox |

Find-and-replace once per subdomain when the real URLs land.

## Zoho CRM webform (contact page)

A comment block sits directly above `<form class="contact-form">` with the exact swap steps:

1. In Zoho CRM, Setup → Developer Space → Webforms, create the form.
2. Zoho generates a form action URL plus hidden fields (`xnQsjsdp`, `xmIwtLD`, `actionType`, `returnURL`).
3. Replace the `<form>` opening tag with Zoho's generated version.
4. Paste Zoho's hidden fields right after the opening tag.
5. Keep input ids (`cname`, `cemail`, `corg`, `ctopic`, `cmsg`); set each `name=` to Zoho's prescribed field names.
6. Remove the client-side `onsubmit="return handleContact(event)"` and the `<p id="formMsg">` element; use Zoho's `returnURL` for the thanks page.

## Push to a new GitHub repo

    # 1. Create an empty repo on github.com (no README, no .gitignore, no license).
    #    Suppose the URL is https://github.com/your-org/valxperts.git

    # 2. In this folder:
    git remote add origin https://github.com/your-org/valxperts.git
    git branch -M main
    git push -u origin main

The repo already has one initial commit from the handover; after push, your main is populated.

## Future: port to Next.js

When componentisation becomes worth it (shared Nav/Footer across new MDX blog pages, SSR for OG previews, etc.), the natural path is Next.js 14 App Router with each `#screen` becoming a route. The current CSS tokens map one-to-one to Tailwind config if you prefer that; otherwise the inline `<style>` becomes `app/globals.css`. Say the word and I will do the port.
