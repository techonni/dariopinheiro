---
title: "Garder ses guides à jour : la routine de fraîcheur"
seoTitle: "Mettre à jour ses guides d'affiliation : routine et outils"
description: "Garder ses guides d'affiliation à jour : dates visibles, script qui repère les vieux guides, revue mensuelle des prix et mises à jour d'actualité."
summary: "Dates visibles, un script qui signale les guides de plus de 30 jours, une revue mensuelle des prix."
category: "Durer"
published: 2026-10-04
updated: 2026-10-04
order: 19
---

> **Note (octobre 2026) :** techonni.com et pieceworth.com redirigent vers ce site. Ce guide garde ce que j'avais construit. Les liens mènent aux études de cas. Zunrel reste le site public.

Un guide d'affiliation vieillit vite. Un prix change, un menu est renommé, une offre d'essai disparaît, un jeu change de date de sortie. Un guide faux est pire qu'une absence de guide : il trompe le lecteur, et il fait perdre la confiance accumulée. Voici la routine que j'ai mise en place pour garder mes sites à jour, sans y passer mes semaines.

## Pourquoi la fraîcheur compte

- **Pour le lecteur** : il agit sur la base de votre guide. Si le prix ou l'étape est faux, il perd du temps ou de l'argent.
- **Pour l'affiliation** : un guide qui décrit une offre qui n'existe plus ne convertit pas.
- **Pour Google** : il cherche des contenus fiables. Une date de mise à jour honnête et des informations exactes y contribuent ; changer la date sans changer le contenu, non.

## Étape 1 : rendre les dates visibles

Chaque guide doit afficher sa date de mise à jour, et chaque fait sensible sa date de vérification :

- sur [Techonni](/blog/etude-de-cas-techonni/), chaque guide a un champ `updated`, affiché en haut (« Mis à jour le… ») ;
- sur [Zunrel](https://zunrel.com), chaque guide a une date de publication et une date de mise à jour, et les prix sont accompagnés de leur date de vérification ;
- sur [Pieceworth](/blog/etude-de-cas-pieceworth/), les notes sur Farfetch indiquent la date à laquelle les pages officielles ont été lues.

La date de mise à jour doit aussi apparaître dans les données structurées (`dateModified`). Ne la changez que si le contenu a vraiment été revu.

## Étape 2 : un script qui signale les vieux guides

Personne ne se souvient de la date de chaque guide. Sur Zunrel, le script `check-guides`, lancé avant chaque publication, liste **les guides qui n'ont pas été mis à jour depuis plus de 30 jours**, du plus ancien au plus récent. Il vérifie aussi les liens internes et les images manquantes.

Si vos guides sont en Markdown avec une date dans l'en-tête, un assistant de code IA peut écrire ce script en quelques minutes. Le seuil (30, 60, 90 jours) dépend de la vitesse à laquelle votre niche change.

## Étape 3 : une revue mensuelle des prix et des offres

Les prix sont ce qui change le plus souvent. Sur Zunrel, une revue mensuelle est inscrite dans le calendrier : vérifier les prix de Shopify et de Leadpages sur les pages officielles, mettre à jour la page « Meilleures offres du moment » et la date de vérification (un champ `verifiedOn` dans la page). La prochaine revue est notée dans le fichier de passation, avec sa date.

Ma méthode pour une revue :

1. ouvrir la page officielle des tarifs ;
2. comparer avec ce qui est écrit dans les guides ;
3. corriger tous les guides concernés dans la même session (un prix apparaît souvent dans plusieurs guides et plusieurs langues) ;
4. mettre à jour la date de vérification.

Si les prix sont dans un fichier de données central, l'étape 3 devient une seule modification.

## Étape 4 : les mises à jour d'actualité

Dans une niche d'actualité comme Techonni, on ne peut pas attendre la revue mensuelle. Chaque annonce officielle (une heure de sortie, une taille de jeu, un nouveau mode en ligne) doit être reportée **le jour même** dans les guides concernés, avec la nouvelle source. Le plan du site jusqu'au 19 novembre 2026 est justement de suivre ces annonces.

Astuce : listez à l'avance les guides qui dépendent d'une information attendue. Le jour de l'annonce, vous savez exactement quoi modifier.

## Étape 5 : quand un guide devient faux, pas seulement vieux

Parfois, un guide n'est plus à jour du tout : la fonctionnalité a disparu, le programme d'affiliation a fermé. Trois options :

- **le réécrire** si la question existe toujours ;
- **le fusionner** avec un guide proche, avec une redirection 301 ;
- **le supprimer** et rediriger, comme je l'ai fait sur Pieceworth quand j'ai quitté Impact. Pensez alors aux épingles Pinterest et aux liens internes qui pointaient vers lui, et renvoyez le sitemap dans Search Console.

Et si une information n'est pas encore disponible, il vaut mieux cacher la page que publier du faux. Sur Zunrel, le guide anglais sur les prix de Shopify reste caché tant que les prix en dollars ne sont pas vérifiés.

## Étape 6 : utiliser Search Console pour prioriser

Avec beaucoup de guides, commencez par ceux qui comptent : les pages qui ont le plus d'impressions dans Search Console, et celles dont la position baisse. Sur Zunrel, les traductions des anciens guides ont été faites dans cet esprit : en commençant par les plus visités.

## Étape 7 : laisser l'IA faire la comparaison, pas la vérification

L'IA est très utile pour une mise à jour :

```
Voici la page officielle des tarifs (copiée aujourd'hui) et mon guide.
Liste tous les écarts : prix, noms d'offres, durées d'essai, fonctionnalités.
Ne modifie rien : liste seulement, avec le passage concerné.
```

Elle repère vite les écarts. Mais la source, c'est la page officielle que vous avez ouverte vous-même, pas ce que l'IA croit savoir.

## Ma routine, résumée

| Quand | Quoi |
|---|---|
| Avant chaque publication | Lancer le script de vérification (guides de plus de 30 jours, liens internes). |
| Chaque mois | Revue des prix et des offres, date de vérification mise à jour. |
| À chaque annonce officielle | Mise à jour le jour même des guides concernés (niche d'actualité). |
| Quand un programme change | Réécrire, fusionner ou supprimer avec redirection. |
| Régulièrement | Search Console : prioriser les pages qui comptent. |

## En résumé

La fraîcheur est une routine, pas un effort héroïque : des dates visibles et honnêtes, un script qui signale les guides anciens, une revue mensuelle des prix, des mises à jour le jour même quand l'actualité l'exige, et le courage de cacher ou supprimer ce qui est devenu faux. L'IA compare ; vous vérifiez. Pour finir, voici [les erreurs à éviter et mon workflow complet](/blog/erreurs-a-eviter-et-workflow-ia/).
