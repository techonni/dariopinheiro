---
title: "Héberger son site gratuitement sur Cloudflare Pages"
seoTitle: "Héberger un site Astro gratuitement sur Cloudflare Pages"
description: "Mettre un site Astro en ligne sur Cloudflare Pages : lier GitHub, régler le build, ajouter le domaine, les redirections, et les pièges que j'ai rencontrés."
summary: "GitHub, un build automatique à chaque push, un domaine personnalisé : sans payer d'hébergement."
category: "Construire"
published: 2026-10-04
updated: 2026-10-04
order: 6
---

Mes quatre sites sont hébergés sur **Cloudflare Pages** : [Zunrel](https://zunrel.com), [Pieceworth](https://pieceworth.com), [Techonni](https://techonni.com) et ce hub. Le jeu de démonstration [game.zunrel.com](https://game.zunrel.com) aussi, dans un projet à part. Le principe : à chaque fois que je pousse du code sur la branche `main` de GitHub, Cloudflare construit le site et le publie. Voici comment le mettre en place, et pourquoi j'ai quitté Vercel.

## Pourquoi Cloudflare Pages (et pas Vercel)

Zunrel était d'abord hébergé sur Vercel. Le 29 septembre 2026, je l'ai déplacé sur Cloudflare Pages : **le plan gratuit de Vercel (Hobby) interdit l'usage commercial, et donc les sites d'affiliation**. Avant de choisir un hébergeur gratuit pour un site d'affiliation, lisez toujours ses conditions sur l'usage commercial.

Cloudflare Pages a d'autres avantages pour un site statique :

- un **build automatique** à chaque push ;
- un réseau mondial, donc des pages rapides partout ;
- la **gestion du DNS** au même endroit si votre domaine est chez Cloudflare ;
- des fichiers simples pour les redirections et les en-têtes.

Une limite à connaître : le plan gratuit compte les builds (500 par mois au moment où j'ai noté cette limite pour Pieceworth). Un push = un build. Je regroupe donc les changements plutôt que de pousser chaque petite correction.

## Étape 1 : mettre le site sur GitHub

Le code du site doit être dans un dépôt GitHub (ou GitLab), avec la commande de build qui fonctionne en local :

```
npm run build
```

Pour Astro, le résultat arrive dans le dossier `dist`. Si le build échoue chez vous, il échouera chez Cloudflare.

## Étape 2 : créer le projet Pages

Dans le tableau de bord Cloudflare :

1. **Workers & Pages → Create → Pages → Connect to Git.**
2. Choisissez le dépôt.
3. Réglages de build :
   - Production branch : `main`
   - Framework preset : Astro
   - Build command : `npm run build`
   - Build output directory : `dist`
4. Lancez le premier déploiement.

Le site est alors disponible sur une adresse en `.pages.dev`.

Pour un dépôt qui contient plusieurs projets, il existe un réglage « Root directory ». C'est ce que j'utilise pour le jeu : le dépôt de Zunrel contient un dossier `jogo` publié comme un projet Pages séparé, avec `jogo` comme dossier racine.

## Étape 3 : ajouter votre domaine

Dans le projet Pages : **Custom domains → Set up a custom domain**, puis entrez votre domaine (et la version `www` si vous le souhaitez). Si le DNS du domaine est déjà chez Cloudflare, l'enregistrement est créé tout seul.

Votre domaine peut rester enregistré ailleurs. Techonni est enregistré chez Hostinger, avec le DNS chez Cloudflare. Pour ce hub, le domaine est enregistré chez WordPress.com, avec le DNS chez Cloudflare.

**Attention au DNS existant.** Quand j'ai déplacé Zunrel, les enregistrements de l'e-mail (MX, SPF, DKIM, DMARC) et celui de vérification Google devaient absolument être conservés. Avant de changer quoi que ce soit, faites une capture de vos enregistrements DNS actuels.

## Étape 4 : les redirections

Si des URL changent, déclarez-les dans `public/_redirects` :

```
/ancienne-page/    /nouvelle-page/    301
```

Ce fichier remplace le `vercel.json` des sites Vercel. Pensez aussi à rediriger `www` vers le domaine principal (ou l'inverse) avec une règle de redirection dans Cloudflare.

## Étape 5 : vérifier en ligne après chaque publication

Mon rituel, écrit dans le fichier d'instructions de chaque site : `npm run build` en local, push sur `main`, puis **ouvrir la page sur le vrai domaine** et vérifier qu'elle répond (code HTTP 200). Le tableau de bord montre si le build a réussi, mais seule la page en ligne prouve que tout va bien.

## Le piège que j'ai appris à éviter

Sur Zunrel, un Worker Cloudflare nommé `zunrel` se contente de renvoyer vers `zunrel.pages.dev`. Lancer `wrangler deploy` depuis le dépôt remplacerait ce renvoi et casserait le site. La règle est donc écrite noir sur blanc dans le README : **ne pas lancer `wrangler deploy`**. Si vous mélangez Workers et Pages, documentez qui fait quoi.

## Les statistiques

Cloudflare propose Web Analytics, à activer dans le tableau de bord pour chaque site. Sur Zunrel, j'utilise surtout Google Analytics 4, qui permet de suivre les clics sur les liens affiliés (voir [suivre les clics avec GA4](/blog/suivre-les-clics-affilies-avec-ga4/)).

## Checklist

- [ ] Le build passe en local (`npm run build`).
- [ ] Le dépôt est relié au projet Pages, branche `main`, sortie `dist`.
- [ ] Le domaine personnalisé est ajouté, `www` redirigé.
- [ ] Les enregistrements DNS de l'e-mail sont intacts.
- [ ] Les anciennes URL ont une redirection.
- [ ] Le sitemap est envoyé dans Google Search Console.
- [ ] Les conditions d'usage commercial de l'hébergeur sont compatibles avec l'affiliation.

## En résumé

Cloudflare Pages permet d'héberger un site Astro gratuitement, avec une publication automatique à chaque push et un domaine personnalisé. Vérifiez les conditions commerciales de votre hébergeur, protégez vos enregistrements DNS, regroupez vos pushes, et contrôlez toujours la page en ligne. Le site est en ligne : place au contenu, avec [écrire des guides avec l'IA sans spam](/blog/ecrire-des-guides-avec-l-ia-sans-spam/).
