---
description: "Task list for Website Scaffold — Wilson Walton International"
---

# Tasks: Website Scaffold — Wilson Walton International

**Input**: Design documents from `specs/001-website-scaffold/`

**Prerequisites**: plan.md ✅, spec.md ✅, data-model.md ✅, contracts/ ✅, research.md ✅, quickstart.md ✅

**Tests**: TDD is NON-NEGOTIABLE per constitution Principle III. Test tasks appear FIRST within
each user story phase and MUST be confirmed failing before any implementation task in that phase begins.

**Organization**: Tasks are grouped by user story to enable independent implementation and
testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Exact file paths are included in every task description

---

## Phase 1: Setup

**Purpose**: Initialize the Next.js project and all tooling before any component work begins.

- [x] T001 Initialize Next.js 15 project with App Router and TypeScript at repo root (`npx create-next-app@latest . --typescript --app --no-tailwind --src-dir`)
- [x] T002 [P] Pin Node.js version — create `.nvmrc` containing `22` at repo root
- [x] T003 Verify `tsconfig.json` has `"strict": true` and `"baseUrl": "."` — update if needed
- [x] T004 [P] Install and configure Vitest with jsdom and React Testing Library — install packages: `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `@vitejs/plugin-react`; create `vitest.config.ts` at repo root configuring `environment: 'jsdom'` and `@vitejs/plugin-react` plugin; add `test` script to `package.json`
- [x] T005 [P] Install and configure Playwright — create `playwright.config.ts` at repo root; add `test:e2e` script to `package.json`; create `tests/e2e/` directory
- [x] T006 [P] Install and configure ESLint with TypeScript and accessibility rules — install `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-jsx-a11y`; create `.eslintrc.json` at repo root enabling `@typescript-eslint/no-explicit-any: error` and `jsx-a11y/recommended`; add `lint` script to `package.json`
- [x] T007 Create full directory structure per plan.md: `src/components/layout/`, `src/components/navigation/`, `src/components/sections/`, `src/components/ui/`, `src/data/`, `src/types/`, `tests/components/layout/`, `tests/components/navigation/`, `tests/components/sections/`, `tests/components/ui/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared types and static data that every user story depends on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T008 Create shared TypeScript interfaces in `src/types/index.ts` — export `NavItem`, `NavigationTree`, `ServiceCardData`, `HeroData`, `CompanyOverviewData`, `FooterData`, `PlaceholderImageProps` per contracts/ and data-model.md
- [x] T009 [P] Create static services data in `src/data/services.ts` — export `services: ServiceCardData[]` with the 6 entries from data-model.md (renewables, oil-gas, military, sacrificial-anodes, iccp, mgps)
- [x] T010 [P] Create static navigation data in `src/components/navigation/nav-data.ts` — export `navigationTree: NavigationTree` with all 7 top-level items and their children per data-model.md
- [x] T011 Create `src/app/globals.css` with CSS reset (box-sizing, margin/padding reset) and minimal body/html base styles — no colours, no fonts, no design tokens

**Checkpoint**: Foundation ready — all three user story phases can now begin in priority order.

---

## Phase 3: User Story 1 — Homepage renders all structural sections (Priority: P1) 🎯 MVP

**Goal**: The homepage renders five identifiable sections with placeholder content and zero
broken image indicators.

**Independent Test**: Run dev server, navigate to `/`. Confirm five named sections render
top-to-bottom with placeholder grey boxes in every image slot and no console errors.

### Tests for User Story 1 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T018

