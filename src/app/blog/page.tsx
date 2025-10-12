import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

// TODO: Implementer henting av publiserte blogginnlegg fra Supabase.
// 1. Importer og bruk `createClient` fra `lib/supabase/server`.
// 2. Hent alle innlegg fra `posts`-tabellen, kun `title` og `slug`, sortert etter `created_at`.
// 3. Håndter eventuelle feil.
// 4. Bytt ut mock-dataen med de ekte postene.

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

  // Foreløpig mock data
  // return [
  //   { title: "Mitt første publiserte innlegg", slug: "mitt-forste-innlegg" },
  //   { title: "Et annet spennende innlegg", slug: "et-annet-innlegg" },
  // ];
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blogg</h1>
      <ul className="space-y-4">
        {posts.length === 0 ? (
          <li className="text-gray-500">Ingen publiserte innlegg funnet</li>
        ) : (
          posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <span className="text-xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
