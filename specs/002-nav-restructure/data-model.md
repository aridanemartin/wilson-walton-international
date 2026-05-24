# Data Model: Website Navigation Restructure

**Branch**: `002-nav-restructure` | **Date**: 2026-05-24

---

## Entities

### NavigationTree (unchanged type, new data)

```typescript
// src/types/index.ts — no change to type
type NavigationTree = NavItem[]

interface NavItem {
  label: string       // display label
  href:  string       // URL or "#" for placeholder
  children?: NavItem[] // present on dropdown parents
}
```

**New tree shape** (7 top-level items, 5 with children):

| Top-level | Has dropdown | Child count |
|-----------|-------------|-------------|
| Home | No | — |
| Company | Yes | 3 |
| Solutions | Yes | 5 |
| Industries | Yes | 5 |
| Engineering | Yes | 4 |
| Resources | Yes | 4 |
| Contact | No | — |

---

### SolutionCardData (new)

```typescript
// src/types/index.ts
interface SolutionCardData {
  id:                    string   // kebab-case unique ID
  slug:                  string   // URL segment: /solutions/{slug}
  name:                  string   // display name
  shortDescription:      string   // card-level teaser (1–2 sentences)
  fullDescription:       string   // stub page intro paragraph
  imagePlaceholderLabel: string   // label for PlaceholderImage
}
```

**Instances** (5 solutions — `src/data/solutions.ts`):

| id | slug | name |
|----|------|------|
| `iccp-systems` | `iccp-systems` | ICCP Systems |
| `mgps-systems` | `mgps-systems` | MGPS Systems |
| `sacrificial-anodes` | `sacrificial-anodes` | Sacrificial Anodes |
| `corrosion-modeling` | `corrosion-modeling` | Corrosion Modeling |
| `technical-assistance` | `technical-assistance` | Technical Assistance |

---

### IndustryCardData (new)

```typescript
// src/types/index.ts
interface IndustryCardData {
  id:                    string     // kebab-case unique ID
  slug:                  string     // URL segment: /industries/{slug}
  name:                  string     // display name
  shortDescription:      string     // card-level teaser (1–2 sentences)
  imagePlaceholderLabel: string     // label for PlaceholderImage
  relevantSolutionSlugs: string[]   // slugs linking to canonical solution pages
}
```

**Instances** (5 industries — `src/data/industries.ts`):

| id | slug | name | relevantSolutionSlugs |
|----|------|------|-----------------------|
| `maritime` | `maritime` | Maritime | iccp-systems, mgps-systems, sacrificial-anodes, technical-assistance |
| `offshore-renewables` | `offshore-renewables` | Offshore Renewables | iccp-systems, sacrificial-anodes, corrosion-modeling, technical-assistance |
| `oil-gas` | `oil-gas` | Oil & Gas | iccp-systems, sacrificial-anodes, corrosion-modeling, technical-assistance |
| `ports-onshore` | `ports-onshore` | Ports & Onshore | iccp-systems, sacrificial-anodes, technical-assistance |
| `military` | `military` | Military | iccp-systems, mgps-systems, corrosion-modeling |

---

### HomepageSection (structural — no new type needed)

The homepage renders 6 ordered sections. Each is a React Server Component with colocated CSS Module. No shared wrapper type — each section accepts its own typed props from static data.

| order | component | data source |
|-------|-----------|-------------|
| 1 | `Hero` (updated) | inline props in `page.tsx` |
| 2 | `CoreSolutions` | `src/data/solutions.ts` |
| 3 | `IndustriesServed` | `src/data/industries.ts` |
| 4 | `WhyWilsonWalton` | inline static array in component |
| 5 | `FeaturedResources` | inline static array in component |
| 6 | `FinalCTA` | inline props in component |

---

### SolutionPageData (stub page — derived from SolutionCardData)

No new type. The `[slug]/page.tsx` receives `params.slug`, looks up the matching `SolutionCardData` from `src/data/solutions.ts`, and renders a stub page using `name`, `fullDescription`, and `imagePlaceholderLabel`. If slug not found → `notFound()`.

### IndustryPageData (stub page — derived from IndustryCardData + solutions cross-ref)

No new type. The `[slug]/page.tsx` receives `params.slug`, looks up the matching `IndustryCardData` from `src/data/industries.ts`, resolves `relevantSolutionSlugs` against `src/data/solutions.ts`, and renders a stub page with industry context + "Relevant Solutions" linked cards. If slug not found → `notFound()`.

---

## Relationships

```text
navigationTree
  └─ NavItem (Solutions children)
       └─ href: /solutions/{slug}
            └─ SolutionCardData  ←── src/data/solutions.ts
                 └─ slug matches /solutions/[slug]/page.tsx params

navigationTree
  └─ NavItem (Industries children)
       └─ href: /industries/{slug}
            └─ IndustryCardData  ←── src/data/industries.ts
                 └─ relevantSolutionSlugs[] → SolutionCardData slugs

Homepage
  ├─ CoreSolutions  → solutions[]     (all 5)
  ├─ IndustriesServed → industries[]  (all 5)
  └─ IndustryPage → relevant SolutionCardData[] (cross-linked, not duplicated in nav)
```
