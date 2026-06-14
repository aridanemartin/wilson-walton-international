# Quickstart: Website Scaffold — Wilson Walton International

**Branch**: `001-website-scaffold`

Use this guide to verify the scaffold is working correctly after implementation.

---

## Prerequisites

- Node.js 22 LTS installed (`.nvmrc` in repo root pins the version)
- `npm install` or `pnpm install` completed

## 1 — Run the dev server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Expected result**: Five sections visible top-to-bottom — Header, Hero, Services Grid,
Company Overview, Footer — each containing placeholder text and grey image boxes. No console
errors.

---

## 2 — Verify placeholder images

Scroll through the page. Every image slot (hero banner, 6 service card icons, company overview
background, ISO certification) MUST show a grey box with a text label. No broken image
indicators (`alt` text displayed as fallback, red border) should appear anywhere.

---

## 3 — Verify navigation (desktop)

At viewport ≥ 768px:

1. Confirm the horizontal nav bar shows: Home, Company, Products & Services, Offshore,
   Maritime, Corrosion Modeling, Engineering & Consulting, Downloads.
2. Click **Company** → dropdown opens showing: About Us, News, Contact.
3. Click **Company** again → dropdown closes.
4. Click **Products & Services** → dropdown shows: ICCP, MGPS, Sacrificial Anodes, Services.
5. Click elsewhere on the page → dropdown closes.
6. Confirm a hamburger icon is NOT visible at this viewport width.

---

## 4 — Verify navigation (mobile)

Resize the browser to < 768px (or use DevTools device emulation):

1. Confirm the horizontal nav is hidden.
2. Confirm a hamburger icon is visible.
3. Tap/click the hamburger → mobile menu opens listing all 7 primary items.
4. Tap/click the hamburger again → mobile menu closes.

---

## 5 — Run component tests

```bash
npm run test
# or
pnpm test
```

All tests MUST pass. Zero failures, zero skipped tests.

---

## 6 — Run E2E tests

```bash
npm run test:e2e
# or
pnpm test:e2e
```

Playwright runs `tests/e2e/homepage.spec.ts` covering SC-001 through SC-005.
All scenarios MUST pass at 320px, 768px, and 1280px viewport widths.

---

## 7 — Responsive spot check

Using DevTools, verify the page at:

| Width | Expected |
|-------|----------|
| 320px | All 5 sections visible, no horizontal overflow, hamburger shown |
| 768px | Horizontal nav visible, hamburger hidden, services grid readable |
| 1280px | Full desktop layout, all sections comfortably spaced |

---

## Validation complete

If all steps above pass, the scaffold is ready for the design phase. Proceed to `/speckit-tasks`
to generate the implementation task list.
