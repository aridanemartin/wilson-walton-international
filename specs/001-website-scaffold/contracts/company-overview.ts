/**
 * Contract: CompanyOverviewData
 *
 * Content shape for the Company Overview section. Hardcoded for scaffold phase;
 * shaped to accept future Sanity document fields with no refactoring.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): CompanyOverview receives this as its sole data shape.
 *   - Principle II (CMS-Driven Content): field names mirror anticipated Sanity schema.
 *   - Principle IV (Type Safety): all fields explicitly typed, no implicit any.
 */
export interface CompanyOverviewData {
  /** Primary heading. E.g. "Perfection in every inch of our products". */
  headline: string;

  /** Supporting subheading. E.g. "More than 50 years of experience". */
  subheading: string;

  /** Body paragraph placeholder text. */
  body: string;

  /** Call-to-action label. E.g. "More about us". */
  ctaLabel: string;

  /** Call-to-action link target. Use "#" for scaffold. */
  ctaHref: string;

  /** Label shown inside the PlaceholderImage for the section background/image slot. */
  imagePlaceholderLabel: string;
}
