import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import IndustryCard from "@/components/ui/IndustryCard";

const mockProps = {
  name: "Maritime",
  shortDescription: "Naval vessels operating in ocean environments.",
  imagePlaceholderLabel: "Maritime — Naval Vessel Protection",
  href: "/industries/maritime",
};

describe("IndustryCard", () => {
  it("renders the industry name as a heading", () => {
    render(<IndustryCard {...mockProps} />);
    expect(screen.getByRole("heading", { name: "Maritime" })).toBeInTheDocument();
  });

  it("renders the shortDescription text", () => {
    render(<IndustryCard {...mockProps} />);
    expect(screen.getByText("Naval vessels operating in ocean environments.")).toBeInTheDocument();
  });

  it("renders a link with the correct href", () => {
    render(<IndustryCard {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/industries/maritime");
  });

  it("renders a PlaceholderImage with the correct label", () => {
    render(<IndustryCard {...mockProps} />);
    expect(
      screen.getByRole("img", { name: "Maritime — Naval Vessel Protection" })
    ).toBeInTheDocument();
  });
});
