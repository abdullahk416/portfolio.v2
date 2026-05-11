# CLAUDE.md — Project Rules for Abdullah Khan's Portfolio

This is a **Next.js 15 (App Router) + TypeScript + Tailwind CSS 3** portfolio site. Component patterns follow shadcn/ui conventions. Framer Motion is used for animations that need physics (logo marquee). The visual palette is **neutral dark** — near-black background with white/zinc text and rgba(255,255,255,*) hairlines. **No blue tint anywhere.**

---

## Stack

- **Framework**: Next.js 15.1 (App Router, RSC)
- **Language**: TypeScript 5.7 (strict mode)
- **Runtime**: React 19
- **Styling**: Tailwind CSS 3.4 + `tailwindcss-animate` plugin
- **UI primitives**: shadcn-style (`@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge`)
- **Animation**: `framer-motion` 11 (used in the logo marquee), CSS keyframes (used for hero word-reveals and `tailwindcss-animate`)
- **Fonts**: `geist` (sans + mono) via `next/font`, `Instrument Serif` italic via `next/font/google`
- **Icons**: `lucide-react`
- **Image optimisation**: `next/image` with `cdn.simpleicons.org` and `cdn.jsdelivr.net` allowlisted in `next.config.ts`

---

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          ← root layout, font setup, metadata
│   ├── page.tsx            ← composes all section components in order
│   ├── globals.css         ← shadcn CSS variables, keyframes, holographic CSS
│   └── icon.png            ← favicon (auto-detected by Next.js)
├── components/
│   ├── Nav.tsx             ← sticky nav (scrolls trigger blur backdrop)
│   ├── Hero.tsx            ← animated landing with grid bg, mouse gradient, click ripples
│   ├── LogoMarquee.tsx     ← uses LogoCloud for tech-stack icon row
│   ├── About.tsx           ← "Designed for clarity. Built for scale." + RadialOrbitalTimeline
│   ├── Experience.tsx      ← Norsco / Brand Love / Wouessi cards
│   ├── Projects.tsx        ← HealthCare / S&P Predictor / AI Therapist cards
│   ├── Stack.tsx           ← BentoGrid showing the full stack
│   ├── Feedback.tsx        ← Tara McIlroy testimonial
│   ├── CTA.tsx             ← "Let's build something" — Email + LinkedIn cards
│   ├── Footer.tsx          ← copyright + LinkedIn/GitHub/Email
│   └── ui/                 ← reusable shadcn-style primitives
│       ├── button.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       ├── holographic-card.tsx     ← cursor-tracked 3D tilt + spotlight + holo glow
│       ├── bento-grid.tsx           ← bento card layout using HolographicCard
│       ├── infinite-slider.tsx      ← framer-motion infinite marquee
│       ├── logo-cloud.tsx           ← icon+label slider (uses InfiniteSlider)
│       └── radial-orbital-timeline.tsx  ← orbiting skill nodes with expandable cards
├── lib/utils.ts            ← `cn()` helper (clsx + tailwind-merge)
├── public/                 ← static assets
│   ├── resume.pdf
│   ├── logo.png            ← cropped AK mark (used by Nav + Footer)
│   ├── initials_logo.webp  ← original AK source file
│   ├── norsco.png, brandloveinc_logo.jpeg, Wouessi_logo.jpeg
│   ├── tara.jpg
│   └── ...
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts          ← `images.remotePatterns` for external logo CDNs
└── tsconfig.json
```

---

## Section Order (in `app/page.tsx`)

1. `<Nav />` — sticky, blurs on scroll
2. `<Hero />` — full viewport, animated word reveals, mouse-tracked blur gradient, click ripples
3. `<LogoMarquee />` — infinite-scroll tech stack
4. `<About />` — heading + `<RadialOrbitalTimeline />` showing skill areas
5. `<Experience />` — 3 holographic cards
6. `<Projects />` — 3 holographic cards
7. `<Stack />` — bento grid using `<HolographicCard />` underneath
8. `<Feedback />` — single testimonial card (Tara McIlroy)
9. `<CTA />` — 2 cards (Email me / LinkedIn)
10. `<Footer />`

---

## Design Tokens (shadcn-style, defined in `app/globals.css`)

| Token | HSL | Hex equivalent |
|---|---|---|
| `--background` | `0 0% 4%` | `#0a0a0a` |
| `--foreground` | `0 0% 98%` | `#fafafa` |
| `--card` | `0 0% 6%` | slightly lighter dark |
| `--border` | `0 0% 14%` | hairline |
| `--muted-foreground` | `0 0% 63%` | secondary text |
| `--primary` | `0 0% 98%` | white CTA bg |
| `--primary-foreground` | `0 0% 4%` | near-black CTA text |
| `--ring` | `0 0% 80%` | focus ring |
| `--radius` | `0.75rem` | base border radius |

