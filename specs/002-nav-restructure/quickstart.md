# Quickstart: Website Navigation Restructure

**Branch**: `002-nav-restructure` | **Date**: 2026-05-24

## Integration Scenarios

### Scenario 1 — New navigation tree renders all 7 top-level items

```
1. Run `npm run dev` and open http://localhost:3000
2. Inspect the header — count 7 top-level nav items:
   Home | Company | Solutions | Industries | Engineering | Resources | Contact
3. Click "Solutions" — dropdown shows exactly 5 items:
   ICCP Systems | MGPS Systems | Sacrificial Anodes | Corrosion Modeling | Technical Assistance
4. Click "Industries" — dropdown shows exactly 5 items:
   Maritime | Offshore Renewables | Oil & Gas | Ports & Onshore | Military
5. Click "Engineering" — dropdown shows exactly 4 items:
   Engineering & Consulting | Corrosion Modeling | Commissioning & Technical Assistance | Inspections & Surveys
6. Click "Contact" — no dropdown; direct link to /contact
7. PASS if: all counts match, no old labels (Products & Services, Offshore, Maritime as top-level) are visible
```

### Scenario 2 — Homepage renders 6 sections in correct order

```
1. Load http://localhost:3000
2. Scroll from top to bottom and confirm sections in this order:
   - Hero: headline "Proven quality since 1966", two CTAs (Contact us / Explore solutions)
   - Core Solutions: 5 solution cards (ICCP, MGPS, Sacrificial Anodes, Corrosion Modeling, Technical Assistance)
   - Industries Served: 5 industry cards (Maritime, Offshore Renewables, Oil & Gas, Ports & Onshore, Military)
   - Why Wilson Walton: 5 trust points (50+ years, global experience, manufacturing, ISO 9001, technical support)
   - Featured Resources: links to Downloads, Certifications, News, Case Studies
   - Final CTA: "Request technical information" call to action
3. PASS if: all 6 sections visible, correct order, no ServicesGrid or CompanyOverview sections visible
```

### Scenario 3 — Canonical solution page loads with real content

```
1. Click "ICCP Systems" from the Solutions dropdown (or navigate to /solutions/iccp-systems)
2. Confirm page renders with:
   - Heading: "ICCP Systems"
   - Body text includes: "Impressed Current Cathodic Protection"
   - PlaceholderImage visible
   - CTA present
3. Navigate to /solutions/sacrificial-anodes — confirm different page content loads
4. Navigate to /solutions/nonexistent — confirm 404 page
5. PASS if: all 5 solution URLs return content, unknown slug returns 404
```

### Scenario 4 — Industry page cross-links to solutions (no duplication)

```
1. Navigate to /industries/maritime
2. Confirm page renders:
   - Heading: "Maritime"
   - Industry description text
   - "Relevant Solutions" section with links to:
     /solutions/iccp-systems
     /solutions/mgps-systems
     /solutions/sacrificial-anodes
     /solutions/technical-assistance
3. Confirm ICCP Systems does NOT appear as a nav child under Industries > Maritime in the header dropdown
4. PASS if: cross-links present, no duplication in nav dropdown
```

### Scenario 5 — Mobile navigation (< 768px)

```
1. Resize browser to 320px wide (or use DevTools device emulation)
2. Confirm hamburger button is visible
3. Click hamburger — mobile menu opens showing all 7 top-level items
4. Click "Solutions" — all 5 children accessible
5. Click hamburger again — menu closes
6. PASS if: all 7 items reachable within 1 tap of hamburger
```

### Scenario 6 — All existing tests still pass

```bash
npm run test          # 40+ unit tests — zero failures expected
npx tsc --noEmit      # TypeScript strict — zero errors
npm run lint          # ESLint — zero violations
npm run build         # Next.js build — all pages SSG (○ static)
```

## Test Coverage Map

| Scenario | Unit test | E2E test |
|----------|-----------|----------|
| SC1: Nav 7 items | Navigation.test.tsx (updated) | SC-003 (implement) |
| SC2: Homepage 6 sections | page.test.tsx (new) | SC-001 (updated) |
| SC3: Solution pages | SolutionPage.test.tsx (new) | — |
| SC4: Industry cross-links | IndustryPage.test.tsx (new) | — |
| SC5: Mobile nav | Navigation.test.tsx (updated) | SC-004 (implement) |
| SC6: Regression | All existing tests unchanged | SC-002 (unchanged) |
