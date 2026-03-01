import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "../components/input";

describe("Input", () => {
  it("renders with base styling classes", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input.className).toContain("h-12");
    expect(input.className).toContain("rounded-xl");
    expect(input.className).toContain("border-border");
  });

  it("sets placeholderTextColor", () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId("input");
    expect(input.getAttribute("placeholdertextcolor")).toBe("#6B7280");
  });

  it("merges custom className", () => {
    render(<Input data-testid="input" className="w-full" />);
    const input = screen.getByTestId("input");
    expect(input.className).toContain("w-full");
  });

  it("passes through props", () => {
    render(<Input data-testid="input" placeholder="Enter name" />);
    const input = screen.getByTestId("input");
    expect(input.getAttribute("placeholder")).toBe("Enter name");
  });
});
