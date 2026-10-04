---
title: "Lancer une newsletter avec Mailchimp (plan gratuit)"
seoTitle: "Lancer une newsletter avec Mailchimp gratuit : guide pratique"
description: "Formulaire intégré sans serveur, double opt-in, étiquettes par sujet et par langue, modèle fixe et règles d'envoi : ma newsletter Mailchimp, étape par étape."
summary: "Un formulaire intégré, la double confirmation, des étiquettes, et des règles strictes avant chaque envoi."
category: "Faire venir du monde"
published: 2026-10-04
updated: 2026-10-04
order: 15
---

Les réseaux sociaux et Google peuvent changer leurs règles du jour au lendemain. Une liste d'e-mails, elle, vous appartient. C'est pour ça que tous mes sites principaux ont un formulaire de newsletter, y compris ce hub. J'utilise **Mailchimp**, sur le plan gratuit. Voici comment c'est organisé, honnêtement : ma newsletter démarre tout juste, et au moment où j'écris, aucune campagne n'est encore partie vers des abonnés.

## Pourquoi Mailchimp (pour commencer)

- Un **plan gratuit**. Quand je l'ai noté, fin septembre 2026, il permettait 250 contacts et 500 envois par mois, sans programmation des envois. Vérifiez les limites actuelles sur la page officielle.
- Un **formulaire intégré** (« embedded form ») qui fonctionne sur un site statique, sans serveur ni clé d'API côté site.
- Une **API** pour automatiser la préparation des campagnes.

Les limites du plan gratuit imposent un rythme. Mes notes prévoient : hebdomadaire jusqu'à environ 110 abonnés, puis toutes les deux semaines, et un nettoyage de la liste (puis une comparaison avec d'autres outils) au-delà de 200 contacts.

## Étape 1 : créer l'audience

Dans Mailchimp, une « audience » est votre liste de contacts. Réglez dès le début :

- la **langue** (le français pour moi) ;
- le **nom et l'adresse d'expéditeur** : chez moi, une adresse sur le domaine du site (`contact@zunrel.com`), pas une adresse Gmail ;
- l'**adresse postale** du pied de page, obligatoire.

Une seule audience peut servir plusieurs sites. Le formulaire de ce hub envoie les inscriptions dans la même audience que Zunrel, avec une étiquette « hub » pour savoir d'où elles viennent.

## Étape 2 : authentifier votre domaine

Pour que vos e-mails n'arrivent pas en spam, ajoutez dans le DNS de votre domaine les enregistrements que Mailchimp vous donne (DKIM), et un enregistrement DMARC. Sur Zunrel, les deux enregistrements DKIM de Mailchimp et un DMARC existent. Ne supprimez jamais les enregistrements de votre messagerie en changeant de DNS.

## Étape 3 : le formulaire sur votre site

Dans Mailchimp : **Audience → Signup forms → Embedded forms**. Vous n'avez besoin que de deux choses dans le code proposé :

1. l'**adresse d'envoi** du formulaire (l'attribut `action` du `<form>`) ;
2. le **nom du champ anti-robots** (un champ caché que les humains laissent vide).

Ensuite, je construis mon propre formulaire avec le design du site. Une astuce : en remplaçant `/subscribe/post?` par `/subscribe/post-json?` dans l'adresse, on peut envoyer l'inscription **en arrière-plan**, sans quitter la page, et afficher un message de confirmation propre. Si Mailchimp ne répond pas dans les 8 secondes, le formulaire passe par un envoi classique dans un cadre caché.

Le formulaire gère aussi les cas courants : adresse invalide, déjà inscrit, trop de tentatives. Et il se souvient, dans le navigateur, que la personne s'est déjà inscrite, pour lui afficher un simple rappel au lieu du formulaire.

## Étape 4 : la double confirmation

Avec le **double opt-in**, la personne reçoit un e-mail et doit cliquer pour confirmer. C'est un peu moins d'inscrits, mais des adresses réelles et un consentement prouvé. Mon message après l'inscription le dit clairement : « Dernière étape : ouvrez l'e-mail envoyé à … et cliquez sur le bouton pour confirmer. »

Sur Zunrel, la page de confirmation (`/newsletter/confirmee/`) affiche le bonus promis et les derniers guides. La raison : l'API de Mailchimp ne permet pas de modifier le texte du « Final welcome email » ; l'accueil se fait donc sur le site.

## Étape 5 : les étiquettes (tags)

Les étiquettes permettent d'écrire plus tard seulement aux personnes concernées. Sur Zunrel, chaque inscription reçoit :

- une étiquette **par sujet** (shopify, leadpages, htmlpub), selon le guide où elle s'est inscrite ;
- une étiquette **par langue** (lang-fr, lang-pt, lang-en), selon la langue de la page.

Le formulaire envoie ces étiquettes dans un champ caché, avec leur identifiant numérique.

## Étape 6 : un bonus utile

Un bonus donne une raison concrète de s'inscrire. Sur Zunrel : une checklist de lancement Shopify (imprimable en PDF), une checklist Leadpages et des modèles de landing page. Le formulaire annonce le bonus qui correspond au sujet du guide.

Une barre discrète apparaît aussi après 60 % de la lecture d'un guide, renvoie vers le formulaire, se ferme pour 14 jours et ne s'affiche pas pour les abonnés.

## Étape 7 : des règles avant d'envoyer

Mes règles, écrites dans le dépôt :

- **un modèle visuel figé** : chaque newsletter suit le même gabarit, validé une fois ;
- **un script prépare la campagne** (via l'API) à partir de quelques guides choisis, envoie un test à mon adresse et **s'arrête là**. Il n'envoie jamais aux abonnés ;
- **aucun envoi sans mon « oui » explicite** pour cette campagne ;
- **pas de newsletter tant qu'il n'y a pas de vrai abonné** : aujourd'hui, les quelques inscrits de la liste sont mes propres adresses de test. Préparer des campagnes pour personne serait du temps perdu.

## Étape 8 : mesurer

48 heures après chaque envoi, je regarderai les ouvertures et les clics (le script a une commande de rapport). Sur le site, chaque inscription envoie aussi un événement `sign_up` à GA4, avec le guide d'origine. Je saurai ainsi quels guides font s'inscrire.

## Les erreurs à éviter

- Envoyer depuis une adresse Gmail ou sans authentifier le domaine.
- Ajouter des gens à la liste sans leur consentement.
- Promettre un bonus et ne pas le livrer.
- Envoyer des e-mails sans valeur, juste pour « garder le contact ».

## En résumé

Une audience bien réglée, un domaine authentifié, un formulaire intégré à votre design, la double confirmation, des étiquettes par sujet et par langue, un bonus utile et des règles strictes avant chaque envoi. Le plan gratuit de Mailchimp suffit largement pour démarrer. Vous pouvez d'ailleurs essayer le formulaire juste en dessous.
