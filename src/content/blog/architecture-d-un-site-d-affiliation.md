---
title: "Architecture d'un site d'affiliation : pages, URL et liens internes"
seoTitle: "Architecture d'un site d'affiliation : pages, URL, liens"
description: "Quelles pages créer, comment nommer les URL et relier les guides entre eux : l'architecture simple que j'utilise sur Zunrel, Pieceworth et Techonni."
summary: "Accueil, guides, thèmes, pages de confiance : un plan simple, des URL lisibles et des liens internes."
category: "Construire"
published: 2026-10-04
updated: 2026-10-04
order: 4
---

> **Note (octobre 2026) :** techonni.com et pieceworth.com redirigent vers ce site. Ce guide garde ce que j'avais construit. Les liens mènent aux études de cas. Zunrel reste le site public.

L'architecture d'un site, c'est la liste de ses pages et la façon dont elles se relient. Pour un site d'affiliation, elle a deux lecteurs : la personne qui cherche une réponse, et Google, qui doit comprendre de quoi parle le site. Voici le plan que j'utilise sur ces sites, de la plus simple à la plus complète.

## Le principe : peu de types de pages, beaucoup de guides

Un site d'affiliation n'a pas besoin de cinquante modèles de pages. Il lui faut :

1. **Une page d'accueil** qui dit en une phrase de quoi parle le site et montre les guides importants.
2. **Des guides**, tous construits sur le même modèle.
3. **Une liste des guides**, éventuellement rangée par thèmes.
4. **Des pages de confiance** : à propos, explication de l'affiliation, mentions légales, contact.
5. **Un plan du site** (`sitemap.xml`) pour Google.

Tout le reste est optionnel, et ne vient qu'une fois que ces bases fonctionnent.

## Trois sites, trois niveaux

### Le plus simple : Techonni

[Techonni](/blog/etude-de-cas-techonni/) est le plus récent. Son plan tient en quelques pages : l'accueil (avec un compte à rebours jusqu'à la sortie de GTA 6), la liste des guides, un guide par page sous `/guides/<slug>/`, une page « À propos », des mentions légales, une page 404, un `sitemap.xml` et un `robots.txt`. Chaque guide est un fichier Markdown : **le nom du fichier devient l'URL**. C'est l'architecture que je conseille pour démarrer.

### Bilingue : Pieceworth

[Pieceworth](/blog/etude-de-cas-pieceworth/) a deux langues : l'anglais (lecteurs américains) à la racine, et le français sous `/fr/`. Chaque guide existe dans les deux langues, avec le même identifiant interne et une URL locale (par exemple `/guides/...` et `/fr/guides/...`). On y trouve aussi une page qui explique l'affiliation (`/affiliate-disclosure/` en anglais, une page « affiliation » en français) et, sur toutes les pages sauf l'accueil, **un fil d'Ariane** visible avec ses données structurées.

### Le plus complet : Zunrel

[Zunrel](https://zunrel.com) a grandi par couches : guides (`/guides/<slug>/`), thèmes (`/themes/<slug>/`), fiches outils (`/outils/<slug>/`), formats de guides, une page des offres du moment (`/offres/`), une FAQ, une recherche interne, une page newsletter avec des bonus, un kit média, et les versions portugaise (`/pt/`) et anglaise (`/en/`). Ce n'est pas un modèle à copier au jour 1 : chaque page a été ajoutée parce qu'elle répondait à un besoin.

## Étape 1 : écrire le plan avant le code

Avant d'ouvrir l'éditeur, écrivez la liste des pages dans un fichier texte. Pour chaque page : son URL, son but, et vers quelles pages elle mène. L'IA est très utile ici :

```
Voici ma niche et ma liste de 30 questions (une par guide).
Propose une architecture de site statique : types de pages, URL,
regroupement des guides en 5 à 7 thèmes, et pour chaque guide
2 autres guides à lier. Pas de pages inutiles.
```

Relisez ensuite le résultat avec un œil critique : l'IA a tendance à proposer trop de pages.

## Étape 2 : des URL courtes, lisibles et définitives

Mes règles :

- **en minuscules, avec des tirets**, sans accents : `/guides/creer-une-collection-shopify/` ;
- **la langue dans le chemin** quand il y en a plusieurs : `/fr/`, `/pt/`, `/en/` ;
- **une barre oblique finale partout** (ou nulle part), mais toujours la même. Mes sites Astro utilisent `trailingSlash: "always"` ;
- **pas de date dans l'URL** : un guide mis à jour garde son adresse.

Une URL ne devrait jamais changer. Si c'est inévitable, ajoutez une redirection. Sur Cloudflare Pages, elles se déclarent dans un fichier `public/_redirects` ; celui de Zunrel en contient plusieurs dizaines, héritées des changements du site.

## Étape 3 : un modèle de guide unique

Tous les guides d'un site doivent avoir la même structure. Sur Zunrel, un guide contient : une question (le titre), un résumé, une introduction, des étapes, les pièges à éviter, les outils utilisés, les sources et des guides liés. Sur Techonni, chaque fichier Markdown déclare son titre, sa description (160 caractères maximum), sa date de mise à jour, son ordre et ses sources.

Un modèle unique a deux avantages : le lecteur s'y retrouve, et l'IA peut produire des brouillons dans le bon format.

## Étape 4 : les liens internes, la partie la plus négligée

Chaque guide doit **recevoir** des liens d'autres guides, pas seulement en donner. Sur Zunrel, un script vérifie avant chaque publication que chaque guide a au moins **deux liens internes entrants**, et signale les guides orphelins. Un audit SEO a ainsi trouvé cinq guides qui n'en avaient aucun ; ils en ont maintenant deux chacun.

Les bons emplacements pour un lien interne :

- dans le texte, au moment où la question suivante se pose (« pour la suite, voir… ») ;
- dans un bloc « À lire ensuite » en fin de guide ;
- depuis la page du thème et depuis l'accueil pour les guides importants.

## Étape 5 : les pages de confiance

Un site d'affiliation recommande des achats. Le lecteur et les programmes d'affiliation veulent savoir qui est derrière et comment le site gagne de l'argent. Au minimum : une page « À propos », une page qui explique l'affiliation et une mention près de chaque lien affilié (voir [placement des liens et mention légale](/blog/liens-affilies-placement-et-mention-legale/)). Techonni ajoute en pied de page qu'il s'agit d'un site de fans indépendant, non affilié à Rockstar Games ni à Take-Two.

## Étape 6 : le plan du site

Un `sitemap.xml` liste toutes les URL que Google doit connaître. Ces sites le généraient automatiquement au moment du build (un fichier `src/pages/sitemap.xml.ts` dans Astro), puis je l'envoie une fois dans Google Search Console.

## En résumé

Commencez petit, comme Techonni : un accueil, des guides en Markdown, une liste, des pages de confiance et un sitemap. Gardez des URL propres et définitives, un modèle de guide unique, et vérifiez que chaque guide reçoit des liens. Ajoutez thèmes, langues et pages spéciales seulement quand le besoin apparaît. Pour passer au code, voyez [créer son site avec Astro et l'IA](/blog/creer-son-site-avec-astro-et-l-ia/).
