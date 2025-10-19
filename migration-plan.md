# Jupiter & the Giraffe — WordPress → Next.js (Tailwind + shadcn) Migration Plan

This plan outlines a phased, low-risk migration of the Pinegrow/WordPress site to a Next.js app located in `/payload`. We will progressively componentize the UI, migrate styling to Tailwind and shadcn/ui, and move content into a consistent data model while preserving SEO and minimizing downtime.

Key paths in this repo:
- Static/Pinegrow source: `/src`
- WordPress theme output: `/wordpress/wp-content/themes/jupiter-and-the-giraffe.nosync`
- Next.js app (target): `/payload`

Primary content domains (“databases”):
- Team Members
- Case Studies
- Blog
- Testimonials
- Awards
- Results (an aggregated/curated listing that combines multiple types)

Goals:
- Incremental migration using a strangler pattern (route-by-route cutover)
- Break large pages into reusable components with clear boundaries
- Replace CSS with Tailwind + shadcn/ui while retaining visual parity
- Preserve URLs, SEO, analytics, and performance budgets
- Keep the codebase minimal and comprehensible; remove boilerplate

Non-goals (for now):
- Rewriting business content or rebranding visuals
- Introducing unrelated new features not necessary for parity

---

## Phase 0 — Discovery, Inventory, and Plan Finalization

Deliverables:
- Full page + route inventory (marketing pages, blog, case studies, team, results, etc.)
- Component inventory from `/src` and WP theme includes (headers, footers, hero, cards, grids, CTAs, etc.)
- CSS audit (utility classes, variables, typography, spacing scale, colors)
- SEO and URL matrix (current permalinks, meta titles/descriptions, canonical tags, sitemaps)
- Plugin/dependency audit (forms, analytics, embeds, shortcodes)
- Preliminary data model sketch for each content type (see Phase 3)

Actions:
- Crawl the live site + review `/src` and `/wordpress/.../jupiter-and-the-giraffe.nosync` to list all routes
- Extract reusable UI patterns used across pages (hero, section headers, card lists, grids, testimonial blocks)
- Identify any shortcodes or WP template logic that must be replicated
- Confirm hosting/deploy targets for Next.js and file storage (e.g., Vercel + object storage/S3 or similar)

Exit criteria:
- Signed-off route inventory + redirect plan draft
- Signed-off initial data model and migration approach (WP as headless interim vs. immediate migration to new store)

---

## Phase 1 — Normalize the Next.js app in `/payload` (Minimal, Modern Baseline)

Objective: Clear out boilerplate and establish a minimal but production-ready foundation.

Actions:
- Update to latest Next.js with App Router + TypeScript + ESLint/Prettier
- Remove sample pages/components and any unused scaffolding
- Add Tailwind (with design tokens in `tailwind.config.js` — colors, spacing, fonts)
- Install shadcn/ui and generate only the primitives we need (Button, Card, Dialog, Input, Tabs, Badge, Tooltip)
- Establish project structure (example):
  - `app/(marketing)/...` for public pages
  - `app/(content)/{blog,case-studies,results,team}` for content sections
  - `components/ui` (shadcn primitives) and `components/shared` (site-specific atoms/molecules)
  - `lib/*` (data fetching, utils), `styles/*` (minimal globals + Tailwind base)
- Introduce minimal global styles: CSS variables for colors, font stacks, and base typography; everything else via Tailwind utilities
- Set up `next-sitemap`, `robots.txt`, `@vercel/analytics` (or GA/GTM), and `next/metadata`

Exit criteria:
- `/payload` runs locally, lint/format clean, with a blank layout, header, footer, and a couple of sample sections using Tailwind + shadcn
- Boilerplate removed; only essential dependencies remain

---

## Phase 2 — UI Architecture and Componentization

Objective: Define a stable component taxonomy and migrate shared layout primitives first.

