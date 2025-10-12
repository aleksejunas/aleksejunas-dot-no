import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components"; //  Lag denne filen hvis jeg vil ha custom komponenter

// TODO: Installer og sett opp `next-mdx-remote`.
// Kjør `pnpm add next-mdx-remote`.

// TODO: Implementer henting av ett enkelt innlegg fra Supabase.
// 1. Importer og bruk `createClient` fra `lib/supabase/server`.
// 2. Hent innlegget (spesielt `content`-feltet) basert på `params.slug`.
// 3. Hvis innlegget ikke finnes, kall `notFound()`.
// 4. Bytt ut mock-data med ekte data.
async function getPost(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("title, content")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data;
}

// TODO: Render MDX-innholdet trygt.
// 1. Importer `MDXRemote` fra `next-mdx-remote/rsc`.
// 2. I komponenten, bruk `<MDXRemote source={post.content} />` for å rendere innholdet.
// 3. Du kan sende inn egendefinerte komponenter via `components`-propen til MDXRemote, som vil bruke din `mdx-components.tsx`-fil.

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <MDXRemote source={post.content}
        components={mdxComponents} />    </article>
  );
}
