#!/usr/bin/env bash
set -e
echo "Running type check..."
npx tsc --noEmit
echo "Running production build..."
npx vite build
echo "CI verification complete: ALL GATES PASSED."
