---
title: "Suivre les clics affiliés avec Google Analytics 4"
seoTitle: "Suivre les clics sur ses liens affiliés avec GA4"
description: "Installer GA4 sur un site statique, envoyer un événement à chaque clic affilié avec son emplacement, respecter le consentement et comparer avec les réseaux."
summary: "Un événement affiliate_click par clic, avec l'emplacement et le guide, puis la comparaison avec les réseaux."
category: "Monétiser et mesurer"
published: 2026-10-04
updated: 2026-10-04
order: 12
---

Les réseaux d'affiliation vous disent combien de clics et de ventes vous avez eus. Ils ne vous disent pas **depuis quelle page ni depuis quel bouton**. Pour le savoir, il faut mesurer les clics sur votre propre site. Sur [Zunrel](https://zunrel.com), j'utilise Google Analytics 4 (GA4) avec un événement personnalisé, `affiliate_click`. Voici comment le mettre en place.

## Étape 1 : créer une propriété GA4

Dans Google Analytics : **Administration → Créer → Propriété**, puis un **flux de données Web** pour votre domaine. Vous obtenez un identifiant de mesure qui commence par `G-`. Gardez-le, c'est tout ce dont votre site a besoin.

## Étape 2 : installer la balise

Ajoutez le code Google (gtag.js) dans le `<head>` du gabarit commun de votre site, pour qu'il soit sur toutes les pages. Dans Astro, c'est le fichier de mise en page principal (`Base.astro` chez moi). Les scripts qui doivent rester tels quels prennent l'attribut `is:inline`.

## Étape 3 : le consentement

En Europe, les cookies de mesure demandent le consentement du visiteur. Sur Zunrel, un petit bandeau propose d'accepter ou de refuser ; le choix est gardé dans le navigateur, et le « mode consentement » de Google est mis à jour (`analytics_storage` accordé ou refusé). Tant que le visiteur n'a pas accepté, le stockage analytique reste refusé.

Faites valider votre bandeau par rapport aux recommandations de la CNIL si vous visez la France.

## Étape 4 : envoyer un événement à chaque clic affilié

L'idée : écouter tous les clics de la page, et si le lien cliqué est un lien affilié (marqué `rel="sponsored"`), envoyer un événement à GA4. Voici une version simplifiée de ce que j'utilise :

```html
<script is:inline>
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest('a[rel~="sponsored"]');
    if (!link) return;
    gtag("event", "affiliate_click", {
      tool: link.getAttribute("data-affiliate") || link.hostname,
      placement: link.getAttribute("data-placement") || "autre",
      page: location.pathname,
      link_url: link.href,
    });
  });
</script>
```

Et sur chaque bouton affilié :

```html
<a href="LIEN-AFFILIÉ" rel="sponsored noopener"
   data-affiliate="shopify" data-placement="haut">Essayer Shopify</a>
```

Pourquoi un seul écouteur pour toute la page ? Parce qu'il fonctionne pour tous les liens affiliés, présents et futurs, sans rien ajouter sur chaque bouton à part ses attributs. Et comme il repère les liens grâce à `rel="sponsored"`, un lien affilié correctement marqué pour Google est automatiquement mesuré.

## Étape 5 : choisir les bons paramètres

Les paramètres sont ce qui rend l'événement utile. Sur Zunrel :

- **`tool`** : quel outil (leadpages, html-pub, shopify). Au début, HTML Pub et Leadpages apparaissaient tous les deux sous le même domaine, parce qu'ils partagent le même lien. L'attribut `data-affiliate` a corrigé ça ;
- **`placement`** : où était le bouton (haut, bas, fiche, offres…) ;
- **`guide`** : quel guide, déduit de l'URL ;
- **`page`** et **`link_url`** : pour vérifier en cas de doute.

## Étape 6 : déclarer les dimensions personnalisées

Pour voir `tool` ou `placement` dans les rapports, déclarez-les dans GA4 : **Administration → Définitions personnalisées → Créer une dimension personnalisée**, portée « Événement », avec exactement le nom du paramètre. Les données n'apparaissent qu'à partir de ce moment-là, pas rétroactivement.

Vous pouvez aussi marquer `affiliate_click` comme **événement clé** pour le suivre comme un objectif.

## Étape 7 : vérifier que ça marche

Dans GA4, ouvrez **Rapports → Temps réel**, ouvrez votre site dans un autre onglet (en acceptant le bandeau), cliquez sur un lien affilié : l'événement doit apparaître en quelques secondes. Le mode **DebugView** donne le détail des paramètres.

## Étape 8 : comparer avec les réseaux

Une fois par semaine ou par mois, comparez :

- les clics `affiliate_click` dans GA4 ;
- les clics comptés par le réseau (PartnerStack, Impact, Sovrn…).

Les chiffres ne seront jamais identiques (bloqueurs de publicité, visiteurs qui refusent le consentement, comptage différent), mais un écart énorme signale un problème : un lien cassé, un lien qui ne passe pas par le réseau, ou un événement qui ne part pas.

## Autres événements utiles

Le même écouteur peut mesurer d'autres actions. Sur Zunrel :

- `sign_up` quand quelqu'un s'inscrit à la newsletter ;
- `share` pour les boutons de partage ;
- `pdf_download` pour le bouton « Télécharger en PDF » des guides ;
- `web_vital` pour la vitesse réelle des pages (LCP, INP, CLS…), envoyée seulement après accord.

## Les liens UTM pour les réseaux sociaux

Quand je partage un guide sur Pinterest, LinkedIn ou ailleurs, j'ajoute des paramètres UTM au lien : `?utm_source=pinterest&utm_medium=social`. GA4 range alors ces visites par source, et je sais quel réseau envoie des lecteurs qui cliquent ensuite sur un lien affilié. Voir [Pinterest comme source de trafic](/blog/pinterest-source-de-trafic/).

## Soyez patient avec les chiffres

Sur un site jeune, il y a peu de données, et la plupart des visites des premières semaines sont les vôtres. Ne tirez pas de conclusions sur une poignée de clics. Le but, au début, est que tout soit en place pour le jour où le trafic arrive.

## En résumé

Une propriété GA4, la balise dans le gabarit, un bandeau de consentement, et un seul écouteur qui envoie `affiliate_click` avec l'outil, l'emplacement et le guide. Déclarez les dimensions, vérifiez en temps réel, puis comparez régulièrement avec vos réseaux. Vous saurez enfin quels guides et quels boutons font vraiment cliquer.
