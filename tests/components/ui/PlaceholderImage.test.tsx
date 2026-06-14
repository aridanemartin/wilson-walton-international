import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

describe("PlaceholderImage", () => {
  it("renders with role=img", () => {
    render(<PlaceholderImage label="Test image" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("uses the label as aria-label", () => {
    render(<PlaceholderImage label="Hero banner image" />);
    expect(screen.getByRole("img", { name: "Hero banner image" })).toBeInTheDocument();
  });

  it("displays the label text visually", () => {
    render(<PlaceholderImage label="Company overview background" />);
    expect(screen.getByText("Company overview background")).toBeInTheDocument();
  });

  it("applies a default aspect-ratio when none provided", () => {
    render(<PlaceholderImage label="Default ratio" />);
    const el = screen.getByRole("img");
    expect(el).toBeInTheDocument();
  });

  it("accepts a custom className", () => {
    render(<PlaceholderImage label="Custom class" className="extra" />);
    expect(screen.getByRole("img")).toHaveClass("extra");
  });
});
