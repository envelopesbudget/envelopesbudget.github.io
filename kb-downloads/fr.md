# Mon budget — Centre d'aide

## Ce que fait l'application {#about}

« Mon budget » n'est pas un carnet de dépenses, c'est un vrai budget selon la méthode des enveloppes. L'application en fait beaucoup, et l'essentiel n'est pas enfoui dans les menus mais caché dans les gestes et les petits détails. Cette page est une courte visite ; ensuite, chaque écran a son article.

### L'essentiel {#about-main}

Le suivi des dépenses répond à la question « où est passé l'argent ». Un budget répond à une question plus importante : **« à quoi va-t-il encore suffire »** — aujourd'hui, jusqu'à la paie, d'ici les vacances.

##### Les enveloppes

Chaque euro reçoit un rôle : courses, loyer, vacances. Vous voyez ce qui reste dans chaque enveloppe, et un dépassement passe aussitôt au rouge. En détail — [« Comment fonctionne le budget »](#start).

##### Vos données sont à vous

Le budget vit sur votre téléphone et dans votre cloud. Le développeur n'y a pas accès. Vous pouvez protéger le cloud par un mot de passe — AES-256. En détail — [« Cloud et sauvegardes »](#sync-password).

##### Venir de YNAB

Comptes, catégories et tout l'historique de YNAB 4 ou de YNAB web arrivent par fichier, et un petit lexique indique comment s'appellent ici les mots que vous connaissez. En détail — [« Premiers pas »](#first-steps).

### Saisie rapide {#about-input}

Une dépense se note plus facilement à la caisse que de mémoire le soir. C'est pourquoi il y a plusieurs façons de la saisir.

##### À trier

Pas le temps de choisir une catégorie et un compte à la caisse ? Notez juste le montant. Le bouton « À trier » l'enregistre avec la mention « Trier », et à la maison le formulaire vous présente ces opérations une par une. Cela s'active dans « Paramètres → Données → À trier ». En détail — [« Formulaire d'opération »](#entry-inbox).

##### À la voix

« Carrefour 70 Courses du compte Compte courant » — et le formulaire est rempli. En détail — [« Saisie vocale »](#voice).

##### Avec le ticket

La caméra sur le QR code du ticket — le montant et la date se remplissent seuls, et dès la deuxième fois l'application reconnaît le magasin à sa caisse. Fonctionne là où l'application sait lire les tickets du pays. En détail — [« Scanner de tickets »](#receipt).

##### Depuis l'écran d'accueil

Les widgets et les raccourcis ouvrent le formulaire en une touche, sans passer par l'application. En détail — [« Widgets et raccourcis »](#widgets).

##### Pavé-calculatrice

Le montant se saisit sur un pavé à part qui additionne et soustrait, se répartit entre plusieurs catégories, se vire d'un compte à l'autre — même entre devises. En détail — [« Formulaire d'opération »](#entry).

### Projets {#about-plans}

##### Objectifs

Cinq types : par mois, pour une date, garder un solde, pourcentage du revenu et liste d'achats. L'application calcule combien mettre de côté. En détail — [« Objectifs »](#goals).

##### Paiements planifiés

Loyer, abonnements, mensualité de crédit — avec un rappel à l'avance et une saisie en une touche. En détail — [« Paiements planifiés »](#scheduled).

##### Cartes de crédit et dettes

L'argent pour rembourser la carte de crédit se met de côté tout seul, et la dette se suit mois après mois. En détail — le scénario [« Cartes de crédit et dettes »](#scenario-credit).

##### Tags et « qui doit quoi à qui »

Un voyage, des travaux, des dépenses partagées entre amis — un tag les rassemble depuis différentes catégories et calcule qui doit quoi à qui. En détail — [« Bénéficiaires et tags »](#payees-tags).

### Rapports {#about-reports}

Dix rapports : où est parti l'argent, la tendance et l'écart par rapport à d'habitude, le flux de l'argent des revenus vers les dépenses, revenus et dépenses mois par mois, l'âge de l'argent, le patrimoine, la dette des cartes. Et « Aperçu » est votre écran principal : vous choisissez et disposez vous-même les blocs. En détail — [« Rapports »](#reports) et [« Aperçu »](#overview).

### Appareils et cloud {#about-devices}

Un seul budget sur le téléphone, la tablette et l'ordinateur Windows, à deux ou en famille. Synchronisation via Google Drive, Dropbox ou WebDAV — Nextcloud, ownCloud, pCloud, votre propre serveur ; les sauvegardes se font toutes seules selon un calendrier. En détail — les scénarios [« Un budget sur plusieurs appareils »](#scenario-devices) et [« À deux ou plus sur un même budget »](#scenario-together).

### À votre goût {#about-yours}

Treize langues, soixante devises, format des montants et des dates selon votre pays. Sept styles en clair et en sombre, polices, densité, arrondis, icônes. Plusieurs budgets : personnel, familial, professionnel. En détail — [« Paramètres »](#settings).

### Par où commencer {#about-start}

1. [« Comment fonctionne le budget »](#start) — la méthode des enveloppes en dix minutes.
2. [« Premiers pas »](#first-steps) — de l'installation au premier mois.
3. [Scénarios](#scenario-paycheck) — des solutions toutes prêtes : d'une paie à l'autre, freelance, cartes de crédit, voyage entre amis.

## Comment fonctionne le budget {#start}

La méthode des enveloppes en dix minutes : où arrive l'argent, comment le répartir et ce qui se passe au changement de mois.

### Les enveloppes : l'idée principale {#start-idea}

Imaginez que vous avez retiré votre salaire en espèces et l'avez réparti dans des enveloppes : « Courses », « Charges », « Vacances ». Pour les courses, vous ne prenez que dans leur enveloppe. Une enveloppe vide, c'est qu'il n'y a plus d'argent pour ça. L'application fait la même chose, sans le papier.

(1)
##### L'argent sur les comptes

Compte courant — 1 700 €

Espèces — 200 €

(2)
##### « Non réparti »

1 900 € — encore sans rôle

(3)
##### Les enveloppes-catégories

Courses — 550 €

Charges — 170 €

…et ainsi de suite, jusqu'à 0

(4)
##### Les dépenses

Vous avez acheté du pain — l'enveloppe « Courses » s'est amincie

Chaque euro de vos comptes se trouve à un seul endroit : soit dans une enveloppe, soit dans « non réparti ». À tout moment, vous voyez donc ce que vous pouvez encore vous offrir et ce qui ne passe plus. Le premier but est d'amener « non réparti » à zéro : alors **chaque euro a un rôle**. Ce n'est pas l'arrivée mais la première marche — où mène la méthode ensuite, c'est [à la fin de l'article](#start-ladder).

En quoi c'est différent du « suivi des dépenses » habituel — [plus bas](#start-vs).

### En quoi c'est différent du suivi des dépenses {#start-vs}

Beaucoup notent leurs dépenses depuis des années — dans un carnet, un tableur, l'appli de la banque — et ne comprennent toujours pas pourquoi il n'y a plus d'argent en fin de mois. Le suivi des dépenses raconte honnêtement le passé. Les enveloppes aident à piloter l'avenir.

|  | Suivi des dépenses | Budget par enveloppes |
|---|---|---|
| Quand vous pensez à l'argent | Après la dépense : vous regardez où il est parti. | Avant la dépense : vous décidez combien vous pouvez dépenser. |
| La question principale | « Où est passé l'argent ? » | « À quoi va-t-il encore suffire ? » |
| Le dépassement | Vous l'apprenez en fin de mois, quand c'est trop tard. | Vous le voyez tout de suite : l'enveloppe rougit au moment de l'achat — et vous déplacez de l'argent depuis une autre. |
| L'argent sur le compte | Un seul chiffre : « 1 400 € sur le compte, donc j'ai de l'argent ». | Réparti par rôles : une partie est déjà promise au loyer, une autre aux vacances. Seul ce qui est dans la bonne enveloppe est libre. |
| Le salaire | Juste une rentrée qui « finira bien par partir ». | De l'argent à qui vous donnez un rôle tout de suite. |
| Les dépenses rares | L'assurance ou une réparation tombent sans prévenir. | Mises de côté un peu chaque mois — à l'échéance, l'argent est déjà là. |

(1 400 €)
#### Exemple : « il reste plein d'argent sur le compte »

Milieu du mois, 1 400 € sur le compte. Vous avez envie d'un casque à 280 €.

*Comment ça marche:*
**Le suivi des dépenses** voit 1 400 € et dit : « vas-y ». Mais le loyer tombe dans une semaine — 800 €, plus les charges et les courses jusqu'à la paie. Le casque est acheté, il manque pour le loyer.

**Les enveloppes** voient les mêmes 1 400 €, mais répartis : « Loyer » — 800 €, « Charges » — 170 €, « Courses » — 260 €, « Loisirs et hobbies » — 170 €. Pour le casque, 170 € sont libres. Vous voulez l'acheter maintenant ? Décidez dans quelle enveloppe prendre les 110 € qui manquent. C'est vous qui décidez, et avant l'achat, pas après.

(?)
#### Et le suivi des dépenses, il existe ici ?

Oui — et plus détaillé que dans un carnet.

*Comment ça marche:*
Chaque dépense est notée, et « Où est parti l'argent », « Dépenses du mois » et les rapports montrent où tout est parti. Simplement, ici ce n'est pas un but mais un contrôle du plan : ce que vous avez décidé correspond-il à ce qui s'est passé ? Le mois suivant, vous répartirez plus juste.

(↻)
#### En bref

Le suivi des dépenses, c'est le rétroviseur. Les enveloppes, c'est le volant.

*Comment ça marche:*
Regarder dans le rétroviseur est utile : on voit d'où l'on vient. Mais seul le volant aide à avancer — une décision prise à l'avance sur la destination de l'argent.

### Trois chiffres pour chaque catégorie {#start-envelope}

Tournez le téléphone sur le côté — l'écran « Budget » devient un tableau, et les trois chiffres de l'enveloppe sont nommés directement en tête de colonne.

[Budget en mode paysage : colonnes Catégorie, Prévu, Dépensé, Disponible ; Charges 100, −92,74, 29,44]
Téléphone sur le côté : le même « Budget » en tableau. En vue normale, « Disponible » est le montant à droite de la catégorie, et « dépensé … sur … » la ligne sous la barre.

1. **« Prévu »** — combien vous avez mis dans l'enveloppe ce mois-ci. C'est une décision : « 100 € pour les charges en novembre ».

2. **« Dépensé »** — ce qui est déjà sorti de l'enveloppe : toutes les dépenses de cette catégorie sur le mois, avec un signe moins. Un remboursement d'article réduit ce chiffre.

3. **« Disponible »** — ce que vous pouvez encore dépenser : report du mois précédent + prévu − dépensé.

   *Comment ça marche:*
   Sur la capture, « Charges » : prévu 100, dépensé 92,74 — on croirait qu'il reste 7,26. Mais 29,44 sont disponibles : 22,18 € n'avaient pas été dépensés en octobre et sont passés en novembre. C'est ainsi qu'une enveloppe s'accumule.

   Une pastille verte — il y a de l'argent dans l'enveloppe, un zéro gris — elle est vide, une rouge — c'est un moins : vous avez dépensé plus qu'il n'y avait.

[Écran Budget : groupes de catégories, montants à droite, barres et lignes dépensé]

À quoi cela ressemble à l'écran et où toucher — dans l'article [« Budget »](#budget). Ici, seulement les règles de calcul des chiffres.

(€)
#### Le revenu va dans « non réparti », pas dans une catégorie

Le salaire n'arrive pas tout seul dans une enveloppe : il va dans « non réparti », et c'est vous qui le répartissez.

*Comment ça marche:*
Dans le formulaire d'opération, un revenu est enregistré par défaut dans « Revenu pour novembre » — c'est-à-dire dans le « non réparti » de ce mois. Vous pouvez aussi choisir « Revenu pour décembre » — voir la section [« L'âge de l'argent en détail »](#overview) de l'article « Aperçu ».

(↺)
#### Un remboursement retourne dans l'enveloppe

On vous a remboursé un article ? L'argent revient dans la catégorie d'où il est parti, pas dans les revenus.

*Comment ça marche:*
Comment le saisir — l'article [« Formulaire d'opération »](#entry), section « Remboursement d'un article ».

(⇄)
#### Un virement n'est pas une dépense

Retrait d'espèces, remboursement de la carte de crédit, mise de côté sur un livret — l'argent est toujours à vous.

*Comment ça marche:*
Un virement entre comptes du budget ne touche aucune enveloppe. Seul un virement vers un compte hors budget (épargne, placement) sort des enveloppes — l'application demande alors une catégorie.

### Mois après mois {#start-months}

Le budget vit au mois. Ce qui arrive à une enveloppe au changement de mois est l'une des règles principales.

(+)
#### Le plus est reporté

Vous n'avez pas tout dépensé ? Le reste passe au mois suivant et reste dans l'enveloppe.

*Comment ça marche:*
C'est ainsi qu'on épargne pour le rare et le gros : chaque mois vous mettez 150 € dans « Vacances », vous n'y touchez pas — à l'été, il y a 900 €. On peut aussi mettre de côté pour l'avenir tout de suite : l'argent se répartit sur n'importe quel mois à venir — la flèche « › » sur l'écran « Budget ».

(−)
#### Le moins est remis à zéro

Vous avez dépensé plus que l'enveloppe n'en contenait ? La catégorie est rouge. Au changement de mois, le moins disparaît, mais pas sans laisser de trace.

*Comment ça marche:*
Un moins sur votre propre argent (rouge, icône portefeuille) réduit le « non réparti » du mois suivant : l'argent est bel et bien dépensé. Mieux vaut donc le combler tout de suite en déplaçant de l'argent depuis une autre catégorie : touchez le montant rouge sur l'écran « Budget ».

Un moins sur la carte de crédit (jaune, icône carte) est une autre affaire : il ne mange pas votre argent, il augmente la dette de la carte. « Non réparti » ne le reprend pas, mais la dette devra être remboursée.

(≡)
#### « Budget du mois » sur « Aperçu »

Toute la comptabilité du mois en une échelle : le reste du mois précédent, le revenu, le réparti, le total « non réparti ».

*Comment ça marche:*
Si le chiffre de la pastille vous semble étrange, regardez ici : on voit d'où il vient. En détail — l'article [« Aperçu »](#overview).

### La carte de crédit dans le budget {#start-credit}

La carte de crédit est ce qu'il y a de moins habituel dans la méthode des enveloppes. Une seule règle : un achat à la carte de crédit dépense l'argent de l'enveloppe exactement comme un achat à la carte de débit.

(1)
#### L'achat

Vous avez payé des courses à la carte de crédit pour 35 € — l'enveloppe « Courses » a maigri de 35, comme d'habitude.

(2)
#### L'argent du remboursement se met de côté tout seul

L'application place ces 35 € dans le groupe « Paiements de cartes », dans la catégorie de votre carte de crédit.

*Comment ça marche:*
Ainsi, à l'échéance, l'argent du remboursement est déjà à part, impossible à dépenser par mégarde. Rien à mettre de côté vous-même.

(3)
#### Le paiement de la carte

Remboursez la carte de crédit par un virement de votre compte courant vers la carte. L'argent mis de côté part au remboursement.

*Comment ça marche:*
Comment saisir un virement — l'article [« Formulaire d'opération »](#entry).

### Les quatre règles de la méthode {#start-rules}

L'application ne vous oblige pas à les suivre — elle les suggère une à une, quand la règle devient utile.

(1)
#### Donnez un rôle à chaque euro

Répartissez l'argent jusqu'à ce que « non réparti » tombe à zéro. L'argent sans rôle se dépense sans qu'on s'en aperçoive.

(2)
#### Acceptez vos vraies dépenses

L'assurance une fois par an, la réparation de la voiture, les cadeaux des fêtes — ce sont aussi des dépenses. Mettez de côté un peu chaque mois.

*Comment ça marche:*
Les objectifs « Pour une date » aident : l'application calcule combien mettre par mois pour être prêt à temps.

(3)
#### Adaptez-vous

Un dépassement n'est pas un échec. Déplacez de l'argent depuis une autre enveloppe et continuez.

*Comment ça marche:*
Un budget est un plan, pas un serment. L'important, c'est que les enveloppes montrent honnêtement ce qui reste.

(4)
#### Laissez vieillir votre argent

Le but : dépenser l'argent gagné il y a un mois, pas hier.

*Comment ça marche:*
« Âge de l'argent » sur « Aperçu » le suit. À partir de 30 jours, on peut vivre sur l'argent du mois précédent : explications dans l'article [« Aperçu »](#overview).

### Zéro n'est que la première marche {#start-ladder}

« Non réparti » à zéro est un bon but, mais pas le dernier. La méthode va plus loin : de « ça tient jusqu'à la paie » à « mon argent travaille pour moi ». Les marches se montent dans l'ordre — en sauter est risqué : investir sans coussin, c'est revendre ses placements à la première panne de voiture.

(1)
#### Chaque euro a un rôle

Tout l'argent des comptes est réparti dans les enveloppes. Vous savez ce qui tiendra jusqu'à la fin du mois.

**Comment savoir que vous y êtes :** « non réparti » est à zéro, aucune catégorie n'est rouge.

**Ce qui aide dans l'application :** la pastille « Non réparti », la répartition automatique, « Couvrir tous les dépassements ».

(2)
#### Des enveloppes pour les dépenses rares

L'assurance, la réparation de la voiture, les cadeaux, les vacances ne prennent plus au dépourvu : on met de côté un peu chaque mois.

**Comment savoir que vous y êtes :** une grosse facture arrive, et l'argent l'attend déjà dans son enveloppe.

**Ce qui aide dans l'application :** les objectifs « Pour une date » et « Par mois » calculent combien mettre ; le bloc « À venir » sur « Aperçu » rappelle où il manque.

(3)
#### Un mois d'avance

Vous dépensez l'argent gagné il y a un mois. Le nouveau salaire n'est pas nécessaire à ce mois-ci — il va au suivant.

**Comment savoir que vous y êtes :** « Âge de l'argent » à 30 jours ou plus.

**Ce qui aide dans l'application :** « Âge de l'argent » sur « Aperçu », le revenu « pour le mois prochain » dans le formulaire — explications dans l'article [« Aperçu »](#overview), section « L'âge de l'argent en détail ».

(4)
#### Un coussin de sécurité

Une réserve de trois à six mois de dépenses habituelles. Perdre son emploi ou tomber malade devient un ennui, pas une catastrophe.

**Comment savoir que vous y êtes :** « Fonds d’urgence » contient plusieurs mois de dépenses.

**Ce qui aide dans l'application :** un objectif « Solde » sur la catégorie « Fonds d’urgence » ; les dépenses moyennes par mois — dans les rapports et sur l'écran de la catégorie.

(5)
#### L'argent travaille pour vous

Le coussin est constitué, les dépenses rares sont couvertes, vous avez un mois d'avance — désormais le surplus peut faire plus que dormir : livret, obligations, placements. L'argent commence à rapporter de l'argent.

**Comment savoir que vous y êtes :** chaque mois une part du revenu va dans « Investissements », et vous n'y touchez pas pour les dépenses courantes.

**Ce qui aide dans l'application :** le groupe « Épargne » avec la catégorie « Investissements » ; « Payez-vous d'abord » sur « Aperçu » montre quel pourcentage du revenu vous mettez de côté (la norme est de 10 % ou plus) ; un compte « Suivi seul » pour un placement ou un compte-titres ; « Patrimoine » sur « Aperçu » — comment grandit tout ce que vous possédez.

La durée du chemin dépend du revenu et des habitudes. La première marche prend en général le premier mois. Un mois d'avance — de trois mois à un an. L'essentiel est de faire un pas chaque mois, pas un bond.

Prêt à commencer ? Ensuite — [« Premiers pas »](#first-steps) : du premier lancement au premier mois.

## Premiers pas {#first-steps}

Du premier lancement à un budget qui tourne : l'assistant, la liste « Premiers pas » et quoi faire le premier mois.

*Comment fonctionne la méthode elle-même — dans l'article [« Comment fonctionne le budget »](start.md)*

### Premier lancement : par où commencer {#first-steps-welcome}

Au premier lancement s'ouvre l'assistant. Le premier écran propose trois portes. Vous pouvez changer de langue ici même, avec le bouton en haut à droite : les catégories que l'application propose par défaut seront dans cette langue.

[Étape 1 sur 6 : Bienvenue, bouton de langue, trois choix : Je commence de zéro, J’ai déjà un budget, Je viens de YNAB]

(A)
#### « Je commence de zéro »

L'assistant vous guide en cinq étapes : devise et nom, comptes, catégories, première répartition. Les étapes sont détaillées plus bas.

(B)
#### « J’ai déjà un budget »

Vous teniez déjà un budget sur un autre téléphone ou avant de réinstaller. L'application le charge depuis le cloud — Google Drive, Dropbox ou WebDAV — ou depuis un fichier de sauvegarde.

*Comment ça marche:*
Le nom n'est pas demandé ici : il arrive avec le budget et sert d'adresse à son dossier dans le cloud.

(C)
#### « Je viens de YNAB »

YNAB 4 ou YNAB web : comptes, catégories et historique arrivent depuis un fichier.

*Comment ça marche:*
D'abord la devise et le nom, puis le choix du fichier d'export, et à la fin un lexique : comment s'appelle ici chaque mot de YNAB. Vous pourrez rouvrir le lexique plus tard, lors d'un import depuis les paramètres.

Cinq minutes environ. On peut passer n'importe quelle étape — la liste « Premiers pas » sur « Aperçu » rappellera ce qui reste.

### En partant de zéro : cinq étapes {#first-steps-fresh}

En bas de chaque étape — « Suivant » et « Passer ». Le bouton Retour du système revient d'une étape au lieu de fermer l'application.

[Étape 2. Devise et nom]

(•)
#### Étape 2. Devise et nom

L'application remplit la devise d'après le pays du téléphone — vérifiez-la. C'est le symbole dans lequel vous tenez vos comptes ; elle ne convertit pas les montants.

*Comment ça marche:*
Trouvez votre propre nom : « Famille », « Perso ». Si vous laissez le champ vide, le budget s'appellera « Mon budget ». Le nom s'affiche en haut de l'écran et dans le nom du dossier dans le cloud : on reconnaît facilement le budget sur n'importe quel appareil.

[Étape 3. Où se trouve votre argent]

(•)
#### Étape 3. Où se trouve votre argent

Ajoutez tous les endroits où vous avez de l'argent, avec le solde du jour : portefeuille, cartes de toutes vos banques, carte de crédit, épargne.

*Comment ça marche:*
Oubliez une seule carte, et le budget ne correspondra pas à ce que vous avez réellement. Touchez « + » à côté du modèle qui convient — la fiche du nouveau compte s'ouvre avec le type déjà choisi. Le solde du compte arrive aussitôt dans « non réparti » — sur la capture, deux comptes ont apporté 1 900 €. Plus sur les comptes — dans l'article [« Comptes »](#accounts).

[Étape 4. Vos catégories]

(•)
#### Étape 4. Vos catégories

Les puces « Vos dépenses » ajoutent les catégories utiles : « Voiture », « Enfants », « Animaux ». En dessous, toute la liste, à ajuster à votre goût.

*Comment ça marche:*
- touchez une catégorie — pour la renommer ;
- la croix — retire la catégorie ;
- « Ajouter une catégorie » — dans chaque groupe, « Ajouter un nouveau groupe » — en bas ;
- le crayon à côté du nom d’un groupe — renommer le groupe.

La capture montre le début de la liste ; elle est plus longue.

[Étape 5. Répartissez votre argent]

(•)
#### Étape 5. Répartissez votre argent

Répartissez « non réparti » entre les enveloppes : touchez le montant d'une catégorie et saisissez ce que vous êtes prêt à y consacrer ce mois-ci.

*Comment ça marche:*
En haut — ce qui reste. Sur la capture, 840 € sont répartis, il reste 1 060 €. Inutile d'arriver à zéro ici : commencez par l'essentiel — logement, nourriture, téléphone —, le reste se répartira plus tard sur l'écran « Budget ».

[Étape 6. Terminé]

(•)
#### Étape 6. Terminé

La règle principale, encore une fois : répartissez l'argent jusqu'à ce que « non réparti » tombe à zéro.

*Comment ça marche:*
« Ouvrir le budget » mène à l'écran « Budget ». Ensuite, l'application donne des conseils au fil de l'eau — un à la fois, quand il est utile.

### Après l'assistant : la liste « Premiers pas » {#first-steps-first-steps}

En haut d'« Aperçu » apparaît une carte-liste. C'est ce sans quoi le budget ne peut pas dire la vérité. L'assistant compte ce que vous y avez déjà fait.

[Aperçu avec la carte Premiers pas : 3 sur 6, Argent réparti ouvert, 1 900 non réparti, bouton Voir le budget]

1. **Espèces dans le portefeuille** — Le portefeuille, un compte à part. Les espèces filent en premier : sans compte, le budget s'écarte de l'argent que vous avez en main dès le premier achat. Pas d'espèces ? — « Pas d'espèces ».
2. **Les cartes de toutes vos banques** — Toutes les cartes et tous les comptes sont ajoutés. Si vous les avez ajoutés dans l'assistant, l'élément est déjà coché.
3. **Des catégories à votre mesure** — La liste des catégories est ajustée. Étape des catégories passée — coché. Le bouton ouvre le même écran que dans l'assistant. Une catégorie qui a déjà des opérations n'est pas supprimée par la croix mais masquée : les opérations restent à leur place.
4. **Argent réparti** — « Non réparti » est arrivé à zéro. Sinon, l'élément montre ce qui reste et mène à « Budget ».
5. **Première opération** — Vous avez noté la première dépense — le budget prend vie. Le bouton ouvre le formulaire.
6. **Une copie hors du téléphone** — Le cloud ou une copie en fichier. Téléphone perdu — budget sauf. Boutons : connecter un cloud ou « Sauvegardes ».

(1)
#### Ce qui est fait est coché

En haut, « 3 sur 6 » : combien sont prêts. Un élément terminé tient sur une ligne, avec une coche.

(2)
#### Un seul élément est ouvert

Le premier non terminé — ou celui que vous avez touché. Il dit quoi faire et pourquoi.

(3)
#### Le bouton principal est une porte

Il mène droit là où l'élément se règle : la fiche du compte, « Budget », le formulaire d'opération, la connexion au cloud. Il y en a parfois un second — votre réponse : « Pas d'espèces », « Toutes ajoutées », « Garder tel quel ».

(⋮)
#### Masquer la liste

Menu de la carte → « Masquer la liste » (avec « Annuler » en bas de l'écran). Tout est fait — la carte dit « Votre budget est prêt », touchez « Compris ».

*Comment ça marche:*
Tant que la liste est ouverte, les conseils habituels d'« Aperçu » se taisent — pour ne pas dire deux fois la même chose. Pour faire revenir tous les conseils : « Paramètres → Aide et contact → Astuces → Réafficher les astuces ».

Pour ceux qui viennent de YNAB, la liste est différente : rapprochement des soldes avec la banque, espèces, répartition et copie — les comptes et catégories sont déjà arrivés avec le fichier.

### Le premier mois {#first-steps-month1}

1. **Notez chaque dépense** — tout de suite, à la caisse : « + Opération », la caméra pour le ticket ou le micro. Cinq secondes maintenant au lieu d'une soirée avec le relevé plus tard. Pas le temps ? — « À trier » (article [« Formulaire d'opération »](#entry)).
2. **De l'argent est arrivé — répartissez-le.** Chaque salaire arrive dans « non réparti » ; distribuez-le entre les enveloppes sur l'écran « Budget ».
3. **Une enveloppe a rougi — déplacez** de l'argent depuis une autre. C'est normal : le premier mois montre toujours ce que vous avez sous-estimé.
4. **Une fois par semaine, rapprochez vos comptes** avec la banque — menu du compte, « Rapprochement du solde » (article [« Comptes »](#accounts)).
5. **En fin de mois, regardez « Aperçu »** : « Où est parti l'argent », « Dépenses du mois ». Le mois suivant, vous répartirez avec l'expérience.

## Un budget sur plusieurs appareils {#scenario-devices}

Le téléphone dans la poche, la tablette à la maison, l'ordinateur au bureau — et le même budget partout. Une dépense notée à la caisse est sur l'ordinateur portable le soir même. Comment le régler et à quoi penser.

*« Paramètres », section « Synchronisation »*

### Pour qui {#scenario-devices-who}

##### Téléphone et ordinateur

Les dépenses depuis le téléphone, à la caisse. Le plan du mois, les rapports et l'analyse sur grand écran. Pour l'ordinateur, il existe la « Version Windows » : le même budget, avec une interface pensée pour la souris. Elle se synchronise via Google Drive — si l'ordinateur est de la partie, choisissez ce cloud sur le téléphone aussi.

##### Téléphone et tablette

Sur une tablette, il est agréable de répartir le salaire entre les enveloppes : « Budget » en mode paysage devient un tableau plein écran.

##### Un nouveau téléphone

L'ancien est cassé ou remplacé — des années de budget déménagent en quelques minutes. C'est le même scénario : le nouveau téléphone est le second appareil.

C'est un cloud qui relie les appareils : Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, votre propre serveur). Chaque appareil y envoie ses modifications et récupère celles des autres. Comment cela fonctionne en détail — l'article [« Cloud et sauvegardes »](#sync).

### Sur le premier appareil {#scenario-devices-first}

Celui où le budget est déjà tenu.

1. « Paramètres », section « Synchronisation » → « Autorisation ».
2. Connectez-vous au cloud. Pour Google Drive — avec le compte Google que vous utiliserez aussi sur les autres appareils. Pour Dropbox — avec l'identifiant et le mot de passe Dropbox, pas via Google. Il y aura un ordinateur Windows ? Prenez Google Drive : la version Windows ne se connecte pas aux autres clouds.
3. Vous voulez protéger les données du cloud par un mot de passe ? — « Définir un mot de passe » dans le bloc « Chiffrement du cloud ». Notez le mot de passe : personne ne pourra le récupérer.
4. Revenez sur « Aperçu » et touchez l'icône de synchronisation en haut à droite. Le budget part dans le cloud.

[Écran Autorisation : Chiffrement du cloud, Google Drive, Dropbox, WebDAV]
« Autorisation » — c'est ici qu'on connecte le cloud. Chaque cloud en détail — l'article [« Cloud et sauvegardes »](sync.md#auth).

### Sur le second appareil {#scenario-devices-second}

##### L'application vient d'être installée

1. Dans l'assistant du premier lancement, choisissez « J’ai déjà un budget ».
2. « Charger le budget depuis le cloud » s'ouvre. Connectez **le même** cloud avec **le même** compte.
3. Choisissez le budget dans la liste et touchez « Charger le budget ».
4. Si un mot de passe est défini sur le premier appareil, définissez le même ici.
5. Vérifiez la devise : « Paramètres » → « Devise du budget ». En détail — [plus bas](#scenario-devices-per-device).

[Écran Charger le budget depuis le cloud : étape 1 Connecter un cloud, étape 2 Nom du budget]
« Charger le budget depuis le cloud » — d'abord le cloud, puis un budget de la liste.

##### L'application est déjà installée, avec son propre budget

« Paramètres », section « Synchronisation » → « Charger le budget depuis le cloud » — puis les mêmes étapes. Ou touchez le nom du budget en haut d'« Aperçu » — « Charger le budget depuis le cloud » s'y trouve aussi.

*Comment ça marche:*
Si, sur cet appareil, un budget du même nom contient déjà ses propres données, à la première synchronisation l'application demande s'il s'agit d'un seul budget ou de deux différents : « Depuis le cloud » ou « Fusionner ». En détail — l'article [« Cloud et sauvegardes »](#sync-trouble).

### Ce qui est commun et ce qui est propre à chaque appareil {#scenario-devices-per-device}

Ce sont les **données du budget** qui se synchronisent. Les réglages d'apparence et de sécurité, non : chaque appareil a les siens.

| Commun à tous les appareils | Propre à chaque appareil |
|---|---|
| Comptes, leurs icônes et couleurs | Langue et formats |
| Catégories et groupes, notes des catégories | Apparence : style, thème, police, arrondis |
| Opérations, tags, bénéficiaires | Code PIN et déverrouillage par empreinte |
| Sommes mises de côté par mois, objectifs et lignes de « Liste » | Mot de passe du cloud — mais il doit être identique |
| Paiements planifiés | Rappels |
| Photos et PDF — si « Synchroniser les photos » est activé | Calendrier des sauvegardes |
| | **Devise du budget** |

##### Devise du budget — à vérifier sur chaque appareil

Le symbole de la devise du budget vit sur l'appareil et ne part pas dans le cloud. Un budget chargé reçoit la devise du budget qui se trouvait déjà sur cet appareil — en général celle du pays du téléphone. Les montants ne changent pas, seul le symbole à côté change. Mauvais symbole ? — « Paramètres » → « Devise du budget ».

##### Photos des tickets

Juste après l'installation, les photos restent sur l'appareil où elles ont été prises. Pour qu'elles apparaissent partout, activez « Synchroniser les photos » sur l'écran « Synchronisation » — sur **chaque** appareil.

### Au quotidien {#scenario-devices-daily}

##### Synchroniser à la main est rarement utile

L'application se synchronise d'elle-même — quelques secondes après chaque ouverture. Le chiffre sur l'icône de synchronisation d'« Aperçu » indique combien de vos modifications ne sont pas encore parties dans le cloud.

##### Vous avez noté une dépense et rangez le téléphone

Une fois l'application en arrière-plan, Android ne la laisse plus travailler : les modifications partiront à la prochaine ouverture. Si vous vous mettez tout de suite à l'ordinateur, touchez l'icône de synchronisation sur le téléphone pour que la dépense y soit déjà.

##### La couleur de l'icône de synchronisation

Un éclair vert — tout est passé. Rouge — échec ; un seul échec, c'est en général juste l'absence de réseau. Si l'icône reste rouge, la synchronisation a échoué plusieurs fois de suite — ouvrez l'écran « Synchronisation », la cause y est indiquée.

### Erreurs fréquentes {#scenario-devices-mistakes}

| Ce qui s'est passé | Pourquoi, et que faire |
|---|---|
| Le second appareil n'a pas les modifications du premier | Les appareils sont connectés au cloud avec des comptes **différents** — chacun écrit dans son propre cloud. Connectez-vous partout avec un seul compte. |
| « Le cloud est protégé par un mot de passe » | Le mot de passe est défini sur un appareil, et sur l'autre il manque ou il est différent. Mettez **le même**. |
| Les photos sont arrivées mais ne s'ouvrent pas | Même chose : le mot de passe diffère entre les appareils. |
| Budget renommé — le second appareil ne voit plus les modifications | Le nom du budget est l'adresse de son dossier dans le cloud. Après le renommage, renommez le budget exactement de la même façon sur les autres appareils. |
| « Conflit » | Le même enregistrement a été modifié sur deux appareils avant qu'ils se synchronisent. La carte montre les deux versions — choisissez celle qu'il faut. |

### Sans cloud {#scenario-devices-no-cloud}

Vous ne voulez pas de cloud ? Le budget peut passer d'un de vos appareils à l'autre directement : par fichier ou par Wi-Fi sur le même réseau. C'est un transfert ponctuel, pas une synchronisation continue : les modifications devront être transférées à nouveau. Idéal pour passer à un nouveau téléphone. En détail — l'article [« Cloud et sauvegardes »](#sync-local).

## À deux ou plus sur un même budget {#scenario-together}

Une famille aux finances communes : les deux paient, les deux notent, les deux voient ce qui reste dans chaque enveloppe. Comment s'entendre avec l'application et entre vous pour éviter la confusion et les doublons.

*« Paramètres », section « Synchronisation »*

### Pour qui {#scenario-together-who}

L'argent est commun : les salaires s'additionnent, le loyer, la nourriture et les vacances sortent du pot commun. Chacun paie avec sa carte ou en espèces, mais les enveloppes sont les mêmes pour les deux : les deux voient « Courses », et celui qui atteint la limite en premier voit le rouge.

Si chacun a aussi de l'argent personnel que l'autre ne doit pas voir — voyez le scénario [« En couple : dépenses communes et argent personnel »](#scenario-couple).

### Réglage {#scenario-together-setup}

Techniquement, c'est le même budget sur plusieurs appareils — les étapes sont dans le scénario [« Un budget sur plusieurs appareils »](#scenario-devices). Une seule différence, mais elle compte.

##### Un compte cloud à part — pour le budget

Tous les appareils doivent se connecter au cloud avec **un seul** compte. Mais se connecter sur le téléphone de sa femme avec le compte Google personnel du mari est une mauvaise idée : le téléphone va synchroniser ses contacts, ses photos et ses e-mails.

Créez un **nouveau** compte Google — uniquement pour le budget — et utilisez-le pour le cloud de l'application sur tous les appareils. Chacun garde ses comptes personnels. Pour Dropbox, pareil : un Dropbox à part, connexion par identifiant et mot de passe.

##### Un seul mot de passe du cloud pour tous

Si vous en définissez un, mettez le **même** sur tous les téléphones. Le mot de passe ne se synchronise pas : on le saisit à la main sur chaque appareil.

### Qui a payé quoi {#scenario-together-whose}

L'application ne retient pas sur quel téléphone une opération a été notée. C'est le **compte** qui distingue les dépenses.

##### Un compte par personne

Donnez à chacun ses comptes : « Carte de Sophie », « Carte de Pierre », « Espèces de Sophie ». Le compte de la dépense dit qui a payé. Chacun rapproche les soldes avec sa propre banque — « Rapprochement du solde » dans l'article [« Comptes »](#accounts).

Les dépenses de chacun sur le mois — « Activité » → « ⋮ » → « Filtre », filtrer par compte.

##### Si vous avez besoin de « qui doit quoi à qui »

Dans un budget commun, d'habitude non : l'argent est commun de toute façon. Mais si vous avez convenu de partager quelque chose en deux, un tag avec « Règlement » sur ces dépenses montre qui doit combien à qui. En détail — l'article [« Bénéficiaires et tags »](#payees-tags).

### Répartir l'argent {#scenario-together-assign}

Répartir le salaire entre les enveloppes est plus simple seul — ou à deux devant un même écran.

##### Pourquoi pas chacun depuis son téléphone

Si les deux changent en même temps ce qui est mis de côté dans la même catégorie, c'est la modification arrivée au cloud en dernier qui l'emporte — ou l'application affiche un « Conflit » et demande de choisir. Le montant de l'enveloppe risque de ne pas être celui convenu.

Convenez de qui répartit. Avant de commencer, ouvrez l'application et laissez-lui quelques secondes pour se synchroniser — afin de voir les dernières dépenses de l'autre.

##### Ce que voient les deux

« Non réparti », le reste de chaque enveloppe, « Dépassement » et « Bientôt épuisé » sur « Aperçu » sont communs. Si « Courses » passe au jaune, les deux le voient, et on discute des mêmes chiffres.

### Paiements planifiés {#scenario-together-scheduled}

Le loyer et les abonnements sont communs, et l'échéance arrive sur les deux téléphones.

##### Un seul confirme

Si les deux touchent « Confirmer » sur le même paiement avant que les téléphones se soient synchronisés, l'opération est enregistrée **deux fois**. Convenez de qui confirme les paiements planifiés, ou laissez l'application se synchroniser avant de confirmer. Supprimez l'opération en trop dans « Activité ».

Les rappels d'échéance arrivent sur les deux téléphones — chez qui les a activés. Chacun les règle sur son téléphone : « Paramètres » → « Rappels ».

### Au quotidien {#scenario-together-daily}

##### Noté ? Synchronisez

L'application se synchronise à l'ouverture, pas à la mise en arrière-plan. Vous avez noté une grosse dépense et savez que l'autre va regarder le budget ? Touchez l'icône de synchronisation sur « Aperçu ».

##### Le rappel du soir compte les deux

« Rappeler de saisir les dépenses » se tait si le budget a déjà des dépenses aujourd'hui — y compris saisies par l'autre et arrivées par la synchronisation. Pour qu'il rappelle chacun, chacun doit noter ses dépenses le jour même.

##### « Dernières opérations » sont communes

Sur « Aperçu », vous voyez ce que l'autre a acheté : ses dépenses y apparaissent après la synchronisation.

### Erreurs fréquentes {#scenario-together-mistakes}

| Ce qui s'est passé | Pourquoi, et que faire |
|---|---|
| L'un voit plus de dépenses que l'autre | Les téléphones sont connectés au cloud avec des comptes différents — ce sont deux clouds différents. Connectez-vous partout avec un seul compte, dédié au budget. |
| Une opération apparaît deux fois | Les deux l'ont saisie : par exemple, un ticket commun noté par celui qui a payé et par celui qui portait les sacs. Convenez : c'est le titulaire de la carte qui note. |
| Un paiement planifié est enregistré deux fois | Les deux ont touché « Confirmer ». Supprimez l'opération en trop ; désormais, un seul confirme. |
| « Le cloud est protégé par un mot de passe » sur un téléphone | Le mot de passe est défini sur l'un, et sur l'autre il manque ou il est différent. Mettez le même. |
| Le symbole de la devise diffère entre vous | La devise du budget vit sur l'appareil. Corrigez dans « Paramètres » → « Devise du budget ». |

## "En couple : dépenses communes et argent personnel" {#scenario-couple}

Chacun a son salaire et ses dépenses, mais l'appartement, la nourriture et les vacances se partagent en deux. Comment le tenir dans l'application aujourd'hui, ce qu'elle ne sait pas encore faire et comment faire les comptes une fois par mois.

*le tag « commun » dans le formulaire d'opération et le bloc « Mes tags » sur « Aperçu »*

### Ce qui marche aujourd'hui {#scenario-couple-today}

On aimerait ceci : un budget commun « Notre foyer », tenu par les deux, et un budget personnel chacun, que l'autre ne voit pas. Avec un seul cloud partagé, **ça ne marchera pas** — pourquoi, plus bas. Mais ça marche si le budget commun passe par le Wi-Fi à la maison.

##### Pourquoi

Le téléphone se connecte au cloud avec un seul compte, et tous les budgets de ce téléphone se synchronisent dans ce cloud. Le mot de passe du cloud est lui aussi unique par téléphone, pas par budget. Un budget commun dans un cloud commun et un budget personnel caché au partenaire ne cohabitent donc pas sur un même téléphone : le personnel partirait au même endroit que le commun.

Trois approches fonctionnent.

##### Budgets personnels et tag « commun »

Chacun a son budget — personne ne voit l'argent de l'autre. Les dépenses communes portent un tag, et une fois par mois vous comparez et équilibrez. En détail — [plus bas](#scenario-couple-tag).

##### Deux budgets, le commun par Wi-Fi

Chaque téléphone a son budget et le commun « Notre foyer ». Chacun a son propre cloud, et vous vous passez le budget commun par Wi-Fi à la maison. En détail — [plus bas](#scenario-couple-wifi).

##### Un seul budget pour deux

Tout l'argent dans un budget, le personnel dans des catégories à part. Les deux voient tout. Convient si vous n'avez rien à vous cacher. En détail — [plus bas](#scenario-couple-all-shared).

### L'approche du tag « commun » {#scenario-couple-tag}

Chacun a son budget sur son téléphone : son propre cloud, ou pas de cloud du tout. Chacun note les dépenses communes chez lui, comme d'habitude, et leur met un tag.

##### Comment régler — chacun chez soi

1. Créez une catégorie pour votre part des dépenses communes — par exemple « Famille » dans le groupe « Dépenses fixes ». Mettez-y chaque mois ce que vous avez convenu de verser au commun.
2. Vous avez payé quelque chose de commun — courses pour la maison, charges ? Notez la dépense dans cette catégorie.
3. Dans le champ « Tags », créez le tag « commun » et mettez-le sur chacune de ces dépenses.
4. Sur « Aperçu », dans le bloc « Mes tags » → « ⋮ » → « Choisir les tags… », cochez « commun », et pour la période — « Total de ce mois ».

*Pourquoi une seule catégorie et pas « Courses » et « Charges »:*
Votre budget personnel répond à la question « combien je dépense ». Votre part du foyer commun est un seul poste, comme le loyer : « Famille ». Si vous voulez voir où part l'argent commun, ouvrez l'écran du tag « commun » : il y a « Par catégorie ». Dans ce cas, mettez les dépenses communes dans les catégories habituelles, et le tag les rassemblera.

### Fin du mois : qui doit à qui {#scenario-couple-month}

1. Chacun regarde dans « Mes tags » combien il a dépensé en « commun » sur le mois.
2. Additionnez les deux montants et divisez par deux — c'est la part de chacun.
3. Celui qui a dépensé moins que sa part vire la différence à l'autre.

**Exemple.** Sophie a dépensé 1 200 € en commun, Pierre 800 €. 2 000 € au total, la part de chacun est de 1 000 €. Pierre vire 200 € à Sophie.

##### Comment noter le virement

- **Pierre** — une dépense de 200 € dans la catégorie « Famille » avec le tag « commun » : c'est aussi sa contribution au commun.
- **Sophie** — une rentrée de 200 € de Pierre dans la même catégorie « Famille », avec le même tag : l'argent revient dans l'enveloppe. Comment noter un remboursement dans une catégorie — l'article [« Formulaire d'opération »](#entry).

Dans les « Mes tags » de Pierre, ce sera 1 000 €. Chez Sophie, il restera 1 200 € : le bloc ne compte que les dépenses. Ses 1 000 € sont sur l'écran du tag « commun » : « Reçu » 200 € et « Net » 1 000 €.

Comparez avec « Mes tags » **avant** le virement — après, les chiffres sont déjà équilibrés.

*Et « Règlement » sur le tag ?:*
« Règlement » calcule « dépensé moins reçu » dans **votre** budget — il est utile quand vous partagez une dépense avec quelqu'un qui n'écrit pas dans votre budget : un voyage entre amis, un cadeau commun. Pour un couple à deux budgets, il ne montre que votre moitié du tableau : la contribution de l'autre n'est pas dans votre budget. Ici, comparez donc avec « Mes tags ». À propos de « Règlement » — l'article [« Bénéficiaires et tags »](#payees-tags).

### Deux budgets, le commun par Wi-Fi {#scenario-couple-wifi}

Chaque téléphone a deux budgets : le sien et le commun « Notre foyer ». Chacun a son propre cloud — son compte, son mot de passe. Les deux budgets partent dans le cloud du propriétaire du téléphone, et l'autre ne les y voit pas. Vous ne vous passez que « Notre foyer » — par Wi-Fi, quand vous êtes tous les deux à la maison.

##### Comment régler

1. Chacun connecte un cloud sur son téléphone avec son propre compte, comme d'habitude.
2. Sophie crée le budget « Notre foyer » : touchez le nom du budget en haut d'« Aperçu » — vous y trouverez la liste des budgets et un nouveau budget. Pierre crée chez lui un budget vide du même nom.
3. La première fois, Pierre reçoit « Notre foyer » de Sophie par Wi-Fi (comment — plus bas) et choisit « Remplacer complètement » : son budget vide devient une copie de celui de Sophie.

##### L'échange à la maison

1. **Ouvrez tous les deux « Notre foyer ».** L'échange se fait entre les budgets ouverts.
2. « Paramètres » → « Transfert local ». Sophie : « Démarrer le serveur ». Pierre : « Scanner le QR » → « Recevoir les données » → « Fusionner ».
3. Sophie : « Arrêter le serveur ».

L'échange va dans les deux sens : Pierre reçoit les modifications de Sophie, et les siennes partent chez Sophie — opérations comme photos des tickets. Peu importe qui envoie et qui reçoit.

**« On dirait un autre budget » — touchez « Annuler ».** Si l'un de vous a son budget personnel ouvert au lieu de « Notre foyer », les deux budgets n'ont aucun compte ni aucune opération en commun, et l'application demande avant de fusionner. « Continuer quand même » verserait les dépenses personnelles dans le budget commun, et il serait impossible de les séparer ensuite.

*Et si les budgets ont quand même fusionné ?:*
On ne peut pas les séparer à la main, mais on peut ramener les deux à une sauvegarde automatique — l'application en fait elle-même, tous les 5 jours par défaut. L'échange va dans les deux sens, donc deux budgets sont abîmés : chez Pierre, son budget personnel (« Notre foyer » y est arrivé), chez Sophie, « Notre foyer » (les dépenses personnelles de Pierre y sont arrivées). Chacun répare le sien chez lui.

1. Ouvrez le budget abîmé. « Paramètres » → « Sauvegardes ».
2. Trouvez une sauvegarde de **ce** budget (son nom est sur la ligne de la sauvegarde) datée d'**avant** l'échange. Touchez l'icône d'horloge avec une flèche → « Restaurer ». Ensuite, **ne touchez pas « Synchroniser »** : le budget fusionné est encore dans le cloud.
3. Supprimez le fichier de synchronisation de ce budget dans votre cloud — comme dans l'article [« Cloud et sauvegardes »](#sync-rollback), étapes 2 à 4. Chacun a son cloud, et seul votre téléphone écrit ce budget dans le vôtre : la partie sur plusieurs appareils ne vous concerne pas.
4. Les modifications faites après la sauvegarde seront perdues. Les communes peuvent revenir : une fois que Sophie a restauré « Notre foyer », refaites un échange, tous deux sur « Notre foyer », et les modifications communes reviennent chez elle depuis le « Notre foyer » de Pierre — sa copie est propre. Les dépenses personnelles saisies après la sauvegarde seront à noter de nouveau.

Avant le premier échange, mieux vaut faire des sauvegardes à la main — chacun sur son téléphone, et des **deux** budgets : une sauvegarde se fait pour le budget ouvert. Ouvrez votre budget → « Sauvegardes » → « Créer une sauvegarde maintenant », puis ouvrez « Notre foyer » et recommencez. Vous reviendriez alors non pas à une sauvegarde automatique vieille de cinq jours, mais à l'état juste avant l'échange.

*Le mot de passe du cloud doit-il être identique ?:*
Non. Le transfert par Wi-Fi est chiffré par le code de confirmation affiché sur le téléphone qui envoie ; le mot de passe des sauvegardes n'y joue aucun rôle. Le mot de passe du bloc « Chiffrement du cloud » ne protège que **votre** cloud. Il ne doit être identique que lorsque deux téléphones écrivent dans le même cloud — ici, les clouds sont différents.

*Et si l'on a modifié hors de la maison ?:*
Chacun tient « Notre foyer » chez soi : un achat noté au magasin est aussitôt dans votre copie et votre cloud. À la maison, vous échangez — et les deux ont tout. Si l'application est ancienne sur l'un des téléphones, les modifications du destinataire ne repartent pas — l'application le dit ; refaites alors l'échange en inversant les rôles. Si vous avez tous deux modifié la même opération, c'est la modification la plus récente qui reste, comme avec la synchronisation habituelle.

Le prix : le budget commun n'est à jour que lorsque vous êtes tous deux à la maison et avez échangé.

### Un seul budget pour deux {#scenario-couple-all-shared}

S'il n'y a pas de secrets personnels, le plus simple est de tout tenir ensemble — on voit alors le tableau d'ensemble et un « non réparti » commun.

- Le réglage — comme dans le scénario [« À deux ou plus sur un même budget »](#scenario-together) : un compte cloud à part pour le budget, utilisé sur les deux téléphones.
- L'argent personnel — dans des catégories à part : « Perso de Sophie », « Perso de Pierre ». Chaque mois, la somme convenue y est mise ; c'est son propriétaire qui en dispose.
- Les comptes — chacun les siens : « Carte de Sophie », « Carte de Pierre ». On voit ainsi qui a payé.

Le prix : tout est visible pour les deux — les dépenses « perso » comme les soldes des cartes.

### Ce qui manque encore {#scenario-couple-not-yet}

Un budget commun qui se synchronise tout seul par le cloud chez les deux, à côté de budgets personnels cachés au partenaire, et le transfert d'une dépense commune du budget personnel vers le commun en une touche — ce n'est pas encore là. Nous le ferons quand les gens en auront besoin. Si c'est votre cas, écrivez dans la « Discussion Telegram » (« Paramètres », section « Aide et contact ») : plus il y a de messages, plus ce sera rapide.

## Freelance et revenus irréguliers {#scenario-freelance}

L'argent arrive quand le client paie : un mois c'est l'abondance, le suivant c'est vide. Comment, avec de tels revenus, ne pas vivre d'un paiement à l'autre, mettre de côté pour les impôts et savoir ce que vous gagnez vraiment.

*« Budget », « Aperçu », « Rapports » — tout ce qui suit*

### L'idée principale {#scenario-freelance-idea}

Avec un salaire, le mois est prévisible : versé le 5, ça tient jusqu'au 5 suivant. Un freelance ne connaît pas à l'avance le revenu du mois — impossible donc de planifier à partir de lui. Planifiez à partir de l'argent qui est **déjà là**.

##### Dépensez ce qui a été gagné avant

Le mois vit de ce qui est arrivé auparavant. Ce qui arrive maintenant travaille pour le mois suivant. [Comment](#scenario-freelance-last-month).

##### Lissez avec un coussin

Un bon mois remplit la réserve, un mois creux y puise. [Comment](#scenario-freelance-buffer).

##### Mettez l'impôt de côté tout de suite

Un pourcentage de chaque paiement — dans son enveloppe, avant que l'argent ne soit dépensé. [Comment](#scenario-freelance-taxes).

### Dépensez l'argent du mois précédent {#scenario-freelance-last-month}

Enregistrez chaque paiement non pas pour ce mois, mais pour le **suivant**. Ainsi, le 1er, tout le mois est déjà payé par de l'argent gagné, et vous répartissez entre les enveloppes une seule fois — pas par morceaux après chaque paiement.

##### Comment enregistrer un paiement

1. « + Opération » → « + Entrant », bénéficiaire — le client, le montant.
2. Touchez le champ « Catégorie » — « Où placer le revenu » s'ouvre.
3. Choisissez « Revenu pour décembre » au lieu de « Revenu pour novembre ». Enregistrez.

La date de l'opération reste la vraie. Seul change le mois du budget où l'argent apparaîtra.

##### Par où commencer

Le premier mois, il faudra à la fois dépenser ce qu'il y a et épargner pour le suivant. Commencez par un paiement pas encore réparti. Tant que vous n'avez pas un mois d'avance, mettez au moins une partie dans le mois suivant : l'application montre combien il y a déjà dans « Budget du mois » sur « Aperçu » — la ligne « Budget pour décembre ».

Le but — un « Âge de l'argent » de 30 jours ou plus : vous dépensez alors l'argent du mois précédent. En détail — l'article [« Aperçu »](#overview-age-month).

### Un coussin pour les mois creux {#scenario-freelance-buffer}

Même avec un mois d'avance, deux mois creux d'affilée arrivent. Le coussin est l'enveloppe qui permet de les traverser.

##### Comment le créer

1. La catégorie « Fonds d’urgence » — ou la vôtre, « Coussin ».
2. Objectif « Solde » : le montant — vos dépenses habituelles sur 3 à 6 mois. Combien cela fait — « Revenu moyen par mois » et « Tendance des dépenses », plus bas.
3. Un bon mois, mettez dans le coussin tout ce qui dépasse l'habituel.

L'objectif « Solde » veille à ce que la réserve ne fonde pas : vous en dépensez une partie — l'application demande de la remettre. En détail — l'article [« Objectifs »](#goals-balance).

##### Un mois creux

Pas assez d'argent pour les enveloppes, les dépenses sont passées dans le rouge. Touchez le montant rouge sur « Budget » → « Couvrir depuis une autre catégorie » → sur la ligne « Fonds d’urgence » — « Prendre … ». L'argent passe du coussin là où il manque. En détail — l'article [« Budget »](#budget-screen).

### Les impôts — directement dans leur enveloppe {#scenario-freelance-taxes}

L'impôt sur un paiement est facile à dépenser : l'argent est sur la carte, et on le paie au trimestre suivant.

##### L'objectif « % revenu »

1. La catégorie « Impôts ».
2. Objectif « % revenu » — le pourcentage que vous payez. Sous le pourcentage, laissez « Sur le revenu de ce mois » : l'impôt se calcule sur l'argent arrivé, pas sur la moyenne.
3. Chaque paiement modifie l'objectif tout seul : il est arrivé plus — l'objectif a grandi, « reste … » indique combien ajouter.

Ce qui est mis de côté s'accumule dans l'enveloppe jusqu'au jour du paiement : le plus passe d'un mois à l'autre. En détail — l'article [« Objectifs »](#goals-percent).

*Si vous enregistrez le revenu pour le mois suivant:*
Alors l'objectif « % revenu » de ce mois est connu dès le 1er : le revenu du mois est arrivé le mois précédent. Pratique — l'impôt est mis de côté en premier, avec les autres enveloppes.

### L'argent est arrivé — répartir en une touche {#scenario-freelance-income}

Répartir chaque paiement à la main, c'est fastidieux. La répartition automatique « Par pourcentage » le fait pour vous.

##### Régler une fois pour toutes

1. Sur « Budget », touchez « non réparti » en haut — « Répartition automatique du budget » s'ouvre.
2. « Par pourcentage » → « Définir les pourcentages » : par exemple, « Impôts » — 5 %, « Fonds d’urgence » — 20 %, « Investissements » — 10 %.
3. Les pourcentages sont mémorisés. Ce qui n'entre dans aucun pourcentage reste dans « non réparti » — répartissez-le vous-même entre les enveloppes du mois.

Ensuite : l'argent arrive — touchez « non réparti » → « Par pourcentage ». L'application répartit exactement ce qui n'est pas réparti à cet instant.

*Pourquoi des pourcentages et pas des montants:*
Avec des revenus irréguliers, un montant fixe est impossible un mois et dérisoire le suivant. Un pourcentage monte et descend avec le revenu. L'arrondi — par les puces « À l'unité », « À 10 », « À 100 » sur la même fiche.

### Clients et projets {#scenario-freelance-clients}

##### Le client est le bénéficiaire

Enregistrez chaque paiement avec le client dans le champ « Bénéficiaire ». Touchez-le dans « Paramètres » → « Bénéficiaires » — son écran s'ouvre : « Tendances des rentrées » montre combien il paie en moyenne, et la période « Année » affiche tous ses paiements de l'année. On voit qui vous fait vivre et qui paie deux fois par an. En détail — l'article [« Bénéficiaires et tags »](#payees-tags-payee).

##### Le projet est un tag

Créez un tag pour le projet : « site du café ». Mettez-le à la fois sur le paiement du client et sur les dépenses du projet : un abonnement à un service, un taxi pour un rendez-vous, une police de caractères. L'écran du tag montre « Dépensé », « Reçu » et « Net » — ce que le projet a vraiment rapporté. En détail — l'article [« Bénéficiaires et tags »](#payees-tags).

### Paiements attendus {#scenario-freelance-expected}

La facture est envoyée, l'argent est promis pour le 15. Pour ne pas oublier et voir ce qui arrive, créez un paiement planifié.

1. « Paramètres » → « Paiements planifiés » → « + Paiement ».
2. « + Entrant », le client, le montant, la date de paiement promise, « Répéter » — « Une fois ».
3. Le paiement apparaît dans « À venir » et dans le « Calendrier » sur « Aperçu ».
4. L'argent est arrivé à temps — « Confirmer » sur l'écran de confirmation. En avance — faites glisser la ligne du paiement vers la gauche — « Saisir ». Le client est en retard — ouvrez le paiement et changez le champ « Date ».

Tant que le paiement n'est pas confirmé, il n'est pas dans le budget : les enveloppes ne se remplissent pas avec de l'argent promis. En détail — l'article [« Paiements planifiés »](#scheduled).

### Que regarder {#scenario-freelance-reports}

| Où | Ce qu'on y voit |
|---|---|
| « Aperçu » → « Budget du mois » | « Revenu moyen par mois » sur 12 mois et « Budget pour décembre » — ce qu'il y a déjà pour le mois prochain. |
| « Aperçu » → « Âge de l'argent » | 30 jours et plus — vous vivez avec l'argent du mois précédent. |
| « Aperçu » → « Dépenses du mois » | Dépensez-vous en ce moment plus que d'habitude. |
| « Rapports » → « Revenus et dépenses » | Un tableau mois par mois : revenus par source — chaque client a sa ligne —, dépenses par groupe et « Taux d’épargne ». On voit la saisonnalité et qui paie combien. |
| « Rapports » → « Tendance des dépenses » | Vos dépenses habituelles par mois — la base pour dimensionner le coussin. |
| « Rapports » → « Flux d’argent » | Où part l'argent gagné sur une période — et combien il en reste. |
| « Rapports » → « Âge de l'argent » | Comment votre avance grandit mois après mois. |

En détail sur les rapports — l'article [« Rapports »](#reports).

### L'argent du travail à part {#scenario-freelance-business}

Si votre activité a son propre compte et ses propres dépenses — services, matériel, comptable —, vous pouvez la tenir dans un **second budget**, par exemple « Travail ». Touchez le nom du budget en haut d'« Aperçu » — vous y trouverez le sélecteur de budgets et un nouveau budget.

Le budget de travail contient les paiements et les dépenses professionnelles. Ce que vous prenez pour vivre — par virement vers votre carte personnelle : dans le budget de travail c'est une dépense, dans le budget personnel un revenu. Ainsi le budget personnel vit d'un montant régulier chaque mois, et toutes les fluctuations restent dans celui de travail.

## D'une paie à l'autre {#scenario-paycheck}

L'argent s'épuise avant la fin du mois, et la paie n'arrive que dans une semaine. Comment répartir ce que vous avez, tenir jusqu'à la paie suivante sans rouge et, pas à pas, sortir de cette course.

*« Budget », « Aperçu » et l'écran d'une catégorie — tout ce qui suit*

### L'idée principale {#scenario-paycheck-idea}

Les enveloppes ne donnent pas plus d'argent qu'il n'y en a. Mais elles montrent **à l'avance** si ça tiendra jusqu'à la paie — pas le dernier jour, mais le premier.

##### Ne répartissez que ce que vous avez

Une enveloppe se remplit avec l'argent déjà présent sur les comptes. Un salaire promis n'est pas encore de l'argent. [Comment](#scenario-paycheck-now).

##### D'abord l'indispensable

Logement, nourriture, transport, médicaments, mensualité de crédit. Tout le reste — après. [Comment](#scenario-paycheck-now).

##### Un moins n'est pas un échec

Déplacez depuis une autre enveloppe et continuez. [Comment](#scenario-paycheck-minus).

### La paie est arrivée — répartissez tout de suite {#scenario-paycheck-now}

Tant que l'argent n'est pas réparti, il paraît beaucoup. Réparti dans les enveloppes, il dit la vérité : pour manger jusqu'au 5 — 200 €, et c'est tout.

##### Dans l'ordre

1. Ouvrez « Budget ». En haut — « non réparti » : l'argent qui n'a pas encore de rôle.
2. Remplissez d'abord les enveloppes sans lesquelles on ne tient pas jusqu'à la paie suivante : loyer, charges, « Courses », transport, médicaments, mensualité minimale du crédit.
3. Puis tout le reste, jusqu'à ce que « non réparti » tombe à zéro.
4. Pas assez pour tout ? Certaines enveloppes resteront vides. Ce n'est pas une erreur, c'est une réponse honnête : pas d'argent pour ça ce mois-ci.

Comment mettre de l'argent dans une enveloppe — pas à pas dans l'article [« Budget »](#budget-screen).

*La pastille est devenue rouge — « Trop réparti »:*
Vous avez distribué plus qu'il n'y a sur les comptes. Réduisez ce qui est mis de côté dans une des enveloppes — touchez le montant et tapez moins. L'argent revient dans « non réparti ».

### Acompte et salaire {#scenario-paycheck-two}

De l'argent deux fois par mois — vous répartissez deux fois. L'acompte va à ce qu'il faut avant le salaire. Le salaire — au reste et à ce qui viendra après.

##### Les factures d'avant la paie — en paiements planifiés

Créez des paiements planifiés pour le loyer, les charges, le téléphone : « Paramètres » → « Paiements planifiés » → « + Paiement ». Ils apparaissent dans le bloc « À venir » et dans le « Calendrier » sur « Aperçu », et la veille de l'échéance arrive un rappel. On voit quelles factures tombent avant la paie et lesquelles après — et quoi couvrir avec l'acompte. En détail — l'article [« Paiements planifiés »](#scheduled).

### Combien on peut dépenser par jour {#scenario-paycheck-until}

##### « ≈ … par jour »

Touchez une catégorie sur « Budget » — son écran s'ouvre. Sous « Disponible » — combien vous pouvez dépenser chaque jour jusqu'à la fin du mois sans passer dans le rouge. 140 € dans « Courses » et dix jours avant la fin du mois — « ≈ 14 € par jour ». En détail — l'article [« Écran d'une catégorie »](#category-screen).

##### « Bientôt épuisé » sur « Aperçu »

L'enveloppe a encore assez d'argent, mais vous dépensez plus vite que le mois n'avance — la catégorie apparaît en jaune dans le bloc « Bientôt épuisé ». C'est le signal de lever le pied maintenant, pas dans une semaine. En détail — l'article [« Aperçu »](#overview-blocks).

##### « Dépenses du mois »

Un bloc sur « Aperçu » : dépensez-vous ce mois-ci plus que d'habitude à cette date.

### Le moins rouge {#scenario-paycheck-minus}

Vous avez dépensé plus que l'enveloppe ne contenait — le montant est rouge. Comblez-le tout de suite, avant la fin du mois.

1. Touchez le montant rouge sur « Budget ».
2. Dans la fiche « Dépassement », touchez « Couvrir depuis une autre catégorie ». « Où prendre l'argent » s'ouvre : « Non réparti » et toutes les enveloppes qui ont de l'argent.
3. Touchez « Prendre … » à côté d'une enveloppe dont vous pouvez vous passer. Le moins est comblé — « Dépassement couvert ! ».

En détail — l'article [« Budget »](#budget-screen).

*Le moins a tenu jusqu'à la fin du mois:*
Il sera remis à zéro, mais pas sans trace : le « non réparti » du mois suivant diminuera d'autant. La prochaine paie sera plus petite exactement de ce moins. En détail — l'article [« Comment fonctionne le budget »](#start-months).

*Plusieurs moins, et il reste quelque chose dans « non réparti »:*
Touchez « non réparti » en haut de « Budget » → « Couvrir tous les dépassements ». L'application comble d'un coup tous les moins du mois avec l'argent non réparti.

### La carte de crédit n'est pas une issue {#scenario-paycheck-card}

L'enveloppe est vide, mais la carte de crédit a de la marge. La tentation se comprend, mais un achat à la carte de crédit depuis une enveloppe vide est un moins **jaune** : il n'y a pas d'argent, la dette grossit. Le mois suivant, il faudra la rembourser avec la nouvelle paie — qui sera donc encore plus petite. En détail — le scénario [« Cartes de crédit et dettes »](#scenario-credit-yellow).

### Noter chaque jour {#scenario-paycheck-daily}

Une enveloppe ne dit la vérité que si toutes les dépenses y sont notées. Un achat d'hier oublié — et « ≈ … par jour » vous trompe.

- Le rappel du soir : « Paramètres » → « Planification » → « Rappels » → « Dépenses du jour » → « Rappeler de saisir les dépenses ». Il n'arrive que si vous n'avez rien saisi de la journée. **Juste après l'installation :** désactivé.
- Le plus rapide, c'est de noter à la caisse : [à la voix](#voice) ou [avec le scanner de tickets](#receipt). Pas le temps de choisir une catégorie ? — [« À trier »](#entry-inbox), vous trierez le soir.

### Comment sortir de la course {#scenario-paycheck-out}

Le but n'est pas seulement de tenir, mais un jour de vivre avec l'argent gagné le mois précédent. Avancez par marches, une à la fois.

(1)
##### Un petit coussin

La catégorie « Fonds d’urgence », objectif « Solde » — pour commencer, au moins une semaine de dépenses. Le téléphone casse — l'argent vient d'ici, pas de l'enveloppe des repas. En détail — l'article [« Objectifs »](#goals-balance).

(2)
##### Les dépenses rares — petit à petit

L'assurance, les cadeaux, le cordonnier ne cassent plus le mois si l'on met de côté pour eux chaque mois. L'objectif « Pour une date » calcule combien. En détail — le scénario [« Épargner pour un gros achat »](#scenario-saving).

(3)
##### L'argent d'un mois d'avance

Chaque mois, gardez un peu en plus. Quand un mois entier est réuni, enregistrez le salaire pour le mois suivant : « Catégorie » → « Revenu pour décembre ». Ensuite, chaque mois est payé d'avance, et la date de la paie ne compte plus.

Ce qui est déjà là pour le mois prochain — « Budget du mois » sur « Aperçu », la ligne « Budget pour décembre ». Où vous en êtes — « Âge de l'argent » : 30 jours et plus, vous êtes sorti de la course. En détail — l'article [« Aperçu »](#overview-age-month) et l'article [« Comment fonctionne le budget »](#start-ladder).

## Cartes de crédit et dettes {#scenario-credit}

Une carte de crédit, un crédit auto, une dette qui existait avant l'application. Comment les créer, comment payer pour que le budget ne mente pas, et comment voir la dette fondre.

*« Comptes », « Budget » → « Paiements de cartes », « Rapports » → « Dette des cartes » et « Patrimoine »*

### Carte de crédit {#scenario-credit-card}

Une seule règle : un achat à la carte de crédit dépense l'argent de l'enveloppe comme un achat à la carte de débit. La différence, c'est où attend cet argent : pas sur un compte, mais dans la catégorie de la carte, jusqu'à ce que vous payiez la banque.

##### Comment la créer

1. « Comptes » → « ⋮ » → « Ajouter un compte ».
2. Type — « Carte de crédit ». Nom — comme vous appelez la carte.
3. Montant — ce que vous devez à la banque maintenant. Tapez-le et touchez « ± » pour le rendre négatif.
4. Enregistrez. La carte va dans la section « Cartes de crédit », et sur « Budget », dans le groupe « Paiements de cartes », apparaît une catégorie du même nom.

N'y touchez pas : c'est par elle que l'application compte la dette de cette carte précise. En détail — l'article [« Comptes »](#accounts-screen).

##### Un achat

Notez-le comme d'habitude : compte — la carte de crédit, catégorie — ce que vous avez acheté. Des courses pour 35 € — « Courses » a maigri de 35, et ces mêmes 35 sont passés dans la catégorie de la carte pour le remboursement. Rien à mettre de côté vous-même.

### Une dette d'avant le début du suivi {#scenario-credit-old-debt}

La dette de départ — 800 € sur la carte depuis l'an dernier — l'application ne la met pas de côté elle-même : il n'y a jamais eu d'argent pour elle dans les enveloppes.

Mettez de côté pour elle dans la catégorie de la carte, comme dans n'importe quelle enveloppe : sur « Budget », touchez son montant et tapez ce que vous pouvez ce mois-ci. Tout d'un coup ou petit à petit — à vous de voir. Tant que rien n'est mis de côté, il n'y a pas d'argent pour la rembourser.

### Le moins jaune {#scenario-credit-yellow}

Vous avez dépensé à la carte de crédit plus que ne contenait l'enveloppe — le montant devient **jaune**, avec une icône de carte. Rouge, avec une icône de portefeuille, c'est un moins sur votre propre argent.

##### Rouge — il mange votre argent

Un moins sur une carte de débit ou en espèces. En fin de mois, il réduira le « non réparti » du mois suivant.

##### Jaune — il augmente la dette

Vous n'avez pas dépensé de l'argent — vous l'avez emprunté. Seule la part couverte est passée dans la catégorie de la carte ; pour le reste, il n'y a pas d'argent de remboursement.

##### Que faire

Comblez un moins jaune comme un rouge : touchez le montant → « Couvrir depuis une autre catégorie » → « Prendre … » dans une autre enveloppe. L'argent du remboursement se complète alors tout seul. Pas possible ? Le mois suivant, ajoutez la différence directement dans la catégorie de la carte.

### Payer la carte {#scenario-credit-payment}

Ce qu'il faut payer à la banque se voit dans la catégorie de la carte sur « Budget » : c'est ce qui est déjà mis de côté pour le remboursement.

1. « + Opération », compte — votre compte courant.
2. « Bénéficiaire » → la section « Virements » → votre carte de crédit. L'en-tête du formulaire devient gris, pas besoin de catégorie.
3. Montant — ce que vous payez. Enregistrez.

L'argent du compte courant baisse, la dette de la carte aussi, et avec elle ce qui est mis de côté dans la catégorie de la carte. Les enveloppes ne bougent pas : vous avez dépensé avant, lors des achats. En détail — l'article [« Formulaire d'opération »](#entry-transfer).

*Tout payer ou le minimum:*
La catégorie de la carte contient exactement ce que vous avez dépensé avec elle depuis les enveloppes. Payez chaque mois tout ce qui est mis de côté — aucune nouvelle dette ne s'accumule. Payez seulement le minimum — le reste attend dans la catégorie ; la banque calcule les intérêts sur la dette restante.

### Intérêts et frais de la carte {#scenario-credit-card-interest}

La banque a prélevé des intérêts ou des frais de tenue — c'est une dépense.

Notez une dépense : compte — la carte de crédit, bénéficiaire — la banque, catégorie — une à part, par exemple « Intérêts et frais ». L'enveloppe diminue, et l'argent du remboursement se met de côté, comme pour tout achat. Ça se voit aussi dans les rapports : ce que vous coûte ce crédit.

### Crédit {#scenario-credit-loan}

Crédit auto, prêt immobilier, paiement en plusieurs fois — de l'argent déjà dépensé que vous remboursez par morceaux.

##### Comment le créer

1. « Comptes » → « ⋮ » → « Ajouter un compte ».
2. Type — « Prêt ». Montant — ce qui reste à rembourser selon le relevé de la banque, avec un signe moins (« ± »).
3. Le compte va dans la section « Dettes ». Il est hors budget : cet argent n'a pas d'enveloppes, et le budget ne touche pas à la dette de départ.

##### Une enveloppe pour la mensualité

Créez une catégorie pour la mensualité — par exemple « Crédits » dans le groupe « Dépenses fixes » — et un objectif « Par mois » du montant de la mensualité. Chaque mois, l'objectif rappelle de mettre de côté. En détail — l'article [« Objectifs »](#goals-monthly).

### Payer un crédit {#scenario-credit-loan-payment}

1. « + Opération », compte — la carte avec laquelle vous payez.
2. « Bénéficiaire » → « Virements » → le compte du crédit.
3. Le crédit est hors budget, l'application demande donc une catégorie : choisissez « Crédits ». L'argent quitte l'enveloppe, la dette sur le compte du crédit diminue.

*La banque dit : 80 € de la mensualité sont des intérêts:*
Notez toute la mensualité en un seul virement, comme ci-dessus. Puis une fois par mois, les intérêts sur le compte du crédit lui-même : « Sortant », compte — le crédit, bénéficiaire — la banque, montant — les intérêts. Pas besoin de catégorie : le compte est hors budget. La dette dans l'application correspond alors à la banque, et l'enveloppe « Crédits » cède exactement votre mensualité.

*Un rappel de paiement:*
Créez un paiement planifié sous forme de virement : « Paramètres » → « Paiements planifiés » → « + Paiement », « Bénéficiaire » → « Virements » → le compte du crédit, catégorie « Crédits », « Répéter » — « Mensuel ». Le paiement apparaît sur les écrans des deux comptes, un rappel arrive à l'avance, et « Confirmer » enregistre le virement. De même pour le paiement de la carte de crédit : du compte courant vers la carte. En détail — l'article [« Paiements planifiés »](#scheduled-new).

### Suivre la dette {#scenario-credit-watch}

| Où | Ce qu'on y voit |
|---|---|
| « Comptes » | Les sections « Cartes de crédit » et « Dettes » — ce que vous devez maintenant. |
| « Budget » → « Paiements de cartes » | Ce qui est mis de côté pour rembourser chaque carte. |
| « Rapports » → « Dette des cartes » | La dette de toutes les cartes de crédit mois après mois : fond-elle ou grossit-elle. Présent si une carte de crédit existe. |
| « Rapports » → « Patrimoine » | Tout ce que vous avez moins toutes les dettes. Chaque mensualité de crédit fait monter la courbe. |

En détail sur les rapports — l'article [« Rapports »](#reports-capital).

## Épargner pour un gros achat {#scenario-saving}

Un ordinateur, des travaux, une voiture, un apport pour un appartement. Comment mettre de côté peu à peu, voir si vous serez prêt à temps et ne pas dépenser l'épargne par mégarde.

*« Budget », « Objectifs », l'écran d'une catégorie*

### Une enveloppe pour l'achat {#scenario-saving-envelope}

L'argent de l'ordinateur, mélangé à l'argent du quotidien, part en premier. Une enveloppe à part le protège : tant qu'il est dans « Ordinateur », on ne le voit pas dans « Courses ».

1. Sur « Budget », trouvez le groupe où se trouvent « Gros achats » et « Voyages et vacances ».
2. Touchez « ⊕ » à côté de son nom — une nouvelle catégorie. Donnez-lui le nom de l'achat : « Ordinateur ».
3. Ou épargnez dans « Gros achats », déjà prête, s'il n'y a qu'un achat.

En détail — l'article [« Budget »](#budget-screen).

### Objectif « Pour une date » {#scenario-saving-goal}

Dites à l'application combien et pour quel mois — elle calcule combien mettre chaque mois.

1. Touchez la catégorie sur « Budget » → la carte « Objectif » → « Ajouter un objectif ».
2. « Type d’objectif » — « Pour une date ».
3. « Montant » — le prix de l'achat, « Épargner pour le mois » — quand il vous le faut.
4. « Enregistrer ».

Un ordinateur à 2 400 € dans six mois — l'objectif demandera 400 € par mois. Un mois sauté, et le manque se répartit sur les mois restants : la mensualité augmente. Vous mettez plus — les suivantes baissent. En détail — l'article [« Objectifs »](#goals-bydate).

*Épargner sans échéance:*
L'objectif « Solde » : l'enveloppe doit contenir ce montant, peu importe quand. Il convient à « une nouvelle voiture un jour » et au coussin de sécurité. En détail — l'article [« Objectifs »](#goals-balance).

### Serai-je prêt à temps {#scenario-saving-pace}

##### Une estimation sur l'écran de la catégorie

Touchez la catégorie — un objectif « Pour une date » a sous sa barre un sélecteur « Par montant » et « Par échéance ». Vous bougez « Mettre de côté par mois » — vous voyez pour quel mois la somme sera réunie. Vous bougez le mois — vous voyez combien mettre. La nouvelle date vous plaît — « En faire l'échéance : … ». En détail — l'article [« Objectifs »](#goals-card).

##### Il manque ce mois-ci

Sur « Budget », sous le montant — un drapeau et « reste … ». La puce « Insuffisant » au-dessus de la liste ne garde que ces catégories. Sur « Aperçu », le manque se voit dans les blocs « Objectifs » et « À venir ».

### Où est l'argent {#scenario-saving-where}

L'épargne est souvent gardée sur un compte à part : livret, placement, tirelire. La façon dont vous créez ce compte décide si l'argent reste dans l'enveloppe.

##### Dans le budget — pour un achat

Un compte de type « Compte bancaire ». Vous avez viré 400 € du compte courant vers le livret — l'enveloppe « Ordinateur » n'a pas bougé : l'argent a déménagé, mais il est toujours à vous et dans le budget. L'objectif le voit et ne redemande rien. **Vous épargnez pour un achat ? Choisissez cette option.**

##### Hors budget — pour le patrimoine

Un compte de type « Suivi seul » : placements, épargne « pour la retraite ». L'application enregistre un virement vers ce compte comme une sortie d'argent de l'enveloppe — elle demande une catégorie, l'enveloppe se vide. Pour un achat, ça ne convient pas : l'objectif redemandera de l'argent alors que vous l'avez.

En détail — l'article [« Comptes »](#accounts-kinds).

### Plusieurs objectifs à la fois {#scenario-saving-many}

Vacances, ordinateur et cadeaux de fin d'année — l'argent peut ne pas suffire à tout ce mois-ci.

« Budget » → « ⋮ » → « Répartir sur les objectifs ». L'application répartit « non réparti » sur tous les objectifs à la fois. S'il n'y en a pas assez pour tout, les objectifs reçoivent l'argent dans l'ordre, de haut en bas, comme les catégories sur « Budget ». Gardez l'important en haut : « ⋮ » → « Changer l'ordre ». En détail — l'article [« Objectifs »](#goals-allocate).

### L'achat {#scenario-saving-buy}

1. Notez l'achat comme d'habitude — dans la catégorie « Ordinateur ». L'enveloppe se vide — c'est pour ça que vous épargniez.
2. C'était moins cher ? Le reste reste dans l'enveloppe. Il vous faut ailleurs ? Sur « Budget », touchez le montant d'« Ordinateur » et saisissez moins : la différence revient dans « non réparti ».
3. C'était plus cher ? Le montant devient rouge. Touchez-le → « Prendre … » dans une autre enveloppe.
4. L'objectif ne sert plus ? « Budget » → « ⋮ » → « Objectifs » → touchez la catégorie → « Supprimer ». L'argent reste dans l'enveloppe. La catégorie de l'achat elle-même ne peut pas être supprimée — seulement masquée.

*Payé avec la carte de crédit:*
C'est possible aussi : l'argent d'« Ordinateur » se met de côté pour rembourser la carte. Acheté à crédit ou en plusieurs fois ? C'est une dette ; comment la suivre — dans le scénario [« Cartes de crédit et dettes »](#scenario-credit-loan).

### Combien je mets de côté {#scenario-saving-pay-yourself}

Le bloc « Payez-vous d'abord » sur « Aperçu » montre quel pourcentage de votre revenu vous mettez de côté — sur un mois, trois mois et un an. La norme est de 10 %. Choisissez quelles catégories comptent comme « mis de côté » dans « Paramètres → Budget → Payez-vous d'abord » : « Gros achats », « Ordinateur », « Fonds d’urgence ». En détail — l'article [« Aperçu »](#overview-blocks).

## Un voyage entre amis {#scenario-trip}

Vous avez payé le logement pour quatre, un ami le dîner, l'essence est partagée en deux, et à l'étranger il y a en plus des espèces dans une autre devise. Comment épargner pour le voyage, voir ce qu'il a coûté et ne pas s'embrouiller sur qui doit quoi à qui.

*le tag du voyage, « Règlement » sur l'écran du tag, le formulaire d'opération*

### Avant le voyage {#scenario-trip-before}

Épargnez dans « Voyages et vacances » avec un objectif « Pour une date » : le montant — ce que vous pensez dépenser, le mois — celui du départ. L'application calcule le versement mensuel. En détail — le scénario [« Épargner pour un gros achat »](#scenario-saving-goal).

### Le tag du voyage {#scenario-trip-tag}

Les dépenses du voyage se répartissent dans différentes catégories — « Courses », « Transports », « Voyages et vacances ». Un tag les rassemble.

1. Dès la première dépense du voyage, ouvrez « Supplémentaire » → « Tags » → tapez un nom, par exemple « Londres », → « Créer le tag « … » ».
2. Mettez ce tag sur chaque dépense du voyage.
3. « ⋮ » du tag → « Afficher dans Mes tags » — le total du voyage sera sur « Aperçu ».

L'écran du tag montre « Dépensé » et « Par catégorie » — ce qu'a coûté le voyage et où est parti l'argent. En détail — l'article [« Bénéficiaires et tags »](#payees-tags-tag).

### Vous payez pour tous {#scenario-trip-pay-for-all}

Vous avez payé le logement pour quatre : 800 €. Votre part est de 200 €, les 600 € restants doivent vous revenir.

##### Ventilez le montant entre votre part et celle des amis

1. Notez la dépense de 800 €, compte — votre carte, tag — « Londres ».
2. « Catégorie » → « Ventiler le montant ».
3. La première partie — « Voyages et vacances », 200 € : c'est votre part.
4. La seconde — aussi « Voyages et vacances », 600 €, et dessus « + tag » → un nouveau tag « Londres : dettes des amis ».
5. Ouvrez l'écran du tag « Londres : dettes des amis » → « ⋮ » → « Règlement ».

Désormais l'écran de ce tag affiche « à récupérer 600 € » : c'est ce qu'on vous doit. Plus sur le montant ventilé — l'article [« Formulaire d'opération »](#entry-split).

*Pourquoi un second tag et pas un seul:*
« Règlement » calcule : dépensé moins reçu. Si vous l'activiez sur « Londres », votre propre part resterait elle aussi « À récupérer », et le compte ne tomberait jamais juste. Un tag sur la seule part des amis revient à zéro quand tout est remboursé.

### Un ami vous a remboursé {#scenario-trip-paid-back}

1. « + Opération » → « Entrant ». Bénéficiaire — l'ami, montant — ce qu'il a rendu, compte — où l'argent est arrivé.
2. « Catégorie » → « Vers une catégorie de dépenses… » → « Voyages et vacances ». Ce n'est pas un revenu : c'est votre argent qui revient dans l'enveloppe.
3. Tags — « Londres » et « Londres : dettes des amis ».

Quand les trois ont remboursé, l'écran du tag « Londres : dettes des amis » affiche « Réglé » en vert. Et pour « Londres », « Net » sera inférieur de 600 € à « Dépensé » — pour le logement, il reste exactement votre part. En détail — l'article [« Formulaire d'opération »](#entry-refund).

### Un ami a payé {#scenario-trip-friend-paid}

Un ami a payé le dîner, votre part est de 50 €. Aucun argent n'est encore sorti de votre carte — rien à noter.

Quand vous lui rendrez, notez-le à ce moment-là : une dépense, bénéficiaire — l'ami, catégorie — « Voyages et vacances », tag — « Londres ». Tant que vous n'avez pas rendu, gardez la dette en tête ou dans une note — l'application ne tient pas les portefeuilles des autres.

### À l'étranger {#scenario-trip-abroad}

##### Vous payez avec votre carte

La banque débite elle-même dans la devise de la carte. Notez le montant débité par la banque — il apparaît dans l'appli de la banque. Le montant en devise locale, si besoin, va dans la note : « 42 £ dîner ».

##### Vous avez retiré des espèces en devise

Créez un compte « Espèces £ » : « Comptes » → « ⋮ » → « Ajouter un compte », type « Suivi seul », « Devise du compte » — £. Seul un compte hors budget peut avoir sa propre devise. Comment s'en servir — plus bas.

##### Change et dépenses en espèces

1. Vous avez changé de l'argent — notez un virement de la carte vers « Espèces £ ». Sous le bénéficiaire apparaissent « Crédité » et « Taux » : combien de livres vous avez reçues.
2. Le compte est hors budget, l'application demande donc une catégorie : « Voyages et vacances ». L'argent a quitté l'enveloppe dès le change.
3. Notez les dépenses en livres sur le compte « Espèces £ » — pas besoin de catégorie, l'enveloppe a déjà payé. Mettez le tag « Londres » comme d'habitude.
4. Il reste des livres, rechangées ? Un virement d'« Espèces £ » vers la carte, « Catégorie » → « Vers une catégorie de dépenses… » → « Voyages et vacances ». L'argent revient dans l'enveloppe.

Plus sur les devises — le scénario [« Plusieurs devises et cas particuliers »](#scenario-currencies).

### Après le voyage {#scenario-trip-after}

- L'écran du tag « Londres » : « Net » — ce que le voyage vous a coûté après tous les remboursements, « Par catégorie » — où est parti l'argent. Utile pour épargner pour le prochain. Les dépenses en livres y sont sur une ligne à part : pas de conversion au taux, et le change lui-même est un virement, il n'entre pas dans « Dépensé ».
- Le tag ne doit plus apparaître dans le choix ? « ⋮ » du tag → « Masquer du choix ». Il reste sur les opérations.
- Il reste de l'argent dans « Voyages et vacances » ? Laissez-le jusqu'aux prochaines vacances : le plus passe d'un mois à l'autre.

## Plusieurs devises et cas particuliers {#scenario-currencies}

Le salaire dans une devise, l'épargne dans une autre, un peu de bitcoin et des voyages à l'étranger. Ce que l'application sait faire avec les devises, où sont les limites et comment tenir vos comptes pour que les enveloppes ne mentent pas.

*« Paramètres » → « Devise du budget », comptes hors budget, virement avec taux*

### La règle principale {#scenario-currencies-rule}

**Un budget a une seule devise.** Toutes les enveloppes, tous les comptes du budget et « non réparti » sont dans cette devise. Les autres devises vivent sur des comptes **hors budget** : vous voyez combien il y a, mais cet argent n'est pas réparti entre les enveloppes.

*Pourquoi:*
Une enveloppe répond à « combien je peux dépenser pour manger ». Si elle contient à la fois des euros et des dollars, la réponse change chaque jour avec le cours. Une seule devise dans les enveloppes — et la réponse est toujours la même.

### Devise du budget {#scenario-currencies-budget-currency}

« Paramètres » → « Budget » → « Devise du budget ». La liste compte soixante devises, la devise actuelle en premier, avec en haut une recherche par nom et par symbole : « zloty » trouve « Złoty ».

Seul le symbole change — l'application ne convertit pas les montants. Vous teniez le budget en euros et choisissez le dollar ? 1 000 € deviennent 1 000 $. C'est pourquoi on choisit la devise au début, pas en cours de route.

*Un budget par devise:*
Chaque budget a sa propre devise. Vous vivez entre deux pays ? Vous pouvez tenir deux budgets : « Maison » en euros et « Genève » en francs suisses. Touchez le nom du budget en haut d'« Aperçu » — vous y trouverez le sélecteur de budgets et un nouveau budget ; la devise est demandée à la création.

### Un compte dans une autre devise {#scenario-currencies-foreign-account}

1. « Comptes » → « ⋮ » → « Ajouter un compte ».
2. Type — « Suivi seul » (ou « Prêt » s'il s'agit d'une dette). Seul un compte hors budget peut avoir sa propre devise.
3. Dans la section « Devise du compte », touchez le champ « Devise » — une liste de soixante devises s'ouvre, la même que pour le budget : la devise actuelle en premier, une recherche par nom et par symbole en haut. Les noms sont dans la langue du pays : « zloty » trouve « Złoty ».
4. Cryptomonnaie — par les puces sous le champ : ₿, USDT, USDC.
5. Rien ne convient ? Saisissez-la vous-même dans « Ou saisissez la vôtre (code) » : ETH, le code d'une action ou d'un fonds. Les montants du compte seront affichés avec.
6. Montant — combien il y a sur le compte dans cette devise.

Le compte va dans la section « Hors budget », avec ses montants dans son symbole : « 1 200,00 $ ». En détail — l'article [« Comptes »](#accounts-kinds).

### Change {#scenario-currencies-exchange}

Vous avez acheté des dollars avec des euros ? C'est un virement entre vos propres comptes, simplement avec un taux.

1. « + Opération », compte — votre carte en euros, « Bénéficiaire » → « Virements » → le compte en dollars.
2. Montant — combien d'euros sont partis.
3. Sous le bénéficiaire — « Crédité » et « Taux ». Saisissez soit le taux, soit le nombre de dollars reçus — l'autre se calcule. Le bouton à côté du taux en inverse le sens : combien d'euros pour un dollar ou combien de dollars pour un euro.
4. Le compte en dollars est hors budget — l'application demande une catégorie : de quelle enveloppe l'argent est parti. Par exemple, « Fonds d’urgence » ou « Investissements ».

En détail — l'article [« Formulaire d'opération »](#entry-transfer).

*Revendre les dollars:*
Un virement du compte en dollars vers la carte. Dans le champ « Catégorie » s'ouvre « Où placer le revenu » : « Revenu pour … » — s'il s'agit d'argent nouveau à répartir, « Vers une catégorie de dépenses… » — s'il revient dans l'enveloppe d'où il était parti.

### Vivre dans un pays, épargner dans un autre {#scenario-currencies-two-countries}

Le budget est dans la devise de votre salaire et de vos dépenses quotidiennes : euros, francs suisses, livres. L'argent resté au pays, un placement dans une autre devise, des dollars « pour les mauvais jours » — des comptes hors budget, chacun dans sa devise. Les enveloppes comptent ce dont vous vivez, et le reste se voit à côté, sur « Comptes ».

Notez les dépenses par carte à l'étranger du montant débité par la banque dans la devise de la carte. Le montant en devise locale, si besoin, va dans la note. En détail — le scénario [« Un voyage entre amis »](#scenario-trip-abroad).

### Cryptomonnaie {#scenario-currencies-crypto}

Un compte hors budget, la puce ₿, USDT ou USDC sous le champ « Devise » — et l'interrupteur « Cryptomonnaie » s'active tout seul : « 8 décimales ». Pour votre propre code (ETH, SOL), activez-le à la main. Vous choisissez une devise ordinaire dans la liste — l'interrupteur se désactive.

Le nombre de décimales se choisit une fois : dès que le compte a des opérations, l'interrupteur affiche « Non modifiable : le compte a des opérations ».

### Devises sans centimes {#scenario-currencies-no-cents}

Le yen, le won, le dong n'ont pas de centimes, mais l'application affiche quand même « ,00 ». Ce n'est que l'affichage : tapez des nombres entiers comme d'habitude. Avec la saisie « Avec virgule », 1500 donne 1 500, pas 15,00. Comment se tape un montant — « Paramètres » → « Langue et formats » → « Saisie du montant ».

### L'écriture des montants {#scenario-currencies-format}

« Paramètres » → « Langue et formats » → « Format des montants » : séparateurs des milliers et des décimales, symbole de la devise à gauche ou à droite. D'emblée — selon l'usage de la langue de l'interface : en français, « 1 234,56 € ». L'anglais sur un téléphone d'Inde donne d'emblée lakhs et crores : « ₹12,34,567.89 ». En détail — l'article [« Paramètres »](#settings-formats).

### Ce qui manque {#scenario-currencies-not-yet}

- **Les cours en ligne.** Vous saisissez vous-même le taux de change, au moment du change. C'est aussi une protection : l'application ne demande les cours à aucun service, et personne à l'extérieur ne sait dans quelles devises est votre argent. Vos données restent chez vous — comme le dit aussi la [politique de confidentialité](#settings-s-about).
- **La conversion en une seule devise.** « Patrimoine » n'additionne que les comptes dans la devise du budget : un compte en dollars n'y entre pas. Sur « Comptes », une section qui contient un compte dans une autre devise n'a pas de total — impossible d'additionner euros et dollars.
- **Un compte du budget dans une autre devise.** Pourquoi — [plus haut](#scenario-currencies-rule).

## Aperçu {#overview}

Le premier écran au lancement : l'argent suffit-il, qu'est-ce qui brûle et qu'est-ce qui arrive — en un fil de cartes.

*L'onglet « Aperçu » au milieu, en bas de l'écran*

### Pourquoi cet écran {#overview-why}

« Aperçu » s'ouvre en premier à chaque lancement. C'est le coup d'œil du matin sur votre argent : tout va-t-il bien, qu'est-ce qui s'épuise, qu'est-ce qui arrive. Ici, on ne répartit pas l'argent et on ne corrige pas les opérations — c'est le rôle de « Budget » et d'« Activité ». Ici, on regarde et on décide où aller ensuite.

##### Tout va-t-il bien

Y a-t-il de l'argent non réparti, où est le rouge, quelles enveloppes se vident plus vite que le mois n'avance.

##### Ce qui s'est déjà passé

Les dernières opérations, les grosses dépenses, un calendrier des jours de dépense.

##### Ce qui arrive

Les paiements planifiés, les objectifs qui manquent d'argent, et les dépenses du mois face à l'habitude.

Vous avez mis l'application en arrière-plan plus d'une demi-minute ? Au retour, elle rouvre « Aperçu ». Pour revenir là où vous en étiez, choisissez-le dans « Paramètres → Apparence → Revenir à ».

### Ce qu'il y a où à l'écran {#overview-screen}

Touchez une capture — elle s'ouvre en plein écran.

[Écran « Aperçu » : en-tête, pastille « Non réparti » et « Âge de l'argent », « Dernières opérations », « Bientôt épuisé »]

1. **Paramètres** — l'engrenage. Tous les réglages de l'application : synchronisation, sauvegardes, apparence, langue.

2. **Nom du budget** — touchez-le pour ouvrir la liste de vos budgets et passer à un autre.

   *Comment ça marche:*
   On peut avoir plusieurs budgets : par exemple, personnel et familial, ou un ancien qu'on n'ose pas supprimer. Créer, renommer et supprimer un budget — dans le menu « ⋮ » → « Budgets » ([plus bas](#overview-menu)).

3. **Synchronisation** — deux flèches en cercle. Touchez — vos modifications partent dans le cloud, et celles des autres appareils arrivent ici.

   *Comment ça marche:*
   Le chiffre sur l'icône — combien de modifications ne sont pas encore envoyées. Juste après une synchronisation, l'icône s'allume 15 secondes : en vert — c'est passé, en rouge — ça n'est pas passé. Laissez le doigt dessus, et l'application dit ce qui s'est passé.

   Un seul échec, c'est en général le réseau : le métro, la campagne. Si ça échoue quatre fois de suite, l'icône reste rouge avec un « ! » dedans jusqu'à ce que ça passe. Pas de cloud connecté — l'icône a sa couleur normale, sans chiffre.

4. **Le menu « ⋮ »** — budgets, choix des blocs, « Masquer les montants ». Expliqué [plus bas](#overview-menu).

5. **« Non réparti »** — l'argent qui est sur les comptes, mais pas encore réparti entre les enveloppes. Touchez — l'application propose comment le distribuer.

   *Comment ça marche:*
   L'intitulé change avec le chiffre :

   - **« Non réparti »** — il y a de quoi distribuer. Sur la capture, 300 € : le salaire est arrivé, et les enveloppes de novembre sont déjà remplies.
   - **« Tout est réparti »**, en vert — chaque euro a un rôle. C'est justement le but.
   - **« Trop réparti »**, en rouge — on a mis dans les enveloppes plus qu'il n'y a sur les comptes. Retirez l'excédent d'une catégorie sur l'écran « Budget ».

   On ne peut toucher que s'il y a de quoi distribuer. La fiche « Répartition automatique du budget » s'ouvre : « Couvrir tous les dépassements », « Sous-financé », « Répartition du mois dernier » et d'autres façons. À côté de chacune — combien elle prendra. Rien ne change tant que vous ne confirmez pas. Plus sur les enveloppes — l'article [« Budget »](#budget).

6. **« Âge de l'argent »** — combien de jours, en moyenne, votre argent attend avant d'être dépensé.

   *Comment ça marche:*
   Sur la capture, 52 jours : ce que vous dépensez aujourd'hui est arrivé il y a presque deux mois. L'application prend les dix dernières dépenses et regarde quelle rentrée a payé chacune — l'argent le plus ancien part en premier.

   Moins de 30 jours — vous vivez d'une paie à l'autre, et tout retard de versement frappe le budget. Plus de 30 — vous dépensez l'argent du mois précédent, et le nouveau salaire attend tranquillement son tour. Un moins — on a dépensé plus qu'il n'y avait sur les comptes du budget. Le sablier de l'icône dit la même chose : plein — 30 jours et plus, à moitié vide — moins, vide — un moins.

   L'âge se calcule de trois façons, et à partir de 30 jours, vivre sur l'argent du mois précédent prend tout son sens. Tout cela — [plus bas](#overview-age).

7. **Blocs** — les cartes de synthèse, l'une sous l'autre. Lesquelles afficher et dans quel ordre, c'est vous qui décidez. Chaque bloc est expliqué [plus bas](#overview-blocks).

8. **« + Opération »** — noter une dépense ou un revenu. Au-dessus — la caméra (un ticket par QR code) et le micro (à la voix). Faites défiler vers le bas — les boutons se replient en un seul « + ».

   *Comment ça marche:*
   C'est le même formulaire que sur l'écran [« Activité »](#transactions) : chaque onglet y donne accès.

### Les blocs dans l'ordre {#overview-blocks}

Sous la pastille « Non réparti » (repères 5 et 6) viennent les cartes. Ici, dans l'ordre qu'elles ont juste après l'installation. Un bloc qui n'a rien à montrer se cache tout seul : pas de tags — pas de « Mes tags », pas d'objectifs — pas d'« Objectifs ».

Retirer un bloc, le faire revenir ou le monter — « ⋮ » → « Widgets » ([plus bas](#overview-menu)).

[Le bloc « Dernières opérations » sur la capture d'« Aperçu »]

#### Dernières opérations

Les cinq dernières entrées : date, bénéficiaire, montant, catégorie et note. Pratique pour vérifier que tout est noté depuis hier.

*Comment ça marche:*
Un revenu porte le signe « + », une dépense le « − ». Un montant ventilé (« Auchan » sur la capture) a une icône de fourche à côté, et ses catégories sont listées séparées par un point. Il y a deux rentrées sur la capture : le salaire et 43 € d'André — un ami a remboursé sa moitié d'« Auchan ». Ce n'est pas un revenu, mais un remboursement dans « Courses » (comment le noter — l'article [« Formulaire d'opération »](#entry)).

Les lignes ici ne se touchent pas. Pour corriger une opération, ouvrez [« Activité »](#transactions).

[Le bloc « Dépassements et avertissements » sur la capture d'« Aperçu »]

#### Dépassement et « Bientôt épuisé »

Les enveloppes qui demandent de l'attention maintenant. Touchez une ligne pour ouvrir l'écran de cette catégorie.

*Comment ça marche:*
- **« Dépassement »**, en rouge — la catégorie est dans le rouge : on a dépensé plus que prévu. L'icône de portefeuille — un moins sur votre propre argent, il prendra sur le « non réparti » du mois suivant. L'icône de carte et le jaune — un moins sur la carte de crédit : il est devenu une dette de la carte au lieu de manger de l'argent. Pour effacer un moins — l'écran [« Budget »](#budget).
- **« Bientôt épuisé »**, en jaune — l'enveloppe a encore assez, mais vous dépensez plus vite que le mois n'avance. L'application divise le plan du mois également entre les jours et laisse une marge de 15 %. Sur la capture, nous sommes le 10 novembre, et on a dépensé plus en « Courses » qu'il n'était prévu à cette date, même avec la marge.
- **« Tout est sous contrôle »** — ni rouge ni alerte. Le bloc l'affiche au lieu d'être vide.

Les catégories qui ont exactement zéro n'y figurent pas : le plan est tenu au centime près.

[Le bloc « Où est parti l'argent » sur la capture d'« Aperçu »]

#### Où est parti l'argent

Les cinq catégories les plus coûteuses du mois : montant, pourcentage de toutes les dépenses et une barre de même longueur.

*Comment ça marche:*
Sur la capture, « Loyer » représente 76 % des dépenses du mois de novembre : le loyer se paie le 1er et d'un seul coup, tandis que les autres dépenses s'accumulent jour après jour. En fin de mois, les pourcentages s'équilibrent.

Faites glisser la carte vers la droite — elle montre le mois précédent, vers la gauche — le suivant. Pour revenir au mois en cours — la puce « Aujourd'hui », qui apparaît dans l'en-tête de la carte quand vous êtes sur un autre mois.

[Le bloc « À venir » sur la capture d'« Aperçu »]

#### À venir

Les prochains paiements planifiés et les objectifs qui manquent d'argent — jusqu'à six lignes, par date.

*Comment ça marche:*
Un paiement planifié porte une icône de calendrier, un objectif un drapeau. Deux objectifs sur la capture : il manque 1 124,53 € à « Fonds d’urgence » d'ici la fin du mois de novembre, 100 € à « Voyages et vacances ». Le montant en jaune — ce qu'il reste à mettre.

Les lignes ne se touchent pas : mettre de l'argent dans une catégorie — l'écran [« Budget »](#budget), les paiements planifiés — « Paramètres → Planification ».

[Le bloc « Budget du mois » sur la capture d'« Aperçu »]

#### Budget du mois

D'où vient le chiffre « Non réparti » : une échelle du reste du mois précédent jusqu'au total.

*Comment ça marche:*
Il se lit de haut en bas, comme un ticket :

- **Report du mois de octobre** — ce qui n'a pas été réparti le mois précédent.
- **Budget pour novembre** — le revenu de ce mois : sur la capture, deux salaires de 1 400 €.
- **Réparti en novembre** — ce qui est déjà réparti entre les enveloppes.
- **Non réparti** — le total, le même chiffre que sur la pastille en haut de l'écran.

Sous le trait — le « Plan » : ce qu'il y a déjà pour décembre, le revenu moyen par mois et ce que demandent vos objectifs par mois, avec le pourcentage du revenu. Parfois d'autres lignes apparaissent — le dépassement du mois précédent, l'argent venu de l'épargne, ce qui est mis de côté à l'avance ; le bloc cache les lignes vides.

La carte défile du doigt dans les deux sens, en avant aussi : l'argent de décembre se répartit dès novembre.

[Le bloc « Patrimoine » sur la capture d'« Aperçu »]

#### Patrimoine

Tout ce que vous avez moins les dettes — et son évolution.

*Comment ça marche:*
En grand — le patrimoine aujourd'hui : 12 209,72 € sur la capture. À droite — de combien il a augmenté sur la période (+4 343,99 € sur 6 mois), en dessous — une courbe par mois et la répartition : « Actifs » (tous les comptes positifs) et « Dettes » (cartes de crédit et crédits).

Dans le « ⋮ » du bloc : la période — 6 mois, 12 mois, cette année ou depuis toujours — et « Comptes dans d’autres devises » : ces comptes apparaissent sur des lignes à part dans leur devise, sans conversion et hors du total.

**Juste après l'installation :** le bloc est désactivé, activez-le dans « ⋮ » → « Widgets ».

[Le bloc « Objectifs » sur la capture d'« Aperçu »]

#### Objectifs

Combien de catégories n'atteignent pas leur objectif ce mois-ci, et de combien. Touchez pour ouvrir l'écran « Objectifs ».

*Comment ça marche:*
Sur la capture, il manque 1 224,53 € à deux objectifs ensemble. Les objectifs se définissent sur l'écran de la catégorie ou sur l'écran « Objectifs » : « Mettre de côté chaque mois », « Épargner d'ici … », « Garder sur le solde », « Pourcentage du revenu » ou « liste ».

[Le bloc « Payez-vous d'abord » sur la capture d'« Aperçu »]

#### Payez-vous d'abord

Quel pourcentage du revenu vous mettez de côté pour votre futur vous — sur un mois, trois mois et un an.

*Comment ça marche:*
La règle est ancienne et simple : de chaque salaire, payez-vous d'abord, et ensuite seulement tous les autres. La norme est de 10 % du revenu.

Sur la capture, 11,2 % sont mis de côté en novembre — 34,00 € au-dessus de la norme. En dessous de la norme, le pourcentage est suivi de « il manque » et d'un montant.

C'est vous qui choisissez quelles catégories comptent comme « mis de côté » : « Paramètres → Budget → Payez-vous d'abord ». En général l'épargne : « Fonds d’urgence », « Investissements ». Aucune choisie — pas de bloc.

[Le bloc « Grosses dépenses » sur la capture d'« Aperçu »]

#### Grosses dépenses

Les trois plus grosses dépenses du mois — date, bénéficiaire, montant, catégorie et note.

*Comment ça marche:*
Il aide à repérer ce qui détonne : des courses étonnamment chères se voient tout de suite, pas en fin de mois.

**Juste après l'installation :** le bloc est désactivé, activez-le dans « ⋮ » → « Widgets ».

[Le bloc « Calendrier » sur la capture d'« Aperçu »]

#### Calendrier

Le mois en grille de jours : plus la case est vive, plus on a dépensé. Touchez un jour pour voir ce qui s'y est passé.

*Comment ça marche:*
Une explication détaillée, avec les modes et le menu — [plus bas](#overview-heatmap).

[Le bloc « Mes tags » sur la capture d'« Aperçu »]

#### Mes tags

Jusqu'à quatre tags : combien a été dépensé sous chacun, sur quelle durée, et combien d'opérations.

*Comment ça marche:*
Un tag avec « Règlement » affiche à droite combien récupérer ou rendre pour revenir à zéro : sur la capture, « #moitié » indique « à récupérer 43,00 € » : un achat chez « Auchan » a été partagé avec un ami, qui a déjà rendu la moitié. Touchez un tag pour ouvrir son écran. « Tous les tags › » en bas du bloc — toute la liste.

Dans le « ⋮ » du bloc : « Choisir les tags… » — quels quatre afficher et dans quel ordre ; et la période — « Total sur toute la durée » ou « Total de ce mois ». Rien de choisi — l'application montre d'elle-même les tags qui ont des opérations sur les 30 derniers jours. Pas de tags — pas de bloc.

Sur les tags eux-mêmes — l'article [« Activité »](#transactions).

[Le bloc « Dépenses du mois » sur la capture d'« Aperçu »]

#### Dépenses du mois

Ce que vous avez dépensé depuis le début du mois — face à ce que vous dépensez d'habitude à cette date.

*Comment ça marche:*
En grand — les dépenses depuis le 1er : 1 620,99 €. À droite — l'écart avec l'habitude : +59,87 €, c'est-à-dire un peu plus que d'ordinaire. La ligne vive — ce mois-ci, la fine — l'habitude.

« D'habitude », c'est le milieu de vos mois précédents sur la dernière année : un seul mois exceptionnellement cher ne le déplace pas. La carte défile du doigt, comme « Où est parti l'argent ».

### Le calendrier en détail {#overview-heatmap}

Le bloc le plus « vivant » d'« Aperçu » : tout le mois sur une carte. Un coup d'œil — et l'on voit quels jours ont coûté cher et lesquels sont passés sans aucune dépense.

[Le bloc « Calendrier » : puces Dépenses, Revenus, Planifiés, grille de novembre, aujourd'hui — le 10, « 3 jours sans dépense »]

(E)
#### Modes

Ce qu'il faut colorer : « Dépenses », « Revenus » ou « Planifiés ».

*Comment ça marche:*
- **« Dépenses »** — six nuances. La case la plus vive est le jour le plus cher du mois, chaque palier inférieur vaut moitié moins. La luminosité répond à la question « combien de fois ce jour a-t-il coûté moins que le plus cher ».
- **« Revenus »** — la même chose pour les rentrées, en vert.
- **« Planifiés »** — les jours où tombent les paiements planifiés. Un jour passé où tout a été saisi porte une coche ; s'il y a un paiement manqué, le numéro du jour est rouge.

En mode « Dépenses », un jour à venir avec un paiement planifié est entouré de pointillés.

(F)
#### Le menu du calendrier

Trois points dans l'en-tête de la carte, à droite du mois. Il règle ce qu'on dessine en plus sur la grille et ce qu'affiche la fiche du jour.

*Comment ça marche:*
**La fiche du jour** n'est pas un élément du menu. Elle s'ouvre quand vous touchez un numéro dans la grille : la liste de ce qui s'est passé ce jour-là monte du bas (capture [plus bas](#overview-day)). Le menu règle seulement son contenu.

Les éléments en mode « Dépenses » :

- **« Revenus en points »** — un jour où de l'argent est arrivé reçoit un point vert dans sa case.
- **« Journée entière dans la fiche du jour »** — touchez un numéro, et la fiche du jour montre non seulement les dépenses mais aussi les rentrées de ce jour : sur une ligne repliée en bas, touchez-la pour la déplier. Désactivé — la fiche ne montre que les dépenses.

En mode « Planifiés », les éléments sont différents : afficher les paiements à venir par un remplissage de la case ou par un point, et colorer ou non en rouge le numéro d'un jour avec un paiement manqué.

**Juste après l'installation**, « Revenus en points » et « Journée entière dans la fiche du jour » sont désactivés.

(G)
#### Aujourd'hui

Le jour d'aujourd'hui est entouré.

*Comment ça marche:*
Faites glisser le calendrier du doigt — il montre un autre mois, en arrière et en avant sans limite : c'est aussi un calendrier ordinaire où l'on voit à quel jour de la semaine tombe une date. Pour revenir — la puce « Aujourd'hui » dans l'en-tête de la carte.

(H)
#### Les jours sans dépense

Combien de jours du mois sont passés sans aucune dépense. À droite — l'échelle de luminosité.

*Comment ça marche:*
Une case vide dans le passé — un jour sans dépense. Si ce jour-là il n'y a eu qu'un remboursement d'un magasin, il y a un anneau vide au lieu d'un remplissage.

#### La fiche du jour : touchez un numéro du calendrier {#overview-day}

Une fiche monte du bas : la date et le total du jour en haut, et en dessous chaque opération. Un montant ventilé est montré par parties : sur la capture, « Auchan » — 61 € de courses et 25 € de produits ménagers.

[Fiche du jour 10 novembre : total −43,00 €, deux parties de l'achat chez « Auchan », le remboursement d'André]

Comment l'ouvrir : sur « Aperçu », trouvez le « Calendrier » et touchez le numéro du jour voulu — sur la capture ci-dessus, c'est le 10, entouré comme « aujourd'hui » (G). La fiche montre ce que colore le calendrier : en mode « Dépenses » — les dépenses du jour, en « Revenus » — les rentrées. Pour voir les deux à la fois, activez « Journée entière dans la fiche du jour » dans le menu du calendrier (F). Pour fermer la fiche — faites-la glisser vers le bas ou touchez à côté.

En mode « Planifiés », la fiche est différente : ce qui n'est pas saisi, ce qui l'est, et ce qui reste à venir. Faites glisser une échéance vers la gauche — « Saisir », vers la droite — « Supprimer ».

### L'âge de l'argent en détail {#overview-age}

Le chiffre de la pastille répond à la question : combien de jours mon argent a-t-il attendu avant d'être dépensé. Le salaire est arrivé le 1er octobre, et le 5 novembre vous achetez du pain avec le reste de l'argent d'octobre — cet argent a 35 jours. L'application prend les dix dernières dépenses, trouve pour chacune les rentrées qui l'ont payée (l'argent le plus ancien d'abord) et affiche la moyenne.

##### Moins de 30 jours

D'une paie à l'autre : les dépenses d'aujourd'hui sont payées par le dernier versement, un retard frappe tout de suite.

##### 30 et plus

Un mois d'avance : vous dépensez l'argent du mois précédent. C'est le but de la méthode — [la suite](#overview-age-month).

##### Un moins

On a dépensé plus qu'il n'y avait sur les comptes du budget.

#### Trois façons de calculer {#overview-age-modes}

L'âge de l'argent est une mesure discutable, et il n'existe pas de formule unique et juste. C'est donc vous qui choisissez : « Paramètres → Budget → Âge de l'argent ». Le chiffre change aussitôt — sur la pastille comme dans le rapport « Âge de l'argent ».

##### Classique (YNAB FIFO) · juste après l'installation

Comme dans YNAB. Ne voit pas du tout les virements — ni vers l'épargne, ni depuis. Une dépense pour laquelle il n'y avait pas d'argent pèse exactement −1 jour, qu'elle soit de cent euros ou de dix mille.

Bon si vous ne touchez pas à l'épargne : il est alors honnête et coïncide avec YNAB. Mauvais si vous vivez de virements depuis l'épargne : l'argent arrive sur la carte, il ne le voit pas et dessine de joyeux jours positifs. Sur un vrai budget, les comptes étaient à −3 000 €, couverts par des virements depuis « Investissements » — et le classique affichait +10 jours.

##### Avec l'épargne · le plus proche de la vérité

Un virement depuis l'épargne, c'est de l'argent qui entre dans le budget ; un virement vers l'épargne, de l'argent qui en sort. Une dépense au-delà de ce qu'on avait se mesure en jours de revenu : dépenser au-delà de ce qu'on a l'équivalent d'une semaine de revenu — environ moins 7 jours.

Le résultat est la moyenne des 10 dernières dépenses : une dépense dans le rouge au milieu de dépenses couvertes est ainsi adoucie.

##### Avec l'épargne et la profondeur du déficit

Comme le précédent, tant que le budget est dans le vert. Mais dans le rouge, il montre non pas la moyenne, mais la profondeur du trou : combien de jours de revenu habituel il faudra pour le combler.

Ce n'est plus un âge, mais un signal d'alarme. Utile pendant que vous sortez du rouge : le chiffre baisse honnêtement à chaque salaire.

##### Lequel choisir

Le plus proche de la vérité est **« Avec l'épargne »** : il compte exactement l'argent qui se trouve sur vos comptes du budget, avec tout ce qui est venu de l'épargne et y est parti. Le classique n'est honnête que tant que vous ne touchez pas à l'épargne. La profondeur du déficit — pour ceux qui sont dans le rouge et veulent voir ce qui reste. Si vous ne faites pas d'allers-retours avec l'épargne et ne dépensez pas plus que vous n'avez, les trois affichent le même chiffre.

#### Âge de 30 jours ou plus : vivez sur l'argent du mois précédent {#overview-age-month}

Puisque les dépenses sont déjà payées par le salaire précédent, ce mois n'a pas besoin du salaire actuel. Donnez-le tout de suite au mois suivant : chaque mois commence alors avec de l'argent prêt, et vous le répartissez à l'avance au lieu d'attendre le versement.

##### Comment faire

1. Notez le salaire comme d'habitude : « + Opération » → « Entrant », bénéficiaire, montant.
2. Touchez le champ « Catégorie ». La fiche « Où placer le revenu » s'ouvre.
3. Choisissez « Revenu pour décembre » — le mois suivant — au lieu de « Revenu pour novembre ». Enregistrez.

La date de l'opération reste la vraie — le jour où l'argent est arrivé. Seul change le mois du budget où il apparaît. Un salaire déjà noté se déplace de la même façon : ouvrez-le et changez la catégorie.

##### Par quel salaire commencer

Par celui que vous n'avez pas encore réparti entre les enveloppes. Le déplacement réduit le « non réparti » de ce mois du montant du salaire. Si ensuite apparaît un « Trop réparti » rouge, cet argent travaille déjà ce mois-ci : remettez le salaire dans ce mois et déplacez le suivant.

##### Ce qui change dans le budget

- **Ce mois-ci** vit de ce qui est arrivé avant. Le nouveau salaire n'arrive plus dans son « non réparti ».
- **Le mois suivant** reçoit son argent à l'avance. Sur l'écran « Budget », avancez avec la flèche « › » — le salaire est déjà dans son « non réparti », et l'on peut remplir les enveloppes avant le 1er. Sur « Aperçu », dans « Budget du mois », sous le trait — la ligne « Budget pour décembre ».
- **Le 1er**, tout le mois est déjà payé. L'argent se répartit une fois, en début de mois, et non par morceaux après chaque versement. « Répartition du mois dernier », dans la répartition automatique, le fait d'une touche.
- **Les objectifs « % revenu »** calculés sur le revenu du mois sont connus dès le premier jour : le revenu du mois est arrivé le mois précédent.
- **Les rapports** (« Revenus et dépenses », « Payez-vous d'abord ») comptent ce salaire dans le mois auquel il est destiné.
- **L'âge de l'argent lui-même** n'augmente pas grâce à cette marque : il augmente quand vous dépensez moins que vous ne gagnez. La marque fixe la réserve — l'argent du mois suivant ne se dissout pas dans celui-ci. Avant son mois, ce revenu n'entre pas dans le calcul de l'âge.

### Le menu « ⋮ » {#overview-menu}

Les budgets, l'apparence d'« Aperçu » et le mode d'affichage.

[Le menu « ⋮ » de l'écran « Aperçu » : Budgets, Widgets, Masquer les montants, Astuces, Centre d'aide]

(A)
#### Budgets

Toutes les actions sur les budgets dans une seule fiche.

*Comment ça marche:*
« Créer un nouveau budget », « Choisir un budget », « Supprimer le budget ». Le dernier budget restant ne peut pas être supprimé — l'application en a besoin d'au moins un. Pour simplement passer à un autre budget, il est plus rapide de toucher le nom en haut de l'écran.

(B)
#### Widgets

Quels blocs afficher sur « Aperçu » et dans quel ordre.

*Comment ça marche:*
Une coche — le bloc est visible, vide — caché. Pour monter ou descendre un bloc, tirez-le par la poignée à droite. Le réglage vit sur cet appareil : sur une tablette, « Aperçu » peut être différent de celui du téléphone.

(C)
#### Masquer les montants

Des points au lieu des chiffres. Pour le moment où quelqu'un d'autre voit l'écran.

*Comment ça marche:*
Vous tournez le téléphone vers votre voisin, faites une capture pour l'assistance, enregistrez une vidéo — activez-le, et les montants deviennent « •••• » sur tous les écrans. Le signe « + » ou « − » reste : il dit dans quel sens l'argent est allé, mais pas combien. Les barres, graphiques et couleurs restent tels quels.

Tant que le mode est actif, un œil barré figure en haut d'« Aperçu » — touchez-le pour retrouver les montants. Ou dans le même « ⋮ » — l'élément s'appelle alors « Afficher les montants ». Le mode survit au redémarrage de l'application.

(D)
#### Astuces

Toutes les astuces de cet écran au même endroit.

(E)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

[Fiche « Widgets de l'aperçu » : blocs avec coches et poignées de déplacement]
**« Widgets ».** Une coche — afficher, la poignée à droite — déplacer.

### Ce qu'on peut faire sur l'écran {#overview-gestures}

La plupart des lignes d'« Aperçu » se lisent seulement. Se touchent celles qui mènent quelque part.

| Faire | Résultat |
|---|---|
| Tirer l'écran vers le bas | Recalculer tous les blocs. |
| Toucher le nom du budget | Passer à un autre budget. |
| Toucher « Non réparti » | La fiche « Répartition automatique du budget » — s'il y a de quoi distribuer. |
| Faire glisser une carte à gauche ou à droite | Un autre mois — pour « Où est parti l'argent », « Budget du mois », « Calendrier » et « Dépenses du mois ». Au premier lancement, un doigt montre ce geste tout seul. |
| Toucher une ligne de dépassement | L'[écran de la catégorie](#category) : solde, dépenses, opérations du mois. |
| Toucher un jour du calendrier | La fiche du jour : ce qui s'est passé ce jour-là. |
| Toucher « Objectifs » ou un tag | L'écran « Objectifs » ou l'écran du tag. |

## Budget {#budget}

Vos enveloppes. C'est ici que vous décidez combien mettre de côté pour la nourriture, le loyer et tout le reste — et que vous voyez ce qui reste dans chaque enveloppe.

*L'onglet « Budget » en bas de l'écran*

### Pourquoi cet écran {#budget-why}

Imaginez une pile d'enveloppes marquées « Courses », « Loyer », « Charges ». Le jour de paie, vous y répartissez l'argent. Quand vous dépensez, vous le sortez de la bonne enveloppe. Une enveloppe vide — plus d'argent pour cela ce mois-ci, sauf à en déplacer depuis une autre.

L'écran « Budget », c'est cette pile d'enveloppes. Chaque ligne est une enveloppe (dans l'application, on dit catégorie), et le montant à droite indique ce qu'elle contient maintenant. Une seule règle principale : distribuez tout l'argent dans les enveloppes jusqu'à ce que « Tout est réparti » apparaisse en haut.

##### Répartir le salaire

L'argent est arrivé — « non réparti » est apparu en haut. Distribuez-le entre les enveloppes.

##### Vérifier avant d'acheter

« Ai-je de quoi m'offrir de nouvelles baskets ? » — regardez le montant de « Vêtements et chaussures ».

##### Effacer le rouge

Vous avez dépensé plus que prévu ? Déplacez de l'argent depuis une autre enveloppe.

### Ce qu'il y a où à l'écran {#budget-screen}

Touchez une capture — elle s'ouvre en plein écran.

[Écran « Budget », août : « Tout est réparti », puces « Insuffisant » et « Disponible », groupes de catégories avec soldes et barres]

1. **Mois** — le mois que vous répartissez en ce moment.

   *Comment ça marche:*
   Les flèches « ‹ » et « › » font défiler les mois. Touchez le nom pour ouvrir le choix du mois, sans avoir à défiler un par un.

   On peut avancer sans limite — et c'est utile : dès septembre, on peut mettre de côté pour les cadeaux de décembre. Chaque mois a ses enveloppes, et ce qui reste dans une enveloppe passe tout seul au mois suivant.

2. **« Non réparti »** — l'argent qui n'est encore dans aucune enveloppe. Le chiffre le plus important de l'écran.

   *Comment ça marche:*
   Le salaire arrive — il va ici. Votre travail : le distribuer entre les enveloppes jusqu'à ce qu'il tombe à zéro. Cet endroit a trois états :

   - **un chiffre sur une pastille de couleur** — l'argent attend un rôle. Touchez la pastille pour ouvrir la répartition automatique : l'application propose de répartir comme le mois dernier, selon les dépenses moyennes, selon les objectifs ou selon vos pourcentages ;
   - **« ✓ Tout est réparti »** — but atteint : chaque euro a son rôle. Comme sur la capture ;
   - **un « trop réparti » rouge** — vous avez mis dans les enveloppes plus que vous n'avez. Touchez — et retirez l'excédent des enveloppes.

3. **Le menu « ⋮ »** — objectifs, ordre, affichage des lignes. Chaque élément est expliqué [plus bas](#budget-menu).

4. **Puces de filtre** — n'afficher que les enveloppes qui demandent de l'attention.

   *Comment ça marche:*
   « Dépassé » — les enveloppes dans le rouge. « Insuffisant » — celles où l'objectif du mois n'est pas encore atteint. « Disponible » — celles qui ont de l'argent. Le chiffre de la puce indique combien il y en a ; sur la capture, deux attendent de l'argent pour leur objectif, dix ont de l'argent.

   Une puce à zéro n'apparaît pas : s'il n'y a pas de dépassement, « Dépassé » ne s'affiche simplement pas. Touchez « Toutes » pour retrouver toute la liste.

5. **Groupe** — une étagère d'enveloppes similaires.

   *Comment ça marche:*
   « Dépenses fixes », « Dépenses quotidiennes »… À droite — ce que contiennent toutes les enveloppes du groupe. Touchez le nom pour replier le groupe. Appuyez longuement pour un menu : renommer, ajouter une catégorie ou un nouveau groupe, supprimer.

   Activez « Pourcentage du revenu » dans le menu « ⋮ » — et sous le montant du groupe apparaît quel pourcentage du revenu du mois vous avez mis dans toutes ses enveloppes à la fois. On voit tout de suite que les « Dépenses fixes » prennent, disons, la moitié du salaire et que les « Dépenses quotidiennes » en reçoivent un tiers. Le pourcentage compte toutes les enveloppes du groupe, même si le groupe est replié ou si une partie est masquée par un filtre.

6. **⊕ à côté d'un groupe** — une nouvelle enveloppe dans ce groupe.

7. **Catégorie** — une enveloppe.

   *Comment ça marche:*
   Touchez la ligne pour ouvrir l'[écran de la catégorie](#category) : toutes les dépenses de cette enveloppe sur le mois et les tendances des mois précédents.

   La ligne peut se faire glisser du doigt à gauche ou à droite — pour la renommer, la changer de groupe ou la supprimer. Comment — dans la section [« Ce qu'on peut faire avec une ligne »](#budget-gestures).

8. **Le montant à droite** — ce que contient l'enveloppe maintenant. Sa couleur est la principale indication de l'écran.

   *Comment ça marche:*
   - **Vert** — il y a de l'argent, on peut dépenser.
   - **Gris 0,00** — l'enveloppe est vide. Pour un loyer déjà payé, c'est normal.
   - **Rouge, avec une icône de portefeuille** — vous avez dépensé plus qu'il n'y avait. Ce moins mangera l'argent du mois suivant.
   - **Jaune, avec une icône de carte** — aussi un moins, mais vous avez payé par carte de crédit : la dette de la carte a augmenté, l'argent du budget n'est pas touché.

   #### Comment mettre de l'argent dans une enveloppe

   1. Touchez le montant à droite.
   2. Une fenêtre avec un pavé s'ouvre. Elle montre non pas le solde, mais ce que vous avez déjà mis dans cette enveloppe ce mois-ci.
   3. Tapez le nouveau montant — le premier chiffre remplace l'ancien. Vous voulez ajouter au précédent ? Touchez « + », tapez 35 et « = ».
   4. L'enveloppe a un objectif ? Touchez « Vers l'objectif : … » — le montant nécessaire se remplit tout seul.
   5. Touchez « Valider ».

   L'argent est pris dans « non réparti » en haut — qui diminue exactement d'autant.

   #### Comment effacer un moins rouge

   1. Touchez le montant rouge.
   2. La fiche « Dépassement : Courses » s'ouvre avec deux éléments. « Modifier le budget » — ouvrir le pavé du montant de cette enveloppe et la compléter depuis « non réparti ». « Couvrir depuis une autre catégorie » — déplacer de l'argent depuis d'autres enveloppes ; la suite le décrit.
   3. Touchez « Couvrir depuis une autre catégorie ». En haut — « À couvrir : 35 € », en dessous — « Où prendre l'argent » : en premier « Non réparti », puis toutes les enveloppes qui ont de l'argent, avec le solde de chacune.
   4. Chaque ligne a un bouton « Prendre … » : l'application a déjà calculé combien on peut y prendre. Touchez-le à côté d'une enveloppe dont vous pouvez vous passer. Par exemple, « Loisirs et hobbies ».
   5. Un pavé s'ouvre avec ce montant. D'accord — touchez « Prendre … ». Vous voulez prendre moins ? Tapez votre montant.
   6. Une enveloppe n'a pas suffi ? Prenez le reste dans la suivante. Quand le moins est comblé, la fiche dit « Dépassement couvert ! ».

9. **Barre** — ce qui est déjà dépensé sur ce qui a été mis de côté.

   *Comment ça marche:*
   Pour « Charges », sur la capture, la barre est presque pleine : presque tout ce qui était prévu pour le mois est parti. Au-delà du bout, la barre devient rouge.

   Si l'enveloppe a un objectif, la barre ne montre plus les dépenses mais l'avancement de l'objectif. Les barres se désactivent dans le menu « ⋮ ».

   Pendant le mois en cours, la barre des dépenses a un fin trait vertical — aujourd'hui : la part du mois déjà écoulée. Si le remplissage a dépassé le trait, vous dépensez plus vite que le mois n'avance, et l'enveloppe risque de ne pas tenir jusqu'à la fin du mois. La barre d'un objectif n'a pas ce trait.

10. **« … dépensé sur … »** — les dépenses de ce mois face à ce que vous avez mis de côté ce mois-ci.

    *Comment ça marche:*
    « 92,74 € dépensé sur 100,00 € » pour « Charges » : 100 € mis de côté, 92,74 € dépensés. Pourquoi alors 29,44 à droite et non 7,26 ? Parce que l'enveloppe contenait aussi de l'argent des mois précédents — le solde suit l'enveloppe.

    Pour la même raison, « Courses » a une ligne rouge — « 133,28 € dépensé au-delà de 400,00 € » — alors que le montant à droite est vert : le plan du mois est dépassé, mais la réserve des mois précédents a couvert le dépassement. L'enveloppe est dans le vert, tout va bien.

11. **Le drapeau de l'objectif** — « Atteint » ou « reste … ».

    *Comment ça marche:*
    Un objectif dit à l'enveloppe ce qu'elle doit contenir : « 400 € de courses chaque mois » ou « 1 300 € pour les vacances d'ici juillet ». Le drapeau sous le montant indique si l'objectif est atteint ce mois-ci, et sinon, combien il reste à ajouter. L'objectif se définit sur l'écran de la catégorie.

12. **« Aujourd'hui »** — revenir au mois en cours. Apparaît quand vous êtes passé à un autre.

13. **Nouvelle dépense** — les trois mêmes boutons que sur « Activité ». [Plus de détails dans l'article « Activité »](#transactions)

### Le menu « ⋮ » {#budget-menu}

Les objectifs, l'ordre des enveloppes et ce qu'affichent les lignes.

[Le menu « ⋮ » ouvert de l'écran « Budget » : Objectifs, Répartir sur les objectifs, Changer l'ordre, Barres de progression, Pourcentage du revenu, Catégories masquées, Astuces, Centre d'aide]

(A)
#### Objectifs

Tous les objectifs du budget sur un seul écran. En détail — l'article [« Objectifs »](#goals).

*Comment ça marche:*
On voit quelles enveloppes sont sur la bonne voie et auxquelles il manque. Touchez un objectif pour le modifier.

(B)
#### Répartir sur les objectifs

Ajouter à chaque enveloppe ce qui lui manque pour atteindre son objectif. En détail — l'article [« Objectifs »](#goals).

*Comment ça marche:*
L'application prend l'argent dans « non réparti » et le distribue aux enveloppes ayant un objectif — à chacune exactement ce qui manque. Elle montre d'abord le plan : quoi et où — et ne répartit qu'après votre « oui ».

Si tous les objectifs du mois sont déjà atteints, elle montre ce que contient chacun — pour qu'on voie pourquoi il n'y a rien à distribuer.

(C)
#### Changer l'ordre

Réorganiser enveloppes et groupes.

*Comment ça marche:*
Des poignées apparaissent sur les lignes — tirez dessus. Il est pratique de garder les enveloppes les plus utilisées en haut. Fini ? Le même élément du menu s'appelle alors « Terminer le tri ».

(D)
#### Barres de progression

Afficher une barre et une ligne « … dépensé sur … » sous chaque enveloppe.

*Comment ça marche:*
Désactivez-les pour une liste courte : il ne reste que les noms et les montants. Les enveloppes avec un objectif gardent toujours leur barre — elle montre l'objectif.

**Juste après l'installation :** activées.

(E)
#### Pourcentage du revenu

Quel pourcentage du revenu du mois vous avez mis dans chaque enveloppe.

*Comment ça marche:*
Une étiquette comme « 12 % » apparaît à côté du montant : le loyer prend 40 % du revenu, les courses 15 %. Chaque groupe affiche sous son montant son propre pourcentage total, sur toutes ses enveloppes. Les dépenses ne changent pas le pourcentage — seulement ce que vous mettez de côté et le revenu du mois lui-même.

**Sur quoi le pourcentage est calculé.** Pas sur tout l'argent que vous répartissez, mais sur la ligne « Budget pour novembre » de la carte « Budget du mois » sur « Aperçu » : le revenu rattaché à ce mois. « Report de octobre » n'en fait pas partie. Si vous répartissez aussi le reste du mois précédent, les pourcentages sortent plus élevés qu'en réalité, et leur somme peut dépasser 100 %. Quelle part de ce qui est réparti vient du revenu du mois et quelle part du reste — la même carte le montre ([« Aperçu »](#overview-blocks)).

**Juste après l'installation :** désactivé. **Voir aussi :** la répartition automatique « Par pourcentage » — touchez « non réparti ».

(F)
#### Catégories masquées

Les enveloppes que vous avez retirées de la vue.

*Comment ça marche:*
Une enveloppe qui a eu des dépenses ne peut pas être supprimée — les rapports ont besoin de son historique. On peut la masquer : elle disparaît de la liste, les dépenses passées restent. Ici, on peut faire revenir les enveloppes masquées.

(G)
#### Astuces

Toutes les astuces de cet écran au même endroit.

(H)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

### Ce qu'on peut faire avec une ligne {#budget-gestures}

Pas de boutons « modifier » ni « supprimer » sur la ligne. À la place, on fait glisser du doigt la ligne de l'enveloppe sur le côté — jusqu'au bouton qui apparaît en dessous. La première ligne de la liste montre une fois comment cela se présente.

| Faire | Résultat |
|---|---|
| Toucher la ligne | L'[écran de la catégorie](#category) : les dépenses de cette enveloppe sur le mois et les tendances. |
| Toucher le montant | Mettre de l'argent dans l'enveloppe ou, sur un montant rouge, effacer le moins. Les étapes — dans l'élément [« Le montant à droite »](#budget-balance) plus haut. |
| Faire glisser vers la gauche | Un bouton « Modifier » apparaît à droite. Touchez-le pour ouvrir « Modifier la catégorie » : un nouveau nom et un champ « Groupe ». Choisissez-y un autre groupe — et l'enveloppe y déménage, avec tout son argent et son historique. |
| Faire glisser vers la droite | Un bouton rouge « Supprimer » apparaît à gauche. Une enveloppe vide, sans aucune dépense, est supprimée après la question « Supprimer la catégorie ? ». S'il y a eu des dépenses, l'application dit « Suppression impossible — il y a des opérations » et propose « Masquer » : l'enveloppe disparaît de la liste, l'historique reste. Pour faire revenir une enveloppe masquée — le menu « ⋮ » → « Catégories masquées ». |
| Appuyer longuement sur un groupe | Le menu du groupe : renommer, ajouter une catégorie ou un nouveau groupe, supprimer le groupe. |

Les enveloppes du groupe « Paiements de cartes » ne se font pas glisser : c'est la carte de crédit elle-même qui les gère, et l'argent y est mis de côté automatiquement.

## Objectifs {#goals}

De combien chaque enveloppe a besoin — et combien ajouter encore ce mois-ci.

*« Budget » → « ⋮ » → « Objectifs »*

### Pourquoi des objectifs {#goals-why}

L'enveloppe répond à « combien il y a dedans ». L'objectif répond à « combien il devrait y avoir dedans ». L'application compare les deux et dit combien ajouter.

**« La nourriture coûte 400 € par mois »** — un objectif « Par mois » sur « Courses ». Chaque mois, l'application rappelle de mettre ces 400 € de côté.

**« En mars, les vacances, il faut 2 000 € »** — un objectif « Pour une date ». L'application répartit elle-même le montant sur les mois : tant en novembre, tant en décembre.

**« Le fonds d'urgence doit contenir 4 000 € »** — un objectif « Solde ». Vous en dépensez une partie — l'application demande de la remettre.

L'objectif lui-même ne déplace pas d'argent : il ne fait que compter. C'est vous qui mettez l'argent dans l'enveloppe — sur l'écran « Budget » ou d'un seul bouton « Répartir sur les objectifs » (voir [plus bas](#goals-allocate)). Chaque catégorie a un seul objectif.

### Ce qu'il y a où à l'écran {#goals-screen}

L'écran « Objectifs » s'ouvre depuis « Budget » : « ⋮ » → « Objectifs ». Il présente toutes les catégories avec leurs objectifs pour le mois choisi. La capture montre novembre dans le budget de démonstration : cinq objectifs de cinq types.

[Écran Objectifs : mois Novembre 2026, résumé Total 5 objectifs, Coût mensuel 2 543,53, Il manque 1 609,53 ; groupes de catégories ; Courses — par mois 400, Atteint ; Cadeaux — liste 175 ; Voyages — pour une date 2 000 ; Fonds d'urgence — solde 4 000 ; Investissements — % revenu 280]

(1)
**Mois** — les flèches « ‹ › » font défiler les mois, toucher le nom ouvre le choix du mois. Les objectifs sont calculés pour ce mois. Vous quittez le mois en cours — un bouton « Aujourd'hui » apparaît en bas.

(2)
**Le menu « ⋮ »** — quelles catégories afficher, barres de progression, astuces — [plus bas](#goals-menu).

(3)
**Résumé** — « Total » — combien d'objectifs. « Coût mensuel » — de combien tous les objectifs ont besoin ce mois-ci. « Il manque » — ce qui n'a pas encore été ajouté.

(4)
**Groupe** — les mêmes groupes que sur « Budget ». Sous le nom — combien d'objectifs compte le groupe et combien il leur manque, ou « tout est couvert ». Toucher replie le groupe.

(5)
**Une catégorie sans objectif** — « pas d'objectif ». Touchez la ligne ou le « ⊕ » — « Nouvel objectif » s'ouvre.

(6)
**Une catégorie avec objectif** — tout l'objectif en trois lignes. Toucher l'ouvre pour le modifier.

*Comment ça marche:*
La première ligne : le nom de la catégorie, le type d'objectif (« par mois », « pour une date », « solde », « % revenu », « liste ») et le montant de l'objectif. La deuxième : une barre — ce qui est déjà fait — et l'état : un drapeau vert et « Atteint », ou un drapeau et « reste … » — combien ajouter. La troisième : la condition de l'objectif en mots et le pourcentage atteint.

Sur la capture, « Courses » est atteint : 400 € sont déjà mis de côté pour novembre. Et il manque 100 € à « Voyages et vacances » ce mois-ci — c'est ce qu'il faut mettre chaque mois pour réunir 2 000 € d'ici mars.

#### Le menu « ⋮ » {#goals-menu}

[Menu de l'écran Objectifs : Toutes les catégories, Avec objectifs seulement, Sous-financées, Barres de progression, Astuces, Centre d'aide]

(A, B, C)
#### Quelles catégories afficher

« Toutes les catégories », « Avec objectifs seulement » ou « Sous-financées » — celles dont l'objectif manque de quelque chose ce mois-ci. Le choix est mémorisé ; si tout n'est pas affiché, un point s'allume sur le « ⋮ ».

(D)
#### Barres de progression

afficher ou non les barres et les pourcentages. Sans elles, la ligne est plus courte, l'objectif et le montant restent en place.

(E)
#### Astuces

les astuces de cet écran sous forme de liste.

(F)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

### Créer un objectif {#goals-new}

On crée un objectif ici, sur « Objectifs », ou sur l'écran de la catégorie elle-même — dans la carte « Objectif », avec le bouton « Ajouter un objectif ». C'est la même fiche.

[Fiche Nouvel objectif : Type d'objectif Par mois, Montant Définir…, bouton Enregistrer grisé]

[Fiche Type d'objectif : Par mois, Pour une date, Solde, % revenu, Liste — chacun avec une explication]

1. Touchez une catégorie sans objectif. « Nouvel objectif » s'ouvre.
2. « Type d’objectif » — touchez et choisissez l'un des cinq. Sous chaque nom est indiqué à quoi il sert. Lequel prendre quand — [plus bas](#goals-types).
3. « Montant » — touchez et tapez sur le pavé de l'application. Pour « % revenu », à la place du montant il y a « Pourcentage du revenu », pour « Liste » — les lignes de la liste.
4. « Pour une date » a aussi « Épargner pour le mois » — le mois où il vous faut toute la somme.
5. « Enregistrer ». Tant que le montant n'est pas indiqué, le bouton est grisé.

**Modifier ou supprimer** — touchez une catégorie avec objectif — « Modifier l'objectif » s'ouvre avec les mêmes champs. En bas — « Supprimer » et « Enregistrer ». L'objectif supprimé disparaît, l'argent reste dans l'enveloppe.

**Une suggestion depuis les paiements planifiés** — si la catégorie a un paiement planifié, la carte de l'objectif sur l'écran de la catégorie affiche « Depuis le paiement planifié : … ». Un paiement chaque mois — elle propose « par mois » de son montant ; une fois par an — « épargner … d'ici le paiement ».

### Cinq types d'objectif {#goals-types}

Le type d'objectif est la règle par laquelle l'application calcule « combien il faut ce mois-ci ». Ci-dessous, chaque règle avec un exemple de la capture.

#### « Par mois » — pour ce qui se dépense chaque mois {#goals-monthly}

**Comment c'est calculé** — chaque mois, il faut mettre de côté la même somme. L'objectif regarde ce que vous avez mis dans l'enveloppe **ce mois-ci**, pas ce qui y reste.

*Comment ça marche:*
« Courses », 400 € par mois. Vous avez mis 400 € pour novembre — l'objectif est « Atteint », même si la moitié est déjà dépensée. Être dépensé, c'est justement le travail de cet argent. Vous avez mis 270 € — « reste 130 € ».

Pour les courses, internet, les transports, les abonnements.

#### « Pour une date » — réunir une somme pour un mois donné {#goals-bydate}

[Fiche Modifier l'objectif : Type d'objectif Pour une date, Montant 2 000, Épargner pour le mois Mars 2027]

**Comment c'est calculé** — ce qui manque encore sur toute la somme est divisé par les mois restants, celui-ci compris. On obtient le versement du mois.

*Comment ça marche:*
« Voyages et vacances », 2 000 € d'ici mars. Au début du mois de novembre, l'enveloppe contient 750 €, il manque 1 250 €. Jusqu'à mars, en comptant novembre, il y a cinq mois — 250 € par mois. Pour novembre, 150 € sont déjà mis de côté — l'objectif dit « reste 100 € ».

Un mois sauté, et le manque se répartit sur les mois restants : le versement augmente tout seul. Vous mettez plus — les versements suivants baissent.

La barre montre autre chose : la part de la somme totale déjà dans l'enveloppe. Sur la capture — 45 %.

**Pour quoi** — les vacances, l'assurance une fois par an, les cadeaux de fin d'année, des travaux au printemps — tout ce qui n'arrive pas chaque mois mais se prévoit.

#### « Solde » — garder une réserve {#goals-balance}

**Comment c'est calculé** — l'enveloppe doit toujours contenir cette somme. Ce qui manque en début de mois, c'est ce que l'objectif demande.

*Comment ça marche:*
« Fonds d’urgence », 4 000 €. L'enveloppe contient maintenant 2 875,47 € — l'objectif demande « reste 1 124,53 € ». Pas d'échéance : complétez quand vous pouvez. Vous avez pris dans la réserve pour une réparation ? L'objectif demande de nouveau de remettre.

Pour un coussin de sécurité, une pharmacie, une réserve pour réparer la voiture.

#### « % revenu » — mettre de côté un pourcentage du revenu {#goals-percent}

[Fiche Modifier l'objectif : Type d'objectif % revenu, Pourcentage du revenu 10 %, Sur le revenu de ce mois choisi, Sur le revenu moyen ; Revenu pour novembre 2 800, Objectif du mois 280]

**Comment c'est calculé** — l'objectif du mois est votre pourcentage du revenu. L'application affiche le montant directement dans la fiche : « Revenu pour novembre : 2 800,00 € · Objectif du mois : 280,00 € ».

**« Sur le revenu de ce mois »** — calculé sur l'argent **déjà arrivé**. La première partie du salaire est arrivée — un objectif, la seconde — l'objectif a grandi. Tant qu'il n'y a pas de revenu dans le mois, l'objectif vaut zéro et compte comme atteint. **D'emblée :** c'est ce choix.

**« Sur le revenu moyen »** — le revenu moyen des 12 derniers mois. L'objectif est connu dès le 1er et ne change pas pendant le mois — pratique si le salaire arrive en fin de mois.

**Pour quoi** — « mettre de côté 10 % de tout ce que je gagne » — placements, épargne, dons.

#### « Liste » — ce qu'il faut acheter ce mois-ci {#goals-list}

Un objectif fait de lignes : écrivez à quoi ira l'argent de la catégorie ce mois-ci — le montant de l'objectif s'additionne tout seul. Chaque mois a sa propre liste.

[Fiche Modifier l'objectif : Type d'objectif Liste, Liste de novembre : Anniversaire de maman 100, Gâteau 40 — enregistré 43, Collègue 35 — enregistré 24 · 2 opérations ; Ajouter une ligne ; Objectif de novembre 175]

[Écran de la catégorie Cadeaux et fêtes : carte Objectif — 175 par mois, selon la liste ; Répartir encore 105 ; lignes de la liste]

[Fiche Ligne de liste: Collègue, Montant prévu 35; Enregistré 24 sur 35, Réduire à 24; deux opérations — 20 et 4; Enregistrer l’opération; Supprimer, Enregistrer]

**Les lignes** — choisissez « Liste » dans « Type d’objectif » : les lignes du mois apparaissent directement dans la fiche. « ⊕ Ajouter une ligne » — un nom et un montant. En bas — « Objectif de novembre » : la somme de toutes les lignes. Tant qu'il n'y a pas de lignes, « Enregistrer » est grisé.

**Sur l'écran de la catégorie** — les lignes vivent dans la carte « Objectif », sous la barre. C'est là qu'on travaille avec : toucher une ligne — la modifier, la faire glisser vers la gauche — « Saisir », vers la droite — « Supprimer » (avec « Annuler » dans le message en bas).

**« Saisir »** — ouvre le formulaire d'opération habituel : le montant prévu (corrigez-le avec le vrai), cette catégorie, le nom de la ligne dans la note. Une fois enregistré, sous la ligne en vert « ✓ enregistré 43,00 € · 12 nov. », et à droite reste le montant prévu : sur la capture, le gâteau était prévu à 40 € et acheté 43 €.

*Comment ça marche:*
Une ligne peut être enregistrée une nouvelle fois : un achat se paie parfois en plusieurs fois — les pneus, puis le montage. Le formulaire propose le reste du prévu, et la ligne affiche le total des enregistrements et leur nombre. Sa fiche a un lien vers chaque opération et « Enregistrer l’opération » ; le bouton « Réduire à … » aligne le prévu sur le montant enregistré. Une ligne enregistrée ne se reporte pas à un autre mois.

**Reporter à un autre mois** — appuyez longuement sur une ligne pour activer la sélection. Cochez celles qu'il faut ; en bas — leur somme et « ⋮ » : « Reporter en décembre », « Reporter à un autre mois… », « Supprimer ».

**Un nouveau mois** — la liste est vide : « La liste de décembre est vide » et un bouton « Reprendre les lignes de novembre · montant » : les lignes du mois précédent sont copiées (sans les marques « enregistré »), le mois précédent ne change pas.

### La carte « Objectif » sur l'écran de la catégorie {#goals-card}

Touchez une catégorie sur « Budget » — [son écran](#category) s'ouvre. Sa carte « Objectif » montre l'objectif pour le mois de l'écran et dit combien ajouter.

[Écran de la catégorie Voyages et vacances : résumé, carte Objectif — Épargner 2 000 d'ici mars, Répartir encore 100 ce mois-ci, sélecteur Par montant / Par échéance, Mettre de côté par mois 400, curseur, Épargner pour le mois Février 2027, 1 mois avant l'échéance, En faire l'échéance]

**En-tête** — la description de l'objectif et un crayon pour le modifier. En dessous, une barre et « Répartir encore … ce mois-ci » ou « L'objectif du mois est atteint ».

**L'estimation « Par montant » / « Par échéance »** — pour un objectif « Pour une date », sous la barre : et si l'on mettait plus ou moins ? « Par montant » : vous bougez le curseur « Mettre de côté par mois » — « Épargner pour le mois » en dessous indique quand la somme sera réunie, et la ligne suivante — « … mois avant l'échéance », « … mois après l'échéance » ou « Pile à l'échéance ». « Par échéance » : vous bougez « Épargner pour le mois » — sous le curseur, on voit combien mettre par mois. Il vous faut un montant précis ? Touchez « Mettre de côté par mois » et tapez-le sur le pavé.

*Comment ça marche:*
L'estimation n'enregistre rien : vous quittez l'écran — tout est comme avant. La nouvelle date vous plaît ? Touchez « En faire l'échéance : … », et l'objectif la prend.

Sur la capture : en mettant 400 € par mois, les vacances sont réunies en février — un mois avant l'échéance.

**Sans objectif** — la carte n'a qu'un bouton, « Ajouter un objectif ». S'il y a un paiement planifié, une suggestion « Depuis le paiement planifié : … » apparaît à côté.

### Répartir sur les objectifs {#goals-allocate}

Le salaire est arrivé — répartissez-le sur tous les objectifs d'un seul bouton. « Budget » → « ⋮ » → « Répartir sur les objectifs ».

[Fenêtre Répartir sur les objectifs : 230 sur 3 catégories — Cadeaux et fêtes +105, Voyages et vacances +100, Fonds d'urgence +25 ; Restera non réparti 0,00 ; Annuler, Répartir]

**Ce qu'elle fait** — elle prend l'argent dans « non réparti » et l'ajoute aux enveloppes dont l'objectif du mois manque de quelque chose. Elle montre d'abord le plan — combien pour quelle enveloppe ; « Répartir » — le faire, « Annuler » — ne rien changer.

**S'il n'y a pas assez pour tout** — les objectifs sont couverts dans l'ordre, de haut en bas, comme les catégories sur « Budget », et le dernier reçoit le reste. Sur la capture, 230 € ont suffi pour « Cadeaux et fêtes » et « Voyages et vacances » en entier, et « Fonds d’urgence » a reçu 25 € sur 1 124,53 €. Gardez l'important en haut — l'ordre se change sur « Budget » : « ⋮ » → « Changer l'ordre ».

**S'il n'y a rien à répartir** — « non réparti » est vide — l'application le dit. Pas d'objectifs — elle indique où les définir. Tous les objectifs sont déjà atteints — elle montre pour chacun ce qui est mis de côté et ce qu'il faut.

**La même chose dans la répartition automatique** — touchez « non réparti » en haut de « Budget » — le mode « Sous-financé » fait la même chose. Et la calculatrice du montant d'une catégorie sur « Budget » a un bouton « Vers l'objectif : … » — il inscrit exactement ce qui manque.

### Où voit-on encore les objectifs {#goals-elsewhere}

L'objectif ne se voit pas qu'ici.

**« Budget »** — une catégorie avec objectif a sous son montant un drapeau : « Atteint » ou « reste … », et la barre montre l'objectif et non les dépenses. La puce « Insuffisant » au-dessus de la liste ne garde que les catégories dont l'objectif manque de quelque chose. En détail — l'article [« Budget »](#budget).

**« Aperçu »** — le bloc « Objectifs » — combien d'objectifs, combien sont atteints et combien il faut encore ce mois-ci. En détail — l'article [« Aperçu »](#overview).

## Écran d'une catégorie {#category}

Une enveloppe en entier : ce qu'elle contenait, ce qui a été mis de côté et dépensé, ce qui reste et pour combien de jours. Ici aussi l'objectif, une note, les dépenses des mois précédents et toutes les opérations du mois.

*« Budget » → touchez une catégorie*

### Pourquoi cet écran {#category-why}

Sur « Budget », une catégorie a une ligne et un chiffre. Ici — tout ce qu'il y a derrière.

##### Est-ce que ça tiendra jusqu'à la fin du mois

« Disponible » et en dessous « ≈ … par jour » : combien vous pouvez dépenser chaque jour jusqu'à la fin du mois sans passer dans le rouge.

##### Où est parti l'argent

Toutes les opérations de cette catégorie sur le mois, par jour. Touchez-en une pour ouvrir sa fiche.

##### Combien il faut vraiment

« Tendances des dépenses » montre ce qui part d'habitude par mois. Si vous mettez de côté moins, chaque mois finira dans le rouge.

### Comment l'ouvrir {#category-open}

- **« Budget »** — touchez la ligne d'une catégorie. L'écran s'ouvre sur le mois choisi sur « Budget ». Cela vaut pour le téléphone en position verticale : en paysage, toucher une ligne du tableau ouvre la calculatrice du montant, et sur tablette — un panneau à droite ([plus bas](#category-tablet)).
- **« Aperçu »** — touchez une ligne du bloc « Dépassement » ou « Bientôt épuisé ».
- **« Rapports »** — touchez une ligne de la liste dans « Où est parti l'argent » ou une tuile dans « Écart ». L'écran s'ouvre sur le mois du rapport.

### Ce qu'il y a où à l'écran {#category-screen}

L'écran défile : en haut le résumé, puis les cartes « Objectif », « Note », « Tendances des dépenses », et plus bas les opérations du mois. Touchez une capture — elle s'ouvre en plein écran.

[Écran de la catégorie Courses : le mois avec des flèches ; résumé — Depuis octobre, Prévu, Dépensé, Disponible et ≈ par jour ; carte Objectif — Mettre de côté 400,00 par mois, L'objectif du mois est atteint ; Note ; Tendances des dépenses ; Opérations du mois par jour : Auchan, Monoprix, Carrefour ; bouton Opération]

1. **Nom** — le nom de la catégorie. Pour la renommer — le menu « ⋮ ».

2. **« ⋮ »** — masquer, renommer ou changer de groupe, supprimer. En détail — [plus bas](#category-menu).

3. **Mois** — « ‹ › » font défiler les mois : passés et à venir, sans limite. En détail — [plus bas](#category-months).

4. **« Depuis … »** — ce qui restait dans l'enveloppe le mois précédent.

5. **« Prévu pour … »** — ce que vous avez mis dans cette enveloppe ce mois-ci. En petit sous le montant — quel pourcentage du revenu du mois cela représente.

6. **« Dépensé en … »** — ce qui est sorti de l'enveloppe ce mois-ci, après remboursements.

7. **« Disponible »** — ce qu'il y a dans l'enveloppe maintenant. Le même chiffre que sur la ligne de la catégorie dans « Budget ».

8. **« ≈ … par jour »** — ce que vous pouvez dépenser par jour jusqu'à la fin du mois. Seulement pour le mois en cours et seulement si « Disponible » est supérieur à zéro.

9. **« Objectif »** — l'objectif de la catégorie pour ce mois : ce qui reste à mettre de côté. En détail — l'article [« Objectifs »](#goals-card).

10. **« Note »** — votre texte sur cette catégorie. En détail — [plus bas](#category-note).

11. **« Tendances des dépenses »** — ce qui part en moyenne par mois. En détail — [plus bas](#category-trends).

12. **Date** — les opérations du mois, par jour, les plus récentes en haut. En détail — [plus bas](#category-ops).

13. **Opération** — une ligne comme dans « Activité », mais sans la catégorie : il n'y en a qu'une ici.

14. **« + Opération »** — une nouvelle opération, avec la catégorie déjà choisie dans le formulaire.

### Le résumé : d'où viennent les chiffres {#category-stats}

Les quatre lignes du résumé forment une seule formule :

**« Depuis … »** + **« Prévu »** − **« Dépensé »** = **« Disponible »**

##### Le plus passe au mois suivant, le moins non

Vous n'avez pas tout dépensé ? Le reste reste dans l'enveloppe et figurera le mois suivant sur la ligne « Depuis … ». Vous avez dépensé plus qu'il n'y avait ? Ce mois-ci « Disponible » est rouge. Au changement de mois, le moins est remis à zéro : le mois suivant, « Depuis … » vaudra 0.

*Comment ça marche:*
Où va le moins remis à zéro dépend de la façon dont vous avez payé. En espèces ou par carte de débit — il réduira le « non réparti » du mois suivant. Par carte de crédit — il est devenu une dette de la carte. En détail — l'article [« Budget »](#budget).

##### Pourcentage du revenu

Sous « Prévu » — quel pourcentage du revenu du mois vous avez mis dans cette enveloppe. Le même pourcentage que dans le badge « Pourcentage du revenu » sur « Budget ». Pas de revenu dans le mois — pas de pourcentage. Il est calculé sur la ligne « Budget pour … » de la carte « Budget du mois » — sans le reste du mois précédent ; pourquoi le pourcentage peut alors sembler trop élevé — dans l'article [« Budget »](#budget-income-share).

##### « ≈ … par jour »

« Disponible » est divisé par les jours restants jusqu'à la fin du mois, aujourd'hui compris, et arrondi à l'inférieur — pour qu'une journée n'ait jamais plus qu'il n'y en a. Vous avez dépensé moins aujourd'hui ? Demain le chiffre augmente.

### Note {#category-note}

Écrivez ce qui entre dans cette catégorie, pour quoi vous épargnez, ce que vous avez convenu — tout ce qui servira dans six mois. Touchez le champ « Ajouter une note pour la catégorie… » et écrivez : la note s'enregistre toute seule, il n'y a pas de bouton. Avec le cloud, elle arrive sur vos autres appareils.

### « Tendances des dépenses » {#category-trends}

Ce qui part d'habitude de cette catégorie. Le calcul porte sur les 12 mois complets précédents, le mois en cours n'y entre pas : il n'est pas terminé. Les dépenses sont comptées après remboursements.

[Carte Tendances des dépenses de la catégorie Gros achats : Moyenne sur un mois actif 480, Dépenses mensuelles moyennes 96, Dépensé le mois précédent 0]

**« Dépenses mensuelles moyennes »** — ce qui part en moyenne par mois, mois sans dépenses compris. C'est ce qu'il vaut la peine de mettre de côté chaque mois pour que l'enveloppe ne passe pas dans le rouge.

**« Moyenne sur un mois actif »** — la moyenne sur les seuls mois avec des dépenses. Elle apparaît quand il n'y a pas eu de dépenses tous les mois : sur la capture, « Gros achats » — 480 € pour un mois avec un achat, et 96 € en moyenne sur chaque mois.

**« Dépensé en … »** — ce qui est parti le mois précédent : comparez avec celui-ci.

**Les pourcentages sous les montants** — quel pourcentage du revenu cela représente : pour les moyennes, du revenu moyen sur les mêmes mois ; pour le mois précédent, de son revenu.

### Les opérations du mois {#category-ops}

Toutes les opérations de cette catégorie pour le mois de l'écran, par jour : les plus récentes en haut. Pour un montant ventilé, on ne voit ici que sa partie dans cette catégorie — sur la capture, « Auchan ».

| Faire | Résultat |
|---|---|
| Toucher une ligne | La fiche de l'opération — la même que dans « Activité ». En détail — l'article [« Activité »](#transactions-detail). |
| Toucher le rond à droite | La marque « Débité », comme dans « Activité ». |
| Faire glisser vers la gauche | « Modifier » — le formulaire de l'opération. |
| Faire glisser vers la droite | « Supprimer » — après confirmation. « Annuler » apparaît en bas. |

L'ordre des opérations dans une journée et le total du jour à côté de la date se règlent dans « Activité » : « ⋮ » → « Tri » et « Total du jour ». Ici, c'est pareil.

### Un autre mois {#category-months}

« ‹ » et « › » au-dessus du résumé font défiler les mois. Vous quittez le mois en cours — « Aujourd'hui » apparaît en bas à gauche : touchez-le pour revenir au mois en cours.

[Le même écran pour le mois précédent : résumé sans la ligne ≈ par jour, bouton Aujourd'hui en bas à gauche]

Pour un mois passé, on voit ce qu'il y avait et ce qui a été dépensé à l'époque. La ligne « ≈ … par jour » n'y figure pas : le mois est fini. Pour un mois à venir, on voit ce qui est déjà mis de côté à l'avance.

### Le menu « ⋮ » {#category-menu}

[Menu : Masquer la catégorie, Modifier la catégorie, Astuces, Centre d'aide, Supprimer la catégorie]

(A)
##### « Masquer la catégorie »

La catégorie disparaît de « Budget » et de la liste des catégories du formulaire d'opération. L'argent et les opérations restent, et elle compte dans les calculs comme avant. Pour la faire revenir — ici même : l'élément devient « Afficher la catégorie ». Ou « Budget » → « ⋮ » → « Catégories masquées ».

(B)
##### « Modifier la catégorie »

Une fiche avec le nom et un champ « Groupe ». En détail — [plus bas](#category-edit).

(C)
##### « Astuces »

Les astuces de cet écran — y compris celles que vous avez déjà fermées.

(D)
##### « Centre d'aide »

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

(E)
##### « Supprimer la catégorie »

Seulement si la catégorie n'a aucune opération. Alors, après la question « Supprimer la catégorie ? », elle disparaît, son objectif aussi, et tout ce qui y était mis de côté revient dans « non réparti ».

*Comment ça marche:*
S'il y a des opérations, l'application dit « Suppression impossible — il y a des opérations » et propose « Masquer ». Une catégorie supprimée disparaîtrait de l'historique, et ses opérations resteraient sans enveloppe.

#### Renommer et changer de groupe {#category-edit}

[Fiche Modifier la catégorie : Nom Courses, Groupe Dépenses quotidiennes, boutons Supprimer et Enregistrer]

[Fiche Groupe : Dépenses fixes, Dépenses quotidiennes, Dépenses occasionnelles, Épargne]

(E)
##### « Nom »

Le nouveau nom de la catégorie. Les opérations, l'objectif et l'argent restent avec elle.

(F)
##### « Groupe »

Touchez-le pour ouvrir la liste des groupes. Choisissez-en un autre et touchez « Enregistrer » : la catégorie passe à la fin de ce groupe avec son argent et son historique.

*Comment ça marche:*
Les catégories du groupe « Paiements de cartes » n'ont pas ce champ : c'est l'application qui gère leur groupe.

(G)
##### « Supprimer »

La même chose que « Supprimer la catégorie » dans le menu.

##### Comment changer une catégorie de groupe

1. Ouvrez la catégorie : « Budget » → touchez sa ligne.
2. « ⋮ » → « Modifier la catégorie ».
3. Touchez le champ « Groupe » et choisissez le groupe.
4. « Enregistrer ».

On peut faire la même chose directement sur « Budget » : faites glisser la ligne de la catégorie vers la gauche → « Modifier ».

### Sur une tablette {#category-tablet}

Sur une tablette en paysage, toucher une ligne de « Budget » ne quitte pas le tableau : à droite apparaissent le résumé, l'objectif, la note, les tendances et les opérations de cette catégorie. Le mois y est le même que celui du tableau, sans flèches propres.

Le panneau n'a pas de menu « ⋮ ». Pour masquer, renommer ou supprimer une catégorie, passez par son écran : remettez la tablette à la verticale et touchez la ligne, ou ouvrez la catégorie depuis « Aperçu » ou « Rapports ».

## Activité {#transactions}

Toute l'histoire de votre argent en un seul fil. Chaque achat, chaque salaire, chaque « j'ai passé un peu du compte courant à l'épargne ».

*L'onglet « Activité » en bas de l'écran*

### Pourquoi cet écran {#transactions-why}

L'écran « Budget » répond à la question « combien puis-je encore dépenser ». « Activité » répond à « mais où est-il passé, au juste ». C'est votre journal : tout ce que vous avez noté est ici, jour par jour, le plus récent en haut.

##### Retrouver

« Combien coûtait ce dîner en mars ? » — quelques lettres dans la recherche, et le voilà.

##### Corriger

Mauvaise catégorie, un zéro en trop, un doublon — faites glisser la ligne et corrigez.

##### Rapprocher avec la banque

Marquer ce qui est déjà passé sur la carte — et voir aussitôt ce que la banque n'a pas encore traité.

### Ce qu'il y a où à l'écran {#transactions-screen}

Touchez une capture — elle s'ouvre en plein écran.

[Écran « Activité » : recherche, menu, puces de type d'opération, fil des opérations par jour et bouton d'ajout]

1. **Recherche** — trouve n'importe quoi avec quelques lettres, un montant ou des dates.

   *Comment ça marche:*
   Tapez « carref » — le fil ne garde que vos passages chez Carrefour. La recherche porte sur tout : bénéficiaire, catégorie, note et montant. « 47,55 » trouve ce montant, « lait » — la note « Lait, œufs, pain ».

   Les dates, la recherche les comprend telles que vous les écrivez :

   - **15/08/2026** — un jour ;
   - **15/08** — ce jour-là, n'importe quelle année : « qu'est-ce que j'ai acheté aux anniversaires précédents ? » ;
   - **08/2026** — tout le mois d'août ;
   - **02/08/26-10/08/26** — du … au …, les deux jours compris. Fonctionne aussi avec les mois : **06/2026-08/2026** — tout l'été.

   Entre « de » et « à », un trait d'union, un tiret ou une espace conviennent — l'application trouve elle-même la limite. Un simple nombre, comme « 8 », ne compte pas comme une date : sinon une recherche de 8 € se noierait dans tout le mois d'août.

   Le dièse lance la recherche par tag : « #vac » — tout ce qui porte le tag « vacances », « #vac café » — seulement les cafés des vacances. Deux tags séparés par une espace — les opérations qui portent les deux.

2. **Bénéficiaires et tags** — à qui vous payez le plus souvent, et combien.

   *Comment ça marche:*
   Un écran à part, avec deux onglets. « Bénéficiaires » — tous ceux que vous avez payés et qui vous ont payé, avec un total de l'année en cours (la période se change dans le menu « ⋮ »). C'est souvent là qu'on découvre que les « petits » passages à l'épicerie du coin ont fait, sur l'année, le prix de vacances.

   « Tags » — vos étiquettes à travers les catégories : « vacances », « travaux », « cadeau pour maman ». Touchez un bénéficiaire ou un tag pour ouvrir son historique. [L'article « Bénéficiaires et tags »](#payees-tags)

3. **Le menu « ⋮ »** — tout ce qui change l'aspect du fil. Chaque élément est expliqué [plus bas](#transactions-menu).

4. **Type d'opération** — seulement les dépenses, seulement les revenus, d'une touche.

   *Comment ça marche:*
   Vous voulez voir uniquement les rentrées ? Touchez « Revenus ». Les « Virements », c'est quand l'argent a simplement changé de compte chez vous : du compte courant à l'épargne, pour rembourser la carte de crédit. Les « Notes » — des entrées sans montant, des pense-bêtes.

   Touchez de nouveau la même puce — le fil revient en entier.

5. **Date** — sauter à n'importe quel jour.

   *Comment ça marche:*
   Remonter six mois au doigt, c'est pour les amateurs. Touchez la pastille de date, choisissez un jour dans le calendrier — et le fil y est déjà. Pour revenir à aujourd'hui — le bouton « Aujourd'hui » en bas à gauche.

6. **Drapeau** — un marque-page coloré pour vous.

   *Comment ça marche:*
   Le drapeau ne calcule rien — c'est juste un marque-page. Rouge — « vérifier que ce n'est pas débité deux fois », vert — « un ami a promis de rembourser ». Les couleurs et leur sens, c'est vous qui les inventez.

   On peut mettre un drapeau dans le formulaire d'opération ou sur une dizaine de lignes à la fois via la sélection. Un contour gris signifie « pas de drapeau ». La forme du drapeau — point, fanion ou drapeau ondulé — dans « Paramètres → Apparence ».

7. **Catégorie** — de quelle enveloppe l'argent est parti.

   *Comment ça marche:*
   Une catégorie est une enveloppe de l'écran « Budget ». Un achat chez Carrefour avec la catégorie « Courses » réduit l'enveloppe des courses : c'est ainsi que le budget sait ce qu'il vous reste pour manger.

   Le ticket concernait la nourriture et les produits ménagers ? Le montant peut être ventilé : chaque partie va dans son enveloppe, et la ligne affiche une puce par partie. Et pour un salaire, au lieu d'une catégorie il y a « Disponible ce mois-ci » : l'argent est arrivé et attend que vous le distribuiez entre les enveloppes.

8. **Compte** — d'où l'argent a été débité ou où il est arrivé.

   *Comment ça marche:*
   Compte courant, espèces, carte de crédit — chaque compte a son icône et sa couleur, pour les reconnaître sans lire. Un virement a deux lignes, une par compte : sur l'une l'argent est sorti, sur l'autre il est arrivé. C'est pourquoi le titre d'un virement montre non pas un magasin mais l'autre compte : « Visa » sur le compte courant, « Compte courant » sur la Visa.

9. **Débité** — correspond-il au relevé. Facultatif.

   *Comment ça marche:*
   Vous avez noté l'achat à la caisse, et la banque l'a passé un ou deux jours plus tard. Le rond évite la confusion : vide — la banque n'a pas encore cette opération, coché — elle l'a. Vous voyez l'achat dans l'appli bancaire ? Touchez le rond.

   Une fois par mois, on peut rapprocher tout le compte. Les coches deviennent alors des cadenas : « rapproché, on n'y touche plus ».

   **La marque est facultative :** elle n'influe pas sur le budget, elle aide seulement à rapprocher le compte avec la banque. Si vous ne l'avez jamais utilisée — passez simplement, des ronds vides, c'est normal.

10. **Nouvelle dépense** — trois boutons dans le coin inférieur droit.

    *Comment ça marche:*
    « + Opération » ouvre un formulaire vide — vous remplissez vous-même le montant, la catégorie et le compte.

    Au-dessus, deux boutons ronds pour ne pas taper. Le violet — la caméra : pointez-la sur le QR code du ticket, et l'application inscrit elle-même le montant et la date (si elle connaît les tickets de votre pays). Le vert — le micro : dites « café 6 du compte compte courant », et l'application inscrit le montant et le compte, ainsi que le bénéficiaire et la catégorie si elle les reconnaît parmi les vôtres. Dans les deux cas, le même formulaire s'ouvre — vérifiez et enregistrez. [L'article « Formulaire d'opération »](#entry)

11. **Icônes appareil photo et QR** — une photo du ticket et un reçu électronique sont joints à l'opération. [Ce que c'est](#transactions-badges)

12. **Icône PDF** — un fichier est joint à l'opération : facture, quittance, ticket d'une boutique en ligne. [Ce que c'est](#transactions-badges)

13. **Icône de fourche** — le montant est ventilé en parties sur plusieurs catégories. [Ce que c'est](#transactions-badges)

14. **Dièses — les tags** — vos étiquettes « à quelle occasion » ; une opération peut en avoir plusieurs. [Ce que c'est](#transactions-tags)

### L'écran existe sous deux formes {#transactions-two-views}

Ne vous inquiétez pas si votre écran ne ressemble pas à l'image ci-dessus. Les boutons du coin inférieur droit se replient pour ne pas cacher les opérations.

[Boutons déployés : « + Opération », au-dessus la caméra et le micro]
**L'écran vient de s'ouvrir.** Trois boutons : « + Opération », caméra et micro.

[Boutons repliés : il ne reste qu'un « + »]
**Vous avez fait défiler le fil vers le bas.** Il ne reste qu'un « + » — qui fait la même chose.

Pour faire revenir la caméra et le micro, faites défiler le fil un tout petit peu vers le haut — les boutons se déploient de nouveau.

On peut toucher le « + » sous les deux formes : il ouvre toujours le formulaire d'une nouvelle opération.

### Icônes et tags sur une ligne {#transactions-badges}

Les petites icônes à côté d'une opération indiquent qu'elle a quelque chose en plus : un ticket joint, un fichier ou plusieurs catégories. Elles ne font rien par elles-mêmes — pour voir ce qui est joint, touchez la ligne.

Pas de bénéficiaire — un tiret « ——— » remplace le nom. Ce n'est pas une erreur : le bénéficiaire n'a simplement pas été saisi, et le signe du montant indique le sens.

#### Appareil photo — la photo du ticket

Une photo d'un ticket papier, d'une étiquette de prix ou de tout ce qu'on veut garder à côté de l'achat.

**N'en abusez pas.** Joignez des photos à ce qui servira vraiment, pas à chaque baguette. [Pourquoi](#transactions-attach-weight)

*Comment l'ajouter et pourquoi:*
Le formulaire d'opération a un champ « Photos et PDF ». Touchez « Ajouter » et choisissez « Prendre une photo » ou « Choisir dans la galerie ». On peut joindre plusieurs photos.

C'est utile quand, un mois plus tard, il faut rendre un article sous garantie ou se rappeler ce que contenait cet achat de 47,55 €. La photo est stockée sur le téléphone ; pour qu'elle apparaisse aussi sur vos autres appareils, activez « Synchroniser les photos » dans les réglages de synchronisation.

#### Carré QR — un reçu électronique

Le code ou le lien vers le ticket délivré par la caisse.

*Comment l'ajouter et pourquoi:*
Beaucoup de tickets portent en bas un QR code — il permet de retrouver le ticket dans le service du magasin ou des impôts. Le formulaire d'opération a un champ « Reçu électronique (URL ou code) » : collez-y le lien ou touchez l'icône de scanner et pointez la caméra sur le QR code.

Si l'application connaît les tickets de votre pays, elle compare aussi le ticket au formulaire : elle inscrit le montant si vous ne l'avez pas encore tapé, et si les montants diffèrent, elle le signale et propose de corriger. Le scanner ne change pas la date du formulaire. Le ticket d'un pays inconnu est simplement gardé tel quel — et reste utile : dans la fiche de l'opération, on peut copier le code et ouvrir le lien.

#### Feuille « PDF » — un fichier joint

Une quittance, une facture de charges, un ticket de boutique en ligne — tout ce qui arrive sous forme de fichier.

**N'en abusez pas.** Un PDF n'est pas compressé à l'ajout — le fichier est stocké tel quel. [Pourquoi](#transactions-attach-weight)

*Comment l'ajouter et pourquoi:*
Le même champ « Photos et PDF » du formulaire : « Ajouter » → « Choisir un PDF ». Le fichier se range à côté de l'opération — plus besoin de chercher la quittance dans vos e-mails ou dans « Téléchargements ».

Touchez un PDF joint — en bas apparaissent « Ouvrir » (dans une application PDF) et « Enregistrer dans un fichier » (une copie dans le dossier de votre choix).

#### Chaque photo a un poids {#transactions-h-weight}

La base elle-même ne grossit pas avec les photos : elle ne stocke qu'un lien vers le fichier. Mais le fichier est sur le téléphone et, surtout, entre en entier dans **chaque sauvegarde**. Par défaut, jusqu'à 19 sauvegardes sont conservées — 7 fréquentes et 12 mensuelles, sur le téléphone et dans le cloud.

Une seule photo de ticket de 300 Ko peut donc occuper près de 6 Mo dans les sauvegardes, et une centaine de ces photos plus d'un demi-gigaoctet. Si « Synchroniser les photos » est activé, chacune part en plus dans le cloud et sur vos autres appareils. Même chose pour les PDF, sauf qu'ils ne sont pas du tout compressés à l'ajout.

**La règle est simple :** joignez ce qui servira — un bon de garantie, le ticket d'un achat coûteux, une quittance pour une déclaration. Le pain et le lait se passent de photos. Et un reçu électronique (QR) pèse le poids d'une ligne de texte — on peut le garder pour chaque achat.

#### Fourche — le montant est ventilé

Un achat — plusieurs catégories. Dans le formulaire, c'est « Ventiler le montant » dans la liste des catégories ; dans la fiche de l'opération, les parties sont sous le titre « Ventilation ».

*Comment ça marche:*
Chez « Auchan », sur la capture, vous avez payé 86 € en un seul paiement, mais acheté à la fois de la nourriture et des produits ménagers. Si tout allait dans « Courses », l'enveloppe des courses maigrirait de 25 € de trop, et « Produits ménagers » resterait intacte — le budget se mettrait à mentir.

On ventile donc le montant : 61 € dans « Courses », 25 € dans « Produits ménagers ». Dans le fil, une telle opération a une puce par partie, et sa fiche a une section « Ventilation ». On ventile le montant dans le formulaire d'opération, au moment de choisir la catégorie.

##### Le retrait d'espèces à la caisse est aussi une ventilation

Vous payez 100 € par carte au magasin et demandez au caissier 30 € en espèces. La banque montre un seul débit de 100 €, mais en réalité deux choses se sont passées : 70 € sont partis en courses, et 30 € ont simplement quitté la carte pour votre portefeuille.

1. Notez une opération de 100 € depuis le compte « Compte courant » et ventilez le montant.
2. La première partie — 70 €, catégorie « Courses ».
3. La seconde — 30 € : dans le choix de la catégorie, descendez jusqu'à la section « Virements » et choisissez « Virement : Espèces ».

Le fil affiche une puce « Virement : Espèces », le compte « Espèces » augmente de 30 €, et l'enveloppe des courses maigrit d'exactement 70 €. Tout mettre dans « Courses », c'est faire croire au budget que vous avez mangé 30 € de plus, et votre portefeuille afficherait moins qu'il ne contient.

#### Une ligne de dièses — les tags

Vos étiquettes par-dessus les catégories : « #campagne », « #moitié », « #vacances ». Une opération peut en avoir autant que vous voulez.

*Comment ça marche:*
La catégorie répond à la question « pour quoi j'ai dépensé », et le tag — « à quelle occasion ». Le lait et le pain chez « Carrefour », ce sont des « Courses », mais achetés pour la maison de campagne. Mettez-leur le tag « #campagne » — et vous verrez ensuite d'un coup d'œil ce qu'a coûté l'été à la campagne, même si l'argent s'est réparti entre courses, essence et matériaux.

« Monoprix », sur la capture, a deux tags à la fois : des courses pour la campagne, payées à moitié avec un ami. Une opération peut avoir autant de tags que vous voulez.

##### Comment mettre un tag

1. Dans le formulaire d'opération, sous la note, touchez le champ « Tags ».
2. Une liste s'ouvre, avec les tags récents en haut. Cochez ceux qu'il faut.
3. Le tag voulu n'existe pas encore ? Tapez son nom dans la ligne « Trouver ou créer un tag » et touchez « Créer le tag « … » ».
4. Touchez « Terminé ».

##### Où regarder ensuite

- **Combien a été dépensé sous un tag** — l'icône « Bénéficiaires et tags » en haut (repère 2), l'onglet « Tags ». Touchez un tag pour ouvrir son écran : combien est parti en tout, par catégorie et par mois, et toutes les opérations.
- **Retrouver des opérations** — tapez dans la recherche « # » et le début du tag : « #camp » affiche tout ce qui concerne la campagne.
- **Qui doit quoi à qui** — pour un tag comme « #moitié », activez « Règlement » dans le menu « ⋮ » de son écran. L'application montrera combien il reste à récupérer ou à rendre pour revenir à zéro.

Le tag sur la ligne ne se touche pas — c'est une étiquette, pas un bouton.

Il existe aussi : **deux flèches** — un virement entre vos comptes ; **un petit calendrier avec une flèche** — une opération saisie depuis un paiement planifié ; **une feuille autocollante** — une note : une entrée sans montant, un pense-bête.

### Le menu « ⋮ » {#transactions-menu}

Tout ici concerne l'affichage du fil. Aucun élément ne modifie ni ne supprime vos entrées — essayez sans crainte.

[Le menu « ⋮ » ouvert : Sélectionner des opérations, Filtre, Tri, Total du jour, Astuces, Centre d'aide]

(A)
#### Sélectionner des opérations

Une action sur une dizaine de lignes à la fois.

*Comment ça marche:*
Vous voulez mettre un drapeau rouge sur une dizaine d'achats pour les vérifier sur le relevé ? Inutile d'ouvrir chacun. Activez la sélection et cochez les lignes — leur total apparaît en bas (pratique aussi pour additionner des tickets). Touchez le « ⋮ » à côté du total : à toutes à la fois, on peut mettre une catégorie, un drapeau, la marque « débité », les répéter à la date du jour, les déplacer sur un autre compte ou les supprimer. Le dernier élément — « Annuler la sélection » : quitter la sélection sans rien changer.

Le raccourci — appuyer longuement sur n'importe quelle ligne.

(B)
#### Filtre

Ne garder dans le fil que ce qu'il faut.

*Comment ça marche:*
Par exemple : « les dépenses au café le mois dernier, carte seulement ». On peut filtrer par type, période, catégorie, bénéficiaire, compte, montant et tag. Les filtres s'additionnent — chacun resserre le fil.

Tant qu'un filtre est actif, un chiffre s'allume sur le « ⋮ » — un rappel que le fil n'est pas complet en ce moment. Sinon, on croirait facilement que des opérations ont disparu.

**Juste après l'installation :** pas de filtres. **Se réinitialise tout seul :** au changement de budget — un autre budget a ses propres catégories et comptes. **Voir aussi :** [le filtre des rapports](#reports).

(C)
#### Tri

Comment ordonner les opérations à l'intérieur d'une journée.

*Comment ça marche:*
Les jours suivent toujours le calendrier — le plus récent en haut, on n'y change rien. Mais dans une journée, on peut mettre son propre ordre : les grosses dépenses en haut (« Décroissant »), les petites en haut (« Croissant ») ou les revenus d'abord. L'ordre choisi est écrit directement dans l'élément du menu — pour ne pas s'étonner une semaine plus tard qu'une journée paraisse « mélangée ».

**Juste après l'installation :** dans l'ordre de saisie. **Fonctionne aussi :** sur l'écran d'un compte, dans les opérations d'une catégorie et chez un bénéficiaire.

(D)
#### Total du jour

Combien est parti dans la journée — juste à côté de la date.

*Comment ça marche:*
Activez « Dépenses seulement » — à droite de chaque date apparaît ce que vous avez dépensé ce jour-là. Une excellente façon de repérer les journées « chères » : un samedi avec marché et cinéma saute aux yeux.

« Dépenses et revenus » montre la différence en un seul chiffre signé : « −100 » — la journée a fini dans le rouge, « +1 400 » — le salaire est arrivé. Les virements entre vos comptes et les soldes initiaux ne comptent pas : ce ne sont pas des dépenses, l'argent a simplement changé de place.

**Juste après l'installation :** non affiché. **Fonctionne aussi :** sur l'écran d'un compte et dans les opérations d'une catégorie.

(E)
#### Astuces

Toutes les astuces de cet écran au même endroit.

*Comment ça marche:*
Dans l'application, les astuces apparaissent une par une — au moment où elles servent, pour ne pas tout vous déverser d'un coup. Ici, elles sont toutes réunies, même celles que vous n'avez pas encore rencontrées.

(F)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

### Ce qu'on peut faire avec une ligne {#transactions-gestures}

Pas de boutons « modifier » ni « supprimer » sur la ligne — pour ne pas gêner la lecture. À la place, touchez la ligne ou faites-la glisser du doigt sur le côté.

| Faire | Résultat |
|---|---|
| Toucher | La fiche de l'opération s'ouvre : tout à son sujet, les photos des tickets, la modification. [Ce qu'elle contient](#transactions-detail) |
| Faire glisser vers la gauche | « Modifier » — directement dans le formulaire. |
| Faire glisser vers la droite | « Supprimer ». Vous avez changé d'avis ? « Annuler » reste quelques secondes en bas. |
| Appuyer longuement | La sélection de plusieurs lignes s'active — comme l'élément [« Sélectionner des opérations »](#transactions-select). |

#### Vous avez touché une opération — ce qu'il y a dedans {#transactions-detail}

La fiche de l'opération monte du bas de l'écran : tout ce que vous en avez noté, sur une seule feuille. Rien ne change tant que vous ne touchez pas « Modifier » — vous pouvez regarder tranquillement.

[Fiche de l'opération « Carrefour » : montant, bénéficiaire, catégorie, compte, date, reçu électronique, note, tag « campagne », photo du ticket, boutons « Répéter », « Modifier », « Créer un paiement planifié »]
**Un achat avec ticket et photo.**

[Fiche du montant ventilé « Auchan » : ventilation — Courses 61 € et Produits ménagers 25 €]
**Un montant ventilé.** En bas — la ventilation.

- **En gros en haut** — le montant signé : moins — une dépense, plus — un revenu.
- **Bénéficiaire, catégorie, compte, date** — ce que vous avez noté dans le formulaire.
- **Reçu** — le reçu électronique. « Copier » met le code dans le presse-papiers pour le coller où il faut. Si c'est un lien, il y a aussi « Ouvrir » — le ticket s'ouvre dans le navigateur.
- **Tags** — les étiquettes de l'opération en pastilles, comme dans le fil : « #campagne ».
- **Photos** — les vignettes des photos et PDF joints. Touchez une photo pour l'ouvrir en plein écran.
- **Ventilation** — pour un montant ventilé : chaque partie avec sa catégorie, sa note et son montant.

##### Les boutons en bas

- **« Modifier »** — ouvrir cette opération dans le formulaire et changer ce que vous voulez.
- **« Répéter »** — une nouvelle opération avec le même bénéficiaire, la même catégorie et le même montant. Pratique pour ce que vous achetez souvent : café, transport, déjeuner.
- **« Créer un paiement planifié »** — faire de cette opération un paiement régulier : loyer, abonnement, crédit. Il ne reste qu'à choisir sa fréquence.

Un montant ventilé et un virement n'ont que « Modifier » : l'application ne les répète pas moitié par moitié.

## Rapports {#reports}

Dix rapports : où part l'argent, comment évoluent les dépenses, d'où vient le revenu et si le patrimoine grandit.

*L'onglet « Rapports » en bas de l'écran*

### Comment fonctionne l'onglet {#reports-how}

Un seul rapport à l'écran à la fois. En haut — quel rapport et sur quelle période, en dessous — le rapport lui-même. L'application se souvient du rapport et de la période : vous avez ouvert « Tendance des dépenses » sur six mois — la prochaine fois, c'est lui qui s'ouvrira.

[Rapport Où est parti l'argent pour septembre — novembre : anneau, total 5 893, liste des catégories]

1. **Nom du rapport** — touchez-le pour ouvrir la liste de tous les rapports (capture plus bas).

2. **Filtres** — l'entonnoir : période, catégories, comptes, tags. Le chiffre dessus indique combien de filtres sont actifs.

   *Comment ça marche:*
   Désactivez la catégorie « Loyer » — elle disparaît des rapports de dépenses, et le tableau des dépenses courantes devient plus lisible. Les filtres sont mémorisés pour chaque budget.

3. **Période** — les flèches « ‹ › » décalent la fenêtre d'un mois en arrière ou en avant, toucher l'intitulé ouvre le choix de la période : un mois, 3, 6, 12 mois, depuis le début de l'année ou votre propre intervalle.

   *Comment ça marche:*
   Vous vous êtes éloigné du mois en cours ? « Aujourd'hui » apparaît à côté, pour y revenir. Chaque rapport a sa propre période : les dépenses se regardent bien au mois, et la tendance à l'année.

4. **Affichage** — certains rapports ont plusieurs affichages : anneau, bulles, tuiles, tableau ou graphique. Le choix est mémorisé pour chaque rapport.

5. **Liste** — les mêmes chiffres en lignes : couleur, nom, montant, pourcentage. Touchez une ligne pour ouvrir l'écran de la catégorie ou du bénéficiaire.

[Fiche de choix du rapport : sections Dépenses, Mouvements d'argent, Patrimoine]
**Choix du rapport.** Trois sections — selon la question à laquelle répond le rapport.

[Fiche Filtres du rapport : Période, Catégories, Comptes, Tags]
**Filtres du rapport.** Chaque section se déplie.

### Dépenses {#reports-spending}

Où part l'argent et comment cela évolue.

#### Où est parti l'argent {#reports-r-spending}

Les dépenses de la période par catégorie — le rapport principal « où est passé tout ça ». Trois affichages de la même chose : choisissez celui qui vous parle le plus.

[Bulles : Loyer 3 600, 61 %, Courses 886,98, 15 %]
**Bulles.** La surface d'une bulle, c'est le montant.

[Tuiles : Loyer, Courses, Gros achats]
**Tuiles.** La surface d'une tuile, c'est le montant.

(•)
#### Anneau, bulles, tuiles

On passe de l'un à l'autre avec les icônes à droite au-dessus de l'image. L'anneau est familier, les bulles et les tuiles montrent mieux les petites catégories à côté des grandes.

(•)
#### Toucher

Touchez une part de l'anneau, une bulle ou une tuile — elle se met en évidence, et sa ligne s'allume dans la liste. Un second toucher ouvre l'écran de cette catégorie.

(•)
#### Ce qui est compté

Les dépenses moins les remboursements, sans les virements entre vos propres comptes. Sur la capture, 5 893 € sont partis en trois mois, dont 61 % pour le loyer.

*Comment ça marche:*
Vous voulez voir les dépenses courantes sans le loyer ni les charges ? Retirez-les dans le filtre « Catégories ».

#### Tendance des dépenses {#reports-r-trend}

Vos dépenses augmentent-elles ou diminuent-elles — mois par mois, avec la moyenne et une droite de tendance.

[Tendance des dépenses juin — novembre : barres par mois, courbes d'évolution, de tendance et de moyenne, Total sur la période 11 590,28]

(•)
#### En haut

Les dépenses moyennes par mois et leur direction : « augmentent ≈ 38,20 €/mois » ou « diminuent ».

(•)
#### Le graphique

Les barres — les dépenses du mois. La courbe à points — l'évolution, la droite — la tendance, les pointillés — la moyenne. Le mois en cours est pâle : il n'est pas terminé et n'entre ni dans la moyenne ni dans la tendance.

(•)
#### Le tableau « Par mois »

Chaque mois et son écart à la moyenne — en euros et en pourcentage. Touchez un mois sur le graphique — le montant exact apparaît au-dessus.

#### Exemple : les charges augmentent-elles {#reports-r-trend-example}

La tendance globale ne le dira pas : elle contient toutes les dépenses, et la hausse d'une catégorie se perd dans les autres. Ne gardez qu'une catégorie dans le rapport.

[Filtres du rapport : Catégories 1 sur 18, Tout désélectionner, seule Charges cochée]
**Le filtre.** Il reste une seule catégorie dans le rapport.

[Tendance des dépenses pour les charges seules : 97,27 €/mois, diminuent ≈ 3,87 €/mois, octobre −20 % par rapport à la moyenne]
**Le résultat.** La tendance des seules charges.

6. **« Catégories »** — dans « Tendance des dépenses », touchez l'entonnoir en haut à droite, puis « Catégories » : la liste de toutes les catégories avec des cases s'ouvre.

7. **« Tout désélectionner »** — décoche toutes les catégories d'un coup, au lieu d'une par une.

8. **La catégorie voulue** — cochez « Charges ». Sous « Catégories » s'affiche « 1 sur 18 ». Fermez la feuille : glissez-la vers le bas ou touchez à côté.

9. **Le chiffre sur l'entonnoir** — combien de filtres sont actifs. Tant qu'il est allumé, le rapport ne montre pas toutes les dépenses.

Le rapport ne parle plus que des charges : 97,27 € par mois en moyenne, les factures diminuent d'environ 3,87 € par mois, et octobre a été 20 % moins cher que la moyenne. Le filtre est mémorisé pour ce rapport : la prochaine fois, « Tendance des dépenses » s'ouvrira avec lui. Pour revenir à toutes les catégories — « Tout sélectionner » ou « Réinitialiser » dans la feuille des filtres.

#### Principaux bénéficiaires {#reports-r-payees}

Comme « Où est parti l'argent », mais par bénéficiaire : à qui vous payez le plus.

[Principaux bénéficiaires : anneau, Propriétaire 3 600, Carrefour, IKEA, Monoprix]

(•)
#### Les trois mêmes affichages

Anneau, bulles ou tuiles — ce rapport garde son propre choix.

(•)
#### Toucher

Une ligne ou une part — l'écran du bénéficiaire : toutes les dépenses chez lui, par catégorie et par mois (article [« Bénéficiaires et tags »](#payees-tags)).

#### Écart {#reports-r-deviation}

Où vous dépensez plus ou moins que d'habitude ce mois-ci — d'un seul coup d'œil. La comparaison se fait avec vos 12 mois précédant la période : le mois en cours est comparé aux mêmes jours des mois passés, du 1er à la date du jour, et une période de plusieurs mois à un mois habituel multiplié par leur nombre.

[Écart de novembre : tuiles par catégorie, la couleur indique plus ou moins que d'habitude]

(•)
#### Les tuiles

La taille d'une tuile — combien a été dépensé, la couleur — combien de plus (rougeâtre) ou de moins (verdâtre) que d'habitude, en trois paliers. Les grises — comme d'habitude, à 10 % près. Un contour sans remplissage — la catégorie apparaît pour la première fois.

(•)
#### « D'habitude »

Le milieu de vos mois précédents sur un an : un seul mois exceptionnellement cher ne le déplace pas. Pour le mois en cours — « d'habitude à cette date » : le 10 novembre est comparé aux mêmes jours des mois précédents.

(•)
#### La conclusion en mots

Sous les tuiles — « Plus que d'habitude », « Moins », « Nouveaux » avec les montants. « Catégories » ou « Bénéficiaires » — par les puces en haut.

#### Tags {#reports-r-tags}

Combien est parti sous chaque tag — mois par mois, en tableau ou en graphique.

[Rapport Tags : tableau par mois — campagne, Ensemble, Toutes les dépenses ; section Comptes à régler — moitié, à récupérer 43]

[Rapport Tags en graphique : Sur le graphique · 1 sur 4, Les plus importants de la période]

(•)
#### Le tableau

Une ligne par tag, une colonne par mois. « Ensemble » — tous les tags à la fois : une opération à deux tags n'y compte qu'une fois. « Toutes les dépenses » — pour comparer.

(•)
#### « Comptes à régler »

Les tags avec « Règlement » activé, dans un bloc à part : combien récupérer ou rendre.

(•)
#### Le graphique

Jusqu'à quatre tags en courbes par mois ; lesquels — se choisit au-dessus du graphique.

### Mouvements d'argent {#reports-flow}

D'où vient l'argent, où il part et ce qu'il en reste.

#### Flux d'argent {#reports-r-flow}

Tout le trajet de l'argent en une image : des sources de revenu — vers le budget — par groupe — par catégorie.

[Flux d'argent : Employeur → Budget ; en haut Revenu 8 400, Dépense 5 893, Net +2 507, Épargne 30 %]
**À gauche** — d'où vient l'argent.

[Flux d'argent, partie droite : groupes de dépenses → catégories, Reste]
**Faites glisser sur le côté** — groupes et catégories.

(•)
#### En haut

Revenu, dépense, « net » (ce qui reste) et taux d'épargne — quel pourcentage du revenu n'a pas été dépensé.

(•)
#### Les rubans

L'épaisseur d'un ruban, c'est le montant. Touchez un ruban — vous voyez le montant et le pourcentage. La bande verte « Reste » — l'argent qui n'est pas parti.

(•)
#### Comment regarder

L'image est plus large que l'écran : faites-la glisser du doigt sur le côté et vers le bas. L'en-tête avec les totaux défile avec l'image.

#### Revenus et dépenses {#reports-r-ie}

La comptabilité mois par mois : ce qui est entré, ce qui est sorti par groupe, ce qui reste.

[Revenus et dépenses en tableau : Revenus, Dépenses par groupe, Total, Taux d'épargne par mois]
**Tableau.**

[Revenus et dépenses en graphique : barres vertes et rouges par mois et courbe du total]
**Graphique.**

(•)
#### Le tableau

Les lignes — les revenus par source et les dépenses par groupe ; un groupe peut se déplier jusqu'aux catégories. En bas — « Total » et « Taux d’épargne » de chaque mois.

*Comment ça marche:*
Touchez un chiffre — la liste des opérations qui le composent s'ouvre. Le tableau est plus large que l'écran — faites-le glisser sur le côté.

(•)
#### Le graphique

Chaque mois a deux barres : verte vers le haut — l'argent entré, rouge vers le bas — l'argent sorti. Une fine courbe montre ce qui reste : au-dessus de zéro, le mois s'est fini dans le positif, en dessous — vous avez dépensé plus que ce qui est entré. Au-dessus du graphique, quatre chiffres pour toute la période : revenus, dépenses, total et taux d'épargne. Touchez un mois — les chiffres ne montrent que lui ; faites glisser le doigt — ils changent d'un mois à l'autre ; touchez de nouveau le même mois — retour à toute la période.

#### Âge de l'argent {#reports-r-aom}

Comment l'âge de l'argent a évolué mois par mois.

[Âge de l'argent : 52 jours à la fin de la période, courbe par mois]

(•)
#### Le chiffre en haut

L'âge à la fin de la période — le même chiffre que sur « Aperçu ».

(•)
#### À quoi ça sert

On voit si la réserve grandit. Une courbe qui monte — vous vous éloignez de « d'une paie à l'autre ». Ce que signifie le chiffre et comment le calculer — dans l'article [« Aperçu »](#overview), section « L'âge de l'argent en détail ».

### Patrimoine {#reports-capital}

Tout ce que vous possédez et tout ce que vous devez.

#### Patrimoine {#reports-r-networth}

La somme de tous les comptes moins les dettes — et son évolution.

[Patrimoine : 12 209,72 à la fin de la période, courbe par mois, tableau par mois avec flèches]

(•)
#### Ce qui est compté

Tous les comptes dans la devise principale — dans le budget comme hors budget (épargne, placement), moins les cartes de crédit et les crédits. Les comptes dans d'autres devises ne sont pas convertis et n'entrent pas dans la somme.

(•)
#### Le tableau

Le patrimoine à la fin de chaque mois, avec une flèche — en hausse ou en baisse.

#### Dette des cartes {#reports-r-carddebt}

Combien vous devez sur les cartes de crédit — et si la dette grossit.

[Dette des cartes : 890,63 à la fin de la période, la dette a augmenté de 563,13 sur la période]

(•)
#### Le chiffre en haut

La dette de toutes les cartes de crédit à la fin de la période et de combien elle a augmenté ou diminué sur la période.

(•)
#### Quand il apparaît

Le rapport n'est dans la liste que si vous avez une carte de crédit. Comment fonctionne une carte de crédit dans le budget — l'article [« Comment fonctionne le budget »](#start).

## Comptes {#accounts}

Tous les endroits où se trouve votre argent : cartes, portefeuille, épargne, cartes de crédit. Et combien il y a où en ce moment.

*L'onglet « Comptes » en bas de l'écran*

### Pourquoi cet écran {#accounts-why}

Ici, on voit où se trouve votre argent en ce moment : combien sur le compte courant, combien dans le portefeuille, combien vous devez sur la carte de crédit. Les enveloppes de l'écran « Budget » répondent à « pour quoi », les comptes à « où ».

##### Créer vos comptes

Tous les endroits où se trouve l'argent : les cartes de toutes vos banques, le portefeuille, l'épargne.

##### Rapprocher avec la banque

Une fois par semaine ou par mois, vérifier que l'application et la banque affichent la même chose.

##### Faire le ménage

Vous avez fermé une carte ? Masquez-la, l'historique reste.

### Ce qu'il y a où à l'écran {#accounts-screen}

Touchez une capture — elle s'ouvre en plein écran.

[Écran « Comptes » : sections « Dans le budget », « Cartes de crédit », « Hors budget » avec les comptes et les montants]

1. **Section** — une étagère de comptes d'un même genre. Touchez le nom pour replier la section.

   *Comment ça marche:*
   Il y a quatre sections, et c'est le type du compte qui décide où il va. « Dans le budget » — l'argent que vous répartissez entre les enveloppes : compte courant, espèces. « Cartes de crédit » — les cartes de crédit. « Hors budget » — ce que vous épargnez ou voulez simplement garder en vue : épargne, placement. « Dettes » — les crédits. Une section vide n'apparaît pas. En détail — la section [« Dans le budget ou hors budget »](#accounts-kinds).

2. **Total de la section** — combien il y a en tout sur les comptes de cette section.

   *Comment ça marche:*
   « Dans le budget » sur la capture — 4 712,98 € : le compte courant et les espèces ensemble, exactement l'argent que vous répartissez entre les enveloppes sur l'écran « Budget ». Les « Cartes de crédit » ont un total rouge — c'est une dette.

3. **Compte** — une ligne, c'est un portefeuille, une carte ou un placement. L'icône et la couleur viennent du type du compte.

   *Comment ça marche:*
   Touchez la ligne pour ouvrir l'écran du compte : toutes ses opérations, comme dans « Activité », mais pour ce seul compte. Appuyez longuement pour ouvrir le menu du compte ([plus bas](#accounts-hold)). Faites glisser à gauche ou à droite — « Modifier » ou « Supprimer ».

4. **Solde** — ce qu'il y a sur le compte en ce moment d'après vos saisies.

   *Comment ça marche:*
   C'est la somme de toutes les opérations du compte avec le solde initial. S'il ne correspond pas à la banque, une opération a été oubliée ou saisie deux fois. Comment la trouver — [« Rapprochement du solde »](#accounts-reconcile).

5. **« En attente »** — le total des opérations que la banque n'a pas encore passées.

   *Comment ça marche:*
   Le compte courant sur la capture affiche −47,55 € : vous avez déjà noté l'achat chez « Carrefour », mais il n'est pas encore à la banque. Quand il apparaît sur le relevé, cochez-le avec le rond dans la liste (sur « Activité » — repère 9), et la ligne disparaît. Tant qu'il y a de telles opérations, le solde de l'application et celui de l'appli bancaire diffèrent légitimement — exactement de ce montant. La marque est facultative. Si vous ne l'utilisez pas, toutes les opérations du compte arrivent ici — ce n'est pas une erreur, la ligne n'apprend simplement rien.

6. **« Cartes de crédit »** — une section à part pour les cartes de crédit. Le total rouge — ce que vous devez à la banque. Pour chaque carte de crédit, l'application crée elle-même une catégorie spéciale sur l'écran « Budget » — n'y touchez pas.

   *Comment ça marche:*
   Les dépenses à la carte de crédit réduisent les enveloppes comme celles à la carte de débit. Mais l'application met de côté elle-même l'argent du remboursement — dans le groupe « Paiements de cartes » de l'écran « Budget ». Payer la carte de crédit, c'est un virement du compte courant vers la carte.

   **La catégorie spéciale.** Quand vous créez un compte de type « Carte de crédit », l'application crée sur l'écran « Budget », dans le groupe « Paiements de cartes », une catégorie du même nom que la carte. Sous son nom figure « Dette de carte … ». L'application y met de côté l'argent du remboursement : 35 € dépensés à la carte de crédit — 35 € y sont passés depuis l'enveloppe de l'achat.

   **N'y touchez pas**, et l'application ne vous laissera pas faire : elle ne se renomme pas, ne se supprime pas, ne change pas de groupe, et on ne peut pas ajouter sa propre catégorie au groupe « Paiements de cartes ». C'est par elle que l'application compte la dette de cette carte précise. Vous renommez la carte sur l'écran « Comptes » — la catégorie se renomme toute seule. Vous changez le type de la carte — la catégorie disparaît, et son argent revient dans « non réparti ».

   Une seule action reste à vous : **la dette qui était sur la carte avant le début du suivi**. L'application ne la met pas de côté elle-même — pour la rembourser, mettez de l'argent dans cette catégorie, comme dans n'importe quelle enveloppe, petit à petit ou d'un coup.

7. **« Hors budget »** — les comptes dont l'argent n'est pas réparti entre les enveloppes : épargne, placement. En quoi ils diffèrent — [plus bas](#accounts-kinds).

8. **Le menu « ⋮ »** — ajouter un compte et régler l'affichage de la liste. Expliqué [plus bas](#accounts-menu).

### Dans le budget ou hors budget {#accounts-kinds}

La question principale pour chaque compte : répartissez-vous son argent entre les enveloppes ? La réponse décide où le compte apparaît sur cet écran et si son argent arrive sur l'écran « Budget ».

##### Dans le budget

Compte courant, espèces, carte de crédit — ce avec quoi vous dépensez chaque jour. Chaque euro ici doit être dans une enveloppe. Le salaire arrive sur le compte courant — il va dans « non réparti ».

##### Hors budget

Épargne, placement, investissements, crédit — ce que vous voulez voir, mais ne dépensez pas au quotidien. Cet argent n'a pas d'enveloppes. Vous virez de l'épargne vers le compte courant ? Cet argent apparaît dans « non réparti », et vous pouvez le distribuer.

Un nouveau compte va de lui-même dans sa section, selon son type : « Espèces » et « Compte bancaire » — dans « Dans le budget », « Carte de crédit » — dans « Cartes de crédit », « Prêt » — dans « Dettes », « Suivi seul » — dans « Hors budget ». Les crédits et « Suivi seul » n'ont pas d'enveloppes.

### Le menu « ⋮ » {#accounts-menu}

Un nouveau compte et l'affichage de la liste.

[Le menu « ⋮ » de l'écran « Comptes » : Ajouter un compte, Soldes des comptes, Comptes masqués, Astuces, Centre d'aide]

(F)
#### Ajouter un compte

Une nouvelle carte, un portefeuille ou un placement.

*Comment ça marche:*
1. Touchez « Ajouter un compte ».
2. Choisissez le type : « Espèces », « Compte bancaire », « Carte de crédit », « Prêt » ou « Suivi seul ». Le type décide de la section et de l'icône.
3. Saisissez un nom — comme vous appelez vous-même ce compte : « Carte BNP », « Portefeuille ».
4. Saisissez ce qu'il y a sur le compte aujourd'hui — le montant de l'appli bancaire ou du portefeuille.
5. Enregistrez. Le montant devient le solde initial. Pour les espèces et un compte bancaire, il arrive aussitôt dans « non réparti » sur l'écran « Budget » — distribuez-le entre les enveloppes.

(G)
#### Soldes des comptes

Afficher le solde après chaque opération — pour tous les comptes d'un coup.

*Comment ça marche:*
La même chose que « Solde du compte » dans le menu d'un compte, mais pour tous à la fois. **Juste après l'installation :** désactivé.

(H)
#### Comptes masqués

Afficher les comptes masqués en bas de la liste.

*Comment ça marche:*
Entre parenthèses — combien il y en a. Tant qu'il n'y a pas de compte masqué, l'élément est grisé, comme sur la capture. Chaque compte masqué de la liste a un bouton « Restaurer ».

(I)
#### Astuces

Toutes les astuces de cet écran au même endroit.

(J)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

### Ce qu'on peut faire avec une ligne {#accounts-gestures}

La ligne d'un compte n'a pas de boutons. Touchez-la, appuyez longuement ou faites-la glisser sur le côté.

| Faire | Résultat |
|---|---|
| Toucher | L'écran du compte : toutes ses opérations, avec en haut le solde et « En attente ». |
| Appuyer longuement | Le menu du compte — [expliqué plus bas](#accounts-hold). |
| Faire glisser vers la gauche | « Modifier » — la fiche de modification du compte : nom, type, apparence. |
| Faire glisser vers la droite | « Supprimer ». Si le compte a eu des opérations, l'application propose « Masquer ». |

#### Le menu du compte — appui long {#accounts-hold}

La ligne d'un compte n'a pas son propre « ⋮ », pour ne pas prendre de place au nom. Le menu s'ouvre par un appui long, là où est le doigt. Les mêmes éléments sont dans le « ⋮ » de l'écran du compte lui-même.

[Menu du compte par appui long : Rapprochement du solde, Solde du compte, Masquer le compte, Modifier le compte, Supprimer le compte]

(A)
#### Rapprochement du solde

Vérifier que l'application et la banque affichent la même chose.

*Comment ça marche:*
1. Ouvrez l'appli bancaire et regardez combien il y a sur le compte.
2. Dans « Comptes », appuyez longuement sur ce compte et choisissez « Rapprochement du solde ».
3. La fenêtre indique « Dans l'application : … ». En dessous, dans le champ « Solde réel à la banque », saisissez le montant de la banque et touchez « Rapprocher ».
4. Ça correspond — l'application dit « Solde rapproché ✓ ». Toutes les opérations du compte jusqu'à aujourd'hui reçoivent un cadenas, et sous le compte apparaît « rapproché » avec la date.
5. Ça ne correspond pas — la fenêtre « Le solde ne correspond pas » montre l'écart. Cherchez d'abord une opération oubliée ou en trop. Rien trouvé ? Touchez « Créer un ajustement » : l'application ajoute une opération de cet écart, et vous indiquez vous-même la catégorie, le bénéficiaire et la note.

Les opérations avec un cadenas sont considérées comme vérifiées : les modifier demande une confirmation, pour que ce qui est rapproché ne se décale pas par mégarde.

(B)
#### Solde du compte

Afficher sous chaque opération de ce compte ce qu'il contenait après elle.

*Comment ça marche:*
Pratique pour trouver où le solde s'est écarté du relevé bancaire : on parcourt les opérations et on compare les soldes ligne par ligne. S'active pour ce seul compte ; pour tous à la fois — « Soldes des comptes » dans le menu « ⋮ ».

(C)
#### Masquer le compte

Retirer de la liste un compte que vous n'utilisez plus.

*Comment ça marche:*
Vous avez fermé une carte ? Impossible de la supprimer, elle a un historique. Un compte masqué disparaît de la liste, mais ses opérations restent dans l'historique et les rapports. Pour le faire revenir : « ⋮ » → « Comptes masqués » — ils apparaissent en bas de la liste avec un bouton « Restaurer ».

(D)
#### Modifier le compte

Changer le nom, le type, l'icône et la couleur du compte, et pour un compte dans une autre devise — la devise.

*Comment ça marche:*
La même fiche s'ouvre en faisant glisser la ligne vers la gauche. Si le compte a un solde initial, la fiche a une ligne « Solde initial » avec la date et le montant — touchez-la pour ouvrir cette opération elle-même, et corrigez-la comme n'importe quelle autre.

(E)
#### Supprimer le compte

Seulement un compte sans aucune opération.

*Comment ça marche:*
Si le compte a déjà des opérations, l'application dit combien et propose de le masquer au lieu de le supprimer — les rapports et les soldes ont besoin de l'historique. Même chose en faisant glisser la ligne vers la droite.

## Formulaire d'opération {#entry}

Comment noter une dépense, un revenu, un virement ou un achat réparti sur plusieurs catégories — et ce que fait chaque champ.

*« + Opération » sur n'importe quel onglet*

### Pourquoi cet écran {#entry-why}

On y note tout ce qui arrive à l'argent : un achat, un salaire, un virement d'une carte à l'autre. Plus la saisie est rapide, plus le budget est honnête — l'essentiel du formulaire se fait donc à la caisse, en quelques touches.

##### L'ouvrir

« + Opération » sur n'importe quel onglet. Depuis l'écran d'un compte ou d'une catégorie, le formulaire s'ouvre avec eux déjà remplis. Encore plus vite — un widget sur l'écran d'accueil.

##### Le minimum

Montant, catégorie et compte. Le bénéficiaire, la note et le reste — si vous voulez.

##### Pas seulement à la main

La caméra au-dessus du « + » lit le QR code du ticket, le micro une phrase comme « café 6 Loisirs et hobbies ». Les deux boutons ouvrent ce même formulaire, déjà rempli.

### Ce qu'il y a où à l'écran {#entry-screen}

Voici le formulaire juste après avoir touché « + ». Le pavé du montant s'ouvre d'emblée : on commence presque toujours par le montant. Touchez une capture — elle s'ouvre en plein écran.

[Nouvelle opération : sélecteur Sortant et Entrant, montant 0,00, champs Bénéficiaire, Catégorie, Compte, Date, pavé du montant]

1. **Fermer** — la croix. Si quelque chose est déjà saisi, l'application demande « Quitter sans enregistrer ? » — « Rester » ou « Ne pas enregistrer ».

2. **« Sortant » / « Entrant »** — une dépense ou un revenu. Le choix décide du signe du montant et de la couleur de l'en-tête : rougeâtre — une dépense, vert — un revenu, gris — un virement.

   *Comment ça marche:*
   Vous choisissez « Entrant » et un bénéficiaire — l'application met d'elle-même la catégorie de revenu de ce mois : ainsi le salaire arrive aussitôt dans « non réparti » sur l'écran « Budget ».

   Touchez le champ « Catégorie » d'un revenu — la fiche « Où placer le revenu » s'ouvre : « Revenu pour novembre », « Revenu pour décembre » ou « Vers une catégorie de dépenses… » (un remboursement, votre part d'un achat commun). Le salaire s'enregistre pour le mois suivant quand l'âge de l'argent atteint 30 jours — pourquoi et ce que ça change est expliqué dans l'article [« Aperçu »](#overview), section « L'âge de l'argent en détail ».

3. **Montant** — se tape sur le pavé en bas. Touchez le montant si le pavé est caché — il revient.

4. **Bénéficiaire** — à qui vous avez payé ou de qui vient l'argent : « Carrefour », « Employeur ». Ici aussi — les virements entre vos comptes.

   *Comment ça marche:*
   Choisissez un bénéficiaire déjà noté — l'application remplit la catégorie et la note comme la dernière fois. Seulement dans les champs vides : si vous avez déjà choisi une catégorie, elle reste. Un nouveau bénéficiaire se crée par la recherche : tapez le nom et choisissez « Créer « … » ». Pour retirer le bénéficiaire de l'opération — la croix à droite du champ. En détail — [plus bas](#entry-pickers).

5. **Catégorie** — l'enveloppe d'où l'argent est parti. Sans elle, la dépense ne réduit aucune ligne de l'écran « Budget ».

6. **Compte** — d'où l'argent est parti ou où il est arrivé : compte courant, portefeuille, carte de crédit. L'icône et la couleur sont celles de la liste des comptes.

7. **Date** — aujourd'hui, si l'on n'y touche pas. Touchez — un calendrier s'ouvre.

   *Comment ça marche:*
   Une date à plus d'un mois — l'application redemande : « L'opération sera enregistrée au …, plus d'un mois à l'avance. L'enregistrer ? ». Cela attrape une faute de frappe dans l'année.

8. **Pavé du montant** — le sien, avec calculatrice. Expliqué [plus bas](#entry-keypad).

### Le pavé du montant {#entry-keypad}

Le clavier habituel du téléphone est peu pratique pour les montants : petits chiffres, pas d'opérations, la virgule quelque part sur un deuxième écran. Le formulaire a le sien — grand et avec calculatrice.

(+)
#### Il calcule tout seul

Une addition pour deux, deux achats sur une carte — calculez directement dans le champ.

*Comment ça marche:*
Tapez 120, touchez « + », tapez 35 et touchez « = » — le montant devient 155. « + », « − », « × » et « ÷ » fonctionnent. L'opération choisie reste en surbrillance pendant que vous tapez le second nombre.

(,)
#### Virgule ou centimes

La façon de taper les décimales, c'est à vous de choisir.

*Comment ça marche:*
**Avec virgule** — comme sur une calculatrice : 12, virgule, 50 — c'est 12,50. Pendant que vous tapez les centimes, la touche virgule est en surbrillance.

**Depuis les centimes** — comme sur un terminal de paiement : 1250 — c'est 12,50. À la place de la virgule, le pavé a une touche « 00 » : « 3 », « 00 », « 00 » — c'est 300,00.

Cela se règle dans « Paramètres → Langue et formats → Saisie du montant ». **Juste après l'installation :** avec virgule.

(⌫)
#### Effacer

Toucher — efface le dernier chiffre. Appuyer longuement — efface tout d'un coup, avec l'opération commencée.

(✓)
#### « Valider »

Cache le pavé, et en dessous apparaissent les autres champs et le bouton « Enregistrer ». Le bouton Retour du système fait la même chose.

(✋)
#### Pour quelle main

Les chiffres sous le pouce.

*Comment ça marche:*
« Pour la main droite » — les chiffres à droite, les opérations et « Valider » à gauche (comme sur la capture). « Pour la main gauche » — l'inverse. « Paramètres → Langue et formats → Pavé du montant ». **Juste après l'installation :** pour la main droite.

### Choisir le bénéficiaire et la catégorie {#entry-pickers}

Les deux champs ouvrent une liste en bas de l'écran. En haut — une recherche : tapez quelques lettres, et la liste se resserre.

[Liste des bénéficiaires : recherche, section Virements avec les comptes et leurs soldes, Hors budget, bénéficiaires avec une lettre à gauche]
**Bénéficiaire.** D'abord vos comptes pour un virement, ensuite les bénéficiaires.

[Liste des catégories : recherche, Ventiler le montant, Fréquemment utilisés, groupes de catégories]
**Catégorie.** « Ventiler le montant », les fréquentes, puis tous les groupes.

(A)
#### Les virements — dans la liste des bénéficiaires

L'argent est parti vers votre propre compte ? Choisissez-le dans la section « Virements » : « Virement : Visa ».

*Comment ça marche:*
Sous le nom du compte, son solde, pour ne pas se tromper. Les comptes hors budget (épargne, placement) ont leur propre section plus bas. Comment fonctionne un virement — [plus bas](#entry-transfer).

(B)
#### Un nouveau bénéficiaire

Il n'est pas dans la liste ? Tapez le nom dans la recherche et choisissez « Créer « … » ».

*Comment ça marche:*
Inutile de créer les bénéficiaires à l'avance : la liste se remplit d'elle-même au fil des saisies. Pour renommer ou supprimer — « Paramètres → Bénéficiaires ».

(C)
#### « Fréquemment utilisés »

Des puces avec les catégories que vous choisissez le plus souvent. Une touche, c'est fait.

*Comment ça marche:*
La recherche comprend aussi le nom du groupe. Introuvable ? Choisissez « Créer « … » dans le groupe » : la nouvelle catégorie apparaît aussitôt, aussi sur l'écran « Budget ».

(D)
#### « Ventiler le montant »

Un achat — plusieurs catégories. Expliqué [plus bas](#entry-split).

### Une opération remplie {#entry-filled}

L'achat chez « Carrefour » de l'article « Activité » : avec un tag, un reçu électronique et une photo. Le pavé est caché, « Supplémentaire » est déplié — tous les champs du formulaire sont visibles.

[Modification de l'opération Carrefour 47,55 : champs, Supplémentaire avec le tag campagne, reçu, photo, Débité, Drapeau, Supprimer l'opération, Enregistrer]

9. **Note** — ce que vous avez acheté ou pourquoi : « Lait, œufs, pain ». Elle apparaît en italique dans le fil et se retrouve par la recherche.

   *Comment ça marche:*
   Le montant n'est pas obligatoire : une saisie sans montant est une note sur un événement. Par exemple : vidange à 85 000 km, clés de la maison de campagne données à André. Il lui faut quand même un compte et une catégorie. Au premier appui sur « Enregistrer », l'appli répond « Saisissez un montant », au deuxième « Saisissez un montant. Touchez encore et ce sera enregistré sans montant », et le troisième enregistre la saisie.

   Ensuite, la recherche dans « Activité » la retrouve : elle cherche aussi dans le texte de la note — tapez par exemple vidange.

10. **« Supplémentaire »** — les champs rares dans une seule carte. Touchez l'en-tête — la carte se replie ou se déplie.

    *Comment ça marche:*
    Une carte repliée tient sur une ligne, avec à droite les icônes des champs cachés : tag, reçu, photo, « Débité », drapeau. Un champ rempli reste toujours visible, même dans une carte repliée. L'application se souvient de votre choix. **Juste après l'installation :** repliée.

11. **Tags** — des étiquettes par-dessus la catégorie : « #campagne », « #vacances ». La fiche de choix — [plus bas](#entry-tags).

12. **Reçu électronique** — le code ou le lien du ticket. L'icône de scanner à droite pointe la caméra sur un QR code, « + » ajoute un autre ticket.

    *Comment ça marche:*
    Si l'application connaît les tickets de votre pays, elle compare le ticket au formulaire : elle inscrit le montant s'il manque, et si les montants diffèrent, elle le signale par une ligne sous le champ et propose « Corriger ». Le ticket ne change jamais la date. Plus sur les tickets et les photos — l'article [« Activité »](#transactions).

13. **Photos et PDF** — « Ajouter » — photographier un ticket, choisir une photo dans la galerie ou un PDF. La croix sur une vignette — retirer.

    *Comment ça marche:*
    N'en abusez pas : chaque photo entre dans toutes les sauvegardes et, si c'est activé, dans le cloud. En détail — l'article [« Activité »](#transactions).

14. **« Débité »** — cochez quand l'opération apparaît sur le relevé bancaire. Le rond sur la ligne du fil fait pareil.

    *Comment ça marche:*
    La marque est facultative : elle n'influe pas sur le budget, elle aide seulement à rapprocher le compte avec la banque. Si vous ne l'avez jamais utilisée — passez simplement, des ronds vides, c'est normal.

15. **Drapeau** — une marque colorée « à revoir » : à vérifier, remboursement attendu, à discuter. Un petit drapeau apparaît sur la ligne du fil.

16. **Supprimer l'opération** — seulement pour une opération déjà enregistrée. L'application redemande.

17. **« Enregistrer »** — noter. Sans compte ni catégorie, l'application n'enregistre pas et indique quoi choisir. Un montant nul est permis : une telle entrée devient un pense-bête dans le fil.

### Un virement entre vos comptes {#entry-transfer}

Retrait d'espèces, remboursement de la carte de crédit, mise sur un placement — ce n'est pas une dépense, c'est de l'argent qui change de place. Notez ces opérations comme des virements, sinon le budget les comptera comme des dépenses.

[Virement de 300 noté comme sortie du Compte courant : Sortant, Virement : Visa, compte Compte courant, lueur rouge]
**Façon 1.** Sortie du Compte courant : « Sortant ».

[Le même virement de 300 noté comme arrivée sur la Visa : Entrant, Virement : Compte courant, compte Visa, lueur verte]
**Façon 2.** Arrivée sur la Visa : « Entrant ».

(E)
#### Vers où — dans le champ « Bénéficiaire »

Choisissez un compte dans la section « Virements ». L'en-tête du formulaire devient gris.

*Comment ça marche:*
La capture montre un paiement de carte de crédit : 300 € du « Compte courant » vers la « Visa ». Deux lignes apparaissent dans le fil : un moins sur le compte courant et un plus sur la carte de crédit.

(F)
#### « Aucune catégorie nécessaire »

L'argent est toujours à vous — il a simplement changé de place. Les enveloppes de l'écran « Budget » ne bougent pas.

*Comment ça marche:*
L'exception — un virement entre un compte du budget et un compte hors budget (vers l'épargne, par exemple). L'argent sort alors des enveloppes ou y entre, et l'application demande une catégorie.

(G)
#### « Sortant » et « Entrant » pour un virement

Le sens se lit du point de vue du compte du champ « Compte ».

*Comment ça marche:*
**« Sortant »** — l'argent quitte ce compte vers le compte du champ « Bénéficiaire ». Derrière le montant luit doucement un cercle rouge. **« Entrant »** — l'argent arrive sur ce compte depuis celui du « Bénéficiaire ». Le cercle est vert. L'en-tête d'un virement est gris dans les deux cas.

(!)
#### Un virement — deux façons de le noter

Un paiement de 300 € du « Compte courant » vers la « Visa » peut se noter de n'importe quel côté. Le résultat est le même.

*Comment ça marche:*
1. **Sortie du compte courant** (capture de gauche) : « Compte » — Compte courant, « Bénéficiaire » — « Virement : Visa », « Sortant », lueur rouge.
2. **Arrivée sur la carte de crédit** (capture de droite) : « Compte » — Visa, « Bénéficiaire » — « Virement : Compte courant », « Entrant », lueur verte.

Dans les deux cas, les deux mêmes lignes apparaissent dans le fil : −300 sur le Compte courant et +300 sur la Visa, toutes deux avec l'icône de virement. Choisissez ce qui vous arrange : vous pointez le relevé du compte courant — notez la sortie ; l'appli bancaire indique « paiement de la carte reçu » — notez l'arrivée sur la carte. Depuis l'écran d'un compte, le formulaire s'ouvre de lui-même avec ce compte.

**Notez un virement une seule fois.** L'application ajoute elle-même l'autre côté. Notez la sortie du compte courant puis aussi l'arrivée sur la carte, et le virement est doublé : 600 € sortent du compte courant, et 600 € arrivent sur la carte au lieu de 300.

(H)
#### Des devises différentes

D'une carte en euros vers un compte en dollars — le formulaire propose lui-même la conversion.

*Comment ça marche:*
Sous le bénéficiaire apparaissent les champs « Crédité » — ce qui arrive sur le second compte — et « Taux », avec un bouton qui inverse le sens du taux. Vous changez le montant — « Crédité » se recalcule, vous changez le taux — pareil ; vous saisissez « Crédité » — le taux se recalcule.

### Un montant ventilé {#entry-split}

Un achat — plusieurs enveloppes : chez « Auchan », vous avez pris de la nourriture pour 61 € et des produits ménagers pour 25 €. Notez-le en une seule opération, mais dans deux catégories — alors les deux enveloppes diminuent honnêtement.

[Montant ventilé Auchan 86 : Ventilation, Total, Courses 61, Produits ménagers 25, Ajouter une partie]

(I)
#### « Ventilation »

Apparaît à la place du champ « Catégorie » quand vous avez choisi « Ventiler le montant ». À côté — le « Total » des parties.

(J)
#### Une partie

Sa propre catégorie, son montant et sa note. Touchez la catégorie ou le montant — seule cette partie change.

*Comment ça marche:*
Une partie peut aussi être un virement : vous avez demandé des espèces à la caisse — 70 € dans « Courses » et 30 € en « Virement : Espèces ». Un exemple chiffré — dans l'article [« Activité »](#transactions).

(K)
#### « + tag »

Un tag pour cette seule partie. Un tag du champ « Tags » du formulaire s'applique à tout l'achat.

(L)
#### « Ajouter une partie »

Une ligne de plus. Une partie en trop se retire avec la croix à sa droite.

(M)
#### « Annuler »

Revenir à une seule catégorie pour tout le montant.

Les parties ne correspondent pas au total ? Expliqué [plus bas](#entry-split-mismatch).

#### Les parties ne correspondent pas au montant {#entry-split-mismatch}

Une erreur dans une partie ? L'application ne corrige pas en silence : elle montre l'écart sous les parties et propose comment le combler.

[Parties 61 et 35 pour un total de 86 : La ventilation dépasse le total de 10, bouton Augmenter à 96]
**Les parties dépassent.** « Augmenter à 96,00 € ».

[Parties 61 et 15 pour un total de 86 : Reste à ventiler 10, bouton Réduire à 76]
**Les parties sont inférieures.** « Réduire à 76,00 € ».

(N)
#### « La ventilation dépasse le total de … » / « Reste à ventiler : … »

L'écart entre les parties et le total. La ligne apparaît d'elle-même sous les parties pendant la saisie.

*Comment ça marche:*
Pendant la saisie, la ligne est jaune — c'est une indication. Touchez « Enregistrer » avec des montants qui ne tombent pas juste — la ligne devient rouge, et le formulaire n'enregistre pas l'opération tant que les montants ne correspondent pas. Le même bouton de correction figure aussi dans le message en bas de l'écran.

(O)
#### « Augmenter à … » / « Réduire à … »

Une touche — et le total devient égal à la somme des parties.

*Comment ça marche:*
À gauche : dans la seconde partie, vous avez tapé 35 au lieu de 25. Les parties font 96 €, le total 86 € : « La ventilation dépasse le total de 10,00 € », le bouton « Augmenter à 96,00 € » ajoute ces 10 au total. À droite, l'inverse : 15 au lieu de 25 — « Reste à ventiler : 10,00 € », le bouton « Réduire à 76,00 € » retire 10.

**Le bouton corrige le total, pas la partie.** Si le total est juste — comme sur le ticket — et que l'erreur est dans une partie, corrigez la partie elle-même : touchez son montant et tapez le bon.

### Remboursement d'un article {#entry-refund}

Vous avez rapporté du lait périmé, rendu une veste qui ne vous allait pas — l'argent est revenu. Ce n'est pas un revenu : notez-le comme un remboursement dans la catégorie d'où vous aviez payé.

[Fiche Où placer le revenu : Revenu pour novembre, Revenu pour décembre, Vers une catégorie de dépenses]
**Étape 3.** Le champ « Catégorie » affiche « Revenu pour novembre » — touchez-le et choisissez « Vers une catégorie de dépenses… ».

[Remboursement de 3,00 de Carrefour : Entrant, catégorie Courses, compte Compte courant, note Remboursement : lait périmé]
**C'est fait.** « Entrant », le magasin, la catégorie de l'achat.

(P)
#### Comment le noter

Un remboursement, c'est de l'argent qui revient du magasin dans la catégorie d'où il est parti.

*Comment ça marche:*
1. « + Opération » → « Entrant ».
2. Le montant du remboursement. Bénéficiaire — le même magasin. Compte — là où l'argent a été remboursé, en général la même carte.
3. Par habitude, l'application met « Revenu pour novembre » dans « Catégorie » (capture de gauche). Touchez le champ « Catégorie » → « Vers une catégorie de dépenses… » → choisissez la catégorie de l'achat : « Courses ».
4. Note — si vous voulez : « Remboursement : lait périmé ». Enregistrez.

(Q)
#### Ce qui change

L'enveloppe « Courses » est renflouée, « non réparti » non.

*Comment ça marche:*
- Sur l'écran « Budget », « dépensé » des « Courses » diminue de 3 €, le solde augmente d'autant.
- « Non réparti » ne change pas : vous n'avez rien gagné, on vous a rendu votre argent.
- Sur les écrans de la catégorie et du magasin, les dépenses sont comptées après remboursements.
- Dans le calendrier d'« Aperçu », un jour avec seulement des remboursements est marqué d'un anneau vide.
- Remboursé sur une carte de crédit ? La dette de la carte diminue, et avec elle la somme mise de côté pour la rembourser dans « Paiements de cartes ».

(R)
#### Et si on le notait comme un revenu

Le budget mentirait deux fois.

*Comment ça marche:*
« Revenu pour novembre » ajouterait 3 € à « non réparti », comme si vous les aviez gagnés, et « Courses » garderait une dépense qui n'existe pas vraiment. Le rapport « Revenus et dépenses » afficherait des revenus et des dépenses plus élevés que la réalité.

(S)
#### Pourquoi ne pas supprimer l'achat

On peut le supprimer si tout a été rendu le jour même.

*Comment ça marche:*
Si l'achat est déjà passé en banque ou rapproché, ou si seule une partie a été rendue, notez le remboursement comme une opération à part. Le relevé bancaire aura deux lignes, l'achat et le remboursement — que l'application en ait deux aussi : le rapprochement tombera juste.

L'argent qu'un ami vous rend pour sa moitié d'un achat commun se note de la même façon : « Entrant », de l'ami, dans la catégorie de l'achat.

### Tags {#entry-tags}

Le champ « Tags » de « Supplémentaire » ouvre une fiche de choix.

[Fiche Tags : recherche Trouver ou créer un tag, Récents : campagne coché, moitié]

1. Cochez les tags voulus — les récents sont en haut, avec à droite le nombre d'opérations qui les portent.
2. Il n'existe pas ? Tapez son nom dans la ligne « Trouver ou créer un tag » et choisissez « Créer le tag « … » ».
3. Touchez « Terminé ».

Le choix n'est pas perdu même si l'on fait glisser la fiche vers le bas. À quoi servent les tags et où voir les totaux — dans l'article [« Activité »](#transactions).

### Pas le temps — « À trier » {#entry-inbox}

À la caisse, on n'a parfois qu'une seconde : le montant est retenu, mais pas le temps de choisir la catégorie et le compte.

Activez « Paramètres → Données → À trier ». Désormais, si le formulaire a un montant mais pas de catégorie ou de compte, le bouton s'appelle **« À trier »** au lieu d'« Enregistrer », et sur le pavé du montant il enregistre directement. L'opération est notée, mais avec la mention « Trier ».

Tant qu'il y a de telles opérations, un bandeau reste au-dessus de la navigation, et un avertissement sur « Aperçu ». Touchez-le — le formulaire les ouvre une par une, dans l'ordre où vous les avez notées : pratique pour se remémorer la journée de magasin en magasin. **Juste après l'installation :** désactivé.

Particulièrement pratique avec la voix : vous dites la dépense à la caisse — ce que la voix n'a pas reconnu, vous le triez à la maison. Le scénario — dans l'article [« Saisie vocale »](#voice-inbox).

### Ce qu'on peut faire dans le formulaire {#entry-gestures}

Un petit aide-mémoire des gestes et boutons.

| Faire | Résultat |
|---|---|
| Toucher le montant | Faire revenir le pavé du montant. |
| Le bouton Retour du téléphone | Cache d'abord le pavé, la seconde fois quitte (en demandant si quelque chose n'est pas enregistré). |
| Appuyer longuement sur ⌫ | Effacer tout le montant. |
| La croix du champ « Bénéficiaire » | Retirer le bénéficiaire de l'opération. |
| Toucher l'en-tête « Supplémentaire » | Replier ou déplier les champs rares. |
| La croix sur une vignette de photo | Retirer la photo ou le PDF de l'opération. |

## Saisie vocale {#voice}

Dites la dépense en une phrase — « Carrefour 70 Courses » — et l'application ouvre le formulaire déjà rempli. Vérifiez et enregistrez.

*le bouton vert avec un micro au-dessus de « + Opération »*

### Pourquoi {#voice-why}

À la caisse, on a les mains prises, mais il faut noter la dépense tout de suite, tant qu'on s'en souvient. Taper le montant, choisir le bénéficiaire, la catégorie et le compte — cinq touches. À la voix — une phrase.

La voix n'enregistre rien d'elle-même. Elle remplit le formulaire d'opération, et c'est vous qui l'enregistrez — ainsi, une erreur de reconnaissance n'entre jamais dans le budget sans que vous la voyiez.

Le bouton avec le micro est vert, au-dessus de « + Opération » sur « Aperçu », dans « Activité », sur l'écran d'un compte et d'une catégorie.

### La première fois {#voice-first}

[Fiche de saisie vocale : micro, Dites le montant et vos propres noms : catégorie, magasin, compte ; Par exemple : « 70 Courses » ; Ce qui est reconnu ira dans le formulaire — vous pourrez vérifier et corriger ; boutons Annuler et Parler]

1. **Que dire** — le montant et vos propres noms : catégorie, magasin, compte.

2. **Exemple** — une phrase tirée de votre propre budget : votre catégorie la plus fréquente et un montant habituel. Répétez-la — et ça marchera.

3. **Où ça va** — dans le formulaire d'opération, où tout peut être vérifié et corrigé.

4. **« Parler »** — active le micro. La première fois, la fiche ne l'active pas toute seule : lisez d'abord quoi dire. Ensuite, le micro s'active dès que vous ouvrez la fiche.

L'application demande l'autorisation du micro — accordez-la. Parlez, puis touchez « Terminé » ou taisez-vous simplement : la phrase reconnue apparaît sur la fiche, et le formulaire s'ouvre.

### Que dire {#voice-say}

Commencez par le montant et la catégorie, puis ajoutez le reste. L'exemple sous le micro grandit avec vous : deux phrases réussies d'affilée — et il montre la marche suivante.

Les marches sur le budget de démonstration :

| Phrase | Ce qui se remplit |
|---|---|
| « 70 Courses » | Le montant et la catégorie. |
| « Carrefour 70 Courses » | Plus le bénéficiaire. |
| « Carrefour 70 Courses note Lessive et essuie-tout » | Plus une note : tout ce qui suit le mot « note ». |
| « Carrefour 70 Courses du compte Compte courant » | Plus le compte avec lequel vous avez payé. |
| « virement 100 du compte Compte courant au compte Visa » | Un virement entre comptes. |
| « revenu 1400 Employeur au compte Compte courant » | Un revenu et le compte où l'argent est arrivé. |

[Formulaire Ajouter une opération après la phrase « Carrefour 70 Courses du compte Compte courant » : Sortant, 70,00, Bénéficiaire Carrefour, Catégorie Courses, Compte Compte courant, Date]

La capture montre le formulaire après la phrase « Carrefour 70 Courses du compte Compte courant ». La date est celle du jour. Vérifiez et touchez « Valider », puis « Enregistrer ».

##### Les mots que l'application comprend

- **« virement »** — un virement entre comptes ; **« revenu »** — de l'argent est arrivé. Sans ces mots, la phrase est une dépense.
- **« du compte … »**, **« depuis … »** ou **« de … »** — depuis quel compte ; **« au compte … »** ou **« à … »** — vers quel compte. Le mot « compte » peut être omis.
- **« note »** — tout ce qui suit ce mot devient la note. Dites-la donc en dernier.
- **« catégorie … »** — si le nom d'une catégorie ressemble à celui d'un magasin et que l'application les confond.

##### Le montant

En chiffres ou en mots — la reconnaissance transforme d'elle-même « deux cent cinquante » en 250. Les centimes après une virgule : « 25,50 ». S'il y a plusieurs nombres dans la phrase, le montant est le premier.

### Comment les noms sont reconnus {#voice-names}

L'application cherche dans la phrase **vos** noms : bénéficiaires, catégories et comptes de ce budget. Elle n'en crée pas de nouveaux — si vous nommez un magasin qui n'est pas encore dans le budget, le champ « Bénéficiaire » reste vide.

##### Le bénéficiaire entraîne la catégorie

Le bénéficiaire est reconnu — la catégorie et la note se remplissent d'après ses opérations précédentes, comme si vous l'aviez choisi à la main dans le formulaire. Il suffit de dire « Carrefour 70 » — la catégorie « Courses » se met toute seule.

##### Combien de mots il faut

Pour un bénéficiaire, un mot du nom suffit. Une catégorie de plusieurs mots doit être nommée par au moins deux d'entre eux — pour que « Santé et médecine » ne soit pas confondue avec « Santé ». Un nom dit en entier est toujours reconnu.

*Pourquoi l'exemple vient de votre budget:*
Un exemple aux noms inventés (« Crédit Agricole 100 courses Leroy Merlin ») apprendrait une phrase qui n'existe pas dans votre budget : en la répétant, vous obtiendriez un formulaire vide. L'exemple est donc toujours construit à partir de vos données — votre achat le plus fréquent, vos comptes, une note récente.

### Pas tout compris — « À trier » {#voice-inbox}

La voix a reconnu le montant, mais pas la catégorie ni le magasin. Pas le temps de trier à la caisse, et vous ne voulez pas perdre la dépense. C'est à cela que sert « À trier ».

##### Noter maintenant, trier à la maison

1. Activez une fois « Paramètres → Données → À trier ».
2. À la caisse, dites la phrase comme d'habitude. À la fin, ajoutez « note » et quelques mots sur l'achat — par exemple « note pharmacie du quartier ». La note est gardée même si le magasin et la catégorie n'ont pas été reconnus.
3. Il manque quelque chose dans le formulaire ? Au lieu d'« Enregistrer », le bouton devient « À trier », sur le pavé du montant aussi. Touchez — la dépense est notée avec la mention « Trier ».
4. À la maison, touchez le bandeau au-dessus de la navigation ou l'avertissement sur « Aperçu ». Le formulaire ouvre ces dépenses une par une, dans l'ordre où vous les avez notées : « À trier · 1 sur 3 ». Choisissez la catégorie et le compte — « Enregistrer ».

Le montant, la date et tout ce que la voix a reconnu sont déjà dans l'opération — avec eux et la note, il est facile de se souvenir de l'achat. Le compte est reconnu ? La dépense a déjà réduit son solde, et sur « Budget » elle figure sur la ligne « Sans catégorie » jusqu'à ce que vous la triiez. Le compte n'est pas reconnu ? La dépense attend hors budget et y entre quand vous choisissez le compte.

*Ce qui ne va pas dans « À trier »:*
Un virement entre comptes et un montant ventilé : il leur faut les deux comptes ou toutes les parties à la fois. Sans montant non plus : si la voix n'a pas saisi le nombre, tapez-le dans le formulaire. Plus sur « À trier » — l'article [« Formulaire d'opération »](#entry-inbox).

### Si elle n'a pas compris {#voice-fail}

| Sur la fiche | Ce qui s'est passé |
|---|---|
| « Rien entendu — réessayez » | Le téléphone n'a reconnu aucun mot. Parlez plus près du micro et touchez « Réessayer ». |
| « Ni montant ni aucun de vos noms reconnu » | La phrase est reconnue, mais elle ne contient ni nombre ni nom connu. Le formulaire ne s'ouvre pas — regardez l'exemple et touchez « Réessayer ». |
| « Pas d'accès au micro, ou la reconnaissance est indisponible… » | L'application n'a pas eu le micro, ou le téléphone n'a pas de reconnaissance vocale. Vérifiez les autorisations de l'application dans les paramètres du téléphone. |

Rien n'a été reconnu ? L'exemple de la fiche redescend d'une marche. Un nom reconnu mais pas le montant ? L'exemple reste le même : la phrase a sans doute été coupée.

### Langue {#voice-language}

L'application écoute dans la langue de l'interface — celle choisie dans « Paramètres », section « Apparence » → « Langue et formats » → « Langue de l'interface ». En détail — l'article [« Paramètres »](#settings-formats). Sous l'exemple, il est indiqué dans quelle langue elle écoute.

##### « La langue de l’interface n’est pas installée pour la reconnaissance vocale — j’écoute en … »

Le téléphone n'a pas de modèle de reconnaissance pour cette langue, et l'application écoute dans la langue du téléphone. Ajoutez la langue dans les paramètres de reconnaissance vocale du téléphone — et la ligne disparaît.

##### Les mots « virement », « revenu », « note » — dans votre langue

Chaque langue a ses mots-clés : en anglais « transfer », « income », « note », en russe « перевод », « доход », « заметка ». L'exemple sous le micro montre toujours les mots de votre langue.

## Scanner de tickets {#receipt}

Pointez la caméra sur le QR code du ticket — l'application inscrit le montant et la date, et reconnaît un magasin déjà rencontré à son numéro de caisse pour remplir le bénéficiaire, la catégorie et le compte.

*le bouton violet avec un QR code au-dessus de « + Opération »*

### Pourquoi {#receipt-why}

Les tickets s'entassent dans la poche, et le soir il faut se souvenir où, combien et quand. Le scanner prend sur le ticket le montant et la date, sans erreur de chiffres et avec le vrai jour de l'achat — même si vous saisissez le ticket le lendemain. Le ticket est conservé dans l'opération sous forme électronique : vous pouvez jeter le papier.

### Où est le bouton {#receipt-where}

Le bouton violet avec un QR code est au-dessus de « + Opération » sur « Aperçu », dans « Activité », sur l'écran d'un compte et d'une catégorie.

Il n'apparaît que si l'application connaît les tickets de votre pays :

| Pays | Quand le bouton apparaît |
|---|---|
| Ukraine | Hryvnia dans le budget ou sur un compte, ou téléphone acheté en Ukraine (région UA). |
| Kazakhstan | Tenge dans le budget ou sur un compte, ou région du téléphone KZ. |
| Russie | Rouble dans le budget ou sur un compte. |
| Portugal | Région du téléphone PT, ou application en portugais et euros dans le budget ou sur un compte. |

*Pourquoi la devise et pas la langue:*
La langue ne dit rien du pays où l'on fait ses achats : on écrit en russe en Ukraine comme au Kazakhstan, et les tickets y sont différents. La devise, en revanche, c'est vous qui l'avez choisie — elle dit où vous payez.

Dans les autres pays, pas de bouton. Mais le code de n'importe quel ticket peut être gardé dans une opération — avec l'icône de scanner du champ « Reçu électronique » du formulaire ([plus bas](#receipt-form)). Et pour que l'application apprenne à lire les tickets de votre pays, envoyez-nous-en quelques-uns — [comment](#receipt-your-country).

### Comment scanner {#receipt-how}

[Fenêtre L'application apprend de vos tickets : le QR code ne contient que la date, le montant et le numéro de caisse ; boutons Annuler et Scanner]

1. Touchez le bouton violet.
2. Les trois premières fois, l'application explique comment elle apprend des tickets (capture). Touchez « Scanner ». Dès qu'elle a reconnu un magasin, elle ne l'explique plus.
3. La caméra s'ouvre : « Pointez la caméra vers le code QR du reçu ». Le code se lit tout seul, rien à toucher.
4. Le formulaire d'opération s'ouvre avec le montant, la date et le ticket. Vérifiez puis « Enregistrer ».

Le ticket est une photo ou un PDF sur le téléphone ? Sous la caméra — « Choisir dans la galerie » et « Choisir un PDF ».

### Ce qui vient du ticket {#receipt-what}

Le QR code d'un ticket ne contient ni le nom du magasin ni la liste des achats — seulement le montant, la date et l'heure, le numéro du ticket et celui de la caisse. Donc :

| Champ du formulaire | D'où il vient |
|---|---|
| Montant | Du ticket. |
| Date | Du ticket : le jour de l'achat, pas aujourd'hui. |
| « Reçu électronique » | Le code du ticket lui-même. Il permet d'ouvrir et de copier le ticket. |
| Bénéficiaire | Par le numéro de caisse : celui que vous aviez choisi pour les tickets précédents de cette caisse. |
| Catégorie et note | Par le bénéficiaire — comme si vous l'aviez choisi à la main dans le formulaire. |
| Compte | Celui avec lequel vous avez payé dans ce magasin la dernière fois. |

*Une caisse, c'est un magasin:*
Derrière une caisse il y a toujours un seul magasin. Au supermarché, vous passez tantôt à une caisse, tantôt à une autre — pour les tickets ukrainiens, l'application reconnaît aussi la caisse voisine du même magasin. Si des caisses voisines mènent à des bénéficiaires différents, l'application ne dit rien : mieux vaut choisir le magasin vous-même que d'en recevoir un autre.

### Un nouveau magasin {#receipt-new-shop}

Pour le premier ticket d'un nouveau magasin, l'application ne remplit que le montant et la date — et ouvre aussitôt le choix du bénéficiaire.

[Fiche Bénéficiaire par-dessus le formulaire : recherche, virements, bénéficiaires]

[Le formulaire après le choix : 713,00, Bénéficiaire Carrefour, Catégorie Courses, Compte vide, Date 9 novembre, Reçu électronique avec le lien vers le ticket]

1. Trouvez le magasin dans la liste ou tapez un nouveau nom.
2. La catégorie se met toute seule si vous avez déjà acheté chez ce bénéficiaire.
3. Choisissez le compte : vous n'avez encore jamais payé dans ce magasin, l'application ne le connaît pas.
4. « Enregistrer ».

Le ticket suivant de cette caisse arrivera avec le bénéficiaire, la catégorie et le compte.

### Doublons et erreurs {#receipt-problems}

| Message | Ce qui s'est passé |
|---|---|
| « Ce reçu est déjà saisi » | Ce ticket est déjà dans une opération — la date et le montant sont dans la fenêtre. « Modifier » ouvre cette opération, « Ajouter quand même » — une nouvelle, « Annuler » — rien. |
| « Ce n'est pas un reçu que l'application connaît » | Le QR code n'est pas celui d'un ticket, ou c'est celui d'un ticket d'un autre pays. Le formulaire ne s'ouvre pas. |
| « Ce reçu ne contient pas de montant » | Le code est lu, mais il n'y a pas de montant. Saisissez la dépense avec « + Opération ». |

Certains services de caisse impriment sur le ticket un lien vers leur site, sans montant ni date — l'application ne peut pas lire un tel ticket.

### Un ticket en fichier : « Partager » {#receipt-share}

Le ticket est arrivé par e-mail, Viber ou dans l'appli de la banque sous forme d'image ou de PDF ? Touchez « Partager » et choisissez « Mon budget ».

- Un ticket connu est trouvé — le formulaire s'ouvre comme après la caméra, et l'application demande « Joindre le fichier à l’opération ? ». Le reçu électronique est ajouté dans tous les cas ; joignez le fichier si vous voulez voir le ticket lui-même.
- Pas de ticket dans le fichier, ou un ticket inconnu — l'application dit pourquoi et propose « Remplir à la main » : le formulaire s'ouvre, le fichier déjà joint.

### Le ticket dans le formulaire {#receipt-form}

Dans le formulaire d'opération, sous « Supplémentaire », il y a le champ « Reçu électronique » avec une icône de scanner. Elle fonctionne avec **n'importe quel** QR code, dans n'importe quel pays : elle met dans le champ ce qui est écrit dans le code.

Si le ticket est connu, l'application le compare au formulaire : elle inscrit le montant s'il n'y en a pas encore, et si les montants diffèrent, elle l'indique par la ligne « Le reçu indique un autre montant : … » et propose « Corriger ». Le ticket ne change pas la date d'un formulaire ouvert. En détail — l'article [« Formulaire d'opération »](#entry).

Un ticket enregistré se voit sur la ligne de l'opération par une icône, et dans la fiche de l'opération par les boutons « Copier » et « Ouvrir ». En détail — l'article [« Activité »](#transactions).

### Apprendre à l'application les tickets de votre pays {#receipt-your-country}

L'application lit le ticket sans internet : tout ce qu'il faut — le montant et la date — doit être dans le QR code lui-même. Dans beaucoup de pays c'est le cas : le QR code d'un ticket fiscal contient le montant, la date et le numéro de caisse. Si c'est aussi le cas chez vous, nous pouvons ajouter ses tickets.

##### Envoyez 5 à 10 tickets

1. Prenez des tickets de magasins différents : supermarché d'une chaîne, pharmacie, station-service, petit commerce. Les tickets électroniques — PDF ou image d'un e-mail — conviennent aussi.
2. Photographiez chacun pour que le QR code et le total soient bien nets.
3. Envoyez-les dans la « Discussion Telegram » ou par e-mail avec « Proposer une amélioration » — tous deux dans « Paramètres », section « Aide et contact ». Indiquez le pays.

Il faut plusieurs tickets pour s'assurer que le code est construit de la même façon d'une caisse et d'une chaîne à l'autre. Un seul ticket ne permet pas de le savoir.

*Ce qu'il vaut mieux cacher sur la photo:*
Il nous faut seulement le QR code, le montant et la date. Les derniers chiffres de la carte, le nom du caissier, la carte de fidélité et tout ce qui est personnel peuvent être cachés du doigt ou masqués — cela n'empêche pas la reconnaissance.

*Quand ça ne marchera pas:*
Si le QR code du ticket ne contient qu'un lien vers un site — sans montant ni date —, les données sont sur ce site. L'application n'y va pas : elle promet de fonctionner sans serveur et sans inscription. Ces tickets resteront sans scanner, mais leur code peut toujours être gardé dans le champ « Reçu électronique ».

## Widgets et raccourcis {#widgets}

Des boutons pour noter une dépense directement sur l'écran d'accueil du téléphone : la voix, une nouvelle opération, le scanner de tickets. Une touche, et vous êtes dans le formulaire — sans ouvrir l'application ni chercher le « + ».

*écran d'accueil du téléphone — « Widgets » → « Mon budget » ; raccourcis — appui long sur l'icône de l'application*

### Pourquoi {#widgets-why}

Une dépense se note tant qu'on s'en souvient : à la caisse, en sortant du magasin. Chaque touche en trop est une excuse pour remettre « à ce soir » et oublier. Un widget sur l'écran d'accueil ouvre tout de suite ce qu'il faut : la voix, le formulaire ou la caméra pour le ticket.

### Cinq widgets {#widgets-widgets}

| Widget | Taille | Ce qu'il fait |
|---|---|---|
| « Voix » | 1 case | Bouton vert avec un micro — [saisie vocale](#voice). |
| « Opération » | 1 case | Bouton avec un « + » de la couleur de « + Opération » — une nouvelle opération. |
| « Ticket » | 1 case | Bouton violet avec un QR code — [le scanner de tickets](#receipt). |
| « Boutons en colonne » | 1 × 2 cases | Les trois boutons l'un au-dessus de l'autre. |
| « Boutons en ligne » | 2 × 1 cases | Les trois boutons côte à côte. |

Les couleurs sont celles des boutons de l'application : vert pour la voix, violet pour le ticket.

##### Le bouton ticket n'est pas pour tout le monde

Le widget « Ticket » seul est proposé à tous. Mais dans les widgets à trois boutons, le bouton ticket n'apparaît que si l'application connaît les tickets de votre pays — selon la même règle que le bouton de l'application. La règle est dans l'article [« Scanner de tickets »](#receipt-where). Sinon, le widget a deux boutons.

### Comment ajouter un widget {#widgets-add}

1. Appuyez longuement sur un espace vide de l'écran d'accueil.
2. Choisissez « Widgets ».
3. Trouvez « Mon budget » et le widget voulu.
4. Faites-le glisser sur l'écran d'accueil.

Les noms des menus dépendent du téléphone : chez certains, « Widgets » est dans le menu de l'écran d'accueil, chez d'autres dans une liste à part. Les widgets « Voix », « Opération » et « Ticket » occupent une case, comme l'icône de l'application.

### Raccourcis {#widgets-shortcuts}

Un raccourci fait la même chose, sous forme d'icône ordinaire : le lanceur le dessine comme les icônes d'applications, et il s'aligne avec elles sur n'importe quel téléphone.

1. Appuyez longuement sur l'icône « Mon budget ».
2. « Voix » et « Opération » apparaissent — touchez pour ouvrir aussitôt.
3. Ou faites glisser un raccourci sur l'écran d'accueil — il y reste sous forme d'icône.

Il n'y a pas de raccourci pour le ticket : un raccourci ne peut pas être masqué là où l'application ne connaît pas les tickets du pays. Pour le ticket, prenez le widget « Ticket ».

### Ce qui s'ouvre {#widgets-open}

| Vous touchez | Ce qui se passe |
|---|---|
| « Voix » | L'application s'ouvre sur « Aperçu », avec par-dessus la fiche de saisie vocale. |
| « Opération » | « Aperçu », avec par-dessus le formulaire de nouvelle opération. |
| « Ticket » | « Aperçu », avec par-dessus la caméra du scanner. |

Après l'enregistrement, vous restez sur « Aperçu » et voyez que la dépense est entrée dans le budget.

##### Si un code PIN est défini

L'application demande d'abord le code PIN ou l'empreinte, puis ouvre aussitôt ce que vous avez touché. Pas besoin de toucher à nouveau.

## Bénéficiaires et tags {#payees-tags}

À qui vous payez et à quelle occasion — deux autres façons de regarder vos opérations, à côté des catégories.

*Une icône en haut d'« Activité »*

### Pourquoi cet écran {#payees-tags-why}

Les catégories répondent à « où est passé l'argent ». Ici, deux autres regards sur les mêmes opérations : **à qui** vous payez et **à quelle occasion**. Combien est parti chez « Carrefour » en un an, combien a coûté la maison de campagne, qui doit quoi à qui pour un achat commun.

##### Comment y accéder

L'icône « Bénéficiaires et tags » en haut d'« Activité ». Ou « Paramètres → Données → Bénéficiaires » et « Tags ». Ou « Tous les tags › » dans le bloc « Mes tags » sur « Aperçu ».

##### Inutile de les créer à l'avance

Bénéficiaires et tags apparaissent d'eux-mêmes la première fois que vous les tapez dans le formulaire d'opération. Ici, on les consulte, on les renomme et on fait le ménage.

##### Deux onglets

« Bénéficiaires » et « Tags ». L'écran se souvient de l'onglet sur lequel vous êtes parti.

### L'onglet « Bénéficiaires » {#payees-tags-payees}

Tous ceux que vous avez payés et dont vous avez reçu de l'argent. Touchez une capture — elle s'ouvre en plein écran.

[Onglet Bénéficiaires : recherche, Total de l'année en cours, Carrefour −1 111,89, Netflix, Employeur +16 800, bouton Nouveau bénéficiaire]

1. **Onglets** — « Bénéficiaires » et « Tags ».

2. **Le menu « ⋮ »** — l'ordre de la liste des bénéficiaires et la période du total. Expliqué à droite de la deuxième capture.

3. **Recherche** — tapez quelques lettres du nom.

4. **Bénéficiaire** — une lettre, le nom, à droite le total sur la période, sous le nom le nombre d'opérations sur la même période et la date de la dernière.

   *Comment ça marche:*
   Le total est compté « net » et avec son signe : pour un magasin, un moins après remboursements ; pour un employeur, un plus. Sur la capture, « Carrefour » a coûté 1 111,89 € depuis le début de l'année, « Employeur » a rapporté 16 800 €. Ces chiffres n'ont volontairement pas de couleur : c'est le signe qui montre le sens.

   Touchez la ligne — l'écran du bénéficiaire s'ouvre ([plus bas](#payees-tags-payee)). Faites glisser vers la gauche — « Modifier » : renommer. Vers la droite — « Supprimer » : l'application redemande et indique combien d'opérations a ce bénéficiaire. Les opérations ne disparaissent pas, elles restent simplement sans bénéficiaire.

5. **« Total de l'année en cours »** — la légende au-dessus de la liste : sur quelle période portent les chiffres de droite. La période se choisit dans le menu « ⋮ ».

6. **« + Nouveau bénéficiaire »** — créer un bénéficiaire à la main. En général inutile : le formulaire d'opération le crée tout seul.

#### L'ordre de la liste {#payees-tags-sort}

[Menu de tri : Les plus utilisés, Récents, Alphabétique, Par montant, Période]

(A)
#### Les plus utilisés

En haut — ceux qui ont le plus d'opérations. C'est le réglage juste après l'installation.

(B)
#### Récents

En haut — ceux dont la dernière opération est la plus récente.

(C)
#### Alphabétique

Pratique quand les bénéficiaires se comptent par centaines.

(D)
#### Par montant

En haut — les plus gros : ceux que vous payez le plus et ceux dont vous recevez le plus. Le signe ne compte pas, seule la taille compte.

(E)
#### Période

« Total de l'année en cours » (le réglage juste après l'installation), « Total sur 12 mois » ou « Total depuis toujours ». La période détermine le montant de chaque ligne, « Opérations : N » et les ordres « Les plus utilisés » et « Par montant » ; la date de la dernière opération est toujours celle de tout l'historique. L'année commence le 1er janvier : ce jour-là, le total repart de zéro.

### L'écran d'un bénéficiaire {#payees-tags-payee}

Tout sur un bénéficiaire : combien, pour quoi et quand. « ⋮ » — renommer, le « + » en bas — une nouvelle opération avec ce bénéficiaire déjà rempli.

[Écran du bénéficiaire Netflix : période Novembre 2026, Tendances des dépenses, Par catégorie, opérations par jour]

(F)
#### Période

D'emblée — le mois en cours. Les flèches font défiler les mois, toucher le nom ouvre la fiche « Période » : la même que dans « Rapports ».

*Comment ça marche:*
Vous voulez voir tout ce qui est parti chez un bénéficiaire en un an ? Choisissez une année ou votre propre intervalle, et l'écran l'affiche en entier : total, catégories et toutes les opérations.

(G)
#### « Tendances des dépenses »

Combien a été dépensé chez le bénéficiaire sur la période et combien en moyenne par mois.

*Comment ça marche:*
Les dépenses sont comptées après remboursements. Si le bénéficiaire vous paie plutôt (un employeur, un locataire), le bloc s'appelle « Tendances des rentrées » et compte les rentrées.

(H)
#### « Par catégorie »

À quoi est allé l'argent versé à ce bénéficiaire. Apparaît à partir de deux catégories.

*Comment ça marche:*
Sur la capture, Netflix a deux catégories : l'internet à la maison dans « Téléphone et internet » et l'abonnement dans « Abonnements ».

(I)
#### Opérations

Toutes les opérations avec ce bénéficiaire sur la période, par jour.

### L'onglet « Tags » {#payees-tags-tags}

Des étiquettes par-dessus les catégories : « #campagne », « #vacances », « #moitié ». Comment mettre un tag sur une opération — l'article [« Activité »](#transactions).

[Onglet Tags : moitié — à récupérer 43, collecté 43 sur 86 ; campagne — 118,26, deux opérations]

7. **Tag** — le nom, le montant sur toute la durée du tag, la durée elle-même et le nombre d'opérations. Pour un tag avec « Règlement », à droite — combien récupérer ou rendre.

   *Comment ça marche:*
   L'ordre est le suivant : d'abord les tags avec un règlement en cours, puis par fraîcheur de la dernière opération, à la fin les tags sans opérations. Les tags masqués sont réunis dans un bloc à part « Tags masqués » en bas.

   Touchez — l'écran du tag ([plus bas](#payees-tags-tag)). Appui long — un menu : « Renommer », « Règlement », « Masquer du choix ». Faites glisser vers la gauche — renommer, vers la droite — supprimer.

8. **« + Nouveau tag »** — créer un tag à la main. En général, on le crée directement dans le formulaire d'opération.

### L'écran d'un tag {#payees-tags-tag}

Tout ce qui est passé sous un même tag — combien, pour quoi et quand. C'est aussi ici que se règle le « Règlement ».

[Écran du tag moitié : 10 novembre, 2 opérations, À récupérer 43, 50 % réglé, Dépensé 86, Reçu 43, Par catégorie, opérations]

(J)
#### Durée et opérations

Du premier au dernier jour avec des opérations sous ce tag, et combien il y en a. Les totaux de l'écran couvrent toute la durée du tag.

(K)
#### Règlement

Si « Règlement » est activé pour le tag : ce qui reste pour revenir à zéro, et une barre « N % réglé ».

*Comment ça marche:*
Le règlement répond à la question « qui doit quoi à qui » pour une dépense commune. L'application calcule : dépensé moins reçu sur toute la durée du tag.

- **« À récupérer »** — vous avez dépensé plus que collecté. Sur la capture : un achat de 86 € chez « Auchan » partagé avec André, il a rendu 43 € — il reste 43, réglé à 50 %.
- **« À rendre »** — vous avez collecté plus que dépensé : par exemple, une cagnotte pour un cadeau dont il reste de la monnaie.
- **« Réglé »** en vert — tout tombe juste.

Notez l'argent rendu par un ami comme un remboursement dans la catégorie de l'achat, avec le même tag — comme dans l'article [« Formulaire d'opération »](#entry), section « Remboursement d'un article ». « Règlement » ne touche ni au budget ni aux rapports : c'est une aide pour vous.

(L)
#### « Dépensé » et « Reçu »

Ce qui est sorti et entré sous ce tag. Les virements entre vos propres comptes n'y entrent pas.

(M)
#### « Par catégorie »

À quoi est allé l'argent sous ce tag. Un tag sur une seule partie d'un montant ventilé ne compte que cette partie.

(N)
#### Opérations

Toutes les opérations avec ce tag, par jour.

#### Le menu « ⋮ » du tag {#payees-tags-tag-menu}

[Menu du tag : Renommer, Afficher dans Mes tags, Règlement coché, Masquer du choix, Astuces, Centre d'aide, Supprimer]

(O)
#### Renommer

Le nouveau nom apparaît sur toutes les opérations avec ce tag. L'application refuse un nom déjà pris.

(P)
#### Afficher dans « Mes tags »

Ajouter le tag au bloc « Mes tags » sur « Aperçu ». Il y a quatre places ; quand elles sont prises, l'élément est grisé et dit pourquoi : « Mes tags en a déjà 4 ».

(Q)
#### Règlement

Activer ou désactiver le calcul « qui doit quoi à qui » pour ce tag.

(R)
#### Masquer du choix

Le tag disparaît de la fiche de choix du formulaire, mais reste sur les opérations. Pratique pour des vacances terminées. Pour un tag masqué, cet élément devient « Remettre dans le choix ».

(S)
#### Astuces

Les astuces de cet écran.

(T)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

(U)
#### Supprimer

Le tag est retiré de toutes les opérations ; les opérations elles-mêmes restent. L'application redemande.

### Ce qu'on peut faire avec une ligne {#payees-tags-gestures}

Les lignes n'ont pas de boutons : touchez, appuyez longuement ou faites glisser du doigt.

| Faire | Résultat |
|---|---|
| Toucher un bénéficiaire | L'écran du bénéficiaire. |
| Faire glisser un bénéficiaire à gauche / à droite | « Modifier » (renommer) / « Supprimer ». |
| Toucher un tag | L'écran du tag. |
| Appuyer longuement sur un tag | Un menu : « Renommer », « Règlement », « Masquer du choix ». |
| Faire glisser un tag à gauche / à droite | « Modifier » (renommer) / « Supprimer ». |

## Paiements planifiés {#scheduled}

Loyer, abonnements, salaire — tout ce qui se répète. L'application retient les échéances, les rappelle et inscrit elle-même le montant et la catégorie. L'argent du budget ne bouge que lorsque vous confirmez le paiement.

*« Paramètres » → « Planification » → « Paiements planifiés »*

### Pourquoi cet écran {#scheduled-why}

La moitié des dépenses du mois se connaît à l'avance : le loyer le 1er, internet le 5, un abonnement le 11, le salaire deux fois par mois. Un paiement planifié, c'est une telle dépense notée une fois, à l'avance.

##### Ne pas oublier

L'application rappelle l'échéance par une notification — le jour du paiement ou à l'avance, selon votre réglage.

##### Ne pas taper à la main

L'échéance est là — touchez « Confirmer », et l'opération s'enregistre d'elle-même : montant, bénéficiaire, catégorie, compte.

##### Voir ce qui arrive

Les prochains paiements sont sur « Aperçu », dans le bloc « À venir » et dans le « Calendrier ». On voit à quoi l'argent est déjà promis.

Un paiement planifié n'est pas encore une dépense. Tant que vous ne l'avez pas confirmé, les soldes des comptes et des enveloppes ne bougent pas : il ne fait que rappeler et suggérer.

### Ce qu'il y a où à l'écran {#scheduled-screen}

Tous les paiements planifiés en une liste, l'échéance la plus proche en haut. Touchez une capture — elle s'ouvre en plein écran.

[Écran Paiements planifiés : Employeur +1 400 deux fois par mois, Propriétaire −1 200 mensuel, EDF, Spotify, Netflix, un tiret −800 annuel avec un drapeau rouge et la note Assurance auto, bouton Paiement]

1. **Ligne** — un paiement qui se répète. Elle est construite comme la ligne d'une opération : à qui et combien, catégorie et compte, comment il se répète et quand tombe la prochaine échéance.

   *Comment ça marche:*
   La première ligne — le bénéficiaire et le montant avec son signe : « − » — l'argent partira, « + » — il arrivera. La deuxième — la catégorie et le compte. La troisième — la fréquence et la date de la prochaine échéance.

   Un paiement sans bénéficiaire affiche un tiret « ——— » à la place du nom, et la note figure sur une quatrième ligne — sur la capture, « Assurance auto ».

   La liste est triée par date de prochaine échéance. Les paiements dont l'échéance est passée y sont aussi, en haut : ils attendent une confirmation — voir [plus bas](#scheduled-due).

2. **Fréquence et date** — à gauche la fréquence, à droite la date de la prochaine échéance. Après chaque échéance saisie ou ignorée, la date passe d'elle-même à la suivante.

3. **Drapeau** — le même marque-page coloré que sur une opération. Quand le paiement est saisi, le drapeau passe à l'opération.

4. **« + Paiement »** — un nouveau paiement planifié. Les étapes — [plus bas](#scheduled-new).

Tant qu'il n'y a pas de paiement planifié, l'écran est vide : « Aucun paiement planifié » et l'indication « Loyer, abonnements, salaire — ajoutez-en un avec le bouton « Paiement » ».

### Un nouveau paiement planifié {#scheduled-new}

Le formulaire est le même que pour une opération ordinaire, avec en plus un champ « Répéter ». Toucher une ligne de la liste l'ouvre aussi : il s'appelle alors « Paiement planifié » et modifie un paiement existant.

[Formulaire Paiement planifié : Sortant, 1 200, Bénéficiaire Propriétaire, Catégorie Loyer, Compte Compte courant, Date, Répéter Mensuel, Note, Supplémentaire, Enregistrer]

[Fiche Répéter : Une fois, Quotidien, Hebdomadaire, Toutes les 2 semaines, Deux fois par mois, Toutes les 4 semaines, Mensuel, Tous les 2 mois, Tous les 3 mois, Tous les 4 mois, Deux fois par an, Annuel]

5. **Montant** — tapez-le sur le pavé de l'application et touchez « Valider ». Au-dessus du montant — « − Sortant » pour un paiement et « + Entrant » pour un salaire.

6. **Bénéficiaire** — à qui vous payez ou qui vous paie.

7. **Catégorie** — de quelle enveloppe partira l'argent. Pour un salaire — le revenu du mois.

8. **Compte** — d'où l'argent sera débité ou où il arrivera.

9. **Date** — la prochaine échéance. L'application compte les suivantes à partir d'elle.

10. **« Répéter »** — à quelle fréquence : douze choix, la fiche est sur la deuxième capture.

    *Comment ça marche:*
    - **« Une fois »** — un paiement sans répétition. Une fois saisi ou ignoré, il disparaît de la liste.
    - **« Deux fois par mois »** — le jour de l'échéance et 15 jours après : le 3 et le 18. Si le second jour n'existe pas dans le mois, l'échéance tombe le dernier jour du mois.
    - **« Toutes les 4 semaines »** — ce n'est pas « Mensuel » : il y a 13 échéances par an, pas 12, et la date se décale à chaque fois.
    - **« Mensuel »** et moins souvent — le même jour du mois. Si ce jour n'existe pas dans le mois, l'échéance tombe le dernier jour du mois puis revient le mois suivant : un paiement du 31 tombe le 28 février, le 31 mars, le 30 avril.

11. **Tags** — les mêmes étiquettes que sur les opérations. Sur la capture, le loyer porte le tag « appartement ».

12. **« Supplémentaire »** — reçu électronique, photos et PDF, « Débité » et drapeau. Sur la capture, le PDF du bail est joint au loyer.

    *Comment ça marche:*
    Tout ce que vous remplissez ici, tags compris, est transmis à chaque opération saisie depuis ce paiement. Les tags y ont leur place : chaque loyer arrive tout seul sous le tag « appartement ». Une pièce jointe, en revanche, ne sert en général qu'une fois : il suffit de joindre le bail à une seule opération — lors de la saisie du premier paiement, touchez « Modifier » et ajoutez le PDF dans le formulaire. Joint ici, il apparaîtrait en icône à côté de chaque loyer pendant des années. Ne remplissez ici reçu, photos et PDF que si chaque opération a vraiment besoin du document.

13. **« Enregistrer »** — le paiement apparaît dans la liste. Si les rappels sont activés, l'application vous le rappellera.

##### Comment créer un paiement

1. « Paramètres » → « Planification » → « Paiements planifiés ».
2. Touchez « + Paiement » en bas à droite. « Nouveau paiement planifié » s'ouvre.
3. Tapez le montant et touchez « Valider ».
4. Choisissez le bénéficiaire, la catégorie et le compte.
5. « Date » — la prochaine échéance.
6. « Répéter » — à quelle fréquence il revient.
7. Si vous voulez — les tags et « Supplémentaire ».
8. « Enregistrer ».

##### Un virement planifié

Le paiement de la carte de crédit, la mensualité d'un crédit, l'alimentation d'un livret — c'est un virement entre vos propres comptes. Dans le champ « Bénéficiaire », choisissez un compte dans la section « Virements », le sens — « Sortant » ou « Entrant », comme pour un virement ordinaire.

*Un virement, c'est deux comptes:*
- Le paiement se voit sur les écrans des **deux** comptes, dans le bloc « À venir » : en moins sur le compte courant, en plus sur le crédit.
- Sur l'écran de confirmation, dans le rappel et dans le résumé de la semaine, il est désigné par son trajet : « Compte courant → Prêt ».
- « Confirmer » enregistre le virement sur les deux comptes à la fois, comme le formulaire.
- Des comptes dans des devises différentes ? Sous le bénéficiaire apparaissent « Crédité » et « Taux » : saisissez le taux dès la création. À l'échéance, « Confirmer » ouvre le formulaire avec ces chiffres — vérifiez le cours du jour et enregistrez.
- Un virement vers un compte hors budget (crédit, placement) sort l'argent de l'enveloppe — l'application demande une catégorie, comme pour un virement ordinaire. Un virement entre comptes du budget (compte courant → carte de crédit) n'en demande pas.
- Dans le « Calendrier » d'« Aperçu », un paiement de carte de crédit ne se colore pas comme une dépense : l'argent est resté dans le budget. Un paiement de crédit hors budget, si.

##### Ce qu'un paiement planifié ne peut pas avoir

Un montant ventilé : à l'enregistrement, l'application dit « Les ventilations planifiées ne sont pas encore prises en charge ».

### Depuis une opération existante {#scheduled-from-txn}

Le plus rapide est de créer un paiement planifié depuis une opération déjà notée : le formulaire reçoit tout, sauf la fréquence.

[Fiche de l'opération Carrefour : bénéficiaire, catégorie, compte, date, reçu, photo ; en bas les boutons Répéter, Modifier et Créer un paiement planifié]

(14)
##### « Créer un paiement planifié »

1. Touchez une opération dans « Activité », sur l'écran d'un compte ou d'une catégorie — la fiche de l'opération s'ouvre.
2. En bas — « Créer un paiement planifié ».
3. « Nouveau paiement planifié » s'ouvre avec le même montant, bénéficiaire, catégorie, compte, note, drapeau et tags. Reçu électronique, photos et PDF, et « Débité » sont vides : chaque paiement a les siens. Il faut joindre un contrat, par exemple ? Ajoutez-le ici. Par-dessus s'ouvre aussitôt la fiche « Répéter » — choisissez la fréquence.
4. La date se met d'elle-même — la prochaine échéance après cette opération, mais pas avant aujourd'hui : depuis une opération du 5, un paiement mensuel commence le 5 du mois suivant.
5. « Enregistrer ».

Seule une opération ordinaire a ce bouton : un montant ventilé et un virement ne l'ont pas.

### À l'échéance {#scheduled-due}

Le jour de l'échéance, le paiement se met à attendre une confirmation. Il ne se saisit pas tout seul : le loyer a pu être payé un jour plus tard, et les charges arrivent chaque mois avec un montant différent. C'est vous qui décidez.

[Bandeau sur Aperçu : Paiements planifiés : 2 en attente de confirmation]
En haut d'« Aperçu » apparaît le bandeau « Paiements planifiés : 2 en attente de confirmation ». Touchez-le pour ouvrir l'écran de confirmation.

[Écran de confirmation : cartes Employeur +1 400 et Propriétaire −1 200, chacune avec une date de saisie et des flèches, Ignorer, Modifier, Confirmer]

[La même carte, date décalée d'un jour : mentions décalé et réinitialisé]

(A)
##### La carte du paiement

Qui, combien, catégorie, compte et fréquence. L'échéance la plus ancienne en haut.

(B)
##### Date de saisie

D'emblée — la date d'échéance. « ‹ › » la décalent d'un jour avant ou après, toucher la date ouvre un calendrier — un mois dans les deux sens. Une fois décalée, « décalé » et « réinitialisé » apparaissent à côté (deuxième capture) ; « réinitialisé » remet la date d'échéance.

(C)
##### « Confirmer »

L'opération est enregistrée à la date choisie et apparaît dans « Activité » avec tout ce que contient le paiement : tags, reçu, photos et PDF, la marque « Débité ». La carte disparaît, et l'échéance passe à la suivante.

*Comment ça marche:*
L'échéance suivante se compte à partir de la date d'ÉCHÉANCE, pas de la date de saisie : un loyer dû le 1er payé le 3 — l'échéance suivante reste le 1er. Sinon le calendrier glisserait à chaque retard.

(D)
##### « Modifier »

Si le montant est différent cette fois. Le formulaire d'opération s'ouvre avec les champs du paiement — et ses tags, reçu, photos et PDF : corrigez et enregistrez — l'opération est saisie, l'échéance est close. Formulaire fermé sans enregistrer — rien n'a changé.

(E)
##### « Ignorer »

Il n'y a pas eu de paiement cette fois. L'opération n'est pas enregistrée, l'échéance passe à la suivante. Un paiement « Une fois » disparaît après avoir été ignoré.

*Si plusieurs échéances se sont accumulées:*
Pas ouvert l'application depuis deux mois ? Un paiement mensuel a deux échéances en retard. La carte montre la plus ancienne ; confirmez-la ou ignorez-la — la suivante apparaît, jusqu'à aujourd'hui. Quand il n'y a plus rien à traiter, l'écran dit « Aucun paiement à confirmer ».

Un virement planifié se saisit comme un virement — sur les deux comptes à la fois. Si les comptes sont dans des devises différentes, « Confirmer » ouvre le formulaire avec les champs « Crédité » et « Taux » remplis à la création — ajustez au cours du jour et enregistrez.

### Avant ou après l'échéance {#scheduled-early-late}

L'argent arrive rarement au jour près. On saisit un paiement à la date où il a vraiment eu lieu — et l'échéance est close : le jour venu, elle ne réapparaît ni sur l'écran de confirmation ni en rappel.

##### Le salaire est arrivé 2 jours plus tôt

L'échéance n'est pas encore là, il n'est donc pas sur l'écran de confirmation.

1. « Paramètres » → « Planification » → « Paiements planifiés ».
2. Faites glisser la ligne « Employeur » vers la gauche — « Saisir » apparaît. Touchez.
3. Le formulaire d'opération s'ouvre : montant, bénéficiaire, catégorie, compte, tags — du paiement, date — aujourd'hui. L'argent n'est pas arrivé aujourd'hui ? Touchez le champ « Date » et choisissez le jour.
4. « Enregistrer ».

Le salaire est noté le jour où il est arrivé. L'échéance est close : le jour venu, l'application ne la rappellera pas et ne demandera pas de confirmation. L'échéance suivante suit le calendrier : deux fois par mois — le jour suivant des deux, mensuel — un mois après l'échéance, pas après le jour de saisie.

##### Le loyer a été payé avec un jour de retard

L'échéance est passée — le paiement attend sur l'écran de confirmation.

1. Touchez le bandeau « Paiements planifiés : … en attente de confirmation » sur « Aperçu ».
2. Dans la carte du paiement, touchez « › » — la date de saisie avance d'un jour. Touchez la date elle-même pour ouvrir un calendrier.
3. « Confirmer ».

L'opération est notée le jour où vous avez payé. L'échéance suivante suit le calendrier — le 1er, pas le 2.

##### Le montant est différent cette fois

Les charges varient chaque mois. L'échéance est là — « Modifier » sur la carte de l'écran de confirmation ; pas encore — « Saisir » dans la liste. Corrigez le montant dans le formulaire et « Enregistrer » : l'opération est saisie avec le nouveau montant, et le paiement planifié garde l'ancien.

### Ce qu'on peut faire avec une ligne {#scheduled-gestures}

La ligne n'a pas de boutons. On la fait glisser du doigt sur le côté — jusqu'au bouton qui apparaît en dessous.

[Ligne EDF glissée vers la gauche : bouton Saisir]

[Ligne EDF glissée vers la droite : bouton rouge Supprimer]

| Faire | Résultat |
|---|---|
| Toucher la ligne | Le formulaire « Paiement planifié » : corriger le montant, la date, la fréquence — ce que vous voulez. « Enregistrer ». |
| Faire glisser vers la gauche | « Saisir » — saisir tout de suite l'échéance la plus proche : loyer payé à l'avance, argent arrivé plus tôt. Un formulaire de nouvelle opération s'ouvre avec les champs du paiement et la date du jour. Une fois enregistré, l'opération est notée, cette échéance est close, la suivante suit le calendrier. |
| Faire glisser vers la droite | « Supprimer » — après la question « Supprimer le paiement planifié ? ». Les opérations déjà saisies depuis ce paiement restent. |

### Rappels {#scheduled-reminders}

L'application rappelle l'échéance par une notification : « Aujourd'hui : … », « Demain : … » ou « Dans 3 jours : … ». Quand rappeler — le jour du paiement, la veille, 2 ou 3 jours avant ou une semaine avant —, à quelle heure, et s'il faut masquer les montants sur l'écran de verrouillage — dans [« Paramètres » → « Rappels »](#settings-reminders).

### Où voit-on encore les paiements planifiés {#scheduled-elsewhere}

**« Aperçu »** — le bloc « À venir » : les prochains paiements avec leurs dates, et le « Calendrier » en mode « Planifiés » : les échéances à venir, saisies et non saisies. En détail — l'article [« Aperçu »](#overview-heatmap).

**Écran d'un compte** — au-dessus de la liste, une carte « À venir » : les paiements planifiés de ce compte. Toucher une ligne ouvre « Paiements planifiés ».

**« Objectifs »** — si une catégorie a un paiement planifié, la carte de l'objectif suggère « Depuis le paiement planifié : … ». En détail — l'article [« Objectifs »](#goals-new).

**Résumé de la semaine** — s'il est activé, il contient les paiements planifiés à venir. En détail — dans [« Paramètres » → « Rappels »](#settings-reminders).

## Cloud et sauvegardes {#sync}

Comment ne pas perdre votre budget et comment le tenir sur plusieurs appareils.

*« Paramètres » → section « Synchronisation »*

### Pourquoi tout cela {#sync-why}

Le budget vit dans votre téléphone. Cette section des paramètres répond à trois questions.

**« Mon téléphone est tombé dans le lac »** — trois ans de budget ne doivent pas couler avec lui. Les [sauvegardes](#sync-backups) et le cloud vous sauvent : un nouveau téléphone [charge le budget depuis le cloud](#sync-restore).

**« Nous tenons le budget à deux »** — ou vous êtes seul, mais avec un téléphone et un ordinateur. Tous les appareils regardent le même cloud et échangent leurs modifications : c'est la [synchronisation](#sync-sync).

**« Hier, j'ai tout cassé »** — supprimé le mauvais compte, importé le mauvais fichier. L'application fait elle-même des [sauvegardes selon un calendrier](#sync-backups), et l'on peut y revenir.

**Par où commencer.** Trois étapes suffisent :

1. [Connecter un cloud](#sync-auth) — Google Drive, Dropbox ou WebDAV (Nextcloud, ownCloud, pCloud, votre propre serveur).
2. [Définir un mot de passe](#sync-password) si vous ne voulez pas que quelqu'un d'autre puisse lire vos données dans le cloud. Notez-le.
3. C'est tout. Ensuite, la synchronisation et les sauvegardes se font toutes seules : à chaque ouverture de l'application.

### Autorisation : connecter un cloud {#sync-auth}

C'est ici qu'on se connecte à un cloud. Il y en a trois, on peut en connecter un ou plusieurs. Sur la capture, Dropbox est déjà connecté, Google Drive et WebDAV pas encore : on voit ainsi les deux formes de bloc.

[Écran Autorisation : Chiffrement du cloud, Google Drive avec le bouton Se connecter avec Google, Dropbox avec un compte connecté, WebDAV avec les champs adresse, identifiant et mot de passe]

(1)
**Chiffrement du cloud** — le même bloc que sur les écrans « Synchronisation » et « Sauvegardes ». Le mot de passe se définit une seule fois — expliqué [plus bas](#sync-password).

(2)
**Google Drive** — « Se connecter avec Google » — et choisissez un compte. Le budget va dans le dossier « My budget » de votre Google Drive.

*Comment ça marche:*
Après la connexion, une plaque de compte remplace le bouton : nom, adresse e-mail, heure de la dernière synchronisation et « Se déconnecter ». Sur Google Drive, l'application ne voit que ce qu'elle a créé elle-même : les autres fichiers lui sont inaccessibles.

(3)
**Dropbox** — « Se connecter avec Dropbox » ouvre la page de connexion Dropbox dans le navigateur. Vous pouvez vous y connecter de deux façons : avec l'e-mail et le mot de passe Dropbox, ou avec le bouton « Continuer avec Google ». Autorisez l'accès — et le navigateur vous ramène dans l'application. Le budget va dans le dossier « My budget ».

*Pourquoi l'e-mail et le mot de passe Dropbox sont préférables:*
La connexion par Google lie Dropbox au compte Google utilisé. Un deuxième appareil, ou une deuxième personne avec un autre compte Google, se retrouve facilement dans un autre Dropbox, sans votre budget. L'e-mail et le mot de passe Dropbox fonctionnent de la même façon sur n'importe quel téléphone ou ordinateur, pour toute personne avec qui vous tenez le budget.

*Une solution de secours, si vous n'êtes pas revenu dans l'application:*
D'habitude, la connexion principale — avec le retour depuis le navigateur — suffit. Si le navigateur ne vous ramène pas dans l'application, dépliez « Problème de connexion ? » → « Se connecter avec un code (si le retour dans l'application n'a pas eu lieu) » : Dropbox affiche un code, collez-le dans la fenêtre de l'application.

La capture montre un Dropbox connecté : une plaque de compte avec « Se déconnecter » et « Synchroniser ». « Renouveler le jeton Dropbox », au même endroit, est aussi une solution de secours : seulement si la connexion cesse soudain de fonctionner.

(4)
**WebDAV** — votre propre serveur ou un cloud qui parle WebDAV : Nextcloud, ownCloud, pCloud, Yandex Disk et d'autres. Il faut une adresse, un identifiant et un mot de passe — sans se connecter à un compte personnel.

*Comment ça marche:*
Si le cloud a la double authentification activée, le serveur n'acceptera pas votre mot de passe habituel : créez un « mot de passe d'application » dans les paramètres du cloud et saisissez-le. Commencez l'adresse par `https://` — avec `http://`, l'identifiant et le mot de passe circulent en clair, et l'application vous en avertit.

**La règle principale : un seul compte cloud pour tous les appareils**

Le téléphone, la tablette et l'ordinateur qui tiennent un même budget se connectent au cloud avec **le même** compte. Sinon chaque appareil écrit dans son propre cloud, et ils ne voient pas les modifications des autres.

*Et si, dans la famille, chacun a son compte Google ?:*
Créez un **compte Google à part, nouveau,** pour le budget et connectez-vous au cloud de l'application uniquement avec lui, sur tous les appareils. Ne vous connectez pas à votre compte personnel sur le téléphone de votre femme, ni au sien sur le vôtre : le téléphone se mettrait à synchroniser les contacts, les messages et les photos avec ce compte, et les données personnelles de deux personnes se mélangeraient. Un compte dédié au budget ne connaît que le budget.

**Dropbox** — connectez-vous avec **l'identifiant et le mot de passe** Dropbox, pas avec le bouton « Continuer avec Google ». La connexion par Google lie Dropbox au compte Google utilisé — et sur un appareil avec un autre compte Google, on se retrouve facilement dans un autre Dropbox, sans votre budget.

**WebDAV** — la même adresse, le même identifiant et le même mot de passe sur tous les appareils.

### Synchronisation {#sync-sync}

L'échange de modifications entre cet appareil et le cloud, et à travers le cloud — avec vos autres appareils. Vous notez un achat sur le téléphone — une minute plus tard, il est sur l'ordinateur.

[Écran Synchronisation : Chiffrement du cloud, statut Synchronisé (Dropbox), choix du cloud Dropbox, interrupteurs Synchroniser les photos et Sauvegarde auto vers le cloud depuis cet appareil, bouton Synchroniser]

(1)
**Chiffrement du cloud** — un mot de passe sur tout ce qui part vers le cloud. Expliqué [plus bas](#sync-password).

(2)
**Statut** — comment s'est terminée la dernière synchronisation : « Synchronisé (Dropbox) » en vert, une erreur en rouge, avec un bouton « Signaler un problème ».

(3)
**Cloud** — si plusieurs clouds sont connectés, choisissez avec lequel synchroniser. Pas de cloud — à cet endroit, « Aucun cloud connecté » et où le connecter.

*Comment ça marche:*
Tous les appareils se synchronisent par UN SEUL cloud. Les autres clouds connectés, l'application les met aussi à jour tous les quelques jours — au cas où le principal deviendrait indisponible.

(4)
**Synchroniser les photos** — les photos et PDF de reçus partent dans le cloud, dans le dossier du budget, et apparaissent sur les autres appareils. **Juste après l'installation :** désactivé.

*Comment ça marche:*
Sans cet interrupteur, les opérations arrivent sur le second appareil avec la marque de photo, mais sans l'image. Chaque photo prend de la place dans le cloud ; si vous ne regardez les reçus que sur le téléphone qui les a pris, inutile de l'activer. Avec un mot de passe défini, les photos partent chiffrées.

(5)
**Sauvegarde auto vers le cloud depuis cet appareil** — chaque sauvegarde automatique du budget part aussi dans le cloud. **Juste après l'installation :** activé.

*Comment ça marche:*
Si deux appareils tiennent le budget, tous deux font des sauvegardes cloud — et l'on obtient des doublons. Laissez l'interrupteur sur un seul appareil et désactivez-le sur les autres. Pour que la sauvegarde cloud contienne toutes les photos de reçus, activez aussi « Synchroniser les photos » : sinon seules les photos prises sur cet appareil y figurent.

(6)
**Synchroniser** — synchroniser tout de suite. En général, inutile de toucher — l'application le fait elle-même, voir plus bas.

#### Quand l'application synchronise d'elle-même {#sync-when}

**À chaque ouverture** — quelques secondes après votre retour dans l'application. C'est pourquoi il n'est presque jamais nécessaire de lancer la synchronisation à la main.

**Pas à la mise en arrière-plan** — Android ne laisse pas une application travailler une fois réduite. Les modifications faites avant partent à l'ouverture suivante. Vous voulez les envoyer tout de suite ? Touchez l'icône de synchronisation sur « Aperçu ».

**L'icône sur « Aperçu »** — en haut à droite. Le chiffre dessus — combien de modifications ne sont pas encore parties dans le cloud. Un appui synchronise tout de suite.

*Comment ça marche:*
Après chaque synchronisation, l'icône s'allume 15 secondes : en vert (c'est passé) ou en rouge (ça n'est pas passé). Un seul échec, c'est en général le réseau : le métro, la campagne. Si quatre synchronisations de suite échouent, l'icône reste rouge jusqu'à la prochaine réussite — quelque chose est cassé, et il vaut la peine d'ouvrir cet écran. Laissez le doigt sur l'icône pour voir le texte de l'erreur.

Des synchronisations automatiques, l'application ne dit rien. Le message « Synchronisé » n'apparaît que si vous avez lancé la synchronisation vous-même.

#### Si quelque chose ne va pas {#sync-trouble}

Une carte apparaît sur l'écran « Synchronisation » : ce qui s'est passé et quoi faire. Voici les cas.

**« Le budget « … » existe déjà dans le cloud avec des données »** — avec les boutons « Depuis le cloud » et « Fusionner » sous la carte.

**Ce qui s'est passé.** Vous avez connecté un cloud, et il contient déjà un budget **du même nom** que celui de cet appareil — et les deux ont déjà des données. En général, c'est un second téléphone : quelqu'un y a d'abord ajouté des comptes ou quelques achats, puis seulement connecté le cloud du premier téléphone. L'application ne peut pas savoir si c'est un seul budget ou deux budgets différents qui portent le même nom, alors elle ne touche à rien et attend votre réponse. Elle le demande une fois — à la première synchronisation de ce budget.

**Que choisir :**

- **C'est un second appareil pour le même budget** — touchez **« Depuis le cloud »**, puis « Charger ». Cet appareil reçoit tout le budget depuis le cloud, et ce que vous y aviez saisi est perdu — saisissez-le à nouveau. C'est la réponse la plus fréquente.
- **Vous avez vraiment tenu un même budget sur deux appareils séparément** et voulez tout réunir — touchez **« Fusionner »**. Tout s'additionne : ce qui a été saisi ici et ce qui est dans le cloud. Mais les comptes et catégories créés séparément sur chaque appareil se retrouvent côte à côte — deux comptes « Compte courant », deux bénéficiaires « Le Comptoir » — et il faudra nettoyer les doublons à la main.
- **Ce sont deux budgets différents** qui portent simplement le même nom — par exemple le vôtre et celui de votre femme, tous deux « Mon budget ». Ne touchez aucun des deux boutons. Renommez le budget sur cet appareil : touchez le nom du budget dans l'en-tête d'« Aperçu » → le « ⋮ » à côté de ce budget → « Renommer ». Sous son nouveau nom, il aura son propre dossier dans le cloud et se synchronisera séparément.

Pas sûr ? Faites d'abord une sauvegarde : « Sauvegardes » → « Créer une sauvegarde maintenant » → « Appareil ». Si le choix se révèle mauvais, on pourra y revenir.

**« Le cloud est protégé par un mot de passe »** — les données du cloud sont chiffrées avec un mot de passe défini sur un autre appareil, et ici il n'est pas défini ou il est différent. Les données sont intactes. « Saisir le mot de passe » — saisissez le même mot de passe, et la synchronisation reprend.

*Comment ça marche:*
« Mot de passe perdu » est un dernier recours : le fichier du cloud est remplacé par les données de cet appareil, et le chiffrement est retiré. Les données des autres appareils ne sont pas perdues — leurs modifications reviennent à leur prochaine synchronisation. Avant de remplacer, l'application fait des sauvegardes et garde l'ancien fichier chiffré à côté — au cas où le mot de passe reviendrait en mémoire.

**« Le cloud n'est pas chiffré »** — un mot de passe est défini sur cet appareil, mais les données du cloud sont en clair : le chiffrement a été retiré sur un autre appareil. À vous de décider : « Chiffrer le cloud » — les autres appareils devront alors saisir le même mot de passe — ou « Retirer le mot de passe ici ».

**« Le fichier de synchronisation dans le cloud est illisible »** — le fichier du cloud est abîmé et ne se réparera pas tout seul. « Réparer le cloud » fait des sauvegardes fraîches du budget et remplace le fichier du cloud par les données de cet appareil.

*Comment ça marche:*
Les modifications d'un autre appareil qui n'étaient pas encore arrivées ici ne restent que dans le fichier abîmé — une copie en est gardée à côté des sauvegardes. Si le second appareil fonctionne, il rapporte ses données à sa prochaine synchronisation.

**« Photos du cloud non déchiffrées : N »** — les données sont arrivées, pas les photos : elles sont chiffrées avec un mot de passe qui n'est pas défini ici ou qui est différent. Définissez le même mot de passe que sur l'autre appareil — les photos arriveront à la prochaine synchronisation.

**« Conflit »** — un même enregistrement a été modifié sur deux appareils. La carte montre en quoi les versions diffèrent : « Garder » conserve la version de cet appareil, « Prendre » prend celle du cloud.

### Chiffrement du cloud : le mot de passe {#sync-password}

Le bloc « Chiffrement du cloud » vient en premier sur les écrans « Autorisation », « Synchronisation » et « Sauvegardes ». C'est un seul et même mot de passe.

**Ce qu'il protège** — tout ce qui part vers le cloud : sauvegardes, photos de reçus et fichier de synchronisation. Le chiffrement est AES-256. Sans mot de passe, quiconque a accès au dossier du cloud peut lire ces fichiers.

**Comment le définir** — touchez « Définir un mot de passe ».

*Pas à pas:*
1. La fenêtre « Mot de passe de chiffrement » s'ouvre.
2. Saisissez le mot de passe dans « Mot de passe » et à nouveau dans « Répétez le mot de passe » — au moins 4 caractères.
3. Cochez « J'ai noté le mot de passe en lieu sûr » — sans cela, « Enregistrer » ne se touche pas.
4. « Enregistrer ». Le bloc devient « Le cloud est protégé par un mot de passe ».

**Sur les autres appareils** — définissez **le même** mot de passe. Le mot de passe ne se synchronise pas et ne part ni dans le cloud ni chez le développeur — il vit uniquement sur l'appareil. Avec des mots de passe différents, la synchronisation s'arrête sur la carte « Le cloud est protégé par un mot de passe ».

**Mot de passe oublié — personne ne pourra récupérer les sauvegardes cloud.** Ni vous, ni le développeur, par aucun moyen. Notez-le là où vous gardez vos autres mots de passe importants.

**Le changer ou le retirer** — dans le bloc, touchez « Modifier » — « Changer le mot de passe » ou « Désactiver le chiffrement ». Changez le mot de passe sur tous les appareils : si l'un garde l'ancien, il ne pourra plus lire le cloud.

**Les sauvegardes sur le téléphone ne sont pas chiffrées** — elles sont à côté de la base du budget elle-même, et celle-ci est en clair. Aussi, quand un mot de passe est défini, les sauvegardes « Appareil » de la liste portent la mention « Non chiffrée » — pour qu'on ne croie pas que tout est sous clé.

### Sauvegardes {#sync-backups}

Une sauvegarde, c'est tout le budget à un moment donné : comptes, catégories, opérations, objectifs, paiements planifiés et photos. L'application fait les sauvegardes elle-même ; on vient ici quand il faut revenir en arrière.

[Écran Sauvegardes : Créer une sauvegarde maintenant, Dernière sauvegarde, Chiffrement du cloud, Calendrier des sauvegardes, filtres Toutes, Appareil, Dropbox, liste de sept sauvegardes]

(1)
**Créer une sauvegarde maintenant** — une sauvegarde tout de suite, par exemple avant un import ou un grand ménage. L'application demande « Où enregistrer la sauvegarde ? » — capture [plus bas](#sync-where).

(2)
**« Dernière sauvegarde »** — quand la sauvegarde la plus récente de ce budget a été faite. Si cela fait longtemps, la ligne devient jaune.

(3)
**Chiffrement du cloud** — le même mot de passe que sur « Synchronisation » — [plus haut](#sync-password).

(4)
**Calendrier des sauvegardes** — à quelle fréquence l'application fait des sauvegardes et combien elle en garde. Touchez pour déplier — [plus bas](#sync-schedule).

(5)
**Filtres** — « Toutes », « Appareil » et une puce par cloud connecté. Le chiffre — combien de sauvegardes il y a. Aucun cloud connecté — pas de filtres : il n'y a rien à trier.

(6)
**Sauvegarde** — date et heure, où elle se trouve, de quel type et de quel budget.

*Comment ça marche:*
Sous la date — où elle se trouve (« Appareil », « Dropbox »…) et son type : « Auto, fréquente », « Auto, rare » ou « Manuelle ». En dessous — le nom du budget, combien d'enregistrements, de photos et de PDF elle contient, et la taille du fichier.

L'icône d'horloge avec une flèche — **ramener le budget à cette sauvegarde**. La corbeille — supprimer la sauvegarde (l'application redemande).

(7)
**Le menu « ⋮ »** — « Restaurer depuis un fichier », « Copie lisible », « Astuces » — [plus bas](#sync-menu).

#### Comment ramener le budget à une sauvegarde {#sync-back}

1. Trouvez la sauvegarde du jour voulu. Vous hésitez ? Prenez la dernière avant que tout tourne mal.
2. Touchez l'icône d'horloge avec une flèche sur sa ligne.
3. La fenêtre « Restaurer les données ? » : « Les données seront restaurées depuis … Les données actuelles seront remplacées. » — touchez « Restaurer ».
4. En bas apparaît « Restauré depuis … ». Le budget est maintenant tel qu'il était au moment de la sauvegarde.

**Si un cloud est connecté, une restauration ne suffit pas.**

On restaure une sauvegarde pour se débarrasser de modifications récentes : supprimé le mauvais compte, importé le mauvais fichier. Mais la restauration ne change le budget que sur ce téléphone. Le cloud garde le budget avec ces mêmes modifications, et à la synchronisation, l'application réunit le téléphone et le cloud, et c'est la modification la plus récente qui gagne. Touchez « Synchroniser » — et tout ce dont vous vouliez vous débarrasser revient du cloud en une demi-minute.

Pour que le retour en arrière tienne, il faut remplacer le cloud par le budget restauré. Comment — ci-dessous.

#### Revenir en arrière dans le cloud aussi {#sync-rollback}

Le budget est sur un seul téléphone — ces étapes suffisent. L'ordre compte.

1. **Restaurez la sauvegarde** — les étapes ci-dessus. Ensuite, **ne touchez pas « Synchroniser »**.
2. **Quittez l'application** avec le bouton d'accueil. Tant que l'application est réduite, elle ne synchronise pas.
3. **Supprimez le fichier de synchronisation dans le cloud.** Ouvrez le cloud dans un navigateur : le dossier « My budget » → le dossier au nom du budget → le fichier `ynab_budget_sync.json`. Supprimez seulement lui — ne touchez pas aux dossiers de sauvegardes et de photos. Dans Dropbox, le dossier « My budget » se trouve dans « Applications » → « My Budget Envelopes ».
4. **Revenez dans l'application.** Quelques secondes plus tard, elle synchronise d'elle-même, ne trouve pas de fichier dans le cloud et y dépose le budget restauré. L'écran « Synchronisation » doit afficher « Synchronisé ».

*Pourquoi d'abord restaurer, puis supprimer le fichier:*
À chaque retour dans l'application, elle synchronise quelques secondes plus tard. Supprimez d'abord le fichier, et en revenant du navigateur, l'application dépose aussitôt dans le cloud le budget actuel — avec ces mêmes modifications. Il faudrait alors tout recommencer.

#### Si plusieurs appareils tiennent le budget {#sync-rollback-devices}

Le second téléphone et l'ordinateur ont eux aussi ces modifications. À leur synchronisation, ils les remettraient dans le cloud, et de là — chez vous. Chaque autre appareil doit donc oublier ses données et reprendre le budget du cloud à neuf — avant d'avoir eu le temps de synchroniser.

1. Ramenez le budget et le cloud en arrière sur un appareil — les étapes ci-dessus.
2. Sur l'autre téléphone, **activez le mode avion** et seulement ensuite ouvrez l'application : sans réseau, elle ne synchronise pas.
3. « Paramètres » → « À propos » → « Réinitialiser toutes les données ».
4. **Désactivez le mode avion.** L'application synchronise et charge depuis le cloud le budget déjà ramené en arrière.

Sur un ordinateur — pareil : coupez internet avant de lancer le programme, réinitialisez les données dans les paramètres, reconnectez-vous. Les modifications de ces appareils qui n'avaient pas encore atteint le cloud sont perdues avec la réinitialisation.

#### Calendrier des sauvegardes {#sync-schedule}

L'application fait une sauvegarde d'elle-même quand c'est l'heure — à l'ouverture de l'application et au passage à un autre budget. Chaque budget a son propre calendrier. Il y a deux sortes de sauvegardes : fréquentes — pour revenir quelques jours en arrière, et rares — pour revenir des mois en arrière.

[Calendrier des sauvegardes en mode Personnalisé : copies fréquentes tous les 5 jours, en garder 7 ; rares une fois par mois, en garder 12 ; Jusqu'où remonter : fréquentes environ 35 jours, rares jusqu'à 12 mois]
**« Personnalisé ».** Les mêmes choix que « Par défaut ».

**Par défaut** — copies fréquentes tous les 5 jours, les 7 dernières sont gardées — environ 35 jours en arrière ; rares — une fois par mois, 12 sont gardées — jusqu'à un an en arrière.

**Personnalisé** — fréquentes — chaque jour ou tous les 2, 3, 5, 7 jours, en garder 3, 5, 7, 10, 14 ou 30 ; rares — une fois par mois ou une fois par trimestre, en garder 3, 4, 6, 12 ou 24 — ou « Aucune ».

**« Jusqu'où remonter »** — l'application calcule de combien de jours et de mois on peut revenir avec le calendrier choisi.

**Avertissements** — si les copies fréquentes s'arrêtent avant que commence une copie rare, l'application affiche « Entre … et … jours, il peut n'y avoir aucune copie » avec des boutons qui comblent le trou. Choisissez « Aucune » pour les rares, et elle prévient qu'il n'y aura pas de sauvegardes de plus de quelques jours.

**Les anciennes sauvegardes sont supprimées** — si vous réduisez le nombre à garder, les sauvegardes en trop sont supprimées à la prochaine sauvegarde automatique — sur le téléphone comme dans le cloud. Aussi « Enregistrer » demande d'abord : combien seront supprimées, et la date de la plus ancienne.

**Les sauvegardes manuelles** — gardées sans limite : le calendrier n'y touche pas. Le calendrier s'applique à cet appareil et ne se synchronise pas.

**La sauvegarde automatique a échoué deux fois de suite** — un avertissement « La sauvegarde automatique échoue » apparaît sur « Aperçu », avec la raison (par exemple, pas assez de place) et un bouton « Sauvegarder ».

#### « Où enregistrer la sauvegarde ? » {#sync-where}

C'est la question que pose « Créer une sauvegarde maintenant ».

[Fiche Où enregistrer la sauvegarde : Appareil, Fichier sur le téléphone, Google Drive, Dropbox, WebDAV]

**Appareil** — dans le dossier de sauvegardes de l'application. La sauvegarde apparaît dans la liste.

**Fichier sur le téléphone** — choisissez un dossier — par exemple « Téléchargements » — et enregistrez la sauvegarde comme fichier. On peut se l'envoyer ou la mettre sur un ordinateur. Avec un mot de passe défini, le fichier est chiffré.

**Google Drive, Dropbox, WebDAV** — la sauvegarde part directement dans le cloud. Le cloud n'est pas connecté ? L'application indique où le connecter.

#### Le menu « ⋮ » {#sync-menu}

[Menu de l'écran Sauvegardes : Restaurer depuis un fichier, Copie lisible, Astuces, Centre d'aide]

[Fiche Copie lisible : Archive avec photos et PDF, Données seules, Un fichier du cloud]

(A)
#### Restaurer depuis un fichier

ramener le budget depuis un fichier de sauvegarde absent de la liste : téléchargé depuis le cloud, envoyé à soi-même, enregistré dans « Téléchargements ».

*Comment ça marche:*
Conviennent : une sauvegarde (`.y4zip`), une « Copie lisible », et même le fichier de synchronisation `ynab_budget_sync.json` téléchargé depuis le cloud dans un navigateur. Si le fichier est chiffré, l'application demande le mot de passe. Si la sauvegarde vient d'un autre budget (pas d'un compte commun), l'application redemande : « On dirait un autre budget ». Un fichier YNAB 4 ne va pas ici — on le transfère par « Import depuis YNAB » dans les paramètres.

(B)
#### Copie lisible

vos données dans un fichier que n'importe quel programme ouvre, sans mot de passe. Gardez-le là où personne d'autre ne regarde.

*Comment ça marche:*
Trois variantes :

- **Archive avec photos et PDF** — ce budget en entier ; n'importe quel outil d'archives l'ouvre.
- **Données seules** — ce budget dans un seul fichier texte ; n'importe quel éditeur de texte l'ouvre. Les reçus électroniques y sont, les photos et PDF non.
- **Un fichier du cloud** — retirer le mot de passe et la compression d'un fichier de synchronisation ou d'une sauvegarde cloud téléchargés depuis le cloud dans un navigateur.

C'est un chemin vers vos données qui passe à côté de l'application : même sans elle, le budget reste à vous.

(C)
#### Astuces

les astuces de cet écran sous forme de liste.

(D)
#### Centre d'aide

Cet article sur le site : il s'ouvre dans le navigateur, dans la langue de l'application.

### Charger un budget depuis le cloud {#sync-restore}

Un nouveau téléphone, une réinstallation ou un second appareil. Le budget est dans le cloud sous son nom ; cet écran le trouve et le charge ici. Le choix « J’ai déjà un budget » de l'assistant du premier lancement ouvre le même écran.

[Écran Charger le budget depuis le cloud : étape 1 Connecter un cloud avec un bouton Connecter, étape 2 Nom du budget]

(1)
**Connecter un cloud** — le même que sur le premier appareil : le même Google Drive, Dropbox ou WebDAV et **le même compte**.

(2)
**Choisir un budget** — l'application montre les budgets du cloud avec la date de leur dernière synchronisation. Touchez le vôtre puis « Charger le budget ».

*Comment ça marche:*
Pas de liste, ou votre budget n'y figure pas ? Touchez « Saisir le nom à la main » et tapez le nom exactement tel qu'il s'appelle sur le premier appareil : le nom du budget est l'adresse de son dossier dans le cloud. La casse n'a pas d'importance. Le nom figure dans l'en-tête d'« Aperçu » sur le premier appareil.

Si cet appareil a déjà des données, l'application redemande : « Remplacer les données par celles du cloud ? » : tout ce qui n'est pas dans le cloud est perdu.

**Mot de passe** — si un mot de passe est défini sur le premier appareil, définissez le même ici. Sans lui, la synchronisation s'arrête, et les photos de reçus arrivent mais ne s'ouvrent pas.

### Transfert local : sans cloud {#sync-local}

Transférer un budget entre vos propres appareils directement — par fichier ou par WiFi. Sans internet et sans comptes. C'est un transfert ponctuel, pas une synchronisation permanente.

[Écran Transfert local : un bloc Fichier avec les boutons Exporter et Importer, un bloc WiFi avec les rôles d'envoi et de réception]

(1)
**Fichier** — « Exporter » — les données du budget dans un fichier : envoyez-le par messagerie, par e-mail ou sur une clé USB. Sur l'autre appareil — « Importer » et choisissez ce fichier.

*Comment ça marche:*
L'import **réunit** les données du fichier avec celles déjà présentes, et si un même enregistrement diffère, il prend la version du fichier. Les photos ne vont pas dans le fichier. Pour tout transférer avec les photos — le WiFi ou une [sauvegarde](#sync-backups) (« Archive avec photos et PDF »).

(2)
**WiFi (réseau local)** — les deux appareils sur le même réseau WiFi. L'un envoie les données, l'autre les reçoit et, avec « Fusionner », renvoie ses propres modifications. Les photos passent aussi.

*Comment ça marche:*
1. Sur l'appareil qui envoie : « Démarrer le serveur ». Un QR code et un « Code de confirmation » à 6 chiffres apparaissent.
2. Sur celui qui reçoit : « Scanner le QR » — le code remplit les deux champs. Ou saisissez l'adresse IP et le code à la main.
3. « Recevoir les données ». L'application demande « Comment appliquer les données ? » : « Fusionner » — comme une synchronisation bidirectionnelle ordinaire : les modifications de cet appareil partent aussi vers celui qui envoie, rien n'est perdu ; « Remplacer complètement » — ce budget devient une copie exacte de celui qui envoie, et tout ce qui n'est pas synchronisé ici est perdu. « Remplacer » est fait pour un nouvel appareil.
4. Sur l'appareil qui envoie — « Arrêter le serveur ».

Le transfert est chiffré avec le code de confirmation, et le code lui-même ne circule jamais sur le réseau.

## Paramètres {#settings}

Ce que fait chaque ligne et sa valeur juste après l'installation.

*L'engrenage en haut à gauche sur « Aperçu »*

Les sections sont classées par fréquence : en haut, ce dont on a le plus souvent besoin.

### Planification {#settings-s-plan}

Tout ce qui se répète : paiements réguliers et rappels.

[Section Planification : Paiements planifiés, Rappels]

**Paiements planifiés** — loyer, abonnements, salaire — tout ce qui se répète. Le jour venu, l'application propose de saisir le paiement d'une touche, et « À venir » sur « Aperçu » montre les prochains.

**Rappels** — quand et à propos de quoi l'application envoie une notification. Un écran à part — [plus bas](#settings-reminders).

#### L'écran « Rappels » {#settings-reminders}

[Écran Rappels : Paiements planifiés, Dépenses du jour, Résumé de la semaine, Tous les rappels]

**Paiements planifiés** — « Quand rappeler » — le jour du paiement, 1, 2 ou 3 jours avant ou une semaine avant ; « Heure du rappel » ; « Masquer les montants dans les notifications » — le rappel s'affiche sur l'écran de verrouillage, et sans cela n'importe qui prenant le téléphone lira le montant. **Juste après l'installation :** la veille, à 09:00, montants visibles.

**Dépenses du jour** — « Rappeler de saisir les dépenses » — le soir, si vous n'avez rien noté aujourd'hui. Si vous avez noté, il se tait. **Juste après l'installation :** désactivé, heure 21:00.

**Résumé de la semaine** — « Envoyer un résumé » — le dernier jour de la semaine : combien a été dépensé et pour quoi surtout, quelles catégories s'épuisent, quels paiements planifiés arrivent. **Juste après l'installation :** désactivé.

**Tous les rappels** — « Rappels à l'heure exacte ». Sans autorisation, Android peut envoyer un rappel en retard. L'interrupteur ouvre les paramètres d'Android où cette autorisation se donne.

### Données {#settings-s-data}

Les listes du budget et l'échange de données avec d'autres programmes.

[Section Données : Bénéficiaires, Tags, Export CSV, Import depuis YNAB, À trier]

**Bénéficiaires et Tags** — des listes qui se remplissent d'elles-mêmes à mesure que vous notez des opérations. Tout à leur sujet — l'article [« Bénéficiaires et tags »](#payees-tags).

**Export CSV** — toutes les opérations du budget actuel dans un fichier tableur — à ouvrir dans Excel ou Google Sheets.

*En détail:*
Le fichier contient tout ce qu'a une opération : date, compte, bénéficiaire, catégorie et son groupe, montant et devise, « débité », note, parties d'un montant ventilé, virement, tags, drapeau, reçus électroniques, mois du budget (pour un salaire « pour le mois prochain » — le mois où il est mis de côté), et pour un virement entre devises — combien est arrivé, dans quelle devise et à quel taux. Seuls les photos et PDF ne sont pas exportés : ce sont des fichiers sur le téléphone.

Les noms de colonnes sont en anglais (`date`, `amount`, `tags`…) et ne dépendent pas de la langue de l'application : ainsi les formules et tableaux croisés ne cassent pas si vous changez de langue. Les nombres du fichier sont toujours réels, même si « Masquer les montants » est activé. Le séparateur de champs s'adapte au format des nombres, pour que le tableau s'ouvre en colonnes et non en une seule ligne.

**Import depuis YNAB** — transférer un budget depuis YNAB 4 (fichier .y4backup) ou YNAB web (export .zip) : comptes, catégories et tout l'historique. Après l'import, un lexique indique comment s'appelle ici chaque mot de YNAB.

**À trier** — à la caisse, le montant seul ; le compte et la catégorie, plus tard. Comment ça marche — l'article [« Formulaire d'opération »](#entry). **Juste après l'installation :** désactivé.

### Synchronisation {#settings-s-sync}

Le cloud, les sauvegardes et le transfert du budget entre appareils. Ici, brièvement, ce qui est où ; en détail — l'article [« Cloud et sauvegardes »](#sync).

[Section Synchronisation : Autorisation, Synchronisation, Sauvegardes, Charger le budget depuis le cloud, Transfert local]

**Autorisation** — connecter un cloud : Google Drive, Dropbox ou WebDAV. La règle principale : sur tous les appareils qui tiennent ce budget — **le même compte cloud**, sinon ils ne se verront pas.

*En détail:*
**Si les membres de la famille ont des comptes Google différents**, créez pour le budget un **compte Google à part, tout neuf**, et connectez-vous au cloud de l'application uniquement avec lui, sur tous les appareils. Ne vous connectez pas à votre compte personnel sur le téléphone de votre femme, ni au sien sur le vôtre : le téléphone se mettrait à synchroniser avec ce compte les contacts, les messages et les photos, et les données personnelles de deux personnes se mélangeraient. Un compte à part pour le budget ne connaît que le budget.

**Dropbox** — connectez-vous avec l'**identifiant et le mot de passe** Dropbox, et non avec le bouton « Continuer avec Google ». La connexion via Google lie Dropbox au compte Google utilisé — et sur un appareil avec un autre Google, on tombe facilement dans un autre Dropbox, sans votre budget. L'identifiant et le mot de passe Dropbox fonctionnent de la même façon sur n'importe quel appareil.

**WebDAV** — un cloud qui le prend en charge (Nextcloud, ownCloud, pCloud et autres) ou votre propre serveur ; sur tous les appareils — la même adresse, le même identifiant et le même dossier.

**Synchronisation** — l'échange de modifications avec le cloud et les autres appareils ; ici aussi — le mot de passe qui chiffre le cloud, et le journal de synchronisation.

**Sauvegardes** — les copies du budget : automatiques selon un calendrier et manuelles, sur le téléphone et dans le cloud. D'ici aussi — une « Copie lisible » en fichier.

**Charger le budget depuis le cloud** — nouveau téléphone ou réinstallation — le budget revient du cloud ou d'un fichier de sauvegarde.

**Transfert local** — faire passer un budget d'un de vos appareils à l'autre par WiFi ou par fichier — sans cloud.

### Budget {#settings-s-budget}

Les réglages du budget actuel.

[Section Budget : Devise du budget, Catégories Payez-vous d'abord, Âge de l'argent]

**Devise du budget** — le symbole dans lequel vous tenez vos comptes. Pour ce budget seulement ; l'application ne convertit pas les montants — seul le symbole change.

**Catégories « Payez-vous d'abord »** — quelles catégories compter comme « mis de côté pour soi » — en général l'épargne. Aucune choisie — pas de bloc « Payez-vous d'abord » sur « Aperçu ». Ce qu'il montre — l'article [« Aperçu »](#overview).

**Âge de l'argent** — comment le calculer : trois façons. Un écran à part — [plus bas](#settings-aom).

#### L'écran « Âge de l'argent » {#settings-aom}

[Écran Comment calculer l'âge de l'argent : Classique YNAB FIFO, Avec l'épargne, Avec l'épargne et la profondeur du déficit]

Les trois façons sont décrites à l'écran. Laquelle est la plus proche de la vérité et pourquoi, avec des exemples — l'article [« Aperçu »](#overview), section « L'âge de l'argent en détail ». En bref : **« Avec l'épargne »** compte exactement l'argent qui se trouve sur vos comptes. **Juste après l'installation :** « Classique (YNAB FIFO) ».

### Sécurité {#settings-s-security}

Un verrou sur l'application.

[Section Sécurité : Code PIN]

**Code PIN** — l'application le demande à l'ouverture. Une fois le code PIN défini, « Déverrouillage biométrique » apparaît en dessous — l'empreinte ou le visage au lieu des chiffres.

*En détail:*
Sans code PIN, la biométrie ne s'active pas : sans lui, il n'y a pas de verrou. Tant que le code PIN est défini, la vignette de l'application dans la liste des applications ouvertes est masquée, et un œil indiscret n'y verra pas vos soldes (sur Android 13 et plus récent).

### Apparence {#settings-s-look}

Deux écrans : la langue avec les formats, et toute l'apparence de l'application.

[Section Apparence : Langue et formats, Apparence]

**Langue et formats** — la langue de l'interface, l'affichage des montants et des dates, la saisie du montant. L'écran — [plus bas](#settings-formats).

**Apparence** — thème, style, police, icônes et aspect d'une ligne d'opération. L'écran — [plus bas](#settings-appearance).

#### L'écran « Langue et formats » {#settings-formats}

[Écran Langue et formats : Langue de l'interface, Format des montants, Saisie du montant, Pavé du montant, Format de date]

**Langue de l'interface** — treize langues ; « Par défaut du système » — la langue du téléphone. La langue vit sur cet appareil et ne se synchronise pas : le téléphone peut être en français et l'ordinateur en anglais.

**Format des montants** — séparateurs des milliers et des décimales, côté du symbole de la devise. D'emblée — selon l'usage de la langue choisie : « 1 234 567,89 € ».

**Saisie du montant** — « Avec virgule » ou « Depuis les centimes, comme un terminal » (1-2-5-0, c'est 12,50). **Juste après l'installation :** avec virgule.

**Pavé du montant** — « Pour la main droite » — les chiffres à droite, les opérations à gauche ; « Pour la main gauche » — l'inverse. **Juste après l'installation :** pour la main droite.

**Format de date** — ordre, séparateur, mois en chiffres ou en lettres — 24 variantes au choix.

#### L'écran « Apparence » {#settings-appearance}

[Écran Apparence : Thème, Style, Coins, Couleurs des revenus et des dépenses, Police, Densité, Icônes, Couleur des montants, Forme du drapeau, Revenir à]

**Thème** — « Système », « Clair » ou « Sombre ». « Système » suit le téléphone.

**Style** — le caractère coloré de l'application : « Classique », « Néon », « Aurora », « Acidulé », « Bonbon », « Guimauve », « Graphite ». Chacun en version claire et sombre.

**Coins** — « Nets », « Standard » ou « Doux » — les angles des cartes, des boutons et des puces. Indépendants du style.

**Couleurs des revenus et des dépenses** — « Standard » — revenus en vert, dépenses en rouge. « Renforcées » — revenus en bleu : pour ceux qui distinguent mal le vert du rouge.

*En détail:*
Environ un homme sur douze et une femme sur deux cents voient les couleurs autrement. Il y a trois types :

- **deutéranopie** — perception du vert affaiblie ; le plus fréquent ;
- **protanopie** — perception du rouge affaiblie ;
- **tritanopie** — le bleu et le jaune se confondent ; très rare.

Avec les deux premiers, le vert et le rouge se fondent en un brun semblable, et l'on ne distingue plus un revenu d'une dépense par la couleur. Ces deux types voient bien le bleu — d'où le bleu des revenus dans « Renforcées ».

**Ce que l'application fait déjà pour ces personnes — sans aucun réglage :**

- chaque montant porte un signe « + » ou « − » : le sens de l'opération se voit même sans couleur (et juste après l'installation, les montants des opérations sont de toute façon sans couleur) ;
- un dépassement s'indique non seulement par la couleur, mais aussi par une icône : un portefeuille — votre propre argent est dépensé, une carte — vous vous êtes endetté sur la carte de crédit ;
- une synchronisation échouée change non seulement la couleur de l'icône mais aussi son dessin — un « ! » apparaît dedans ;
- les couleurs des graphiques des rapports sont choisies pour que les parts voisines diffèrent aussi par la luminosité, pas seulement par la teinte.

**Ce que change « Renforcées » :** les revenus en bleu partout — montants, en-tête du formulaire de revenu, graphiques et tableau « Revenus et dépenses » ; les couleurs des drapeaux des opérations s'écartent par la luminosité ; les graphiques des rapports et le « Flux d’argent » utilisent leur propre jeu de couleurs. Chaque jeu est vérifié pendant le développement sur les trois types.

« Renforcées » aide aussi ceux qui distinguent bien les couleurs mais regardent l'écran en plein soleil.

**Police** — celle du système ou l'une des sept : « Fira Sans », « Geologica », « IBM Plex Sans », « Inter », « Manrope », « Noto Sans », « Source Sans 3 » — pour toute l'interface.

**Densité** — « Compacte », « Standard » ou « Aérée » — l'espace entre les lignes et les blocs. La taille des lettres ne change pas.

**Icônes** — « Standard » ou « Bicolores ».

**Couleur des montants** — colorer ou non les montants dans les listes d'opérations : « Sans couleur », « Revenus seulement » ou « Dépenses et revenus ».

*En détail:*
**Juste après l'installation — « Sans couleur »**, et toutes les captures de ce guide sont faites ainsi. Pourquoi : le rouge est la couleur de l'alarme, et acheter du pain ne mérite pas d'alarme ; quand chaque ligne est rouge, la couleur ne dit plus rien. Le sens de l'opération se voit au signe : « − » pour une dépense, « + » pour un revenu. Vous voulez de la couleur ? Choisissez « Dépenses et revenus » ou « Revenus seulement ».

Le dépassement d'une catégorie, la dette et l'état de la synchronisation restent en couleur quel que soit votre choix : là, la couleur avertit.

**Forme du drapeau** — « Point », « Fanion triangulaire » ou « Drapeau ondulé » — l'aspect du drapeau dans les lignes d'opérations.

**Revenir à** — « Aperçu » — après une pause de plus de 30 secondes et au lancement s'ouvre « Aperçu » ; « Là où vous en étiez » — le même écran, même avec un formulaire ouvert. Le code PIN est demandé dans les deux cas.

### Aide et contact {#settings-s-help}

Astuces et contact avec le développeur.

[Section Aide et contact : Astuces, Centre d'aide, Discussion Telegram, Signaler un problème, Proposer une amélioration]

**Astuces** — toutes les astuces de l'application en une liste, par écran. Ici aussi — « Réafficher les astuces ». Les astuces d'un écran s'ouvrent aussi par l'élément « Astuces » de son menu « ⋮ ».

**Centre d'aide** — des articles sur chaque écran, sur le site, dans la langue de l'application ; cet élément ouvre l'accueil. L'article d'un écran s'ouvre par l'élément « Centre d'aide » de son menu « ⋮ ».

**Discussion Telegram** — un groupe où l'on répond aux questions et où l'on peut interroger d'autres utilisateurs.

**Signaler un problème** — un e-mail au développeur. Les versions de l'application et de l'appareil se remplissent d'elles-mêmes ; le journal des événements peut être joint depuis « À propos ».

**Proposer une amélioration** — un e-mail avec une idée : ce qui est gênant aujourd'hui et ce que vous aimeriez.

### À propos {#settings-s-about}

Une ligne, et derrière elle un écran avec la version, les documents et la maintenance.

[Section À propos]

**À propos** — l'écran — [plus bas](#settings-about-screen).

#### L'écran « À propos » {#settings-about-screen}

[Écran À propos : Version, Version Windows, Partager l'application, Politique de confidentialité, Licence, Journal des événements, Réinitialiser toutes les données]

**Version** — le numéro de version ; touchez-le pour « Nouveautés » : ce qui a changé dans les dernières versions.

**Version Windows** — le même budget sur l'ordinateur — dans le Microsoft Store.

**Partager l'application** — envoyer un lien vers l'application sur Google Play.

**Politique de confidentialité et Licence** — les documents. En bref : vos données sont à vous, le développeur n'y a pas accès.

**Journal des événements** — les erreurs de l'application et de la synchronisation. Utile si vous signalez un problème.

**Réinitialiser toutes les données** — supprimer tous les comptes, catégories, opérations, paiements planifiés et objectifs. L'application redemande : « Réinitialiser toutes les données ? ». Impossible d'annuler.

*En détail:*
Si la synchronisation est connectée, les données reviendront du cloud à la prochaine synchronisation. Pour tout supprimer définitivement, déconnectez le cloud ou supprimez-y le fichier de synchronisation. Avant de réinitialiser, faites une copie dans « Sauvegardes ».
