import { createPost } from "@/lib/actions";
import ActionButton from "@/components/buttons/ActionButton";

const NewPostPage = () => {
  return (
    <main className="grid min-h-screen grid-cols-[1fr_4fr] p-6">
      <section className="text-sm border-r border-foreground/50 pr-6">
        <h1 className="font-sans font-bold text-xl uppercase rotate-180 [writing-mode:vertical-rl]">
          Admin
        </h1>
      </section>

      <section className="flex flex-col gap-6 pl-6 py-6">
        <ActionButton label="← Tilbake" href="/admin/blog" variant="backToBlog" />

        <h2 className="text-xl font-thin font-sans tracking-wide uppercase">
          Nytt innlegg
        </h2>

        <form action={createPost} className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-xs font-mono text-muted uppercase tracking-wider">
              Tittel
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              className="bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="slug" className="text-xs font-mono text-muted uppercase tracking-wider">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              required
              placeholder="f.eks-mitt-fantastiske-innlegg"
              className="bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="content" className="text-xs font-mono text-muted uppercase tracking-wider">
              Innhold (MDX)
            </label>
            <textarea
              name="content"
              id="content"
              rows={20}
              required
              className="bg-transparent border border-foreground/30 rounded px-3 py-2 text-foreground font-mono text-sm focus:outline-none focus:border-accent resize-y"
            />
          </div>

          <div>
            <ActionButton label="Opprett innlegg" as="button" type="submit" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default NewPostPage;
