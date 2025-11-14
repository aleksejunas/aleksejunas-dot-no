#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

usage() {
  cat <<'EOF'
Usage: scripts/ci-local.sh [options]

Runs the same steps as the GitHub Actions pipeline so you can verify changes locally.

Options:
  --skip-install   Skip pnpm install
  --skip-lint      Skip pnpm lint
  --skip-tests     Skip pnpm exec playwright test
  --skip-build     Skip pnpm build
  --only=<step>    Run only a single step (install|lint|tests|build)
  -h, --help       Show this help message
EOF
}

log() {
  printf '\n[ci-local] %s\n' "$1"
}

RUN_INSTALL=true
RUN_LINT=true
RUN_TESTS=true
RUN_BUILD=true

while [[ $# -gt 0 ]]; do
  case "$1" in
    --skip-install) RUN_INSTALL=false ;;
    --skip-lint) RUN_LINT=false ;;
    --skip-tests) RUN_TESTS=false ;;
    --skip-build) RUN_BUILD=false ;;
    --only=*)
      RUN_INSTALL=false
      RUN_LINT=false
      RUN_TESTS=false
      RUN_BUILD=false
      case "${1#*=}" in
        install) RUN_INSTALL=true ;;
        lint) RUN_LINT=true ;;
        tests) RUN_TESTS=true ;;
        build) RUN_BUILD=true ;;
        *)
          echo "Unknown step '${1#*=}'. Expected one of: install, lint, tests, build." >&2
          exit 1
          ;;
      esac
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option '$1'. Use --help to see available flags." >&2
      exit 1
      ;;
  esac
  shift
done

run_step() {
  local label="$1"
  shift
  log "$label"
  (cd "$ROOT_DIR" && "$@")
}

trap 'echo "[ci-local] A step failed. Check the logs above for details." >&2' ERR

if $RUN_INSTALL; then
  run_step "Installing dependencies" pnpm install --frozen-lockfile
else
  log "Skipping dependency installation"
fi

if $RUN_LINT; then
  run_step "Running ESLint" pnpm lint
else
  log "Skipping lint"
fi

if $RUN_TESTS; then
  run_step "Running Playwright tests" pnpm exec playwright test
else
  log "Skipping tests"
fi

if $RUN_BUILD; then
  run_step "Building Next.js app" pnpm build
else
  log "Skipping build"
fi

log "All requested steps finished successfully 🎉"
