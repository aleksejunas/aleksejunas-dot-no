"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

// TODO: Implementer funksjonen for å lage et nytt blogginnlegg.
// 1. Hent ut data (title, content, slug) fra `formData`.
// 2. Bruk `createClient()` for å få en Supabase-klient.
// 3. Kall `supabase.from('posts').insert({...})` med dataene.
// 4. Håndter eventuelle feil.
// 5. Kall `revalidatePath('/blog')` og `revalidatePath('/admin/blog')` for å oppdatere cachen.
// 6. Omdiriger brukeren til det nye innlegget eller admin-siden.
export async function createPost(formData: FormData) {
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
  console.log(`Updating post ${postId} with data:`, formData);
}

// TODO: Implementer funksjonen for å slette et blogginnlegg.
// 1. Bruk `createClient()` for å få en Supabase-klient.
// 2. Kall `supabase.from('posts').delete().eq('id', postId)`.
// 3. Håndter eventuelle feil.
// 4. Kall `revalidatePath('/blog')` og `revalidatePath('/admin/blog')`.
export async function deletePost(postId: string) {
  console.log(`Deleting post ${postId}`);
}
