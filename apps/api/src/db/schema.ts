// Kysely table typing (Postgres)
import type { Generated } from "kysely";

export interface UserTable {
  id: Generated<string>;
  email: string;
  name: string;
  created_at: Generated<Date>;
}

export interface DB {
  user: UserTable;
}
