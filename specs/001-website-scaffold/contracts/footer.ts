/**
 * Contract: FooterData
 *
 * Content shape for the Footer section. Hardcoded for scaffold phase;
 * shaped to accept future Sanity document fields with no refactoring.
 *
 * Constitution alignment:
 *   - Principle I (Component-First): Footer receives this as its sole data shape.
 *   - Principle II (CMS-Driven Content): field names mirror anticipated Sanity schema.
 *   - Principle IV (Type Safety): legalLinks array is explicitly typed.
 */
export interface FooterLegalLink {
  /** Display label for the link. E.g. "Cookies Policy". */
  label: string;

  /** Link target. Use "#" for scaffold. */
  href: string;
}

export interface FooterData {
  /** Contact email placeholder. E.g. "info@example.com". */
  email: string;

  /** Contact phone placeholder. E.g. "+34 91 616 44 43". */
  phone: string;

  /** Physical address placeholder. */
  address: string;

  /** Copyright year shown in footer. E.g. 2026. */
  copyrightYear: number;

  /**
   * Legal navigation links. MUST contain exactly 3 entries:
   * Cookies Policy, Privacy Statement, Legal Notice.
   */
  legalLinks: FooterLegalLink[];

  /**
   * Label shown inside the PlaceholderImage for the certification badge slot.
   * E.g. "ISO 9001 certification badge".
   */
  certificationPlaceholderLabel: string;
}