- [x] T012 [P] [US1] Write failing test for `PlaceholderImage` in `tests/components/ui/PlaceholderImage.test.tsx` — assert: renders a div with `role="img"`, `aria-label` equals the `label` prop, label text is visible, `aspectRatio` prop applies correct CSS
- [x] T013 [P] [US1] Write failing test for `ServiceCard` in `tests/components/ui/ServiceCard.test.tsx` — assert: renders heading with service name, renders description text, contains a `PlaceholderImage` with correct label
- [x] T014 [P] [US1] Write failing test for `Hero` in `tests/components/sections/Hero.test.tsx` — assert: contains a `PlaceholderImage` with label "Hero banner image", renders headline text, renders a CTA link/button
- [x] T015 [P] [US1] Write failing test for `ServicesGrid` in `tests/components/sections/ServicesGrid.test.tsx` — assert: renders exactly 6 `ServiceCard` components, each has a unique heading matching the 6 service names
- [x] T016 [P] [US1] Write failing test for `CompanyOverview` in `tests/components/sections/CompanyOverview.test.tsx` — assert: renders headline, renders body text, renders a CTA link/button
- [x] T017 [P] [US1] Write failing E2E test shell in `tests/e2e/homepage.spec.ts` — add `SC-001` (5 sections visible at 1280px) and `SC-002` (zero broken images) test cases; leave remaining SC test cases as stubs (`test.todo`)

### Implementation for User Story 1

- [x] T018 [P] [US1] Implement `PlaceholderImage` in `src/components/ui/PlaceholderImage.tsx` and `src/components/ui/PlaceholderImage.module.css` — grey background div, centred label text, `role="img"`, `aria-label`, `aspect-ratio` CSS property from prop
- [x] T019 [P] [US1] Implement `ServiceCard` in `src/components/ui/ServiceCard.tsx` and `src/components/ui/ServiceCard.module.css` — uses `PlaceholderImage` for icon slot, heading (`<h3>`), description paragraph
- [x] T020 [US1] Implement `Hero` section in `src/components/sections/Hero.tsx` and `src/components/sections/Hero.module.css` — full-width `PlaceholderImage` (16/9), headline `<h1>`, CTA `<a href="#">` (depends on T018)
- [x] T021 [US1] Implement `ServicesGrid` section in `src/components/sections/ServicesGrid.tsx` and `src/components/sections/ServicesGrid.module.css` — maps over `services` array from `src/data/services.ts`, renders a `ServiceCard` per entry in a grid layout (depends on T018, T019)
- [x] T022 [P] [US1] Implement `CompanyOverview` section in `src/components/sections/CompanyOverview.tsx` and `src/components/sections/CompanyOverview.module.css` — headline `<h2>`, subheading, body `<p>`, CTA `<a href="#">`, `PlaceholderImage` background slot
- [x] T023 [US1] Create root layout in `src/app/layout.tsx` — renders `<header>` placeholder and `<footer>` placeholder (real components added in US2/US3), wraps `{children}` in `<main>`
- [x] T024 [US1] Implement homepage in `src/app/page.tsx` — renders `<Hero />`, `<ServicesGrid />`, `<CompanyOverview />` in order (depends on T020, T021, T022)

**Checkpoint**: Navigate to `/`. Confirm Hero, ServicesGrid, and CompanyOverview render. All US1 tests pass. E2E SC-001 and SC-002 pass.

---

## Phase 4: User Story 2 — Navigation is present and structurally complete (Priority: P2)

**Goal**: The header displays all 7 nav items with interactive dropdowns on desktop and a
functional hamburger menu on mobile (< 768px).

**Independent Test**: Inspect the header. Confirm all 7 primary nav items. Click a dropdown
parent — it opens; click again — it closes. Resize to < 768px, confirm hamburger appears and
toggles the menu.

### Tests for User Story 2 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T029

