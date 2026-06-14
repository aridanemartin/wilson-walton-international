<!--
SYNC IMPACT REPORT
==================
Version change: [TEMPLATE] → 1.0.0
Modified principles: n/a (initial ratification — all sections created from scratch)
Added sections:
  - Core Principles (5 principles)
  - Technology Constraints
  - Development Workflow
  - Governance
Removed sections: none
Templates reviewed:
  - .specify/templates/plan-template.md ✅ no changes required (Constitution Check gate is dynamic)
  - .specify/templates/spec-template.md ✅ no changes required (generic structure is appropriate)
  - .specify/templates/tasks-template.md ✅ no changes required (generic structure is appropriate)
  - .specify/templates/constitution-template.md ✅ source template, no changes required
Deferred items: none
-->

# Wilson Walton International Constitution

## Core Principles

### I. Component-First

All UI MUST be built as composable, reusable React/Next.js components. Every component must have a
single, clearly defined responsibility and be independently renderable without relying on global
application state. Components serving CMS-managed content (blog cards, banners, catalog tiles) MUST
be decoupled from their data source so they can be tested with mock data in isolation.

**Rationale**: Composable components reduce duplication, simplify testing, and make CMS schema
changes easier to propagate without touching unrelated UI.

### II. CMS-Driven Content

All user-editable content — blog articles, landing banners, and product catalogs — MUST originate
from Sanity. No dynamic content visible to end-users may be hardcoded in source files. Sanity
schemas are the single source of truth for content structure; TypeScript types for content MUST be
auto-generated from those schemas and MUST NOT be manually authored.

**Rationale**: Centralising content in the CMS empowers non-developers to update the site without
code changes and eliminates schema/type drift between the CMS and the frontend.

### III. Test-First (NON-NEGOTIABLE)

TDD is mandatory. The sequence is strictly enforced: tests written → user/team approval → tests
confirmed failing → implementation written to make tests pass → refactor. No production code may
be merged unless it was preceded by a failing test. The Red-Green-Refactor cycle is the only
accepted implementation workflow.

**Rationale**: Tests written after implementation have survival bias — they describe what the code
does, not what it should do. Test-first catches requirement misunderstandings before code is written.

### IV. Type Safety

TypeScript strict mode (`"strict": true`) MUST be enabled and maintained. The use of `any` is
prohibited unless accompanied by an inline comment explaining why no typed alternative exists.
Sanity GROQ query results MUST be typed via auto-generated schema types. All component props,
API responses, and CMS document shapes MUST have explicit TypeScript interfaces or types.

**Rationale**: Type safety is the primary defence against CMS schema evolution breaking the
frontend silently, and against component misuse across the codebase.

### V. Performance & Accessibility

Next.js static generation (SSG) or incremental static regeneration (ISR) MUST be used for all
CMS-backed pages; client-side fetching is only permitted for personalised or user-authenticated
content. Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms. All interactive UI MUST
meet WCAG 2.1 AA accessibility standards.

**Rationale**: Static delivery ensures fast time-to-first-byte without per-request server cost.
Accessibility is a baseline expectation for any public-facing site.

## Technology Constraints

- **Framework**: Next.js (App Router preferred for new pages; Pages Router only if migrating
  existing pages)
- **CMS**: Sanity v3 with auto-generated TypeScript types via `sanity typegen`
- **Language**: TypeScript with strict mode; no JavaScript source files in `src/`
- **Styling**: CSS Modules (Next.js built-in). No utility-class framework. Each component owns
  a colocated `Component.module.css` file. Sass/SCSS modules may be adopted in a future feature
  when design tokens are introduced.
- **Testing**: Unit/component tests via Vitest + React Testing Library; E2E via Playwright
- **Deployment**: TODO(DEPLOYMENT_TARGET): confirm hosting platform (Vercel recommended for
  Next.js) before first production deploy
- **Node version**: TODO(NODE_VERSION): pin a `.nvmrc` / `.node-version` in the repo root before
  the first CI pipeline is configured

## Development Workflow

- All features MUST be developed on a dedicated feature branch following the naming convention
  `###-short-description` (sequential numbering managed by `/speckit-git-feature`).
- Every pull request MUST include passing tests before review is requested. CI MUST block merge
  on test failures or TypeScript errors.
- Sanity schema changes MUST be accompanied by a `sanity typegen` run and the resulting type
  updates committed in the same PR.
- CMS content schema changes that are breaking (field renamed, removed, or type changed) MUST
  include a migration script or a documented manual migration step.
- Code review is required for all merges to `main`; self-merge is not permitted.

## Governance

This constitution supersedes all other development guidelines, README instructions, and verbal
agreements. Any amendment MUST:

1. Be proposed as a PR that modifies this file.
2. Include a version bump following semantic versioning:
   - **MAJOR** — principle removed, redefined, or governance fundamentally changed.
   - **MINOR** — new principle or section added, or material guidance expanded.
   - **PATCH** — clarification, wording, or typo fix.
3. Be approved by at least one other contributor before merge.
4. Re-run `/speckit-constitution` after merge to propagate changes to dependent templates.

All PRs and code reviews MUST verify compliance with the principles above. Complexity or
exceptions MUST be justified in the Complexity Tracking section of the relevant `plan.md`.

**Version**: 1.0.0 | **Ratified**: 2026-05-24 | **Last Amended**: 2026-05-24
