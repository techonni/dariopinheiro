---
title: "Étude de cas : Zunrel, des guides SaaS en trois langues"
seoTitle: "Étude de cas Zunrel : site d'affiliation SaaS fait avec l'IA"
description: "Comment est construit Zunrel : 56 guides Leadpages, HTML Pub et Shopify en français, portugais et anglais, Astro, Cloudflare Pages, GA4, Pinterest et Mailchimp."
summary: "56 guides en trois langues, Astro, Cloudflare Pages, GA4, Pinterest, Mailchimp : la machine complète."
category: "Études de cas"
published: 2026-10-04
updated: 2026-10-04
order: 16
---

[Zunrel](https://zunrel.com) est mon site d'affiliation le plus complet. Il publie des guides « comment faire », étape par étape, pour trois outils : **Leadpages**, **HTML Pub** et **Shopify**. C'est aussi le site où j'ai testé presque tout ce que j'explique sur ce blog. Voici comment il est construit, ce qui a marché, ce que j'ai changé, et où il en est, sans enjoliver.

## La niche : trois outils d'une même famille

Zunrel répond aux questions de gens qui veulent créer une page, récolter des contacts ou vendre en ligne. Les trois outils se complètent : HTML Pub pour publier simplement, Leadpages pour optimiser ses pages (tests A/B, cartes de chaleur), Shopify pour vendre. La règle du site est stricte : **seulement ces trois outils**.

Les guides sont rangés en sept thèmes : « Choisir son offre », « Créer une page », « Publier », « Récolter des contacts », « Optimiser », « IA et vidéo » et « Vendre avec Shopify », ce dernier étant de loin le plus fourni. Il existe deux formats : des guides **express** (une question, l'essentiel en 30 secondes) et des guides **complets** (un projet de A à Z).

## Les chiffres que je peux donner

- **56 guides en français**, tous traduits en **portugais** et en **anglais**.
- Premier guide publié le **26 septembre 2026** : le site est très jeune.
- Un guide nouveau par semaine dans le calendrier éditorial, en trois langues le même jour.

Les chiffres de trafic et de revenus : voir la section « Où en est le site » plus bas.

## La technique

- **Astro**, site statique, avec **Tailwind** pour le style et **Pagefind** pour la recherche interne.
- Tout le contenu (thèmes, guides, outils) dans **un seul fichier TypeScript**. Les liens d'affiliation y sont définis une seule fois.
- **Cloudflare Pages**, publication automatique à chaque push sur `main`. Le site était sur Vercel jusqu'au 29 septembre 2026, mais le plan gratuit de Vercel interdit les sites d'affiliation (voir [Cloudflare Pages](/blog/heberger-gratuitement-sur-cloudflare-pages/)).
- Des données structurées HowTo sur les guides, FAQPage sur la FAQ, un fil d'Ariane, et un sitemap généré.
- Les pages sont rapides : LCP sous 0,5 s sur mobile et CLS de 0 lors de la dernière mesure.

## Le modèle de guide

Chaque guide suit le même modèle : une question (le titre), un résumé, une introduction, des étapes, des pièges à éviter, les outils, des sources et des guides liés. Des champs facultatifs `seoTitle` et `seoDescription` servent à Google quand la question est trop longue.

Deux règles éditoriales importantes :

- **les prix uniquement avec une date et une source** (les pages officielles des tarifs) ;
- **plus aucune capture d'écran** dans les guides depuis le 2 octobre 2026 : elles vieillissaient vite et demandaient trop de temps. Les étapes sont écrites avec les noms des menus.

Chaque guide a aussi un bouton « Télécharger en PDF » (« Baixar em PDF », « Download as PDF » dans les autres langues).

## L'affiliation

- **Leadpages** par PartnerStack.
- **Shopify** par Impact, avec un lien spécial vers la page des tarifs pour les guides sur les prix.
- **HTML Pub** : pas de lien propre, car la création de liens est désactivée pour ce produit sur PartnerStack. Le bouton mène à la page des tarifs Leadpages, qui présente les offres HTML Pub.

Les boutons sont placés en haut et en bas de chaque guide, avec la mention « Lien affilié », `rel="sponsored"`, et un pied de page qui explique l'affiliation (voir [placement et mention légale](/blog/liens-affilies-placement-et-mention-legale/)). Une page « Meilleures offres du moment » (`/offres/`) est revue chaque mois.

## La mesure

Google Analytics 4, avec un bandeau de consentement et des événements personnalisés : `affiliate_click` (avec l'outil, l'emplacement et le guide), `sign_up`, `share`, `pdf_download` et `web_vital` (voir [suivre les clics avec GA4](/blog/suivre-les-clics-affilies-avec-ga4/)). Search Console pour les requêtes Google.

## Le trafic : Pinterest, réseaux et newsletter

- **Pinterest** : des épingles générées par script (jusqu'à quatre variantes par guide), programmées par fichiers CSV importés environ tous les dix jours (voir [Pinterest](/blog/pinterest-source-de-trafic/)).
- **X et LinkedIn** : une file de publications préparée à l'avance par l'IA, publiée à la main.
- **Newsletter Mailchimp** : formulaire intégré, double confirmation, étiquettes par outil et par langue, bonus (checklists Shopify et Leadpages, modèles de landing page). Les envois sont en pause tant qu'il n'y a pas de vrai abonné (voir [la newsletter](/blog/newsletter-avec-mailchimp/)).

## Le travail avec l'IA

Le dépôt contient un fichier d'instructions pour l'assistant de code IA et un fichier de passation (« prochaine session ») mis à jour à la fin de chaque session. Des scripts font les vérifications répétitives : `check-guides` (liens internes, épingles manquantes, guides de plus de 30 jours), `make-pins` (images Pinterest), et un script Mailchimp qui prépare les campagnes sans jamais les envoyer.

J'ai aussi essayé de faire travailler un agent dans le navigateur (lecture de tableaux de bord, publications). Je l'ai arrêté : les longues tâches se bloquaient et coûtaient trop de crédits. Aujourd'hui, tout se fait depuis l'assistant de code, et ce qui demande mes comptes (Pinterest, réseaux, tableaux d'affiliation) reste manuel.

## Ce que j'ai changé en route

- **Vercel → Cloudflare Pages**, pour respecter les conditions d'hébergement.
- **Un détour par les jeux** : du 29 septembre au 2 octobre 2026, zunrel.com a hébergé un site de jeux. Je suis revenu au site d'affiliation. Le jeu de démonstration vit maintenant à part, sur [game.zunrel.com](https://game.zunrel.com) (un jeu de multiplicateur en monnaie virtuelle, sans argent réel, fait avec PixiJS).
- **Les captures d'écran retirées** de tous les guides.
- **Le portugais « neutre »** (Brésil et Portugal) et l'anglais pour les États-Unis, décidés le 28 septembre 2026 (voir [site multilingue](/blog/site-multilingue-avec-l-ia/)).

## Où en est le site

Honnêtement : au début. Fin septembre 2026, les tableaux de bord de PartnerStack et d'Impact n'affichaient encore **aucune vente ni commission**, et la plupart des visites mesurées dans GA4 étaient les miennes. Les données de Search Console n'étaient pas encore disponibles. C'est normal pour un site de quelques semaines, et c'est pour ça que je ne publie pas de « revenus du mois ».

## Les prochaines étapes

- Lire les données de Search Console et réécrire les titres des pages qui ont des impressions mais peu de clics.
- Analyser `affiliate_click` par emplacement et par guide.
- Revoir les prix et la page des offres chaque mois.
- Continuer le calendrier : un guide par semaine, en trois langues.

## Ce que vous pouvez en retenir

Un site d'affiliation solide peut se construire vite avec l'IA, à condition d'avoir un modèle de guide fixe, des règles éditoriales écrites, des faits datés et des scripts de vérification. Le reste (le trafic, les ventes) prend du temps, et aucune IA ne l'accélère vraiment. Comparez avec [Pieceworth](/blog/etude-de-cas-pieceworth/), construit sur un modèle très différent.
