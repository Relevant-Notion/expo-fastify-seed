import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/button";

describe("Button", () => {
  it("renders with default variant and size classes", () => {
    render(<Button title="Click me" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-primary");
    expect(button.className).toContain("h-12");
  });

  it("renders title text", () => {
    render(<Button title="Submit" />);
    expect(screen.getByText("Submit")).toBeDefined();
  });

  it("renders children when no title", () => {
    render(
      <Button>
        <span>Custom child</span>
      </Button>,
    );
    expect(screen.getByText("Custom child")).toBeDefined();
  });

  it("applies secondary variant", () => {
    render(<Button title="Go" variant="secondary" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-secondary");
  });

  it("applies outline variant", () => {
    render(<Button title="Go" variant="outline" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("border");
    expect(button.className).toContain("bg-transparent");
  });

  it("applies ghost variant", () => {
    render(<Button title="Go" variant="ghost" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-transparent");
  });

  it("applies destructive variant", () => {
    render(<Button title="Go" variant="destructive" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-destructive");
  });

  it("applies sm size", () => {
    render(<Button title="Go" size="sm" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("h-10");
  });

  it("applies lg size", () => {
    render(<Button title="Go" size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("h-14");
  });

  it("applies disabled styling", () => {
    render(<Button title="Go" disabled />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("opacity-50");
  });

  it("uses text-foreground for outline variant text", () => {
    render(<Button title="Go" variant="outline" />);
    const text = screen.getByText("Go");
    expect(text.className).toContain("text-foreground");
  });

  it("uses text-foreground for ghost variant text", () => {
    render(<Button title="Go" variant="ghost" />);
    const text = screen.getByText("Go");
    expect(text.className).toContain("text-foreground");
  });

  it("uses text-primary-foreground for default variant text", () => {
    render(<Button title="Go" />);
    const text = screen.getByText("Go");
    expect(text.className).toContain("text-primary-foreground");
  });

  it("merges custom className", () => {
    render(<Button title="Go" className="mt-4" />);
    const button = screen.getByRole("button");
    expect(button.className).toContain("mt-4");
  });
});
