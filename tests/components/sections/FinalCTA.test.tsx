import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "@/components/sections/FinalCTA";

describe("FinalCTA", () => {
  it("renders the final-cta section", () => {
    render(<FinalCTA />);
    expect(document.querySelector("[data-section='final-cta']")).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<FinalCTA />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders a Contact us CTA link pointing to /contact", () => {
    render(<FinalCTA />);
    const link = screen.getByRole("link", { name: "Contact us" });
    expect(link).toHaveAttribute("href", "/contact");
  });
});
