# Project Map

This document explains how the main pieces of the `aleksejunas-dot-no` codebase fit together so tooling like CodeCompanion can reason about the project.

## Tech Stack
- Next.js 15 (App Router, Turbopack-based dev server) with TypeScript.
- React 19.
- Tailwind CSS v4 with global theme tokens defined in `src/app/globals.css`.
- Supabase for authentication and (future) blog data persistence.
- MDX support via `@next/mdx`, custom MDX components in `mdx-components.tsx`, and MDX content stored in `src/markdown`.
- Framer Motion for entrance/hover animations of key navigation links.

## High-Level Flow
1. **Routing & Layout**
   - App Router entry lives in `src/app/layout.tsx`, which wires up font variables and injects `HomeLink` on every page.
   - `src/app/globals.css` pulls in Tailwind and defines design tokens (background/foreground colors, fonts) that Tailwind classes reference.
2. **Public Pages**
   - `src/app/page.tsx` renders the landing page, using `EnterAnimation` for animated nav links to `/blog`, `/works`, `/about`, `/contact`, and `/mdx`.
   - `/about`, `/works`, and `/contact` currently return placeholder pages (`src/app/<route>/page.tsx`).
   - `/mdx` (`src/app/mdx/page.tsx`) imports `src/markdown/welcome.mdx`, overriding selected headings via the `components` prop to showcase MDX rendering.
3. **Blog (public)**
   - `/blog/page.tsx` is stubbed to fetch published posts. Once TODOs are completed it should use `createClient` from `src/lib/supabase/server.ts` to query the `posts` table and render links to `/blog/[slug]`.
   - `/blog/[slug]/page.tsx` currently returns mock data and awaits integration with Supabase plus `next-mdx-remote/rsc` for safe MDX rendering.
4. **Authentication**
   - `/login/page.tsx` is a client component; it creates a browser Supabase client via `src/lib/supabase.ts` and triggers `auth.signInWithOAuth({ provider: "google" })` with a callback to `/auth/callback`.
   - `/auth/callback/route.ts` exchanges the Supabase OAuth code for a session and redirects the user (default `/`).
   - `middleware.ts` wraps all `/admin/**` routes. It instantiates a Supabase SSR client, checks for a session, and redirects to `/login` if none is found.
5. **Admin Blog Console**
   - `/admin/blog/page.tsx` lists posts (mocked for now) and links to the editor. Expectation is to swap in Supabase queries using `createClient`.
   - `/admin/blog/new/page.tsx` renders a form intended to submit to the `createPost` server action.
   - `/admin/blog/edit/[slug]/page.tsx` renders a form for updates; once wired it should load initial data via Supabase and submit to `updatePost`.
   - All CRUD actions live in `src/lib/actions.ts`, using Supabase server client helpers, calling `revalidatePath` to refresh blog/admin routes, and redirecting after success. These functions expect the `posts` table described in `docs/database_schema.md`.
6. **Shared Utilities & Components**
   - `src/components/navigation/HomeLink.tsx` is a client component that hides itself on the homepage and renders a floating button back to `/`.
   - `src/components/motion/EnterAnimation.tsx` wraps children in a Framer Motion span with default enter animation.
   - `src/components/icons/Home.tsx` contains the SVG icon used by `HomeLink`.
   - `mdx-components.tsx` provides global MDX component overrides (e.g., styled `<h1>` and `<img>` tags); pages can pass additional overrides like the `/mdx` demo.
   - `src/lib/supabase/server.ts` centralises SSR client creation with cookie rehydration compatible with Next 15's async `cookies()` API.

## Supporting Files & Conventions
- **Configuration**
  - `next.config.ts` enables MDX (including `.md` and `.mdx` routes) and the MDX Rust compiler.
  - `tailwind.config.ts` scopes utility scanning to `src/**/*` and `mdx-components.tsx`, extends fonts, and installs the typography plugin.
  - `eslint.config.mjs`, `postcss.config.mjs`, and `tsconfig.json` contain standard Next.js/Tailwind setups.
- **Docs & Planning**
  - `docs/database_schema.md` stores the SQL for Supabase `posts` plus RLS policies.
  - `docs/notes.md` currently includes Supabase credentials (should be rotated/moved out of the repo).
  - `docs/todos.ts` is a TypeScript file doubling as a TODO list for outstanding blog features.

## Environment Expectations
Set the following environment variables (preferably through `.env.local`) for Supabase integrations:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Admin CRUD also expects the `posts` table and policies described in `docs/database_schema.md`.

## Development Commands
Use pnpm scripts defined in `package.json`:
- `pnpm dev` – start the Turbopack dev server.
- `pnpm build` / `pnpm start` – build and serve production output.
- `pnpm lint` – run ESLint.

## Key Relationships Summary
- **Routing ↔ Layout**: `src/app/layout.tsx` wraps every route, injecting fonts and the `HomeLink` component.
- **Auth ↔ Admin Routes**: `middleware.ts` + `/auth/callback` bind Supabase sessions to `/admin/**` access.
- **Admin Forms ↔ Server Actions**: `/admin/blog/new` and `/admin/blog/edit/[slug]` should post to `createPost`/`updatePost` in `src/lib/actions.ts`, which in turn talk to Supabase.
- **Blog Pages ↔ Supabase**: `/blog` and `/blog/[slug]` are meant to consume Supabase data via `createClient` (server version) and render MDX with overrides from `mdx-components.tsx`.
- **Styling**: Tailwind classes reference variables defined in `src/app/globals.css`, while MDX components can be themed globally via `mdx-components.tsx`.

## Open Tasks
1. Rotate the temporary Supabase credentials currently stored in `docs/notes.md` and move them into environment variables.

Refer back to this map whenever you need to understand how a change affects related files or flows.
