# Feature Specification: Website Navigation Restructure

**Feature Branch**: `002-nav-restructure`

**Created**: 2026-05-24

**Status**: Draft

**Input**: User description: "Website Navigation Restructure — redesign the Wilson Walton International navigation and information architecture."

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Visitor navigates to a solution page (Priority: P1)

A prospective customer visiting the site wants to understand what ICCP Systems are and whether Wilson Walton International provides them. They scan the top-level navigation, find "Solutions", and land on a canonical solution page that covers overview, how it works, applications, and a CTA.

**Why this priority**: Solutions are the primary commercial entry point. If a visitor cannot quickly reach a canonical solution page, the lead generation funnel breaks immediately.

**Independent Test**: Navigate to the homepage. Open "Solutions" in the nav. Click "ICCP Systems". Confirm a single canonical page renders at `/solutions/iccp-systems` with sections: Overview, How It Works, Applications, Industries Served, CTA.

**Acceptance Scenarios**:

1. **Given** a visitor is on any page, **When** they click "Solutions" in the top nav, **Then** a dropdown lists all 5 solutions (ICCP Systems, MGPS Systems, Sacrificial Anodes, Corrosion Modeling, Technical Assistance).
2. **Given** a visitor clicks "ICCP Systems", **When** the page loads, **Then** they see a single canonical page — not a sub-menu of Overview / Applications / Related Products.
3. **Given** a visitor is on an industry page (e.g. Maritime), **When** they click "ICCP Systems" in the "Relevant Solutions" section, **Then** they are taken to `/solutions/iccp-systems` (the same canonical page, not a duplicated Maritime-specific version).

---

### User Story 2 — Visitor identifies their industry (Priority: P2)

A procurement engineer from a port operator visits the site to confirm the company serves their sector. They find "Industries" in the top nav, select "Ports & Onshore", and see a page that describes their industry context and links to relevant solutions — without duplicating full solution content.

**Why this priority**: Industry pages are the second most important entry point for B2B lead generation. They validate market fit before a prospect engages further.

**Independent Test**: Navigate to Industries > Ports & Onshore. Confirm the page contains an industry-context section and a "Relevant Solutions" section with links pointing to canonical solution pages (e.g. `/solutions/iccp-systems`), not to sub-pages under Maritime or Offshore.

**Acceptance Scenarios**:

1. **Given** a visitor clicks "Industries" in the top nav, **When** the dropdown opens, **Then** they see exactly 5 industries: Maritime, Offshore Renewables, Oil & Gas, Ports & Onshore, Military.
2. **Given** a visitor is on the Maritime industry page, **When** they look for ICCP information, **Then** they see a "Solutions for Maritime" section with links — they do NOT see ICCP as a child nav item under Maritime.
3. **Given** a visitor on an industry page clicks a solution link, **Then** they land on the canonical solution page (not a duplicated copy).

---

### User Story 3 — Visitor finds engineering capabilities (Priority: P3)

A technical buyer wants to understand the company's specialist engineering services (corrosion modeling, consulting, commissioning). They find "Engineering" in the top nav and see a clear set of technical capabilities.

**Why this priority**: Engineering is a key differentiator for Wilson Walton International in competitive bids, but it is secondary to solutions and industries for first-time visitors.

**Independent Test**: Click "Engineering" in the top nav. Confirm dropdown shows: Engineering & Consulting, Corrosion Modeling, Commissioning & Technical Assistance, Inspections & Surveys.

**Acceptance Scenarios**:

1. **Given** a visitor opens the Engineering dropdown, **When** they review the items, **Then** they see specialist services listed — not repeated product names already present under Solutions.
2. **Given** Corrosion Modeling appears under Engineering, **When** a visitor clicks it, **Then** they land on a canonical page and the same page is NOT also listed as a top-level nav item.

---

### User Story 4 — Visitor reaches homepage with updated section order (Priority: P4)

A first-time visitor lands on the homepage and immediately understands what the company does and who it serves, in the correct order: Hero → Core Solutions → Industries Served → Why Wilson Walton → Featured Resources → Final CTA.

**Why this priority**: Homepage reflects the new IA logic. It is lower priority than nav functionality itself but required for the full restructure to feel coherent.

**Independent Test**: Load the homepage. Confirm six sections appear in order: Hero, Core Solutions (5 solution cards), Industries Served (5 industry cards), Why Wilson Walton, Featured Resources, Final CTA. Confirm the old "Company Overview" section position is replaced.

**Acceptance Scenarios**:

1. **Given** a visitor loads `/`, **When** they scroll, **Then** they see sections in this order: Hero, Core Solutions, Industries Served, Why Wilson Walton, Featured Resources, Final CTA.
2. **Given** the Core Solutions section renders, **When** a visitor counts the cards, **Then** there are exactly 5 solution entries.
3. **Given** the Industries Served section renders, **When** a visitor counts the cards, **Then** there are exactly 5 industry entries.

