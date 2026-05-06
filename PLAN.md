# Plan — aleksejunas.no

## Høy prioritet

### Sider som mangler innhold og layout

- [ ] **`about/page.tsx`** — stub-side, bare grønn tekst. Trenger innhold + `grid-cols-[1fr_4fr]`-layout
- [ ] **`contact/page.tsx`** — stub-side, bare grønn tekst. Trenger innhold + layout (kontaktskjema? e-post?)
- [ ] **`login/page.tsx`** — bruker inline-stiler og hardkodede farger (`bg-yellow-500` osv.), ikke sitefarger. Trenger redesign

### Bugs

- [ ] **`admin/blog/edit/[slug]/page.tsx` linje 91** — avkuttet klassenavn `bg-ma` i textarea. Skal være `bg-transparent`

---

## Middels prioritet

### Komponenter

- [ ] **`AnimatedIconsLink.tsx` linje 21** — hardkodet `hoverColor = "#f43f5e"` i stedet for `var(--accent)`. Bør bruke CSS-variabel for å respektere tema-bytte (punk/midnight)
- [ ] **`mdx-components.tsx`** — bare `<a>` og `<h1>` definert, med hardkodede farger (`text-blue-600`). Bør dekke `h2`, `h3`, `code`, `blockquote` m.fl. og bruke `var(--accent)` / `var(--foreground)`
- [ ] **`ActionButton.tsx` linje 41** — `disabled`-prop er brukt i JSX men ikke destrukturert i props-objektet (potensiell TypeScript-feil)

---

## Lav prioritet / Nice to have

- [ ] **Kopier-knapp i kodeblokker** — `"use client"`-komponent som wrapper `<pre>`, viser "Kopier"-knapp øverst til høyre, bruker `navigator.clipboard.writeText`. Registreres i `mdx-components.tsx` som custom `pre`-komponent
- [ ] Auth-flyt — Google Sign-in via Supabase (TODO i login-siden)
- [ ] Hover-animasjon på ikonene på forsiden (delvis gjort, men en TODO finnes)
- [ ] Vurder om `/mdx`-ruten skal fjernes permanent eller beholdes som sandbox

---

## Ferdig

- [x] Blog-systemet (CRUD) koblet til Supabase og fungerende
- [x] `blog/[slug]/page.tsx` — fikset fetching og layout
- [x] Admin-sider restylet til å matche sitedesign
- [x] `AuthStatusDot` gjort klikkbar (grønn → admin, rød → login)
- [x] `/auth/signout` route opprettet
- [x] Logg ut-knapp lagt til i admin med styling
- [x] `HomeLink`-overlapp fikset med `pr-20`
- [x] `about/page.tsx` og `contact/page.tsx` — ekte innhold og korrekt layout
- [x] Kodeblokker i prose — farger overstyrt til site CSS-variabler (fungerer i alle temaer)
- [x] Separator mellom blogginnlegg (`divide-y`)
- [x] Bloggliste — tittelstørrelse nedskalert, `ActionButton` fikset til `self-start`
- [x] `scripts/seed-posts.mjs` — 5 seed-innlegg opprettet og kjørt
