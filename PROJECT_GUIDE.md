# Project Guide

## Overview
- Modern single-page portfolio web app built with React 18, TypeScript, and Vite.
- Landing experience highlights personal profile, services, projects, testimonials, and real-time Spotify activity.
- Additional routed pages cover detailed case studies, a multi-step client intake form, pricing and FAQ content, and tooling to mint Spotify refresh tokens.
- Internationalization provided via i18next with English and Turkish resource bundles.

## Tooling & Dependencies
- React + React DOM for UI rendering, React Router DOM for routing, React Query for async data states, React Hook Form + Zod for form validation, React i18next for translations.
- Tailwind CSS (with custom theme tokens) and Shadcn/Radix-derived primitives in `src/components/ui` for design system components.
- Lucide icons, Framer Motion (currently unused), Embla carousel (unused in code read), TanStack query, Sonner + custom toast hook for notifications.
- Spotify integration relies on `spotify-web-api-node` plus direct REST calls with `fetch`.
- Dev tooling: Vite + SWC plugin, ESLint (TS + React Hooks + Refresh), Tailwind plugins, TypeScript, Lovable component tagger.

## NPM Scripts
- `dev`: launch Vite dev server on port 8080.
- `build`: production bundle via Vite; `build:dev` builds with development mode flag.
- `preview`: preview build output.
- `lint`: run ESLint across repo.

## Project Structure Highlights
- `src/main.tsx`: bootstraps app, registers i18n, renders `App`.
- `src/App.tsx`: wrappers for React Query, Radix tooltip provider, dual toaster systems, router definitions, global language switcher.
- `src/pages/`: route-level views (`Index`, `Projects`, `ProjectDetail`, `Services`, `ClientForm`, `SpotifyTokenHelper`, `NotFound`).
- `src/components/`: section blocks for the landing page plus shared widgets.
- `src/components/ui/`: auto-generated Shadcn component library (accordion, modal, form, etc.).
- `src/hooks/`: `useIsMobile` media query helper and custom toast manager.
- `src/lib/`: Spotify API utilities (`getCurrentlyPlaying`, `getAccessToken`, `formatDuration`) and Tailwind class merger.
- `src/i18n/`: i18next setup with JSON locale bundles (`en.json`, `tr.json`).
- `public/`: static assets (profile image, tech icons, favicon) used across sections.

## Routing & Page Behavior
- `/`: Landing grid combining profile, services marquee, projects teaser, tech stack, statistics, work process, testimonials, call-to-action, Spotify widget, and footer.
- `/projects`: Grid of hard-coded project cards linking to detail pages.
- `/project/:id`: Static map of three project entries with features, tech badges, outbound buttons (GitHub/live); graceful fallback when ID missing.
- `/services`: Extensive service catalog powered by translations; includes hero CTA, pricing tiers with badges, process overview, deliverables vs responsibilities, third-party tools, FAQ, and closing CTA.
- `/client-form`: Multi-step brand/design/payment/technical intake form, validated by Zod schemas; uses Sonner toasts, progress tracker, review step, success state; submission currently simulated via timeout and console log.
- `/spotify-helper`: Guided flow for authorizing Spotify, capturing auth code, and exchanging for a refresh token; expects ngrok/local host configuration and directly encodes client ID and secret.
- `/spotify-helper?code=...`: page auto-populates auth code from query params.
- `/spotify-helper` and `/client-form` both rely heavily on translation strings for messaging.
- `/spotify-helper` emphasises copy-to-clipboard, error handling, and step-by-step instructions.
- Catch-all `*` route renders translated 404 page.

## Core Landing Sections
- `ProfileSection`: Intro card with availability badge, avatar, quick facts, trait chips, skill stats, contact dialog (modal form) posting a simulated message, and GitHub button.
- `ServicesSection`: Dual marquee scrollers listing localized services; implemented with custom CSS animations.
- `ProjectsSection`: Three featured projects linking to router detail pages, plus CTA button.
- `TechStackSection`: Cards linking to key tools (React, TypeScript, Tailwind, JS, Next, Shadcn) with icons and versions.
- `StatisticsSection`: Three cards showing projects, clients, years of experience; localized labels.
- `WorkProcessSection`: Four-step workflow cards with icons and text pulled from i18n.
- `TestimonialsSection`: List of sample testimonials with 5-star overlays and "View All" CTA (route not yet implemented).
- `CallToActionSection`: Typing animation that cycles localized phrases; buttons for contact and GitHub.
- `SpotifyNowPlaying`: Card that polls Spotify every 5 seconds, animates progress, shows album art, and links to track.
- `FooterSection`: Localized "Made with love" footer; Turkish/English phrasing order differs.

