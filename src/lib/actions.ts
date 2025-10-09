"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// TODO: Implementer funksjonen for å lage et nytt blogginnlegg.
// 1. Hent ut data (title, content, slug) fra `formData`.
// 2. Bruk `createClient()` for å få en Supabase-klient.
// 3. Kall `supabase.from('posts').insert({...})` med dataene.
// 4. Håndter eventuelle feil.
// 5. Kall `revalidatePath('/blog')` og `revalidatePath('/admin/blog')` for å oppdatere cachen.
// 6. Omdiriger brukeren til det nye innlegget eller admin-siden.

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = formData.get("slug") as string;

  const supabase = await createClient();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: _data, error } = await supabase
    .from("posts")
    .insert([{ title, content, slug }])
    .select()
    .single();

  if (error) {
    console.error("Error creating post: ", error);
    throw new Error("Could not create blog post");
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");

  // Redirect to the new post
  redirect(`/blog/${slug}`);

  console.log("Creating post with data:", { title, content, slug });
  console.log("Creating post with data:", formData);
}

// TODO: Implementer funksjonen for å oppdatere et eksisterende blogginnlegg.
// 1. Hent ut data (title, content, slug) fra `formData`.
// 2. Bruk `createClient()` for å få en Supabase-klient.
// 3. Kall `supabase.from('posts').update({...}).eq('id', postId)` med dataene.
// 4. Håndter eventuelle feil.
// 5. Kall `revalidatePath('/blog')`, `revalidatePath('/blog/[slug]')`, og `revalidatePath('/admin/blog')`.
// 6. Omdiriger brukeren.

export async function updatePost(postId: string, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = formData.get("slug") as string;

  const supabase = await createClient();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: _data, error } = await supabase
    .from("posts")
    .update({ title, content, slug })
    .eq("id", postId)
    .select()
    .single();

  if (error) {
    console.error("Error updating post:", error);
    throw new Error("Could not update blog post");
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");

  // Redirect to the updated post
  redirect(`/blog/${slug}`);

  console.log(`Updating post ${postId} with data:`, { title, content, slug });
  console.log(`Updating post ${postId} with data:`, formData);
}

// TODO: Implementer funksjonen for å slette et blogginnlegg.
// 1. Bruk `createClient()` for å få en Supabase-klient.
// 2. Kall `supabase.from('posts').delete().eq('id', postId)`.
// 3. Håndter eventuelle feil.
// 4. Kall `revalidatePath('/blog')` og `revalidatePath('/admin/blog')`.

export async function deletePost(postId: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", postId);

  if (error) {
    console.error("Error deleting post:", error);
    throw new Error("Could not delete blog post");
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");

  // Redirect to admin blog overview
  redirect("/admin/blog");

  console.log(`Deleting post ${postId}`);
}
