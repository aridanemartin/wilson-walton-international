import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import IndustriesServed from "@/components/sections/IndustriesServed";
import { industries } from "@/data/industries";

describe("IndustriesServed", () => {
  it("renders the industries-served section", () => {
    render(<IndustriesServed industries={industries} />);
    expect(document.querySelector("[data-section='industries-served']")).toBeInTheDocument();
  });

  it("renders exactly 5 industry cards", () => {
    render(<IndustriesServed industries={industries} />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(5);
  });

  it("renders each industry name as a heading", () => {
    render(<IndustriesServed industries={industries} />);
    industries.forEach(({ name }) => {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    });
  });
});
