import Link from "next/link";
import { deletePostAction, getPublishedPosts } from "../../../lib/actions";
import DeletePostButton from "@/components/buttons/DeletePostButton";
import ActionButton from "@/components/buttons/ActionButton";

export default async function AdminBlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          Admin
        </h1>
      </section>

      <section className="flex flex-col gap-6 pl-6 py-6 pr-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-thin font-sans tracking-wide uppercase">
            Blogginnlegg
          </h2>
          <ActionButton label="Nytt innlegg" href="/admin/blog/new" />
        </div>

        <ul className="flex flex-col gap-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between py-4 border-b border-foreground/20"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="font-sans font-semibold text-lg hover:text-accent transition-colors"
              >
                {post.title}
              </Link>
              <div className="flex gap-4">
                <Link
                  href={`/admin/blog/edit/${post.slug}`}
                  className="text-sm font-mono text-muted hover:text-foreground transition-colors"
                >
                  Rediger
                </Link>
                <DeletePostButton
                  postId={post.id}
                  action={deletePostAction}
                  useActionButtonStyle={false}
                />
              </div>
            </li>
          ))}
        </ul>
        <form action="/auth/signout" method="POST">
          <button
            type="submit"
            className="text-xs font-mono text-muted hover:text-foreground transition-colors uppercase"
          >
            Logg ut
          </button>
        </form>
      </section>
    </main>
  );
}
