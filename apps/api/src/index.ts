import "dotenv/config";
import { createDb } from "./db/kysely";
import { buildServer } from "./server";

const port = Number(process.env.PORT ?? 8080);
const host = process.env.HOST ?? "0.0.0.0";

const db = createDb();
const server = await buildServer(db);

await server.listen({ port, host });
server.log.info({ port, host }, "api listening");
