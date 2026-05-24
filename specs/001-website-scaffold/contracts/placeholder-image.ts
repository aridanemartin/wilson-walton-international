/**
 * Contract: PlaceholderImageProps
 *
 * Props for the PlaceholderImage primitive component.
 * Replaces every <img> or <Image> in the scaffold to prevent broken image
 * indicators and avoid external asset dependencies.
 *
 * Rendered as: <div role="img" aria-label={label}> with a grey background
 * and a centred text label. Swap for next/image when real assets are available.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): Single-responsibility UI primitive.
 *   - Principle V (Performance & Accessibility): role="img" + aria-label required.
 */
export interface PlaceholderImageProps {
  /**
   * Descriptive label shown visually inside the box AND used as aria-label.
   * Should describe the intended real image content. E.g. "Hero banner image".
   */
  label: string;

  /**
   * CSS aspect-ratio value controlling the box's proportions.
   * Defaults to "16/9" if omitted.
   * Examples: "1/1" (square), "4/3", "21/9" (cinematic).
   */
  aspectRatio?: string;

  /**
   * Optional extra CSS class name(s) for width, height, or margin overrides from
   * the consuming component's CSS Module. The component itself applies full-width
   * and the aspect-ratio by default via its own module CSS.
   */
  className?: string;
}
