// src/app/blog/[slug]/page.tsx
// ----- This file renders a single blog post -----

"use server";

import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components"; //  Lag denne filen hvis jeg vil ha custom komponenter
import ActionButton from "@/components/buttons/ActionButton";
import { deletePostAction, getPublishedPosts } from "@/lib/actions";
import DeletePostButton from "@/components/buttons/DeletePostButton";

// TODO: Installer og sett opp `next-mdx-remote`.
// Kjør `pnpm add next-mdx-remote`.

// TODO: Implementer henting av ett enkelt innlegg fra Supabase.
// 1. Importer og bruk `createClient` fra `lib/supabase/server`.
// 2. Hent innlegget (spesielt `content`-feltet) basert på `params.slug`.
// 3. Hvis innlegget ikke finnes, kall `notFound()`.
// 4. Bytt ut mock-data med ekte data.

async function getUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

getPublishedPosts();

// async function getPost(slug: string) {
//   const supabase = await createClient();
//   const { data, error } = await supabase
//     .from("posts")
//     .select("id,title, content")
//     .eq("slug", slug)
//     .single();
//
//   if (error || !data) return null;
//   return data;
// }

// TODO: Render MDX-innholdet trygt.
// 1. Importer `MDXRemote` fra `next-mdx-remote/rsc`.
// 2. I komponenten, bruk `<MDXRemote source={post.content} />` for å rendere innholdet.
// 3. Du kan sende inn egendefinerte komponenter via `components`-propen til MDXRemote, som vil bruke din `mdx-components.tsx`-fil.

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPublishedPosts().then((posts) => {
    return posts.find((post) => post.slug === slug);
  });

  const user = await getUser();

  if (!post) {
    notFound();
  }

  // Check if user is logged in and admin or not
  const isLoggedIn = !!user;
  const isAdmin = user?.user_metadata?.role === "admin";

  return (
    <main>
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <MDXRemote source={post.id.content} components={mdxComponents} />
      </article>
      <div className="mt-8 flex gap-4">
        <ActionButton label="Back to Blog" href="/blog" variant="backToBlog" />
        {isLoggedIn && isAdmin && (
          <>
            <h2>ADMIN</h2>
            <ActionButton
              label="Rediger"
              href={`/admin/blog/edit/${params.slug}`}
              className="text-green-500 hover:underline"
            />
            <DeletePostButton
              postId={post.id}
              action={deletePostAction}
              useActionButtonStyle={true}
            />
          </>
        )}
      </div>
    </main>
  );
}
