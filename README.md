# aleksejunas-dot-no

Personal portfolio built with the Next.js App Router, Tailwind v4, and strict TypeScript. The project follows the conventions documented in `AGENTS.md`.

## Development

```bash
pnpm install
pnpm dev
```

The dev server boots with Turbopack at [http://localhost:3000](http://localhost:3000). Edit files under `src/app/**` and the browser will hot-reload automatically.

## Local CI/CD Pipeline

Use `scripts/ci-local.sh` to replicate the GitHub Actions workflow before pushing:

```bash
./scripts/ci-local.sh
```

By default the script runs `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm exec playwright test`, and `pnpm build`. Add `--skip-*` flags or `--only=<step>` to tailor the run, e.g. `./scripts/ci-local.sh --skip-tests` while iterating on lint fixes. Use `./scripts/ci-local.sh --help` to see all options.

If Playwright browsers are missing locally, install them once via `pnpm exec playwright install --with-deps`.

## Testing

End-to-end tests live under `tests/*.spec.ts` and run through Playwright:

```bash
pnpm exec playwright test
```

Keep specs independent, mock Supabase calls, and lean on `expect.poll` for UI assertions that depend on viewport changes.

## Production build

```bash
pnpm build
pnpm start
```

Use this combo to verify deployment readiness. Attach build artifacts in CI as described in `AGENTS.md` and consume them from deployment scripts (e.g. `scripts/deploy.sh`) when promoting to prod.
