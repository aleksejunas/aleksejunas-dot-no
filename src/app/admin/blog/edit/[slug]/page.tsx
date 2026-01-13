// TODO: Implementer henting av ett spesifikt blogginnlegg basert på slug.
// 1. Importer og bruk `createClient` fra `lib/supabase/server`.
// 2. Hent innlegget fra `posts`-tabellen der `slug` matcher `params.slug`.
// 3. Håndter tilfellet der innlegget ikke finnes (f.eks. vis en 404-side).
// 4. Send `post`-dataen som en prop til komponenten.
// TODO: Delete this mock data
async function getPost(slug: string) {
  // Foreløpig mock data
  return {
    id: "1",
    title: `Mitt første innlegg (${slug})`,
    slug,
    content: "# Hei verden!\n\nDette er mitt første innlegg.",
  };
}

// TODO: Koble dette skjemaet til `updatePost` server action.
// 1. Bruk `use-form-state` eller en lignende hook for å håndtere skjema-state og feilmeldinger.
// 2. Kall `updatePost` med postens ID og de nye skjemadataene.
// 3. Fyll ut `defaultValue` for hvert felt med data fra `post`-objektet.

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <form className="space-y-6">
      <h1 className="text-2xl font-bold">Rediger innlegg</h1>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Tittel
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="mt-1 block w-full rounded-md border-gray-3 00 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={post.title}
        />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="block text-sm font-medium text-gray-700"
        >
          Slug
        </label>
        <input
          type="text"
          name="slug"
          id="slug"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={post.slug}
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Innhold (MDX)
        </label>
        <textarea
          name="content"
          id="content"
          rows={15}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={post.content}
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Oppdater innlegg
      </button>
    </form>
  );
}