---

### Edge Cases

- What happens if a visitor uses a browser bookmark to an old URL (e.g. `/maritime/iccp`)? → Old URLs should redirect to the new canonical page (`/solutions/iccp-systems`). Redirects are out of scope for this scaffold phase but URL structure must be correct.
- What happens if the Engineering section is later merged into Solutions? → The nav data structure must be defined such that Engineering items can be moved to Solutions without redesigning the component.
- How does the nav behave at < 768px (mobile)? → Hamburger menu must still work; all 6–7 top-level items must be reachable within 1 tap of the hamburger.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The top-level navigation MUST contain exactly 7 items in this order: Home, Company, Solutions, Industries, Engineering, Resources, Contact.
- **FR-002**: The Solutions dropdown MUST list exactly 5 items: ICCP Systems, MGPS Systems, Sacrificial Anodes, Corrosion Modeling, Technical Assistance.
- **FR-003**: The Industries dropdown MUST list exactly 5 items: Maritime, Offshore Renewables, Oil & Gas, Ports & Onshore, Military.
- **FR-004**: The Engineering dropdown MUST list exactly 4 items: Engineering & Consulting, Corrosion Modeling, Commissioning & Technical Assistance, Inspections & Surveys.
- **FR-005**: The Company dropdown MUST list: About Us, Quality & Certifications, News.
- **FR-006**: The Resources dropdown MUST list: Downloads, News, Certifications, Case Studies.
- **FR-007**: Contact MUST remain a top-level nav item with no dropdown (direct link).
- **FR-008**: Industry pages MUST NOT list ICCP, MGPS, or Sacrificial Anodes as child nav items; instead, they MUST contain a "Relevant Solutions" section that links to canonical solution pages.
- **FR-009**: Each of the 5 canonical solution pages MUST use the URL pattern `/solutions/{slug}` (e.g. `/solutions/iccp-systems`).
- **FR-010**: The homepage MUST render sections in this order: Hero, Core Solutions, Industries Served, Why Wilson Walton, Featured Resources, Final CTA.
- **FR-011**: The Core Solutions homepage section MUST render exactly 5 solution cards matching the Solutions nav items.
- **FR-012**: The Industries Served homepage section MUST render exactly 5 industry cards matching the Industries nav items.
- **FR-013**: The `nav-data.ts` file MUST be updated to reflect the new navigation tree; all existing navigation component logic (dropdown, hamburger) MUST continue to work without modification.
- **FR-014**: No solution name MUST appear as a navigation child under more than one top-level section (no duplication of ICCP under both Solutions and Maritime).

### Key Entities

- **NavItem**: A navigation node with label, href, and optional children array. The restructured tree has 7 top-level NavItems, 4 of which have children (Company, Solutions, Industries, Engineering, Resources).
- **SolutionCard**: Represents one of the 5 canonical solutions on the homepage Core Solutions section.
- **IndustryCard**: Represents one of the 5 industries on the homepage Industries Served section.
- **HomepageSection**: An ordered sequence of 6 named sections rendered on the homepage.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A visitor can reach any canonical solution page in at most 2 interactions from any page (1 click on Solutions nav + 1 click on solution name).
- **SC-002**: A visitor can reach any industry page in at most 2 interactions from any page.
- **SC-003**: Zero instances of the same solution name appearing as a dropdown child under more than one top-level nav section.
- **SC-004**: The homepage renders exactly 6 named sections in the specified order, verifiable by automated test.
- **SC-005**: The navigation renders correctly at 320px, 768px, and 1280px viewport widths with no layout-breaking issues.
- **SC-006**: All 7 top-level nav items are reachable within 1 interaction on mobile (hamburger open).

## Assumptions

- The existing navigation component architecture (NavDropdown, Navigation, Header) will be reused as-is; only `nav-data.ts` and homepage section data need to change.
- Canonical solution and industry pages are placeholder pages in this scaffold phase — full content and routing are out of scope.
- URL routing is not implemented in this scaffold; `href="#"` placeholder values are used for all solution and industry page links, except top-level nav items where slugs are defined in nav-data.
- The Engineering section is kept as a separate top-level nav item (not merged into Solutions) per the preferred structure.
- "News" appears under both Company and Resources — this is intentional duplication in the nav for discoverability; the same page is linked from both.
- The existing `ServicesGrid` and `CompanyOverview` homepage sections will be replaced by the new `CoreSolutions`, `IndustriesServed`, `WhyWilsonWalton`, `FeaturedResources`, and `FinalCTA` sections.
- The `Hero` section remains and its content is updated to reflect the new positioning (short statement + dual CTAs: Contact us / Explore solutions).
- All tests from the previous scaffold (US1–US3) that target existing component contracts remain valid; this feature extends the data layer and homepage sections without breaking existing components.
