/**
 * Contract: IndustryCardData
 * Used by: IndustriesServed section, src/app/industries/[slug]/page.tsx
 */
export interface IndustryCardData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  imagePlaceholderLabel: string;
  /** Slugs of SolutionCardData entries relevant to this industry */
  relevantSolutionSlugs: string[];
}
