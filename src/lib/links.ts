// Links do Dário, partilhados entre a página inicial e o menu lateral.
// Textos do site em francês. Para acrescentar um link, copiar uma linha. Links com url vazio não aparecem.

export type HubLink = { name: string; text?: string; url: string };

export const socialLinks: HubLink[] = [{ name: "X", text: "@zunrel", url: "https://x.com/zunrel" }].filter((l) => l.url);

// Sites vivos. techonni.com e pieceworth.com já redirecionam para cá.
export const sites: HubLink[] = [
  { name: "Zunrel", text: "Le site pour minimalistes digitaux : iPhone épuré, articles courts, lettre du dimanche.", url: "https://zunrel.com/" },
];

export const isInternal = (url: string) => url.startsWith("/");
export const host = (url: string) => (url.startsWith("mailto:") ? url.slice(7) : new URL(url).host);
