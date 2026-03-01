import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "../components/text";

describe("Text", () => {
  it("renders with default classes", () => {
    render(<Text>Hello</Text>);
    const text = screen.getByText("Hello");
    expect(text.className).toContain("text-base");
    expect(text.className).toContain("text-foreground");
  });

  it("renders children", () => {
    render(<Text>World</Text>);
    expect(screen.getByText("World")).toBeDefined();
  });

  it("merges custom className", () => {
    render(<Text className="text-xl font-bold">Styled</Text>);
    const text = screen.getByText("Styled");
    expect(text.className).toContain("text-xl");
    expect(text.className).toContain("font-bold");
  });
});
