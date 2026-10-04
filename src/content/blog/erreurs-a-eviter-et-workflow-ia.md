---
title: "Les erreurs à éviter et mon workflow IA complet"
seoTitle: "Site d'affiliation avec l'IA : erreurs à éviter et workflow"
description: "Les erreurs que j'ai faites ou évitées en créant mes sites d'affiliation avec l'IA, puis mon workflow complet, de l'idée au guide publié et partagé."
summary: "Les erreurs qui coûtent cher, puis tout mon processus, de l'idée de guide à la publication et au partage."
category: "Durer"
published: 2026-10-04
updated: 2026-10-04
order: 20
---

Ce dernier guide rassemble deux choses : les erreurs à éviter quand on crée des sites d'affiliation avec l'IA (certaines que j'ai faites, d'autres que mes règles m'ont évitées), puis mon workflow complet, du choix d'un guide jusqu'à sa diffusion. C'est le résumé pratique de tout ce blog.

## Partie 1 : les erreurs à éviter

### 1. Laisser l'IA être la source des faits

C'est l'erreur numéro un. L'IA invente des prix, des menus, des règles, des programmes d'affiliation et même des liens. Sur mes sites, les faits viennent toujours des pages officielles, avec une date. Exemple : sur Pieceworth, une FAQ officielle affichait « 130 jours » pour les retours, alors que la page dédiée disait 30 jours. Voir [vérifier les faits](/blog/verifier-les-faits-d-un-contenu-ia/).

### 2. Choisir un hébergeur sans lire ses conditions

J'ai d'abord hébergé Zunrel sur Vercel, avant de découvrir que le plan gratuit interdit les sites d'affiliation. Déménagement vers Cloudflare Pages le 29 septembre 2026. Lisez les conditions d'usage commercial avant de choisir.

### 3. Construire un site autour d'un seul programme

Sur Pieceworth, une partie du contenu dépendait d'Impact. Quand je l'ai quitté, ces pages ont été supprimées. Écrivez des guides utiles en eux-mêmes, quel que soit le réseau.

### 4. Changer de cap sans nettoyer

Pages supprimées, mais épingles Pinterest qui pointent encore vers elles ; anciennes URL sans redirection ; sitemap pas renvoyé. Un changement de cap demande un nettoyage complet.

### 5. Se disperser

Du 29 septembre au 2 octobre 2026, j'ai transformé zunrel.com en site de jeux, puis je suis revenu au site d'affiliation. Le jeu vit maintenant à part, sur [game.zunrel.com](https://game.zunrel.com). Leçon : un domaine, un sujet. Une nouvelle idée mérite son propre espace.

### 6. Confier trop de choses à un agent

J'ai essayé de faire travailler un agent IA dans le navigateur (tableaux de bord, publications). Les longues tâches se bloquaient, et les crédits partaient trop vite. Je l'ai arrêté. Aujourd'hui : l'IA prépare, je publie et je valide.

### 7. Ajouter des éléments coûteux à maintenir

Les captures d'écran dans les guides de Zunrel demandaient beaucoup de temps et vieillissaient vite. Je les ai retirées le 2 octobre 2026. Avant d'ajouter un élément à 50 guides, demandez-vous qui le mettra à jour.

### 8. Préparer pour une audience qui n'existe pas encore

Ma newsletter est en pause tant qu'il n'y a pas de vrai abonné. Préparer des campagnes pour des adresses de test, c'est du temps perdu. Construisez d'abord ce qui attire les lecteurs.

### 9. Croire les premiers chiffres

Sur un site jeune, la plupart des visites sont les vôtres, et quelques clics ne veulent rien dire. Fin septembre 2026, Zunrel n'avait encore aucune vente affiliée. C'est normal. Ne changez pas tout sur la base de trois jours de données.

### 10. Oublier les mentions

Liens affiliés non signalés, site de fans qui ne précise pas qu'il est indépendant : ce sont des problèmes de confiance et parfois de droit. Voir [placement et mention légale](/blog/liens-affilies-placement-et-mention-legale/).

## Partie 2 : mon workflow complet

### Les outils

- **Astro** pour les sites, **GitHub** pour le code, **Cloudflare Pages** pour l'hébergement.
- Un **assistant de code IA** (Claude Code) qui travaille directement dans les dépôts.
- **Google Analytics 4** et **Search Console** pour mesurer.
- **Mailchimp** pour la newsletter, **Pinterest** et **X** pour la diffusion.

### Les fichiers qui encadrent l'IA

Chaque dépôt contient :

- un **fichier d'instructions** : ce qu'est le site, sa langue, les règles qui ne se discutent pas (ne jamais inventer de faits ni de liens, signaler les liens affiliés, marquer ce qui manque), et comment publier ;
- un **fichier de passation** (« prochaine session ») : l'état du site, ce qui attend une action de ma part, les prochaines étapes ;
- un **calendrier éditorial** : une question par semaine, avec la raison.

J'écris mes instructions en portugais, ma langue ; les sites sont en français (et en anglais ou en portugais pour les versions traduites).

### Le cycle d'un guide, étape par étape

1. **Choisir la question** dans le calendrier (issue de la [recherche de mots-clés](/blog/recherche-de-mots-cles-avec-l-ia/)).
2. **Rassembler les faits** : pages officielles, prix avec la date, notes. C'est la seule étape que l'IA ne fait pas à ma place.
3. **Demander le brouillon** à l'assistant, avec le modèle de guide du site et la consigne de marquer ce qu'il ne peut pas vérifier.
4. **Ajouter les liens** : deux liens internes vers des guides proches, et, si c'est pertinent, le lien affilié en haut et en bas, signalé.
5. **Relire** : faits, réponse en haut, ton, répétitions, liens (voir [écrire sans spam](/blog/ecrire-des-guides-avec-l-ia-sans-spam/)).
6. **Traduire** si le site est multilingue, le même jour, avec le même nombre d'étapes (voir [site multilingue](/blog/site-multilingue-avec-l-ia/)).
7. **Vérifier automatiquement** : build Astro (le schéma bloque les champs manquants), script de vérification (liens internes, images, guides anciens).
8. **Publier** : push sur `main`, Cloudflare publie, puis j'ouvre la page sur le vrai domaine.
9. **Diffuser** : l'assistant crée les images Pinterest et ajoute les épingles au prochain fichier CSV, et prépare les publications pour X et LinkedIn avec des liens UTM. Je les importe et je les publie.
10. **Mettre à jour le fichier de passation** pour la session suivante.

### Le cycle du mois

- Revue des prix et des offres.
- Lecture de GA4 : clics affiliés par emplacement et par guide, inscriptions à la newsletter.
- Search Console : titres et descriptions à améliorer.
- Liste des guides de plus de 30 jours à revoir (voir [garder ses guides à jour](/blog/mettre-a-jour-ses-guides/)).

### Ce que je fais moi-même

Même avec beaucoup d'automatisation, certaines choses restent à moi : les décisions (niche, programmes, changements de cap), l'accès à mes comptes (réseaux d'affiliation, Pinterest, réseaux sociaux), le « oui » avant tout envoi de newsletter, et la relecture finale.

> Ce que ce workflow m'a apporté jusqu'ici, en temps gagné ou en résultats : [à compléter].

## En résumé

L'IA permet de construire des sites d'affiliation complets très vite : mes trois sites et ce hub en sont la preuve. Mais elle ne remplace ni les faits vérifiés, ni les décisions, ni la patience. Encadrez-la avec des fichiers d'instructions, des modèles et des scripts ; gardez pour vous les faits, les choix et la relecture. Et si vous voulez suivre la suite, la newsletter est juste en dessous.
