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

  it("renders a CTA link or button", () => {
    render(<Hero />);
    const cta = screen.getByRole("link") ?? screen.queryByRole("button");
    expect(cta).toBeInTheDocument();
  });
});
