# Data Model: Website Scaffold — Wilson Walton International

**Branch**: `001-website-scaffold` | **Date**: 2026-05-24

This feature has no database or persistent storage. The "data model" is the set of TypeScript
interfaces that define the shape of data flowing through the scaffold components. These interfaces
are deliberately shaped to match anticipated future Sanity CMS document/field types so that
swapping hardcoded placeholder data for live CMS queries requires no component refactoring.

---

## NavItem

Represents a single navigation entry. May contain children (one level deep for dropdowns).

```ts
interface NavItem {
  label: string;       // Display text, e.g. "Company"
  href: string;        // Link target; "#" for placeholder, real path when routing is added
  children?: NavItem[]; // Present on items with dropdowns; absent on leaf items
}
```

**Constraints**:
- `children` is one level deep only — no nested dropdowns in this feature.
- Items with `children` render as a `NavDropdown`; items without render as a plain link.
- Exactly 7 top-level items; exactly 4 have children.

**Static data** (`src/data/navigation.ts`):

| Label | Has children | Children |
|-------|-------------|----------|
| Home | No | — |
| Company | Yes | About Us, News, Contact |
| Products & Services | Yes | ICCP, MGPS, Sacrificial Anodes, Services |
| Offshore | Yes | Overview, Renewables, Oil & Gas |
| Maritime | Yes | Overview, ICCP, MGPS |
| Corrosion Modeling | No | — |
| Engineering & Consulting | No | — |
| Downloads | No | — |

---

## ServiceCardData

Represents one of the six service tiles in the Services Grid section.

```ts
interface ServiceCardData {
  id: string;                    // Stable unique key, e.g. "renewables"
  name: string;                  // Display heading, e.g. "Renewables"
  description: string;           // Short description placeholder text
  imagePlaceholderLabel: string; // Label shown inside PlaceholderImage, e.g. "Renewables icon"
}
```

**Static data** (`src/data/services.ts`) — 6 entries:

| id | name | description |
|----|------|-------------|
| `renewables` | Renewables | Turnkey engineering projects for offshore wind and solar |
| `oil-gas` | Oil & Gas | Turnkey engineering projects for offshore platforms |
| `military` | Military | Manufacture according to specific defence regulations |
| `sacrificial-anodes` | Sacrificial Anodes | Manufacture all types of sacrificial anodes |
| `iccp` | ICCP | Design and supply equipment for any cathodic protection application |
| `mgps` | MGPS | Design and supply marine growth prevention systems |

---

## PlaceholderImageProps

The `PlaceholderImage` component accepts these props to occupy an image slot visually.

```ts
interface PlaceholderImageProps {
  label: string;           // Text shown inside the box, e.g. "Hero image"
  aspectRatio?: string;    // CSS aspect-ratio value, e.g. "16/9" or "1/1". Default: "16/9"
  className?: string;      // Optional Tailwind classes for sizing overrides
}
```

---

## HeroData

Content shape for the Hero section (hardcoded for scaffold).

```ts
interface HeroData {
  imagePlaceholderLabel: string;  // e.g. "Hero banner image"
  headline: string;               // e.g. "Proven quality since 1966"
  ctaLabel: string;               // e.g. "Discover our services"
  ctaHref: string;                // "#" for scaffold
}
```

---

## CompanyOverviewData

Content shape for the Company Overview section (hardcoded for scaffold).

```ts
interface CompanyOverviewData {
  headline: string;               // e.g. "Perfection in every inch of our products"
  subheading: string;             // e.g. "More than 50 years of experience"
  body: string;                   // Short paragraph placeholder
  ctaLabel: string;               // e.g. "More about us"
  ctaHref: string;                // "#" for scaffold
  imagePlaceholderLabel: string;  // e.g. "Company overview background"
}
```

---

## FooterData

Content shape for the Footer section (hardcoded for scaffold).

```ts
interface FooterData {
  email: string;
  phone: string;
  address: string;
  copyrightYear: number;
  legalLinks: Array<{ label: string; href: string }>;
  certificationPlaceholderLabel: string;  // e.g. "ISO 9001 certification badge"
}
```

---

## State Model — Navigation

The Navigation component maintains two pieces of UI state (not persisted):

| State | Type | Description |
|-------|------|-------------|
| `mobileMenuOpen` | `boolean` | Whether the hamburger menu is open. Default: `false`. |
| `activeDropdown` | `string \| null` | The `label` of the currently open dropdown, or `null` if none. Default: `null`. |

**Transitions**:
- Hamburger toggle click → `mobileMenuOpen = !mobileMenuOpen`
- NavDropdown click (desktop) → `activeDropdown = item.label` if closed; `null` if already open
- Click outside nav → `activeDropdown = null`, `mobileMenuOpen = false`
- Viewport resize to ≥ 768px → `mobileMenuOpen = false` (prevent stale open state on resize)
