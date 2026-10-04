// Links do Dário, partilhados entre a página inicial e o menu lateral (hambúrguer).
// Textos do site em francês. Para acrescentar um link, copiar uma linha. Links com url vazio não aparecem.

export type HubLink = { name: string; text?: string; url: string };

// Página inicial (último bloco) e menu lateral (pedido do Dário, 04/10/2026: o menu só tem o Blog e o X).
export const socialLinks: HubLink[] = [{ name: "X", text: "@zunrel", url: "https://x.com/zunrel" }].filter((l) => l.url);

export const isInternal = (url: string) => url.startsWith("/");
export const host = (url: string) => (url.startsWith("mailto:") ? url.slice(7) : new URL(url).host);
