import ActionButton from "@/components/buttons/ActionButton";
import { deletePostAction, getPostBySlug, updatePost } from "@/lib/actions";
import { notFound } from "next/navigation";
import DeletePostButton from "@/components/buttons/DeletePostButton";

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const updatePostWithId = updatePost.bind(null, String(post.id));

  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          Admin
        </h1>
      </section>

      <section className="flex flex-col gap-6 pl-6 py-6">
        <ActionButton
          label="← Tilbake"
          href="/admin/blog"
          variant="backToBlog"
          className="self-start"
        />

        <h2 className="text-xl font-thin font-sans tracking-wide uppercase">
          Rediger innlegg
        </h2>

        <form
          id="edit-form"
          action={updatePostWithId}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-xs font-mono text-muted uppercase tracking-wider"
            >
              Tittel
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              defaultValue={post.title}
              className="bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="slug"
              className="text-xs font-mono text-muted uppercase tracking-wider"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              required
              defaultValue={post.slug}
              className="bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="content"
              className="text-xs font-mono text-muted uppercase tracking-wider"
            >
              Innhold (MDX)
            </label>
            <textarea
              name="content"
              id="content"
              rows={20}
              required
              defaultValue={post.content}
              className="bg-ma border border-foreground/30 rounded px-3 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-accent resize-y"
            />
          </div>

          <div className="flex gap-4 items-center">
            <ActionButton label="Lagre endringer" as="button" type="submit" />
          </div>
        </form>

        <div className="flex gap-4 items-center border-t border-foreground/20 pt-4 mt-4 max-w-2xl">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">
            Farlig sone
          </span>
          <DeletePostButton
            postId={post.id}
            action={deletePostAction}
            useActionButtonStyle={true}
          />
        </div>
      </section>
    </main>
  );
}
