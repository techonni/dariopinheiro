---
title: "Étude de cas : Pieceworth, un site d'affiliation luxe"
seoTitle: "Étude de cas Pieceworth : site d'affiliation luxe avec l'IA"
description: "Comment est construit Pieceworth : 22 guides Farfetch en anglais et en français, des faits tirés des pages officielles, Sovrn Commerce et un changement de cap."
summary: "22 guides Farfetch en anglais et en français, des faits sourcés et datés, et le passage d'Impact à Sovrn."
category: "Études de cas"
published: 2026-10-04
updated: 2026-10-04
order: 17
---

[Pieceworth](https://pieceworth.com) aide à **bien acheter le luxe en ligne**. C'est mon site le plus exigeant sur les faits : quand on parle de retours, de droits de douane ou de paiement en plusieurs fois pour des achats de plusieurs centaines d'euros, une erreur coûte cher au lecteur. Voici comment il est construit, et le changement de cap qu'il a connu.

## La niche : les questions avant un achat de luxe

Les acheteurs de luxe en ligne se posent toujours les mêmes questions : est-ce authentique ? Combien coûtent la livraison et les droits de douane ? Puis-je retourner l'article ? Comment payer ? Pieceworth y répond, boutique par boutique. Aujourd'hui, le site se concentre sur **Farfetch**.

## Les chiffres que je peux donner

- **22 guides** sur Farfetch, en **anglais** et en **français** (22 dans chaque langue).
- Les sujets : est-ce fiable, comment commander, prix, droits de douane, livraison, commande de plusieurs boutiques, retours, retours gratuits, remboursement, articles « Final Sale », annulation, moyens de paiement, paiement en plusieurs fois, cryptomonnaies, authenticité, seconde main, précommande, programme de fidélité Access, tailles, articles épuisés, commande sans compte, promotions.

## La technique

- **Astro** et **Tailwind**, site statique, hébergé sur **Cloudflare Pages**.
- Les guides dans deux fichiers de données, un par langue, avec le même identifiant et une URL locale.
- L'anglais (public américain) à la racine, le français (France et Belgique) sous `/fr/`, un sélecteur « US · FR », des balises hreflang.
- Un fil d'Ariane visible sur toutes les pages sauf l'accueil, avec ses données structurées BreadcrumbList.
- Un sitemap généré, envoyé dans Search Console.

## La règle d'or : chaque fait vient d'une page officielle

Tout ce que Pieceworth dit de Farfetch vient des pages officielles : la FAQ, la page des retours et remboursements, la page commandes et livraison, la page paiement et prix, le programme Access, les conditions des promotions. Les faits sont rassemblés dans un fichier de notes du dépôt, avec la date de lecture (29 septembre 2026), et chaque guide liste ses sources.

C'est ce fichier que l'assistant IA utilise pour rédiger, jamais sa mémoire. Deux exemples montrent pourquoi :

- **Une contradiction officielle.** La page des retours indique 30 jours pour renvoyer un article. La FAQ en français affichait « 130 jours ». J'ai retenu 30 jours, celui de la page dédiée, et noté l'écart (voir [vérifier les faits](/blog/verifier-les-faits-d-un-contenu-ia/)).
- **Des règles différentes selon le pays.** Le plafond du paiement en plusieurs fois n'est pas le même aux États-Unis (1 500 $), en France (1 500 €) ou en Belgique (5 000 €). La version française utilise les règles européennes, la version anglaise les règles américaines.

Autres règles du site : **ne jamais publier de codes promo**, et ne rien affirmer qui n'a pas été vérifié.

## L'affiliation : d'Impact à Sovrn Commerce

C'est l'histoire la plus instructive de ce site.

- **Au départ**, Pieceworth travaillait avec **Impact** : des guides sur plusieurs boutiques, des pages de boutiques, une sélection de produits.
- **Le 29 septembre 2026**, j'ai quitté Impact. Tout ce qui en dépendait a été supprimé du site (guides, pages de boutiques, sélection, scripts, épingles). Ce travail reste dans l'historique Git, mais n'est plus en ligne.
- **Le site est passé à Sovrn Commerce** (anciennement VigLink) : une seule validation pour tout le site, puis un script qui transforme les liens normaux vers les boutiques en liens affiliés. Farfetch fonctionne par ce biais.

L'avantage du modèle Sovrn pour le luxe : j'écris un lien normal vers la boutique, je n'invente jamais de lien de suivi, et le même site peut ensuite couvrir d'autres boutiques sans gérer un programme par marque.

Chaque lien vers une boutique porte `rel="sponsored"` et la mention « Affiliate link », et une page dédiée explique l'affiliation (voir [placement et mention légale](/blog/liens-affilies-placement-et-mention-legale/)).

> État de la validation Sovrn et premiers résultats : [à compléter]. Au 29 septembre 2026, la validation était en cours.

## Le design et la voix

Pieceworth a son propre guide de marque, rangé dans le dépôt pour que l'assistant IA le respecte : une voix calme et pratique, des titres qui sont les questions que le lecteur taperait, des étapes à l'impératif, pas d'emphase ni de points d'exclamation. Visuellement, le site partage désormais l'identité commune de tous mes sites.

## Ce que le changement de cap m'a appris

1. **Ne pas construire le site autour d'un programme.** Quand Impact est parti, une partie du contenu est partie avec. Les guides Farfetch, eux, sont utiles indépendamment du réseau.
2. **Nettoyer complètement.** Supprimer les pages ne suffit pas : les anciennes épingles Pinterest pointaient encore vers des guides supprimés, et il faut renvoyer le sitemap à Search Console pour que Google oublie les anciennes pages.
3. **Garder l'historique.** Grâce à Git, rien n'est perdu : si un jour un programme revient, le travail est là.

## Les prochaines étapes

- Lire les pages officielles de Farfetch qui manquent encore (commandes et livraison en détail, paiement, programme Access, contact) et compléter les sources.
- Créer de nouvelles épingles Pinterest pour les guides Farfetch.
- Après la validation Sovrn, voir quelles autres boutiques de luxe fonctionnent par ce réseau, et écrire des guides avec les mêmes règles.

## Ce que vous pouvez en retenir

Dans une niche où les achats sont chers, la confiance est tout. Pieceworth la construit avec des faits tirés des pages officielles, datés et sourcés, adaptés au pays du lecteur, et avec une affiliation clairement signalée. Et quand un programme ne convient plus, on change, proprement. Pour une niche à l'opposé, portée par l'actualité, lisez l'[étude de cas Techonni](/blog/etude-de-cas-techonni/).
