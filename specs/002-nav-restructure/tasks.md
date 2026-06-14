---
description: "Task list for Website Navigation Restructure — Wilson Walton International"
---

# Tasks: Website Navigation Restructure — Wilson Walton International

**Input**: Design documents from `specs/002-nav-restructure/`

**Prerequisites**: plan.md ✅, spec.md ✅, data-model.md ✅, contracts/ ✅, research.md ✅, quickstart.md ✅

**Tests**: TDD is NON-NEGOTIABLE per constitution Principle III. Test tasks appear FIRST within each user story phase and MUST be confirmed failing before any implementation task in that phase begins.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Exact file paths are included in every task description

---

## Phase 1: Foundational (Blocking Prerequisites)

**Purpose**: Shared types and static data that every user story depends on. No project initialization needed — all tooling pre-configured from scaffold 001.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T001 Add `SolutionCardData` and `IndustryCardData` interfaces to `src/types/index.ts` — `SolutionCardData`: `{ id: string; slug: string; name: string; shortDescription: string; fullDescription: string; imagePlaceholderLabel: string }` — `IndustryCardData`: `{ id: string; slug: string; name: string; shortDescription: string; imagePlaceholderLabel: string; relevantSolutionSlugs: string[] }`
- [x] T002 [P] Create `src/data/solutions.ts` — export `solutions: SolutionCardData[]` with 5 entries using real text from research.md: ICCP Systems, MGPS Systems, Sacrificial Anodes, Corrosion Modeling, Technical Assistance (see plan.md Static Content section for exact strings)
- [x] T003 [P] Create `src/data/industries.ts` — export `industries: IndustryCardData[]` with 5 entries using real text: Maritime, Offshore Renewables, Oil & Gas, Ports & Onshore, Military with `relevantSolutionSlugs` per data-model.md (see plan.md Static Content section for exact strings)

**Checkpoint**: Types and data files ready — all four user story phases can now begin in priority order.

---

## Phase 2: User Story 1 — Visitor navigates to a solution page (Priority: P1) 🎯 MVP

**Goal**: The top nav Solutions dropdown lists all 5 solutions. Clicking any solution navigates to a canonical SSG page at `/solutions/{slug}` with real content. The Engineering dropdown is also updated in the same nav-data pass.

**Independent Test**: Open the nav Solutions dropdown — confirm 5 entries. Click "ICCP Systems" — confirm `/solutions/iccp-systems` loads with the text "Impressed Current Cathodic Protection". Open the Engineering dropdown — confirm 4 entries, none of which duplicate Solutions items.

### Tests for User Story 1 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T007

- [x] T004 [P] [US1] Update failing tests in `tests/components/navigation/Navigation.test.tsx` — replace old label assertions with new ones: 7 top-level items (Home, Company, Solutions, Industries, Engineering, Resources, Contact); 5 dropdown parents (Company, Solutions, Industries, Engineering, Resources); Solutions dropdown has exactly 5 children with labels ICCP Systems, MGPS Systems, Sacrificial Anodes, Corrosion Modeling, Technical Assistance; Engineering dropdown has exactly 4 children (Engineering & Consulting, Corrosion Modeling, Commissioning & Technical Assistance, Inspections & Surveys); no old labels (Products & Services, Offshore, Maritime) present
- [x] T005 [P] [US1] Write failing test for `CoreSolutions` in `tests/components/sections/CoreSolutions.test.tsx` — assert: `data-section="core-solutions"` present; renders exactly 5 cards; each card has a heading matching a solution name; each card renders description text; `ServiceCard` components used per contract
- [x] T006 [US1] Implement SC-003 stub in `tests/e2e/homepage.spec.ts` — replace `test.skip` with real test: navigate to `/`; open Solutions dropdown; assert all 5 solution labels visible; click "ICCP Systems"; assert `/solutions/iccp-systems` loads with heading "ICCP Systems"

### Implementation for User Story 1

- [x] T007 [US1] Update `src/components/navigation/nav-data.ts` — replace entire `navigationTree` export with new 7-item tree per plan.md (Home, Company/3, Solutions/5, Industries/5, Engineering/4, Resources/4, Contact) using exact labels and hrefs from plan.md Static Content section (depends T004 confirmed failing)
- [x] T008 [US1] Implement `CoreSolutions` in `src/components/sections/CoreSolutions.tsx` and `src/components/sections/CoreSolutions.module.css` — import `solutions` from `src/data/solutions.ts`; render `<section data-section="core-solutions">`; map solutions to `<ServiceCard>` with `name` as service name, `shortDescription` as description, `imagePlaceholderLabel` for image; CSS grid layout (depends T005 confirmed failing, T002)
- [x] T009 [US1] Create `src/app/solutions/[slug]/page.tsx` — `generateStaticParams` returns all 5 slugs from `solutions`; page renders `PlaceholderImage`, `<h1>` with solution `name`, `<p>` with `fullDescription`, CTA `<a href="/contact">Request technical information</a>`; call `notFound()` if slug not found (depends T001, T002)

