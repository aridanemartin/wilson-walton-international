# Feature Specification: Website Scaffold — Wilson Walton International

**Feature Branch**: `001-website-scaffold`

**Created**: 2026-05-24

**Status**: Draft

**Input**: Recreate the structure of wilsonwaltoninternational.com/site/ in a simplified, design-free scaffold using only placeholder content and structured components.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — Homepage renders all structural sections (Priority: P1)

A developer opens the locally-running site and sees the full homepage laid out from top to bottom:
header, hero, services grid, company overview, and footer — each as a clearly identifiable block
with placeholder text and image slots, and no applied visual design.

**Why this priority**: This is the entire deliverable. Without a working homepage structure no
other story is meaningful.

**Independent Test**: Navigate to `/` in a browser. Confirm that five named sections render in
order — Header, Hero, Services, About, Footer — each containing its placeholder content with no
broken layout or missing sections.

**Acceptance Scenarios**:

1. **Given** the dev server is running, **When** I navigate to `/`, **Then** I see five sections
   rendered top-to-bottom: Header, Hero, Services, About, Footer.
2. **Given** the page is rendered, **When** I inspect any image slot, **Then** I see a
   placeholder block (grey box or text label) rather than a broken image.
3. **Given** the page is rendered, **When** I resize the viewport, **Then** all sections remain
   visible and no content overflows or collapses unexpectedly.

---

### User Story 2 — Navigation is present and structurally complete (Priority: P2)

A developer or stakeholder can see the full navigation hierarchy — primary links and their
dropdown groups — even though the links do not route to real pages yet.

**Why this priority**: The nav structure is needed before any interior pages are built; confirming
it matches the intended information architecture early prevents rework.

**Independent Test**: Inspect the Header. Confirm all seven primary nav items are present with
their correct child groups. Activate the mobile hamburger menu and confirm it opens and lists the
same items.

**Acceptance Scenarios**:

1. **Given** the page loads, **When** I look at the header, **Then** I see these primary nav
   items: Home, Company, Products & Services, Offshore, Maritime, Corrosion Modeling,
   Engineering & Consulting, Downloads.
2. **Given** a nav item has children (Company, Products & Services, Offshore, Maritime),
   **When** I click it (desktop) or tap it (mobile), **Then** a dropdown opens revealing its
   child links; clicking/tapping it again closes the dropdown.
3. **Given** a mobile-width viewport, **When** I tap the menu toggle, **Then** a menu opens
   listing all primary navigation items.
4. **Given** dropdown A is open, **When** I click dropdown B (a different parent nav item),
   **Then** dropdown A closes and dropdown B opens — only one dropdown is open at a time.
5. **Given** a dropdown is open, **When** I click anywhere outside the navigation element,
   **Then** the dropdown closes.

---

### User Story 3 — Footer renders contact and legal information (Priority: P3)

A developer can see the footer block with its three content groups — contact details, certification
badge placeholder, and legal links — so that the footer layout can be validated before real
content is wired up.

**Why this priority**: Footer is low-risk and independent; it can be built and verified in
isolation after the main homepage sections are done.

**Independent Test**: Scroll to the bottom of `/`. Confirm three groups are present: contact
block (address, phone, email), certification placeholder, and legal link list (Cookies Policy,
Privacy Statement, Legal Notice).

**Acceptance Scenarios**:

1. **Given** I scroll to the footer, **Then** I see a contact block containing address, phone,
   and email placeholders.
2. **Given** I look at the footer, **Then** I see a certification area with a placeholder for
   the ISO 9001 badge.
3. **Given** I look at the footer, **Then** I see three legal links: Cookies Policy, Privacy
   Statement, Legal Notice.

---

### Edge Cases

- What happens when the viewport is very narrow (< 320px)? Sections should not overflow
  horizontally.
- How does the services grid behave if a service card has unusually long placeholder text?
  Cards should remain equal-height within their row.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The homepage MUST render the following sections in order: Header (with navigation),
  Hero, Services Grid, Company Overview, Footer.
- **FR-002**: Every image slot across all sections MUST display a visible placeholder (a labelled
  grey block or equivalent) — no broken `<img>` tags or blank spaces.
