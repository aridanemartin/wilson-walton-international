import type { NavigationTree } from "@/types";

export const navigationTree: NavigationTree = [
  { label: "Home", href: "#" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "#" },
      { label: "News", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    label: "Products & Services",
    href: "#",
    children: [
      { label: "ICCP", href: "#" },
      { label: "MGPS", href: "#" },
      { label: "Sacrificial Anodes", href: "#" },
      { label: "Services", href: "#" },
    ],
  },
  {
    label: "Offshore",
    href: "#",
    children: [
      { label: "Overview", href: "#" },
      { label: "Renewables", href: "#" },
      { label: "Oil & Gas", href: "#" },
    ],
  },
  {
    label: "Maritime",
    href: "#",
    children: [
      { label: "Overview", href: "#" },
      { label: "ICCP", href: "#" },
      { label: "MGPS", href: "#" },
    ],
  },
  { label: "Corrosion Modeling", href: "#" },
  { label: "Engineering & Consulting", href: "#" },
  { label: "Downloads", href: "#" },
];
