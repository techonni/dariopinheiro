# Dário Pinheiro (dariopinheiro.com)

Site pessoal, em **português**. Astro 7, estático, hospedado no **Cloudflare Pages** (publica `main` a cada push). Domínio: dariopinheiro.com (DNS no Cloudflare; registo no WordPress.com, transferência para o Cloudflare prevista a partir de 3/11/2026).

## Regras

- Responder em **português**, com palavras simples.
- **Nunca inventar** frases sobre o Dário, links ou números. O que falta fica marcado « [a preencher] ».
- Conteúdo da página inicial: `src/pages/index.astro` (listas `work` e `links` no topo). Estrutura como o oliur.com, estilo do zunrel.com; a secção Work é só texto, sem imagens.
- Publicar: `npm run build` → push para `main` → verificar https://dariopinheiro.com.