- **FR-003**: The Header MUST contain the site logo placeholder, the primary navigation with all
  seven top-level items, and a contact bar (phone + email placeholders).
- **FR-004**: The navigation MUST expose interactive dropdown child groups for: Company (About
  Us, News, Contact), Products & Services (ICCP, MGPS, Sacrificial Anodes, Services), Offshore
  (Overview, Renewables, Oil & Gas), Maritime (Overview, ICCP, MGPS). Dropdowns MUST open on
  click (desktop) and tap (mobile) and close on a second interaction — they MUST NOT be
  permanently expanded or always hidden.
- **FR-005**: A mobile menu toggle (hamburger icon) MUST replace the horizontal navigation at
  viewports narrower than 768px. At 768px and above the full horizontal nav MUST be visible;
  below 768px the hamburger MUST be visible and the horizontal nav MUST be hidden.
- **FR-006**: The Hero section MUST contain one full-width image placeholder, a headline
  placeholder, and a CTA button placeholder.
- **FR-007**: The Services Grid MUST display exactly six service cards, each with an icon/image
  placeholder, a heading, and a short description placeholder. Service names: Renewables, Oil &
  Gas, Military, Sacrificial Anodes, ICCP, MGPS.
- **FR-008**: The Company Overview section MUST contain a headline placeholder, a body text
  placeholder, and a CTA button placeholder.
- **FR-009**: The Footer MUST contain a contact block (address, phone, email), a certification
  placeholder area (for ISO badge), copyright text, and three legal links.
- **FR-010**: Section boundaries MUST be distinguished only by a 1px separator line or by
  alternating section backgrounds between white and a single neutral grey — no colour palette,
  no font choices, no spacing tokens, no shadow or gradient values. Any CSS beyond this ceiling
  is a violation of this requirement.

### Key Entities

- **Page**: The homepage route (`/`). Single page for this feature.
- **Section**: A top-level layout block within the page (Header, Hero, ServicesGrid,
  CompanyOverview, Footer).
- **NavItem**: A navigation entry with an optional list of child NavItems.
- **ServiceCard**: A content card with image slot, heading, and description — one per service.
- **PlaceholderImage**: A visual element that occupies the space of a real image without
  rendering one — labelled with its intended content (e.g., "Hero image").

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All five homepage sections render on the first visit with no unhandled JavaScript
  errors (`console.error` output or uncaught exceptions) — `console.warn` output from Next.js
  dev tooling or React strict-mode is permitted and does not constitute a failure.
- **SC-002**: Every image slot across the page shows a visible placeholder — zero broken image
  indicators anywhere on the page.
- **SC-003**: All seven primary navigation items and their child groups are reachable via
  interaction in under 2 actions (click/hover).
- **SC-004**: The mobile navigation menu opens and closes within one interaction at any viewport
  width strictly below 768px; at 768px and above the hamburger is not shown.
- **SC-005**: The page can be audited without any layout-breaking visual issues at widths
  320px, 768px, and 1280px.

---

## Clarifications

### Session 2026-05-24

- Q: Should navigation dropdowns open/close interactively or be statically expanded? → A: Fully interactive — dropdowns open on click (desktop) and tap (mobile), close on second interaction.
- Q: At what viewport width should the hamburger menu replace the horizontal nav? → A: Below 768px — horizontal nav visible at ≥ 768px, hamburger shown and horizontal nav hidden below 768px.

---

## Assumptions

- This feature covers the homepage (`/`) only. Interior pages (About, Products, etc.) are out
  of scope and will be addressed in subsequent features.
- Navigation links may be `href="#"` or non-functional placeholders — actual routing is out of
  scope.
- No CMS integration is included in this feature; all content is hardcoded placeholder text.
- No animations, transitions, or hover effects are required beyond the minimum for the mobile
  menu toggle.
- Cookie consent banner is out of scope — it will be added as a separate feature when the
  consent management solution is decided.
- The placeholder image component will be a simple div with a grey background and a text label,
  not an external service or image file.
- The scaffold is not expected to pass accessibility audits at this stage; that will be addressed
  once real content and design are applied.
