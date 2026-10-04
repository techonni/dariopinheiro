import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const categories = ["Démarrer", "Construire", "Écrire", "Monétiser et mesurer", "Faire venir du monde", "Études de cas", "Durer"] as const;

export async function getPosts(): Promise<Post[]> {
  return (await getCollection("blog")).sort((a, b) => a.data.order - b.data.order);
}

// Nombre de mots du texte (sans la syntaxe Markdown des liens).
export function wordCount(post: Post): number {
  const text = (post.body ?? "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/[#*_>`|\-\[\]]/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

// Temps de lecture : environ 200 mots par minute.
export function readingMinutes(post: Post): number {
  return Math.max(1, Math.round(wordCount(post) / 200));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
