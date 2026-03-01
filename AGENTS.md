# AGENTS.md — Expo + Fastify Seed

## Project Overview

Monorepo seed for API-backed Expo mobile apps with a Fastify backend.

## Architecture

- **apps/api** — Fastify REST API with Kysely + Postgres
- **apps/mobile** — Expo 54 + expo-router + NativeWind
- **apps/web** — Vite + React + Tailwind + shadcn/ui dashboard
- **packages/shared** — Zod schemas shared between API and clients
- **packages/ui** — React Native UI components with NativeWind

## Conventions

- pnpm workspaces with hoisted node_modules (for RN compatibility)
- TypeScript strict mode everywhere
- Vitest for testing, v8 for coverage
- Prettier + ESLint + lefthook for code quality
- Kysely file-based migrations in `apps/api/src/migrations/`
- Docker Compose for local Postgres

## Key Commands

```bash
pnpm dev              # (from any app directory)
pnpm test             # Run all tests
pnpm typecheck        # Type check all packages
pnpm lint             # Lint all packages
pnpm format           # Format all files
docker-compose up -d  # Start Postgres + API
```
