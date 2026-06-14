import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Navigation from "@/components/navigation/Navigation";

const TOP_LEVEL_LABELS = [
  "Home",
  "Company",
  "Solutions",
  "Industries",
  "Engineering",
  "Resources",
  "Contact",
];

const SOLUTIONS_CHILDREN = [
  "ICCP Systems",
  "MGPS Systems",
  "Sacrificial Anodes",
  "Corrosion Modeling",
  "Technical Assistance",
];

const ENGINEERING_CHILDREN = [
  "Engineering & Consulting",
  "Corrosion Modeling",
  "Commissioning & Technical Assistance",
  "Inspections & Surveys",
];

const OLD_LABELS = ["Products & Services", "Offshore", "Maritime", "Downloads"];

describe("Navigation", () => {
  it("renders all 7 top-level nav labels", () => {
    render(<Navigation />);
    TOP_LEVEL_LABELS.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("does not render old navigation labels", () => {
    render(<Navigation />);
    OLD_LABELS.forEach((label) => {
      expect(screen.queryByText(label)).not.toBeInTheDocument();
    });
  });

  it("renders 5 dropdown triggers for parent nav items", () => {
    render(<Navigation />);
    const dropdownButtons = screen.getAllByRole("button").filter(
      (btn) => btn.getAttribute("aria-haspopup") === "true"
    );
    expect(dropdownButtons).toHaveLength(5);
  });

  it("renders Solutions dropdown with 5 children when opened", async () => {
    render(<Navigation />);
    const solutionsBtn = screen.getByRole("button", { name: "Solutions" });
    await userEvent.click(solutionsBtn);
    SOLUTIONS_CHILDREN.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders Engineering dropdown with 4 children when opened", async () => {
    render(<Navigation />);
    const engBtn = screen.getByRole("button", { name: "Engineering" });
    await userEvent.click(engBtn);
    ENGINEERING_CHILDREN.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders a hamburger menu button", () => {
    render(<Navigation />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  it("toggles the mobile menu when hamburger is clicked", async () => {
    render(<Navigation />);
    const btn = screen.getByRole("button", { name: /menu/i });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });
});
