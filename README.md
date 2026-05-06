# aleksejunas.no

Personlig nettside og blogg for Rolf Aleksejunas Christensen.

## Stack

- **Next.js 15** — App Router, Turbopack, Server Components
- **Supabase** — PostgreSQL database + Auth
- **MDX** — blogginnhold lagret som tekst, rendret med `next-mdx-remote`
- **Tailwind CSS** — inkl. `@tailwindcss/typography` for prose-stiling
- **Framer Motion** — animasjoner

## Kom i gang

```bash
pnpm install
pnpm dev
```

Krever en `.env.local` med:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Sider

| Rute | Beskrivelse |
|------|-------------|
| `/` | Forside med navigasjon |
| `/blog` | Bloggliste |
| `/blog/[slug]` | Enkelt blogginnlegg (MDX) |
| `/works` | Prosjektoversikt |
| `/about` | Om meg |
| `/contact` | Kontaktinfo |
| `/admin/blog` | Admin — liste over innlegg |
| `/admin/blog/new` | Admin — nytt innlegg |
| `/admin/blog/edit/[slug]` | Admin — rediger innlegg |
| `/login` | Innlogging via Supabase Auth |
| `/auth/callback` | Supabase OAuth callback |
| `/auth/signout` | Logg ut (POST) |

## Temaer

Siden støtter fire temaer via `data-style` på `<html>`:

- Standard (lys, gul bakgrunn)
- Mørk (følger systempreferanse)
- **Punk** — safety yellow + safety pink
- **Midnight** — mørk med cyan aksent

Bytt tema med ⚡-knappen nederst til venstre.

## Scripts

```bash
# Seed 5 blogginnlegg (krever SUPABASE_SERVICE_ROLE_KEY i .env.local)
node scripts/seed-posts.mjs
```

## Lokal CI

```bash
./scripts/ci-local.sh           # kjør alle steg
./scripts/ci-local.sh --help    # se flagg
```

## Dokumentasjon

- [`PLAN.md`](./PLAN.md) — prioritert oppgaveliste
- [`CLAUDE.md`](./CLAUDE.md) — prosjektnotater og endringslogg
- [`docs/database_schema.md`](./docs/database_schema.md) — Supabase-skjema og RLS-policies
