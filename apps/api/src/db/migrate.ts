import "dotenv/config";
import { Migrator, FileMigrationProvider } from "kysely";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createDb } from "./kysely";

const db = createDb();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const migrationFolder = path.join(__dirname, "../migrations");

const provider = new FileMigrationProvider({
  fs,
  path,
  migrationFolder,
});

const migrator = new Migrator({ db, provider });

const { error, results } = await migrator.migrateToLatest();

for (const r of results ?? []) {
  console.log(`${r.status}: ${r.migrationName}`);
}

if (error) {
  console.error(error);
  process.exit(1);
}

await db.destroy();