Actions:
- Define primitives (atoms): Container, Grid, Section, Heading, Text, Button, Link, Icon, Badge
- Define common molecules: NavBar, Footer, Hero, Card (image + text), Testimonial Block, Logo Cloud, Feature List, Metrics/Stats
- Define organisms (page-level sections): CaseStudyList, BlogList, TeamGrid, ResultsFeed, CTA Sections
- Migrate header/footer from `/src` to React components using Tailwind utilities
- Build a section system: standardized spacing, background variants (default, subtle, brand), width constraints
- Create a “Card” pattern used across case studies, blog posts, awards, and testimonials (variant-driven via props/CVA)

Exit criteria:
- A minimal design system exists: consistent spacing, typography, color tokens, and section patterns
- Most shared building blocks are ready to assemble pages

---

## Phase 3 — Content Modeling (Data Layer)

We’ll choose one of two tracks:
- Recommended: Use a dedicated data store/CMS co-located with Next.js (e.g., Payload CMS or a Postgres + Prisma model). This centralizes content and simplifies editorial workflows.
- Interim alternative: Treat WordPress as headless for read-only during early phases (via WP REST API), then migrate content later.

Proposed collections/fields (adjust to actual needs):
- TeamMember
  - id, slug, name, role/title, bio (rich), headshot, socials, order, featured:boolean, publishedAt, SEO fields
- CaseStudy
  - id, slug, title, summary/excerpt, hero image, client, industries[], services[], metrics[], gallery[], body (rich/MDX), tags[], publishedAt, SEO
- BlogPost
  - id, slug, title, excerpt, content (MDX), author -> TeamMember, categories[], tags[], cover image, publishedAt, SEO
- Testimonial
  - id, quote, authorName, role, company, avatar, relatedCaseStudy?, publishedAt
- Award
  - id, title, awardingBody, year, link, badgeImage, publishedAt
- Result (Aggregator/Curated)
  - id, type: enum[CaseStudy|BlogPost|Testimonial|Award]
  - ref: relation to one of the above (polymorphic)
  - overrides: displayTitle?, excerpt?, image?, badge?, label?
  - curation metadata: weight, pinned:boolean, group/section, tags[], publishedAt

Notes on “Results”:
- Option A (recommended): Dedicated `Result` collection with a polymorphic reference + overrides for editorial control and ordering
- Option B: No explicit `Result` collection; compute a merged feed at query time from the four sources (simpler to start, less editorial control)
- Option C: Hybrid — computed feed with an additional curated list for pinning/ordering

Exit criteria:
- Data model documented and agreed
- For the selected store (CMS or DB), types/interfaces are generated and available to the Next.js app

---

## Phase 4 — Data Migration Strategy

Objective: Move data from WordPress into the new model with parity.

Actions:
- Export content via WP REST API (`/wp-json/wp/v2/...`) or database dump
- Create mapping scripts to transform WP posts/pages/ACF/meta to the new schema
- Import assets: download, dedupe, re-upload to object storage or `/public` (hash filenames for caching)
- Preserve slugs, publish dates, and canonical URLs to minimize SEO impact
- Create a redirect matrix (old -> new), including category archives and any special pages

Exit criteria:
- A reproducible migration script that can be rerun
- Staging data populated in the new store

---

## Phase 5 — Route-by-Route Page Migration (Strangler Pattern)

Order of migration (can be parallelized where practical):
1) Global pages and navigation
   - Home, About, Contact, Services, etc.
2) Team
   - `/team` (grid) and `/team/[slug]`
3) Case Studies
   - `/case-studies` (filters/pagination) and `/case-studies/[slug]`
4) Testimonials and Awards
   - `/testimonials` (or integrate across pages) and `/awards`
5) Blog
   - `/blog` and `/blog/[slug]` + categories/tags + RSS feed
6) Results
   - `/results` (curated/aggregated feed with filters)

Implementation details:
- Use SSG/ISR for lists and details where possible; SSR only if needed
- Create typed data fetchers in `lib/data/*`
- Reuse Card and Section components for consistent UI
- Use `generateMetadata` for titles/descriptions and Open Graph tags
- Generate sitemap/robots