**Checkpoint**: Solutions dropdown renders 5 items. `/solutions/iccp-systems` (and all 5 solution URLs) load with real content. Engineering dropdown has 4 correct entries. All US1 tests pass. E2E SC-003 passes.

---

## Phase 3: User Story 2 — Visitor identifies their industry (Priority: P2)

**Goal**: The Industries dropdown lists all 5 industries. Clicking any industry navigates to a canonical SSG page at `/industries/{slug}` with a "Relevant Solutions" section linking to canonical solution pages — no solution content duplicated in the industry nav.

**Independent Test**: Open Industries dropdown — confirm 5 entries. Click "Maritime" — confirm `/industries/maritime` loads with "Relevant Solutions" section containing links to `/solutions/iccp-systems`, `/solutions/mgps-systems`, `/solutions/sacrificial-anodes`, `/solutions/technical-assistance`. Confirm Maritime does NOT have ICCP or MGPS as nav children in the header dropdown.

### Tests for User Story 2 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T013

- [x] T010 [P] [US2] Write failing test for `IndustryCard` in `tests/components/ui/IndustryCard.test.tsx` — assert: renders heading with industry `name`; renders `shortDescription` text; renders `<a>` link with correct `href`; renders `PlaceholderImage` with correct `label`
- [x] T011 [P] [US2] Write failing test for `IndustriesServed` in `tests/components/sections/IndustriesServed.test.tsx` — assert: `data-section="industries-served"` present; renders exactly 5 `IndustryCard` components; each card has unique heading matching the 5 industry names
- [x] T012 [US2] Implement SC-004 E2E test in `tests/e2e/homepage.spec.ts` — replace `test.skip` with real test: resize viewport to 375px wide; click hamburger button; assert all 7 top-level nav labels visible; click hamburger again; assert menu closes

### Implementation for User Story 2

- [x] T013 [P] [US2] Implement `IndustryCard` in `src/components/ui/IndustryCard.tsx` and `src/components/ui/IndustryCard.module.css` — accepts `IndustryCardProps` (`name`, `shortDescription`, `imagePlaceholderLabel`, `href`); renders `PlaceholderImage` (4/3 aspect ratio), `<h3>` with name, `<p>` with shortDescription, `<a href={href}>` (depends T010 confirmed failing)
- [x] T014 [US2] Implement `IndustriesServed` in `src/components/sections/IndustriesServed.tsx` and `src/components/sections/IndustriesServed.module.css` — import `industries` from `src/data/industries.ts`; render `<section data-section="industries-served">`; map industries to `<IndustryCard>` with `href={'/industries/' + industry.slug}`; CSS grid layout (depends T011 confirmed failing, T013, T003)
- [x] T015 [US2] Create `src/app/industries/[slug]/page.tsx` — `generateStaticParams` returns all 5 industry slugs; page renders `PlaceholderImage`, `<h1>` with industry `name`, `<p>` with `shortDescription`, "Relevant Solutions" `<section>` that resolves `relevantSolutionSlugs` from `src/data/solutions.ts` and renders `<a href={'/solutions/' + slug}>` for each; call `notFound()` if slug not found (depends T001, T002, T003)

**Checkpoint**: Industries dropdown renders 5 items. All 5 `/industries/{slug}` pages load with real content and cross-links to solutions. Industries nav dropdown has NO solution names as children. All US2 tests pass. E2E SC-004 passes.

---

## Phase 4: User Story 3 — Visitor finds engineering capabilities (Priority: P3)

**Goal**: The Engineering dropdown shows specialist technical capabilities. This is structurally satisfied by the `nav-data.ts` update in US1 (T007). This phase validates the contract and ensures no regression.

**Independent Test**: Open Engineering dropdown — confirm exactly 4 entries (Engineering & Consulting, Corrosion Modeling, Commissioning & Technical Assistance, Inspections & Surveys). Confirm none of these 4 labels also appear as top-level nav items.

### Tests for User Story 3 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T016

- [x] T016 [US3] Verify `tests/components/navigation/Navigation.test.tsx` (from T004) includes assertion that Engineering dropdown has exactly 4 specific children — if not yet included, add the assertion now and confirm it fails; no implementation task needed beyond T007 (nav-data.ts already includes Engineering section)

### Implementation for User Story 3

*(No additional implementation required — Engineering dropdown content is fully covered by T007. US3 is complete once T007 passes and T016 assertion is confirmed passing.)*

**Checkpoint**: Engineering dropdown shows 4 specialist service entries. No solution product names duplicated as top-level nav items. All navigation tests pass.

---

