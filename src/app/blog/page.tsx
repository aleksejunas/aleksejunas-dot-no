import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import ActionButton from "@/components/buttons/ActionButton";
import { getPublishedPosts } from "@/lib/actions";

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  getPublishedPosts();

  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      {/* Left Column - Used for spacing/alignment, similar to the main page */}
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl] space-y-4">
          Blog
        </h1>
      </section>
      {/* Right Column - Contains the main blog list content */}
      <section className="flex flex-col justify-center gap-6 pl-6">
        <ActionButton label="Nytt innlegg" href="/admin/blog/new" />
        <h2 className="text-xl font-thin font-sans tracking-wide uppercase">
          Alle innlegg
        </h2>
        <ul className="space-y-4">
          {posts.length === 0 ? (
            <li className="text-muted text-lg">
              Ingen publiserte innlegg funnet
            </li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <span className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl leading-none capitalize transition hover:text-accent hover:text-rose-400 hover:opacity-90 focus:outline-none">
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
