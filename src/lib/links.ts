// Links do Dário, partilhados entre a página inicial e o menu lateral (hambúrguer).
// Textos do site em francês. Para acrescentar um link, copiar uma linha. Links com url vazio não aparecem.

export type HubLink = { name: string; text?: string; url: string };
export type HubGroup = { title: string; links: HubLink[] };

const clean = (groups: HubGroup[]) =>
  groups.map((g) => ({ ...g, links: g.links.filter((l) => l.url) })).filter((g) => g.links.length);

// Menu lateral: os sites (« Work ») e o jogo saíram da página inicial e vivem aqui.
export const menuGroups: HubGroup[] = clean([
  {
    title: "Work",
    links: [
      { name: "Techonni", text: "Guides GTA 6 en français", url: "https://techonni.com" },
      { name: "Zunrel", text: "Guides Leadpages, HTML Pub et Shopify", url: "https://zunrel.com" },
      { name: "Pieceworth", text: "Guides pour bien acheter le luxe", url: "https://pieceworth.com" },
    ],
  },
  {
    title: "Jeux",
    links: [{ name: "Jeu", text: "À jouer dans le navigateur", url: "https://game.zunrel.com" }],
  },
]);

// Página inicial, último bloco.
export const socialLinks: HubLink[] = [{ name: "X", text: "@zunrel", url: "https://x.com/zunrel" }].filter((l) => l.url);

export const isInternal = (url: string) => url.startsWith("/");
export const host = (url: string) => (url.startsWith("mailto:") ? url.slice(7) : new URL(url).host);
