---
title: "Pinterest comme source de trafic pour un site d'affiliation"
seoTitle: "Pinterest pour un site d'affiliation : épingles et CSV"
description: "Comment j'utilise Pinterest pour Zunrel : des épingles générées par script, plusieurs variantes par guide, un import CSV programmé et des liens UTM."
summary: "Des épingles 1000 × 1500 créées par script, plusieurs variantes par guide, et un import CSV programmé."
category: "Faire venir du monde"
published: 2026-10-04
updated: 2026-10-04
order: 13
---

Pinterest est souvent vu comme un réseau d'images de déco et de recettes. C'est aussi un **moteur de recherche visuel** : les gens y cherchent des idées et des solutions, et une épingle peut envoyer des visites pendant longtemps. Pour des guides « comment faire », c'est une source de trafic logique. Voici comment je l'utilise pour [Zunrel](https://zunrel.com), avec l'IA pour faire le travail répétitif.

## Pourquoi Pinterest pour des guides

- Les gens y **cherchent** (« créer une boutique en ligne », « landing page »), ils ne font pas que défiler.
- Une épingle reste visible **des mois**, contrairement à une publication sur X qui disparaît en quelques heures.
- Un compte professionnel est gratuit et permet de programmer des épingles en masse.

## Étape 1 : un compte professionnel et des tableaux

Créez un compte professionnel (ou convertissez votre compte), revendiquez votre site si possible, et créez quelques **tableaux** thématiques. Sur Zunrel, deux tableaux suffisent pour l'instant : « Shopify : ouvrir sa boutique » et « Landing pages : Leadpages et HTML Pub ». Un tableau = un sujet que vos lecteurs cherchent.

## Étape 2 : des images au bon format

Le format recommandé est vertical, en **2:3**. Mes épingles font **1000 × 1500 pixels**, en JPEG. Sur chaque image : le titre du guide en gros, quelques mots d'explication, et le nom du site.

Je ne dessine pas ces images à la main. Sur Zunrel, un script (`make-pins.mjs`) crée automatiquement l'image de chaque guide qui n'en a pas encore : il remplit un modèle HTML avec le titre, puis en fait une capture au bon format avec un navigateur sans interface. C'est exactement le genre de script qu'un assistant de code IA écrit en quelques minutes.

## Étape 3 : plusieurs variantes par guide

Pinterest aime les images nouvelles. Plutôt que de republier la même image, les guides de Zunrel ont aujourd’hui **jusqu’à quatre variantes** :

1. **normale** : fond clair, le titre du guide ;
2. **« erreurs »** : fond sombre, « Les erreurs à éviter » ;
3. **minimaliste** : juste le titre et les étapes ;
4. **« étapes »** : fond noir avec la liste des étapes.

Chaque variante a son propre titre et sa propre description, pour toucher des recherches différentes. Depuis que les guides n'ont plus de captures d'écran (décision du 2 octobre 2026), les nouvelles épingles sont faites uniquement de texte : titre et étapes.

## Étape 4 : programmer en masse avec un fichier CSV

Publier une épingle à la main prend du temps. Pinterest permet de **créer des épingles en masse à partir d'un fichier CSV** (dans les paramètres du compte, création groupée), avec une date de publication pour chacune. Le fichier contient, par ligne : le titre, l'URL de l'image, le tableau, la description, le lien et la date de publication.

Mon organisation :

- l'assistant IA prépare le fichier CSV (`pinterest-agendar.csv`, puis `-2`, `-3`, `-4`…) à partir de la liste des guides ;
- je l'importe moi-même en un clic, environ tous les dix jours ;
- chaque fichier programme des dizaines d'épingles : le premier en contenait 94, réparties sur dix jours.

Deux règles apprises à l'usage :

- **chaque titre ne doit apparaître qu'une seule fois dans un même fichier**, et ne pas dépasser 100 caractères. Lors d'un import, deux épingles au titre en double n'ont pas été créées ; elles sont reparties dans un petit fichier à part ;
- **pas plus de 15 épingles par jour**, pour rester raisonnable. Je vise environ 10.

## Étape 5 : des liens avec UTM

Chaque épingle mène au guide en français, avec des paramètres UTM :

```
https://zunrel.com/guides/<slug>/?utm_source=pinterest&utm_medium=social&utm_campaign=pin-csv&utm_content=<slug>-<variante>
```

Dans Google Analytics 4, je peux ainsi voir les visites venues de Pinterest, et même quelle variante d'image les a envoyées (voir [suivre les clics avec GA4](/blog/suivre-les-clics-affilies-avec-ga4/)).

Une précision : les images sont en français, donc les épingles mènent toujours aux guides français, jamais aux versions portugaises ou anglaises.

## Étape 6 : un bouton Pinterest sur les guides

Sur Zunrel, chaque guide propose un bouton pour l'enregistrer sur Pinterest, avec son image. Le lecteur qui trouve le guide utile peut l'épingler lui-même, ce qui fait circuler l'image.

## Les pièges

- **Les épingles qui pointent vers des pages supprimées.** Sur [Pieceworth](https://pieceworth.com), quand j'ai quitté Impact, les guides concernés ont été supprimés, mais les anciennes épingles pointaient encore vers eux. Il faut alors supprimer ces épingles, ou rediriger les anciennes URL.
- **Les liens affiliés directs dans les épingles.** Je préfère envoyer vers le guide, qui contient les liens affiliés signalés, plutôt que de mettre un lien affilié directement sur l'épingle. Lisez les règles de Pinterest et de vos programmes.
- **Publier tout d'un coup.** Mieux vaut un rythme régulier, programmé, que 200 épingles en une journée.

## Ce que l'IA fait pour moi sur Pinterest

- Écrire le script qui crée les images.
- Proposer des titres et des descriptions par variante, avec les limites de caractères.
- Générer le CSV avec les dates, les tableaux et les liens UTM.
- Vérifier qu'aucun titre n'est en double.

Ce qui reste à faire à la main : l'import du fichier (il n'y a pas de connecteur automatique dans mon organisation) et le regard critique sur les images.

## En résumé

Pinterest fonctionne bien pour des guides pratiques : des images verticales générées par script, plusieurs variantes par guide, un import CSV programmé, des titres uniques et des liens avec UTM. L'IA fait la production ; vous gardez l'import et le contrôle. Pour relier tous vos réseaux à un seul endroit, voyez [envoyer le trafic social vers un hub](/blog/reseaux-sociaux-vers-un-hub/).
