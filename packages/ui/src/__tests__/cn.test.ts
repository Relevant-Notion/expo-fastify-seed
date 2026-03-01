import { describe, expect, it } from "vitest";
import { cn } from "../lib/cn";

describe("cn", () => {
  it("merges multiple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes via objects", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles undefined inputs", () => {
    expect(cn("foo", undefined, "bar")).toBe("foo bar");
  });

  it("handles null inputs", () => {
    expect(cn("foo", null, "bar")).toBe("foo bar");
  });

  it("handles empty string inputs", () => {
    expect(cn("foo", "", "bar")).toBe("foo bar");
  });

  it("handles array inputs", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("returns empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});
