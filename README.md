# ProcessPilot AI — Landing Website

Premium single-page landing site for ProcessPilot AI, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Run local dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Editing brand details

**All firm name, contact, copy, and configuration lives in one file:**

```
src/config/siteConfig.ts
```

Open that file and update:

| Field | Where |
|-------|-------|
| Firm name | `firm.name` |
| Tagline | `firm.tagline` |
| Email | `contact.email` |
| Phone | `contact.phone` |
| WhatsApp number | `contact.whatsapp` + `contact.whatsappUrl` |
| LinkedIn URL | `contact.linkedin` |
| CTA button text | `cta.primary` |
| Services list | `services[]` |
| FAQs | `faqs[]` |
| Before/After examples | `beforeAfter[]` |
| Deliverables | `deliverables[]` |
| Footer text | `footer.*` |

No other file needs editing for content changes.

---

## Connecting the contact form

The form currently simulates submission with a 1.2s delay. To make it live:

Open `src/components/Contact.tsx` and find the `handleSubmit` function.
Replace the `await new Promise(...)` line with your preferred integration:

**Option A — Formspree (recommended for quick launch):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy the form ID
3. Replace the placeholder with:
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Submission failed");
```

**Option B — Resend (via Next.js API route):**
1. `npm install resend`
2. Create `src/app/api/contact/route.ts`
3. POST to `/api/contact` from the form

**Option C — EmailJS (frontend-only):**
1. `npm install @emailjs/browser`
2. Follow [emailjs.com](https://www.emailjs.com) setup

**Option D — HubSpot / custom backend:**
See TODO comments in `src/components/Contact.tsx` for the exact endpoint pattern.

---

## Adding analytics

Open `src/app/layout.tsx` and find the `<!-- Analytics placeholders -->` block.

All three providers (Google Analytics, Meta Pixel, LinkedIn Insight Tag) are documented there with the exact code to uncomment and the IDs to replace.

---

## Deploying to Vercel (free)

### One-click deploy

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New → Project**
4. Select your repository
5. Leave all settings as default — Vercel auto-detects Next.js
6. Click **Deploy**

Your site will be live at `https://your-project.vercel.app` within ~2 minutes.

### Custom domain

In the Vercel project settings, go to **Domains** and add your domain (e.g. `processpilot.ai`). Follow the DNS instructions.

### Environment variables

If you add a backend API route for the contact form, add environment variables in Vercel's project settings under **Settings → Environment Variables**.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, SEO metadata, analytics placeholders
│   ├── page.tsx            ← Page assembly (imports all sections)
│   └── globals.css         ← Global styles, CSS variables, Tailwind directives
│
├── components/
│   ├── Navbar.tsx              ← Sticky nav with scroll-blur effect
│   ├── Hero.tsx                ← Full-viewport hero section
│   ├── ProblemSection.tsx      ← 8 problem cards
│   ├── WhatWeDo.tsx            ← 4-step approach cards
│   ├── HowItWorks.tsx          ← 5-step alternating timeline
│   ├── Deliverables.tsx        ← 10 deliverable preview cards
│   ├── BeforeAfter.tsx         ← 4 split comparison cards
│   ├── Services.tsx            ← 8 service cards + 3 tier options
│   ├── Credibility.tsx         ← Group credibility statement + 4 pillars
│   ├── CaseStudies.tsx         ← Placeholder coming-soon cards
│   ├── FAQ.tsx                 ← Animated accordion (6 FAQs)
│   ├── Contact.tsx             ← Contact form + contact details
│   ├── Footer.tsx              ← Footer with links and legal
│   ├── AnimatedGradientBackground.tsx   ← Fixed gradient orbs
│   ├── FloatingWorkflowVisual.tsx       ← Hero animated cards
│   ├── CTAButton.tsx           ← Reusable button (primary/secondary/ghost)
│   └── SectionHeader.tsx       ← Reusable section heading component
│
├── config/
│   └── siteConfig.ts       ← SINGLE SOURCE OF TRUTH for all content
│
└── lib/
    └── utils.ts            ← Shared animation variants, cn() helper
```

---

## OG image

Add a `1200 × 630px` image at `public/og-image.jpg` before launch.
Update the path in `siteConfig.seo.ogImage` if needed.

---

## Favicon

A vector SVG favicon is included at `public/favicon.svg`.
To use it as a `.ico`, convert at [favicon.io](https://favicon.io/favicon-converter/) and replace `public/favicon.ico`.

Update `src/app/layout.tsx` → `metadata.icons` if you change the filename.

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | React framework, App Router |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion 11](https://framer.com/motion) | Animations |
| [Lucide React](https://lucide.dev) | SVG icon set |