## Phase 5: User Story 4 — Homepage renders updated section order (Priority: P4)

**Goal**: The homepage renders 6 sections in order: Hero (updated text), Core Solutions, Industries Served, Why Wilson Walton, Featured Resources, Final CTA. ServicesGrid and CompanyOverview are removed from the page render order.

**Independent Test**: Load `/`. Scroll top to bottom. Confirm sections in exact order: Hero with "Proven quality since 1966" headline, Core Solutions grid (5 cards), Industries Served grid (5 cards), Why Wilson Walton (5 trust points), Featured Resources (4 links), Final CTA. Confirm no ServicesGrid or CompanyOverview sections render.

### Tests for User Story 4 ⚠️ WRITE THESE FIRST — CONFIRM THEY FAIL BEFORE T021

- [x] T017 [P] [US4] Write failing test for `WhyWilsonWalton` in `tests/components/sections/WhyWilsonWalton.test.tsx` — assert: `data-section="why-wilson-walton"` present; renders heading; renders a list with exactly 5 trust-point items; first item contains "50+" text; one item contains "ISO 9001" text
- [x] T018 [P] [US4] Write failing test for `FeaturedResources` in `tests/components/sections/FeaturedResources.test.tsx` — assert: `data-section="featured-resources"` present; renders heading; renders exactly 4 links (Downloads, News, Certifications, Case Studies)
- [x] T019 [P] [US4] Write failing test for `FinalCTA` in `tests/components/sections/FinalCTA.test.tsx` — assert: `data-section="final-cta"` present; renders a heading; renders a CTA `<a>` link with text "Contact us" pointing to `/contact`
- [x] T020 [US4] Update E2E SC-001 in `tests/e2e/homepage.spec.ts` — replace `data-section='services'` and `data-section='about'` selectors with `data-section='core-solutions'`, `data-section='industries-served'`, `data-section='why-wilson-walton'`, `data-section='featured-resources'`, `data-section='final-cta'` — confirm updated test fails before Hero/page.tsx are changed

### Implementation for User Story 4

- [x] T021 [P] [US4] Implement `WhyWilsonWalton` in `src/components/sections/WhyWilsonWalton.tsx` and `src/components/sections/WhyWilsonWalton.module.css` — `<section data-section="why-wilson-walton">`; heading "Why Wilson Walton International"; `<ul>` with 5 trust points from plan.md: "50+ years…", "Global experience…", "In-house manufacturing…", "ISO 9001 certified…", "Dedicated technical support…" (depends T017 confirmed failing)
- [x] T022 [P] [US4] Implement `FeaturedResources` in `src/components/sections/FeaturedResources.tsx` and `src/components/sections/FeaturedResources.module.css` — `<section data-section="featured-resources">`; heading "Resources"; 4 `<a>` links: Downloads `href="/resources/downloads"`, News `href="/company/news"`, Certifications `href="/resources/certifications"`, Case Studies `href="/resources/case-studies"` (depends T018 confirmed failing)
- [x] T023 [P] [US4] Implement `FinalCTA` in `src/components/sections/FinalCTA.tsx` and `src/components/sections/FinalCTA.module.css` — `<section data-section="final-cta">`; heading "Request Technical Information"; `<p>` "With more than 50 years in corrosion engineering, we are ready to support your project."; `<a href="/contact">Contact us</a>` (depends T019 confirmed failing)
- [x] T024 [US4] Update `src/components/sections/Hero.tsx` — change headline to "Proven quality since 1966"; add subheading `<p>` "Cathodic protection and corrosion engineering for Maritime, Offshore & Onshore installations"; change CTA link text to "Contact us" with `href="/contact"`; add secondary CTA `<a href="#core-solutions">Explore solutions</a>` (depends T020 confirmed failing)
- [x] T025 [US4] Update `src/app/page.tsx` — remove `ServicesGrid` and `CompanyOverview` imports and JSX; import and render in order: `<Hero />`, `<CoreSolutions solutions={solutions} />`, `<IndustriesServed industries={industries} />`, `<WhyWilsonWalton />`, `<FeaturedResources />`, `<FinalCTA />` (depends T021, T022, T023, T024, T008, T014)

**Checkpoint**: All 6 homepage sections render in correct order with real text. ServicesGrid and CompanyOverview no longer on page. All US4 unit tests pass. E2E SC-001 and SC-002 pass.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, type safety, documentation validation, and E2E coverage.

