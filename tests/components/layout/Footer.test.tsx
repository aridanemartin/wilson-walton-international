import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders address placeholder text", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-address")).toBeInTheDocument();
  });

  it("renders phone placeholder text", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-phone")).toBeInTheDocument();
  });

  it("renders email placeholder text", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-email")).toBeInTheDocument();
  });

  it("renders a PlaceholderImage for the ISO certification", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: /ISO/i })).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer-copyright")).toBeInTheDocument();
  });

  it("renders exactly 3 legal links", () => {
    render(<Footer />);
    const legalLinks = screen.getAllByRole("link").filter((link) =>
      ["Cookies Policy", "Privacy Statement", "Legal Notice"].includes(link.textContent ?? "")
    );
    expect(legalLinks).toHaveLength(3);
  });

  it("renders Cookies Policy link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Cookies Policy" })).toBeInTheDocument();
  });

  it("renders Privacy Statement link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Privacy Statement" })).toBeInTheDocument();
  });

  it("renders Legal Notice link", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Legal Notice" })).toBeInTheDocument();
  });
});
