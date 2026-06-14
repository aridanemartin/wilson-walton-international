import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "@/components/layout/Header";

describe("Header", () => {
  it("renders a logo placeholder", () => {
    render(<Header />);
    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    render(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders phone contact placeholder", () => {
    render(<Header />);
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
  });

  it("renders email contact placeholder", () => {
    render(<Header />);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});
