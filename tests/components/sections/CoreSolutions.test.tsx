import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoreSolutions from "@/components/sections/CoreSolutions";
import { solutions } from "@/data/solutions";

describe("CoreSolutions", () => {
  it("renders the core-solutions section", () => {
    render(<CoreSolutions solutions={solutions} />);
    expect(document.querySelector("[data-section='core-solutions']")).toBeInTheDocument();
  });

  it("renders exactly 5 solution cards", () => {
    render(<CoreSolutions solutions={solutions} />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(5);
  });

  it("renders each solution name as a heading", () => {
    render(<CoreSolutions solutions={solutions} />);
    solutions.forEach(({ name }) => {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    });
  });

  it("renders each solution shortDescription", () => {
    render(<CoreSolutions solutions={solutions} />);
    solutions.forEach(({ shortDescription }) => {
      expect(screen.getByText(shortDescription)).toBeInTheDocument();
    });
  });
});
