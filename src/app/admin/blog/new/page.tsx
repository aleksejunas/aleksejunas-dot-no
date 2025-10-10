import { createPost } from "@/lib/actions";

// TODO: Koble dette skjemaet til `createPost` server action.
// 1. Sørg for at `action`-attributtet på `<form>`-elementet er satt til `createPost`.
// 2. Gi input-feltene (`title`, `slug`, `content`) riktige `name`-attributter slik at de blir tilgjengelige i `formData` i server action.

const NewPostPage = () => {
  return (
    <main className="max-w-xl mx-auto py-8">
      <form action={createPost} className="space-y-6">
        <h1 className="text-2xl font-bold">Skriv et nytt innlegg</h1>

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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
            placeholder="f.eks-mitt-fantastiske-innlegg"
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
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Opprett innlegg
        </button>
      </form>
    </main>
  );
};

export default NewPostPage;

