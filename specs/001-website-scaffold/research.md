# Research: Website Scaffold — Wilson Walton International

**Branch**: `001-website-scaffold` | **Date**: 2026-05-24

---

## Decision 1 — CSS Framework

**Decision**: CSS Modules (Next.js built-in, zero additional dependencies)

**Rationale**: User explicitly requested no Tailwind CSS. CSS Modules are natively supported
by Next.js with zero configuration — each component gets a `Component.module.css` file with
locally-scoped class names, preventing style leakage between components. For a design-free
scaffold this means minimal, structural-only CSS (display, basic sizing for section boundaries)
without committing to any design utility layer or class-naming convention. When a design system
is chosen later, CSS Modules can be extended, replaced with Sass modules, or wrapped in a
design token layer without component refactoring.

**Alternatives considered**:
- Tailwind CSS — rejected per user preference.
- styled-components / Emotion — rejected; runtime CSS-in-JS conflicts with Next.js App Router's
  React Server Components model.
- Sass/SCSS modules — valid future upgrade path; deferred until design phase requires variables
  or nesting.

---

## Decision 2 — Next.js App Router vs Pages Router

**Decision**: App Router (Next.js 15)

**Rationale**: The constitution explicitly prefers App Router for new pages. App Router enables
React Server Components by default, meaning only the Navigation component (which needs
`useState` for dropdown/hamburger state) requires `'use client'` — everything else renders on
the server, contributing to LCP targets.

**Alternatives considered**:
- Pages Router — rejected; constitution preference is App Router, and there is no existing
  Pages Router codebase to migrate.

---

## Decision 3 — Navigation Dropdown Implementation

**Decision**: `useState`-driven client component, no third-party library

**Rationale**: The spec requires interactive dropdowns (open on click, close on second click)
and a mobile hamburger toggle — both require client-side state. A single `Navigation` client
component manages the mobile open/closed state; each `NavDropdown` manages its own open/closed
state independently. This approach:
- Keeps the implementation minimal (no headlessui, radix-ui, or similar dependencies)
- Forces correct ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-label`) from the
  start per constitution Principle V
- Is easy to replace with an accessible library (e.g., Radix Navigation Menu) when design
  is applied

**Alternatives considered**:
- Radix UI Navigation Menu — deferred; valuable for the design phase but over-engineered for
  a placeholder scaffold.
- CSS-only `:focus-within` dropdowns — rejected; does not satisfy the click-to-close
  requirement from clarification Q1.

---

## Decision 4 — Testing Stack

**Decision**: Vitest + React Testing Library (unit/component) + Playwright (E2E)

**Rationale**: Directly mandated by the constitution. Vitest is the fastest option for a
Next.js/TypeScript project (no Babel config overhead). React Testing Library's
`render` + `screen` + `userEvent` API maps cleanly to the acceptance scenarios in the spec.
Playwright covers the SC-001–SC-005 success criteria end-to-end.

**Vitest configuration note**: Next.js 15 requires `@vitejs/plugin-react` and a `jsdom`
environment. A `vitest.config.ts` with `environment: 'jsdom'` and the `next/jest` transform
shim is the standard setup.

**Alternatives considered**:
- Jest — rejected; slower cold start; Vitest is the constitution-preferred choice.
- Cypress — rejected; Playwright is the constitution default for E2E.

---

## Decision 5 — Node.js Version

**Decision**: Node.js 22 LTS (resolves `TODO(NODE_VERSION)`)

**Rationale**: Node.js 22 is the current LTS release as of 2026-05. Next.js 15 requires
Node.js ≥ 18.18; Node 22 LTS provides the longest support window. Pin via `.nvmrc` and
`.node-version` at the repo root.

**Alternatives considered**:
- Node 20 LTS — valid fallback; but 22 LTS has better performance and a longer active
  support window through 2027.

---

## Decision 6 — PlaceholderImage Implementation

**Decision**: A `<div>` with a grey background, `role="img"`, `aria-label`, and a centred
text label rendered via a dedicated `PlaceholderImage` React component.

**Rationale**: Keeps `<img>` tags out of the DOM entirely — no broken image indicators, no
`alt`-text mismatches. The `role="img"` + `aria-label` satisfies semantic requirements.
Accepting `label` and optional `aspectRatio` props makes each placeholder self-documenting
and easy to swap for a real image when the design phase begins.

**Alternatives considered**:
- `<img>` with a placeholder data URL — rejected; still requires managing `alt` and `src`
  correctly; more brittle to swap out later.
- External placeholder service (picsum, placehold.co) — rejected; creates an external
  dependency in a design-free scaffold.
