export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export type NavigationTree = NavItem[];

export interface ServiceCardData {
  id: string;
  name: string;
  description: string;
  imagePlaceholderLabel: string;
}

export interface HeroData {
  imagePlaceholderLabel: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface CompanyOverviewData {
  headline: string;
  subheading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  imagePlaceholderLabel: string;
}

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface FooterData {
  email: string;
  phone: string;
  address: string;
  copyrightYear: number;
  legalLinks: FooterLegalLink[];
  certificationPlaceholderLabel: string;
}

export interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export interface SolutionCardData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  imagePlaceholderLabel: string;
}

export interface IndustryCardData {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  imagePlaceholderLabel: string;
  relevantSolutionSlugs: string[];
}
