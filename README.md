# The Future of Planning

The publication and professional platform of **Jenna Smith** — essays, research and speaking on where financial planning is headed, written from the beginning of a career rather than the end of one.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and MDX.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

Other commands:

```bash
npm run build       # production build
npm start           # serve the production build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```

Node 18.17 or newer is required.

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Required | What it does |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical URLs, sitemap, RSS, OG images. No trailing slash. |
| `NEXT_PUBLIC_CALENDLY_URL` | Yes | The booking link embedded on `/schedule`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Yes | Address shown on `/contact` and used by the contact form. |
| `BUTTONDOWN_API_KEY` | No | Newsletter provider key. Without it, `/api/subscribe` returns a clear "not connected" message instead of silently dropping signups. |

Everything prefixed `NEXT_PUBLIC_` is visible in the browser. The Buttondown key is server-only.

---

## Publishing an article

1. Copy `content/articles/_template.mdx` to `content/articles/your-slug.mdx`. The filename becomes the URL: `/articles/your-slug`.
2. Fill in the frontmatter.
3. Write. Save. The page rebuilds automatically in dev.

```yaml
---
title: 'The handoff nobody scheduled'
description: 'One or two sentences stating the argument.'
date: '2026-07-14'          # YYYY-MM-DD
category: 'Profession'      # must match a topic in src/lib/content/topics.ts
tags: ['succession', 'talent']
featured: true              # promotes to the hero card — only one at a time
draft: false                # true = visible locally, hidden in production
---
```

Everything else is derived automatically: reading time, the table of contents (from `##` and `###` headings), related articles, the RSS entry, the sitemap entry and the Open Graph image.

Files beginning with `_` are never loaded, so the template can live beside real articles.

### Components available inside MDX

| Component | Use it for |
| --- | --- |
| `<PullQuote>` | One lifted line. Once per piece at most. |
| `<Note label="A caveat">` | An aside that would otherwise interrupt the argument. |
| `<Figure src="" alt="" caption="" />` | An image with a caption. |

Standard markdown works throughout, plus GitHub-flavoured tables and footnotes.

---

## Editing content that is not an article

No page copy is buried in JSX. Everything lives in typed modules:

| File | Controls |
| --- | --- |
| `src/lib/site.ts` | Site name, tagline, navigation, social links, author details |
| `src/lib/content/profile.ts` | Mission, bio, experience timeline, credentials |
| `src/lib/content/topics.ts` | The four featured topics on the homepage |
| `src/lib/content/speaking.ts` | Session descriptions, appearances, logistics |
| `src/lib/content/leadership.ts` | Roles and contributions |
| `src/lib/content/projects.ts` | Project cards |
| `src/lib/content/resources.ts` | The resource lists |

Adding a nav item, a speaking topic or a role is a one-line change in the relevant file.

**Before launch:** the placeholder values in `src/lib/site.ts` (LinkedIn and X handles) and the session title on the Insider's Forum entry in `speaking.ts` both need real values.

---

## Design system

The visual identity is built on one idea: financial planning's central instrument is the **long horizon**, and this publication is written from the start of one.

**The horizon.** A hairline time axis with tick marks is the site's structural spine. It appears three ways — as a literal fifty-year axis in the homepage hero, as the divider that opens every section, and as the reading-progress bar on articles. It marks position; it never decorates.

**Colour.** Tokens are defined once in `src/app/globals.css` as RGB triplets and consumed through Tailwind, so light and dark themes swap without duplicating the scale.

| Token | Light | Role |
| --- | --- | --- |
| `paper` | `#F2F5F4` | Page ground — a cool drafting-paper neutral |
| `surface` | `#FFFFFF` | Cards and panels |
| `ink` | `#0E1A1C` | Primary text |
| `graphite` | `#5A6A6B` | Secondary text |
| `rule` | `#D9E0DE` | Hairlines and borders |
| `horizon` | `#0F6E63` | The single accent — interaction and the "now" marker |

**Type.** Newsreader (editorial serif) for display and article body; Instrument Sans for interface text; IBM Plex Mono for ledger-style metadata — dates render as `2026.07.14 / 4 min / Profession`.

