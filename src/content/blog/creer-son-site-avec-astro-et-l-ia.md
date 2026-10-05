---
title: "Créer son site avec Astro et un assistant de code IA"
seoTitle: "Créer un site d'affiliation avec Astro et un assistant IA"
description: "Pourquoi j'utilise Astro pour mes sites d'affiliation, et comment je travaille avec un assistant de code IA : instructions, contenu en fichiers, vérifications."
summary: "Un site statique rapide, du contenu en fichiers, et un assistant IA guidé par un fichier d'instructions."
category: "Construire"
published: 2026-10-04
updated: 2026-10-04
order: 5
---

> **Note (octobre 2026) :** techonni.com et pieceworth.com redirigent vers ce site. Ce guide garde ce que j'avais construit. Les liens mènent aux études de cas. Zunrel reste le site public.

Tous mes sites tournent sur **Astro** : [Zunrel](https://zunrel.com), [Pieceworth](/blog/etude-de-cas-pieceworth/), [Techonni](/blog/etude-de-cas-techonni/) et ce hub, dariopinheiro.com. Et je ne les écris pas seul : je travaille avec un assistant de code IA (j'utilise Claude Code). Voici pourquoi ce duo fonctionne bien pour des sites d'affiliation, et comment l'organiser pour que l'IA reste fiable.

## Pourquoi Astro pour un site d'affiliation

Astro génère un **site statique** : au moment du build, chaque page devient un fichier HTML. Pour un site de guides, c'est idéal :

- **c'est rapide** : pas de base de données, pas de serveur à faire tourner. Sur Zunrel, la vitesse mesurée sur mobile donnait un LCP sous 0,5 seconde et aucun décalage de mise en page (CLS 0) ;
- **c'est gratuit à héberger** sur Cloudflare Pages (voir [ce guide](/blog/heberger-gratuitement-sur-cloudflare-pages/)) ;
- **le contenu est dans des fichiers**, donc versionné dans Git, relisible et modifiable par une IA ;
- **pas de plugins à mettre à jour** comme sur un CMS classique.

Mes sites partagent la même base : Astro, la police Geist, un fichier de « tokens » de design commun (couleurs, arrondis, espacements). Zunrel et Pieceworth ajoutent Tailwind pour le style, et Zunrel ajoute Pagefind pour la recherche interne.

## Étape 1 : créer le projet

Il faut Node.js installé, puis :

```
npm create astro@latest
cd mon-site
npm run dev
```

Le site s'ouvre sur `http://localhost:4321`. Dans `astro.config.mjs`, déclarez tout de suite l'adresse du site et la règle des barres obliques :

```js
export default defineConfig({
  site: "https://exemple.com",
  trailingSlash: "always",
});
```

## Étape 2 : choisir où vit le contenu

Deux options, que j'utilise toutes les deux :

- **Des fichiers Markdown dans une « content collection »** : un fichier par guide, avec un en-tête (titre, description, date, sources). C'est le cas de Techonni et de ce blog. C'est le plus simple pour écrire du texte long.
- **Un fichier de données TypeScript** : chaque guide est un objet (question, résumé, étapes, pièges, sources, guides liés). C'est le cas de Zunrel et de Pieceworth. C'est plus structuré, et pratique quand tous les guides ont exactement les mêmes blocs.

L'important est de définir un **schéma** : Astro refuse alors de construire le site si un guide oublie un champ ou dépasse 160 caractères de description. C'est une première barrière contre les oublis de l'IA.

## Étape 3 : écrire le fichier d'instructions de l'assistant

C'est l'étape la plus importante. Chaque dépôt contient un fichier d'instructions (`CLAUDE.md` chez moi) que l'assistant lit à chaque session. On y met :

- **ce qu'est le site**, sa langue et son public ;
- **les règles qui ne se discutent pas**. Sur ce hub, par exemple : « ne jamais inventer de phrases sur moi, de liens ou de chiffres ». Sur Techonni : ne jamais inventer un prix, une date ou un lien d'affiliation, et écrire comme une rumeur ce qui n'est pas officiel ;
- **comment publier** : `npm run build`, puis push sur `main`, puis vérifier la page en ligne ;
- **la fin de session** : mettre à jour un fichier de passation.

Ce fichier transforme un assistant généraliste en collègue qui connaît vos règles. Chaque fois que l'IA fait une erreur deux fois, j'ajoute une règle.

## Étape 4 : travailler par petites tâches

Je donne à l'assistant des tâches précises et vérifiables : « ajoute ce guide avec ces sources », « vérifie que chaque guide a deux liens internes », « ajoute un bouton de téléchargement PDF à tous les guides ». Une tâche floue (« améliore le site ») produit des changements difficiles à relire.

Sur Zunrel, une règle dit aussi que quand une liste d'étapes est donnée, l'assistant les fait toutes dans la même session, en publiant et en vérifiant chaque étape avant la suivante.

## Étape 5 : un fichier de passation entre les sessions

L'assistant ne se souvient pas de la session précédente. Chaque dépôt a donc un fichier `PROXIMA-SESSAO.md` (« prochaine session », en portugais, ma langue) : l'état du site, ce qui a été fait, ce qui attend une action de ma part, et les prochaines étapes. Une nouvelle session commence en lisant ce fichier. C'est simple et ça évite de tout réexpliquer.

## Étape 6 : faire vérifier par des scripts, pas par la mémoire

L'IA oublie ; un script, non. Sur Zunrel, un script `check-guides` vérifie avant chaque publication les identifiants des guides, les images Pinterest manquantes, les guides avec moins de deux liens internes et ceux qui n'ont pas été mis à jour depuis plus de 30 jours. Le build d'Astro, avec son schéma, fait le reste.

## Étape 7 : relire avant de publier

Je relis les changements avant qu'ils partent en ligne, surtout les textes. L'assistant écrit vite et bien, mais il peut se tromper sur un fait, un nom de menu ou un lien. Sur Zunrel, des noms de menus de Leadpages écrits par l'IA ont été marqués « à confirmer » dans les notes, parce que la page d'aide officielle n'était pas accessible ce jour-là. C'est exactement le bon réflexe : signaler le doute plutôt que le cacher.

## Ce que l'IA fait très bien, et moins bien

| Très bien | Moins bien |
|---|---|
| Créer des pages et des composants à partir d'un modèle | Connaître les faits du jour (prix, dates, menus) |
| Appliquer une même modification à 50 guides | Juger si un texte est vraiment utile |
| Écrire des scripts de vérification | Savoir ce que vous n'avez pas écrit dans les instructions |
| Traduire en gardant la structure | Deviner les règles d'un programme d'affiliation |

## En résumé

Astro donne un site rapide, gratuit à héberger et dont le contenu vit dans des fichiers. L'assistant de code IA fait le travail répétitif, à condition d'avoir un fichier d'instructions clair, des tâches précises, un fichier de passation et des scripts de vérification. Vous gardez le rôle de rédacteur en chef. Pour la mise en ligne, passez à [Cloudflare Pages](/blog/heberger-gratuitement-sur-cloudflare-pages/).
