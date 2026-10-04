import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export const categories = ["Démarrer", "Construire", "Écrire", "Monétiser et mesurer", "Faire venir du monde", "Études de cas", "Durer"] as const;

// Tous les guides, y compris les archivés (pages et plan du site).
export async function getAllPosts(): Promise<Post[]> {
  return (await getCollection("blog")).sort((a, b) => a.data.order - b.data.order);
}

// Guides listés (accueil, /blog/, « À lire ensuite ») : sans les guides archivés (ex. : Pieceworth, site fermé).
export async function getPosts(): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => !p.data.archived);
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

// Newsletter no meio do guia (pedido do Dário, 04/10/2026): o HTML do guia é cortado em dois
// antes de um título H2, o mais perto possível de 45 % do texto, nunca antes do 2.º H2
// e deixando pelo menos 25 % do texto depois. Sem H2 que sirva: corte depois de um parágrafo.
// Assim não é preciso mexer em nenhum ficheiro Markdown.
export function splitForNewsletter(html: string): [string, string] | null {
  // Mede-se o texto visível (sem as tags), para que os blocos de código coloridos não falseiem a conta.
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
