import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const categories = [
  "Journal",
  "Démarrer",
  "Construire",
  "Écrire",
  "Monétiser et mesurer",
  "Faire venir du monde",
  "Études de cas",
  "Durer",
] as const;

export async function getAllPosts(): Promise<Post[]> {
  return (await getCollection("blog")).sort((a, b) => {
    const d = b.data.published.getTime() - a.data.published.getTime();
    if (d !== 0) return d;
    return a.data.order - b.data.order;
  });
}

export async function getPosts(): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => !p.data.archived);
}

export async function getJournalPosts(): Promise<Post[]> {
  return (await getPosts()).filter((p) => p.data.category === "Journal");
}

export async function getGuidePosts(): Promise<Post[]> {
  return (await getPosts()).filter((p) => p.data.category !== "Journal");
}

export function wordCount(post: Post): number {
  const text = (post.body ?? "")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/[#*_>`|\-\[\]]/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: Post): number {
  return Math.max(1, Math.round(wordCount(post) / 200));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function splitForNewsletter(html: string): [string, string] | null {
  const textBefore = (pos: number) => html.slice(0, pos).replace(/<[^>]*>/g, "").length;
  const total = textBefore(html.length);
  if (!total) return null;
  const pick = (positions: number[]) =>
    positions
      .map((p) => ({ p, share: textBefore(p) / total }))
      .filter((c) => c.share >= 0.2 && c.share <= 0.75)
      .sort((a, b) => Math.abs(a.share - 0.45) - Math.abs(b.share - 0.45))[0]?.p;
  const h2 = [...html.matchAll(/<h2[\s>]/g)].map((m) => m.index!).slice(1);
  let at = pick(h2);
  if (at === undefined) {
    at = pick([...html.matchAll(/<\/p>\s*/g)].map((m) => m.index! + m[0].length));
  }
  if (at === undefined) return null;
  return [html.slice(0, at), html.slice(at)];
}
