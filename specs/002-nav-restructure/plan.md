# Implementation Plan: Website Navigation Restructure

**Branch**: `002-nav-restructure` | **Date**: 2026-05-24 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-nav-restructure/spec.md`

---

## Summary

Replace the Wilson Walton International scaffold navigation with a clean 7-item IA (Home, Company, Solutions, Industries, Engineering, Resources, Contact). Update `nav-data.ts` with real content from wilsonwaltoninternational.com. Replace the homepage section order with: Hero → Core Solutions → Industries Served → Why Wilson Walton → Featured Resources → Final CTA. Add canonical stub pages for 5 solutions and 5 industries using App Router dynamic routes (`[slug]`). Populate all static data with real company text — no lorem ipsum. All changes are additive to the existing scaffold; navigation components (NavDropdown, Navigation, Header) are unchanged.

---

## Technical Context

**Language/Version**: TypeScript 5.x / Node 22 LTS (pinned in `.nvmrc`)

**Primary Dependencies**: Next.js 15 App Router, React 18, CSS Modules — all pre-installed from scaffold 001

**Storage**: Static data files (`src/data/solutions.ts`, `src/data/industries.ts`) — no database

**Testing**: Vitest + React Testing Library (unit), Playwright (E2E) — pre-configured from scaffold 001

**Target Platform**: macOS/Linux dev, Vercel-compatible SSG output

**Project Type**: Next.js web application (scaffold phase — no CMS yet)

**Performance Goals**: SSG for all pages; build-time pre-rendering via `generateStaticParams`

**Constraints**: No Tailwind. No `any`. No `'use client'` on new section components. All 10 new stub pages must be statically generated (○ symbol in `next build` output).

**Scale/Scope**: 7 nav items, 5 solution pages, 5 industry pages, 5 new homepage sections, 6 new/updated test files

---

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Component-First | ✅ PASS | 5 new section components + 1 new UI card component, each single-responsibility |
| II. CMS-Driven Content | ✅ JUSTIFIED EXCEPTION | Static data files used; real text from live site. CMS integration is a future feature. Exception documented per plan. |
| III. Test-First (NON-NEGOTIABLE) | ✅ PASS | All tests written and confirmed failing before implementation per TDD order in tasks.md |
| IV. Type Safety | ✅ PASS | `SolutionCardData`, `IndustryCardData` typed; no `any`; strict mode maintained |
| V. Performance & Accessibility | ✅ PASS | `generateStaticParams` ensures SSG; WCAG 2.1 AA via `role`, `aria-label`, semantic HTML |

**Exception justification (Principle II)**: This feature is a scaffold phase. Real text is populated from the live site to make the scaffold demonstrable without a CMS, but all content is hardcoded as TypeScript static arrays that will be replaced by Sanity queries in a future feature (003-sanity-integration or similar). No dynamic CMS content is blocked by this approach.

---

## Project Structure

### Documentation (this feature)

```text
specs/002-nav-restructure/
├── plan.md              ← this file
├── spec.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── solution-card.ts
│   ├── industry-card.ts
│   ├── core-solutions.ts
│   ├── industries-served.ts
│   └── industry-card-ui.ts
├── checklists/
│   └── requirements.md
└── tasks.md             ← created by /speckit-tasks
```

### Source Code Changes

```text
src/
├── types/
│   └── index.ts                          ← ADD: SolutionCardData, IndustryCardData
├── data/
│   ├── services.ts                       ← UNCHANGED (scaffold 001)
│   ├── solutions.ts                      ← NEW: 5 SolutionCardData entries (real text)
│   └── industries.ts                     ← NEW: 5 IndustryCardData entries (real text)
├── components/
│   ├── navigation/
│   │   └── nav-data.ts                   ← UPDATE: new 7-item tree (real labels/hrefs)
│   ├── sections/
│   │   ├── Hero.tsx                      ← UPDATE: new headline/CTA text
│   │   ├── Hero.module.css               ← UNCHANGED
│   │   ├── CoreSolutions.tsx             ← NEW
│   │   ├── CoreSolutions.module.css      ← NEW
│   │   ├── IndustriesServed.tsx          ← NEW
│   │   ├── IndustriesServed.module.css   ← NEW
│   │   ├── WhyWilsonWalton.tsx           ← NEW
│   │   ├── WhyWilsonWalton.module.css    ← NEW
│   │   ├── FeaturedResources.tsx         ← NEW
│   │   ├── FeaturedResources.module.css  ← NEW
│   │   ├── FinalCTA.tsx                  ← NEW
│   │   ├── FinalCTA.module.css           ← NEW
│   │   ├── ServicesGrid.tsx              ← UNCHANGED (not deleted; removed from page.tsx)
│   │   └── CompanyOverview.tsx           ← UNCHANGED (not deleted; removed from page.tsx)
│   ├── ui/
│   │   ├── IndustryCard.tsx              ← NEW
│   │   ├── IndustryCard.module.css       ← NEW
│   │   └── (all existing ui/ unchanged)
│   └── index.ts                          ← UPDATE: add new component exports
├── app/
│   ├── page.tsx                          ← UPDATE: new section order
│   ├── solutions/
│   │   └── [slug]/
│   │       └── page.tsx                  ← NEW: canonical solution stub pages (SSG)
│   └── industries/
│       └── [slug]/
│           └── page.tsx                  ← NEW: canonical industry stub pages (SSG)

