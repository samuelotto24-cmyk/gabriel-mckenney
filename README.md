# Creator Link-Page Template

Premium link-page boilerplate for fitness creators and online coaches. Built for web agency use — every client site comes from this template.

---

## Quick Start

1. **Clone this repo** and open `index.html` in your editor
2. **Fill in CONFIG** — the `CONFIG` block at the top of `index.html` is the only thing you edit per client. Every field is documented inline.
3. **Add photos** — drop the required images into `/assets/` (see Photos section below)
4. **Set environment variables** — add the required Vercel env vars (see below)
5. **Deploy** — push to GitHub and connect the repo to Vercel. It deploys automatically on every push.

---

## CONFIG Reference

All client customization lives in the `CONFIG` object in `index.html`. Here is what each section controls:

### Brand
| Field | Description |
|-------|-------------|
| `name` | Full display name shown in the nav, hero, footer, and loader |
| `handle` | Social handle displayed in the hero (e.g. `@username`) |
| `tagline` | Short tagline shown in italic under the name (e.g. `Fitness · Faith · Food`) |

### Colors
All colors are hex strings. They get applied as CSS custom properties throughout the entire site.

| Field | Usage |
|-------|-------|
| `bg` | Page background — usually a warm off-white |
| `accent` | Buttons, highlights, ornament lines, hover states |
| `text` | Headings and body copy |
| `muted` | Secondary text, labels, placeholders |
| `surface` | Cards, nav background, form inputs |
| `border` | Dividers, card borders, input borders |

