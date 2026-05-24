/**
 * Contract: ServiceCardData
 *
 * Represents one service tile in the Services Grid section.
 * Exactly 6 entries are required; order in the array determines render order.
 *
 * Future CMS note: this interface is shaped to align with a Sanity document type
 * of kind "service" — `id` maps to `_id`, `name` to a `title` field, etc.
 * Swapping static data for a GROQ query should require no component changes.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): ServiceCard receives this as its sole prop shape.
 *   - Principle IV (Type Safety): ServicesGrid data array must be typed as ServiceCardData[].
 */
export interface ServiceCardData {
  /** Stable unique identifier used as React key. E.g. "renewables". */
  id: string;

  /** Heading displayed on the card. E.g. "Renewables". */
  name: string;

  /** Short descriptive text. Placeholder copy for scaffold phase. */
  description: string;

  /** Label shown inside the PlaceholderImage component for the card icon slot. */
  imagePlaceholderLabel: string;
}
