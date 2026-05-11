# Abdullah Khan — Portfolio

A high-craft personal portfolio site for **Abdullah Khan**, software engineer based in Toronto. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Designed dark-first with a neutral white-on-near-black palette, cursor-aware 3D card effects, and an animated landing experience.

> Live locally at `http://localhost:3000` after running `npm run dev`.

---

## Highlights

- **Animated hero** — atmospheric SVG grid, mouse-following blur gradient, click ripples, word-by-word reveal of name → subtitle → CTAs → top/bottom labels
- **Logo marquee** — infinite horizontal scroll of the tech stack via Framer Motion, pauses on hover, fades at the edges
- **Radial orbital timeline** — six skill nodes orbiting a glowing center; click any node to expand its detail card (status badge, content, energy bar, connected nodes)
- **Holographic cards** — every content card uses a custom `HolographicCard` wrapper that tracks the cursor for subtle 3D tilt, soft white spotlight, and a `mix-blend-mode: overlay` holo shine
- **Bento stack section** — colSpan-driven 3-col layout for the technology breakdown
- **Real testimonial card** with avatar and proper opening/closing quotation marks
- **Two CTAs** — Email me + LinkedIn — each rendered as a holographic card
- **shadcn-style theming** — proper CSS variables in `globals.css`, easily themable

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 15.1 (App Router) |
| Language | TypeScript 5.7 (strict) |
| Runtime | React 19 |
| Styling | Tailwind CSS 3.4 + `tailwindcss-animate` |
| UI primitives | `@radix-ui/react-slot`, `class-variance-authority`, `clsx`, `tailwind-merge` |
| Animation | Framer Motion 11 (marquee), CSS keyframes (hero) |
| Icons | `lucide-react` |
| Fonts | Geist Sans + Geist Mono (`geist`), Instrument Serif (`next/font/google`) |
| Image optimisation | `next/image` |

---

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx               # Root layout: fonts, metadata
│   ├── page.tsx                 # Section composition
│   ├── globals.css              # CSS variables, keyframes, holographic CSS
│   └── icon.png                 # Favicon (auto-detected)
├── components/
│   ├── Nav.tsx                  # Sticky nav with scroll-triggered backdrop blur
│   ├── Hero.tsx                 # Animated landing
│   ├── LogoMarquee.tsx          # Tech-stack carousel
│   ├── About.tsx                # Built-with-intent + orbital timeline
│   ├── Experience.tsx           # Norsco / Brand Love / Wouessi cards
│   ├── Projects.tsx             # 3 personal project cards
│   ├── Stack.tsx                # Bento grid of full stack
│   ├── Feedback.tsx             # Tara McIlroy testimonial
│   ├── CTA.tsx                  # Email + LinkedIn CTAs
│   ├── Footer.tsx               # Copyright + social links
│   └── ui/                      # Reusable primitives
│       ├── button.tsx           # shadcn Button
│       ├── badge.tsx            # shadcn Badge
│       ├── card.tsx             # shadcn Card
│       ├── holographic-card.tsx # 3D tilt + spotlight + shine wrapper
│       ├── bento-grid.tsx       # Grid layout built on HolographicCard
│       ├── infinite-slider.tsx  # Framer-motion horizontal marquee
│       ├── logo-cloud.tsx       # Icon + label list using InfiniteSlider
│       └── radial-orbital-timeline.tsx  # Orbital skill viz
├── lib/utils.ts                 # `cn()` helper
├── public/                      # Static assets
│   ├── resume.pdf
│   ├── logo.png                 # Cropped AK mark
│   ├── initials_logo.webp       # Original AK source
│   ├── norsco.png
│   ├── brandloveinc_logo.jpeg
│   ├── Wouessi_logo.jpeg
│   └── tara.jpg
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── tsconfig.json
```

---

## Running Locally

```bash
git clone <repo>
cd Portfolio
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Other scripts

```bash
npm run build       # Production build
npm run start       # Run the production server
```

---

## Design System

The site is dark-first with a neutral palette — no blue tint. CSS variables in `app/globals.css`:

| Token | Value | Purpose |
|-------|-------|---------|
| `--background` | `hsl(0 0% 4%)` | Page background (`#0a0a0a`) |
| `--foreground` | `hsl(0 0% 98%)` | Primary text (`#fafafa`) |
| `--card` | `hsl(0 0% 6%)` | Card surface |
| `--border` | `hsl(0 0% 14%)` | Hairline borders |
| `--muted-foreground` | `hsl(0 0% 63%)` | Secondary text |
| `--primary` | `hsl(0 0% 98%)` | CTA bg (white) |
| `--primary-foreground` | `hsl(0 0% 4%)` | CTA text (near-black) |
| `--radius` | `0.75rem` | Base border radius |

### Card pattern

```tsx
<HolographicCard className="rounded-xl border border-white/10 bg-white/[0.03] p-[22px]">
  {/* content */}
</HolographicCard>
```

### Heading gradient (subtle white → gray)

```tsx
<h2 style={{
  background: "linear-gradient(180deg,#fff 0%,#a3a3a3 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}}>
  …
</h2>
```

---

## Adding External Image Hosts

`next/image` requires hostname allowlisting in `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "cdn.simpleicons.org" },
    { protocol: "https", hostname: "cdn.jsdelivr.net" },
    { protocol: "https", hostname: "placehold.co" },
  ],
}
```

Restart the dev server after adding hosts.

---

## Content Customisation

| What | Where |
|------|-------|
| Page metadata, title, description | `app/layout.tsx` |
| Hero text, subtitle, CTAs | `components/Hero.tsx` |
| Tech logos in marquee | `components/LogoMarquee.tsx` (`logos` array) |
| Skill timeline data | `components/About.tsx` (`timelineData` array) |
| Experience cards | `components/Experience.tsx` (`experiences` array) |
| Project cards | `components/Projects.tsx` (`projects` array) |
| Bento stack groups | `components/Stack.tsx` (`stackItems` array) |
| Testimonial | `components/Feedback.tsx` |
| Contact CTAs (Email, LinkedIn) | `components/CTA.tsx` |
| Footer links | `components/Footer.tsx` |
| Favicon | replace `app/icon.png` |
| Resume | replace `public/resume.pdf` |
| AK logo (nav + footer) | replace `public/logo.png` |
| Color tokens | `app/globals.css` `:root` block |

---

## Deployment

The site is Vercel-ready. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — no environment variables required, no build configuration needed beyond defaults.

```bash
# Or via Vercel CLI:
vercel --prod
```

---

## Contact

- Email — `abdullah.khan14@ontariotechu.net`
- LinkedIn — [linkedin.com/in/abdvllah-khan](https://linkedin.com/in/abdvllah-khan)
- GitHub — [github.com/abdullahk416](https://github.com/abdullahk416)

---

## Acknowledgements

- [21st.dev](https://21st.dev) — source patterns for the hero, logo cloud, radial orbital timeline, holographic card, and bento grid
- [shadcn/ui](https://ui.shadcn.com) — Button, Badge, Card primitives + theming convention
- [Geist](https://vercel.com/font) — typeface by Vercel
- [Lucide](https://lucide.dev) — icon set
- [Simple Icons](https://simpleicons.org) + [Devicon](https://devicon.dev) — brand mark CDNs for the logo marquee
