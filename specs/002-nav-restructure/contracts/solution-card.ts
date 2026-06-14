/**
 * Contract: SolutionCardData
 * Used by: CoreSolutions section, src/app/solutions/[slug]/page.tsx
 */
export interface SolutionCardData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imagePlaceholderLabel: string;
}
