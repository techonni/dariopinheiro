# Dário Pinheiro (dariopinheiro.com)

Site pessoal, em **português**. Astro 7, estático, hospedado no **Cloudflare Pages** (publica `main` a cada push). Domínio: dariopinheiro.com (DNS no Cloudflare; registo no WordPress.com, transferência para o Cloudflare prevista a partir de 3/11/2026).

## Regras

- Responder em **português**, com palavras simples.
- **Nunca inventar** frases sobre o Dário, links ou números. O que falta fica marcado « [a preencher] ».
- Conteúdo da página inicial: `src/pages/index.astro` (lista `groups` no topo). O site é o **hub de links** do Dário (como um « link na bio »), com o estilo do zunrel.com; sem imagens nos links.
- Publicar: `npm run build` → push para `main` → verificar https://dariopinheiro.com.