**Motion.** One orchestrated page-load sequence in the hero; everything else is an eight-pixel scroll reveal and hover micro-interactions. All of it is neutralised by `prefers-reduced-motion`.

To change the palette, edit the `:root` and `.dark` blocks in `globals.css` — nothing else needs touching.

---

## Structure

```
content/articles/        MDX articles (+ _template.mdx)
src/app/                 Routes, layout, API, feed, sitemap, robots, OG image
src/components/
  articles/              Cards, browser, table of contents, progress, share
  home/                  Homepage sections
  mdx/                   MDX renderer and custom components
  site/                  Header, footer, theme toggle
  ui/                    Container, Button, Section, Reveal
src/lib/
  articles.ts            Article loading, reading time, TOC, related posts
  site.ts                Site configuration
  content/               Page content modules
  utils.ts               Class merging, date formatting
```

---

## What is wired up

**Article system** — featured piece, categories, client-side search, reading time, sticky table of contents with scroll spy, related articles by shared category and tags, share links, RSS.

**SEO** — per-page metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD (`Person` sitewide, `BlogPosting` per article), `sitemap.xml`, `robots.txt`, and a dynamic OG image at `/og` that renders the horizon motif with the article title.

**Scheduling** — Calendly loads only when the embed scrolls into view, so `/schedule` still paints fast. If the script is blocked or fails, a direct booking link takes over.

**Newsletter** — the form posts to `/api/subscribe`. Buttondown is wired by default; swapping in ConvertKit, Beehiiv or Mailchimp means changing one `fetch` in `src/app/api/subscribe/route.ts` and nothing else.

**Contact** — composes a prefilled message in the visitor's own mail client. No server, no queue, no form that silently fails.

**Accessibility** — skip link, semantic landmarks, visible focus rings, labelled controls, `aria-live` on async status, keyboard-navigable mobile menu, reduced-motion support.

**Performance** — no animation library, no icon library, no image dependencies. Fonts are self-hosted by `next/font` with `display: swap`. Articles are statically generated at build time.

---

## Deploying

**Vercel** is the shortest path: import the repository, add the environment variables, deploy. The dynamic OG route runs on the edge runtime.

Any Node host works too — `npm run build && npm start` behind a reverse proxy. If your host does not support edge functions, remove `export const runtime = 'edge'` from `src/app/og/route.tsx`.

After the first deploy, submit `https://your-domain.com/sitemap.xml` to Google Search Console.

---

## Extending it

The codebase is structured for a publication that grows for years:

- **A new page** — add a folder under `src/app/`, reuse `PageHeader` and `Section`, add the route to `src/lib/site.ts` nav and `src/app/sitemap.ts`.
- **A new topic or category** — add it to `src/lib/content/topics.ts`, then use that exact string in article frontmatter.
- **Series or issue numbering** — add a field to the frontmatter type in `src/lib/articles.ts`; it flows through the card, index and feed.
- **Full-text search** — the current search covers titles, descriptions, categories and tags client-side, which is right for a few dozen articles. Past roughly two hundred, move to a prebuilt index or a hosted search service.

---

## Troubleshooting

**Fonts fail during `npm install` or `next build`** — `next/font` downloads Google Fonts at build time and needs network access. On an offline machine, swap the `next/font/google` imports in `src/app/layout.tsx` for `next/font/local` and add the font files to `public/`.

**A dependency has no TypeScript declarations** — add `declare module 'package-name'` to a new `src/types/vendor.d.ts`.

**Calendly does not appear** — check `NEXT_PUBLIC_CALENDLY_URL`, then check whether a content blocker is stopping `assets.calendly.com`. The fallback link works either way.

**Newsletter returns "not connected"** — that is the expected response until `BUTTONDOWN_API_KEY` is set. It is deliberate: signups are never accepted and discarded.

---

## Content note

The five articles in `content/articles/` were written as launch material in the site's voice. They are argument-driven and contain no cited statistics, so nothing needs fact-checking before publishing — but they are drafts to edit, replace or delete as you see fit.
