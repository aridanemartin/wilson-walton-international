# Research: Website Navigation Restructure

**Branch**: `002-nav-restructure` | **Date**: 2026-05-24 | **Spec**: [spec.md](./spec.md)

---

## Decision 1 — Nav Data Structure: Reuse Existing Types Unchanged

**Decision**: Reuse `NavItem` and `NavigationTree` from `src/types/index.ts` without modification. Only `nav-data.ts` changes — the exported `navigationTree` array is replaced with the new 7-item tree.

**Rationale**: The existing `NavItem` interface (`label`, `href`, `children?`) is already general enough to represent any tree. `Navigation.tsx` and `NavDropdown.tsx` iterate dynamically — they have no hardcoded label counts. The new tree has 5 dropdown parents (Company, Solutions, Industries, Engineering, Resources) vs. the scaffold's 4, which the component handles transparently.

**Alternatives considered**: Adding a `slug` field to `NavItem` for route generation — rejected; href values already carry the slug and adding a separate field would couple the nav type to URL strategy. Adding `icon` or `description` for mega-menu — deferred; not in spec scope.

---

## Decision 2 — Homepage Sections: New Server Components with Own CSS Modules

**Decision**: Five new React Server Components in `src/components/sections/`: `CoreSolutions`, `IndustriesServed`, `WhyWilsonWalton`, `FeaturedResources`, `FinalCTA`. Each has a colocated CSS Module. `ServiceCard` is reused inside `CoreSolutions`. A new `IndustryCard` primitive is added in `src/components/ui/`. `ServicesGrid` and `CompanyOverview` are removed from `page.tsx` but their component files are NOT deleted.

**Rationale**: Follows the existing section pattern (Hero + Hero.module.css). Each section has a distinct visual contract. RSC by default — no `'use client'` unless state is needed.

**Alternatives considered**: Generic `CardGrid` wrapper — premature; the two grids may diverge in layout. Extending `CompanyOverview` — rejected; semantically different sections.

---

## Decision 3 — Solution/Industry Stub Pages: App Router Dynamic Routes [slug]

**Decision**: `src/app/solutions/[slug]/page.tsx` with `generateStaticParams` for 5 solutions. `src/app/industries/[slug]/page.tsx` with `generateStaticParams` for 5 industries. Both SSG via static params.

**Rationale**: Single file per group, all statically generated at build time. Satisfies FR-009 URL pattern (`/solutions/{slug}`). Spec assumption confirms these are stub pages in this phase.

**Alternatives considered**: Individual static files (10 near-identical files) — rejected; poor maintainability. Catch-all routes — rejected; URL depth is fixed at one level.

---

## Decision 4 — Card Data Types: New Types in `src/types/index.ts`, Data in `src/data/`

**Decision**: `SolutionCardData` and `IndustryCardData` defined in `src/types/index.ts`. Static arrays in `src/data/solutions.ts` and `src/data/industries.ts`. Both carry real text from the live site.

**Rationale**: Follows the `ServiceCardData` / `src/data/services.ts` pattern exactly. Types centrally discoverable; data files keep components pure and testable.

`SolutionCardData`: `id`, `slug`, `name`, `shortDescription`, `fullDescription`, `imagePlaceholderLabel`.
`IndustryCardData`: `id`, `slug`, `name`, `shortDescription`, `imagePlaceholderLabel`, `relevantSolutionSlugs: string[]`.

**Alternatives considered**: Separate type files — rejected; single `src/types/index.ts` is the established convention. Reusing `ServiceCardData` — rejected; lacks `slug` and `fullDescription` fields needed for canonical pages.

---

## Decision 5 — Real Text Content: Populate from Live Site

**Decision**: Use real text from wilsonwaltoninternational.com in all static data files and stub page templates. No lorem ipsum. Images remain as PlaceholderImage with descriptive labels.

**Rationale**: The user explicitly requested "add the information of the website in these pages (only texts no images)". Real content makes the scaffold immediately demonstrable to stakeholders without a CMS.

**Content source**: Fetched from https://wilsonwaltoninternational.com/site/ on 2026-05-24.

**Real content to use**:

