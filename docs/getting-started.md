# Getting Started

## Prerequisites

- **Node.js** 20+
- **pnpm** 9.15+ (`corepack enable && corepack prepare pnpm@9.15.0 --activate`)
- **Docker** (for Postgres)
- **Expo CLI** (`npm i -g eas-cli` for EAS builds)

## Setup

```bash
# Clone the repo
git clone https://github.com/relevant-notion/expo-fastify-seed.git
cd expo-fastify-seed

# Install dependencies
pnpm install

# Start Postgres + API
docker-compose up -d

# Run the API standalone (without Docker)
cp apps/api/.env.example apps/api/.env
pnpm --filter api dev

# Run the mobile app
cp apps/mobile/.env.example apps/mobile/.env
pnpm --filter mobile dev

# Run the web dashboard
pnpm --filter web dev
```

## Running Tests

```bash
# All packages
pnpm test

# Specific package
pnpm --filter api test
pnpm --filter @seed/shared test
pnpm --filter @seed/ui test
```

## Database Migrations

```bash
# Run migrations
pnpm --filter api db:migrate

# Create a new migration
# Add a file in apps/api/src/migrations/ following the naming pattern: 002_description.ts
```

## Project Structure

See the [README](../README.md) for full project structure documentation.
