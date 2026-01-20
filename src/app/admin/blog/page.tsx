import Link from "next/link";
import {
  deletePostAction,
  getPublishedPosts,
} from "../../../lib/actions";
import DeletePostButton from "@/components/buttons/DeletePostButton";

// TODO: Implementer henting av blogginnlegg fra Supabase.
// 1. Importer og bruk `createClient` fra `lib/supabase/server`.
// 2. Hent alle innlegg fra `posts`-tabellen, sortert etter `created_at`.
// 3. Håndter eventuelle feil under henting.
// 4. Map gjennom `posts`-arrayet og render en liste med innlegg.
// 5. For hvert innlegg, vis tittel og lenker til `edit` og en knapp for `delete`.

// async function getPosts() {
//   // Foreløpig mock data
//   return [
//     { id: "1", title: "Mitt første innlegg", slug: "mitt-forste-innlegg" },
//     { id: "2", title: "Et annet innlegg", slug: "et-annet-innlegg" },
//   ];
// }

export default async function AdminBlogPage() {
  const posts = await getPublishedPosts();



  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin: Blogginnlegg</h1>
        <Link
          href="/admin/blog/new"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Nytt innlegg
        </Link>
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between p-4 border rounded-md"
          >
            <span className="font-semibold">{post.title}</span>
            <div className="space-x-2">
              <Link
                href={`/admin/blog/edit/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                Rediger
              </Link>
              <DeletePostButton postId={post.id} action={deletePostAction} useActionButtonStyle={false} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
