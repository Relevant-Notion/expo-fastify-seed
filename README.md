# expo-fastify-seed

A production-ready monorepo seed for building API-backed mobile apps with **Expo** and **Fastify**.

## Tech Stack

| Layer          | Technology                                                             |
| -------------- | ---------------------------------------------------------------------- |
| Mobile         | Expo 54, expo-router, NativeWind (Tailwind for RN)                     |
| API            | Fastify 5, Kysely (type-safe SQL), Postgres 16                         |
| Web Dashboard  | Vite, React 19, Tailwind CSS 4, shadcn/ui                              |
| Shared         | Zod schemas, shared UI components                                      |
| Tooling        | pnpm workspaces, TypeScript strict, Vitest, ESLint, Prettier, lefthook |
| CI/CD          | GitHub Actions (lint, test, typecheck), EAS Build                      |
| Infrastructure | Docker Compose (Postgres + API)                                        |

## Quick Start

```bash
# Clone
git clone https://github.com/relevant-notion/expo-fastify-seed.git
cd expo-fastify-seed

# Install
pnpm install

# Start Postgres + API (Docker)
docker-compose up -d

# Run mobile app
pnpm --filter mobile dev

# Run web dashboard
pnpm --filter web dev
```

## Project Structure

```
├── apps/
│   ├── api/              # Fastify REST API
│   │   ├── src/
│   │   │   ├── db/       # Kysely setup, schema, migrations runner
│   │   │   ├── migrations/  # Database migrations
│   │   │   ├── routes/   # Route handlers
│   │   │   ├── server.ts # Fastify server builder
│   │   │   └── index.ts  # Entry point
│   │   └── Dockerfile.dev
│   ├── mobile/           # Expo mobile app
│   │   ├── app/          # expo-router file-based routes
│   │   ├── src/          # Business logic, hooks, API calls
│   │   └── app.config.ts # Expo configuration
│   └── web/              # Vite + React web dashboard
│       └── src/
├── packages/
│   ├── shared/           # @seed/shared — Zod schemas
│   └── ui/               # @seed/ui — React Native UI components
├── docker-compose.yml    # Postgres + API dev environment
├── lefthook.yml          # Git hooks (format, lint, test)
└── .github/workflows/    # CI + EAS Build
```

## What's Included

- **Health check endpoint** — `GET /health` returns `{ status: "ok" }`
- **Users migration** — Example Kysely migration creating a `user` table
- **Shared schemas** — `userSchema` and `createUserInput` via Zod
- **UI components** — Button, Card, Input, Text with NativeWind styling
- **Tab layout** — Home + Settings tabs in mobile app
- **Web placeholder** — Dashboard landing page with shadcn/ui theming
- **Full test setup** — Vitest with coverage thresholds across all packages
- **Pre-commit hooks** — Format and lint checks via lefthook
- **CI pipeline** — GitHub Actions for lint, typecheck, and test
- **EAS Build workflow** — Triggered on mobile changes or manual dispatch
- **Docker dev environment** — One command to run Postgres + API

## How to Customize

### Rename packages

Replace `@seed/shared` and `@seed/ui` with your org name:

```bash
# Find and replace across all files
find . -type f -name '*.json' -o -name '*.ts' -o -name '*.tsx' | \
  xargs sed -i '' 's/@seed\//@yourorg\//g'
```

### Add an API route

1. Create `apps/api/src/routes/your-route.ts`
2. Register it in `apps/api/src/server.ts`
3. Add shared schemas in `packages/shared/src/schemas.ts`

### Add a mobile screen

1. Create `apps/mobile/app/your-screen.tsx` (expo-router file-based routing)
2. Add a tab in `apps/mobile/app/_layout.tsx` if needed

### Add a database migration

1. Create `apps/api/src/migrations/002_your_migration.ts`
2. Run `pnpm --filter api db:migrate`

### Update mobile app identity

Edit `apps/mobile/app.config.ts`:

- Change `name`, `slug`, `scheme`
- Update `bundleIdentifier` and `package`
- Add your EAS `projectId`

## Commands

| Command                        | Description              |
| ------------------------------ | ------------------------ |
| `pnpm install`                 | Install all dependencies |
| `pnpm test`                    | Run all tests            |
| `pnpm typecheck`               | Type check all packages  |
| `pnpm lint`                    | Lint all packages        |
| `pnpm format`                  | Format all files         |
| `pnpm format:check`            | Check formatting         |
| `docker-compose up -d`         | Start Postgres + API     |
| `pnpm --filter api dev`        | Run API with hot reload  |
| `pnpm --filter mobile dev`     | Start Expo dev server    |
| `pnpm --filter web dev`        | Start web dev server     |
| `pnpm --filter api db:migrate` | Run database migrations  |

## License

MIT
