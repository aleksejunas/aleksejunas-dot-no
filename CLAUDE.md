# aleksejunas.no — prosjektnotater

## Commit-meldinger

Når brukeren ber om en commit-melding, gi alltid en **lazygit-klar** melding i dette formatet — klar til å lime inn:

```
<type>: <kort sammendrag>

- <detalj>
- <detalj>
- <detalj>
```

Typer: `fix`, `feat`, `refactor`, `docs`, `chore`, `style`, `test`
- Summary-linja: maks ~72 tegn, imperativ form
- Detaljer: bullet-punkter, én linje per logisk endring
- Ikke legg til `Co-Authored-By` eller annet fluff med mindre bedt om det


## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Database**: Supabase (PostgreSQL) — free tier, pauser ved inaktivitet
- **Auth**: Supabase Auth
- **Content**: MDX lagret som tekst i Supabase, rendret med `next-mdx-remote`
- **Styling**: Tailwind CSS + `@tailwindcss/typography` (prose-klasser)
- **Pakkebehandler**: pnpm

## Struktur

```
src/
  app/
    blog/           # Blogg-liste og enkeltinnlegg
    admin/blog/     # CRUD for innlegg (krever innlogging + admin-rolle)
    auth/           # Auth-callbacks
    login/          # Innloggingsside
  lib/
    actions.ts      # Server actions: getPublishedPosts, getPostBySlug, createPost, updatePost, deletePost
    supabase/
      server.ts     # Supabase SSR-klient
  components/
    mdx-components.tsx   # Custom MDX-komponenter (a, h1)
    buttons/
      ActionButton.tsx
      DeletePostButton.tsx
```

## Database

`posts`-tabell i Supabase:
- `id` (bigint, PK)
- `created_at` (timestamp)
- `title` (text)
- `slug` (text, unique)
- `content` (text — rå MDX)
- `user_id` (uuid, FK → auth.users)

## Viktige detaljer

- Supabase free-tier **pauser prosjektet** ved inaktivitet — gjenopprett på supabase.com/dashboard
- Env-variabler: `NEXT_PUBLIC_SUPABASE_URL` og `NEXT_PUBLIC_SUPABASE_ANON_KEY` i `.env.local`
- Admin-sjekk basert på `user.user_metadata.role === "admin"`
- `params` er en Promise i Next.js 15 — bruk `await params`

## Kjøring

```bash
pnpm dev      # utviklingsserver
pnpm build    # produksjonsbygg
pnpm lint     # ESLint
```

## Endringslogg

### 2026-05-06
- Gjenopprettet Supabase-prosjekt etter pause (free-tier inaktivitet)
- Fikset `blog/[slug]/page.tsx`: brukte `getPublishedPosts()` (uten `content`-felt) i stedet for `getPostBySlug(slug)`
- Fikset `post.id.content` → `post.content`
- Admin-sider restylet til å matche sitedesign (`grid-cols-[1fr_4fr]`, CSS-variabler)
- Edit-form fikset: la til `updatePost.bind(null, post.id)` som action
- `AuthStatusDot` gjort klikkbar (grønn → `/admin/blog`, rød → `/login`)
- `/auth/signout` POST route opprettet
- `about/page.tsx` og `contact/page.tsx` bygget med ekte innhold og korrekt layout
- Kodeblokker i `prose` overstyrt til site CSS-variabler i `globals.css`
- Separator mellom blogginnlegg med `divide-y divide-foreground/15`
- `scripts/seed-posts.mjs` — seeder 5 blogginnlegg (krever `SUPABASE_SERVICE_ROLE_KEY`)
