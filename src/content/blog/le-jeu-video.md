---
title: "Le jeu vidéo : Crash-style à game.zunrel.com, construit avec l’IA"
seoTitle: "Le jeu vidéo : Crash-style à game.zunrel.com, construit avec l’IA"
description: "Comment j’ai construit un jeu style Crash avec PixiJS, GSAP, TypeScript et Howler.js à game.zunrel.com — sans coder moi-même — et ce que ça dit de ma façon de créer des sites."
summary: "Un jeu Crash-style sur game.zunrel.com, construit avec l IA."
category: "Journal"
published: 2026-10-06
updated: 2026-10-06
order: 3
images:
  - url: "https://images.unsplash.com/photo-1625391915893-8f762ade389e?w=1200&q=80"
    alt: "Grayscale flower in bloom"
    credit: "Dieter K"
    page: "https://unsplash.com/photos/grayscale-photo-of-flower-in-bloom-3d5HhLuor2o"
  - url: "https://images.unsplash.com/photo-1615047611638-644db9d02f4d?w=1200&q=80"
    alt: "Grayscale leaf plant"
    credit: "Annie Spratt"
    page: "https://unsplash.com/photos/grayscale-photo-of-green-leaf-plant-3yLJWDHxfwk"
  - url: "https://images.unsplash.com/photo-1681065498547-44cf07ac84a8?w=1200&q=80"
    alt: "Pine tree in black and white"
    credit: "Reggie Tmin"
    page: "https://unsplash.com/photos/a-black-and-white-photo-of-a-pine-tree-ZGbriLOvOI0"
