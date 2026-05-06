// src/app/blog/[slug]/page.tsx
// ----- This file renders a single blog post -----

"use server";

import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components"; //  Lag denne filen hvis jeg vil ha custom komponenter
import ActionButton from "@/components/buttons/ActionButton";
import { deletePostAction, getPostBySlug } from "@/lib/actions";
import DeletePostButton from "@/components/buttons/DeletePostButton";

async function getUser() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const user = await getUser();

  if (!post) {
    notFound();
  }

  // Check if user is logged in and admin or not
  const isLoggedIn = !!user;
  const isAdmin = user?.user_metadata?.role === "admin";

  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      {/* Left column — matches blog index layout */}
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          Blog
        </h1>
      </section>

      {/* Right column */}
      <section className="flex flex-col gap-6 pl-6 py-6">
        <ActionButton label="← Tilbake" href="/blog" variant="backToBlog" className="self-start" />

        <article className="prose prose-headings:font-sans prose-headings:font-bold lg:prose-xl max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {isLoggedIn && isAdmin && (
          <div className="flex gap-4 items-center border-t border-foreground/20 pt-4 mt-4">
            <span className="text-sm font-mono text-muted uppercase">Admin</span>
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
          </div>
        )}
      </section>
    </main>
  );
}
