import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServicesGrid from "@/components/sections/ServicesGrid";

const SERVICE_NAMES = ["Renewables", "Oil & Gas", "Military", "Sacrificial Anodes", "ICCP", "MGPS"];

describe("ServicesGrid", () => {
  it("renders exactly 6 service cards", () => {
    render(<ServicesGrid />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(6);
  });

  it("renders all 6 service names", () => {
    render(<ServicesGrid />);
    SERVICE_NAMES.forEach((name) => {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    });
  });
});
