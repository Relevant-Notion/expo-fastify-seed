import Fastify from "fastify";
import type { Kysely } from "kysely";
import type { DB } from "./db/schema";
import { healthRoutes } from "./routes/health";

declare module "fastify" {
  interface FastifyInstance {
    db: Kysely<DB>;
  }
}

export async function buildServer(db?: Kysely<DB>) {
  const server = Fastify({
    logger: {
      level: process.env.LOG_LEVEL ?? "info",
    },
  });

  if (db) {
    server.decorate("db", db);
  }

  await server.register(healthRoutes, { prefix: "/health" });

  return server;
}