---
![Grayscale flower in bloom](https://images.unsplash.com/photo-1625391915893-8f762ade389e?w=1200&q=80)

*Photo : [Dieter K](https://unsplash.com/photos/grayscale-photo-of-flower-in-bloom-3d5HhLuor2o) / Unsplash*

Il y a un moment, dans la route de Zunrel, où le site n’était plus seulement des guides. Pendant quelques jours — du 29 septembre au 2 octobre 2026 — zunrel.com a hébergé un site de jeux. Puis je suis revenu à l’affiliation, et le jeu a trouvé sa place à part : [game.zunrel.com](https://game.zunrel.com). Un jeu style Crash, en monnaie virtuelle, sans argent réel. Construit avec PixiJS, GSAP, TypeScript, Howler.js. Et surtout : construit avec l’IA, sans que je code moi-même ligne par ligne.

Je m’appelle Dario. Ma phrase, c’est celle-ci : je crée des sites avec l’IA et je montre comment je fais. Le jeu fait partie de cette phrase. Ce n’est pas un « side project de développeur ». C’est la preuve que la même méthode — décrire, itérer, déployer — peut sortir un site *et* un petit monde jouable.

## Pourquoi un jeu

Parce que j’avais envie de quelque chose qui bouge. Les guides sont utiles ; un jeu est immédiat. Tu cliques, ça réagit. Tu rates, tu recommences. Pour quelqu’un qui passe ses soirées à faire pivoter des niches, un multiplicateur en monnaie virtuelle, c’est aussi une façon de respirer : pas de panier luxe, pas de date Rockstar, juste une session.

Le style Crash, c’est une référence claire : rythme, personnages, sensation arcade. Je n’ai pas prétendu reinventer un AAA. J’ai voulu un démo jouable, hébergée proprement, séparée du site de guides une fois le détour jeux terminé.

## La stack, sans mystère

- **PixiJS** pour le rendu 2D dans le navigateur.
- **GSAP** pour les animations.
- **TypeScript** pour structurer le projet.
- **Howler.js** pour le son.

Je ne vais pas faire semblant d’avoir écrit chaque fichier à la main. J’ai dirigé. J’ai décrit ce que je voulais. J’ai testé. J’ai demandé des corrections. C’est le même workflow que pour mes sites Astro : l’IA propose, je tranche, on déploie.

### L’UI qui ressemblait à Stake.com

Au début, l’interface du jeu copiait trop l’ambiance d’un site de casino en ligne — le genre Stake.com : sombre, boutons, vibe « mise ». Ce n’était pas un hasard : le mécanisme du multiplicateur évoque ce monde. Mais ce n’était pas *mon* look. J’ai fait restyler. Vers quelque chose de plus clair, plus à moi, aligné avec le minimalisme que je pousse ailleurs. Pas de copie permanente d’une marque ; une première version trop influencée, puis une correction.

C’est une leçon utile pour quiconque construit avec l’IA : le premier rendu imite souvent ce que le modèle a beaucoup vu. À toi de dire « non, restyle ».

![Grayscale leaf plant](https://images.unsplash.com/photo-1615047611638-644db9d02f4d?w=1200&q=80)

*Photo : [Annie Spratt](https://unsplash.com/photos/grayscale-photo-of-green-leaf-plant-3yLJWDHxfwk) / Unsplash*

## Du site de jeux à game.zunrel.com

Héberger le jeu sur zunrel.com pendant quelques jours a été un détour. Puis j’ai séparé les choses : les guides (et plus tard Notion) d’un côté, le jeu de l’autre. game.zunrel.com existe pour ça. Zunrel le produit n’a pas à porter un jeu dans sa navigation ; le jeu n’a pas à porter l’affiliation dans son HUD.

Séparer, c’est encore du minimalisme. Un domaine, une intention.

## Créer sans coder à la main

Je le répète parce que c’est ma marque : je ne me présents pas comme développeur. Je crée des sites (et un jeu) avec l’IA, et je montre comment. Ça veut dire : savoir décrire une intention, savoir relire un écran, savoir dire quand quelque chose cloche, savoir déployer sur Cloudflare. Ça ne veut pas dire inventer des commits héroïques.

Beaucoup de gens croient qu’il faut d’abord « apprendre à coder » pendant six mois avant de sortir quoi que ce soit. Mon chemin est l’inverse : sortir quelque chose, comprendre en faisant, documenter la méthode. Le jeu est un exemple extrême de ce chemin — parce qu’un jeu a des contraintes de timing, de son, de ressenti, que les pages statiques n’ont pas.

Est-ce parfait ? Non. Est-ce jouable ? Oui. Est-ce que je donne des chiffres de joueurs ou de sessions ? Non — je n’en invente pas.

![Pine tree in black and white](https://images.unsplash.com/photo-1681065498547-44cf07ac84a8?w=1200&q=80)

*Photo : [Reggie Tmin](https://unsplash.com/photos/a-black-and-white-photo-of-a-pine-tree-ZGbriLOvOI0) / Unsplash*



## Comment une session avec l’IA se passe vraiment

Ce n’est pas magique. Je décris une intention : « un jeu style Crash, multiplicateur, monnaie virtuelle, son, animations fluides ». L’IA propose une structure. Je lance. Ça casse. Je décris le bug. On corrige. Je joue trente secondes. Je dis ce qui cloche dans le ressenti. On retouche GSAP. Howler charge un son trop fort ; on baisse. PixiJS affiche un sprite de travers ; on aligne.

Le métier, ce n’est pas taper du TypeScript. Le métier, c’est tenir le goût et la clarté pendant que le code apparaît. Pareil pour un site Astro. Pareil pour une page Notion. La stack change ; la responsabilité, non.

## Monnaie virtuelle, point final

Je le souligne : pas d’argent réel. Pas de dépôt. Pas de retrait. Le multiplicateur est un jouet. Dès qu’on frôle l’esthétique « casino », il faut être limpide sur ce point. Le restyle après l’UI trop proche de Stake.com allait dans le même sens : enlever l’ambiguïté, garder le fun.

## Pourquoi en parler sur ce blog

Parce que ce blog raconte ce que j’ai fait ces derniers mois : sites, échecs, victoires. Le jeu est une victoire technique et une parenthèse éditoriale. Il montre aussi mes limites : j’ai laissé le domaine principal porter un détour jeux trop longtemps. Documenter ça, c’est utile pour quelqu’un qui veut suivre la même méthode.

Et parce que ma phrase de marque — je crée des sites avec l’IA et je montre comment je fais — serait incomplète sans dire : parfois, je crée aussi un jeu.

## Liens avec le reste de la route

Le même mois, Pieceworth ferme, Techonni redirige, Zunrel pivote plusieurs fois, puis se pose sur Notion. Le jeu, lui, reste sur game.zunrel.com. Dans le bruit des pivots, c’est un point fixe. Pas une niche d’affiliation. Un objet. Ça m’aide à me rappeler que tout n’a pas à « convertir ». Certains trucs existent pour exister — et pour prouver une méthode.


## Cloudflare, noir, puis minimal

Comme mes autres projets, le jeu et les sites ont migré vers Cloudflare. Les redesigns sont passés par une phase noire, puis par un look minimal. Sur le jeu, le restyle après l’UI trop « Stake » s’inscrit dans la même trajectoire : moins de bruit visuel, plus d’identité personnelle.

dariopinheiro.com, zunrel.com, game.zunrel.com : trois intentions, une même façon de travailler. Le blog perso raconte. Zunrel sert les débutants Notion. Le jeu existe pour le plaisir et pour montrer que l’IA peut aussi animer des sprites.

## Ce que le jeu m’a appris sur les sites

1. **Séparer les produits.** Un détour jeux sur le domaine principal a été instructif ; le garder pour toujours aurait mélangé les messages.
2. **Le premier UI de l’IA imite.** Tu dois restyler vers toi.
3. **La stack se nomme.** PixiJS, GSAP, TypeScript, Howler : dire les outils, c’est respecter le lecteur qui veut reproduire.
4. **Pas d’argent réel.** Monnaie virtuelle seulement. Clair dès le départ.
5. **La même marque.** Sites et jeu relèvent de la même phrase : je crée avec l’IA et je montre comment.

## Échecs et victoires, sans chiffres inventés

L’échec relatif, c’est d’avoir laissé le jeu prendre le domaine principal quelques jours : ça brouillait Zunrel. La victoire, c’est d’avoir un démo vivant sur son propre sous-domaine, restylé, déployé, et aligné avec ma façon de créer.

Je n’ai pas « shippé un studio de jeux ». J’ai shippé un jeu. Pour quelqu’un qui n’est ni développeur ni designer ni gourou, c’est déjà une soirée qui compte.



## Ce que je dirais à quelqu’un qui veut faire pareil

Commence par une intention courte. Nomme la stack. Sépare le jeu du site marketing dès que le détour brouille le message. Restyle dès que le premier UI ressemble trop à une marque connue. Dis clairement s’il y a de l’argent réel ou non. Déploie sur Cloudflare comme le reste. Et surtout : montre le processus, pas seulement le résultat. C’est toute la différence entre « j’ai un jeu » et « je montre comment je crée avec l’IA ».




## Une soirÃ©e typique de build

Je lance une session. Je dÃ©cris le ressenti que je veux : plus arcade, moins casino. LâIA propose. Je joue. Je note ce qui cloche. On itÃ¨re. Cloudflare dÃ©ploie. Je rouvre game.zunrel.com sur mon tÃ©lÃ©phone. Si Ã§a tient, je mâarrÃªte. Si Ã§a ne tient pas, je continue. Câest banal, et câest exactement comme Ã§a que je construis aussi mes sites. Le jeu nâest pas une exception : câest la mÃ©thode mise en scÃ¨ne.

## La suite

Je continue les articles du soir sur ce blog : Zunrel, Pieceworth, Techonni, le jeu. Un article par soirée, au long cours, à la première personne. Pas de cards partout, pas de chiffres inventés, pas de promesse de revenus. Juste la route — celle où je crée des trucs sur internet, avec l’IA, et où parfois, entre deux pivots, un Crash-style apparaît sur game.zunrel.com.
