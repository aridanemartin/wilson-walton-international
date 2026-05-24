import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Navigation from "@/components/navigation/Navigation";

const NAV_LABELS = [
  "Home",
  "Company",
  "Products & Services",
  "Offshore",
  "Maritime",
  "Corrosion Modeling",
  "Engineering & Consulting",
  "Downloads",
];

describe("Navigation", () => {
  it("renders all 7 top-level nav labels", () => {
    render(<Navigation />);
    NAV_LABELS.forEach((label) => {
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

  it("renders 4 dropdown triggers for parent nav items", () => {
    render(<Navigation />);
    const dropdownButtons = screen.getAllByRole("button").filter(
      (btn) => btn.getAttribute("aria-haspopup") === "true"
    );
    expect(dropdownButtons).toHaveLength(4);
  });
});