Exit criteria per section:
- Pixel-checked against current site
- Lighthouse performance/regression checks within tolerance
- Accessibility scan (axe) passes critical checks

---

## Phase 6 — Styling Migration to Tailwind + shadcn

Objective: Remove legacy CSS while keeping visual parity.

Actions:
- Define Tailwind theme tokens from CSS audit (colors, spacing, radii, shadows, typography scale)
- Translate repeated patterns into component variants (e.g., Card: `variant={"caseStudy"|"blog"|"award"|"testimonial"}`)
- Replace global CSS section-by-section; keep a temporary `legacy.css` for pages not yet migrated
- Use `prose` (typography plugin) for rich text/MDX
- Remove unused CSS as sections are migrated; track via `@next/bundle-analyzer` and Tailwind’s `content` purge

Exit criteria:
- Legacy CSS fully removed; Tailwind + shadcn is the sole styling system

---

## Phase 7 — Results Page (Aggregator) Implementation

Objective: Build a flexible, editorially controlled Results feed.

Actions (assuming Option A):
- Implement `Result` collection and admin/editor UI
- Build a query that returns a unified list with projection of overrides
- Create filter UI (type, tag, year) and pinned items logic (pinned always first)
- Card rendering picks a variant based on `type` with optional override fields

Exit criteria:
- Editors can curate the Results order/sections
- Results page supports filtering and performs well at scale

---

## Phase 8 — Integrations, Analytics, and SEO Parity

Actions:
- Port forms (Netlify, Formspree, custom backend) and add spam protection/hCaptcha if needed
- Add GTM/Gtag; verify events and conversions
- Structured data (JSON-LD) for articles/case studies/testimonials
- Social embeds and oEmbed equivalents as needed
- 301 redirects in place for all moved routes; verify via crawl

Exit criteria:
- Analytics parity established; redirects verified (no 404s for known URLs)

---

## Phase 9 — QA, Performance, and Accessibility

Actions:
- Automated tests: unit (components), integration (data fetchers), E2E (critical flows) on staging
- Performance budgets: LCP, INP, CLS targets; optimize images (next/image), preloads, and caching headers
- Accessibility checks (axe/Pa11y); manual keyboard and screen reader QA

Exit criteria:
- All critical tests pass; budgets met or accepted

---

## Phase 10 — Cutover and Decommission

Actions:
- Enable path-based routing so migrated pages resolve to Next.js and unmigrated ones continue to hit WordPress (reverse proxy or edge rewrites)
- Freeze WordPress editorial when final migration runs
- Final content sync and go-live
- Post-launch monitoring, error triage, SEO recrawl checks
- Decommission WordPress when confidence is high; archive DB and theme

Exit criteria:
- Traffic fully served by Next.js; WordPress disabled/archived

---

## Work Streams and Ownership

- UI/Frontend: component library, page assembly, Tailwind/shadcn migration
- Content/Data: schema design, migration scripts, editorial workflows
- Platform/DevOps: hosting, storage, CI/CD, routing/rewrites, monitoring
- QA/SEO: tests, accessibility, performance, redirect validation

---

## Risks and Mitigations

- SEO regressions: preserve slugs, dates; implement 301s; validate with a crawler pre/post launch
- Asset migration complexity: script downloads/uploads; hash filenames; use a CDN
- Results complexity: start with Option A (curated polymorphic) to give editors control; fall back to computed if needed
- Scope creep: focus on parity first; log enhancements for a post-migration iteration

---

## Acceptance Checklists (per route/section)

- URL parity and 301s configured
- Metadata and Open Graph verified
- Content rendering accurate and complete
- Responsive and accessible
- Performance meets budgets
- Analytics events in place

---

## Next Actions (to kick off)

1) Confirm data store approach (Payload/DB vs. headless WP interim)
2) Clean `/payload` to minimal baseline (Phase 1)
3) Implement header/footer and base sections (Phase 2)
4) Finalize schemas (Phase 3) and stand up staging content
5) Migrate and ship the first simple section (e.g., Team) to validate end-to-end
6) Iterate through the route order, finishing with Results and Blog
