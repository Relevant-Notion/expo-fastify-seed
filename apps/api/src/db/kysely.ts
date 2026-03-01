import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import type { DB } from "./schema";

export function createDb() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: Number(process.env.PG_POOL_MAX ?? 10),
  });

  return new Kysely<DB>({
    dialect: new PostgresDialect({ pool }),
  });
}
