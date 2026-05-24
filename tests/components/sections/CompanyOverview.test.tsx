import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CompanyOverview from "@/components/sections/CompanyOverview";

describe("CompanyOverview", () => {
  it("renders a headline", () => {
    render(<CompanyOverview />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders body text", () => {
    render(<CompanyOverview />);
    expect(screen.getByTestId("company-body")).toBeInTheDocument();
  });

  it("renders a CTA link", () => {
    render(<CompanyOverview />);
    expect(screen.getByRole("link", { name: /more about us/i })).toBeInTheDocument();
  });
});