- [x] T025 [P] [US2] Write failing test for `NavDropdown` in `tests/components/navigation/NavDropdown.test.tsx` — assert: button renders with item label, `aria-expanded="false"` initially, clicking opens children (`aria-expanded="true"`), clicking again closes, child links are rendered when open; clicking a second dropdown closes the first; clicking outside nav closes open dropdown
- [x] T026 [P] [US2] Write failing test for `Navigation` in `tests/components/navigation/Navigation.test.tsx` — assert: renders all 7 top-level nav labels, 4 items render as `NavDropdown`, hamburger button is present, clicking hamburger toggles mobile menu visibility
- [x] T027 [P] [US2] Write failing test for `Header` in `tests/components/layout/Header.test.tsx` — assert: renders logo placeholder, renders `Navigation`, renders phone and email contact placeholders
- [x] T028 [US2] Extend `tests/e2e/homepage.spec.ts` — implement SC-003 stub (all 7 nav items reachable in ≤ 2 interactions) and SC-004 stub (mobile menu opens/closes in 1 interaction at < 768px viewport)

### Implementation for User Story 2

- [x] T029 [P] [US2] Implement `NavDropdown` in `src/components/navigation/NavDropdown.tsx` and `src/components/navigation/NavDropdown.module.css` — `'use client'`; `useState(false)` for open state; `<button aria-expanded aria-haspopup="true">`; child `<ul>` conditionally rendered; click outside closes via `useEffect` + `document` listener; accepts `isOpen` + `onToggle` props to support mutual exclusivity from parent
- [x] T030 [US2] Implement `Navigation` in `src/components/navigation/Navigation.tsx` and `src/components/navigation/Navigation.module.css` — `'use client'`; `useState<string | null>` for `activeDropdown` (only one open at a time); renders `nav-data.ts` tree; leaf items as `<a>`, parent items as `<NavDropdown>`; hamburger `<button>` visible below 768px; horizontal nav hidden below 768px via CSS Module media query (depends on T029)
- [x] T031 [US2] Implement `Header` in `src/components/layout/Header.tsx` and `src/components/layout/Header.module.css` — logo `PlaceholderImage` (or text placeholder), `<Navigation />`, contact bar with phone + email placeholders (depends on T030)
- [x] T032 [US2] Update `src/app/layout.tsx` to replace placeholder `<header>` with `<Header />` component (depends on T031)

**Checkpoint**: All US1 and US2 tests pass. E2E SC-003 and SC-004 pass. Navigation fully interactive.

---

## Phase 5: User Story 3 — Footer renders contact and legal information (Priority: P3)

**Goal**: The footer displays contact details, ISO certification placeholder, and three legal links.

**Independent Test**: Scroll to the bottom of `/`. Confirm contact block (address, phone, email),
certification placeholder, copyright text, and three legal links are all present.

### Tests for User Story 3 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T035

- [x] T033 [US3] Write failing test for `Footer` in `tests/components/layout/Footer.test.tsx` — assert: renders address, phone, and email placeholder text, renders a `PlaceholderImage` with label containing "ISO", renders copyright text, renders exactly 3 legal links (Cookies Policy, Privacy Statement, Legal Notice)
- [x] T034 [US3] Extend `tests/e2e/homepage.spec.ts` — implement SC-005 (page has no layout-breaking issues at 320px, 768px, 1280px viewport widths using Playwright viewport resize)

### Implementation for User Story 3

- [x] T035 [US3] Implement `Footer` in `src/components/layout/Footer.tsx` and `src/components/layout/Footer.module.css` — contact block (address, phone, email), `PlaceholderImage` for ISO 9001 badge, copyright `<p>`, three `<a>` legal links (Cookies Policy `href="#"`, Privacy Statement `href="#"`, Legal Notice `href="#"`)
- [x] T036 [US3] Update `src/app/layout.tsx` to replace placeholder `<footer>` with `<Footer />` component (depends on T035)

**Checkpoint**: All user stories independently functional. All unit + E2E tests pass. Run `quickstart.md` validation steps 1–7.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, type safety, and documentation validation.

