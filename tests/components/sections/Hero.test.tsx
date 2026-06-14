import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "@/components/sections/Hero";

describe("Hero", () => {
  it("contains a PlaceholderImage with label 'Hero banner image'", () => {
    render(<Hero />);
    expect(screen.getByRole("img", { name: "Hero banner image" })).toBeInTheDocument();
  });

  it("renders a headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders a primary CTA link to /contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Contact us" })).toBeInTheDocument();
  });

  it("renders a secondary CTA link to explore solutions", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Explore solutions" })).toBeInTheDocument();
  });
});
