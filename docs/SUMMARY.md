# aleksejunas.no — presentasjonssammendrag

> Videomøte-notat. Halvtime, tre prosjekter. Dette er prosjekt 1.

---

## Hva er det?

Personlig nettside og blogg — `aleksejunas.no`.
Bygget fra bunnen av som et fullstack-prosjekt, ikke et template.

---

## Stack

| Lag | Teknologi |
|-----|-----------|
| Frontend | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4, egendefinert designsystem |
| Database | Supabase (PostgreSQL + Auth) |
| Innhold | MDX lagret i DB, rendret med `next-mdx-remote` |
| Animasjoner | Framer Motion |

---

## Hva er bygget

**Offentlige sider**
- Forside med animert navigasjon
- Blogg med fullt CRUD — skriv, rediger, slett innlegg
- Works/portefølje-side
- Om meg og kontaktside

**Admin**
- Innlogging via Supabase Auth
- Admin-panel for blogginnlegg (liste, ny, rediger)
- Autentisert utlogging via POST-route

**Tekniske detaljer verdt å nevne**
- Eget designsystem med CSS-variabler — fire temaer (lys, mørk, Punk, Midnight)
- MDX-innhold i databasen rendres som React-komponenter med custom `pre`-wrapper og kopier-knapp
- Seed-script for testinnhold via Supabase service role

---

## Status

Siden er i aktiv utvikling. Kjernefunksjonalitet er ferdig.
Gjenstår: login-side redesign, Google Auth, og diverse mindre forbedringer.

---

## Vis frem (forslag til rekkefølge)

1. Forside — design og temabytte (⚡-knapp)
2. Blog — liste og åpne et innlegg med kodeblokk + kopier-knapp
3. Admin-panel — vis CRUD og innlogging
4. Works-siden — prosjektoversikt
