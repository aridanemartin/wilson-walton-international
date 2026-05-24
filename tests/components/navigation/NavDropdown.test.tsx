import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import NavDropdown from "@/components/navigation/NavDropdown";
import type { NavItem } from "@/types";

const item: NavItem = {
  label: "Company",
  href: "#",
  children: [
    { label: "About Us", href: "#" },
    { label: "News", href: "#" },
  ],
};

describe("NavDropdown", () => {
  it("renders the trigger button with the item label", () => {
    render(<NavDropdown item={item} isOpen={false} onToggle={vi.fn()} />);
    expect(screen.getByRole("button", { name: /company/i })).toBeInTheDocument();
  });

  it("has aria-expanded=false when closed", () => {
    render(<NavDropdown item={item} isOpen={false} onToggle={vi.fn()} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "false");
  });

  it("has aria-expanded=true when open", () => {
    render(<NavDropdown item={item} isOpen={true} onToggle={vi.fn()} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("shows child links when open", () => {
    render(<NavDropdown item={item} isOpen={true} onToggle={vi.fn()} />);
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "News" })).toBeInTheDocument();
  });

  it("hides child links when closed", () => {
    render(<NavDropdown item={item} isOpen={false} onToggle={vi.fn()} />);
    expect(screen.queryByRole("link", { name: "About Us" })).not.toBeInTheDocument();
  });

  it("calls onToggle when button is clicked", async () => {
    const onToggle = vi.fn();
    render(<NavDropdown item={item} isOpen={false} onToggle={onToggle} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onToggle).toHaveBeenCalledOnce();
  });

  it("has aria-haspopup=true", () => {
    render(<NavDropdown item={item} isOpen={false} onToggle={vi.fn()} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-haspopup", "true");
  });
});
