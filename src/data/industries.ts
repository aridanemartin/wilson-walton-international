import type { IndustryCardData } from "@/types";

export const industries: IndustryCardData[] = [
  {
    id: "maritime",
    slug: "maritime",
    name: "Maritime",
    shortDescription:
      "Naval vessels operating in ocean environments face significant corrosion challenges. Cathodic protection systems prevent corrosion before it causes expensive damage.",
    imagePlaceholderLabel: "Maritime — Naval Vessel Cathodic Protection",
    relevantSolutionSlugs: [
      "iccp-systems",
      "mgps-systems",
      "sacrificial-anodes",
      "technical-assistance",
    ],
  },
  {
    id: "offshore-renewables",
    slug: "offshore-renewables",
    name: "Offshore Renewables",
    shortDescription:
      "We develop turnkey engineering projects and design ICCP and sacrificial anode systems for offshore wind and floating renewable foundations.",
    imagePlaceholderLabel: "Offshore Renewables — Wind Turbine Foundation Protection",
    relevantSolutionSlugs: [
      "iccp-systems",
      "sacrificial-anodes",
      "corrosion-modeling",
      "technical-assistance",
    ],
  },
  {
    id: "oil-gas",
    slug: "oil-gas",
    name: "Oil & Gas",
    shortDescription:
      "Over forty years of experience designing, manufacturing, and producing galvanic anodes and cathodic protection systems for offshore oil & gas.",
    imagePlaceholderLabel: "Oil & Gas — Offshore Platform Cathodic Protection",
    relevantSolutionSlugs: [
      "iccp-systems",
      "sacrificial-anodes",
      "corrosion-modeling",
      "technical-assistance",
    ],
  },
  {
    id: "ports-onshore",
    slug: "ports-onshore",
    name: "Ports & Onshore",
    shortDescription:
      "Cathodic protection systems for piers, pipelines, storage tanks, industrial and civil structures across onshore and port environments.",
    imagePlaceholderLabel: "Ports & Onshore — Pipeline and Pier Protection",
    relevantSolutionSlugs: ["iccp-systems", "sacrificial-anodes", "technical-assistance"],
  },
  {
    id: "military",
    slug: "military",
    name: "Military",
    shortDescription:
      "We manufacture according to specific military regulations. Corrosion modeling determines vessel signatures allowing adjustments to ensure corrosion control.",
    imagePlaceholderLabel: "Military — Naval Vessel Corrosion Management",
    relevantSolutionSlugs: ["iccp-systems", "mgps-systems", "corrosion-modeling"],
  },
];
