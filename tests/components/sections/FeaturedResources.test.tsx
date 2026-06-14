import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FeaturedResources from "@/components/sections/FeaturedResources";

describe("FeaturedResources", () => {
  it("renders the featured-resources section", () => {
    render(<FeaturedResources />);
    expect(document.querySelector("[data-section='featured-resources']")).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<FeaturedResources />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("renders exactly 4 resource links", () => {
    render(<FeaturedResources />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
  });

  it("renders a Downloads link", () => {
    render(<FeaturedResources />);
    expect(screen.getByRole("link", { name: "Downloads" })).toBeInTheDocument();
  });

  it("renders a Certifications link", () => {
    render(<FeaturedResources />);
    expect(screen.getByRole("link", { name: "Certifications" })).toBeInTheDocument();
  });
});
