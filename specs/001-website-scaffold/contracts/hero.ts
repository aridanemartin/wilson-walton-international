/**
 * Contract: HeroData
 *
 * Content shape for the Hero section. Hardcoded for scaffold phase;
 * shaped to accept future Sanity document fields with no refactoring.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): Hero receives this as its sole data shape.
 *   - Principle II (CMS-Driven Content): field names mirror anticipated Sanity schema
 *     (headline → title field, ctaLabel → cta.label, ctaHref → cta.href).
 *   - Principle IV (Type Safety): no optional fields left untyped.
 */
export interface HeroData {
  /** Label shown inside the PlaceholderImage for the full-width banner slot. */
  imagePlaceholderLabel: string;

  /** Primary heading text. E.g. "Proven quality since 1966". */
  headline: string;

  /** Call-to-action button/link label. E.g. "Discover our services". */
  ctaLabel: string;

  /** Call-to-action link target. Use "#" for scaffold. */
  ctaHref: string;
}