tests/
├── components/
│   ├── navigation/
│   │   └── Navigation.test.tsx           ← UPDATE: new labels, 5 dropdown parents
│   ├── sections/
│   │   ├── CoreSolutions.test.tsx        ← NEW
│   │   ├── IndustriesServed.test.tsx     ← NEW
│   │   ├── WhyWilsonWalton.test.tsx      ← NEW
│   │   ├── FeaturedResources.test.tsx    ← NEW
│   │   └── FinalCTA.test.tsx             ← NEW
│   └── ui/
│       └── IndustryCard.test.tsx         ← NEW
└── e2e/
    └── homepage.spec.ts                  ← UPDATE: new section selectors, implement SC-003/004/005
```

---

## Static Content: Real Text from wilsonwaltoninternational.com

### src/data/solutions.ts (to be created)

```typescript
export const solutions: SolutionCardData[] = [
  {
    id: "iccp-systems",
    slug: "iccp-systems",
    name: "ICCP Systems",
    shortDescription: "WWI designs impressed current cathodic protection equipment for any type of application.",
    fullDescription: "Impressed Current Cathodic Protection (ICCP) systems use hull-mounted anodes and reference cells connected to control processing units that generate external current, suppressing electrochemical activity on wetted hull surfaces and preventing aggressive corrosion formation where dissimilar metals meet.",
    imagePlaceholderLabel: "ICCP Systems — Impressed Current Cathodic Protection",
  },
  {
    id: "mgps-systems",
    slug: "mgps-systems",
    name: "MGPS Systems",
    shortDescription: "The WWI marine growth prevention system eliminates blockages from bio-fouling using electrolytic principles without chemicals.",
    fullDescription: "The system uses pairs of copper and aluminium electrodes mounted in seachests or strainers. Copper electrodes produce ions that prevent mussel and barnacle larvae from settling. Aluminium anodes create aluminium hydroxide, which flocculates copper and builds protective films on pipe surfaces.",
    imagePlaceholderLabel: "MGPS Systems — Marine Growth Prevention System",
  },
  {
    id: "sacrificial-anodes",
    slug: "sacrificial-anodes",
    name: "Sacrificial Anodes",
    shortDescription: "We manufacture all types of aluminium and zinc alloy anodes for any industry.",
    fullDescription: "Wilson Walton International pioneered manufacturing sacrificial anodes using premium raw materials. Aluminum and zinc alloys are patented and registered for over 50 years, recognised globally. Design, manufacturing, installation, and shipping services available for offshore and onshore industries.",
    imagePlaceholderLabel: "Sacrificial Anodes — Aluminium and Zinc Alloy Anodes",
  },
  {
    id: "corrosion-modeling",
    slug: "corrosion-modeling",
    name: "Corrosion Modeling",
    shortDescription: "We offer cathodic protection models for all types of structures and pipelines.",
    fullDescription: "Our engineers specialise in corrosion and cathodic protection using various software to simulate diverse structures. Computer modeling combines environmental chemistry, material properties, and electrochemical processes to identify metal surfaces suffering from corrosion or excessive protection in 2D or 3D dimensions.",
    imagePlaceholderLabel: "Corrosion Modeling — Cathodic Protection Simulation",
  },
  {
    id: "technical-assistance",
    slug: "technical-assistance",
    name: "Technical Assistance",
    shortDescription: "Specialised engineers in corrosion, naval architecture, marine engineering and structural fields.",
    fullDescription: "Proper cathodic protection design ensures full coverage throughout a structure's lifespan, whether new construction, retrofit modifications, or life extension projects. The team has experience from deep water to onshore facilities, including case studies and R&D.",
    imagePlaceholderLabel: "Technical Assistance — Engineering & Commissioning Services",
  },
];
```

### src/data/industries.ts (to be created)

```typescript
export const industries: IndustryCardData[] = [
  {
    id: "maritime",
    slug: "maritime",
    name: "Maritime",
    shortDescription: "Naval vessels operating in ocean environments face significant corrosion challenges. Cathodic protection systems prevent corrosion before it causes expensive damage.",
    imagePlaceholderLabel: "Maritime — Naval Vessel Cathodic Protection",
    relevantSolutionSlugs: ["iccp-systems", "mgps-systems", "sacrificial-anodes", "technical-assistance"],
  },
  {
    id: "offshore-renewables",
    slug: "offshore-renewables",
    name: "Offshore Renewables",
    shortDescription: "We develop turnkey engineering projects and design ICCP and sacrificial anode systems for offshore wind and floating renewable foundations.",
    imagePlaceholderLabel: "Offshore Renewables — Wind Turbine Foundation Protection",
    relevantSolutionSlugs: ["iccp-systems", "sacrificial-anodes", "corrosion-modeling", "technical-assistance"],
  },
  {
    id: "oil-gas",
    slug: "oil-gas",
    name: "Oil & Gas",
    shortDescription: "Over forty years of experience designing, manufacturing, and producing galvanic anodes and cathodic protection systems for offshore oil & gas.",
    imagePlaceholderLabel: "Oil & Gas — Offshore Platform Cathodic Protection",
    relevantSolutionSlugs: ["iccp-systems", "sacrificial-anodes", "corrosion-modeling", "technical-assistance"],
  },
  {
    id: "ports-onshore",
    slug: "ports-onshore",
    name: "Ports & Onshore",
    shortDescription: "Cathodic protection systems for piers, pipelines, storage tanks, industrial and civil structures across onshore and port environments.",
    imagePlaceholderLabel: "Ports & Onshore — Pipeline and Pier Protection",
    relevantSolutionSlugs: ["iccp-systems", "sacrificial-anodes", "technical-assistance"],
  },
  {
    id: "military",
    slug: "military",
    name: "Military",
    shortDescription: "We manufacture according to specific military regulations. Corrosion modeling determines vessel signatures allowing adjustments to ensure corrosion control.",
    imagePlaceholderLabel: "Military — Naval Vessel Corrosion Management",
    relevantSolutionSlugs: ["iccp-systems", "mgps-systems", "corrosion-modeling"],
  },
];
```

### Updated nav-data.ts tree

```typescript
export const navigationTree: NavigationTree = [
  { label: "Home", href: "/" },
  {
    label: "Company", href: "#",
    children: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Quality & Certifications", href: "/company/quality-certifications" },
      { label: "News", href: "/company/news" },
    ],
  },
  {
    label: "Solutions", href: "#",
    children: [
      { label: "ICCP Systems", href: "/solutions/iccp-systems" },
      { label: "MGPS Systems", href: "/solutions/mgps-systems" },
      { label: "Sacrificial Anodes", href: "/solutions/sacrificial-anodes" },
      { label: "Corrosion Modeling", href: "/solutions/corrosion-modeling" },
      { label: "Technical Assistance", href: "/solutions/technical-assistance" },
    ],
  },
  {
    label: "Industries", href: "#",
    children: [
      { label: "Maritime", href: "/industries/maritime" },
      { label: "Offshore Renewables", href: "/industries/offshore-renewables" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Ports & Onshore", href: "/industries/ports-onshore" },
      { label: "Military", href: "/industries/military" },
    ],
  },
  {
    label: "Engineering", href: "#",
    children: [
      { label: "Engineering & Consulting", href: "/engineering/consulting" },
      { label: "Corrosion Modeling", href: "/solutions/corrosion-modeling" },
      { label: "Commissioning & Technical Assistance", href: "/solutions/technical-assistance" },
      { label: "Inspections & Surveys", href: "/engineering/inspections-surveys" },
    ],
  },
  {
    label: "Resources", href: "#",
    children: [
      { label: "Downloads", href: "/resources/downloads" },
      { label: "News", href: "/company/news" },
      { label: "Certifications", href: "/resources/certifications" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
```

### Updated Hero section text

```typescript
// Hero props used in page.tsx
headline: "Proven quality since 1966"
subheading: "Cathodic protection and corrosion engineering for Maritime, Offshore & Onshore installations"
primaryCTA: { label: "Contact us", href: "/contact" }
secondaryCTA: { label: "Explore solutions", href: "#solutions" }
```

### WhyWilsonWalton points (inline in component)

```typescript
const points = [
  "50+ years of engineering expertise in corrosion and cathodic protection",
  "Global experience across Maritime, Offshore, and Onshore sectors",
  "In-house manufacturing of ICCP, MGPS, and sacrificial anode systems",
  "ISO 9001 certified — proven quality since 1966",
  "Dedicated technical support and field commissioning teams",
];
```

---

## Complexity Tracking

| Item | Why Needed | Simpler Alternative Rejected Because |
|------|-----------|-------------------------------------|
| Dynamic `[slug]` routes for solutions & industries | FR-009 requires `/solutions/{slug}` URLs; 10 stub pages needed | Individual static files create 10 near-identical files — poor maintainability |
| `relevantSolutionSlugs` cross-reference in IndustryCardData | FR-008 requires cross-linking without nav duplication | Inline solution objects inside IndustryCardData would duplicate content |
