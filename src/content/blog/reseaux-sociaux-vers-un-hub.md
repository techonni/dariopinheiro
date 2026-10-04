---
title: "Réseaux sociaux : envoyer le trafic vers une page hub"
seoTitle: "Réseaux sociaux vers une page hub : la méthode « lien en bio »"
description: "Pourquoi j'envoie mes réseaux vers une seule page hub (dariopinheiro.com), comment la construire soi-même, et comment préparer les publications avec l'IA."
summary: "Un seul lien dans toutes vos bios, une page hub à vous, et des publications préparées à l'avance."
category: "Faire venir du monde"
published: 2026-10-04
updated: 2026-10-04
order: 14
---

Sur les réseaux sociaux, vous n'avez souvent qu'un seul lien : celui de votre profil. Quand on a plusieurs sites, il faut choisir. Ma solution : un seul lien partout, vers une page hub qui regroupe tout. Cette page, c'est celle où vous êtes : [dariopinheiro.com](https://dariopinheiro.com). Voici pourquoi et comment.

## Pourquoi une page hub

- **Un seul lien à mettre à jour.** Quand un site ou un guide important s'ajoute, je modifie le hub, pas dix profils.
- **Vous êtes chez vous.** Un service de « lien en bio » peut changer ses conditions ou fermer. Une page sur votre propre domaine reste à vous.
- **Elle travaille pour plusieurs sites.** Mes visiteurs peuvent passer de Zunrel à Pieceworth ou Techonni, au jeu, au blog et à la newsletter.
- **Vous captez des e-mails.** Le hub a un formulaire de newsletter. Un abonné, c'est quelqu'un que vous pouvez retrouver même si un réseau change ses règles.

## Étape 1 : construire le hub

Le hub est un petit site Astro, hébergé gratuitement sur Cloudflare Pages comme mes autres sites (voir [ce guide](/blog/heberger-gratuitement-sur-cloudflare-pages/)). La page d'accueil ne contient que trois blocs, dans cet ordre : une sélection de guides du blog, l'inscription à la newsletter, et mes réseaux. Mes sites et le jeu sont rangés dans un menu latéral, ouvert par le bouton en haut à droite. Les liens sont listés dans un seul fichier : pour en ajouter un, je copie une ligne.

Les choix de design :

- une photo ronde en haut, un nom, une phrase ;
- une page d'accueil courte, centrée sur ce que je veux montrer en premier (le blog) ;
- la newsletter juste après, pour garder le contact ;
- le même style sombre que mes autres sites (fond noir, cartes gris foncé, texte blanc, boutons blancs arrondis) et le même menu latéral.

C'est inspiré des pages « lien en bio » les plus simples : on doit trouver ce qu'on cherche en deux secondes.

## Étape 2 : ce que doit contenir le hub

1. **Qui vous êtes**, en une phrase. Ma nouvelle phrase : « Je crée des sites d'affiliation avec l'IA, et je montre comment faire. »
2. **Le contenu qui montre votre méthode**, en premier : ici, ce blog.
3. **Une inscription à la newsletter.**
4. **Vos réseaux**, pour qu'on puisse vous suivre ailleurs.
5. **Vos sites**, avec une phrase chacun, à portée de clic (dans mon cas, dans le menu) : Techonni (guides GTA 6 en français), Zunrel (guides Leadpages, HTML Pub et Shopify), Pieceworth (guides pour bien acheter le luxe).

## Étape 3 : mettre le même lien partout

Mettez l'adresse du hub dans la bio de chaque réseau. Pour savoir d'où viennent les visiteurs, vous pouvez ajouter des paramètres UTM différents par réseau (`?utm_source=x`, `?utm_source=instagram`…), si vous mesurez les visites du hub.

Mes réseaux actuels : X ([@zunrel](https://x.com/zunrel)). Autres comptes : [à compléter].

## Étape 4 : publier régulièrement, sans y passer la journée

Le hub ne sert à rien si personne ne vient. Ma méthode pour Zunrel :

- **l'assistant IA prépare les publications à l'avance**, dans un fichier du dépôt (`fila-redes.md`, « file d'attente des réseaux »), avec toujours au moins 7 jours d'avance ;
- chaque publication a une **version longue** (LinkedIn) et une **version courte** (la première phrase et le lien, moins de 280 caractères pour X) ;
- chaque lien porte des paramètres UTM (`utm_source=x` ou `linkedin`, `utm_medium=social`) ;
- je copie et je publie moi-même.

Une publication type : une idée utile en trois lignes, puis le lien vers le guide qui donne le détail. Jamais un lien seul sans texte.

## Étape 5 : apporter de la valeur dans la publication elle-même

Sur les réseaux, personne ne clique sur « nouveau guide → lien ». Ce qui marche mieux : donner la réponse (ou une partie) dans la publication, et proposer le guide pour aller plus loin. Exemple tiré de ma file de publications :

> Une landing page = une offre, un public, un bouton. L'erreur la plus fréquente : envoyer une publicité vers la page d'accueil de sa boutique, où le visiteur se perd.

Même logique pour les forums et les groupes : répondre d'abord à la question de la personne, et seulement ensuite mettre le lien « pour aller plus loin », si le groupe l'autorise.

## Étape 6 : mesurer

Pour savoir si les réseaux servent à quelque chose, regardez dans GA4 les visites par source (grâce aux UTM), puis ce que font ces visiteurs : lisent-ils plusieurs pages, s'inscrivent-ils à la newsletter, cliquent-ils sur un lien affilié ? Voir [suivre les clics avec GA4](/blog/suivre-les-clics-affilies-avec-ga4/).

## Ce que l'IA fait (et ne fait pas) pour mes réseaux

L'IA :

- transforme chaque guide en publications courtes, dans plusieurs formats ;
- garde la file d'attente remplie avec de l'avance ;
- ajoute les bons liens UTM ;
- prépare les fichiers d'épingles Pinterest (voir [Pinterest](/blog/pinterest-source-de-trafic/)).

L'IA ne publie pas à ma place. J'ai essayé de confier les publications à un navigateur piloté par l'IA, mais je l'ai arrêté : les longues tâches se bloquaient et les crédits partaient trop vite. Aujourd'hui, la préparation est automatisée, la publication reste manuelle, ce qui me permet aussi de relire.

## Les erreurs à éviter

- Mettre un lien différent dans chaque réseau, puis oublier de les mettre à jour.
- Un hub surchargé, avec trente liens et des images partout.
- Publier uniquement des liens.
- Oublier la newsletter : c'est le seul canal qui vous appartient vraiment.

## En résumé

Un seul lien dans toutes vos bios, vers une page hub simple et rapide, sur votre domaine, avec vos sites, votre newsletter et votre contenu. Préparez les publications à l'avance avec l'IA, donnez de la valeur dans chaque publication, mesurez avec des UTM. Et pour transformer ces visiteurs en lecteurs fidèles, passez à [la newsletter avec Mailchimp](/blog/newsletter-avec-mailchimp/).
