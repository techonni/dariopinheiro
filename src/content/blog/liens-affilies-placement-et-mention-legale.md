---
title: "Liens affiliés : où les placer et comment les signaler (légal)"
seoTitle: "Liens affiliés : placement et mention obligatoire"
description: "Où placer vos liens affiliés pour qu'ils aident le lecteur, comment les signaler clairement (mention, page dédiée, rel=sponsored) et les règles à respecter."
summary: "Deux emplacements utiles, une mention visible près de chaque lien, une page dédiée et rel=\"sponsored\"."
category: "Monétiser et mesurer"
published: 2026-10-04
updated: 2026-10-04
order: 11
---

Un lien affilié bien placé rend service : le lecteur vient d'apprendre à faire quelque chose, et le lien l'emmène là où il peut le faire. Mal placé ou caché, il fait fuir le lecteur et peut vous mettre en défaut vis-à-vis de la loi et des programmes. Voici comment je fais sur mes sites, et les règles à connaître.

> Je ne suis pas juriste. Ce guide donne des repères pratiques ; pour votre situation précise, lisez les textes officiels de votre pays et les conditions de vos programmes.

## Partie 1 : où placer les liens

### Deux emplacements, pas dix

Sur [Zunrel](https://zunrel.com), chaque guide a un bouton affilié à **deux endroits** :

1. **en haut**, juste après l'introduction, dans une version courte, pour la personne qui sait déjà ce qu'elle veut ;
2. **en bas**, après les étapes, avec une phrase « Essayer par vous-même », pour celle qui vient de lire le guide.

Le lien est le bon pour le sujet : un guide Shopify mène à Shopify, un guide sur les prix mène directement à la page des tarifs (grâce à un « deep link »). Un lien affilié sans rapport avec la question du lecteur est inutile.

### Mesurer quel emplacement fonctionne

Chaque bouton porte un attribut qui indique son emplacement (haut, bas, fiche outil, page des offres…). Quand quelqu'un clique, Google Analytics 4 reçoit un événement avec cet emplacement. Au bout de quelques semaines, on sait quel endroit est vraiment utile (voir [suivre les clics avec GA4](/blog/suivre-les-clics-affilies-avec-ga4/)).

### Des liens normaux qui deviennent affiliés

Sur [Pieceworth](https://pieceworth.com), j'écris des liens normaux vers les boutiques (par exemple vers Farfetch). Le script de Sovrn Commerce, placé dans le gabarit du site, les transforme en liens affiliés. Avantage : je n'invente jamais de lien de suivi. Inconvénient : il faut quand même signaler chaque lien comme affilié, puisqu'il le devient.

### Ce que je ne fais pas

- Des liens affiliés dans chaque paragraphe.
- Des boutons qui ressemblent à un bouton de téléchargement ou de navigation.
- Des codes promo : Pieceworth n'en publie jamais (règle du site).
- Des liens inventés : un lien affilié se copie depuis le tableau de bord du réseau.

## Partie 2 : comment les signaler

### Une mention près de chaque lien

Le lecteur doit savoir **au moment où il clique** que le lien est affilié. Sur Zunrel, chaque bouton est accompagné de la mention « Lien affilié : il ne change pas le prix pour vous ». Sur Pieceworth, les liens vers les boutiques portent la mention « Affiliate link » (ou son équivalent en français).

Une mention en pied de page seulement ne suffit pas : peu de gens la lisent avant de cliquer.

### Une page qui explique

Chaque site doit avoir une page qui explique simplement comment il gagne de l'argent : quels liens sont affiliés, ce que ça change (rien sur le prix pour le lecteur, une commission pour le site) et comment les recommandations sont choisies. Pieceworth a une page `/affiliate-disclosure/` en anglais et une page « affiliation » en français. Le pied de page de Zunrel précise sur toutes les pages que les liens vers Leadpages, HTML Pub et Shopify sont affiliés.

### `rel="sponsored"` pour Google

Google demande de marquer les liens rémunérés avec `rel="sponsored"`. Sur mes sites, les liens affiliés ont `rel="sponsored noopener"`. Ce n'est pas une mention pour le lecteur (il ne la voit pas), c'est une information pour les moteurs de recherche. Les deux sont nécessaires.

## Partie 3 : les règles à connaître

### En France

La loi n° 2023-451 du 9 juin 2023, qui encadre l'influence commerciale, impose de signaler clairement le caractère commercial d'un contenu (avec une mention comme « Publicité » ou « Collaboration commerciale ») quand on fait la promotion de produits en échange d'un avantage. Elle vise d'abord les créateurs de contenu sur les réseaux sociaux, mais l'esprit est le même pour un site : le lecteur doit comprendre qu'il y a une relation commerciale. Plus largement, le droit de la consommation interdit les pratiques commerciales trompeuses, comme le fait de cacher qu'un contenu est rémunéré. Vérifiez le texte en vigueur sur Légifrance et les explications de la DGCCRF.

### Aux États-Unis

Pour un site qui vise des lecteurs américains (comme la version anglaise de Pieceworth ou de Zunrel), la FTC (Federal Trade Commission) exige une mention claire et visible de toute relation financière avec une marque recommandée. Elle publie un guide pratique sur les recommandations (« endorsements ») ; c'est la référence.

### Les règles des programmes

Chaque programme a ses propres conditions : mentions obligatoires, interdiction de certains usages (publicité sur le nom de la marque, codes promo, e-mails). Elles s'ajoutent à la loi. Lisez-les avant de placer le premier lien.

### Les réseaux sociaux et les e-mails

Un lien affilié partagé dans une publication, une épingle Pinterest ou une newsletter doit aussi être signalé. Pour mes publications sociales, je renvoie le plus souvent vers le guide lui-même (avec des paramètres UTM), et c'est le guide qui contient le lien affilié signalé.

## Partie 4 : le cas des marques citées

Un site de fans comme [Techonni](https://techonni.com) cite une marque sans aucun lien commercial. Il précise en pied de page qu'il est indépendant, non affilié à Rockstar Games ni à Take-Two, et que les noms cités appartiennent à leurs propriétaires. Quand des liens affiliés arriveront, ils seront signalés comme sur les autres sites. Si vous parlez d'une marque sans être partenaire, dites-le aussi.

## Checklist

- [ ] Un lien affilié en haut et un en bas du guide, en rapport avec la question.
- [ ] Une mention « lien affilié » visible à côté de chaque lien.
- [ ] Une page qui explique l'affiliation, liée depuis le pied de page.
- [ ] `rel="sponsored"` sur chaque lien affilié.
- [ ] Les conditions de chaque programme lues et respectées.
- [ ] Aucun code promo ni lien inventé.
- [ ] Les liens partagés sur les réseaux et par e-mail aussi signalés.

## En résumé

Placez peu de liens, au bon moment, et mesurez leur efficacité. Signalez chacun d'eux là où le lecteur clique, expliquez votre modèle sur une page dédiée, ajoutez `rel="sponsored"` pour Google, et respectez à la fois la loi de votre public et les règles de vos programmes. L'honnêteté n'est pas seulement une obligation : c'est ce qui fait revenir les lecteurs.
