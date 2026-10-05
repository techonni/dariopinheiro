---
title: "Recherche de mots-clés avec l'IA : trouver les questions que les gens tapent"
seoTitle: "Recherche de mots-clés avec l'IA : la méthode simple"
description: "Une méthode simple pour trouver les questions de vos lecteurs avec Google, Search Console et l'IA, les regrouper par intention et en faire un plan de guides."
summary: "Récolter les vraies questions, les faire regrouper par l'IA, puis en faire un calendrier de guides."
category: "Démarrer"
published: 2026-10-04
updated: 2026-10-04
order: 3
---

> **Note (octobre 2026) :** techonni.com et pieceworth.com redirigent vers ce site. Ce guide garde ce que j'avais construit. Les liens mènent aux études de cas. Zunrel reste le site public.

Sur mes sites, chaque guide répond à **une question**. Sur Zunrel, le titre d'un guide est littéralement la question : « Comment ajouter des variantes (taille, couleur) à un produit Shopify ? ». Cette habitude simplifie toute la recherche de mots-clés : au lieu de chasser des « mots-clés », on récolte des questions. Voici la méthode, et le rôle exact de l'IA.

## Pourquoi des questions plutôt que des mots-clés

Une question dit ce que la personne veut faire. « Shopify variantes » est vague ; « comment ajouter des variantes à un produit Shopify » indique une intention claire, avec une réponse en étapes. C'est exactement le format d'un guide.

Les questions permettent aussi de décider du **type de page** :

- « Comment faire… » → un guide en étapes ;
- « Combien coûte… » → une page de prix, avec la date de vérification ;
- « X ou Y ? » → un comparatif ;
- « Est-ce que… ? » → une réponse courte, ou une FAQ.

## Étape 1 : récolter les questions à la source

L'IA ne connaît pas les volumes de recherche réels. La récolte se fait donc à la main, sur des sources réelles :

1. **La saisie semi-automatique de Google.** Tapez le nom de l'outil ou du sujet, puis « comment », « pourquoi », « combien », « est-ce que ». Notez tout.
2. **Le bloc « Autres questions posées »** dans les résultats. Chaque clic en fait apparaître d'autres.
3. **Les pages d'aide officielles.** Pour Zunrel, l'aide de Leadpages et de Shopify montre les tâches courantes. Pour Pieceworth, la FAQ de Farfetch liste déjà les vraies inquiétudes des acheteurs (retours, droits de douane, authenticité).
4. **Les forums et réseaux** (groupes, Reddit) : les questions y sont formulées avec les mots des gens.
5. **Search Console**, dès que le site existe : il montre les requêtes pour lesquelles Google affiche déjà vos pages. C'est la meilleure source à moyen terme.

Collez tout dans un simple fichier texte, une question par ligne, sans trier.

## Étape 2 : faire regrouper par l'IA

C'est là que l'IA fait gagner des heures. Donnez-lui votre liste brute :

```
Voici 120 questions récoltées sur Google et des forums, sur [sujet].
1. Supprime les doublons et les questions qui veulent dire la même chose.
2. Regroupe-les par intention (apprendre, comparer, acheter, résoudre un problème).
3. Pour chaque groupe, propose UN titre de guide sous forme de question.
4. Signale les questions qui demandent des faits à vérifier (prix, dates, règles).
N'ajoute aucune question qui n'est pas dans ma liste.
```

La dernière ligne est importante : sans elle, l'IA « complète » avec des questions plausibles que personne ne tape.

## Étape 3 : une page par intention, pas par mot-clé

Le piège classique est de faire une page pour chaque variante (« ajouter variante Shopify », « créer variante Shopify », « variantes produit Shopify »). C'est la même intention : une seule page, complète, qui répond à toutes ces formulations.

Sur Zunrel, les guides sont rangés par thèmes (« Choisir son offre », « Créer une page », « Publier », « Récolter des contacts », « Optimiser », « IA et vidéo », « Vendre avec Shopify »). Chaque nouvelle question est rattachée à un thème avant d'être écrite, ce qui évite les doublons et prépare les liens internes (voir [architecture d'un site d'affiliation](/blog/architecture-d-un-site-d-affiliation/)).

## Étape 4 : prioriser

Je classe les guides à écrire avec trois questions simples :

- **Est-ce proche d'un achat ou d'un abonnement ?** Un guide sur les prix ou le choix d'un forfait est plus proche d'un clic affilié qu'un guide de culture générale.
- **Est-ce que je peux le vérifier aujourd'hui ?** Si un guide demande des captures ou des informations que je ne peux pas obtenir, il attend.
- **Y a-t-il une saison ?** Le calendrier de Zunrel prévoit par exemple un guide « préparer sa boutique Shopify pour le Black Friday » avant fin novembre.

Le résultat est un calendrier : une question par semaine, avec une colonne « pourquoi ». Sur Zunrel, ce calendrier vit dans un fichier Markdown du dépôt, et chaque ligne passe à ✅ quand le guide est publié.

## Étape 5 : vérifier avant d'écrire

Pour chaque question retenue, refaites une recherche Google et regardez ce qui sort. Demandez-vous : qu'est-ce que je peux apporter de plus ? Des étapes plus claires, une version en français quand tout est en anglais, des faits vérifiés avec la date, une réponse courte en haut de page ? Si la réponse est « rien », passez à la question suivante.

## Cas particulier : une niche d'actualité

Sur [Techonni](/blog/etude-de-cas-techonni/), les questions viennent surtout de l'actualité : date de sortie de GTA 6, prix et éditions, version PC, consoles compatibles, espace disque. Les volumes montent d'un coup à chaque annonce. La recherche de mots-clés y ressemble plus à une veille : suivre les annonces officielles et mettre à jour les guides le jour même (voir l'[étude de cas Techonni](/blog/etude-de-cas-techonni/)).

## Ce que je ne fais pas

- Je ne demande pas à l'IA des « volumes de recherche » : elle les invente.
- Je ne choisis pas une question parce qu'un outil dit qu'elle est « facile » : je regarde moi-même les résultats.
- Je n'écris pas de page pour une question que je ne peux pas traiter honnêtement.

## En résumé

Récoltez les questions sur des sources réelles, faites-les nettoyer et regrouper par l'IA, gardez une page par intention, puis classez-les dans un calendrier simple. Ensuite, laissez Search Console vous dire ce que Google pense de vos pages, et ajustez. Pour la suite, voyez comment [écrire ces guides avec l'IA sans faire du spam](/blog/ecrire-des-guides-avec-l-ia-sans-spam/).
