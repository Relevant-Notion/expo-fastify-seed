import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardContent } from "../components/card";

describe("Card", () => {
  it("renders with base classes", () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId("card");
    expect(card.className).toContain("rounded-2xl");
    expect(card.className).toContain("border-border");
    expect(card.className).toContain("bg-card");
    expect(card.className).toContain("p-4");
  });

  it("renders children", () => {
    render(<Card>Hello</Card>);
    expect(screen.getByText("Hello")).toBeDefined();
  });

  it("merges custom className", () => {
    render(
      <Card data-testid="card" className="mt-8">
        Content
      </Card>,
    );
    const card = screen.getByTestId("card");
    expect(card.className).toContain("mt-8");
  });
});

describe("CardHeader", () => {
  it("renders with mb-3 class", () => {
    render(<CardHeader data-testid="header">Title</CardHeader>);
    const header = screen.getByTestId("header");
    expect(header.className).toContain("mb-3");
  });

  it("renders children", () => {
    render(<CardHeader>Header text</CardHeader>);
    expect(screen.getByText("Header text")).toBeDefined();
  });

  it("merges custom className", () => {
    render(
      <CardHeader data-testid="header" className="px-2">
        Title
      </CardHeader>,
    );
    const header = screen.getByTestId("header");
    expect(header.className).toContain("px-2");
  });
});

describe("CardContent", () => {
  it("renders children", () => {
    render(<CardContent>Body</CardContent>);
    expect(screen.getByText("Body")).toBeDefined();
  });

  it("merges custom className", () => {
    render(
      <CardContent data-testid="content" className="gap-4">
        Body
      </CardContent>,
    );
    const content = screen.getByTestId("content");
    expect(content.className).toContain("gap-4");
  });
});
