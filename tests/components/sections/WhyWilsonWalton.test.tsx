import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhyWilsonWalton from "@/components/sections/WhyWilsonWalton";

describe("WhyWilsonWalton", () => {
  it("renders the why-wilson-walton section", () => {
    render(<WhyWilsonWalton />);
    expect(document.querySelector("[data-section='why-wilson-walton']")).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<WhyWilsonWalton />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders exactly 5 trust-point items", () => {
    render(<WhyWilsonWalton />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });

  it("renders a trust point mentioning 50+", () => {
    render(<WhyWilsonWalton />);
    expect(screen.getByText(/50\+/)).toBeInTheDocument();
  });

  it("renders a trust point mentioning ISO 9001", () => {
    render(<WhyWilsonWalton />);
    expect(screen.getByText(/ISO 9001/)).toBeInTheDocument();
  });
});
