import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServiceCard from "@/components/ui/ServiceCard";

const mockCard = {
  id: "renewables",
  name: "Renewables",
  description: "Turnkey engineering projects for offshore wind.",
  imagePlaceholderLabel: "Renewables service icon",
};

describe("ServiceCard", () => {
  it("renders the service name as a heading", () => {
    render(<ServiceCard {...mockCard} />);
    expect(screen.getByRole("heading", { name: "Renewables" })).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<ServiceCard {...mockCard} />);
    expect(screen.getByText("Turnkey engineering projects for offshore wind.")).toBeInTheDocument();
  });

  it("contains a PlaceholderImage with the correct label", () => {
    render(<ServiceCard {...mockCard} />);
    expect(screen.getByRole("img", { name: "Renewables service icon" })).toBeInTheDocument();
  });
});