## State Management & Data Flow
- React Query client instantiated once; currently only `SpotifyNowPlaying` uses async data but manages fetching manually via `getCurrentlyPlaying` (could be migrated to React Query for caching/polling).
- React Hook Form + Zod handle complex nested state and validation within `ClientForm` across multiple steps.
- Component-level state manages modals, typing animation, copy-to-clipboard status, Spotify progress ticker, etc.
- i18next handles translations, with language persisted in `localStorage` and detection fallback to browser locale (defaults to English otherwise).
- Toast notifications via `sonner` + custom hook; toasts limited to one active item (`TOAST_LIMIT = 1`).

## Styling & Theming
- Tailwind CSS with custom HSL variables defined in `src/index.css` for background, cards, and brand colors (purple/green).
- Additional utility classes for glow borders, pricing card effects, gradients, and marquee animation defined in global CSS.
- Shadcn component styles automatically pick up theme tokens; dark-only design currently assumed.
- Legacy `src/App.css` still contains default Vite styles (likely unused).

## Integrations & Environment
- Spotify utilities expect three Vite env vars: `VITE_SPOTIFY_CLIENT_ID`, `VITE_SPOTIFY_CLIENT_SECRET`, `VITE_SPOTIFY_REFRESH_TOKEN`; helper page currently hard-codes ID/secret and guides through manual token retrieval.
- `.env.example` only covers Slack webhook placeholders (`SLACK_WEBHOOK_URL` and `VITE_SLACK_WEBHOOK_URL`); Spotify values are undocumented.
- `vite.config.ts` proxies `/api` to `http://localhost:3001`, enabling future backend integration (none present yet).
- Network interactions presently limited to Spotify OAuth/token endpoints.

## Internationalization Notes
- Locale files (`en.json`, `tr.json`) store hierarchical keys for navigation, profile traits, services content, FAQs, CTA phrases, client form copy, and validation messages.
- `LanguageSwitcher` dropdown toggles locale and persists selection; flag emojis are currently garbled due to encoding (`????`).
- Several translation strings containing Turkish characters display mojibake (e.g., `Türkiye`, `Çağan`); investigate source encoding or ensure files saved as UTF-8 without BOM.
- Services page leverages `returnObjects: true` to fetch arrays (pricing highlights, deliverables, FAQ entries, etc.); translations must keep array structures synchronized across locales.

## Known Gaps & Risks
- Spotify credentials (client secret) shipped to client code (`SpotifyTokenHelper` and `lib/spotify.ts`), which is insecure for production; should be moved server-side.
- Project, testimonial, and stats data are hard-coded; consider centralizing in data files or fetching from CMS/API.
- `/testimonials` route linked in `TestimonialsSection` does not exist; clicking yields 404.
- Language flags and several strings present encoding issues; confirm file encoding and emoji usage.
- `Services` and `ClientForm` rely on very large translation payloads; keep keys in sync to avoid runtime `undefined` values.
- `SpotifyNowPlaying` polling uses `setInterval` without React Query; potential race conditions when component unmounts/remounts quickly.
- `useToast` keeps remove timeout at 1,000,000 ms (~16 min); adjust if toasts should disappear sooner.
- Environment example lacks Spotify variables and instructions for required ngrok HTTPS tunnel (document in future setup guide).

## Development Tips & Next Steps
- Run `npm install` (or bun/pnpm) and `npm run dev` (default 8080) to iterate; ensure translations load before rendering by importing `src/i18n` in `main.tsx`.
- Consider adding unit tests (none currently) or Cypress for interactive flows (multi-step form, Spotify helper).
- Future improvements: externalize data, fix encoding, secure Spotify integration, implement missing testimonial route, document Slack webhook usage.