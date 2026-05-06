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
    <main>
      <article className="prose lg:prose-xl">
        <h1>{post.title}</h1>
        <MDXRemote source={post.content} components={mdxComponents} />
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
