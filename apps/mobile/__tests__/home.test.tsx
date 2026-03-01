import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import HomeScreen from "../app/index";

describe("HomeScreen", () => {
  it("renders welcome text", () => {
    render(<HomeScreen />);
    expect(screen.getByText("Welcome to your app")).toBeTruthy();
  });

  it("renders getting started card", () => {
    render(<HomeScreen />);
    expect(screen.getByText("Getting Started")).toBeTruthy();
  });
});
