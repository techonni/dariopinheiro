---
title: "SEO on-page et données structurées : la checklist"
seoTitle: "SEO on-page et données structurées : checklist pour guides"
description: "Titre, description, canonical, liens internes et données structurées (Article, BreadcrumbList) : la checklist SEO on-page que j'applique à chaque guide."
summary: "Titre, description, canonical, plan du texte, liens internes et JSON-LD : tout ce qui se règle sur la page."
category: "Écrire"
published: 2026-10-04
updated: 2026-10-04
order: 10
---

Le SEO « on-page », c'est tout ce qui se règle sur la page elle-même : le titre, la description, la structure du texte, les liens, les données structurées. Ça ne remplace pas un bon contenu, mais ça aide Google à le comprendre et le lecteur à cliquer. Voici la checklist que j'applique, avec ce que l'IA peut automatiser.

## 1. Le titre (balise `<title>`)

C'est la ligne bleue cliquable dans Google. Mes règles :

- **une soixantaine de caractères au maximum**, pour ne pas être coupé ;
- **le sujet au début**, avec les mots que les gens tapent ;
- un titre unique par page.

Sur [Zunrel](https://zunrel.com), le titre d'un guide est la question elle-même. Quand elle est trop longue, un champ facultatif `seoTitle` permet d'avoir un titre plus court pour Google, sans changer le titre visible sur la page. Une revue SEO a ainsi ajouté un `seoTitle` à 17 guides.

## 2. La description (balise `meta description`)

C'est le petit texte sous le titre dans Google. Elle n'influence pas directement le classement, mais elle donne envie de cliquer (ou pas). Visez **environ 150 à 160 caractères**, une phrase qui dit ce que la page apporte. Sur [Techonni](https://techonni.com), le schéma du contenu refuse toute description de plus de 160 caractères : le site ne se construit pas si la règle n'est pas respectée.

L'IA est très bonne pour proposer des descriptions, à condition de lui donner la limite et de vérifier qu'elle ne promet rien que la page ne contient pas.

## 3. L'URL et la balise canonical

- Une URL courte et lisible, en minuscules avec des tirets (voir [architecture d'un site](/blog/architecture-d-un-site-d-affiliation/)).
- Une balise `<link rel="canonical">` sur chaque page, qui donne l'adresse officielle de la page. Elle évite que Google considère comme des doublons les variantes d'une même URL (avec ou sans barre oblique finale, avec des paramètres UTM, etc.).

Dans Astro, la canonical se calcule automatiquement dans le gabarit commun à partir de l'adresse du site et du chemin de la page.

## 4. La structure du texte

- **Un seul `<h1>`** : le titre de la page.
- Des **`<h2>` pour chaque étape ou section**, des `<h3>` pour les sous-parties. Pas de titres choisis pour leur taille.
- **La réponse en haut** de la page, en une ou deux phrases.
- Des paragraphes courts, des listes quand il y a des étapes.

## 5. Les liens internes

Chaque guide donne des liens vers des guides proches, et en reçoit. Sur Zunrel, un script signale tout guide qui reçoit moins de deux liens internes. Utilisez un texte de lien qui décrit la page cible (« guide sur les tests A/B ») plutôt que « cliquez ici ».

## 6. Les liens affiliés

Ajoutez `rel="sponsored"` à chaque lien affilié : c'est ce que Google demande pour les liens rémunérés. Sur mes sites, les liens affiliés portent `rel="sponsored noopener"`. Le détail est dans [placement des liens et mention légale](/blog/liens-affilies-placement-et-mention-legale/).

## 7. Les balises de partage (Open Graph)

Les balises `og:title`, `og:description`, `og:url`, `og:type` et `og:image` contrôlent l'aperçu quand quelqu'un partage votre page sur les réseaux ou dans une messagerie. Sur Zunrel, l'image de partage de chaque guide est son image Pinterest.

## 8. Les données structurées (JSON-LD)

Les données structurées décrivent la page dans un format que Google lit directement. Elles s'ajoutent dans une balise `<script type="application/ld+json">`. Ce que j'utilise :

- **`Article`** sur les guides : titre, description, auteur, dates de publication et de mise à jour. C'est ce que vous trouverez sur chaque guide de ce blog et de Techonni.
- **`BreadcrumbList`** : le fil d'Ariane (Accueil › Blog › Guide). Pieceworth l'ajoute à toutes les pages sauf l'accueil, avec un fil d'Ariane visible.
- **`HowTo`** : Zunrel le génère pour ses guides en étapes. Attention, Google a cessé d'afficher les résultats enrichis HowTo en 2023 ; ces données restent une description propre de la page, mais n'attendez pas d'affichage spécial.
- **`FAQPage`** : Zunrel l'utilise sur sa page FAQ. Là aussi, depuis 2023, Google réserve les résultats enrichis FAQ à certains sites (officiels, santé).

Exemple minimal pour un article :

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre du guide",
  "description": "Description du guide",
  "datePublished": "2026-10-04T00:00:00.000Z",
  "dateModified": "2026-10-04T00:00:00.000Z",
  "author": { "@type": "Person", "name": "Votre nom" }
}
```

Les données structurées doivent correspondre à ce qui est visible sur la page. N'y mettez pas d'avis, de notes ou de prix qui n'apparaissent pas dans le texte. Testez-les avec l'outil de test des résultats enrichis de Google.

## 9. Le sitemap et Search Console

Un `sitemap.xml` à jour, envoyé dans Google Search Console. Ensuite, Search Console devient votre outil principal : il montre les requêtes, les impressions et les clics de chaque page. Sur Zunrel, l'étape suivante prévue est de réécrire le titre et la description des pages qui ont beaucoup d'impressions mais peu de clics.

## 10. La vitesse

Un site statique est rapide par nature. Deux points à surveiller : donner une largeur et une hauteur aux images (pour éviter que la page « saute » pendant le chargement), et alléger les images. Sur Zunrel, le CLS mesuré est de 0.

## Ce que l'IA peut automatiser

Avec un assistant de code IA, la plupart de cette checklist devient du code : canonical, Open Graph, JSON-LD et sitemap générés pour toutes les pages ; un schéma qui bloque les descriptions trop longues ; un script qui signale les guides orphelins. Vous n'avez plus qu'à écrire de bons titres et de bonnes descriptions, et l'IA peut aussi vous proposer des variantes.

## La checklist, en bref

- [ ] Titre unique, environ 60 caractères, sujet au début.
- [ ] Description de 150 à 160 caractères, fidèle à la page.
- [ ] URL lisible, canonical présente.
- [ ] Un seul h1, des h2 par étape, la réponse en haut.
- [ ] Au moins deux liens internes entrants et sortants.
- [ ] Liens affiliés en `rel="sponsored"` et signalés.
- [ ] Open Graph complet.
- [ ] JSON-LD Article (et BreadcrumbList) conforme au contenu visible.
- [ ] Page présente dans le sitemap.
