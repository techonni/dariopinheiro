# Dário Pinheiro (dariopinheiro.com)

Site pessoal. Textos do site em **francês**. Astro 7, estático, hospedado no **Cloudflare Pages** (publica `main` a cada push). Domínio: dariopinheiro.com (DNS no Cloudflare; registo no WordPress.com, transferência para o Cloudflare prevista a partir de 3/11/2026).

## Regras

- Responder ao Dário em **português**, com palavras simples. Os textos do site são em **francês**.
- **Nunca inventar** frases sobre o Dário, links ou números. O que falta fica marcado « [à compléter] ».
- Página inicial (`src/pages/index.astro`), pedido do Dário a 04/10/2026: foto redonda + « Dario » no topo, depois **só três blocos**, por esta ordem: 1) guias do blog em destaque (lista `featuredSlugs`, com link para `/blog/`), 2) newsletter, 3) X. Os sites (« Work ») e o jogo estão no **menu lateral** (botão hambúrguer, `src/components/MenuDrawer.astro`); os links estão em `src/lib/links.ts`. Estilo escuro dos tokens partilhados (`src/styles/tokens.css`). Sem texto azul.
- Blog: um ficheiro Markdown por guia em `src/content/blog/` (o nome do ficheiro = URL `/blog/<slug>/`), schema em `src/content.config.ts`. Plano do site: `src/pages/sitemap.xml.ts`.
- Publicar: `npm run build` → push para `main` → verificar https://dariopinheiro.com.
