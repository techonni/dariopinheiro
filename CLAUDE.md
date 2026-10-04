# Dário Pinheiro (dariopinheiro.com)

Site pessoal. Textos do site em **francês**. Astro 7, estático, hospedado no **Cloudflare Pages** (publica `main` a cada push). Domínio: dariopinheiro.com (DNS no Cloudflare; registo no WordPress.com, transferência para o Cloudflare prevista a partir de 3/11/2026).

## Regras

- Responder ao Dário em **português**, com palavras simples. Os textos do site são em **francês**.
- **Nunca inventar** frases sobre o Dário, links ou números. O que falta não se escreve: retirar a frase ou torná-la geral. **Não deixar marcadores de lacunas** no texto do site (pedido do Dário a 04/10/2026).
- Página inicial (`src/pages/index.astro`), pedido do Dário a 04/10/2026: foto redonda + « Dario » no topo, depois **só três blocos**, por esta ordem: 1) guias do blog em destaque (lista `featuredSlugs`, com link para `/blog/`), 2) newsletter, 3) X (no telemóvel a newsletter sobe para logo depois da apresentação, pedido de 04/10/2026). **Menu lateral** (botão hambúrguer, `src/components/MenuDrawer.astro`): só **Blog** e **X** (pedido do Dário a 04/10/2026: « Work » e « Jeux » foram retirados); os links estão em `src/lib/links.ts`. Estilo escuro dos tokens partilhados (`src/styles/tokens.css`). Sem texto azul.
- Newsletter (pedido do Dário a 04/10/2026, captar e-mails do tráfego das redes): componente `src/components/NewsletterForm.astro` (vários por página: props `id`, `title`, `text`, `variant`). Em cada guia aparece **a meio** (automático, `splitForNewsletter` em `src/lib/blog.ts`, antes de um H2 perto de 45 % do texto; não mexer nos Markdown) e **no fim**; também em `/blog/` e na página inicial. Sem pop-ups.
- Medição: Cloudflare Web Analytics (sem cookies), beacon em `src/layouts/Base.astro` com o token do site « dariopinheiro.com » da conta Cloudflare. No fim de cada guia: link « Partager sur X » (intenção x.com com título, URL canónico, via @zunrel).
- Blog: um ficheiro Markdown por guia em `src/content/blog/` (o nome do ficheiro = URL `/blog/<slug>/`), schema em `src/content.config.ts`. Plano do site: `src/pages/sitemap.xml.ts`.
- Publicar: `npm run build` → push para `main` → verificar https://dariopinheiro.com.
