import { type Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await sql`create extension if not exists "uuid-ossp";`.execute(db);

  await db.schema
    .createTable("user")
    .addColumn("id", "uuid", (c) =>
      c.primaryKey().defaultTo(sql`uuid_generate_v4()`),
    )
    .addColumn("email", "text", (c) => c.notNull().unique())
    .addColumn("name", "text", (c) => c.notNull())
    .addColumn("created_at", "timestamptz", (c) =>
      c.notNull().defaultTo(sql`now()`),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("user").ifExists().execute();
}
