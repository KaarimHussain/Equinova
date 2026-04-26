# Equinova

**The Intelligent Business Platform for Professional Equestrian Facilities**

A marketing landing page built with Next.js 16, Tailwind CSS v4, Shadcn/UI, and Framer Motion. Designed to convert visitors into waitlist signups for Equinova — an AI-powered horse facility management SaaS.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 + CSS custom properties (OKLCH color system)
- **UI Components:** Shadcn/UI (New York style)
- **Animations:** Framer Motion + `react-intersection-observer`
- **Icons:** Lucide React
- **Fonts:** Inter + Roboto (via `next/font`)
- **Type:** TypeScript

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
equinova/
├── app/
│   ├── globals.css         # Tailwind + CSS token system (OKLCH)
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   └── page.tsx            # Home page — assembles all sections
├── components/
│   ├── base/               # Shared layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── banner.tsx
│   │   ├── faqs.tsx
│   │   ├── equinova-pricing.tsx
│   │   ├── join-the-waitlist.tsx
│   │   └── ready-to-join.tsx
│   ├── home/               # Page-specific sections (in render order)
│   │   ├── HomeWrapper.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── WhatYouAreDoingWrong.tsx
│   │   ├── ButYourStill.tsx
│   │   ├── EquinovaSolution.tsx
│   │   ├── TransformYourOperation.tsx
│   │   ├── ButThatsNotAll.tsx
│   │   ├── WhyEquinovaVsEverything.tsx
│   │   ├── CompetitorsTools.tsx
│   │   ├── JoinTheEquinova.tsx
│   │   ├── NotReadyToCommit.tsx
│   │   └── ReadyToJoin.tsx (via base/)
│   └── ui/                 # Shadcn primitives
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── separator.tsx
│       └── navigation-menu.tsx
├── public/
│   └── assets/             # Images, SVGs
└── lib/
    └── utils.ts            # cn() helper
```

---

## Build

```bash
npm run build
```

Output goes to `out/` (static export — configured in `next.config.ts`).

> **Note:** Images are unoptimized due to static export mode. If you switch to a Node.js server deployment, remove `output: "export"` and `images: { unoptimized: true }` from `next.config.ts` to get `next/image` optimization back.

---

## Theme

Colors use OKLCH via Tailwind v4's CSS variable system. Light mode is active by default — dark mode variables are defined in `.dark` class but not auto-applied (see the commented-out `prefers-color-scheme` block in `globals.css`).

Primary color: `oklch(0.5991 0.2429 359.9961)` — a deep red/crimson.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at localhost:3000 |
| `npm run build` | Static export build |
| `npm run lint` | ESLint (Next.js + TypeScript rules) |
