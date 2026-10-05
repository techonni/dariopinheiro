---
title: "Un site en trois langues (FR, PT, EN) avec l'IA"
seoTitle: "Site multilingue FR, PT, EN avec l'IA : la méthode"
description: "Traduire ses sites avec l'IA : choisir langues et pays, organiser les URL, hreflang, adapter les faits locaux et garder les versions synchronisées."
summary: "Choisir un pays par langue, des URL par langue, hreflang, et des faits adaptés, pas seulement traduits."
category: "Écrire"
published: 2026-10-04
updated: 2026-10-04
order: 9
---

> **Note (octobre 2026) :** techonni.com et pieceworth.com redirigent vers ce site. Ce guide garde ce que j'avais construit. Les liens mènent aux études de cas. Zunrel reste le site public.

Traduire un site avec l'IA prend quelques minutes par page. Bien le faire demande un peu plus de réflexion : une traduction mot à mot d'un guide français ne sert à rien à un lecteur américain si les prix sont en euros et les règles européennes. Voici comment j'ai organisé [Zunrel](https://zunrel.com) en trois langues et [Pieceworth](/blog/etude-de-cas-pieceworth/) en deux.

## Étape 1 : choisir une langue ET un public

Pour chaque langue, décidez pour quel pays vous écrivez. Sur Zunrel, la décision est écrite dans les notes du projet :

- **le français** est la langue principale ;
- **l'anglais vise les États-Unis** : dollars, anglais américain, lois américaines ;
- **le portugais est « neutre »**, pour servir à la fois le Brésil et le Portugal. Concrètement, on évite les mots trop marqués d'un seul pays (comme « telemóvel », « ecrã », « equipa » ou « registo », typiques du Portugal).

Sur Pieceworth, c'est l'inverse : l'anglais (public américain) est à la racine du site, et le français (France et Belgique) sous `/fr/`.

Ce choix change tout le reste : la monnaie, les règles, les exemples, et même le programme d'affiliation à utiliser.

## Étape 2 : une URL par langue

Chaque version a sa propre adresse, avec la langue dans le chemin :

- Zunrel : `/guides/<slug>/` en français, `/pt/guias/<slug>/` en portugais, `/en/guides/<slug>/` en anglais ;
- Pieceworth : `/guides/<slug>/` en anglais, `/fr/guides/<slug>/` en français.

Le slug est traduit lui aussi. Par exemple, le guide Zunrel `relancer-les-paniers-abandonnes-shopify` devient `recuperar-carrinhos-abandonados-shopify` en portugais et `abandoned-cart-email-shopify` en anglais. Un identifiant interne commun relie les versions entre elles.

N'utilisez pas de traduction automatique dans le navigateur ou de redirection selon l'IP : Google doit pouvoir accéder à chaque version par une URL fixe.

## Étape 3 : hreflang et sélecteur de langue

Les balises `hreflang` disent à Google que plusieurs pages sont la même page dans des langues différentes :

```html
<link rel="alternate" hreflang="fr" href="https://exemple.com/guides/mon-guide/" />
<link rel="alternate" hreflang="en" href="https://exemple.com/en/guides/my-guide/" />
<link rel="alternate" hreflang="x-default" href="https://exemple.com/guides/mon-guide/" />
```

Chaque version doit lister toutes les autres, y compris elle-même. Sur mes sites, ces balises sont générées automatiquement à partir de la liste des traductions existantes : une traduction absente n'apparaît pas.

Pour le lecteur, un **sélecteur** en haut de page (« FR · US · PT » sur Zunrel, « US · FR » sur Pieceworth) mène à la même page dans l'autre langue quand elle existe.

## Étape 4 : traduire avec l'IA, mais avec un cahier des charges

Mon prompt de traduction ressemble à ceci :

```
Traduis ce guide du français vers l'anglais américain.
Public : lecteurs aux États-Unis.
- Garde exactement le même nombre d'étapes et la même structure.
- Garde les noms de menus tels qu'ils apparaissent dans la version
  anglaise du logiciel ; si tu ne les connais pas, écris [menu à vérifier].
- Ne convertis AUCUN prix : remplace-les par [prix USD à vérifier].
- Traduis aussi le slug, le titre SEO et la description (160 caractères max).
```

« Même nombre d'étapes » est une règle de Zunrel : elle permet de comparer les versions ligne à ligne. « Ne convertis aucun prix » évite le piège le plus fréquent : un prix converti n'est pas le prix réel affiché dans le pays.

## Étape 5 : adapter les faits locaux

C'est là qu'une traduction devient une localisation :

- **Les prix.** Sur Zunrel, le guide anglais sur les prix de Shopify reste caché tant que je n'ai pas obtenu les prix en dollars : la page officielle affichait toujours les euros lors de mes vérifications, à cause de la géolocalisation. Mieux vaut une page cachée qu'une page fausse.
- **Les règles.** Sur Pieceworth, la version française utilise les règles européennes (droits de douane, plafonds du paiement en plusieurs fois), pas les règles américaines.
- **Les liens d'affiliation.** Vérifiez que le programme accepte les visiteurs du pays visé, et que le lien mène à la bonne version du site de la marque.

## Étape 6 : garder les versions synchronisées

Le vrai coût d'un site multilingue, c'est la maintenance. Les règles que je suis :

- **chaque nouveau guide sort dans toutes les langues le même jour** (règle de Zunrel) ;
- les anciens guides sont traduits petit à petit, **en commençant par les plus visités** ;
- quand un fait change, il change dans toutes les versions dans la même session.

Aujourd'hui, les 56 guides français de Zunrel existent aussi en portugais et en anglais. Pieceworth a 22 guides en anglais et leurs 22 versions françaises.

## Étape 7 : penser aux autres textes

On oublie souvent : les boutons, le pied de page, les messages du formulaire de newsletter, les libellés des sources, l'e-mail de confirmation de la newsletter. Sur Zunrel, les textes d'interface sont dans un fichier de traductions à part, et les inscrits à la newsletter reçoivent une étiquette selon la langue de la page (`lang-fr`, `lang-pt`, `lang-en`), pour ne leur écrire que dans leur langue (voir [la newsletter avec Mailchimp](/blog/newsletter-avec-mailchimp/)).

## Les erreurs à éviter

- Convertir les prix au lieu de les vérifier.
- Mélanger les variantes d'une langue (portugais du Brésil et du Portugal, anglais britannique et américain) sans l'avoir décidé.
- Oublier `hreflang` ou le faire pointer vers des pages qui n'existent pas.
- Traduire 100 pages d'un coup, puis ne jamais les mettre à jour.

## En résumé

Un site multilingue réussi commence par un choix : une langue, un pays, un public. Ensuite, des URL par langue, des balises hreflang, une traduction par l'IA avec un cahier des charges strict, des faits adaptés au pays, et la discipline de tout mettre à jour en même temps. L'IA fait la traduction ; vous gardez la responsabilité des faits locaux.