Hairlines on cards: `border border-white/10 bg-white/[0.03]`. Body text uses `text-white/78` for the normal/muted tier.

---

## Reusable Patterns

### Card pattern
Every content card wraps content in `<HolographicCard>` for the cursor-tracked 3D tilt + holographic shine. Base styling on the wrapper:
```tsx
<HolographicCard className="rounded-xl border border-white/10 bg-white/[0.03] p-[22px]">
  …content…
</HolographicCard>
```

### Heading gradient
Section titles use a subtle white→gray gradient via background-clip:
```tsx
<h2
  className="text-[44px] md:text-[64px] font-medium tracking-[-0.035em]"
  style={{
    background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.0,
  }}
>…</h2>
```

### Editorial italic label above each section
```tsx
<div className="flex items-center justify-center gap-3 text-sm text-white/62">
  <span className="relative inline-block w-3.5 h-px bg-white/40" />
  <span className="font-serif italic text-[15px] text-white/90">Experience</span>
</div>
```

### Section transitions
A single hairline divides sections: `<div className="h-px bg-white/10" />`.

---

## Adding External Image Hosts

`next/image` only loads remote images from hosts allowlisted in `next.config.ts`:
```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "cdn.simpleicons.org" },
    { protocol: "https", hostname: "cdn.jsdelivr.net" },
    { protocol: "https", hostname: "placehold.co" },
  ],
}
```
If you add a new image host, add it here. Next.js requires a dev server restart to pick up the change.

---

## Local Dev

```bash
npm install      # only on first checkout
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve built output
```

---

## Anti-Generic Guardrails

- **Colors**: Stick to the neutral palette (white/zinc/black). No blue, indigo, or tinted neutrals. Splashes of color (amber/sky/emerald/violet/rose) are allowed only on bento icons for variety.
- **Typography**: Geist for UI/body, Instrument Serif italic for editorial labels, JetBrains Mono for `font-mono` accents.
- **Animations**: `transform` and `opacity` only. No `transition-all`. Use `cubic-bezier(.2,.7,.2,1)` for spring-style ease.
- **Interactive states**: hover + focus-visible on every clickable element.
- **Shadows**: layered, low-opacity. The `HolographicCard` does the heavy lifting on cards.
- **Spacing**: `py-[120px]` for major section gaps, `gap-3` between cards in grids, `mt-14` for grid below heading.

---

## Hard Rules

- **Do not** introduce a CSS framework other than Tailwind.
- **Do not** use Material UI, Chakra UI, or other component libraries that aren't shadcn-style.
- **Do not** add `transition-all` anywhere.
- **Do not** use default Tailwind blue/indigo as primary color.
- **Do not** create a card that doesn't use `<HolographicCard>` wrapper — keeps the hover effects consistent.
- **Do not** add image hosts without updating `next.config.ts` `remotePatterns`.
- **Always** mark interactive components (`useState`, `useRef`, `useEffect`) with `"use client"` at the top.
- **When passing components/data with functions (like lucide icons)** from a Server Component into a Client Component → the wrapping section must also be marked `"use client"`.

---

## When in Doubt

The existing components are the source of truth for style. If you're adding a new card, copy the structure from `Experience.tsx` or `Projects.tsx`. If you're adding a new animated element, look at `Hero.tsx` (CSS keyframes) or `infinite-slider.tsx` (framer-motion).
