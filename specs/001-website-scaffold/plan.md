# Implementation Plan: Website Scaffold — Wilson Walton International

**Branch**: `001-website-scaffold` | **Date**: 2026-05-24 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-website-scaffold/spec.md`

## Summary

Scaffold the Wilson Walton International homepage in Next.js (App Router) using TypeScript and
Tailwind CSS. The page renders five sections — Header (with interactive nav), Hero, Services Grid,
Company Overview, and Footer — using hardcoded placeholder content and a reusable
`PlaceholderImage` component. No CMS integration, no real assets, no design system — just typed,
composable components ready for design and content phases.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 22 LTS

**Primary Dependencies**: Next.js 15 (App Router), React 19, Vitest,
React Testing Library, Playwright — CSS via CSS Modules (Next.js built-in, no extra package)

**Storage**: N/A — static scaffold, no persistence

**Testing**: Vitest + React Testing Library (component tests); Playwright (E2E, SC-001–SC-005)

**Target Platform**: Web browser (modern evergreen — Chrome, Firefox, Safari, Edge)

**Project Type**: Web application — Next.js frontend only (no API routes in this feature)

**Performance Goals**: Core Web Vitals per constitution Principle V — LCP < 2.5s, CLS < 0.1,
INP < 200ms. Scaffold uses SSG; no client-side data fetching.

**Constraints**: TypeScript strict mode; no CSS design tokens or colour variables beyond the
minimum for section boundary visibility; all images replaced by `PlaceholderImage` components.

**Scale/Scope**: 1 page, 5 layout sections, ~12 components, ~10 test files.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Component-First | ✅ PASS | All 5 sections are independent, single-responsibility components. Nav dropdowns are a separate `NavDropdown` component. |
| II. CMS-Driven Content | ⚠️ JUSTIFIED EXCEPTION | Scaffold phase uses hardcoded placeholders. Mitigation: component prop interfaces are shaped to accept future Sanity-typed data directly with no refactoring. |
| III. Test-First | ✅ PASS (enforced) | Task structure mandates tests written + confirmed failing before any implementation code. |
| IV. Type Safety | ✅ PASS | `strict: true`; all props explicitly typed; no `any`. |
| V. Performance & Accessibility | ✅ PASS / ⚠️ PARTIAL | SSG via Next.js — performance ✅. Semantic HTML (`<nav>`, `<button>`, `<ul>`/`<li>`) and ARIA attributes (`aria-expanded`, `aria-label`, `aria-haspopup`) are REQUIRED even in scaffold — full WCAG audit deferred per spec Assumption. |

## Project Structure

### Documentation (this feature)

```text
specs/001-website-scaffold/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output — component prop interfaces
│   ├── nav-item.ts
│   ├── service-card.ts
│   └── placeholder-image.ts
└── tasks.md             # Phase 2 output (/speckit-tasks — NOT created here)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx            # Root layout — renders Header + Footer
│   ├── page.tsx              # Homepage — renders Hero + ServicesGrid + CompanyOverview
│   └── globals.css           # CSS reset + minimal body/html base styles only
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── navigation/
│   │   ├── Navigation.tsx    # Desktop nav + mobile hamburger toggle (client component)
│   │   ├── Navigation.module.css
│   │   ├── NavDropdown.tsx   # Single dropdown — open/close state, ARIA attributes
│   │   ├── NavDropdown.module.css
│   │   └── nav-data.ts       # Static nav item tree (hardcoded for scaffold)
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── ServicesGrid.tsx
│   │   ├── ServicesGrid.module.css
│   │   ├── CompanyOverview.tsx
│   │   └── CompanyOverview.module.css
│   └── ui/
│       ├── PlaceholderImage.tsx  # Grey box with label — replaces all images
│       ├── PlaceholderImage.module.css
│       ├── ServiceCard.tsx
│       └── ServiceCard.module.css
├── data/
│   └── services.ts           # Static services array (6 entries) for scaffold
└── types/
    └── index.ts              # Shared interfaces: NavItem, ServiceCardData, etc.

tests/
├── components/
│   ├── layout/
│   │   ├── Header.test.tsx
│   │   └── Footer.test.tsx
│   ├── navigation/
│   │   ├── Navigation.test.tsx   # Renders all 7 nav items; hamburger toggle; dropdown open/close
│   │   └── NavDropdown.test.tsx  # Open on click; close on second click; aria-expanded
│   ├── sections/
│   │   ├── Hero.test.tsx
│   │   ├── ServicesGrid.test.tsx
│   │   └── CompanyOverview.test.tsx
│   └── ui/
│       ├── PlaceholderImage.test.tsx
│       └── ServiceCard.test.tsx
└── e2e/
    └── homepage.spec.ts      # Playwright — covers SC-001 through SC-005
```

**Structure Decision**: Next.js App Router with `src/` directory. All UI is split into
`layout/` (Header, Footer), `navigation/` (interactive nav — needs `'use client'`),
`sections/` (page-level content blocks), and `ui/` (shared primitives). Static data lives
in `data/` so components are pure and testable with mock data.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| Principle II exception — hardcoded content | Scaffold phase; CMS schema not yet defined | Empty components deliver no value; placeholder content validates layout and component interfaces |
