import { describe, expect, it } from "vitest";
import { buildServer } from "../../server";

describe("healthRoutes", () => {
  it("GET /health returns 200 with { status: 'ok' }", async () => {
    const server = await buildServer();
    const res = await server.inject({ method: "GET", url: "/health" });
    expect(res.statusCode).toBe(200);
    expect(res.json()).toEqual({ status: "ok" });
    await server.close();
  });
});
