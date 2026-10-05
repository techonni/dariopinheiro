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

const FALLBACK_CARD_IMAGES = [
  "https://images.unsplash.com/photo-1696475191936-c4bab353e0c9?w=800&q=80",
  "https://images.unsplash.com/photo-1627808487567-3d9bc24c8550?w=800&q=80",
  "https://images.unsplash.com/photo-1667334543874-a3fc51bbe906?w=800&q=80",
  "https://images.unsplash.com/photo-1628600538663-34a346ce4348?w=800&q=80",
  "https://images.unsplash.com/photo-1627674806991-e0dcdb609d73?w=800&q=80",
  "https://images.unsplash.com/photo-1545033691-015d9d4b508d?w=800&q=80",
  "https://images.unsplash.com/photo-1627808487208-f7dd9b1b1cc9?w=800&q=80",
  "https://images.unsplash.com/photo-1731351707982-d9cfb6c5b6e7?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/** Card thumbnail: first frontmatter image, else deterministic monochrome-nature fallback. */
export function getCardImage(post: Post): { url: string; alt: string } {
  const first = post.data.images?.[0];
  if (first?.url) {
    const url = first.url.includes("w=")
      ? first.url.replace(/([?&])w=\d+/, "$1w=800")
      : first.url + (first.url.includes("?") ? "&" : "?") + "w=800";
    return { url, alt: first.alt || post.data.title };
  }
  const url = FALLBACK_CARD_IMAGES[hashSlug(post.id) % FALLBACK_CARD_IMAGES.length];
  return { url, alt: post.data.title };
}

/** Short excerpt for cards: prefer description/summary, else first prose words + ellipsis. */
export function getExcerpt(post: Post, maxChars = 110): string {
  const raw =
    (post.data.description as string | undefined)?.trim() ||
    (post.data.summary as string | undefined)?.trim() ||
    "";
  let text = raw;
  if (!text) {
    text = (post.body ?? "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[#*_>`|]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  text = text.replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (text.length <= maxChars) return text;
  const cut = text.slice(0, maxChars).replace(/\s+\S*$/, "");
  return cut.replace(/[.,;:!?]+$/, "") + "\u2026";
}