Use [coolors.co](https://coolors.co) to generate palettes.

### Display Font
Controls the serif font used for headings, names, and prices.

| Value | Font |
|-------|------|
| `cormorant` | Cormorant Garamond — elegant, editorial (default) |
| `playfair` | Playfair Display — classic, high-contrast |
| `dm-serif` | DM Serif Display — modern serif, very readable |
| `libre-baskerville` | Libre Baskerville — warm, traditional |

### Hero
| Field | Description |
|-------|-------------|
| `greetings.morning` | Shown 5am–11:59am |
| `greetings.afternoon` | Shown 12pm–4:59pm |
| `greetings.evening` | Shown 5pm–8:59pm |
| `greetings.night` | Shown 9pm–4:59am |

### Social
Set the full URL for each platform. Leave as empty string `''` to hide that button entirely. Setting `snapchat` to a URL also enables the floating Snapchat button in the bottom-right corner.

### Quick Links
Array of `{ label, icon, href }` objects. Rendered as the small pill links below the follow buttons in the hero, and also as nav links. Use Font Awesome class names for `icon`.

### About
| Field | Description |
|-------|-------------|
| `enabled` | Set to `false` to hide the entire About section |
| `headline` | The big heading |
| `body` | 2–3 sentence bio paragraph |
| `stats` | Array of `{ value, label }` — shown as stat callouts |

### Programs
| Field | Description |
|-------|-------------|
| `enabled` | Set to `false` to hide Programs |
| `items` | Array of program objects |

Each program item:
| Field | Description |
|-------|-------------|
| `title` | Program name |
| `description` | 1–2 sentence pitch |
| `price` | Displayed in large serif font (e.g. `$47/mo`) |
| `badge` | Small pill label like `Most Popular` — leave `''` to hide |
| `primaryBtn` | `{ text, href }` — the filled CTA button |
| `outlineBtn` | `{ text, href }` — the secondary outlined button |

### Photo Strip
| Field | Description |
|-------|-------------|
| `enabled` | Set to `false` to hide |
| `photos` | Array of image paths (relative to root) |
| `speed` | CSS duration for one full scroll — lower = faster (e.g. `14s`) |

### YouTube
| Field | Description |
|-------|-------------|
| `enabled` | Set to `false` to hide |
| `videoId` | Just the YouTube video ID (the part after `?v=`) |
| `channelUrl` | Full URL to the channel — used for the "Visit My Channel" button |

### Partners
Each partner item:
| Field | Description |
|-------|-------------|
| `brand` | Brand display name |
| `code` | Discount code — clicking the card copies it to clipboard |
| `discount` | Short description of the deal (e.g. `15% off`) |
| `href` | Link to the brand's site |

### Newsletter
Leave `beehiivPublicationId` empty if not using Beehiiv yet — the form will still render. When ready, set the ID here and configure the API key in Vercel env vars.

### Support / Tips
Array of `{ label, href, icon }` support links. Rendered as pill cards.

### Contact
Simple email-link section. Set `enabled: false` to hide.

### Ticker
Social proof notification that floats in the bottom-left and cycles through messages. Set `enabled: false` to disable. Messages are shuffled and shown one at a time with random delays for a live feel.

### Open Graph
Controls how the page looks when shared on iMessage, Instagram DMs, Discord, Twitter, etc.

| Field | Description |
|-------|-------------|
| `title` | Preview title |
| `description` | Preview subtitle |
| `image` | Full URL to the preview image (use `hero.jpg` hosted on the domain) |
| `url` | Canonical URL of the page |

### Dashboard
Set `password` here as a fallback. The actual password should be set via the `DASHBOARD_PASSWORD` environment variable in Vercel — that takes priority.

---

## Photos

Place all photos in the `/assets/` folder. Required images:

| File | Description |
|------|-------------|
| `assets/hero.jpg` | Main portrait photo — shown in the hero. Portrait orientation (3:4 ratio works best). |
| `assets/about.jpg` | Square or near-square lifestyle photo — shown in the About section. |
| `assets/strip-1.jpg` through `assets/strip-6.jpg` | Lifestyle/action photos for the scrolling strip. Portrait orientation (3:4). Add more and update `CONFIG.photoStrip.photos` as needed. |

**Photo tips:**
- Hero photo: use the creator's best portrait, good lighting, clean background or lifestyle setting
- Strip photos: variety is key — gym, lifestyle, food, travel, outfit shots all work well
- All images are displayed with `object-fit: cover` so they crop gracefully

---

## Vercel Environment Variables

Set these in the Vercel dashboard under **Settings → Environment Variables**:

| Variable | Description |
|----------|-------------|
| `BEEHIIV_API_KEY` | From Beehiiv → Settings → API Keys |
| `BEEHIIV_PUBLICATION_ID` | From Beehiiv → Settings → Publication (format: `pub_xxxxxxxx`) |
| `UPSTASH_REDIS_REST_URL` | From Upstash → your Redis database → REST API URL |
| `UPSTASH_REDIS_REST_TOKEN` | From Upstash → your Redis database → REST API token |
| `DASHBOARD_PASSWORD` | Password the client uses to log in to `/dashboard` |

**Minimum required:** `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for analytics. `BEEHIIV_*` only needed if the newsletter is active.

---

## Deployment

1. Create a new GitHub repo for the client
2. Push this template to it
3. Go to [vercel.com](https://vercel.com) → Add New Project → import the GitHub repo
4. Set all required environment variables
5. Deploy — Vercel auto-deploys on every push to `main`
6. Add the client's custom domain in Vercel → Settings → Domains

---

## Per-Client Checklist

Use this checklist for every new client deployment:

**Config**
- [ ] Fill in `CONFIG.name`, `CONFIG.handle`, `CONFIG.tagline`
- [ ] Set `CONFIG.colors` to match the client's brand palette
- [ ] Choose `CONFIG.displayFont`
- [ ] Set all social URLs (leave unused platforms as `''`)
- [ ] Update `CONFIG.quickLinks` to match actual sections
- [ ] Fill in `CONFIG.about` — headline, bio, stats
- [ ] Add real program data to `CONFIG.programs.items`
- [ ] Add real partner/brand codes to `CONFIG.partners.items`
- [ ] Set `CONFIG.newsletter` details (or set `enabled: false`)
- [ ] Update `CONFIG.support` links with real Venmo/PayPal
- [ ] Set `CONFIG.contact.email`
- [ ] Update `CONFIG.og` with final domain and hero image URL
- [ ] Set `CONFIG.youtube.videoId` and `channelUrl`
- [ ] Set `CONFIG.ticker.messages` to feel authentic to the creator
- [ ] Set `CONFIG.dashboard.password` (and match in Vercel env)

**Photos**
- [ ] Add `assets/hero.jpg`
- [ ] Add `assets/about.jpg`
- [ ] Add `assets/strip-1.jpg` through at least `strip-6.jpg`
- [ ] Update `CONFIG.photoStrip.photos` if adding more than 6

**Vercel**
- [ ] Create Upstash Redis database
- [ ] Set `UPSTASH_REDIS_REST_URL`
- [ ] Set `UPSTASH_REDIS_REST_TOKEN`
- [ ] Set `DASHBOARD_PASSWORD`
- [ ] Set `BEEHIIV_API_KEY` (if newsletter active)
- [ ] Set `BEEHIIV_PUBLICATION_ID` (if newsletter active)
- [ ] Add custom domain

**QA**
- [ ] Check page on mobile
- [ ] Verify all social links open correctly
- [ ] Test newsletter form (if enabled)
- [ ] Test partner code copy on mobile and desktop
- [ ] Check `/dashboard` login works with the password
- [ ] Verify page looks correct when shared on iMessage (OG image)
- [ ] Check GSAP hero animation loads cleanly
