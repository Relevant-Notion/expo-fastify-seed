#!/bin/sh
set -e

echo "Running database migrations..."
pnpm --filter api db:migrate

echo "Starting API dev server..."
exec pnpm --filter api dev
