import { describe, expect, it } from "vitest";
import { userSchema, createUserInput } from "../schemas";

describe("userSchema", () => {
  it("validates a correct user", () => {
    const result = userSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      email: "test@example.com",
      name: "Test User",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = userSchema.safeParse({
      id: "550e8400-e29b-41d4-a716-446655440000",
      email: "not-an-email",
      name: "Test",
    });
    expect(result.success).toBe(false);
  });
});

describe("createUserInput", () => {
  it("validates create input", () => {
    const result = createUserInput.safeParse({
      email: "test@example.com",
      name: "Test User",
    });
    expect(result.success).toBe(true);
  });
});
