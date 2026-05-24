/**
 * Contract: NavItem
 *
 * Represents a single navigation entry in the site header.
 * Items with `children` render as interactive dropdowns (open/close on click).
 * Items without `children` render as plain anchor links.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): NavDropdown and Navigation consume this type exclusively.
 *   - Principle IV (Type Safety): All nav data must conform to this interface.
 */
export interface NavItem {
  /** Display text shown in the navigation bar or dropdown. */
  label: string;

  /**
   * Link target. Use "#" for scaffold placeholders.
   * Will be replaced with real routes in a future feature.
   */
  href: string;

  /**
   * Child navigation items. When present, the item renders as a dropdown trigger.
   * Maximum one level of nesting — no nested dropdowns.
   */
  children?: NavItem[];
}

/**
 * The complete top-level navigation tree.
 * Exactly 7 items; 4 have children (Company, Products & Services, Offshore, Maritime).
 */
export type NavigationTree = NavItem[];
