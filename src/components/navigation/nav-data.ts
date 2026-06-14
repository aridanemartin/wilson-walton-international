import type { NavigationTree } from "@/types";

export const navigationTree: NavigationTree = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Quality & Certifications", href: "/company/quality-certifications" },
      { label: "News", href: "/company/news" },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "ICCP Systems", href: "/solutions/iccp-systems" },
      { label: "MGPS Systems", href: "/solutions/mgps-systems" },
      { label: "Sacrificial Anodes", href: "/solutions/sacrificial-anodes" },
      { label: "Corrosion Modeling", href: "/solutions/corrosion-modeling" },
      { label: "Technical Assistance", href: "/solutions/technical-assistance" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Maritime", href: "/industries/maritime" },
      { label: "Offshore Renewables", href: "/industries/offshore-renewables" },
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Ports & Onshore", href: "/industries/ports-onshore" },
      { label: "Military", href: "/industries/military" },
    ],
  },
  {
    label: "Engineering",
    href: "#",
    children: [
      { label: "Engineering & Consulting", href: "/engineering/consulting" },
      { label: "Corrosion Modeling", href: "/solutions/corrosion-modeling" },
      { label: "Commissioning & Technical Assistance", href: "/solutions/technical-assistance" },
      { label: "Inspections & Surveys", href: "/engineering/inspections-surveys" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Downloads", href: "/resources/downloads" },
      { label: "News", href: "/company/news" },
      { label: "Certifications", href: "/resources/certifications" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