### Company tagline & identity
- Tagline: "Proven quality since 1966"
- Body: "With more than 50 years in the world of corrosion, Wilson Walton International, S.A., specializes in the design and manufacture of Cathodic Protection equipments and services against corrosion. Its activity focuses on the design, engineering, manufacture, sale and control of Cathodic Protection systems for use in Maritime, Offshore & Onshore installations."
- Contact phone: +34 91 616 44 43
- Contact email: info@wilsonwaltoninternational.com
- Address: Calle Anabel Segura, 10. 3ª Planta, 28108 - Alcobendas / Madrid - Spain
- Certification: ISO 9001
- Copyright: © 2023 Wilson Walton International S.A. All Rights Reserved

### Solutions (shortDescription → card text; fullDescription → stub page intro)
1. **ICCP Systems** — Short: "WWI designs impressed current cathodic protection equipment for any type of application." Full: "Impressed Current Cathodic Protection (ICCP) systems use hull-mounted anodes and reference cells connected to control processing units that generate external current, suppressing electrochemical activity on wetted hull surfaces and preventing aggressive corrosion formation where dissimilar metals meet."
2. **MGPS Systems** — Short: "The WWI marine growth prevention system eliminates blockages from bio-fouling using electrolytic principles without chemicals." Full: "The system uses pairs of copper and aluminium electrodes mounted in seachests or strainers. Copper electrodes produce ions that prevent mussel and barnacle larvae from settling. Aluminium anodes create aluminium hydroxide, which flocculates copper and builds protective films on pipe surfaces."
3. **Sacrificial Anodes** — Short: "We manufacture all types of aluminium and zinc alloy anodes for any industry." Full: "Wilson Walton International pioneered manufacturing sacrificial anodes using premium raw materials. Aluminum and zinc alloys are patented and registered for over 50 years, recognised globally. Design, manufacturing, installation, and shipping services available for offshore and onshore industries."
4. **Corrosion Modeling** — Short: "We offer cathodic protection models for all types of structures and pipelines." Full: "Our engineers specialise in corrosion and cathodic protection using various software to simulate diverse structures. Computer modeling combines environmental chemistry, material properties, and electrochemical processes to identify metal surfaces suffering from corrosion or excessive protection in 2D or 3D dimensions."
5. **Technical Assistance** — Short: "Specialised engineers in corrosion, naval architecture, marine engineering and structural fields." Full: "Proper cathodic protection design ensures full coverage throughout a structure's lifespan, whether new construction, retrofit modifications, or life extension projects. The team has experience from deep water to onshore facilities, including case studies and R&D."

### Industries (shortDescription → card text)
1. **Maritime** — "Naval vessels operating in ocean environments face significant corrosion challenges. Cathodic protection systems prevent corrosion before it causes expensive damage."
2. **Offshore Renewables** — "We develop turnkey engineering projects and design ICCP and sacrificial anode systems for offshore wind and floating renewable foundations."
3. **Oil & Gas** — "Over forty years of experience designing, manufacturing, and producing galvanic anodes and cathodic protection systems for offshore oil & gas."
4. **Ports & Onshore** — "Cathodic protection systems for piers, pipelines, storage tanks, industrial and civil structures across onshore and port environments."
5. **Military** — "We manufacture according to specific military regulations. Corrosion modeling determines vessel signatures allowing adjustments to ensure corrosion control."

### Why Wilson Walton (homepage section)
Points:
- "50+ years of engineering expertise in corrosion and cathodic protection"
- "Global experience across Maritime, Offshore, and Onshore sectors"
- "In-house manufacturing of ICCP, MGPS, and sacrificial anode systems"
- "ISO 9001 certified — proven quality since 1966"
- "Dedicated technical support and field commissioning teams"

### Hero section (updated)
- Headline: "Proven quality since 1966"
- Subheading: "Cathodic protection and corrosion engineering for Maritime, Offshore & Onshore installations"
- Primary CTA: "Contact us"
- Secondary CTA: "Explore solutions"

---

## Decision 6 — Existing Test Coverage: Targeted Updates Required

**Decision**: Update `Navigation.test.tsx` to reflect 7 new top-level labels and 5 dropdown parents. Update `Homepage.spec.ts` E2E to use new `data-section` values. All other existing tests remain unchanged.

**Rationale**: `Navigation.test.tsx` hardcodes label assertions from `nav-data.ts`. When the data changes, the test must change first (TDD order). `NavDropdown.test.tsx` uses a local mock NavItem — unaffected. Section component tests remain valid (component files not deleted).

**TDD order**: For each changed test file: (1) update test to new contract, (2) confirm failing, (3) implement change, (4) confirm passing.