- [x] T037 [P] Create barrel export file `src/components/index.ts` — re-export all components from layout/, navigation/, sections/, and ui/
- [x] T038 [P] Run ESLint — `npm run lint`; resolve any `@typescript-eslint/no-explicit-any` or `jsx-a11y` violations
- [x] T039 [P] Run TypeScript strict check — `npx tsc --noEmit`; resolve any type errors
- [x] T040 [P] Run full test suite — `npm run test`; confirm all unit/component tests pass with zero failures
- [x] T041 [P] Run Playwright E2E suite — `npm run test:e2e`; confirm SC-001 through SC-005 all pass
- [x] T042 Run `quickstart.md` validation — manually follow all 7 steps; document any discrepancies

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Requires Phase 1 complete — blocks all user stories
- **US1 (Phase 3)**: Requires Phase 2 — no dependency on US2 or US3
- **US2 (Phase 4)**: Requires Phase 2 — no dependency on US3; integrates into US1 layout
- **US3 (Phase 5)**: Requires Phase 2 — no dependency on US2; integrates into US1 layout
- **Polish (Phase 6)**: Requires all user story phases complete

### User Story Dependencies

- **US1 (P1)**: Foundational only — fully independent
- **US2 (P2)**: Foundational only — updates `layout.tsx` from US1 (T032), but does not block US3
- **US3 (P3)**: Foundational only — updates `layout.tsx` from US1 (T036), but does not block US2

### Within Each User Story

- All test tasks MUST be written and confirmed failing before any implementation task begins
- PlaceholderImage (T018) must be implemented before Hero (T020), ServicesGrid (T021), Footer (T035)
- NavDropdown (T029) must be implemented before Navigation (T030)
- Navigation (T030) must be implemented before Header (T031)
- Header/Footer components must be implemented before layout.tsx is updated (T032, T036)

---

## Parallel Execution Examples

### Phase 3 — User Story 1

```bash
# Launch all US1 test writing tasks in parallel (T012-T016 before any implementation):
Task: "Write failing PlaceholderImage test" → tests/components/ui/PlaceholderImage.test.tsx
Task: "Write failing ServiceCard test"      → tests/components/ui/ServiceCard.test.tsx
Task: "Write failing Hero test"             → tests/components/sections/Hero.test.tsx
Task: "Write failing ServicesGrid test"     → tests/components/sections/ServicesGrid.test.tsx
Task: "Write failing CompanyOverview test"  → tests/components/sections/CompanyOverview.test.tsx

# After confirming all tests fail, launch parallel implementations (T018, T019, T022):
Task: "Implement PlaceholderImage" → src/components/ui/PlaceholderImage.tsx
Task: "Implement ServiceCard"      → src/components/ui/ServiceCard.tsx
Task: "Implement CompanyOverview"  → src/components/sections/CompanyOverview.tsx
```

### Phase 4 — User Story 2

```bash
# Launch all US2 test writing tasks in parallel:
Task: "Write failing NavDropdown test" → tests/components/navigation/NavDropdown.test.tsx
Task: "Write failing Navigation test"  → tests/components/navigation/Navigation.test.tsx
Task: "Write failing Header test"      → tests/components/layout/Header.test.tsx
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Write all US1 tests → confirm they fail → implement US1 components
4. **STOP AND VALIDATE**: Homepage renders all 5 section blocks, zero broken images, SC-001 and SC-002 pass
5. Demo to stakeholders if ready

### Incremental Delivery

1. Setup + Foundational → scaffolding ready
2. US1: Core sections → `Hero`, `ServicesGrid`, `CompanyOverview` on homepage → **MVP deployed**
3. US2: Navigation → interactive header with full nav tree → demo navigation IA
4. US3: Footer → complete page layout → ready for design phase handoff
5. Polish → full test suite green → branch ready to merge

---

## Notes

- **TDD is mandatory** (constitution Principle III). Tests written → confirmed failing → implement. No exceptions.
- `[P]` tasks involve different files with no incomplete dependencies — safe to parallelise
- `[Story]` label maps each task to a specific user story for traceability
- All CSS is via CSS Modules (`.module.css` colocated with each component) — no Tailwind, no global utility classes
- Navigation components use `'use client'` — all other components are React Server Components by default
- `href="#"` is the correct value for all links in this scaffold — routing is out of scope
