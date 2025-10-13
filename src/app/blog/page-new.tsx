import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

// 1. Importer og bruk `createClient` fra `lib/supabase/server`. (Done)
// 2. Hent alle innlegg fra `posts`-tabellen, kun `title` og `slug`, sortert etter `created_at`. (Done)
// 3. Håndter eventuelle feil. (Done)
// 4. Bytt ut mock-dataen med de ekte postene. (Done)

async function getPublishedPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("title, slug")
    .order("created_at", { ascending: false });

  if (error) {
    // Optionally log or handle the console.error
    console.error("Failed to fetch posts:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    // Replicating the full-screen grid layout from HomePage
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      {/* Left Column - Used for spacing/alignment, similar to the main page's left column */}
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl] space-y-4">
          Blogg
        </h1>
      </section>

      {/* Right Column - Contains the main blog list content */}
      <section className="flex flex-col justify-center gap-6 pl-6">
        <h2 className="text-xl font-thin font-sans tracking-widest uppercase">
          Alle innlegg
        </h2>
        <ul className="space-y-4">
          {posts.length === 0 ? (
            <li className="text-muted text-lg">Ingen publiserte innlegg funnet</li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl leading-none uppercase transition hover:text-accent hover:opacity-80 focus:outline-none">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}