- [x] T026 [P] Update barrel exports in `src/components/index.ts` — add exports for `IndustryCard`, `CoreSolutions`, `IndustriesServed`, `WhyWilsonWalton`, `FeaturedResources`, `FinalCTA`
- [x] T027 [P] Implement E2E SC-005 in `tests/e2e/homepage.spec.ts` — replace `test.skip` with real test: resize viewport to 320px, 768px, and 1280px sequentially; at each width assert header, core-solutions, industries-served, why-wilson-walton, featured-resources, and final-cta sections are visible with no overflow
- [x] T028 [P] Run TypeScript strict check — `npx tsc --noEmit`; resolve any `any` or type errors introduced by new interfaces or page components
- [x] T029 [P] Run ESLint — `npm run lint`; resolve any `@typescript-eslint/no-explicit-any` or `jsx-a11y` violations
- [x] T030 [P] Run full unit test suite — `npm run test`; confirm all tests pass with zero failures (includes updated Navigation.test.tsx and all new section/ui tests)
- [x] T031 [P] Run Playwright E2E — `npm run test:e2e`; confirm SC-001 through SC-005 all pass
- [x] T032 Run `npm run build` — verify all pages statically generated (○ symbol for `/`, `/solutions/[slug]` × 5, `/industries/[slug]` × 5); no build errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Foundational (Phase 1)**: No dependencies — start immediately; blocks all user stories
- **US1 (Phase 2)**: Requires Phase 1 complete — depends on T001, T002
- **US2 (Phase 3)**: Requires Phase 1 complete — depends on T001, T003
- **US3 (Phase 4)**: Requires US1 complete — Engineering nav content is part of T007
- **US4 (Phase 5)**: Requires US1 (T008 CoreSolutions) and US2 (T014 IndustriesServed) complete
- **Polish (Phase 6)**: Requires all user story phases complete

### Within Each User Story

- All test tasks MUST be written and confirmed failing before any implementation task begins
- `nav-data.ts` (T007) must be updated before any navigation assertions can pass
- `IndustryCard` (T013) must be implemented before `IndustriesServed` (T014)
- All new section components (T021–T024) must be implemented before `page.tsx` (T025)

---

## Parallel Execution Examples

### Phase 1 — Foundational

```bash
# Run in parallel (different files, no dependencies between them):
Task: "Add SolutionCardData, IndustryCardData to src/types/index.ts"          → T001
Task: "Create src/data/solutions.ts"                                            → T002
Task: "Create src/data/industries.ts"                                           → T003
```

### Phase 2 — User Story 1

```bash
# Write all US1 tests in parallel, confirm all fail, THEN implement:
Task: "Update Navigation.test.tsx"       → T004
Task: "Write CoreSolutions.test.tsx"     → T005
Task: "Implement SC-003 E2E stub"        → T006

# After all fail confirmed:
Task: "Update nav-data.ts"               → T007 (sequential — only after T004 fails confirmed)
Task: "Implement CoreSolutions"          → T008 (after T005 fails, T002 done)
Task: "Create /solutions/[slug]/page.tsx" → T009 (after T001, T002 done)
```

### Phase 5 — User Story 4

```bash
# Write all US4 tests in parallel:
Task: "Write WhyWilsonWalton.test.tsx"   → T017
Task: "Write FeaturedResources.test.tsx" → T018
Task: "Write FinalCTA.test.tsx"          → T019
Task: "Update E2E SC-001"                → T020

# Implement section components in parallel (after respective tests confirmed failing):
Task: "Implement WhyWilsonWalton"        → T021
Task: "Implement FeaturedResources"      → T022
Task: "Implement FinalCTA"               → T023
Task: "Update Hero text"                 → T024

# Then sequentially:
Task: "Update page.tsx section order"    → T025 (depends all above)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Foundational (T001–T003)
2. Write US1 tests → confirm failing → implement US1 (T004–T009)
3. **STOP AND VALIDATE**: Solutions dropdown works. `/solutions/iccp-systems` loads with real text. Engineering dropdown correct. SC-003 E2E passes.
4. Demo to stakeholders if ready.

### Incremental Delivery

1. Phase 1 → Types and data ready
2. US1 (P1) → Nav restructured, solution pages live → **MVP deployed**
3. US2 (P2) → Industry pages live, cross-linking model complete
4. US3 (P3) → Engineering section verified (free — covered by US1 nav-data)
5. US4 (P4) → Homepage updated with real content sections
6. Polish → Full test suite green → branch ready to merge

---

## Notes

- **TDD is mandatory** (constitution Principle III). Tests written → confirmed failing → implement. No exceptions.
- `[P]` tasks involve different files with no incomplete dependencies — safe to parallelise
- `ServicesGrid.tsx` and `CompanyOverview.tsx` are NOT deleted — they are removed from `page.tsx` only; their unit tests remain valid
- All new section components are React Server Components (no `'use client'`) — they have no client-side state
- `nav-data.ts` is a pure data file — its "test" is the `Navigation.test.tsx` assertions
- Real text content for all data files is specified verbatim in `specs/002-nav-restructure/plan.md` under "Static Content"
- All `href` values on stub pages use real slug paths (`/solutions/iccp-systems`) not `href="#"`
