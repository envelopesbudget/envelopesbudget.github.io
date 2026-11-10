# Mijn budget — Kennisbank

## Wat de app kan {#about}

“Mijn budget” is geen huishoudboekje, maar een volwaardig budget volgens de enveloppenmethode. Het kan veel, en het meeste zit niet diep in menu's verstopt, maar in gebaren en kleine details. Deze pagina is een korte rondleiding; daarna heeft elk scherm zijn eigen artikel.

### De kern {#about-main}

Uitgaven bijhouden beantwoordt de vraag “waar is het geld gebleven”. Een budget beantwoordt een belangrijkere: **“waar is het nog genoeg voor”** — vandaag, tot de volgende salarisdag, vóór je vakantie.

##### Enveloppen

Elke euro krijgt een taak: boodschappen, huur, vakantie. Je ziet hoeveel er in elke envelop over is, en een overschrijding wordt meteen rood. Meer in [“Hoe het budget werkt”](#start).

##### Je gegevens zijn van jou

Je budget staat op je telefoon en in je cloud. De ontwikkelaar heeft er geen toegang toe. Je kunt de cloud met een wachtwoord afsluiten — AES-256. Meer in [“Cloud en back-ups”](#sync-password).

##### Overstappen van YNAB

Rekeningen, categorieën en je hele geschiedenis uit YNAB 4 of de webversie van YNAB komen mee als bestand, en een kleine woordenlijst laat zien hoe bekende termen hier heten. Meer in [“Eerste stappen”](#first-steps).

### Snel invoeren {#about-input}

Een aankoop vastleggen bij de kassa is makkelijker dan hem 's avonds proberen te herinneren. Daarom zijn er meerdere manieren.

##### Naar de inbox

Geen tijd om bij de kassa een categorie en rekening te kiezen? Voer alleen het bedrag in. De knop “Naar inbox” bewaart het met het label “Indelen”, en thuis opent het formulier die transacties één voor één. Zet het aan via “Instellingen → GEGEVENS → Inbox”. Meer in [“Transactieformulier”](#entry-inbox).

##### Met je stem

“Albert Heijn 70 Boodschappen van rekening Betaalrekening” — en het formulier is ingevuld. Meer in [“Invoer met je stem”](#voice).

##### Van een bon

Richt de camera op de QR-code van de bon — bedrag en datum vullen zichzelf in, en vanaf de tweede keer herkent de app de winkel aan zijn kassa. Werkt waar de app de bonnen van jouw land kan lezen. Meer in [“Bonscanner”](#receipt).

##### Vanaf het startscherm

Widgets en snelkoppelingen openen het formulier met één tik, zonder de app in te gaan. Meer in [“Widgets en snelkoppelingen”](#widgets).

##### Rekenmachinetoetsen

Bedragen typ je op het eigen toetsenblok van de app, met optellen en aftrekken, verdeeld over meerdere categorieën, overgeboekt tussen rekeningen — zelfs in verschillende valuta. Meer in [“Transactieformulier”](#entry).

### Plannen {#about-plans}

##### Doelen

Vijf soorten: per maand, tegen een datum, een saldo aanhouden, percentage van het inkomen en een boodschappenlijst. De app rekent uit hoeveel je opzij moet zetten. Meer in [“Doelen”](#goals).

##### Geplande betalingen

Huur, abonnementen, aflossingen — met een herinnering vooraf en met één tik ingevoerd. Meer in [“Geplande betalingen”](#scheduled).

##### Creditcards en schulden

Geld om een creditcard af te betalen wordt automatisch opzijgezet, en je ziet de schuld maand na maand. Meer in het scenario [“Creditcards en schulden”](#scenario-credit).

##### Tags en “wie is wie wat schuldig”

Een reis, een verbouwing, gedeelde kosten met vrienden — een tag verzamelt ze uit verschillende categorieën en rekent uit wie wie wat schuldig is. Meer in [“Begunstigden en tags”](#payees-tags).

### Rapporten {#about-reports}

Tien rapporten: waar het geld heen ging, trend en afwijking van normaal, de geldstroom van inkomen naar uitgaven, inkomsten en uitgaven per maand, leeftijd van het geld, vermogen, creditcardschuld. En “Overzicht” is je startscherm: de blokken kies en rangschik je zelf. Meer in [“Rapporten”](#reports) en [“Overzicht”](#overview).

### Apparaten en cloud {#about-devices}

Eén budget op je telefoon, tablet en Windows-computer — voor twee of voor het hele gezin. Synchronisatie via Google Drive, Dropbox of WebDAV — Nextcloud, ownCloud, pCloud, je eigen server; back-ups worden automatisch volgens een schema gemaakt. Meer in de scenario's [“Eén budget op meerdere apparaten”](#scenario-devices) en [“Met twee of meer in één budget”](#scenario-together).

### Naar jouw smaak {#about-yours}

Dertien talen, zestig valuta, bedrag- en datumnotaties voor jouw land. Zeven stijlen in licht en donker, lettertypen, dichtheid, hoekvormen, pictogrammen. Meerdere budgetten: persoonlijk, gezin, werk. Meer in [“Instellingen”](#settings).

### Waar beginnen {#about-start}

1. [“Hoe het budget werkt”](#start) — de enveloppenmethode in tien minuten.
2. [“Eerste stappen”](#first-steps) — van installeren tot je eerste maand.
3. [Scenario's](#scenario-paycheck) — kant-en-klare antwoorden: van salaris tot salaris, freelance, creditcards, op reis met vrienden.

## Hoe het budget werkt {#start}

De enveloppenmethode in tien minuten: waar het geld binnenkomt, hoe je het verdeelt en wat er gebeurt als de maand omslaat.

### Enveloppen: het grote idee {#start-idea}

Stel je voor dat je je salaris contant opneemt en verdeelt over enveloppen: “Boodschappen”, “Nutsvoorzieningen”, “Vakantie”. Als je boodschappen doet, pak je alleen geld uit die envelop. Een lege envelop betekent: daar is geen geld meer voor. De app doet precies dit, alleen zonder papier.

(1)
##### Geld op je rekeningen

Betaalrekening — € 1.700

Contant — € 200

(2)
##### “Niet toegewezen”

€ 1.900 — nog zonder taak

(3)
##### Categorie-enveloppen

Boodschappen — € 550

Nutsvoorzieningen — € 170

…enzovoort, tot het op 0 staat

(4)
##### Uitgeven

Je kocht brood — de envelop “Boodschappen” werd dunner

Elke euro op je rekeningen staat op precies één plek: in een envelop of bij “niet toegewezen”. Zo zie je op elk moment wat je je nog kunt veroorloven en wat niet. Het eerste doel is om “niet toegewezen” naar nul te brengen: dan **heeft elke euro een taak**. Dat is geen eindstreep maar de eerste stap — waar de methode je daarna brengt, staat [aan het eind van het artikel](#start-ladder).

Hoe dit verschilt van gewoon “uitgaven bijhouden”, staat [hieronder](#start-vs).

### Hoe dit verschilt van uitgaven bijhouden {#start-vs}

Veel mensen houden jarenlang hun uitgaven bij — in een schrift, een spreadsheet, de app van hun bank — en zien toch niet waarom het geld eerder op is dan de maand. Uitgaven bijhouden vertelt je eerlijk over het verleden. Enveloppen helpen je de toekomst te sturen.

|  | Uitgaven bijhouden | Budgetteren met enveloppen |
|---|---|---|
| Wanneer je over geld nadenkt | Na het uitgeven: je kijkt waar het heen ging. | Vóór het uitgeven: je beslist hoeveel je kunt uitgeven. |
| De hoofdvraag | “Waar is het geld gebleven?” | “Wat kan ik me nog veroorloven?” |
| Overschrijding | Je merkt het aan het eind van de maand, als het te laat is. | Je ziet het meteen: de envelop wordt rood op het moment dat je koopt — en je schuift geld over uit een andere. |
| Geld op de bank | Eén getal: “er staat € 1.400 op de betaalrekening, dus ik heb geld”. | Verdeeld naar taak: een deel is al beloofd aan de huur, een deel aan de vakantie. Alleen wat in de juiste envelop zit, is vrij. |
| Je salaris | Gewoon inkomen dat “op de een of andere manier opgaat”. | Geld waaraan je meteen een taak geeft. |
| Onregelmatige uitgaven | Een verzekering of reparatie overvalt je. | Elke maand een beetje opzij — als de rekening komt, ligt het geld er al. |

(€ 1.400)
#### Voorbeeld: “er staat nog genoeg op de rekening”

Het is half de maand en er staat € 1.400 op de betaalrekening. Je wilt een koptelefoon van € 280.

*Hoe het werkt:*
**Uitgaven bijhouden** ziet € 1.400 en zegt: “ga je gang”. Maar over een week moet de huur betaald worden — € 800, plus nutsvoorzieningen en boodschappen tot de salarisdag. De koptelefoon is gekocht, en de huur schiet tekort.

**Enveloppen** zien dezelfde € 1.400, maar verdeeld: “Huur” — € 800, “Nutsvoorzieningen” — € 170, “Boodschappen” — € 260, “Uitgaan en hobby's” — € 170. Er is € 170 vrij voor een koptelefoon. Wil je hem nu kopen? Beslis dan uit welke envelop de ontbrekende € 110 komt. Jij neemt de beslissing, en je neemt hem vóór het kopen, niet erna.

(?)
#### Dus wordt er hier ook bijgehouden?

Ja — en gedetailleerder dan in een schrift.

*Hoe het werkt:*
Elke aankoop wordt vastgelegd, en “Waar het geld heen ging”, “Uitgaven deze maand” en de rapporten laten zien waar alles heen ging. Alleen is dat hier niet het doel maar een controle van het plan: klopte wat je besloot met wat er gebeurde? Volgende maand budgetteer je preciezer.

(↻)
#### Kort gezegd

Uitgaven bijhouden is de achteruitkijkspiegel. Enveloppen zijn het stuur.

*Hoe het werkt:*
In de spiegel kijken is nuttig: je ziet waar je vandaan komt. Maar alleen het stuur helpt je vooruit — een beslissing over waar het geld heen gaat, vooraf genomen.

### Drie getallen per categorie {#start-envelope}

Draai je telefoon op zijn kant — het scherm “Budget” wordt een tabel, en de drie getallen van de envelop staan gewoon in de kolomkoppen.

[Budget liggend: kolommen Categorie, Gepland, Uitgegeven, Beschikbaar; Nutsvoorzieningen 100, −92,74, 29,44]
Telefoon op zijn kant: hetzelfde “Budget” als tabel. In de gewone weergave is “Beschikbaar” het bedrag rechts van de categorie, en “… van … uitgegeven” de regel onder de balk.

1. **“Gepland”** — hoeveel je deze maand in de envelop stopt. Het is een beslissing: “€ 100 voor nutsvoorzieningen in november”.

2. **“Uitgegeven”** — hoeveel er al uit de envelop is gegaan: alle uitgaven in deze categorie deze maand, met een minteken. Een terugbetaling voor een geretourneerd artikel maakt dit getal kleiner.

3. **“Beschikbaar”** — hoeveel je nog kunt uitgeven: overgedragen van vorige maand + gepland − uitgegeven.

   *Hoe het werkt:*
   Op de schermafbeelding staat bij “Nutsvoorzieningen” gepland 100, uitgegeven 92,74 — dus je zou denken dat er 7,26 over is. Maar er is 29,44 beschikbaar: € 22,18 werd in oktober niet uitgegeven en ging mee naar november. Zo groeit een envelop.

   Een groene chip betekent dat er geld in de envelop zit, een grijze nul dat hij leeg is, en rood een min: je gaf meer uit dan er was.

[Budgetscherm: categoriegroepen, bedragen rechts, balken en regels met uitgaven]

Hoe het er op het scherm uitziet en waar je op tikt, staat in het artikel [“Budget”](#budget). Hier alleen de regels die de getallen volgen.

(€)
#### Inkomen gaat naar “niet toegewezen”, niet naar een categorie

Je salaris komt niet vanzelf in een envelop terecht: het gaat naar “niet toegewezen”, en jij verdeelt het.

*Hoe het werkt:*
In het transactieformulier wordt inkomen standaard geboekt op “Inkomsten voor november” — dus bij het “niet toegewezen” van deze maand. Je kunt ook “Inkomsten voor december” kiezen — zie het onderdeel [“Leeftijd van het geld in detail”](#overview) van het artikel “Overzicht”.

(↺)
#### Een terugbetaling gaat terug naar de envelop

Geld teruggekregen voor een geretourneerd artikel? Het gaat naar de categorie waar het uit kwam, niet naar inkomen.

*Hoe het werkt:*
Hoe je het vastlegt — het artikel [“Transactieformulier”](#entry), onderdeel “Terugbetaling voor een geretourneerd artikel”.

(⇄)
#### Een overboeking is geen uitgave

Je nam contant geld op, betaalde een creditcard af, zette geld op je spaarrekening — het geld is nog steeds van jou.

*Hoe het werkt:*
Een overboeking tussen budgetrekeningen raakt geen enkele envelop. Alleen een overboeking naar een rekening buiten het budget (sparen, een deposito) verlaat de enveloppen — dan vraagt de app om een categorie.

### Maand na maand {#start-months}

Het budget leeft in maanden. Wat er met een envelop gebeurt als de maand omslaat, is een van de belangrijkste regels.

(+)
#### Een plus gaat mee

Niet alles uitgegeven? De rest gaat naar de volgende maand en blijft in de envelop.

*Hoe het werkt:*
Zo spaar je voor grote en onregelmatige dingen: stop elke maand € 150 in “Vakantie”, geef het niet uit — en tegen de zomer staat er € 900. Je kunt ook meteen geld voor later opzijzetten: je kunt geld toewijzen aan elke maand vooruit — de pijl “›” op het scherm “Budget”.

(−)
#### Een min wordt op nul gezet

Meer uitgegeven dan er in de envelop zat? De categorie wordt rood. Als de maand omslaat, wordt de min gewist — maar niet spoorloos.

*Hoe het werkt:*
Een min uit je eigen geld (rood, portemonnee-pictogram) verkleint het “niet toegewezen” van volgende maand: het geld is immers al uitgegeven. Daarom dek je een min het best meteen door geld uit een andere categorie over te schuiven: tik op het rode bedrag op het scherm “Budget”.

Een min op een creditcard (geel, kaartpictogram) is een ander verhaal: die eet je geld niet op, maar laat de kaartschuld groeien. “Niet toegewezen” neemt hem niet over, maar de schuld moet nog wel betaald worden.

(≡)
#### “Maandbudget” op “Overzicht”

De hele boekhouding van de maand als één ladder: overgedragen van vorige maand, inkomen, toegewezen en het totaal “niet toegewezen”.

*Hoe het werkt:*
Ziet het getal op de chip er vreemd uit, kijk dan hier: je ziet waar het vandaan komt. Meer in het artikel [“Overzicht”](#overview).

### Een creditcard in het budget {#start-credit}

De creditcard is het minst vertrouwde deel van de enveloppenmethode. Er is één regel: een aankoop met de creditcard besteedt envelopgeld precies zoals een aankoop met de betaalpas.

(1)
#### De aankoop

Je kocht voor € 35 boodschappen met de creditcard — de envelop “Boodschappen” werd zoals gewoonlijk € 35 dunner.

(2)
#### Geld voor de aflossing zet zichzelf opzij

De app schuift deze € 35 naar de groep “Kaartbetalingen”, naar de categorie van je creditcard.

*Hoe het werkt:*
Zo ligt het geld voor het aflossen op de betaaldatum al apart, en kun je het niet per ongeluk uitgeven. Zelf hoef je niets opzij te zetten.

(3)
#### De kaart aflossen

Los de creditcard af met een overboeking van je gewone rekening naar de creditcard. Het opzijgezette geld gaat naar de aflossing.

*Hoe het werkt:*
Hoe je een overboeking vastlegt — het artikel [“Transactieformulier”](#entry).

### De vier regels van de methode {#start-rules}

De app dwingt je niet ze te volgen — hij stelt ze één voor één voor, als een regel van pas komt.

(1)
#### Geef elke euro een taak

Blijf geld toewijzen tot “niet toegewezen” op nul staat. Geld zonder taak glipt ongemerkt weg.

(2)
#### Omarm je echte uitgaven

Eén keer per jaar een verzekering, een autoreparatie, cadeaus voor de feestdagen — ook dat zijn uitgaven. Zet er elke maand een beetje voor opzij.

*Hoe het werkt:*
Doelen “Tegen datum” helpen: de app rekent uit hoeveel je elke maand moet inleggen om op tijd te zijn.

(3)
#### Vang de klappen op

Een overschrijding is geen mislukking. Schuif geld over uit een andere envelop en ga verder.

*Hoe het werkt:*
Een budget is een plan, geen gelofte. Waar het om gaat, is dat de enveloppen eerlijk laten zien hoeveel er over is.

(4)
#### Laat je geld ouder worden

Het doel is om geld uit te geven dat je een maand geleden verdiende, niet gisteren.

*Hoe het werkt:*
“Leeftijd van het geld” op “Overzicht” houdt dit bij. Zodra het 30 dagen bereikt, kun je leven van het geld van vorige maand: details in het artikel [“Overzicht”](#overview).

### Nul is pas de eerste stap {#start-ladder}

“Niet toegewezen” op nul is een goed doel, maar niet het laatste. De methode gaat verder: van “ik red het tot de salarisdag” naar “mijn geld werkt voor mij”. De stappen komen in volgorde — overslaan is riskant: beleggen zonder buffer betekent je beleggingen verkopen zodra de auto voor het eerst kapotgaat.

(1)
#### Elke euro heeft een taak

Al het geld op je rekeningen is verdeeld over enveloppen. Je weet wat je je tot het eind van de maand kunt veroorloven.

**Hoe je weet dat je hier bent:** “niet toegewezen” staat op nul, en geen enkele categorie is rood.

**Hoe de app helpt:** de chip “Niet toegewezen”, automatisch toewijzen, “Alle overschrijdingen dekken”.

(2)
#### Enveloppen voor onregelmatige uitgaven

Verzekering, autoreparaties, cadeaus en vakanties overvallen je niet meer: er gaat elke maand een beetje naartoe.

**Hoe je weet dat je hier bent:** er komt een grote rekening, en het geld ervoor wacht al in zijn envelop.

**Hoe de app helpt:** de doelen “Tegen datum” en “Maandelijks” rekenen uit hoeveel je moet inleggen; het blok “Wat eraan komt” op “Overzicht” herinnert je eraan waar geld tekortkomt.

(3)
#### Een maand vooruit

Je geeft geld uit dat je een maand geleden verdiende. Deze maand heeft het nieuwe salaris niet nodig — het gaat naar de volgende.

**Hoe je weet dat je hier bent:** “Leeftijd van het geld” is 30 dagen of meer.

**Hoe de app helpt:** “Leeftijd van het geld” op “Overzicht”, inkomen “voor volgende maand” in het formulier — details in het artikel [“Overzicht”](#overview), onderdeel “Leeftijd van het geld in detail”.

(4)
#### Een noodfonds

Een reserve van drie tot zes maanden normale uitgaven. Je baan verliezen of ziek worden wordt een tegenslag, geen ramp.

**Hoe je weet dat je hier bent:** in “Noodpotje” staan de uitgaven van een paar maanden.

**Hoe de app helpt:** een doel “Saldo” op de categorie “Noodpotje”; gemiddelde maanduitgaven — in de rapporten en op het categoriescherm.

(5)
#### Je geld werkt voor jou

De buffer staat, onregelmatige uitgaven zijn gedekt, je loopt een maand voor — en nu kan het overschot meer dan alleen stilliggen: een deposito, obligaties, beleggingen. Geld begint geld op te leveren.

**Hoe je weet dat je hier bent:** elke maand gaat een deel van je inkomen naar “Beleggingen”, en je komt er voor dagelijkse uitgaven niet aan.

**Hoe de app helpt:** de groep “Sparen” met een categorie “Beleggingen”; “Betaal jezelf” op “Overzicht” toont welk percentage van je inkomen je opzijzet (de norm is 10% of meer); een rekening “Alleen bijhouden” voor een deposito of beleggingsrekening; “Vermogen” op “Overzicht” — hoe alles wat je bezit groeit.

Hoe lang de weg duurt, hangt af van je inkomen en gewoonten. De eerste stap is meestal de eerste maand. Een maand vooruit komen duurt drie maanden tot een jaar. Waar het om gaat, is elke maand een stap te zetten, geen sprong.

Klaar om te beginnen? Volgende — [“Eerste stappen”](#first-steps): van de eerste keer openen tot je eerste maand.

## Eerste stappen {#first-steps}

Van de eerste keer openen tot een werkend budget: de installatiewizard, de lijst “Eerste stappen” en wat je in je eerste maand doet.

*Hoe de methode zelf werkt, staat in [“Hoe het budget werkt”](start.md)*

### Eerste keer openen: hoe wil je beginnen {#first-steps-welcome}

Bij de eerste keer openen start de installatiewizard. Het eerste scherm biedt drie deuren. De taal wijzig je meteen hier met de knop rechtsboven: de categorieën die de app standaard voorstelt, komen dan ook in die taal.

[Stap 1 van 6: Welkom, taalknop, drie opties: Ik begin opnieuw, Ik heb al een budget, Ik stap over van YNAB]

(A)
#### “Ik begin opnieuw”

De wizard leidt je door vijf stappen: valuta en naam, rekeningen, categorieën, je eerste toewijzing. De stappen staan hieronder uitgelegd.

(B)
#### “Ik heb al een budget”

Je hield een budget bij op een andere telefoon of vóór het opnieuw installeren. De app laadt het uit de cloud — Google Drive, Dropbox of WebDAV — of uit een back-upbestand.

*Hoe het werkt:*
De naam wordt hier niet gevraagd: die komt mee met het budget en dient als adres van zijn map in de cloud.

(C)
#### “Ik stap over van YNAB”

YNAB 4 of de webversie van YNAB: rekeningen, categorieën en geschiedenis komen mee uit een bestand.

*Hoe het werkt:*
Eerst de valuta en naam, dan kies je het exportbestand, en aan het eind staat een woordenlijst: hoe elke YNAB-term hier heet. De woordenlijst kun je later ook openen, bij het importeren vanuit de instellingen.

Ongeveer vijf minuten. Elke stap kun je overslaan — de lijst “Eerste stappen” op “Overzicht” herinnert je aan wat er nog openstaat.

### Opnieuw beginnen: vijf stappen {#first-steps-fresh}

Onder elke stap staan “Volgende” en “Overslaan”. De Terug-knop van het systeem brengt je een stap terug in plaats van de app te sluiten.

[Stap 2. Valuta en naam]

(•)
#### Stap 2. Valuta en naam

De app vult de valuta in op basis van het land van je telefoon — controleer het. Dit is het symbool waarin je je budget bijhoudt; de app rekent bedragen niet om.

*Hoe het werkt:*
Bedenk een eigen naam: “Gezin”, “Persoonlijk”. Laat je het veld leeg, dan heet het budget “Mijn budget”. De naam staat in de kop en in de naam van de map in de cloud, zodat je het budget op elk apparaat makkelijk herkent.

[Stap 3. Waar je geld staat]

(•)
#### Stap 3. Waar je geld staat

Voeg elke plek toe waar je geld hebt, met het saldo van vandaag: je portemonnee, passen bij elke bank, een creditcard, spaargeld.

*Hoe het werkt:*
Laat je ook maar één pas weg, dan klopt het budget niet met wat je echt hebt. Tik op “+” naast een passend sjabloon — het blad voor een nieuwe rekening opent met het type al gekozen. Het saldo van de rekening gaat meteen naar “niet toegewezen” — op de schermafbeelding brachten twee rekeningen € 1.900 binnen. Meer over rekeningen in het artikel [“Saldo's”](#accounts).

[Stap 4. Je categorieën]

(•)
#### Stap 4. Je categorieën

De chips “Waar je geld aan uitgeeft” voegen de categorieën toe die je nodig hebt: “Auto”, “Kinderen”, “Huisdieren”. Daaronder staat de hele lijst, en die kun je naar je hand zetten.

*Hoe het werkt:*
- tik op een categorie om haar te hernoemen;
- het kruisje verwijdert een categorie;
- “Categorie toevoegen” staat in elke groep, “Nieuwe groep toevoegen” onderaan;
- het potlood naast een groepsnaam — de groep hernoemen.

De schermafbeelding toont het begin van de lijst; hij is langer.

[Stap 5. Wijs je geld toe]

(•)
#### Stap 5. Wijs je geld toe

Verdeel “niet toegewezen” over de enveloppen: tik op het bedrag naast een categorie en voer in hoeveel je er deze maand aan wilt uitgeven.

*Hoe het werkt:*
Bovenaan staat hoeveel er over is. Op de schermafbeelding is € 840 toegewezen en € 1.060 over. Je hoeft hier niet op nul te komen: begin met het belangrijkste — wonen, eten, telefoon — en wijs de rest later toe op het scherm “Budget”.

[Stap 6. Alles klaar]

(•)
#### Stap 6. Alles klaar

Nog één keer de hoofdregel: blijf geld toewijzen tot “niet toegewezen” op nul staat.

*Hoe het werkt:*
“Budget openen” brengt je naar het scherm “Budget”. Vanaf daar geeft de app onderweg tips — één tip tegelijk, als hij van pas komt.

### Na de wizard: de lijst “Eerste stappen” {#first-steps-first-steps}

Bovenaan “Overzicht” verschijnt een lijstkaart. Daarin staat wat het budget nodig heeft voordat het de waarheid kan laten zien. Wat je al deed, telt de wizard er al in mee.

[Overzicht met de kaart Eerste stappen: 3 van 6, Geld toegewezen uitgeklapt, 1.900 niet toegewezen, knop Naar budget]

1. **Contant geld in je portemonnee** — Je portemonnee als aparte rekening. Contant geld raakt als eerste zoek: zonder eigen rekening loopt het budget al bij de allereerste aankoop weg van het geld in je handen. Geen contant geld? — “Geen contant geld”.
2. **Kaarten van alle banken** — Alle passen en rekeningen zijn toegevoegd. Deed je dat in de wizard, dan is het punt al afgevinkt.
3. **Categorieën op maat** — De categorielijst is aangepast. Ging je door de stap met categorieën — dan is hij afgevinkt. De knop opent hetzelfde scherm als in de wizard. Een categorie die al transacties heeft, wordt door het kruisje niet verwijderd maar verborgen: de transacties blijven waar ze zijn.
4. **Geld toegewezen** — “Niet toegewezen” staat op nul. Tot die tijd toont het punt hoeveel er nog over is en brengt het je naar “Budget”.
5. **Eerste transactie** — Je hebt je eerste aankoop vastgelegd — het budget is tot leven gekomen. De knop opent het formulier.
6. **Een kopie buiten de telefoon** — Een cloud of een back-upbestand. Raak je je telefoon kwijt, dan ben je je budget niet kwijt. Knoppen: een cloud koppelen of “Back-ups”.

(1)
#### Afgeronde punten krijgen een vinkje

Bovenaan “3 van 6”: hoeveel er klaar zijn. Een afgerond punt is één regel met een vinkje.

(2)
#### Eén punt is uitgeklapt

Het eerste onafgeronde — of het punt waarop je tikte. Het zegt wat je moet doen en waarom.

(3)
#### De hoofdknop is een deur

Hij brengt je rechtstreeks naar waar het punt gedaan wordt: het rekeningformulier, “Budget”, het transactieformulier, inloggen bij de cloud. Soms staat er een tweede naast — jouw antwoord: “Geen contant geld”, “Allemaal toegevoegd”, “Zo laten”.

(⋮)
#### De lijst verbergen

Menu van de kaart → “Lijst verbergen” (met “Ongedaan maken” onderaan het scherm). Als alles klaar is, zegt de kaart “Je budget staat klaar” — tik op “Duidelijk”.

*Hoe het werkt:*
Zolang de lijst open is, zwijgen de gewone tips op “Overzicht” — zodat hetzelfde niet twee keer gezegd wordt. Alle tips terughalen: “Instellingen → HELP EN CONTACT → Tips → Tips opnieuw tonen”.

Stapte je over van YNAB, dan is de lijst anders: rekeningsaldi afstemmen met de bank, contant geld, toewijzen en een back-up — de rekeningen en categorieën kwamen al mee in het bestand.

### Je eerste maand {#first-steps-month1}

1. **Leg elke aankoop vast** — meteen, bij de kassa: “+ Transactie”, de camera voor een bon of de microfoon. Vijf seconden nu in plaats van later een avond met een bankafschrift. Geen tijd? — “Inbox” (artikel [“Transactieformulier”](#entry)).
2. **Geld binnengekomen — verdeel het.** Elk salaris komt in “niet toegewezen”; verdeel het over de enveloppen op het scherm “Budget”.
3. **Een envelop werd rood — schuif geld over** uit een andere. Dat is normaal: de eerste maand laat altijd zien wat je onderschatte.
4. **Stem één keer per week je rekeningen af** met de bank — menu van de rekening, “Saldo afstemmen” (artikel [“Saldo's”](#accounts)).
5. **Kijk aan het eind van de maand naar “Overzicht”**: “Waar het geld heen ging”, “Uitgaven deze maand”. Volgende maand wijs je toe op basis van ervaring.

## Eén budget op meerdere apparaten {#scenario-devices}

Een telefoon in je zak, een tablet thuis, een computer op je werk — en op allemaal hetzelfde budget. Leg een aankoop vast bij de kassa, en 's avonds staat hij op je laptop. Hoe je het instelt en waar je op moet letten.

*“Instellingen”, onderdeel “SYNCHRONISATIE”*

### Wie heeft dit nodig {#scenario-devices-who}

##### Telefoon en computer

Uitgaven via de telefoon, bij de kassa. De maand plannen, rapporten en overzichten op een groot scherm. Voor de computer is er de “Versie voor Windows”: hetzelfde budget, met een eigen weergave gemaakt voor de muis. Die synchroniseert via Google Drive — speelt er een computer mee, kies dan ook op de telefoon die cloud.

##### Telefoon en tablet

Een salaris over enveloppen verdelen gaat prettig op een tablet: “Budget” liggend is een tabel over het hele scherm.

##### Een nieuwe telefoon

De oude is kapot of je hebt een nieuwe — jaren budget verhuizen in een paar minuten. Het is hetzelfde scenario: de nieuwe telefoon is het tweede apparaat.

Een cloud verbindt de apparaten: Google Drive, Dropbox of WebDAV (Nextcloud, ownCloud, pCloud, je eigen server). Elk apparaat stuurt zijn wijzigingen daarheen en haalt die van de andere op. Hoe het in detail werkt — in het artikel [“Cloud en back-ups”](#sync).

### Op het eerste apparaat {#scenario-devices-first}

Het apparaat waarop je het budget al bijhoudt.

1. “Instellingen”, onderdeel “SYNCHRONISATIE” → “Autorisatie”.
2. Log in bij de cloud. Voor Google Drive — met het Google-account dat je ook op de andere apparaten gebruikt. Voor Dropbox — met je e-mail en wachtwoord van Dropbox, niet via Google. Komt er een Windows-computer bij? Kies Google Drive: de versie voor Windows koppelt niet aan andere clouds.
3. Wil je de gegevens in de cloud met een wachtwoord afsluiten? — “Wachtwoord instellen” in het blok “Cloudversleuteling”. Schrijf het wachtwoord op: niemand kan het herstellen.
4. Ga terug naar “Overzicht” en tik rechtsboven op het synchronisatiepictogram. Het budget gaat naar de cloud.

[Scherm Autorisatie: Cloudversleuteling, Google Drive, Dropbox, WebDAV]
“Autorisatie” — hier koppel je een cloud. Elke cloud in detail — in het artikel [“Cloud en back-ups”](sync.md#auth).

### Op het tweede apparaat {#scenario-devices-second}

##### De app is net geïnstalleerd

1. Kies in de wizard bij de eerste keer openen “Ik heb al een budget”.
2. “Budget uit de cloud laden” opent. Koppel **dezelfde** cloud met **hetzelfde** account.
3. Kies het budget in de lijst en tik op “Budget laden”.
4. Is er op het eerste apparaat een wachtwoord ingesteld, stel dan hier hetzelfde in.
5. Controleer de valuta: “Instellingen” → “Valuta van het budget”. Details — [hieronder](#scenario-devices-per-device).

[Scherm Budget uit de cloud laden: stap 1 Koppel een cloud, stap 2 Naam van het budget]
“Budget uit de cloud laden” — eerst de cloud, dan een budget uit de lijst.

##### De app staat er al, met een eigen budget

“Instellingen”, onderdeel “SYNCHRONISATIE” → “Budget uit de cloud laden” — daarna dezelfde stappen. Of tik op de naam van het budget in de kop van “Overzicht” — daar staat “Budget uit de cloud laden” ook.

*Hoe het werkt:*
Heeft een budget met dezelfde naam op dit apparaat al eigen gegevens, dan vraagt de app bij de eerste synchronisatie of het één budget is of twee verschillende: “Uit de cloud” of “Samenvoegen”. Meer in het artikel [“Cloud en back-ups”](#sync-trouble).

### Wat gedeeld wordt en wat elk apparaat voor zich houdt {#scenario-devices-per-device}

Wat synchroniseert, zijn de **gegevens van het budget**. Weergave- en beveiligingsinstellingen niet: elk apparaat heeft zijn eigen.

| Gedeeld op alle apparaten | Apart op elk apparaat |
|---|---|
| Rekeningen, hun pictogrammen en kleuren | Taal en notaties |
| Categorieën en groepen, notities bij categorieën | Weergave: stijl, thema, lettertype, hoeken |
| Transacties, tags, begunstigden | Inloggen met pincode en vingerafdruk |
| Per maand opzijgezette bedragen, doelen en regels van een “Lijst” | Het cloudwachtwoord — maar het moet hetzelfde zijn |
| Geplande betalingen | Herinneringen |
| Foto's en pdf's — als “Foto's synchroniseren” aanstaat | Back-upschema |
| | **Valuta van het budget** |

##### Valuta van het budget — controleer haar op elk apparaat

Het valutasymbool van het budget staat op het apparaat en gaat niet naar de cloud. Een geladen budget krijgt de valuta van het budget dat al op dit apparaat stond — meestal op basis van het land van de telefoon. De bedragen veranderen niet, alleen het symbool ernaast. Verkeerd symbool? — “Instellingen” → “Valuta van het budget”.

##### Foto's van bonnen

Direct na het installeren blijven foto's op het apparaat waar ze gemaakt zijn. Om ze overal te zien, zet je op het scherm “Synchronisatie” “Foto's synchroniseren” aan — op **elk** apparaat.

### Elke dag {#scenario-devices-daily}

##### Met de hand synchroniseren hoeft zelden

De app synchroniseert zelf — een paar seconden na elke keer dat je hem opent. Het getal op het synchronisatiepictogram op “Overzicht” is hoeveel van je wijzigingen nog niet naar de cloud zijn.

##### Aankoop vastgelegd en telefoon weggelegd

Als de app geminimaliseerd is, laat Android hem niet doorwerken, dus de wijzigingen gaan de volgende keer dat je hem opent. Ga je zo achter je computer zitten, tik dan op de telefoon op het synchronisatiepictogram zodat de aankoop er al staat.

##### De kleur van het synchronisatiepictogram

Groen geflitst — alles goed. Rood — het lukte niet; één mislukking betekent meestal gewoon geen netwerk. Blijft het pictogram rood, dan is de synchronisatie meerdere keren achter elkaar mislukt — open het scherm “Synchronisatie”, daar staat wat er gebeurde.

### Veelgemaakte fouten {#scenario-devices-mistakes}

| Wat er gebeurde | Waarom, en wat te doen |
|---|---|
| Het tweede apparaat heeft de wijzigingen van het eerste niet | De apparaten logden in bij de cloud met **verschillende** accounts — elk schrijft naar zijn eigen cloud. Log overal in met één account. |
| “De cloud is met een wachtwoord beveiligd” | Het wachtwoord is op één apparaat ingesteld, en op het andere niet of anders. Stel **hetzelfde** in. |
| Foto's kwamen aan maar openen niet | Hetzelfde: het wachtwoord verschilt tussen de apparaten. |
| Budget hernoemd — het tweede apparaat ziet geen wijzigingen meer | De naam van het budget is het adres van zijn map in de cloud. Hernoem het budget na het hernoemen op de andere apparaten op precies dezelfde manier. |
| “Conflict” | Hetzelfde record werd op twee apparaten gewijzigd voordat ze synchroniseerden. De kaart toont beide versies — kies de gewenste. |

### Zonder cloud {#scenario-devices-no-cloud}

Geen cloud? Je kunt het budget rechtstreeks tussen je eigen apparaten verplaatsen: als bestand of via wifi op hetzelfde netwerk. Het is een eenmalige overdracht, geen doorlopende synchronisatie: wijzigingen moet je opnieuw overzetten. Goed voor een verhuizing naar een nieuwe telefoon. Meer in het artikel [“Cloud en back-ups”](#sync-local).

## Met twee of meer in één budget {#scenario-together}

Een gezin met gedeeld geld: beiden betalen, beiden leggen vast, beiden zien hoeveel er in elke envelop over is. Hoe je afspraken maakt met de app en met elkaar, zodat er geen verwarring en geen dubbele boekingen ontstaan.

*“Instellingen”, onderdeel “SYNCHRONISATIE”*

### Voor wie {#scenario-together-who}

Het geld is gedeeld: de salarissen gaan op één hoop, en huur, eten en vakanties komen uit de gezamenlijke pot. Ieder betaalt met een eigen pas of contant, maar de enveloppen zijn gedeeld: jullie zien allebei “Boodschappen”, en wie als eerste de grens raakt, ziet rood.

Heeft ieder van jullie ook eigen geld dat de ander niet hoeft te zien, kijk dan naar het scenario [“Stel: gedeelde kosten en eigen geld”](#scenario-couple).

### Instellen {#scenario-together-setup}

Technisch is dit hetzelfde budget op meerdere apparaten — de stappen staan in het scenario [“Eén budget op meerdere apparaten”](#scenario-devices). Er is één verschil, en dat is belangrijk.

##### Een apart cloudaccount — alleen voor het budget

Alle apparaten moeten bij de cloud inloggen met **één** account. Maar het persoonlijke Google-account van de man op de telefoon van de vrouw zetten is een slecht idee: de telefoon gaat dan zijn contacten, foto's en e-mail synchroniseren.

Maak een **nieuw** Google-account — alleen voor het budget — en log daarmee op elk apparaat in bij de cloud van de app. Iedereen houdt zijn eigen persoonlijke accounts. Voor Dropbox hetzelfde: een aparte Dropbox, ingelogd met e-mail en wachtwoord.

##### Eén cloudwachtwoord voor iedereen

Stel je een wachtwoord in, stel dan op elke telefoon **hetzelfde** in. Het wachtwoord synchroniseert niet: het wordt op elk apparaat met de hand ingevoerd.

### Wie betaalde wat {#scenario-together-whose}

De app onthoudt niet op welke telefoon een transactie is vastgelegd. Het is de **rekening** die uitgaven uit elkaar houdt.

##### Een rekening per persoon

Geef iedereen eigen rekeningen: “Pas van Sanne”, “Pas van Daan”, “Contant van Sanne”. Op welke rekening een aankoop staat, die persoon heeft betaald. Ieder stemt de rekeningsaldi af met de eigen bank — “Saldo afstemmen” in het artikel [“Saldo's”](#accounts).

Wiens uitgaven deze maand — “Boekingen” → “⋮” → “Filter”, filter op rekening.

##### Als je “wie is wie wat schuldig” nodig hebt

In een gedeeld budget meestal niet: het geld is toch gedeeld. Maar hebben jullie afgesproken iets te delen — dan laat een tag met “Verrekening” aan voor die aankopen zien wie wie hoeveel schuldig is. Meer in het artikel [“Begunstigden en tags”](#payees-tags).

### Geld toewijzen {#scenario-together-assign}

Een salaris over enveloppen verdelen gaat makkelijker met één persoon — of met z'n tweeën achter één scherm.

##### Waarom niet ieder vanaf de eigen telefoon

Wijzigen jullie tegelijk hoeveel er in dezelfde categorie opzij staat, dan wint wiens wijziging het laatst de cloud bereikte — of de app toont een “Conflict” en vraagt je te kiezen. Het bedrag in de envelop is dan misschien niet het afgesproken bedrag.

Spreek af wie het toewijzen doet. Open vóór je begint de app en geef hem een paar seconden om te synchroniseren — zodat je de laatste uitgaven van de ander ziet.

##### Wat jullie allebei zien

“Niet toegewezen”, het saldo van elke envelop, “Overschrijding” en “Raakt op” op “Overzicht” zijn gedeeld. Wordt “Boodschappen” geel, dan zien jullie het allebei en praten jullie over dezelfde getallen.

### Geplande betalingen {#scenario-together-scheduled}

Huur en abonnementen zijn gedeeld, en de vervaldatum komt op beide telefoons.

##### Eén persoon bevestigt

Tikken twee mensen op “Bevestigen” bij dezelfde betaling voordat de telefoons gesynchroniseerd zijn, dan wordt de transactie **twee keer** vastgelegd. Spreek af wie geplande betalingen bevestigt, of laat de app synchroniseren voordat je bevestigt. Verwijder de extra transactie in “Boekingen”.

Herinneringen aan vervaldatums komen op beide telefoons — bij wie ze heeft aanstaan. Ieder stelt ze op de eigen telefoon in: “Instellingen” → “Herinneringen”.

### Elke dag {#scenario-together-daily}

##### Iets vastgelegd? Synchroniseer

De app synchroniseert bij het openen, niet bij het minimaliseren. Een grote aankoop vastgelegd en weet je dat de ander zo naar het budget kijkt? Tik op het synchronisatiepictogram op “Overzicht”.

##### De avondherinnering telt jullie allebei

“Herinner me aan het invoeren van uitgaven” zwijgt als er vandaag al uitgaven in het budget staan — ook die de ander invoerde en die via synchronisatie binnenkwamen. Wil je dat hij ieder van jullie herinnert, dan moet ieder de eigen uitgaven dezelfde dag vastleggen.

##### “Recente transacties” zijn gedeeld

Op “Overzicht” zie je wat de ander kocht: de aankopen verschijnen daar na een synchronisatie.

### Veelgemaakte fouten {#scenario-together-mistakes}

| Wat er gebeurde | Waarom, en wat te doen |
|---|---|
| Op de ene telefoon staan meer uitgaven dan op de andere | De telefoons logden in bij de cloud met verschillende accounts — dat zijn twee verschillende clouds. Log overal in met één apart account voor het budget. |
| Een transactie staat er twee keer | Jullie voerden haar allebei in: bijvoorbeeld een gezamenlijke bon, vastgelegd door wie betaalde én door wie de tassen droeg. Spreek af: wiens pas het was, die legt vast. |
| Een geplande betaling is twee keer vastgelegd | Jullie tikten allebei op “Bevestigen”. Verwijder de extra transactie; voortaan bevestigt één persoon. |
| “De cloud is met een wachtwoord beveiligd” op één telefoon | Op de ene telefoon is het wachtwoord ingesteld, op de andere niet of anders. Stel hetzelfde in. |
| Het valutasymbool verschilt tussen jullie | De valuta van het budget staat op het apparaat. Pas haar aan in “Instellingen” → “Valuta van het budget”. |

## "Stel: gedeelde kosten en eigen geld" {#scenario-couple}

Ieder van jullie heeft een eigen salaris en eigen uitgaven, terwijl woning, eten en vakanties half-half gaan. Hoe je dit vandaag in de app regelt, wat hij nog niet kan en hoe je één keer per maand verrekent.

*de tag “samen” in het transactieformulier en het blok “Mijn tags” op “Overzicht”*

### Wat vandaag werkt {#scenario-couple-today}

Wat je zou willen: een gedeeld budget, “Ons huis”, dat jullie allebei bijhouden, plus voor ieder een eigen budget dat de ander niet ziet. Via één gedeelde cloud **lukt dat niet** — waarom, staat hieronder. Maar het lukt wel als je het gedeelde budget thuis via wifi aan elkaar doorgeeft.

##### Waarom

Een telefoon logt in bij de cloud met één account, en elk budget op die telefoon synchroniseert met die cloud. Het cloudwachtwoord is ook één per telefoon, niet per budget. Een gedeeld budget in een gedeelde cloud en een eigen budget dat verborgen blijft voor je partner kunnen dus niet op dezelfde telefoon leven: het eigen budget zou op dezelfde plek terechtkomen als het gedeelde.

Drie aanpakken werken.

##### Eigen budgetten en een tag “samen”

Ieder heeft een eigen budget — niemand ziet het geld van de ander. Gedeelde uitgaven krijgen een tag, en één keer per maand vergelijk je en verreken je. Details — [hieronder](#scenario-couple-tag).

##### Twee budgetten, het gedeelde via wifi

Elke telefoon heeft een eigen budget en het gedeelde “Ons huis”. Ieder heeft een eigen cloud, en het gedeelde budget geef je thuis via wifi aan elkaar door. Details — [hieronder](#scenario-couple-wifi).

##### Eén gedeeld budget voor allebei

Al het geld in één budget, eigen geld als eigen categorieën. Jullie zien allebei alles. Goed als jullie niets voor elkaar te verbergen hebben. Details — [hieronder](#scenario-couple-all-shared).

### De aanpak met de tag “samen” {#scenario-couple-tag}

Ieder heeft een eigen budget op de eigen telefoon: een eigen cloud of helemaal geen. Ieder legt gedeelde uitgaven zoals gewoonlijk vast in het eigen budget en zet er een tag op.

##### Hoe je het instelt — ieder op de eigen telefoon

1. Maak een categorie voor jouw deel van de gedeelde uitgaven — bijvoorbeeld “Gezin” in de groep “Vaste lasten”. Stop er elke maand zoveel in als je afsprak bij te dragen aan de gezamenlijke pot.
2. Iets gedeelds betaald — boodschappen voor thuis, nutsvoorzieningen? Leg de aankoop in deze categorie vast.
3. Maak in het veld “Tags” een tag “samen” aan en zet hem op elke zulke aankoop.
4. Op “Overzicht”, in het blok “Mijn tags” → “⋮” → “Tags kiezen…”, vink je “samen” aan en zet je de periode op “Totaal van deze maand”.

*Waarom één categorie en niet “Boodschappen” en “Nutsvoorzieningen”:*
Je eigen budget beantwoordt de vraag “hoeveel geef ik uit”. Jouw deel van het gezamenlijke huis is één post, zoals huur: “Gezin”. Wil je zien waar het gedeelde geld heen gaat, open dan het scherm van de tag “samen”: daar staat “Per categorie”. Zet gedeelde uitgaven dan in de gewone categorieën, en de tag brengt ze samen.

### Eind van de maand: wie is wie wat schuldig {#scenario-couple-month}

1. Ieder kijkt in “Mijn tags” hoeveel hij of zij deze maand aan “samen” uitgaf.
2. Tel de twee bedragen op en deel door twee — dat is ieders deel.
3. Wie minder uitgaf dan zijn deel, maakt het verschil over aan de ander.

**Voorbeeld.** Sanne gaf € 1.200 uit aan gedeelde kosten, Daan € 800. Samen € 2.000, dus ieders deel is € 1.000. Daan maakt € 200 over aan Sanne.

##### Hoe je de overboeking vastlegt

- **Daan** — een uitgave van € 200 in de categorie “Gezin” met de tag “samen”: dat is ook zijn bijdrage aan de gezamenlijke pot.
- **Sanne** — € 200 binnen van Daan in dezelfde categorie “Gezin”, met dezelfde tag: het geld ging terug naar de envelop. Hoe je een terugbetaling naar een categorie vastlegt — in het artikel [“Transactieformulier”](#entry).

In de “Mijn tags” van Daan wordt het € 1.000. Bij Sanne blijft het € 1.200: het blok telt alleen uitgaven. Haar € 1.000 staat op het scherm van de tag “samen”: “Ontvangen” € 200 en “Netto” € 1.000.

Vergelijk met “Mijn tags” **vóór** de overboeking — erna zijn de getallen al gelijkgetrokken.

*En “Verrekening” op de tag?:*
“Verrekening” rekent “uitgegeven min ontvangen” uit in **jouw** budget — handig als je kosten deelt met iemand die niet in jouw budget schrijft: een reis met vrienden, een gezamenlijk cadeau. Voor een stel met twee budgetten toont het maar jouw helft van het plaatje: de bijdrage van de ander staat niet in jouw budget. Vergelijk hier dus met “Mijn tags”. Over “Verrekening” — in het artikel [“Begunstigden en tags”](#payees-tags).

### Twee budgetten, het gedeelde via wifi {#scenario-couple-wifi}

Elke telefoon heeft twee budgetten: je eigen en het gedeelde “Ons huis”. Ieder heeft een eigen cloud — eigen account, eigen wachtwoord. Beide budgetten gaan naar de cloud van de eigenaar van de telefoon, en de ander ziet ze daar niet. Aan elkaar geef je alleen “Ons huis” door — via wifi, als jullie allebei thuis zijn.

##### Hoe je het instelt

1. Ieder koppelt op de eigen telefoon een cloud met het eigen account, zoals gewoonlijk.
2. Sanne maakt het budget “Ons huis”: tik op de naam van het budget in de kop van “Overzicht” — daar staan de lijst met budgetten en een nieuw budget. Daan maakt op zijn telefoon een leeg budget met dezelfde naam.
3. De eerste keer ontvangt Daan “Ons huis” van Sanne via wifi (hoe — hieronder) en kiest “Volledig vervangen”: zijn lege budget wordt een kopie van dat van Sanne.

##### Thuis uitwisselen

1. **Open allebei “Ons huis”.** De uitwisseling gebeurt tussen de geopende budgetten.
2. “Instellingen” → “Lokale overdracht”. Sanne: “Server starten”. Daan: “QR scannen” → “Gegevens ontvangen” → “Samenvoegen”.
3. Sanne: “Server stoppen”.

De uitwisseling gaat beide kanten op: Daan krijgt de wijzigingen van Sanne, en zijn wijzigingen gaan naar Sanne — transacties en bonfoto's. Het maakt niet uit wie van jullie verstuurt en wie ontvangt.

**“Dit lijkt een ander budget” — tik op “Annuleren”.** Heeft een van jullie het eigen budget open in plaats van “Ons huis”, dan delen de twee budgetten geen rekeningen of transacties, en vraagt de app vóór het samenvoegen. “Toch doorgaan” zou persoonlijke uitgaven in het gedeelde budget gieten, en ze weer scheiden kan niet.

*En als de budgetten toch zijn samengevoegd?:*
Met de hand scheiden lukt niet, maar je kunt beide terugzetten naar een automatische back-up — die maakt de app zelf, standaard elke 5 dagen. De uitwisseling gaat beide kanten op, dus twee budgetten zijn bedorven: het eigen budget van Daan (daar kwam “Ons huis” in) en het “Ons huis” van Sanne (daar kwamen de persoonlijke uitgaven van Daan in). Ieder herstelt het eigen budget op de eigen telefoon.

1. Open het bedorven budget. “Instellingen” → “Back-ups”.
2. Zoek een back-up van **dit** budget (de naam staat in de regel van de back-up) van **vóór** de uitwisseling. Tik op het pictogram klok-met-pijl → “Terugzetten”. Tik daarna **niet op “Nu synchroniseren”**: het samengevoegde budget staat nog in de cloud.
3. Verwijder het synchronisatiebestand van dit budget in je cloud — zoals in het artikel [“Cloud en back-ups”](#sync-rollback), stappen 2–4. Ieder heeft een eigen cloud, en alleen jouw telefoon schrijft dit budget daarheen, dus het deel over meerdere apparaten geldt niet.
4. Wijzigingen van na de back-up gaan verloren. Gedeelde zijn te redden: nadat Sanne “Ons huis” heeft teruggezet, wissel nog één keer uit met allebei “Ons huis” open, en de gedeelde wijzigingen komen bij haar terug uit het “Ons huis” van Daan — zijn kopie is schoon. Persoonlijke uitgaven die na de back-up werden ingevoerd, moeten opnieuw vastgelegd worden.

Vóór de eerste uitwisseling loont het om met de hand back-ups te maken — ieder op de eigen telefoon, en van **beide** budgetten: een back-up wordt gemaakt van het geopende budget. Open je eigen budget → “Back-ups” → “Nu een back-up maken”, open dan “Ons huis” en herhaal. Zo ga je niet terug naar een automatische back-up van vijf dagen oud, maar naar de stand van vlak vóór de uitwisseling.

*Moet het cloudwachtwoord gelijk zijn?:*
Nee. De overdracht via wifi wordt versleuteld met de bevestigingscode van het scherm van de verzendende telefoon; het back-upwachtwoord speelt geen rol. Het wachtwoord in het blok “Cloudversleuteling” sluit alleen **jouw** cloud af. Het moet alleen gelijk zijn als twee telefoons naar één cloud schrijven — hier zijn de clouds verschillend.

*En als je buiten de deur iets wijzigde?:*
Ieder houdt “Ons huis” op de eigen telefoon bij: leg een aankoop vast in de winkel, en hij staat meteen in jouw kopie en jouw cloud. Wissel thuis uit — en allebei hebben jullie alles. Draait op een van de telefoons nog een oudere versie van de app, dan gaan de wijzigingen van de ontvanger niet terug — de app zegt het; wissel dan nog een keer uit met omgedraaide rollen. Hebben jullie allebei dezelfde transactie gewijzigd, dan blijft de latere wijziging staan, zoals bij gewone synchronisatie.

De keerzijde: het gedeelde budget is pas bij als jullie allebei thuis zijn en hebben uitgewisseld.

### Eén gedeeld budget voor allebei {#scenario-couple-all-shared}

Zijn er geen persoonlijke geheimen, dan is alles samen bijhouden het eenvoudigst — dan zie je het hele plaatje en één “niet toegewezen” voor jullie allebei.

- Instellen — zoals in het scenario [“Met twee of meer in één budget”](#scenario-together): een apart cloudaccount voor het budget, op beide telefoons ingelogd.
- Eigen geld — als eigen categorieën: “Eigen geld Sanne”, “Eigen geld Daan”. Elke maand gaat het afgesproken bedrag erin; hoe het besteed wordt, bepaalt de eigenaar.
- Rekeningen — ieder heeft eigen: “Pas van Sanne”, “Pas van Daan”. Zo zie je wie betaalde.

De keerzijde: jullie zien allebei alles — zowel uitgaven uit de “eigen” categorieën als de saldi van de passen.

### Wat er nog niet is {#scenario-couple-not-yet}

Een gedeeld budget dat voor jullie allebei vanzelf via de cloud synchroniseert, naast eigen budgetten die verborgen blijven voor je partner, en een gedeelde uitgave met één tik van een eigen budget naar het gedeelde verplaatsen — dat is er nog niet. We bouwen het als mensen het nodig hebben. Hoor jij daarbij, schrijf dan in de “Telegram-chat” (“Instellingen”, onderdeel “HELP EN CONTACT”): hoe meer zulke berichten, hoe eerder.

## Freelance en onregelmatig inkomen {#scenario-freelance}

Het geld komt binnen als de klant betaalt: de ene maand overvloed, de volgende krapte. Hoe je met zo'n inkomen stopt met leven van betaling tot betaling, geld opzijzet voor belasting en weet wat je echt verdient.

*“Budget”, “Overzicht”, “Rapporten” — alles hieronder*

### Het grote idee {#scenario-freelance-idea}

Met een salaris is de maand voorspelbaar: betaald op de 5e, genoeg tot de volgende 5e. Een freelancer kent het inkomen van de maand niet vooraf — dus je kunt er niet op plannen. Plan op het geld dat je **al hebt**.

##### Geef uit wat je eerder verdiende

De maand leeft van wat eerder binnenkwam. Wat nu binnenkomt, werkt voor de volgende maand. [Hoe](#scenario-freelance-last-month).

##### Strijk het glad met een buffer

Een goede maand vult de reserve aan, een magere maand put eruit. [Hoe](#scenario-freelance-buffer).

##### Zet de belasting meteen opzij

Een percentage van elke betaling gaat naar een eigen envelop voordat het geld opgaat. [Hoe](#scenario-freelance-taxes).

### Geef het geld van vorige maand uit {#scenario-freelance-last-month}

Leg elke betaling niet vast voor deze maand maar voor de **volgende**. Dan is op de 1e de hele maand al betaald met verdiend geld, en verdeel je het één keer over de enveloppen — niet in stukjes na elke betaling.

##### Hoe je een betaling vastlegt

1. “+ Transactie” → “+ Inkomend”, begunstigde — de klant, bedrag.
2. Tik op het veld “Categorie” — “Waar de inkomsten heen gaan” opent.
3. Kies “Inkomsten voor december”, niet “Inkomsten voor november”. Opslaan.

De datum van de transactie blijft de echte. Alleen de budgetmaand waarin het geld verschijnt, verandert.

##### Waar beginnen

De eerste maand moet je zowel uitgeven wat je hebt als sparen voor de volgende. Begin met een betaling die je nog niet hebt toegewezen. Tot je genoeg hebt voor een maand vooruit, zet je er in elk geval een deel van in de volgende maand: hoeveel er al staat, toont de app in “Maandbudget” op “Overzicht” — de regel “Budget van december”.

Het doel is een “Leeftijd van het geld” van 30 dagen of meer: dan geef je het geld van vorige maand uit. Meer in het artikel [“Overzicht”](#overview-age-month).

### Een buffer voor magere maanden {#scenario-freelance-buffer}

Ook met een maand geld vooruit komen twee magere maanden achter elkaar voor. Een buffer is een envelop die je erdoorheen helpt.

##### Hoe je hem instelt

1. De categorie “Noodpotje” — of een eigen, “Buffer”.
2. Een doel “Saldo”: het bedrag is je gewone uitgaven over 3–6 maanden. Hoeveel dat is — “Gemiddeld inkomen per maand” en “Uitgaventrend”, hieronder.
3. Zet in een goede maand alles boven het gewone in de buffer.

Het doel “Saldo” zorgt dat de reserve niet wegsmelt: geef je er een deel van uit, dan vraagt de app het terug te zetten. Meer in het artikel [“Doelen”](#goals-balance).

##### Een magere maand

Het was niet genoeg voor de enveloppen, en de uitgaven gingen in het rood. Tik op het rode bedrag op “Budget” → “Dekken uit een andere categorie” → op de regel “Noodpotje” “… nemen”. Het geld gaat van de buffer naar waar de min staat. Meer in het artikel [“Budget”](#budget-screen).

### Belasting — meteen in een eigen envelop {#scenario-freelance-taxes}

De belasting over een betaling is makkelijk uit te geven: het geld staat op de rekening, en de aanslag komt pas volgend kwartaal.

##### Een doel “% inkomen”

1. De categorie “Belastingen”.
2. Een doel “% inkomen” — het percentage dat je betaalt. Laat onder het percentage “Van het inkomen van deze maand” staan: belasting wordt berekend over het geld dat binnenkwam, niet over het gemiddelde.
3. Elke betaling werkt het doel zelf bij: er kwam meer binnen, het doel ging omhoog, en “nog …” zegt hoeveel je moet bijleggen.

Wat je opzijzet, groeit in de envelop tot de betaaldatum: een plus gaat van maand naar maand mee. Meer in het artikel [“Doelen”](#goals-percent).

*Als je inkomen voor de volgende maand vastlegt:*
Dan is het doel “% inkomen” van deze maand op de 1e al bekend: het inkomen van de maand kwam vorige maand binnen. Handig — de belasting staat als eerste opzij, samen met de andere enveloppen.

### Geld binnengekomen — verdeel het met één tik {#scenario-freelance-income}

Elke betaling met de hand verdelen wordt vermoeiend. Automatisch toewijzen “Op percentage” doet het voor je.

##### Eén keer instellen

1. Tik op “Budget” in de kop op “niet toegewezen” — “Budget automatisch toewijzen” opent.
2. “Op percentage” → “Percentages instellen”: bijvoorbeeld “Belastingen” — 5%, “Noodpotje” — 20%, “Beleggingen” — 10%.
3. De percentages worden onthouden. Wat niet door een percentage gedekt is, blijft in “niet toegewezen” — wijs het zelf toe aan de enveloppen van de maand.

Vanaf dan: geld binnengekomen — tik op “niet toegewezen” → “Op percentage”. De app verdeelt precies wat op dat moment niet toegewezen is.

*Waarom percentages en geen bedragen:*
Met een onregelmatig inkomen is een vast bedrag de ene maand onmogelijk en de volgende lachwekkend. Een percentage stijgt en daalt mee met je inkomen. Afronden — de chips “Naar geheel”, “Naar 10”, “Naar 100” op hetzelfde blad.

### Klanten en projecten {#scenario-freelance-clients}

##### De klant is de begunstigde

Leg elke betaling vast met de klant in het veld “Begunstigde”. Tik op de klant in “Instellingen” → “Begunstigden” — zijn scherm opent: “Trends in ontvangsten” toont hoeveel hij gemiddeld betaalt, en de periode “Jaar” toont al zijn betalingen van het jaar. Je ziet wie je voedt en wie twee keer per jaar betaalt. Meer in het artikel [“Begunstigden en tags”](#payees-tags-payee).

##### Het project is een tag

Maak een tag voor het project: “website café”. Zet hem op de betaling van de klant én op de kosten van het project: een abonnement op een dienst, een taxi naar een afspraak, een lettertype. Het tagscherm toont “Uitgegeven”, “Ontvangen” en “Netto” — wat het project echt opleverde. Meer in het artikel [“Begunstigden en tags”](#payees-tags).

### Verwachte betalingen {#scenario-freelance-expected}

De factuur is verstuurd, en het geld is beloofd vóór de 15e. Om het niet te vergeten en te zien wat eraan komt, maak je een geplande betaling.

1. “Instellingen” → “Geplande betalingen” → “+ Betaling”.
2. “+ Inkomend”, de klant, het bedrag, de beloofde betaaldatum, “Herhalen” — “Eenmalig”.
3. De betaling verschijnt in “Wat eraan komt” en in de “Kalender” op “Overzicht”.
4. Het geld kwam op tijd — “Bevestigen” op het bevestigingsscherm. Eerder dan verwacht — veeg de regel van de betaling naar links — “Invoeren”. De klant is laat — open de betaling en wijzig het veld “Datum”.

Zolang de betaling niet bevestigd is, staat ze niet in het budget: enveloppen worden niet gevuld met beloofd geld. Meer in het artikel [“Geplande betalingen”](#scheduled).

### Waar je op let {#scenario-freelance-reports}

| Waar | Wat het je vertelt |
|---|---|
| “Overzicht” → “Maandbudget” | “Gemiddeld inkomen per maand” over 12 maanden en “Budget van december” — hoeveel je al hebt voor volgende maand. |
| “Overzicht” → “Leeftijd van het geld” | 30 dagen of meer — je leeft van het geld van vorige maand. |
| “Overzicht” → “Uitgaven deze maand” | Of je nu meer uitgeeft dan normaal. |
| “Rapporten” → “Inkomsten en uitgaven” | Een tabel per maand: inkomen per bron — elke klant heeft een eigen regel —, uitgaven per groep en “Spaarquote”. Je ziet zowel de seizoenen als wie hoeveel betaalt. |
| “Rapporten” → “Uitgaventrend” | Je normale maanduitgaven — de basis voor de grootte van de buffer. |
| “Rapporten” → “Geldstroom” | Waar het verdiende geld in een periode heen ging — en hoeveel er over is. |
| “Rapporten” → “Leeftijd van het geld” | Hoe je tijdsbuffer maand na maand groeit. |

Meer over de rapporten in het artikel [“Rapporten”](#reports).

### Werkgeld apart houden {#scenario-freelance-business}

Heeft je werk een eigen rekening en eigen kosten — diensten, apparatuur, een boekhouder —, dan kun je ze in een **tweede budget** bijhouden, bijvoorbeeld “Werk”. Tik op de naam van het budget in de kop van “Overzicht” — daar staan het wisselen van budget en een nieuw budget.

In het werkbudget staan betalingen en werkkosten. Wat je opneemt om van te leven, gaat als overboeking naar je eigen pas: in het werkbudget is het een uitgave, in het eigen budget inkomen. Zo leeft je eigen budget elke maand van een gelijk bedrag, en blijven alle pieken en dalen in het werkbudget.

## Van salaris tot salaris {#scenario-paycheck}

Het geld is eerder op dan de maand, en de salarisdag is nog een week weg. Hoe je verdeelt wat je hebt, zonder rood de volgende salarisdag haalt en stap voor stap uit de ratrace komt.

*“Budget”, “Overzicht” en het categoriescherm — alles hieronder*

### Het grote idee {#scenario-paycheck-idea}

Enveloppen geven je niet meer geld dan je hebt. Maar ze laten je **vooraf** zien of het tot de salarisdag reikt — niet op de laatste dag, maar op de eerste.

##### Wijs alleen toe wat je hebt

Een envelop wordt gevuld met geld dat al op je rekeningen staat. Een beloofd salaris is nog geen geld. [Hoe](#scenario-paycheck-now).

##### Eerst het noodzakelijke

Wonen, eten, naar je werk komen, medicijnen, een aflossing. De rest komt daarna. [Hoe](#scenario-paycheck-now).

##### Een min is geen mislukking

Schuif geld over uit een andere envelop en ga verder. [Hoe](#scenario-paycheck-minus).

### Salarisdag — verdeel het meteen {#scenario-paycheck-now}

Zolang geld niet verdeeld is, voelt het als veel. Verdeeld over enveloppen vertelt het de waarheid: € 200 voor eten tot de 5e, en dat is het.

##### In volgorde

1. Open “Budget”. Bovenaan staat “niet toegewezen”: zoveel geld heeft nog geen taak.
2. Vul eerst de enveloppen waarzonder je de volgende salarisdag niet haalt: huur, nutsvoorzieningen, “Boodschappen”, naar je werk komen, medicijnen, de minimale aflossing.
3. Dan al het andere, tot “niet toegewezen” op nul staat.
4. Niet genoeg voor alles? Sommige enveloppen blijven leeg. Dat is geen fout maar een eerlijk antwoord: daar is deze maand geen geld voor.

Hoe je geld in een envelop stopt — stap voor stap in het artikel [“Budget”](#budget-screen).

*De chip werd rood — “Te veel toegewezen”:*
Je hebt meer uitgedeeld dan er op je rekeningen staat. Verlaag in een van de enveloppen het opzijgezette bedrag — tik op het bedrag en voer minder in. Het geld gaat terug naar “niet toegewezen”.

### Twee salarissen per maand {#scenario-paycheck-two}

Twee keer per maand geld — dan verdeel je ook twee keer. Het eerste salaris gaat naar wat nodig is tot het tweede. Het tweede naar de rest en naar wat daarna komt.

##### Rekeningen vóór de salarisdag — als geplande betalingen

Maak geplande betalingen voor huur, nutsvoorzieningen, je telefoon: “Instellingen” → “Geplande betalingen” → “+ Betaling”. Ze verschijnen in het blok “Wat eraan komt” en in de “Kalender” op “Overzicht”, en een dag voor de vervaldatum komt er een herinnering. Je ziet welke rekeningen vóór de salarisdag komen en welke erna — en wat je uit het eerste salaris dekt. Meer in het artikel [“Geplande betalingen”](#scheduled).

### Hoeveel je per dag kunt uitgeven {#scenario-paycheck-until}

##### “≈ … per dag”

Tik op een categorie op “Budget” — haar scherm opent. Onder “Beschikbaar” staat hoeveel je elke dag tot het eind van de maand kunt uitgeven zonder in de min te gaan. Met € 140 in “Boodschappen” en nog tien dagen in de maand — “≈ € 14 per dag”. Meer in het artikel [“Categoriescherm”](#category-screen).

##### “Raakt op” op “Overzicht”

Er zit nog geld in de envelop, maar je geeft sneller uit dan de maand verstrijkt — de categorie verschijnt geel in het blok “Raakt op”. Een signaal om nu af te remmen, niet over een week. Meer in het artikel [“Overzicht”](#overview-blocks).

##### “Uitgaven deze maand”

Een blok op “Overzicht”: of je deze maand tot deze datum meer uitgeeft dan normaal.

### Een rode min {#scenario-paycheck-minus}

Je gaf meer uit dan er in de envelop zat — het bedrag is rood. Dek het meteen, vóór de maand eindigt.

1. Tik op het rode bedrag op “Budget”.
2. Tik in het blad “Overschrijding” op “Dekken uit een andere categorie”. “Waar haal je het geld vandaan” opent: “Niet toegewezen” en elke envelop met geld.
3. Tik op “… nemen” naast een envelop die je kunt missen. De min is gedekt — “Overschrijding gedekt!”.

Meer in het artikel [“Budget”](#budget-screen).

*De min bleef tot het eind van de maand:*
Hij wordt op nul gezet, maar niet spoorloos: het “niet toegewezen” van volgende maand wordt met hetzelfde bedrag kleiner. Je volgende salaris is precies die min kleiner. Meer in het artikel [“Hoe het budget werkt”](#start-months).

*Meerdere minnen, en iets in “niet toegewezen”:*
Tik in de kop van “Budget” op “niet toegewezen” → “Alle overschrijdingen dekken”. De app dekt alle minnen van de maand in één keer uit niet toegewezen geld.

### Een creditcard is geen uitweg {#scenario-paycheck-card}

De envelop is leeg, maar op de creditcard is ruimte. De verleiding is begrijpelijk, maar een creditcardaankoop uit een lege envelop is een **gele** min: er is geen geld, en de schuld groeit. Volgende maand moet je hem betalen uit je nieuwe salaris — en dat wordt dus weer kleiner. Meer in het scenario [“Creditcards en schulden”](#scenario-credit-yellow).

### Leg elke dag vast {#scenario-paycheck-daily}

Een envelop vertelt alleen de waarheid zolang alle uitgaven erin vastgelegd zijn. Eén vergeten aankoop van gisteren — en “≈ … per dag” liegt tegen je.

- De avondherinnering: “Instellingen” → “PLANNING” → “Herinneringen” → “Uitgaven van de dag” → “Herinner me aan het invoeren van uitgaven”. Hij komt alleen als je die dag niets hebt ingevoerd. **Direct na het installeren:** uit.
- Het snelst leg je vast bij de kassa: [met je stem](#voice) of [met de bonscanner](#receipt). Geen tijd om een categorie te kiezen? — [“Naar inbox”](#entry-inbox), en 's avonds deel je het in.

### Hoe je uit de ratrace komt {#scenario-paycheck-out}

Het doel is niet alleen rondkomen, maar ooit leven van geld dat een maand geleden verdiend werd. Ga stap voor stap, één tegelijk.

(1)
##### Een kleine buffer

De categorie “Noodpotje” met een doel “Saldo” — om te beginnen genoeg voor minstens een week uitgaven. Gaat je telefoon kapot, dan komt het geld hiervandaan, niet uit de envelop voor eten. Meer in het artikel [“Doelen”](#goals-balance).

(2)
##### Onregelmatige uitgaven — beetje bij beetje

Verzekering, cadeaus en schoenreparaties gooien de maand niet meer om als je er elke maand geld voor opzijzet. Een doel “Tegen datum” rekent uit hoeveel. Meer in het scenario [“Sparen voor iets groots”](#scenario-saving).

(3)
##### Geld een maand vooruit

Laat elke maand een beetje extra staan. Heb je een hele maand gespaard, leg je salaris dan vast voor volgende maand: “Categorie” → “Inkomsten voor december”. Vanaf dan is elke maand vooraf betaald, en doet de salarisdag er niet meer toe.

Hoeveel je al hebt voor volgende maand — “Maandbudget” op “Overzicht”, de regel “Budget van december”. Hoe het gaat — “Leeftijd van het geld”: 30 dagen of meer betekent dat je uit de ratrace bent. Meer in het artikel [“Overzicht”](#overview-age-month) en in het artikel [“Hoe het budget werkt”](#start-ladder).

## Creditcards en schulden {#scenario-credit}

Een creditcard, een autolening, een schuld van vóór de app. Hoe je ze instelt, hoe je betaalt zodat het budget niet liegt, en hoe je de schuld ziet krimpen.

*“Saldo's”, “Budget” → “Kaartbetalingen”, “Rapporten” → “Kaartschuld” en “Vermogen”*

### Creditcard {#scenario-credit-card}

Er is één regel: een aankoop met de creditcard besteedt envelopgeld precies zoals een aankoop met de betaalpas. Het verschil is waar dat geld wacht: niet op een rekening maar in de categorie van de creditcard, tot je de bank betaalt.

##### Hoe je hem instelt

1. “Saldo's” → “⋮” → “Rekening toevoegen”.
2. Type — “Creditcard”. Naam — hoe je de kaart noemt.
3. Bedrag — hoeveel je de bank nu schuldig bent. Typ het en tik op “±” om het negatief te maken.
4. Opslaan. De kaart gaat naar het onderdeel “CREDITCARDS”, en op “Budget” verschijnt in de groep “Kaartbetalingen” een categorie met dezelfde naam.

Laat die categorie met rust: de app telt er de schuld van precies deze kaart mee. Meer in het artikel [“Saldo's”](#accounts-screen).

##### Een aankoop

Leg haar zoals gewoonlijk vast: rekening — de creditcard, categorie — wat je kocht. Je kocht voor € 35 boodschappen — “Boodschappen” werd € 35 dunner, en dezelfde € 35 schoof naar de categorie van de creditcard voor de aflossing. Zelf hoef je niets opzij te zetten.

### Schuld van vóór je begon {#scenario-credit-old-debt}

De beginschuld — € 800 op de kaart van vorig jaar — zet de app niet opzij: er was nooit geld voor in de enveloppen.

Zet er geld voor opzij in de categorie van de creditcard, zoals bij elke envelop: tik op “Budget” op haar bedrag en voer in wat je deze maand kunt missen. In één keer of beetje bij beetje — aan jou. Tot je het opzijzet, is er geen geld om het af te lossen.

### De gele min {#scenario-credit-yellow}

Je gaf met de creditcard meer uit dan er in de envelop zat — het bedrag werd **geel**, met een kaartpictogram. Rood, met een portemonnee-pictogram, is een min uit je eigen geld.

##### Rood eet je geld op

Een min op een betaalpas of contant. Aan het eind van de maand verkleint hij het “niet toegewezen” van volgende maand.

##### Geel laat je schuld groeien

Je gaf geen geld uit — je leende het. Alleen het gedekte deel ging naar de categorie van de creditcard; voor de rest is er geen geld voor de aflossing.

##### Wat te doen

Dek een gele min zoals een rode: tik op het bedrag → “Dekken uit een andere categorie” → “… nemen” uit een andere envelop. Dan wordt het geld voor de aflossing automatisch aangevuld. Lukte het niet? Stop het verschil volgende maand rechtstreeks in de categorie van de creditcard.

### De kaart aflossen {#scenario-credit-payment}

Hoeveel je de bank betaalt, staat in de categorie van de creditcard op “Budget”: zoveel ligt al klaar voor de aflossing.

1. “+ Transactie”, rekening — je betaalpas.
2. “Begunstigde” → het onderdeel “Overboekingen” → je creditcard. De kop van het formulier wordt grijs, en een categorie is niet nodig.
3. Bedrag — hoeveel je aflost. Opslaan.

Het geld op je betaalpas daalt, de creditcardschuld ook, en daarmee het opzijgezette bedrag in de categorie van de creditcard. De enveloppen veranderen niet: het uitgeven deed je eerder, bij de aankopen. Meer in het artikel [“Transactieformulier”](#entry-transfer).

*Alles aflossen of het minimum:*
In de categorie van de creditcard staat precies zoveel als je met de kaart uit je enveloppen uitgaf. Los elke maand alles af wat opzij staat, en er bouwt zich geen nieuwe schuld op. Los je alleen het minimum af, dan blijft de rest in de categorie wachten; de bank rekent rente over de resterende schuld.

### Kaartrente en kosten {#scenario-credit-card-interest}

De bank rekende rente of een servicevergoeding — dat is een uitgave.

Leg een uitgave vast: rekening — de creditcard, begunstigde — de bank, categorie — een eigen, bijvoorbeeld “Rente en kosten”. De envelop krimpt, en het geld voor de aflossing wordt opzijgezet, zoals bij elke aankoop. Het staat ook in de rapporten: wat dit krediet je kost.

### Lening {#scenario-credit-loan}

Een autolening, een hypotheek, een afbetaling — geld dat je al hebt uitgegeven en in delen terugbetaalt.

##### Hoe je haar instelt

1. “Saldo's” → “⋮” → “Rekening toevoegen”.
2. Type — “Lening”. Bedrag — hoeveel er volgens het bankafschrift nog terug te betalen is, met een minteken (“±”).
3. De rekening gaat naar het onderdeel “Schulden”. Ze staat buiten het budget: dit geld heeft geen enveloppen, en het budget raakt de beginschuld niet.

##### Een envelop voor de aflossing

Maak een categorie voor de maandelijkse aflossing — bijvoorbeeld “Leningen” in de groep “Vaste lasten” — en een doel “Maandelijks” op het bedrag van de aflossing. Elke maand herinnert het doel je eraan het geld opzij te zetten. Meer in het artikel [“Doelen”](#goals-monthly).

### Een lening aflossen {#scenario-credit-loan-payment}

1. “+ Transactie”, rekening — de pas waarmee je betaalt.
2. “Begunstigde” → “Overboekingen” → de leningrekening.
3. De lening staat buiten het budget, dus de app vraagt om een categorie: kies “Leningen”. Het geld verlaat de envelop, en de schuld op de leningrekening daalt.

*De bank zegt dat € 80 van de aflossing rente is:*
Leg de hele aflossing vast als één overboeking, zoals hierboven. Leg dan één keer per maand de rente op de leningrekening zelf vast: “Uitgaand”, rekening — de lening, begunstigde — de bank, bedrag — de rente. Geen categorie nodig: de rekening staat buiten het budget. Dan klopt de schuld in de app met de bank, en geeft de envelop “Leningen” precies je aflossing af.

*Een herinnering aan de aflossing:*
Maak een geplande betaling als overboeking: “Instellingen” → “Geplande betalingen” → “+ Betaling”, “Begunstigde” → “Overboekingen” → de leningrekening, categorie “Leningen”, “Herhalen” — “Maandelijks”. De betaling verschijnt op de schermen van beide rekeningen, er komt vooraf een herinnering, en “Bevestigen” legt de overboeking vast. Hetzelfde voor een creditcardaflossing: van je betaalpas naar de creditcard. Meer in het artikel [“Geplande betalingen”](#scheduled-new).

### De schuld volgen {#scenario-credit-watch}

| Waar | Wat het je vertelt |
|---|---|
| “Saldo's” | De onderdelen “CREDITCARDS” en “Schulden” — hoeveel je nu schuldig bent. |
| “Budget” → “Kaartbetalingen” | Hoeveel er opzij staat om elke kaart af te lossen. |
| “Rapporten” → “Kaartschuld” | De schuld op alle creditcards maand na maand: krimpt of groeit ze. Beschikbaar als je een creditcard hebt. |
| “Rapporten” → “Vermogen” | Alles wat je bezit min alle schulden. Elke aflossing duwt de lijn omhoog. |

Meer over de rapporten in het artikel [“Rapporten”](#reports-capital).

## Sparen voor iets groots {#scenario-saving}

Een laptop, een verbouwing, een auto, een aanbetaling voor een huis. Hoe je beetje bij beetje opzijzet, ziet of je het op tijd haalt en het spaargeld niet per ongeluk uitgeeft.

*“Budget”, “Doelen”, het categoriescherm*

### Een envelop alleen voor de aankoop {#scenario-saving-envelope}

Geld voor een laptop dat tussen het leefgeld zit, gaat als eerste op. Een aparte envelop beschermt het: zolang het in “Laptop” staat, verschijnt het niet in “Boodschappen”.

1. Zoek op “Budget” de groep waar “Grote aankopen” en “Reizen en vakantie” in staan.
2. Tik op “⊕” naast de naam — een nieuwe categorie. Noem haar naar de aankoop: “Laptop”.
3. Of spaar in het kant-en-klare “Grote aankopen” als er maar één aankoop is.

Meer in het artikel [“Budget”](#budget-screen).

### Een doel “Tegen datum” {#scenario-saving-goal}

Zeg de app hoeveel en tegen welke maand — hij rekent uit hoeveel je elke maand moet inleggen.

1. Tik op de categorie op “Budget” → de kaart “Doel” → “Doel toevoegen”.
2. “Soort doel” — “Tegen datum”.
3. “Bedrag” — de prijs van de aankoop, “Sparen tegen maand” — wanneer je het nodig hebt.
4. “Opslaan”.

Een laptop van € 2.400 over zes maanden — het doel vraagt € 400 per maand. Sla je een maand over, dan wordt het tekort over de resterende maanden verdeeld, dus de inleg groeit. Leg je meer in, dan worden de volgende kleiner. Meer in het artikel [“Doelen”](#goals-bydate).

*Sparen zonder einddatum:*
Een doel “Saldo”: de envelop moet dit bedrag bevatten, wanneer maakt niet uit. Past bij “ooit een nieuwe auto” en bij een noodbuffer. Meer in het artikel [“Doelen”](#goals-balance).

### Haal ik het {#scenario-saving-pace}

##### Een snelle schatting op het categoriescherm

Tik op de categorie — bij een doel “Tegen datum” staat onder de balk een schakelaar: “Op bedrag” en “Op datum”. Schuif “Per maand opzijzetten” — je ziet in welke maand je er bent. Schuif de maand — je ziet hoeveel je moet inleggen. Bevalt de nieuwe datum? — “Als doeldatum instellen: …”. Meer in het artikel [“Doelen”](#goals-card).

##### Deze maand tekort

Op “Budget” staat onder het bedrag een vlag en “nog …”. De chip “Te weinig” boven de lijst laat alleen die categorieën over. Op “Overzicht” staat het tekort in de blokken “Doelen” en “Wat eraan komt”.

### Waar het geld staat {#scenario-saving-where}

Spaargeld staat vaak op een aparte rekening: een spaarrekening, een deposito, een spaarpot. Hoe je die rekening instelt, bepaalt of het geld in de envelop blijft.

##### In het budget — voor een aankoop

Een rekening van het type “Bankrekening”. Je zette € 400 van de betaalrekening naar de spaarrekening — de envelop “Laptop” veranderde niet: het geld verhuisde, maar het is nog steeds van jou en nog steeds in het budget. Het doel ziet het en vraagt het niet opnieuw. **Spaar je voor een aankoop? Kies deze optie.**

##### Buiten het budget — voor vermogen

Een rekening van het type “Alleen bijhouden”: beleggingen, een pensioendeposito. Een overboeking daarheen legt de app vast als geld dat een envelop verlaat — hij vraagt om een categorie, en de envelop loopt leeg. Voor een aankoop werkt dat niet: het doel vraagt opnieuw om geld, terwijl je het hebt.

Meer in het artikel [“Saldo's”](#accounts-kinds).

### Meerdere doelen tegelijk {#scenario-saving-many}

Een vakantie, een laptop en cadeaus voor de feestdagen — misschien is er deze maand niet genoeg voor alles.

“Budget” → “⋮” → “Toewijzen aan doelen”. De app verdeelt “niet toegewezen” in één keer over alle doelen. Niet genoeg voor alles? Doelen krijgen geld op volgorde, van boven naar beneden, zoals de categorieën op “Budget” staan. Zet wat belangrijk is hoger: “⋮” → “Volgorde wijzigen”. Meer in het artikel [“Doelen”](#goals-allocate).

### De aankoop {#scenario-saving-buy}

1. Leg de aankoop zoals gewoonlijk vast — in de categorie “Laptop”. De envelop loopt leeg — daar spaarde je voor.
2. Viel het goedkoper uit? De rest blijft in de envelop. Elders nodig? Tik op “Budget” op het bedrag van “Laptop” en voer minder in: het verschil gaat terug naar “niet toegewezen”.
3. Viel het duurder uit? Het bedrag wordt rood. Tik erop → “… nemen” uit een andere envelop.
4. Heb je het doel niet meer nodig? “Budget” → “⋮” → “Doelen” → tik op de categorie → “Verwijderen”. Het geld in de envelop blijft. De categorie met de aankoop zelf kan niet worden verwijderd — alleen verborgen.

*Met de creditcard gekocht:*
Dat kan ook: het geld uit “Laptop” wordt opzijgezet voor het aflossen van de kaart. Op krediet of op afbetaling gekocht? Dan is het een schuld; hoe je die volgt, staat in het scenario [“Creditcards en schulden”](#scenario-credit-loan).

### Hoeveel ik spaar {#scenario-saving-pay-yourself}

Het blok “Betaal jezelf” op “Overzicht” toont welk percentage van je inkomen je opzijzet — over de maand, drie maanden en het jaar. De norm is 10%. Welke categorieën als “gespaard” tellen, kies je in “Instellingen → Budget → Betaal jezelf”: “Grote aankopen”, “Laptop”, “Noodpotje”. Meer in het artikel [“Overzicht”](#overview-blocks).

## Op reis met vrienden {#scenario-trip}

Jij betaalde het onderdak voor vier, een vriend betaalde het diner, benzine gaat half-half, en in het buitenland heb je daarbovenop contant geld in een andere valuta. Hoe je voor een reis spaart, ziet wat ze kostte en het overzicht houdt over wie wie wat schuldig is.

*de tag van de reis, “Verrekening” op het tagscherm, het transactieformulier*

### Vóór de reis {#scenario-trip-before}

Spaar in “Reizen en vakantie” met een doel “Tegen datum”: het bedrag is wat je verwacht uit te geven, de maand is wanneer je gaat. De app rekent de maandelijkse inleg uit. Meer in het scenario [“Sparen voor iets groots”](#scenario-saving-goal).

### Een tag voor de reis {#scenario-trip-tag}

Reisuitgaven komen in verschillende categorieën terecht — “Boodschappen”, “Vervoer”, “Reizen en vakantie”. Een tag brengt ze samen.

1. Open bij de allereerste aankoop van de reis “Aanvullend” → “Tags” → typ een naam, bijvoorbeeld “Zwitserland”, → “Tag “…” aanmaken”.
2. Zet deze tag op elke aankoop van de reis.
3. “⋮” van de tag → “Tonen in Mijn tags” — het totaal van de reis staat dan op “Overzicht”.

Het tagscherm toont “Uitgegeven” en “Per categorie” — wat de reis kostte en waar het geld heen ging. Meer in het artikel [“Begunstigden en tags”](#payees-tags-tag).

### Jij betaalt voor iedereen {#scenario-trip-pay-for-all}

Je betaalde het onderdak voor vier: € 800. Jouw deel is € 200, de andere € 600 moet terugkomen.

##### Splits het bedrag in jouw deel en dat van je vrienden

1. Leg de aankoop van € 800 vast, rekening — je pas, tag — “Zwitserland”.
2. “Categorie” → “Bedrag splitsen”.
3. Het eerste deel is “Reizen en vakantie”, € 200: dat is jouw deel.
4. Het tweede deel is ook “Reizen en vakantie”, € 600, met daarop “+ tag” → een nieuwe tag “Zwitserland: vrienden betalen terug”.
5. Open het scherm van de tag “Zwitserland: vrienden betalen terug” → “⋮” → “Verrekening”.

Nu staat op het tagscherm “nog te innen € 600”: zoveel krijg je nog. Meer over gesplitste bedragen in het artikel [“Transactieformulier”](#entry-split).

*Waarom een tweede tag en niet één:*
“Verrekening” rekent uitgegeven min ontvangen. Zette je het aan op “Zwitserland”, dan bleef ook je eigen deel daar hangen als “Nog te innen”, en de verrekening kwam nooit rond. Een tag op alleen het deel van je vrienden komt op nul als alles is terugbetaald.

### Een vriend betaalde terug {#scenario-trip-paid-back}

1. “+ Transactie” → “+ Inkomend”. Begunstigde — de vriend, bedrag — hoeveel hij terugbetaalde, rekening — waar het geld binnenkwam.
2. “Categorie” → “Naar een uitgavecategorie…” → “Reizen en vakantie”. Dit is geen inkomen — het is je eigen geld dat terug in de envelop komt.
3. Tags — “Zwitserland” en “Zwitserland: vrienden betalen terug”.

Als alle drie hebben terugbetaald, staat op het scherm van de tag “Zwitserland: vrienden betalen terug” groen “Verrekend”. En bij “Zwitserland” is “Netto” € 600 lager dan “Uitgegeven” — voor het onderdak blijft precies jouw deel over. Meer in het artikel [“Transactieformulier”](#entry-refund).

### Een vriend betaalde {#scenario-trip-friend-paid}

Een vriend betaalde het diner, en jouw deel is € 50. Er is nog geen geld van je pas gegaan — er valt niets vast te leggen.

Als je de vriend terugbetaalt, leg het dan vast: een uitgave, begunstigde — de vriend, categorie — “Reizen en vakantie”, tag — “Zwitserland”. Tot je betaalt, houd je de schuld in je hoofd of in een notitie — de app houdt de portemonnee van anderen niet bij.

### In het buitenland {#scenario-trip-abroad}

##### Betalen met je eigen pas

De bank schrijft het geld af in de valuta van je pas. Leg het bedrag vast dat de bank afschreef — dat zie je in de app van de bank. Het bedrag in lokale valuta, als je het nodig hebt, gaat in de notitie: “diner 42 CHF”.

##### Je nam contant geld in een andere valuta mee

Maak een rekening “Contant CHF”: “Saldo's” → “⋮” → “Rekening toevoegen”, type “Alleen bijhouden”, “Valuta van de rekening” — CHF. Alleen een rekening buiten het budget kan een eigen valuta hebben. Hoe je ermee werkt, staat hieronder.

##### Contant geld wisselen en uitgeven

1. Je wisselde geld — leg een overboeking vast van je pas naar “Contant CHF”. Onder de begunstigde verschijnen “Bijgeschreven” en “Koers”: hoeveel frank je kreeg.
2. De rekening staat buiten het budget, dus de app vraagt om een categorie: “Reizen en vakantie”. Het geld verliet de envelop al bij het wisselen.
3. Leg contante uitgaven in frank vast op de rekening “Contant CHF” — geen categorie nodig, de envelop heeft al betaald. Zet zoals gewoonlijk de tag “Zwitserland” erop.
4. Frank over en teruggewisseld? Een overboeking van “Contant CHF” naar je pas, “Categorie” → “Naar een uitgavecategorie…” → “Reizen en vakantie”. Het geld gaat terug naar de envelop.

Meer over valuta in het scenario [“Meerdere valuta en bijzondere gevallen”](#scenario-currencies).

### Na de reis {#scenario-trip-after}

- Het scherm van de tag “Zwitserland”: “Netto” is wat de reis je na alle terugbetalingen kostte, “Per categorie” toont waar het geld heen ging. Handig als je voor de volgende spaart. Uitgaven in frank staan op een aparte regel: er wordt niet omgerekend tegen een koers, en het wisselen zelf is een overboeking, dus het staat niet in “Uitgegeven”.
- Heb je de tag niet meer nodig in de keuze? “⋮” van de tag → “Verbergen uit keuze”. Hij blijft op de transacties staan.
- Geld over in “Reizen en vakantie”? Laat het staan tot de volgende vakantie: een plus gaat van maand naar maand mee.

## Meerdere valuta en bijzondere gevallen {#scenario-currencies}

Je salaris in de ene valuta, spaargeld in een andere, wat bitcoin en reizen naar het buitenland. Wat de app met valuta kan, waar de grenzen liggen en hoe je je boekhouding voert zodat de enveloppen niet liegen.

*“Instellingen” → “Valuta van het budget”, rekeningen buiten het budget, een overboeking met koers*

### De hoofdregel {#scenario-currencies-rule}

**Een budget heeft één valuta.** Alle enveloppen, alle budgetrekeningen en “niet toegewezen” staan erin. Andere valuta leven op rekeningen **buiten het budget**: je ziet hoeveel er staat, maar dat geld wordt niet over de enveloppen verdeeld.

*Waarom het zo werkt:*
Een envelop beantwoordt “hoeveel kan ik aan eten uitgeven”. Zitten er zowel euro's als dollars in, dan verandert het antwoord elke dag met de koers. Eén valuta in de enveloppen — en het antwoord blijft altijd hetzelfde.

### Valuta van het budget {#scenario-currencies-budget-currency}

“Instellingen” → “Budget” → “Valuta van het budget”. De lijst heeft zestig valuta, de huidige in de eerste regel, met bovenaan zoeken op naam en symbool: “zloty” vindt “Złoty”.

Alleen het symbool verandert — de app rekent bedragen niet om. Hield je je budget in euro's bij en kies je dollars, dan wordt € 1.000 $ 1.000. Daarom kies je de valuta aan het begin, niet midden in je boekhouding.

*Een budget per valuta:*
Elk budget heeft een eigen valuta. Woon je tussen twee landen? Dan kun je twee budgetten bijhouden: “Thuis” in euro's en “Londen” in ponden. Tik op de naam van het budget in de kop van “Overzicht” — daar staan het wisselen van budget en een nieuw budget; bij het aanmaken wordt om de valuta gevraagd.

### Een rekening in een andere valuta {#scenario-currencies-foreign-account}

1. “Saldo's” → “⋮” → “Rekening toevoegen”.
2. Type — “Alleen bijhouden” (of “Lening” als het een schuld is). Alleen een rekening buiten het budget kan een eigen valuta hebben.
3. Tik in het onderdeel “Valuta van de rekening” op het veld “Valuta” — een lijst met zestig valuta opent, dezelfde als bij het budget: de huidige in de eerste regel, bovenaan zoeken op naam en symbool. Namen staan in de eigen taal van het land: “zloty” vindt “Złoty”.
4. Cryptovaluta — chips onder het veld: ₿, USDT, USDC.
5. Staat ze er niet bij? Typ haar zelf in “Of typ je eigen (ticker)”: ETH, de ticker van een aandeel of fonds. De bedragen van de rekening krijgen dat label.
6. Bedrag — hoeveel er in die valuta op de rekening staat.

De rekening gaat naar het onderdeel “BUITEN BUDGET”, met bedragen in haar eigen symbool: “$ 1.200,00”. Meer in het artikel [“Saldo's”](#accounts-kinds).

### Wisselen {#scenario-currencies-exchange}

Dollars gekocht met euro's? Dat is een overboeking tussen je eigen rekeningen, alleen met een koers.

1. “+ Transactie”, rekening — je europas, “Begunstigde” → “Overboekingen” → de dollarrekening.
2. Bedrag — hoeveel euro er afging.
3. Onder de begunstigde staan “Bijgeschreven” en “Koers”. Voer de koers in of hoeveel dollar er binnenkwam — het andere wordt berekend. De knop naast de koers draait de richting om: euro per dollar of dollar per euro.
4. De dollarrekening staat buiten het budget — de app vraagt om een categorie: uit welke envelop het geld ging. Bijvoorbeeld “Noodpotje” of “Beleggingen”.

Meer in het artikel [“Transactieformulier”](#entry-transfer).

*De dollars terugverkocht:*
Een overboeking van de dollarrekening naar je pas. Het veld “Categorie” opent “Waar de inkomsten heen gaan”: “Inkomsten voor …” — als het nieuw geld is om te verdelen, “Naar een uitgavecategorie…” — als het terugkeert naar de envelop waar het uit kwam.

### In het ene land wonen, in het andere sparen {#scenario-currencies-two-countries}

Het budget staat in de valuta waarin je betaald wordt en dagelijks uitgeeft: euro's, ponden, dollars. Geld in het land van herkomst, een deposito in een andere valuta, dollars als appeltje voor de dorst — rekeningen buiten het budget, elk in een eigen valuta. De enveloppen tellen waar je van leeft, en de rest staat ernaast op “Saldo's”.

Leg kaartuitgaven in het buitenland vast met het bedrag dat de bank in de valuta van je pas afschreef. Het bedrag in lokale valuta, als je het nodig hebt, gaat in de notitie. Meer in het scenario [“Op reis met vrienden”](#scenario-trip-abroad).

### Cryptovaluta {#scenario-currencies-crypto}

Een rekening buiten het budget, de chip ₿, USDT of USDC onder het veld “Valuta” — en de schakelaar “Cryptovaluta” gaat vanzelf aan: “8 decimalen”. Voor je eigen ticker (ETH, SOL) zet je hem met de hand aan. Een gewone valuta uit de lijst gekozen? De schakelaar gaat uit.

Het aantal decimalen kies je één keer: zodra de rekening transacties heeft, zegt de schakelaar “Kan niet wijzigen: de rekening heeft transacties”.

### Valuta zonder centen {#scenario-currencies-no-cents}

De yen, de won en de dong hebben geen kleinere eenheden, maar de app toont toch “,00”. Dat is alleen de weergave: typ hele getallen zoals gewoonlijk. Met invoer “Met komma” is 1500 gewoon 1.500, niet 15,00. Hoe bedragen worden ingevoerd — “Instellingen” → “Taal en notaties” → “Bedrag invoeren”.

### Hoe bedragen eruitzien {#scenario-currencies-format}

“Instellingen” → “Taal en notaties” → “Bedragnotatie”: de scheidingstekens voor duizendtallen en decimalen, het valutasymbool links of rechts. Standaard volgt het de taal van de interface: in het Nederlands “€ 1.234,56”. Engels op een telefoon uit India krijgt meteen lakhs en crores: “₹12,34,567.89”. Meer in het artikel [“Instellingen”](#settings-formats).

### Wat er ontbreekt {#scenario-currencies-not-yet}

- **Wisselkoersen van internet.** De koers voer je zelf in, bij het wisselen. Dat is ook een bescherming: de app vraagt geen enkele dienst om koersen, dus niemand buiten weet in welke valuta je geld staat. Je gegevens blijven bij jou — zoals ook het [privacybeleid](#settings-s-about) zegt.
- **Omrekenen naar één valuta.** “Vermogen” telt alleen rekeningen in de valuta van het budget op: een dollarrekening telt niet mee. Op “Saldo's” toont een onderdeel met een rekening in een andere valuta geen totaal — euro's en dollars optellen kan niet.
- **Budgetrekeningen in een andere valuta.** Waarom — [hierboven](#scenario-currencies-rule).

## Overzicht {#overview}

Het eerste scherm bij het openen: is er genoeg geld, wat is dringend en wat komt eraan — in één reeks kaarten.

*Het tabblad “Overzicht” in het midden onderaan het scherm*

### Waarom dit scherm {#overview-why}

“Overzicht” opent als eerste, elke keer dat je de app start. Het is een ochtendblik op je geld: is alles in orde, wat raakt op, wat komt eraan. Geld verdelen of transacties bewerken doe je hier niet — daarvoor zijn “Budget” en “Boekingen”. Hier kijk je en beslis je waar je daarna heen gaat.

##### Is alles in orde

Is er niet-toegewezen geld, waar staat een min, welke enveloppen lopen sneller leeg dan de maand verstrijkt.

##### Wat er al gebeurde

Recente transacties, grote uitgaven, een kalender van uitgavendagen.

##### Wat eraan komt

Geplande betalingen, doelen waar geld voor ontbreekt, en de uitgaven van deze maand vergeleken met normaal.

Minimaliseer je de app langer dan een halve minuut, dan opent bij terugkomst weer “Overzicht”. Wil je liever terug naar waar je was, kies dat dan in “Instellingen → Weergave → Terug naar”.

### Wat waar staat op het scherm {#overview-screen}

Tik op een schermafbeelding om haar schermvullend te openen.

[Scherm “Overzicht”: kop, de chip “Niet toegewezen” en “Leeftijd van het geld”, “Recente transacties”, “Raakt op”]

1. **Instellingen** — het tandwiel. Alle instellingen van de app: synchronisatie, back-ups, weergave, taal.

2. **Naam van het budget** — tik erop om de lijst met je budgetten te openen en naar een ander te wisselen.

   *Hoe het werkt:*
   Je kunt meerdere budgetten hebben: bijvoorbeeld persoonlijk en gezin, of een oud budget dat je niet wilt verwijderen. Een budget aanmaken, hernoemen of verwijderen — het menu “⋮” → “Budgetten” ([hieronder](#overview-menu)).

3. **Synchronisatie** — twee pijlen in een cirkel. Tik erop — je wijzigingen gaan naar de cloud, en wijzigingen van andere apparaten komen hierheen.

   *Hoe het werkt:*
   Het getal op het pictogram is hoeveel wijzigingen nog niet verstuurd zijn. Direct na een synchronisatie knippert het pictogram 15 seconden: groen — het lukte, rood — het lukte niet. Houd je vinger erop, en de app vertelt wat er gebeurde.

   Eén mislukking is meestal het netwerk: de metro, een huisje in het bos. Mislukt het vier keer achter elkaar, dan blijft het pictogram rood met een “!” erin tot het lukt. Geen cloud gekoppeld — het pictogram heeft zijn gewone kleur, zonder getal.

4. **Het menu “⋮”** — budgetten, blokken kiezen, “Bedragen verbergen”. Uitgelegd [hieronder](#overview-menu).

5. **“Niet toegewezen”** — geld dat op je rekeningen staat, maar nog niet over enveloppen verdeeld is. Tik erop, en de app stelt voor hoe je het verdeelt.

   *Hoe het werkt:*
   Het opschrift verandert mee met het getal:

   - **“Niet toegewezen”** — er is geld te verdelen. Op de schermafbeelding is het € 300: er kwam salaris binnen, en de enveloppen voor november zijn al gevuld.
   - **“Alles toegewezen”**, in groen — elke euro heeft een taak. Dat is het doel.
   - **“Te veel toegewezen”**, in rood — er zit meer in de enveloppen dan er op de rekeningen staat. Haal het teveel uit een categorie op het scherm “Budget”.

   Tikken kan alleen als er iets te verdelen is. Het blad “Budget automatisch toewijzen” opent: “Alle overschrijdingen dekken”, “Te weinig”, “Vorige maand toegewezen” en andere manieren. Naast elke manier staat hoeveel het zou kosten. Er verandert niets tot je bevestigt. Meer over enveloppen — in het artikel [“Budget”](#budget).

6. **“Leeftijd van het geld”** — hoeveel dagen je geld gemiddeld blijft liggen voordat je het uitgeeft.

   *Hoe het werkt:*
   Op de schermafbeelding 52 dagen: wat je vandaag uitgeeft, kwam bijna twee maanden geleden binnen. De app neemt de laatste tien uitgaven en kijkt welk inkomen elk ervan betaalde — het oudste geld wordt eerst uitgegeven.

   Onder de 30 dagen — je leeft van salaris tot salaris, en elke vertraging in je loon raakt het budget. Boven de 30 — je geeft het geld van vorige maand uit, en het nieuwe salaris wacht rustig zijn beurt af. Een min — er is meer uitgegeven dan er op de budgetrekeningen stond. De zandloper op het pictogram zegt hetzelfde: vol — 30 dagen of meer, half leeg — minder, leeg — een min.

   De leeftijd kan op drie manieren berekend worden, en vanaf 30 dagen is het zinvol om van het geld van vorige maand te leven. Dat alles — [hieronder](#overview-age).

7. **Blokken** — overzichtskaarten, onder elkaar. Welke je toont en in welke volgorde, bepaal je zelf. Elk blok wordt [hieronder](#overview-blocks) uitgelegd.

8. **“+ Transactie”** — een uitgave of inkomen vastleggen. Erboven — de camera (een bon via QR-code) en de microfoon (met je stem). Scroll naar beneden, en de knoppen vouwen samen tot één “+”.

   *Hoe het werkt:*
   Het is hetzelfde formulier als op het scherm [“Boekingen”](#transactions): elk tabblad heeft er een ingang naartoe.

### De blokken op volgorde {#overview-blocks}

Onder de chip “Niet toegewezen” (uitleg 5 en 6) komen de kaarten. Hier staan ze in de volgorde van direct na het installeren. Een blok zonder iets te tonen verbergt zichzelf: geen tags — geen “Mijn tags”, geen doelen — geen “Doelen”.

Een blok verwijderen, terughalen of hoger zetten — “⋮” → “Widgets” ([hieronder](#overview-menu)).

[Het blok “Recente transacties” op de schermafbeelding van “Overzicht”]

#### Recente transacties

De laatste vijf boekingen: datum, begunstigde, bedrag, categorie en notitie. Handig om na te gaan of alles van gisteren is vastgelegd.

*Hoe het werkt:*
Inkomen heeft een “+”, uitgaven een “−”. Een gesplitst bedrag (“HEMA” op de schermafbeelding) heeft een vorkpictogram ernaast, en zijn categorieën staan gescheiden door puntjes. Er staan twee inkomende bedragen op de schermafbeelding: een salaris en € 43 van Andries — een vriend betaalde zijn helft van “HEMA” terug. Dat is geen inkomen maar een terugbetaling naar “Boodschappen” (hoe je die vastlegt — in het artikel [“Transactieformulier”](#entry)).

De regels hier zijn niet aantikbaar. Een transactie corrigeren doe je in [“Boekingen”](#transactions).

[Het blok “Overschrijdingen en waarschuwingen” op de schermafbeelding van “Overzicht”]

#### Overschrijding en “Raakt op”

Enveloppen die nu aandacht nodig hebben. Tik op een regel om het scherm van die categorie te openen.

*Hoe het werkt:*
- **“Overschrijding”**, in rood — de categorie staat in de min: je gaf meer uit dan je opzijzette. Een portemonnee-pictogram betekent een min uit je eigen geld; die gaat van het “niet toegewezen” van volgende maand af. Een kaartpictogram en geel betekenen een min op een creditcard: die werd kaartschuld in plaats van je geld op te eten. Een min wegwerken — op het scherm [“Budget”](#budget).
- **“Raakt op”**, in geel — er zit nog genoeg geld in de envelop, maar je geeft sneller uit dan de maand verstrijkt. De app verdeelt het plan van de maand gelijk over de dagen en laat 15% marge. Op de schermafbeelding is het vandaag 10 november, en aan “Boodschappen” is meer uitgegeven dan tot deze datum hoorde, zelfs met de marge.
- **“Alles onder controle”** — geen minnen, geen waarschuwingen. Het blok toont dit in plaats van leeg te blijven.

Categorieën met precies nul over staan hier niet: het plan klopte tot op de cent.

[Het blok “Waar het geld heen ging” op de schermafbeelding van “Overzicht”]

#### Waar het geld heen ging

De vijf duurste categorieën van de maand: bedrag, percentage van alle uitgaven en een balk van dezelfde lengte.

*Hoe het werkt:*
Op de schermafbeelding is “Huur” 76% van de uitgaven van november: huur wordt op de 1e in één keer betaald, terwijl andere uitgaven dag na dag oplopen. Tegen het eind van de maand trekken de percentages bij.

Veeg de kaart met je vinger naar rechts voor vorige maand, naar links voor de volgende. Terug naar de huidige maand — de chip “Vandaag”, die in de kop van de kaart verschijnt als je naar een andere maand ging.

[Het blok “Wat eraan komt” op de schermafbeelding van “Overzicht”]

#### Wat eraan komt

De eerstvolgende geplande betalingen en doelen waar geld voor ontbreekt — tot zes regels, op datum.

*Hoe het werkt:*
Een geplande betaling heeft een kalenderpictogram, een doel een vlag. Er staan twee doelen op de schermafbeelding: “Noodpotje” komt tegen eind november € 1.124,53 tekort, “Reizen en vakantie” — € 100. Het gele bedrag is hoeveel er nog bij moet.

De regels zijn niet aantikbaar: geld in een categorie stoppen — het scherm [“Budget”](#budget), geplande betalingen — “Instellingen → PLANNING”.

[Het blok “Maandbudget” op de schermafbeelding van “Overzicht”]

#### Maandbudget

Waar het getal “Niet toegewezen” vandaan komt: een ladder van het saldo van vorige maand naar het totaal.

*Hoe het werkt:*
Lees het van boven naar beneden, zoals een kassabon:

- **Overgedragen uit oktober** — hoeveel er vorige maand niet was toegewezen.
- **Budget van november** — het inkomen van deze maand: op de schermafbeelding twee salarissen van € 1.400.
- **Toegewezen in november** — hoeveel er al over enveloppen is verdeeld.
- **Niet toegewezen** — het totaal, hetzelfde getal als op de chip bovenaan het scherm.

Onder de streep staat het “Plan”: hoeveel er al klaarstaat voor december, het gemiddelde inkomen per maand en hoeveel je doelen per maand vragen, met het percentage van het inkomen. Soms verschijnen er meer regels — de overschrijding van vorige maand, geld van spaarrekeningen, vooruit opzijgezet geld; lege regels verbergt het blok.

De kaart is in beide richtingen te vegen, ook vooruit: geld voor december kun je al in november toewijzen.

[Het blok “Vermogen” op de schermafbeelding van “Overzicht”]

#### Vermogen

Alles wat je bezit min schulden — en hoe het veranderde.

*Hoe het werkt:*
In grote letters — je vermogen vandaag: € 12.209,72 op de schermafbeelding. Rechts — hoeveel het groeide in de periode (+€ 4.343,99 over 6 maanden), daaronder — een lijn per maand en een verdeling: “Bezittingen” (alle rekeningen met een plus) en “Schulden” (creditcards en leningen).

In de “⋮” van het blok: de periode — 6 maanden, 12 maanden, dit jaar of alle tijd — en “Rekeningen in andere valuta”: zulke rekeningen verschijnen als aparte regels in hun eigen valuta, zonder omrekening en buiten het totaal.

**Direct na het installeren:** het blok staat uit; zet het aan via “⋮” → “Widgets”.

[Het blok “Doelen” op de schermafbeelding van “Overzicht”]

#### Doelen

Hoeveel categorieën deze maand tekortkomen op hun doel, en hoeveel. Tik erop om het scherm “Doelen” te openen.

*Hoe het werkt:*
Op de schermafbeelding komen twee doelen samen € 1.224,53 tekort. Doelen stel je in op het categoriescherm of op het scherm “Doelen”: “Elke maand opzijzetten”, “Sparen tegen …”, “Op het saldo houden”, “Percentage van het inkomen” of “lijst”.

[Het blok “Betaal jezelf” op de schermafbeelding van “Overzicht”]

#### Betaal jezelf

Welk percentage van je inkomen je opzijzet voor je toekomstige zelf — over een maand, drie maanden en een jaar.

*Hoe het werkt:*
De regel is oud en eenvoudig: betaal bij elk salaris eerst jezelf, en pas dan alle anderen. De norm is 10% van het inkomen.

Op de schermafbeelding is in november 11,2% opzijgezet — € 34,00 boven de norm. Ligt het onder de norm, dan staat onder het percentage “tekort”, met een bedrag.

Welke categorieën als “gespaard” tellen, kies je zelf: “Instellingen → Budget → Betaal jezelf”. Meestal is dat spaargeld: “Noodpotje”, “Beleggingen”. Zonder keuze — geen blok.

[Het blok “Grote uitgaven” op de schermafbeelding van “Overzicht”]

#### Grote uitgaven

De drie grootste uitgaven van de maand — datum, begunstigde, bedrag, categorie en notitie.

*Hoe het werkt:*
Het helpt om op te merken wat eruit springt: een onverwacht dure boodschappenronde zie je meteen, niet aan het eind van de maand.

**Direct na het installeren:** het blok staat uit; zet het aan via “⋮” → “Widgets”.

[Het blok “Kalender” op de schermafbeelding van “Overzicht”]

#### Kalender

De maand als raster van dagen: hoe feller de cel, hoe meer er werd uitgegeven. Tik op een dag om te zien wat er die dag gebeurde.

*Hoe het werkt:*
Een uitgebreide blik met de modi en het menu — [hieronder](#overview-heatmap).

[Het blok “Mijn tags” op de schermafbeelding van “Overzicht”]

#### Mijn tags

Tot vier tags: hoeveel eronder werd uitgegeven, over welke periode en hoeveel transacties.

*Hoe het werkt:*
Een tag met “Verrekening” toont rechts hoeveel er nog te innen of terug te geven is om quitte te spelen: op de schermafbeelding toont “#samsam” “nog te innen € 43,00”: een aankoop bij “HEMA” werd gedeeld met een vriend, en die betaalde de helft al terug. Tik op een tag om zijn scherm te openen. “Alle tags ›” onderaan het blok — de hele lijst.

In de “⋮” van het blok: “Tags kiezen…” — welke vier je toont en in welke volgorde; en de periode — “Totaal over de hele periode” of “Totaal van deze maand”. Kies je niets, dan toont de app zelf tags met transacties in de laatste 30 dagen. Geen tags — geen blok.

Over tags zelf — in het artikel [“Boekingen”](#transactions).

[Het blok “Uitgaven deze maand” op de schermafbeelding van “Overzicht”]

#### Uitgaven deze maand

Hoeveel je sinds het begin van de maand uitgaf — tegenover hoeveel je gewoonlijk tot deze datum uitgeeft.

*Hoe het werkt:*
In grote letters — de uitgaven sinds de 1e: € 1.620,99. Rechts — het verschil met normaal: +€ 59,87, dus iets meer dan normaal. De felle lijn is deze maand, de dunne het normale.

“Gewoonlijk” is het midden van je voorbije maanden van het laatste jaar: één ongewoon dure maand verschuift het niet. De kaart is te vegen zoals “Waar het geld heen ging”.

### De kalender in detail {#overview-heatmap}

Het levendigste blok op “Overzicht”: een hele maand op één kaart. Laat je ogen erover gaan — en je ziet welke dagen duur waren en welke helemaal zonder uitgaven voorbijgingen.

[Het blok “Kalender”: chips Uitgaven, Inkomsten, Gepland, het raster van november, vandaag — dag 10, “3 dagen zonder uitgaven”]

(E)
#### Modi

Wat er gekleurd wordt: “Uitgaven”, “Inkomsten” of “Gepland”.

*Hoe het werkt:*
- **“Uitgaven”** — zes tinten. De felste cel is de duurste dag van de maand, en elke stap omlaag is de helft. De helderheid beantwoordt “hoeveel keer goedkoper was deze dag dan de duurste”.
- **“Inkomsten”** — hetzelfde voor binnenkomend geld, in groen.
- **“Gepland”** — de dagen waarop geplande betalingen vervallen. Een voorbije dag waarop alles werd ingevoerd, krijgt een vinkje; waar een betaling werd gemist, is het dagnummer rood.

In de modus “Uitgaven” krijgt een toekomstige dag met een geplande betaling een stippellijn.

(F)
#### Het menu van de kalender

Drie puntjes in de kop van de kaart, rechts van de maand. Het stelt in wat er nog meer op het raster komt en wat het dagblad toont.

*Hoe het werkt:*
**Het dagblad** is geen menu-item. Het opent als je in het kalenderraster op een getal tikt: een lijst van wat er die dag gebeurde schuift van onderen omhoog (schermafbeelding [hieronder](#overview-day)). Het menu stelt alleen in wat dat blad bevat.

Items in de modus “Uitgaven”:

- **“Inkomsten als stippen”** — een dag waarop geld binnenkwam, krijgt een groene stip in zijn cel.
- **“Hele dag in het dagblad”** — tik op een getal, en het dagblad toont niet alleen uitgaven maar ook het inkomen van die dag: als een ingeklapte regel onderaan; tik erop om hem uit te klappen. Uit — het blad toont alleen uitgaven.

In de modus “Gepland” zijn de items anders: toekomstige betalingen tonen als celvulling of als stip, en of het nummer van een dag met een gemiste betaling rood gemarkeerd wordt.

**Direct na het installeren** staan “Inkomsten als stippen” en “Hele dag in het dagblad” uit.

(G)
#### Vandaag

Vandaag heeft een omlijning.

*Hoe het werkt:*
Veeg de kalender met je vinger om een andere maand te zien, terug en vooruit zonder grens: hij werkt ook als gewone kalender waarop je ziet op welke weekdag een datum valt. Terug — de chip “Vandaag” in de kop van de kaart.

(H)
#### Dagen zonder uitgaven

Hoeveel dagen van de maand zonder één enkele uitgave voorbijgingen. Rechts — de helderheidsschaal.

*Hoe het werkt:*
Een lege cel in het verleden is een dag zonder uitgaven. Was het enige die dag een terugbetaling van een winkel, dan staat er een lege ring in plaats van een vulling.

#### Het dagblad: tik op een getal in de kalender {#overview-day}

Er schuift een blad van onderen omhoog: de datum en het dagtotaal in de kop, en daaronder elke transactie. Een gesplitst bedrag wordt in delen getoond: op de schermafbeelding “HEMA” — € 61 voor boodschappen en € 25 voor schoonmaakmiddelen.

[Dagblad voor 10 november: totaal −€ 43,00, twee delen van de aankoop bij “HEMA”, de terugbetaling van Andries]

Zo open je het: zoek op “Overzicht” de “Kalender” en tik op het getal van de gewenste dag — op de schermafbeelding hierboven is dat de 10e, omlijnd als “vandaag” (G). Het blad toont wat de kalender kleurt: in de modus “Uitgaven” — de uitgaven van de dag, in “Inkomsten” — het binnenkomende geld. Om beide tegelijk te zien, zet je “Hele dag in het dagblad” aan in het menu van de kalender (F). Het blad sluit je door het omlaag te vegen of ernaast te tikken.

In de modus “Gepland” is het blad anders: wat niet is ingevoerd, wat wel, en wat nog komt. Veeg een vervaldatum naar links — “Invoeren”, naar rechts — “Verwijderen”.

### Leeftijd van het geld in detail {#overview-age}

Het getal op de chip beantwoordt de vraag: hoeveel dagen lag mijn geld stil voordat ik het uitgaf. Je salaris kwam op 1 oktober, en op 5 november koop je brood van wat er over is van het geld van oktober — dat geld is 35 dagen oud. De app neemt de laatste tien uitgaven, zoekt voor elke uitgave welk inkomen ervoor betaalde (het oudste geld eerst) en toont het gemiddelde.

##### Onder de 30 dagen

Van salaris tot salaris: de uitgaven van vandaag worden betaald uit het laatste salaris, en elke vertraging slaat meteen toe.

##### 30 of meer

Een maand vooruit: je geeft het geld van vorige maand uit. Dat is het doel van de methode — [wat daarna](#overview-age-month).

##### Een min

Er is meer uitgegeven dan er op de budgetrekeningen stond.

#### Drie manieren van berekenen {#overview-age-modes}

De leeftijd van het geld is een omstreden maat, en er bestaat geen enkele juiste formule voor. Daarom kies je zelf de manier: “Instellingen → Budget → Leeftijd van het geld”. Het getal verandert meteen — zowel op de chip als in het rapport “Leeftijd van het geld”.

##### Klassiek (YNAB FIFO) · direct na het installeren

De manier van YNAB. Overboekingen ziet hij helemaal niet — noch naar spaargeld, noch ervan. Uitgaven waarvoor je geen geld had, wegen precies −1 dag, of het nu om honderd euro gaat of tienduizend.

Goed als je niet aan je spaargeld komt: dan is hij eerlijk en klopt hij met YNAB. Slecht als je leeft van overboekingen van je spaargeld: het geld komt op de betaalrekening, hij ziet het niet, en tekent vrolijke positieve dagen. In een echt budget stonden de rekeningen € 3.000 in de min, gedekt door overboekingen uit “Beleggingen” — en Klassiek toonde +10 dagen.

##### Met spaargeld · het dichtst bij de waarheid

Een overboeking van spaargeld is geld dat het budget binnenkomt, een overboeking naar spaargeld is geld dat het verlaat. Uitgaven boven wat je had, worden gemeten in dagen van je inkomen: een week inkomen meer uitgegeven dan je had — ongeveer min 7 dagen.

Het resultaat is het gemiddelde over de laatste 10 uitgaven, dus één uitgave in de min tussen gedekte wordt verzacht.

##### Met spaargeld, met diepte van de schuld

Hetzelfde als de vorige zolang het budget in de plus staat. Maar in de min toont hij niet het gemiddelde maar de diepte van het gat: hoeveel dagen van je normale inkomen het kost om het te dichten.

Dat is geen leeftijd meer maar een alarmsignaal. Handig zolang je uit de min klimt: het getal krimpt eerlijk met elk salaris.

##### Welke kiezen

Het dichtst bij de waarheid ligt **“Met spaargeld”**: hij telt precies het geld op je budgetrekeningen, met alles wat van spaargeld kwam en ernaartoe ging. Klassiek is alleen eerlijk zolang je niet aan je spaargeld komt. Diepte van de schuld is voor wie nu in de min staat en wil zien hoeveel er nog over is. Schuif je geen geld naar spaargeld en terug en geef je niet meer uit dan je hebt, dan tonen ze alle drie hetzelfde getal.

#### Leeftijd van 30 dagen of meer: leef van het geld van vorige maand {#overview-age-month}

Omdat je uitgaven al betaald worden uit het vorige salaris, heeft deze maand het huidige niet nodig. Geef het meteen aan de volgende maand: dan begint elke maand met klaarstaand geld, en wijs je het vooraf toe in plaats van op de salarisdag te wachten.

##### Hoe je het doet

1. Leg het salaris zoals gewoonlijk vast: “+ Transactie” → “+ Inkomend”, begunstigde, bedrag.
2. Tik op het veld “Categorie”. Het blad “Waar de inkomsten heen gaan” opent.
3. Kies “Inkomsten voor december” — volgende maand —, niet “Inkomsten voor november”. Opslaan.

De datum van de transactie blijft de echte — de dag waarop het geld binnenkwam. Alleen de budgetmaand waarin het verschijnt, verandert. Een al vastgelegd salaris verplaats je op dezelfde manier: open het en wijzig de categorie.

##### Met welk salaris beginnen

Met het salaris dat je nog niet over enveloppen hebt verdeeld. Het verplaatsen verlaagt het “niet toegewezen” van deze maand met het salarisbedrag. Toont het daarna een rood “Te veel toegewezen”, dan werkt dat geld deze maand al: zet het salaris terug naar deze maand en verplaats het volgende.

##### Hoe het budget verandert

- **Deze maand** leeft van wat eerder binnenkwam. Het nieuwe salaris komt niet meer in haar “niet toegewezen”.
- **Volgende maand** krijgt haar geld vooraf. Blader op het scherm “Budget” vooruit met de pijl “›” — het salaris staat al in haar “niet toegewezen”, en je kunt de enveloppen vóór de 1e vullen. Op “Overzicht”, in “Maandbudget” onder de streep — de regel “Budget van december”.
- **Op de 1e** is de hele maand al betaald. Geld wordt één keer toegewezen, aan het begin van de maand, in plaats van in stukjes na elke betaling. “Vorige maand toegewezen” in het automatisch toewijzen doet het met één tik.
- **Doelen “% inkomen”** op basis van het inkomen van de maand zijn vanaf de eerste dag bekend: het inkomen van de maand kwam vorige maand binnen.
- **Rapporten** (“Inkomsten en uitgaven”, “Betaal jezelf”) tellen zo'n salaris in de maand waarvoor het opzijgezet is.
- **De leeftijd van het geld zelf** groeit niet door deze markering: ze groeit als je minder uitgeeft dan je verdient. De markering legt de reserve vast — het geld van volgende maand lost niet op in deze. Tot zijn maand komt, telt zulk inkomen niet mee voor de leeftijd.

### Het menu “⋮” {#overview-menu}

Budgetten, hoe “Overzicht” eruitziet, en de weergavemodus.

[Het menu “⋮” van het scherm “Overzicht”: Budgetten, Widgets, Bedragen verbergen, Tips, Kennisbank]

(A)
#### Budgetten

Alles over budgetten op één blad.

*Hoe het werkt:*
“Nieuw budget aanmaken”, “Budget kiezen”, “Budget verwijderen”. Het laatst overgebleven budget kan niet worden verwijderd — de app heeft er minstens één nodig. Gewoon naar een ander budget wisselen gaat sneller door bovenaan het scherm op de naam te tikken.

(B)
#### Widgets

Welke blokken op “Overzicht” staan en in welke volgorde.

*Hoe het werkt:*
Een vinkje — het blok wordt getoond, leeg — verborgen. Om een blok hoger of lager te zetten, sleep je het aan de greep rechts. De instelling geldt voor dit apparaat: op een tablet kan “Overzicht” er anders uitzien dan op de telefoon.

(C)
#### Bedragen verbergen

Puntjes in plaats van getallen. Voor het moment dat iemand anders het scherm kan zien.

*Hoe het werkt:*
Telefoon naar iemand gedraaid, een schermafbeelding voor de support, een video opnemen — zet het aan, en bedragen op alle schermen worden “••••”. Het teken “+” of “−” blijft: het zegt welke kant het geld op ging, maar niet hoeveel. Balken, grafieken en kleuren blijven zoals ze waren.

Zolang de modus aanstaat, staat er een doorgestreept oog in de kop van “Overzicht” — tik erop om de bedragen terug te halen. Of in dezelfde “⋮” — het item heet nu “Bedragen tonen”. De modus overleeft een herstart van de app.

(D)
#### Tips

Alle tips van dit scherm op één plek.

(E)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

[Blad “Overzichtswidgets”: blokken met vinkjes en sleepgrepen]
**“Widgets”.** Een vinkje — tonen, de greep rechts — slepen.

### Wat je op het scherm kunt doen {#overview-gestures}

De meeste regels op “Overzicht” zijn alleen om te lezen. Aantikbaar zijn de regels die ergens heen leiden.

| Doe dit | Wat er gebeurt |
|---|---|
| Trek het scherm omlaag | Alle blokken opnieuw berekenen. |
| Tik op de naam van het budget | Naar een ander budget wisselen. |
| Tik op “Niet toegewezen” | Het blad “Budget automatisch toewijzen” — als er iets te verdelen is. |
| Veeg een kaart naar links of rechts | Een andere maand — voor “Waar het geld heen ging”, “Maandbudget”, “Kalender” en “Uitgaven deze maand”. Bij de eerste keer laat een vinger dit gebaar zelf zien. |
| Tik op een regel met een overschrijding | Het [categoriescherm](#category): saldo, uitgaven, de transacties van de maand. |
| Tik op een dag in de kalender | Het dagblad: wat er die dag gebeurde. |
| Tik op “Doelen” of op een tag | Het scherm “Doelen” of het tagscherm. |

## Budget {#budget}

Je enveloppen. Hier beslis je hoeveel geld je opzijzet voor eten, huur en al het andere — en zie je hoeveel er in elke envelop over is.

*Het tabblad “Budget” onderaan het scherm*

### Waarom dit scherm {#budget-why}

Stel je een stapel enveloppen voor met “Boodschappen”, “Huur”, “Nutsvoorzieningen” erop. Op de salarisdag verdeel je geld over ze. Als je uitgeeft, haal je het uit de juiste envelop. Een envelop is leeg — er is deze maand geen geld meer voor, tenzij je wat overschuift uit een andere.

Het scherm “Budget” is die stapel enveloppen. Elke regel is een envelop (in de app heet dat een categorie), en het bedrag rechts is hoeveel er nu in zit. Er is één hoofdregel: verdeel al je geld over enveloppen tot bovenaan “Alles toegewezen” verschijnt.

##### Een salaris verdelen

Er kwam geld binnen — bovenaan verscheen “niet toegewezen”. Verdeel het over de enveloppen.

##### Kijken vóór het kopen

“Kan ik nieuwe sneakers betalen?” — kijk naar het bedrag naast “Kleding en schoenen”.

##### Het rood wegwerken

Meer uitgegeven dan je opzijzette? Schuif geld over uit een andere envelop.

### Wat waar staat op het scherm {#budget-screen}

Tik op een schermafbeelding om haar schermvullend te openen.

[Scherm “Budget”, augustus: “Alles toegewezen”, chips “Te weinig” en “Beschikbaar”, categoriegroepen met saldi en balken]

1. **Maand** — welke maand je nu verdeelt.

   *Hoe het werkt:*
   De pijlen “‹” en “›” bladeren door de maanden. Tik op de naam voor een maandkiezer, zodat je niet één voor één hoeft te bladeren.

   Vooruit gaat zonder grens — en dat is nuttig: in september kun je al geld opzijzetten voor decembercadeaus. Elke maand heeft eigen enveloppen, en wat in een envelop over is, gaat vanzelf mee naar de volgende maand.

2. **“Niet toegewezen”** — geld dat nog in geen enkele envelop zit. Het belangrijkste getal op het scherm.

   *Hoe het werkt:*
   Er komt een salaris binnen — het belandt hier. Jouw taak is het over enveloppen te verdelen tot dit op nul staat. Deze plek heeft drie toestanden:

   - **een getal op een gekleurde chip** — het geld wacht op een taak. Tik op de chip voor automatisch toewijzen: de app biedt aan het geld te verdelen zoals vorige maand, op gemiddelde uitgaven, op doelen of op jouw percentages;
   - **“✓ Alles toegewezen”** — doel bereikt: elke euro heeft een taak. Zoals op de schermafbeelding;
   - **rood “te veel toegewezen”** — je stopte meer in enveloppen dan je hebt. Tik erop — en haal het teveel uit enveloppen.

3. **Het menu “⋮”** — doelen, volgorde, hoe regels eruitzien. Elk item wordt [hieronder](#budget-menu) uitgelegd.

4. **Filterchips** — toon alleen de enveloppen die aandacht nodig hebben.

   *Hoe het werkt:*
   “Overschreden” — enveloppen in de min. “Te weinig” — enveloppen die het doel van deze maand nog niet halen. “Beschikbaar” — waar geld in zit. Het getal op een chip is hoeveel van zulke enveloppen er zijn; op de schermafbeelding wachten er twee op geld om hun doel te halen, en in tien zit geld.

   Een chip met nul wordt niet getoond: als niets overschreden is, verschijnt “Overschreden” gewoon niet. Tik op “Alle” om de hele lijst terug te halen.

5. **Groep** — een plank met gelijksoortige enveloppen.

   *Hoe het werkt:*
   “Vaste lasten”, “Dagelijkse uitgaven”… Rechts — hoeveel er in alle enveloppen van deze groep zit. Tik op de naam om de groep weg te klappen. Houd ingedrukt voor een menu: hernoemen, een categorie of een nieuwe groep toevoegen, verwijderen.

   Zet “Percentage van inkomen” aan in het menu “⋮” — en onder het bedrag van de groep zie je welk percentage van het maandinkomen je in al haar enveloppen samen stopte. Je ziet meteen dat “Vaste lasten” bijvoorbeeld de helft van je salaris nemen, en “Dagelijkse uitgaven” een derde. Het percentage telt elke envelop in de groep, ook als de groep is ingeklapt of sommige enveloppen door een filter verborgen zijn.

6. **⊕ naast een groep** — een nieuwe envelop in deze groep.

7. **Categorie** — één envelop.

   *Hoe het werkt:*
   Tik op de regel om het [categoriescherm](#category) te openen: alle uitgaven uit deze envelop van de maand en trends over vorige maanden.

   Je kunt de regel met je vinger naar links of rechts vegen — om hem te hernoemen, naar een andere groep te verplaatsen of te verwijderen. Hoe precies — in het onderdeel [“Wat je met een regel kunt doen”](#budget-gestures).

8. **Het bedrag rechts** — hoeveel er nu in de envelop zit. Zijn kleur is de belangrijkste hint van het scherm.

   *Hoe het werkt:*
   - **Groen** — er is geld, je kunt uitgeven.
   - **Grijs 0,00** — de envelop is leeg. Voor huur die je al betaalde, is dat normaal.
   - **Rood, met een portemonnee-pictogram** — je gaf meer uit dan er was. Deze min eet het geld van volgende maand op.
   - **Geel, met een kaartpictogram** — ook een min, maar je betaalde met een creditcard: je kaartschuld groeide, en het geld van het budget werd niet aangeraakt.

   #### Hoe je geld in een envelop stopt

   1. Tik op het bedrag rechts.
   2. Er opent een venster met een toetsenblok. Het toont niet het saldo, maar hoeveel je deze maand al in deze envelop opzijzette.
   3. Typ het nieuwe bedrag — het eerste cijfer vervangt het oude. Wil je liever iets bijtellen? Tik op “+”, typ 35 en “=”.
   4. Heeft de envelop een doel? Tik op “Tot doel: …” — het benodigde bedrag vult zichzelf in.
   5. Tik op “Klaar”.

   Het geld komt uit “niet toegewezen” bovenaan — dat daalt met precies hetzelfde bedrag.

   #### Hoe je een rode min wegwerkt

   1. Tik op het rode bedrag.
   2. Het blad “Overschrijding: Boodschappen” opent met twee items. “Budget wijzigen” opent het toetsenblok van deze envelop, om haar aan te vullen uit “niet toegewezen”. “Dekken uit een andere categorie” schuift geld uit andere enveloppen; daarover hieronder meer.
   3. Tik op “Dekken uit een andere categorie”. Bovenaan — “Te dekken: € 35”, daaronder — “Waar haal je het geld vandaan”: de eerste regel is “Niet toegewezen”, dan elke envelop met geld, met het saldo van elk.
   4. Elke regel heeft een knop “… nemen”: de app rekende al uit hoeveel daar weg kan. Tik erop naast een envelop die je kunt missen. Bijvoorbeeld “Uitgaan en hobby's”.
   5. Er opent een toetsenblok met dat bedrag. Akkoord — tik op “… nemen”. Wil je minder nemen? Typ je eigen bedrag.
   6. Was één envelop niet genoeg? Neem de rest uit de volgende. Als de min is weggewerkt, zegt het blad “Overschrijding gedekt!”.

9. **Balk** — hoeveel van wat je opzijzette, is uitgegeven.

   *Hoe het werkt:*
   Bij “Nutsvoorzieningen” op de schermafbeelding is de balk bijna vol: bijna alles wat voor de maand opzij stond, is op. Ga je over het einde, dan wordt de balk rood.

   Heeft de envelop een doel, dan toont de balk niet meer de uitgaven maar hoe ver het doel gehaald is. Balken zet je uit in het menu “⋮”.

   In de huidige maand heeft de uitgavenbalk een dun verticaal streepje — vandaag: hoeveel van de maand er voorbij is. Is de vulling voorbij het streepje, dan geef je sneller uit dan de maand verstrijkt, en de envelop haalt misschien het eind van de maand niet. Een doelbalk heeft zo'n streepje niet.

10. **“… van … uitgegeven”** — de uitgaven van deze maand tegenover wat je deze maand opzijzette.

    *Hoe het werkt:*
    “€ 92,74 van € 100,00 uitgegeven” bij “Nutsvoorzieningen”: je zette € 100 opzij, gaf € 92,74 uit. Waarom staat er rechts dan 29,44 en niet 7,26? Omdat er in de envelop ook geld uit vorige maanden zat — het saldo reist met de envelop mee.

    Om dezelfde reden staat er bij “Boodschappen” een rode regel — “€ 133,28 uitgegeven boven € 400,00” — terwijl het bedrag rechts groen is: het plan van de maand is overschreden, maar de reserve uit vorige maanden dekte de overschrijding. De envelop staat in de plus, alles is in orde.

11. **Doelvlag** — “Bereikt” of “nog …”.

    *Hoe het werkt:*
    Een doel zegt een envelop hoeveel erin moet: “€ 400 voor boodschappen per maand” of “€ 1.300 voor vakantie tegen juli”. De vlag onder het bedrag laat zien of het doel deze maand gehaald is, en zo niet, hoeveel er nog bij moet. Doelen stel je in op het categoriescherm.

12. **“Vandaag”** — terug naar de huidige maand. Verschijnt als je naar een andere ging.

13. **Nieuwe uitgave** — dezelfde drie knoppen als op “Boekingen”. [Meer in het artikel “Boekingen”](#transactions)

### Het menu “⋮” {#budget-menu}

Doelen, de volgorde van enveloppen, en wat de regels tonen.

[Het geopende menu “⋮” van het scherm “Budget”: Doelen, Toewijzen aan doelen, Volgorde wijzigen, Voortgangsbalken, Percentage van inkomen, Verborgen categorieën, Tips, Kennisbank]

(A)
#### Doelen

Alle doelen van het budget op één scherm. Meer in het artikel [“Doelen”](#goals).

*Hoe het werkt:*
Je ziet welke enveloppen op koers liggen en welke tekortkomen. Tik op een doel om het te wijzigen.

(B)
#### Toewijzen aan doelen

Vul elke envelop aan met zoveel als hij tekortkomt op zijn doel. Meer in het artikel [“Doelen”](#goals).

*Hoe het werkt:*
De app neemt geld uit “niet toegewezen” en geeft het aan enveloppen met doelen — elk precies wat ontbreekt. Eerst toont hij het plan: wat waarheen gaat — en pas na jouw “ja” wijst hij toe.

Zijn alle doelen van de maand al gehaald, dan toont hij hoeveel er in elk zit — zodat je ziet waarom er niets te verdelen is.

(C)
#### Volgorde wijzigen

Enveloppen en groepen herschikken.

*Hoe het werkt:*
Op de regels verschijnen grepen — sleep eraan. Het is handig om je meest gebruikte enveloppen bovenaan te houden. Ben je klaar, dan heet hetzelfde menu-item “Sorteren afronden”.

(D)
#### Voortgangsbalken

Toon onder elke envelop een balk en een regel “… van … uitgegeven”.

*Hoe het werkt:*
Zet ze uit als je een korte lijst wilt: alleen namen en bedragen blijven over. Enveloppen met een doel houden altijd hun balk — die toont het doel.

**Direct na het installeren:** aan.

(E)
#### Percentage van inkomen

Welk percentage van het maandinkomen je in elke envelop opzijzet.

*Hoe het werkt:*
Naast het bedrag verschijnt een label als “12%”: huur slokt 40% van het inkomen op, boodschappen 15%. Elke groep toont onder haar bedrag haar eigen totaalpercentage, over al haar enveloppen. Uitgaven veranderen het percentage niet — alleen hoeveel je opzijzet en het maandinkomen zelf.

**Waarvan het percentage berekend wordt.** Niet van al het geld dat je verdeelt, maar van de regel “Budget van november” in de kaart “Maandbudget” op “Overzicht”: het inkomen dat aan deze maand is toegekend. “Overgedragen uit oktober” hoort daar niet bij. Verdeel je ook het restant van vorige maand, dan vallen de percentages hoger uit dan ze werkelijk zijn, en samen kunnen ze boven 100% komen. Hoeveel van wat je toewees het inkomen van deze maand is en hoeveel het restant — dat zie je in dezelfde kaart ([“Overzicht”](#overview-blocks)).

**Direct na het installeren:** uit. **Zie ook:** automatisch toewijzen “Op percentage” — tik op “niet toegewezen”.

(F)
#### Verborgen categorieën

Enveloppen die je uit het zicht hebt gezet.

*Hoe het werkt:*
Een envelop met uitgaven kun je niet verwijderen — rapporten hebben haar geschiedenis nodig. Verbergen kan wel: ze verdwijnt uit de lijst, en eerdere uitgaven blijven. Hier haal je verborgen enveloppen terug.

(G)
#### Tips

Alle tips van dit scherm op één plek.

(H)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

### Wat je met een regel kunt doen {#budget-gestures}

In de regel staan geen knoppen “bewerken” en “verwijderen”. In plaats daarvan veeg je de regel van de envelop met je vinger opzij — naar een knop die eronder tevoorschijn komt. De eerste regel van de lijst laat één keer zien hoe dat eruitziet.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik op de regel | Het [categoriescherm](#category): de uitgaven en trends van deze envelop in de maand. |
| Tik op het bedrag | Geld in de envelop stoppen, of bij een rode — de min wegwerken. De stappen staan in het item [“Het bedrag rechts”](#budget-balance) hierboven. |
| Veeg naar links | Rechts verschijnt een knop “Bewerken”. Tik erop om “Categorie bewerken” te openen: een nieuwe naam en een veld “Groep”. Kies daarin een andere groep — en de envelop verhuist erheen, met al haar geld en geschiedenis. |
| Veeg naar rechts | Links verschijnt een rode knop “Verwijderen”. Een lege envelop, zonder één enkele aankoop, wordt verwijderd na de vraag “Categorie verwijderen?”. Waren er uitgaven, dan zegt de app “Verwijderen kan niet — er zijn transacties” en biedt “Verbergen” aan: de envelop verdwijnt uit de lijst, en haar geschiedenis blijft. Een verborgen envelop terughalen — het menu “⋮” → “Verborgen categorieën”. |
| Houd een groep ingedrukt | Het groepsmenu: hernoemen, een categorie of een nieuwe groep toevoegen, de groep verwijderen. |

Enveloppen in de groep “Kaartbetalingen” kun je niet vegen: de creditcard zelf beheert ze, en er wordt automatisch geld in opzijgezet.

## Doelen {#goals}

Hoeveel geld elke envelop nodig heeft — en hoeveel er deze maand nog bij moet.

*“Budget” → “⋮” → “Doelen”*

### Waarom doelen {#goals-why}

Een envelop beantwoordt “hoeveel zit hierin”. Een doel beantwoordt “hoeveel zou hierin moeten zitten”. De app vergelijkt de twee en zegt hoeveel er nog bij moet.

**“Eten kost € 400 per maand”** — een doel “Maandelijks” op “Boodschappen”. Elke maand herinnert de app je eraan die € 400 opzij te zetten.

**“Vakantie in maart, ik heb € 2.000 nodig”** — een doel “Tegen datum”. De app verdeelt het bedrag zelf over de maanden: zoveel in november, zoveel in december.

**“In het noodpotje hoort € 4.000”** — een doel “Saldo”. Geef je er een deel van uit, dan vraagt de app het terug te zetten.

Het doel zelf verplaatst geen geld: het rekent alleen. Het geld stop jij in de envelop — op het scherm “Budget” of met één knop “Toewijzen aan doelen” (meer daarover [hieronder](#goals-allocate)). Elke categorie heeft één doel.

### Wat waar staat op het scherm {#goals-screen}

Het scherm “Doelen” open je vanuit “Budget”: “⋮” → “Doelen”. Daarop staan alle categorieën met hun doelen voor de gekozen maand. De schermafbeelding toont november in het demobudget: vijf doelen van vijf soorten.

[Scherm Doelen: maand november 2026, overzicht Totaal 5 doelen, Maandkosten 2.543,53, Tekort 1.609,53; categoriegroepen; Boodschappen — per maand 400, Bereikt; Cadeaus — lijst 175; Reizen — tegen datum 2.000; Noodpotje — saldo 4.000; Beleggingen — % inkomen 280]

(1)
**Maand** — de pijlen “‹ ›” bladeren door de maanden, tikken op de naam opent een maandkiezer. Doelen worden voor deze maand berekend. Verlaat je de huidige maand, dan verschijnt onderaan een knop “Vandaag”.

(2)
**Het menu “⋮”** — welke categorieën je toont, voortgangsbalken, tips — [hieronder](#goals-menu).

(3)
**Overzicht** — “Totaal” is hoeveel doelen er zijn. “Maandkosten” is hoeveel alle doelen deze maand nodig hebben. “Tekort” is hoeveel er nog niet in zit.

(4)
**Groep** — dezelfde groepen als op “Budget”. Onder de naam — hoeveel doelen de groep heeft en hoeveel ze tekortkomen, of “alles gedekt”. Tikken klapt de groep in.

(5)
**Een categorie zonder doel** — “geen doel”. Tik op de regel of op de “⊕” — “Nieuw doel” opent.

(6)
**Een categorie met een doel** — het hele doel in drie regels. Tikken opent het om te bewerken.

*Hoe het werkt:*
De eerste regel: de naam van de categorie, de soort doel (“per maand”, “tegen datum”, “saldo”, “% inkomen”, “lijst”) en het doelbedrag. De tweede: een balk — hoeveel er gedaan is — en de toestand: een groene vlag en “Bereikt”, of een vlag en “nog …” — hoeveel er bij moet. De derde: de voorwaarde van het doel in woorden en het percentage dat gedaan is.

Op de schermafbeelding is “Boodschappen” bereikt: er staat in november al € 400 in de envelop. En “Reizen en vakantie” komt deze maand € 100 tekort — zoveel is er per maand nodig om tegen maart op € 2.000 te komen.

#### Het menu “⋮” {#goals-menu}

[Menu van het scherm Doelen: Alle categorieën, Alleen met doelen, Te weinig gefinancierd, Voortgangsbalken, Tips, Kennisbank]

(A, B, C)
#### Welke categorieën je toont

“Alle categorieën”, “Alleen met doelen” of “Te weinig gefinancierd” — die waarvan het doel deze maand iets tekortkomt. De keuze wordt onthouden; wordt niet alles getoond, dan brandt er een stip op de “⋮”.

(D)
#### Voortgangsbalken

of balken en percentages getoond worden. Zonder wordt de regel korter, terwijl doel en bedrag op hun plek blijven.

(E)
#### Tips

de tips van dit scherm als lijst.

(F)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

### Hoe je een doel instelt {#goals-new}

Een doel stel je hier in, op “Doelen”, of op het eigen scherm van de categorie — met de knop “Doel toevoegen” in de kaart “Doel”. Het is hetzelfde blad.

[Blad Nieuw doel: Soort doel Maandelijks, Bedrag Instellen…, de knop Opslaan grijs]

[Blad Soort doel: Maandelijks, Tegen datum, Saldo, % inkomen, Lijst — elk met uitleg]

1. Tik op een categorie zonder doel. “Nieuw doel” opent.
2. “Soort doel” — tik erop en kies een van de vijf. Elk zegt onder zijn naam waarvoor het dient. Welke wanneer — [hieronder](#goals-types).
3. “Bedrag” — tik erop en typ op het toetsenblok van de app. Bij “% inkomen” staat er “Percentage van het inkomen” in plaats van een bedrag, en bij “Lijst” — de regels van de lijst.
4. “Tegen datum” heeft ook “Sparen tegen maand” — de maand waarin je het hele bedrag nodig hebt.
5. “Opslaan”. Zolang het bedrag niet is ingesteld, is de knop grijs.

**Bewerken of verwijderen** — tik op een categorie met een doel — “Doel bewerken” opent met dezelfde velden. Onderaan — “Verwijderen” en “Opslaan”. Een verwijderd doel verdwijnt; het geld in de envelop blijft.

**Een voorstel uit geplande betalingen** — heeft de categorie een geplande betaling, dan toont de doelkaart op het categoriescherm “Uit de geplande betaling: …”. Een betaling elke maand stelt “per maand” voor op haar bedrag; één keer per jaar — “… sparen tegen de betaling”.

### Vijf soorten doelen {#goals-types}

De soort doel is de regel waarmee de app uitrekent “hoeveel er deze maand nodig is”. Hieronder elke regel met een voorbeeld van de schermafbeelding.

#### “Maandelijks” — voor wat je elke maand uitgeeft {#goals-monthly}

**Hoe het wordt berekend** — elke maand moet je hetzelfde bedrag opzijzetten. Het doel kijkt naar hoeveel je **deze maand** in de envelop stopte, niet naar hoeveel er nog in zit.

*Hoe het werkt:*
“Boodschappen”, € 400 per maand. Stop € 400 in voor november — het doel is “Bereikt”, ook als de helft al op is. Uitgeven is precies waarvoor dit geld dient. Stop € 270 in — “nog € 130”.

Voor boodschappen, internet, vervoer, abonnementen.

#### “Tegen datum” — een bedrag sparen tegen een bepaalde maand {#goals-bydate}

[Blad Doel bewerken: Soort doel Tegen datum, Bedrag 2.000, Sparen tegen maand maart 2027]

**Hoe het wordt berekend** — wat er nog ontbreekt aan het hele bedrag, wordt gedeeld door de resterende maanden, deze meegeteld. Dat geeft de inleg van de maand.

*Hoe het werkt:*
“Reizen en vakantie”, € 2.000 tegen maart. Aan het begin van november zit er € 750 in de envelop, dus ontbreekt er € 1.250. Tot maart, november meegeteld, zijn er vijf maanden — € 250 per maand. In november is er al € 150 opzijgezet — het doel zegt “nog € 100”.

Sla je een maand over, dan wordt het tekort over de resterende verdeeld, dus de inleg groeit vanzelf. Leg je meer in, dan worden de volgende inleggen kleiner.

De balk toont iets anders: hoeveel van het hele bedrag al in de envelop zit. Op de schermafbeelding — 45%.

**Waarvoor** — een vakantie, een jaarlijkse verzekering, cadeaus voor de feestdagen, een verbouwing in het voorjaar — alles wat niet elke maand gebeurt maar wel voorspelbaar is.

#### “Saldo” — een reserve aanhouden {#goals-balance}

**Hoe het wordt berekend** — in de envelop moet altijd dit bedrag zitten. Hoeveel er aan het begin van de maand ontbreekt, zoveel vraagt het doel.

*Hoe het werkt:*
“Noodpotje”, € 4.000. Er zit nu € 2.875,47 in de envelop — het doel vraagt “nog € 1.124,53”. Er is geen deadline: vul aan wanneer je kunt. Nam je een deel van de reserve voor een reparatie? Het doel vraagt je weer het terug te zetten.

Voor een noodfonds, een huisapotheek, een reserve voor autoreparaties.

#### “% inkomen” — een percentage van het inkomen opzijzetten {#goals-percent}

[Blad Doel bewerken: Soort doel % inkomen, Percentage van het inkomen 10%, Van het inkomen van deze maand gekozen, Van het gemiddelde inkomen; inkomen van november 2.800, doel voor de maand 280]

**Hoe het wordt berekend** — het doel van de maand is jouw percentage van het inkomen. De app toont het bedrag meteen in het blad: “Inkomen november 2026: € 2.800,00 · Doel voor de maand: € 280,00”.

**“Van het inkomen van deze maand”** — berekend van geld dat **al binnen is**. Het eerste deel van je loon kwam binnen — één doel; het tweede kwam binnen — het doel groeide. Zolang er in de maand geen inkomen is, is het doel nul en geldt het als gehaald. **Standaard:** deze is gekozen.

**“Van het gemiddelde inkomen”** — het gemiddelde inkomen over de laatste 12 maanden. Het doel is vanaf de 1e bekend en verandert in de maand niet — handig als je aan het eind van de maand betaald wordt.

**Waarvoor** — “10% van alles wat ik verdien opzijzetten” — beleggingen, sparen, giften.

#### “Lijst” — wat je deze maand koopt {#goals-list}

Een doel opgebouwd uit regels: schrijf op waar het geld van de categorie deze maand naartoe gaat — en het doelbedrag telt zichzelf op. Elke maand heeft een eigen lijst.

[Blad Doel bewerken: Soort doel Lijst, Lijst voor november: Verjaardag van mama 100, Taart 40 — vastgelegd 43, Collega 35 — vastgelegd 24 · 2 transacties; Regel toevoegen; Doel voor november 175]

[Categoriescherm Cadeaus en feestdagen: kaart Doel — 175 per maand, uit een lijst; nog 105 toewijzen; regels van de lijst]

[Blad Lijstregel: Collega, Gepland bedrag 35; Vastgelegd 24 van 35, Verlagen naar 24; twee transacties — 20 en 4; Transactie vastleggen; Verwijderen, Opslaan]

**Regels** — kies “Lijst” in “Soort doel”, en de regels van de maand verschijnen meteen in het blad. “⊕ Regel toevoegen” — een naam en een bedrag. Onderaan — “Doel voor november”: het totaal van alle regels. Zolang er geen regels zijn, is “Opslaan” grijs.

**Op het categoriescherm** — de regels staan in de kaart “Doel” onder de balk. Daar werk je ermee: tik op een regel om hem te bewerken, veeg naar links — “Invoeren”, veeg naar rechts — “Verwijderen” (met “Ongedaan maken” in het bericht onderaan).

**“Invoeren”** — opent het gewone transactieformulier: het geplande bedrag (corrigeer het naar het echte), deze categorie, de naam van de regel in de notitie. Na het opslaan staat onder de regel in groen: “✓ vastgelegd € 43,00 · 13 nov”, terwijl het geplande bedrag rechts blijft staan: op de schermafbeelding was de taart gepland op € 40 en gekocht voor € 43.

*Hoe het werkt:*
Een regel kun je opnieuw vastleggen: één aankoop bestaat soms uit meerdere betalingen — banden, daarna montage. Het formulier vult in wat er van het plan over is, en onder de regel staan het totaal van alle boekingen en hun aantal. Zijn blad heeft een link naar elke transactie en “Transactie vastleggen”; de knop “Verlagen naar …” zet het plan op wat je hebt vastgelegd. Een vastgelegde regel kun je niet naar een andere maand verplaatsen.

**Naar een andere maand verplaatsen** — houd een regel ingedrukt om selecteren aan te zetten. Vink de gewenste aan; onderaan — hun totaal en “⋮”: “Verplaatsen naar december”, “Naar een andere maand…”, “Verwijderen”.

**Een nieuwe maand** — de lijst is leeg: “De lijst voor december is leeg” en een knop “Regels van november overnemen · bedrag”: de regels van vorige maand worden gekopieerd (zonder de markeringen “vastgelegd”), en vorige maand verandert niet.

### De kaart “Doel” op het categoriescherm {#goals-card}

Tik op een categorie op “Budget” — [haar scherm](#category) opent. De kaart “Doel” toont het doel voor de maand van het scherm en zegt hoeveel je moet inleggen.

[Categoriescherm Reizen en vakantie: overzicht, kaart Doel — 2.000 sparen tegen maart, Deze maand nog 100 toewijzen, schakelaar Op bedrag / Op datum, Per maand opzijzetten 400, schuifregelaar, Sparen tegen maand Februari 2027, 1 mnd. voor de deadline, Als doeldatum instellen]

**Kop** — de omschrijving van het doel en een potlood om te bewerken. Daaronder — een balk en “Deze maand nog … toewijzen” of “Het doel van de maand is gehaald”.

**Schatting “Op bedrag” / “Op datum”** — bij een doel “Tegen datum”, onder de balk: wat als je meer of minder opzijzet? “Op bedrag”: schuif “Per maand opzijzetten” — “Sparen tegen maand” eronder toont wanneer je er bent, en de regel eronder zegt “… mnd. voor de deadline”, “… mnd. na de deadline” of “Precies op tijd”. “Op datum”: schuif “Sparen tegen maand” — onder de schuifregelaar zie je hoeveel je per maand opzijzet. Een exact bedrag nodig? Tik op “Per maand opzijzetten” en typ het op het toetsenblok.

*Hoe het werkt:*
De schatting bewaart niets: verlaat het scherm, en alles is zoals het was. Bevalt de nieuwe datum? Tik op “Als doeldatum instellen: …”, en het doel neemt hem over.

Op de schermafbeelding: met € 400 per maand is het vakantiegeld in februari klaar — een maand voor de deadline.

**Geen doel** — de kaart heeft één knop, “Doel toevoegen”. Is er een geplande betaling, dan verschijnt ernaast een voorstel “Uit de geplande betaling: …”.

### Toewijzen aan doelen {#goals-allocate}

Je salaris is binnen — verdeel het met één knop over alle doelen. “Budget” → “⋮” → “Toewijzen aan doelen”.

[Venster Toewijzen aan doelen: 230 naar 3 categorieën — Cadeaus en feestdagen +105, Reizen en vakantie +100, Noodpotje +25; blijft niet toegewezen 0,00; Annuleren, Toewijzen]

**Wat het doet** — neemt geld uit “niet toegewezen” en stopt het in de enveloppen waarvan het doel deze maand iets tekortkomt. Eerst toont het het plan — hoeveel naar welke envelop gaat; “Toewijzen” voert het uit, “Annuleren” verandert niets.

**Als het niet voor alles genoeg is** — doelen worden op volgorde gedekt, van boven naar beneden, zoals de categorieën op “Budget” staan, en de laatste krijgt wat er over is. Op de schermafbeelding was € 230 genoeg voor “Cadeaus en feestdagen” en “Reizen en vakantie” in zijn geheel, terwijl “Noodpotje” € 25 van € 1.124,53 kreeg. Zet wat belangrijk is hoger — de volgorde wijzig je op “Budget”: “⋮” → “Volgorde wijzigen”.

**Als er niets toe te wijzen is** — “niet toegewezen” is leeg — de app zegt het. Geen doelen — hij zegt waar je ze instelt. Alle doelen zijn al gehaald — hij toont voor elk hoeveel er opzij staat en hoeveel er nodig is.

**Hetzelfde in automatisch toewijzen** — tik in de kop van “Budget” op “niet toegewezen” — de modus “Te weinig” doet hetzelfde. En de rekenmachine voor het bedrag van een categorie op “Budget” heeft een knop “Tot doel: …” — die vult precies in wat ontbreekt.

### Waar doelen nog meer verschijnen {#goals-elsewhere}

Een doel zie je niet alleen hier.

**“Budget”** — een categorie met een doel heeft onder haar bedrag een vlag: “Bereikt” of “nog …”, en de balk toont het doel in plaats van de uitgaven. De chip “Te weinig” boven de lijst laat alleen de categorieën over waarvan het doel iets tekortkomt. Meer in het artikel [“Budget”](#budget).

**“Overzicht”** — het blok “Doelen” toont hoeveel doelen er zijn, hoeveel gehaald zijn en hoeveel er deze maand nog nodig is. Meer in het artikel [“Overzicht”](#overview).

## Categoriescherm {#category}

Eén envelop in zijn geheel: hoeveel erin zat, hoeveel er opzij werd gezet en uitgegeven, hoeveel er over is en hoeveel dagen het nog meegaat. Ook het doel, een notitie, uitgaven in vorige maanden en alle transacties van de maand.

*“Budget” → tik op een categorie*

### Waarom dit scherm {#category-why}

Op “Budget” heeft een categorie één regel en één getal. Hier staat alles wat erachter zit.

##### Haalt het het eind van de maand

“Beschikbaar” en daaronder “≈ … per dag”: hoeveel je elke dag tot het eind van de maand kunt uitgeven zonder in de min te gaan.

##### Waar het geld heen ging

Alle transacties van deze categorie in de maand, per dag. Tik op een ervan om de kaart te openen.

##### Hoeveel je echt nodig hebt

“Uitgaventrends” toont hoeveel er gewoonlijk per maand uitgaat. Zet je minder opzij, dan eindigt elke maand in de min.

### Hoe je het opent {#category-open}

- **“Budget”** — tik op de regel van een categorie. Het scherm opent op de maand die op “Budget” gekozen is. Dat is met de telefoon rechtop: liggend opent tikken op een tabelregel de rekenmachine voor het bedrag, en op een tablet een paneel rechts ([hieronder](#category-tablet)).
- **“Overzicht”** — tik op een regel in het blok “Overschrijding” of “Raakt op”.
- **“Rapporten”** — tik op een regel van de lijst in “Waar het geld heen ging” of op een tegel in “Afwijking”. Het scherm opent op de maand van het rapport.

### Wat waar staat op het scherm {#category-screen}

Het scherm scrolt: bovenaan het overzicht, dan de kaarten “Doel”, “Notitie” en “Uitgaventrends”, en daaronder de transacties van de maand. Tik op een schermafbeelding om haar schermvullend te openen.

[Categoriescherm Boodschappen: de maand met pijlen; overzicht — Vanaf oktober, Gepland, Uitgegeven, Beschikbaar en ≈ per dag; kaart Doel — 400,00 per maand opzijzetten, Het doel van de maand is gehaald; Notitie; Uitgaventrends; transacties van de maand per dag: HEMA, Jumbo, Albert Heijn; knop Transactie]

1. **Naam** — de naam van de categorie. Hernoem haar in het menu “⋮”.

2. **“⋮”** — verbergen, hernoemen of naar een andere groep verplaatsen, verwijderen. Details — [hieronder](#category-menu).

3. **Maand** — “‹ ›” bladeren door de maanden: verleden en toekomst, zonder grens. Details — [hieronder](#category-months).

4. **“Vanaf …”** — hoeveel er van vorige maand in de envelop over was.

5. **“Gepland voor …”** — hoeveel je deze maand in deze envelop opzijzette. In kleine letters onder het bedrag — welk percentage van het maandinkomen dat is.

6. **“Uitgegeven in …”** — hoeveel er deze maand uit de envelop ging, na terugbetalingen.

7. **“Beschikbaar”** — hoeveel er nu in de envelop zit. Hetzelfde getal als in de regel van de categorie op “Budget”.

8. **“≈ … per dag”** — hoeveel je per dag tot het eind van de maand kunt uitgeven. Alleen in de huidige maand en alleen als “Beschikbaar” boven nul staat.

9. **“Doel”** — het doel van de categorie voor deze maand: hoeveel er nog opzij moet. Meer in het artikel [“Doelen”](#goals-card).

10. **“Notitie”** — je eigen tekst over deze categorie. Details — [hieronder](#category-note).

11. **“Uitgaventrends”** — hoeveel er gemiddeld per maand uitgaat. Details — [hieronder](#category-trends).

12. **Datum** — de transacties van de maand per dag, de nieuwste bovenaan. Details — [hieronder](#category-ops).

13. **Transactie** — een regel zoals in “Boekingen”, alleen zonder de categorie: hier is er maar één.

14. **“+ Transactie”** — een nieuwe transactie met de categorie al gekozen in het formulier.

### Het overzicht: waar de getallen vandaan komen {#category-stats}

De vier regels van het overzicht vormen samen één formule:

**“Vanaf …”** + **“Gepland”** − **“Uitgegeven”** = **“Beschikbaar”**

##### Een plus gaat mee naar de volgende maand, een min niet

Niet alles uitgegeven? De rest blijft in de envelop en verschijnt volgende maand in de regel “Vanaf …”. Meer uitgegeven dan er was? Deze maand is “Beschikbaar” rood. Als de maand omslaat, wordt de min op nul gezet: volgende maand is “Vanaf …” 0.

*Hoe het werkt:*
Waar de op nul gezette min heen gaat, hangt af van hoe je betaalde. Contant of met een betaalpas verkleint hij het “niet toegewezen” van volgende maand. Met een creditcard werd hij kaartschuld. Meer in het artikel [“Budget”](#budget).

##### Percentage van inkomen

Onder “Gepland” — welk percentage van het maandinkomen je in deze envelop opzijzette. Hetzelfde percentage als in het label “Percentage van inkomen” op “Budget”. Geen inkomen in de maand — geen percentage. Het wordt berekend van de regel “Budget van …” van de kaart “Maandbudget” — zonder het restant van vorige maand; waarom het percentage dan te hoog kan lijken — in het artikel [“Budget”](#budget-income-share).

##### “≈ … per dag”

“Beschikbaar” wordt gedeeld door de dagen die nog over zijn tot het eind van de maand, vandaag meegeteld, en naar beneden afgerond — zodat een dag nooit meer krijgt dan er is. Vandaag minder uitgegeven? Morgen groeit het getal.

### Notitie {#category-note}

Schrijf op wat in deze categorie hoort, waarvoor je spaart, wat je afsprak — alles wat over een half jaar helpt. Tik op het veld “Een notitie voor de categorie toevoegen…” en typ: de notitie bewaart zichzelf, er is geen knop. Met een cloud bereikt ze je andere apparaten.

### “Uitgaventrends” {#category-trends}

Hoeveel er gewoonlijk uit deze categorie gaat. Het telt de 12 volle maanden vóór deze; de huidige maand telt niet mee, want die is nog niet voorbij. Uitgaven zijn na terugbetalingen.

[Kaart Uitgaventrends voor de categorie Grote aankopen: Gemiddelde in een actieve maand 480, Gemiddelde maandelijkse uitgaven 96, vorige maand uitgegeven 0]

**“Gemiddelde maandelijkse uitgaven”** — hoeveel er gemiddeld per maand uitgaat, maanden zonder uitgaven meegeteld. Zoveel is het waard om elke maand opzij te zetten, zodat de envelop niet in de min gaat.

**“Gemiddelde in een actieve maand”** — het gemiddelde alleen over maanden met uitgaven. Het verschijnt als er niet elke maand uitgaven waren: op de schermafbeelding heeft “Grote aankopen” € 480 in een maand met een aankoop, en gemiddeld € 96 over alle maanden.

**“Uitgegeven in …”** — hoeveel er vorige maand uitging: vergelijk het met deze.

**Percentages onder de bedragen** — welk percentage van het inkomen dat is: bij de gemiddelden van het gemiddelde inkomen over dezelfde maanden; bij vorige maand van haar inkomen.

### De transacties van de maand {#category-ops}

Alle transacties van deze categorie in de maand van het scherm, per dag: de nieuwste bovenaan. Van een gesplitst bedrag staat alleen het deel met deze categorie — op de schermafbeelding “HEMA”.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik op een regel | De transactiekaart — dezelfde als in “Boekingen”. Meer in het artikel [“Boekingen”](#transactions-detail). |
| Tik op het rondje rechts | De markering “Verwerkt”, zoals in “Boekingen”. |
| Veeg naar links | “Bewerken” — het transactieformulier. |
| Veeg naar rechts | “Verwijderen” — na een bevestiging. Onderaan verschijnt “Ongedaan maken”. |

De volgorde van transacties binnen een dag en het dagtotaal naast de datum stel je in bij “Boekingen”: “⋮” → “Sorteren” en “Dagtotaal”. Hier zijn ze hetzelfde.

### Een andere maand {#category-months}

“‹” en “›” boven het overzicht bladeren door de maanden. Verlaat je de huidige maand, dan verschijnt linksonder “Vandaag”: tik erop om terug te gaan naar de huidige maand.

[Hetzelfde scherm voor vorige maand: overzicht zonder de regel ≈ per dag, een knop Vandaag linksonder]

In een voorbije maand zie je hoeveel er toen was en hoeveel er werd uitgegeven. Daar staat geen regel “≈ … per dag”: de maand is voorbij. In een toekomstige maand zie je hoeveel er al vooruit opzijstaat.

### Het menu “⋮” {#category-menu}

[Menu: Categorie verbergen, Categorie bewerken, Tips, Kennisbank, Categorie verwijderen]

(A)
##### “Categorie verbergen”

De categorie verdwijnt van “Budget” en uit de categorielijst in het transactieformulier. Het geld en de transacties blijven, en ze telt mee in de berekeningen zoals voorheen. Terughalen — hier: het item wordt “Categorie tonen”. Of “Budget” → “⋮” → “Verborgen categorieën”.

(B)
##### “Categorie bewerken”

Een blad met de naam en een veld “Groep”. Details — [hieronder](#category-edit).

(C)
##### “Tips”

De tips van dit scherm — ook die je al hebt gesloten.

(D)
##### “Kennisbank”

Dit artikel op de website: het opent in de browser, in de taal van de app.

(E)
##### “Categorie verwijderen”

Alleen als de categorie helemaal geen transacties heeft. Dan verdwijnt ze na de vraag “Categorie verwijderen?”, haar doel ook, en alles wat erin opzij stond, gaat terug naar “niet toegewezen”.

*Hoe het werkt:*
Zijn er transacties, dan zegt de app “Verwijderen kan niet — er zijn transacties” en biedt “Verbergen” aan. Een verwijderde categorie zou uit de geschiedenis verdwijnen, en haar transacties zouden zonder envelop achterblijven.

#### Hernoemen en naar een andere groep verplaatsen {#category-edit}

[Blad Categorie bewerken: Naam Boodschappen, Groep Dagelijkse uitgaven, knoppen Verwijderen en Opslaan]

[Blad Groep: Vaste lasten, Dagelijkse uitgaven, Incidentele uitgaven, Sparen]

(E)
##### “Naam”

De nieuwe naam van de categorie. De transacties, het doel en het geld blijven bij haar.

(F)
##### “Groep”

Tik erop om de lijst met groepen te openen. Kies een andere en tik op “Opslaan”: de categorie verhuist naar het eind van die groep, samen met haar geld en geschiedenis.

*Hoe het werkt:*
Categorieën in de groep “Kaartbetalingen” hebben dit veld niet: hun groep beheert de app.

(G)
##### “Verwijderen”

Hetzelfde als “Categorie verwijderen” in het menu.

##### Hoe je een categorie naar een andere groep verplaatst

1. Open de categorie: “Budget” → tik op haar regel.
2. “⋮” → “Categorie bewerken”.
3. Tik op het veld “Groep” en kies een groep.
4. “Opslaan”.

Hetzelfde kan meteen op “Budget”: veeg de regel van de categorie naar links → “Bewerken”.

### Op een tablet {#category-tablet}

Op een tablet in liggende stand brengt tikken op een regel van “Budget” je niet weg van de tabel: het overzicht, het doel, de notitie, de trends en de transacties van de categorie verschijnen rechts. De maand daar is dezelfde als die van de tabel; eigen pijlen heeft hij niet.

Het paneel heeft geen menu “⋮”. Om een categorie te verbergen, hernoemen of verwijderen, gebruik je haar scherm: zet de tablet rechtop en tik op de regel, of open de categorie vanuit “Overzicht” of vanuit “Rapporten”.

## Boekingen {#transactions}

De hele geschiedenis van je geld in één stroom. Elke aankoop, elk salaris, elk “wat van de betaalrekening naar de spaarrekening gezet”.

*Het tabblad “Boekingen” onderaan het scherm*

### Waarom dit scherm {#transactions-why}

Het scherm “Budget” beantwoordt de vraag “hoeveel kan ik nog uitgeven”. “Boekingen” beantwoordt “waar is het dan eigenlijk heen gegaan”. Het is je dagboek: alles wat je vastlegde staat hier per dag, de meest recente dag bovenaan.

##### Vinden

“Hoeveel kostte dat diner in maart?” — een paar letters in de zoekbalk, en daar is het.

##### Corrigeren

Verkeerde categorie, een nul te veel, een dubbele boeking — veeg de regel en corrigeer.

##### Afstemmen met de bank

Markeer wat al van de pas is afgeschreven — en je ziet meteen wat de bank nog niet heeft verwerkt.

### Wat waar staat op het scherm {#transactions-screen}

Tik op een schermafbeelding om haar schermvullend te openen.

[Scherm “Boekingen”: zoeken, menu, chips voor het soort transactie, de stroom transacties per dag en de knop voor toevoegen]

1. **Zoeken** — vindt alles met een paar letters, een bedrag of datums.

   *Hoe het werkt:*
   Typ “alb” — in de stroom blijven alleen je boodschappen bij Albert Heijn over. Er wordt overal gezocht: begunstigde, categorie, notitie en bedrag. “47,55” vindt dat bedrag, “melk” vindt de notitie “Melk, eieren, brood”.

   De zoekbalk begrijpt datums zoals jij ze schrijft:

   - **15-8-2026** — één dag;
   - **15-8** — die dag in elk jaar: “wat kocht ik op vorige verjaardagen?”;
   - **8-2026** — heel augustus;
   - **2-8-26 – 10-8-26** — van en tot, beide dagen inbegrepen. Werkt ook met maanden: **6-2026 – 8-2026** — de hele zomer.

   Tussen “van” en “tot” volstaat een streepje, een gedachtestreepje of een spatie — de app zoekt zelf uit waar de grens ligt. Een los getal, zoals “8”, wordt niet als datum gelezen: anders zou zoeken naar € 8 verdrinken in heel augustus.

   Een hekje zet zoeken op tags aan: “#vak” — alles met de tag “vakantie”, “#vak café” — alleen cafés tijdens de vakantie. Twee tags gescheiden door een spatie — transacties die ze allebei hebben.

2. **Begunstigden en tags** — aan wie je het vaakst betaalt en hoeveel.

   *Hoe het werkt:*
   Een apart scherm met twee tabbladen. “Begunstigden” — iedereen aan wie je betaalde en die jou betaalde, met een totaal voor dit jaar (de periode wijzig je in het menu “⋮”). Hier ontdek je vaak dat de “kleine” boodschappen bij de buurtsuper over een jaar opliepen tot een vakantie.

   “Tags” — je labels over categorieën heen: “vakantie”, “verbouwing”, “cadeau voor mama”. Tik op een begunstigde of een tag om de geschiedenis te openen. [Het artikel “Begunstigden en tags”](#payees-tags)

3. **Het menu “⋮”** — alles wat de weergave van de stroom verandert. Elk item wordt [hieronder](#transactions-menu) uitgelegd.

4. **Soort transactie** — alleen uitgaven, alleen inkomsten, met één tik.

   *Hoe het werkt:*
   Wil je alleen binnenkomend geld zien? Tik op “Inkomsten”. “Overboekingen” zijn momenten waarop geld gewoon tussen je eigen rekeningen verschoof: van de betaalrekening naar de spaarrekening, om een creditcard af te lossen. “Notities” zijn boekingen zonder bedrag, herinneringen voor jezelf.

   Tik nog eens op dezelfde chip, en de hele stroom komt terug.

5. **Datum** — spring naar elke dag.

   *Hoe het werkt:*
   Een half jaar terug scrollen met je vinger is niet ieders smaak. Tik op de datumchip, kies een dag in de kalender — en de stroom staat er al. Terug naar vandaag gaat met de knop “Vandaag” linksonder.

6. **Vlag** — een gekleurde bladwijzer voor jezelf.

   *Hoe het werkt:*
   Een vlag rekent niets uit — het is gewoon een bladwijzer. Rood — “controleren of het niet twee keer is afgeschreven”, groen — “een vriend beloofde terug te betalen”. De kleuren en hun betekenis bedenk je zelf.

   Een vlag zet je in het transactieformulier, of op een tiental regels tegelijk via selecteren. Een grijze omtrek betekent “geen vlag”. De vorm van de vlag — een stip, een driehoek of een golvende vlag — staat in “Instellingen → Weergave”.

7. **Categorie** — uit welke envelop het geld ging.

   *Hoe het werkt:*
   Een categorie is een envelop op het scherm “Budget”. Een aankoop bij Albert Heijn met de categorie “Boodschappen” maakt de boodschappenenvelop kleiner: zo weet het budget hoeveel je nog voor eten hebt.

   Stond er op de bon zowel eten als schoonmaakmiddel? Je kunt het bedrag splitsen: elk deel gaat naar zijn eigen envelop, en de regel toont een chip voor elk deel. En bij een salaris staat er in plaats van een categorie “Beschikbaar deze maand”: het geld kwam binnen en wacht tot je het over enveloppen verdeelt.

8. **Rekening** — waar het afgeschreven werd of waar het binnenkwam.

   *Hoe het werkt:*
   Betaalrekening, contant, creditcard — elke rekening heeft een eigen pictogram en kleur, zodat je haar zonder lezen herkent. Een overboeking heeft twee regels, één voor elke rekening: op de ene ging het geld eraf, op de andere kwam het binnen. Daarom staat in de titel van een overboeking geen winkel maar de andere rekening: “Visa” op de betaalrekening, “Betaalrekening” op de Visa.

9. **Verwerkt** — of het klopt met het afschrift. Optioneel.

   *Hoe het werkt:*
   Je legde een aankoop meteen bij de kassa vast, en de bank verwerkte haar een dag of twee later. Het rondje voorkomt verwarring: leeg — de bank heeft deze transactie nog niet, een vinkje — wel. Zag je de aankoop in de app van je bank? Tik op het rondje.

   Eén keer per maand kun je de hele rekening afstemmen. Dan worden de vinkjes slotjes: “afgestemd, daar kom ik niet meer aan”.

   **De markering is optioneel:** ze heeft geen invloed op het budget, ze helpt alleen de rekening af te stemmen met de bank. Gebruikte je haar nooit, sla haar dan gewoon over — lege rondjes zijn prima.

10. **Nieuwe uitgave** — drie knoppen rechtsonder.

    *Hoe het werkt:*
    “+ Transactie” opent een leeg formulier — bedrag, categorie en rekening vul je zelf in.

    Erboven staan twee ronde knoppen zodat je niet hoeft te typen. De paarse is de camera: richt haar op de QR-code van de bon, en de app vult bedrag en datum zelf in (als hij de bonnen van jouw land kent). De groene is de microfoon: zeg “Albert Heijn 70 Boodschappen van rekening Betaalrekening”, en de app vult bedrag, begunstigde, categorie en rekening in als hij ze tussen de jouwe herkent. In beide gevallen opent hetzelfde formulier — controleer en sla op. [Het artikel “Transactieformulier”](#entry)

11. **Camera- en QR-pictogrammen** — aan de transactie zijn een bonfoto en een e-bon gekoppeld. [Wat het is](#transactions-badges)

12. **Pdf-pictogram** — aan de transactie is een bestand gekoppeld: een rekening, een factuur, een bon van een webwinkel. [Wat het is](#transactions-badges)

13. **Vorkpictogram** — het bedrag is in delen over verschillende categorieën gesplitst. [Wat het is](#transactions-badges)

14. **Hekjes — tags** — je labels voor “waarvoor”; een transactie kan er meerdere hebben. [Wat het is](#transactions-tags)

### Het scherm heeft twee weergaven {#transactions-two-views}

Maak je geen zorgen als je scherm er niet uitziet zoals de afbeelding hierboven. De knoppen rechtsonder vouwen in zodat ze je transacties niet bedekken.

[Knoppen uitgeklapt: “+ Transactie”, de camera en de microfoon erboven]
**Scherm net geopend.** Drie knoppen: “+ Transactie”, camera en microfoon.

[Knoppen ingeklapt: alleen de “+” is over]
**De stroom naar beneden gescrold.** Alleen de “+” is over — die doet hetzelfde.

Om camera en microfoon terug te halen, scroll je de stroom een stukje omhoog — de knoppen klappen weer uit.

In beide weergaven kun je op “+” tikken: het opent altijd het formulier voor een nieuwe transactie.

### Pictogrammen en tags in een regel {#transactions-badges}

Kleine pictogrammen naast een transactie zeggen dat er iets extra's bij hoort: een gekoppelde bon, een bestand of meerdere categorieën. Zelf doen ze niets — om te zien wat er gekoppeld is, tik je op de regel.

#### Camera — een bonfoto

Een foto van een papieren bon, een prijskaartje of iets anders dat je bij de aankoop wilt bewaren.

**Overdrijf het niet.** Koppel foto's aan wat je echt nodig zult hebben, niet aan elk brood. [Waarom](#transactions-attach-weight)

*Hoe je haar toevoegt en waarom:*
Het transactieformulier heeft een veld “Foto's en pdf's”. Tik op “Toevoegen” en kies “Foto maken” of “Kiezen uit de galerij”. Je kunt meerdere foto's koppelen.

Het komt van pas als je een maand later iets onder garantie moet terugbrengen of wilt weten wat er in die aankoop van € 47,55 zat. De foto staat op de telefoon; wil je haar ook op je andere apparaten zien, zet dan “Foto's synchroniseren” aan in de synchronisatie-instellingen.

#### QR-vierkantje — een e-bon

De code of link naar de bon die de kassa uitgaf.

*Hoe je hem toevoegt en waarom:*
Op veel bonnen staat onderaan een QR-code — daarmee vind je de bon terug in het systeem van de winkel of de belastingdienst. Het transactieformulier heeft een veld “E-bon (URL of code)”: plak de link daar, of tik op het scannerpictogram en richt de camera op de QR-code.

Kent de app de bonnen van jouw land, dan vergelijkt hij de bon ook met het formulier: hij vult het bedrag in als je dat nog niet typte, en als de bedragen verschillen, zegt hij het en biedt aan het te corrigeren. De scanner verandert de datum in het formulier niet. Een bon uit een onbekend land wordt gewoon bewaard zoals hij is — en komt toch van pas: in de transactiekaart kun je de code kopiëren en de link openen.

#### “PDF”-blad — een gekoppeld bestand

Een rekening, een energierekening, een bon van een webwinkel — alles wat als bestand binnenkomt.

**Overdrijf het niet.** Een pdf wordt bij het toevoegen niet gecomprimeerd — het bestand wordt bewaard zoals het is. [Waarom](#transactions-attach-weight)

*Hoe je het toevoegt en waarom:*
Hetzelfde veld “Foto's en pdf's” in het formulier: “Toevoegen” → “Pdf kiezen”. Het bestand staat naast de transactie — nooit meer de rekening zoeken in je e-mail of in “Downloads”.

Tik op een gekoppelde pdf — onderaan verschijnen “Openen” (in een pdf-app) en “Opslaan als bestand” (een kopie in een map naar keuze).

#### Elke foto heeft gewicht {#transactions-h-weight}

De database zelf wordt niet dik van foto's: ze bewaart alleen een link naar het bestand. Maar het bestand staat op de telefoon en, belangrijker, gaat volledig mee in **elke back-up**. Standaard worden tot 19 back-ups bewaard — 7 frequente en 12 maandelijkse, op de telefoon en in de cloud.

Zo kan één bonfoto van 300 kB in back-ups bijna 6 MB innemen, en honderd van zulke foto's meer dan een halve gigabyte. Staat “Foto's synchroniseren” aan, dan reist elke foto ook naar de cloud en naar je andere apparaten. Hetzelfde geldt voor pdf's, alleen worden die bij het toevoegen helemaal niet gecomprimeerd.

**De regel is eenvoudig:** koppel wat je nodig zult hebben — een garantiebewijs, de bon van een dure aankoop, een rekening voor je administratie. Brood en melk kunnen zonder foto. En een e-bon (QR) weegt evenveel als een regel tekst — die kun je bij elke aankoop bewaren.

#### Vork — het bedrag is in delen gesplitst

Eén aankoop — meerdere categorieën. In het formulier is het “Bedrag splitsen” in de categorielijst; in de transactiekaart staan de delen onder het kopje “SPLITSING”.

*Hoe het werkt:*
Bij “HEMA” op de schermafbeelding betaalde je € 86 in één keer, maar je kocht zowel eten als schoonmaakmiddel. Zou je alles in “Boodschappen” vastleggen, dan zou de boodschappenenvelop € 25 te veel krimpen, terwijl “Huishoudelijke artikelen” onaangeroerd bleef — en het budget zou gaan liegen.

Daarom wordt het bedrag gesplitst: € 61 naar “Boodschappen”, € 25 naar “Huishoudelijke artikelen”. In de stroom heeft zo'n transactie een chip voor elk deel, en haar kaart een onderdeel “SPLITSING”. Het bedrag splits je in het transactieformulier bij het kiezen van de categorie.

##### Geld pinnen aan de kassa is ook een splitsing

Je betaalt in de winkel € 100 met je pas en vraagt de kassière om € 30 contant. De bank toont één afschrijving van € 100, maar eigenlijk gebeurden er twee dingen: € 70 ging naar boodschappen, en € 30 verhuisde gewoon van je pas naar je portemonnee.

1. Leg een transactie van € 100 vast vanaf de rekening “Betaalrekening” en splits het bedrag.
2. Het eerste deel — € 70, categorie “Boodschappen”.
3. Het tweede deel — € 30: scroll in de categoriekiezer naar het onderdeel “Overboekingen” en kies “Overboeking: Contant”.

De stroom toont een chip “Overboeking: Contant”, de rekening “Contant” stijgt met € 30, en de boodschappenenvelop krimpt met precies € 70. Leg je alles vast in “Boodschappen”, dan denkt het budget dat je € 30 meer at, terwijl je portemonnee minder toont dan er echt in zit.

#### Een rij hekjes — tags

Je labels bovenop categorieën: “#huisje”, “#samsam”, “#vakantie”. Een transactie kan er zoveel hebben als je wilt.

*Hoe het werkt:*
Een categorie beantwoordt “waaraan gaf ik het uit”, en een tag “waarvoor”. Melk en brood bij “Albert Heijn” zijn “Boodschappen”, maar ze werden gekocht voor het huisje. Tag ze “#huisje” — en later zie je in één oogopslag wat de zomer in het huisje kostte, ook al ging het geld naar boodschappen, benzine en bouwmaterialen.

“Jumbo” op de schermafbeelding heeft twee tags tegelijk: boodschappen voor het huisje, en samsam betaald met een vriend. Een transactie kan zoveel tags hebben als je wilt.

##### Hoe je een tag toevoegt

1. Tik in het transactieformulier, onder de notitie, op het veld “Tags”.
2. Er opent een lijst, met recente tags bovenaan. Vink aan wat je nodig hebt.
3. Bestaat de tag nog niet? Typ de naam in de regel “Tag zoeken of aanmaken” en tik op “Tag “…” aanmaken”.
4. Tik op “Klaar”.

##### Waar je later kijkt

- **Hoeveel er onder een tag werd uitgegeven** — het pictogram “Begunstigden en tags” in de kop (uitleg 2), het tabblad “Tags”. Tik op een tag om zijn scherm te openen: hoeveel er over alle tijd uitging, per categorie en per maand, en alle transacties.
- **Transacties vinden** — typ “#” en het begin van de tag in de zoekbalk: “#huis” toont alles voor het huisje.
- **Wie is wie wat schuldig** — zet bij een tag als “#samsam” “Verrekening” aan in het menu “⋮” op zijn scherm. De app toont hoeveel er nog te innen of terug te geven is om quitte te spelen.

De tag in de regel is niet aantikbaar — het is een label, geen knop.

Er zijn ook: **twee pijlen** — een overboeking tussen je rekeningen; **een kalendertje met een pijl** — een transactie ingevoerd vanuit een geplande betaling; **een plakbriefje** — een notitie: een boeking zonder bedrag, een herinnering voor jezelf.

### Het menu “⋮” {#transactions-menu}

Alles hier gaat over hoe de stroom getoond wordt. Geen enkel item wijzigt of verwijdert je boekingen — probeer ze gerust.

[Het geopende menu “⋮”: Transacties selecteren, Filter, Sorteren, Dagtotaal, Tips, Kennisbank]

(A)
#### Transacties selecteren

Eén handeling op een tiental regels tegelijk.

*Hoe het werkt:*
Moet je een tiental aankopen een rode vlag geven om ze met het afschrift te vergelijken? Je hoeft ze niet stuk voor stuk te openen. Zet selecteren aan en vink de regels aan — onderaan verschijnt hun totaal (handig om bonnen op te tellen). Tik op de “⋮” naast het totaal: je kunt ze allemaal tegelijk een categorie, een vlag of de markering “verwerkt” geven, ze herhalen met de datum van vandaag, ze naar een andere rekening verplaatsen of ze verwijderen. Het laatste item, “Selectie opheffen”, verlaat de selectie zonder iets te veranderen.

De snelkoppeling: houd een regel ingedrukt.

(B)
#### Filter

Houd alleen over wat je nodig hebt in de stroom.

*Hoe het werkt:*
Bijvoorbeeld: “cafébezoek vorige maand, alleen met de pas”. Je kunt filteren op soort, periode, categorie, begunstigde, rekening, bedrag en tag. Filters stapelen — elk volgend filter maakt de stroom smaller.

Zolang een filter aanstaat, brandt er een getal op de “⋮” — een herinnering dat de stroom nu niet compleet is. Anders denk je al snel dat er transacties verdwenen zijn.

**Direct na het installeren:** geen filters. **Gaat vanzelf terug:** als je van budget wisselt — een ander budget heeft eigen categorieën en rekeningen. **Zie ook:** [het rapportfilter](#reports).

(C)
#### Sorteren

Hoe transacties binnen één dag gerangschikt worden.

*Hoe het werkt:*
Dagen staan altijd zoals in een kalender — de laatste bovenaan, en dat kun je niet veranderen. Maar binnen een dag kies je je eigen volgorde: grote uitgaven bovenaan (“Aflopend”), kleine dingen bovenaan (“Oplopend”), of eerst de inkomsten. De gekozen volgorde staat meteen in het menu-item — zodat je je een week later niet afvraagt waarom een dag er “door elkaar geschud” uitziet.

**Direct na het installeren:** in de volgorde van invoeren. **Werkt ook:** op het rekeningscherm, in de transacties van een categorie en bij een begunstigde.

(D)
#### Dagtotaal

Hoeveel er op een dag uitging — meteen naast de datum.

*Hoe het werkt:*
Zet “Alleen uitgaven” aan — en rechts van elke datum zie je hoeveel je die dag uitgaf. Een uitstekende manier om de “dure” dagen te vangen: een zaterdag met markt en bioscoop springt er meteen uit.

“Uitgaven en inkomsten” toont het verschil als één getal met teken: “−100” — de dag ging in de min, “+1.400” — er kwam salaris binnen. Overboekingen tussen je eigen rekeningen en startsaldi tellen niet mee: dat zijn geen uitgaven, het geld verschoof alleen.

**Direct na het installeren:** niet getoond. **Werkt ook:** op het rekeningscherm en in de transacties van een categorie.

(E)
#### Tips

Alle tips van dit scherm op één plek.

*Hoe het werkt:*
In de app verschijnen tips één tegelijk — als ze van pas komen, om je niet met alles tegelijk te bedelven. Hier zijn ze allemaal verzameld, ook die je nog niet tegenkwam.

(F)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

### Wat je met een regel kunt doen {#transactions-gestures}

In de regel staan geen knoppen “bewerken” en “verwijderen” — zodat ze het lezen niet in de weg zitten. Tik in plaats daarvan op de regel of veeg hem met je vinger opzij.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik | De transactiekaart opent: alles erover, bonfoto's, bewerken. [Wat erin staat](#transactions-detail) |
| Veeg naar links | “Bewerken” — meteen naar het formulier. |
| Veeg naar rechts | “Verwijderen”. Bedacht? “Ongedaan maken” blijft een paar seconden onderaan staan. |
| Houd ingedrukt | Selecteren van meerdere regels gaat aan — zoals het item [“Transacties selecteren”](#transactions-select). |

#### Je tikte op een transactie — wat staat erin {#transactions-detail}

De transactiekaart schuift van onderen omhoog: alles wat je erover vastlegde, op één blad. Er verandert niets tot je op “Bewerken” tikt — je kunt rustig kijken.

[Transactiekaart “Albert Heijn”: bedrag, begunstigde, categorie, rekening, datum, e-bon, notitie, tag “huisje”, bonfoto, knoppen “Herhalen”, “Bewerken”, “Geplande betaling aanmaken”]
**Een aankoop met een bon en een foto.**

[Gesplitste kaart “HEMA”: delen van de splitsing — Boodschappen € 61 en Huishoudelijke artikelen € 25]
**Een gesplitst bedrag.** Onderaan — de delen van de splitsing.

- **Groot bovenaan** — het bedrag met teken: min is een uitgave, plus is inkomen.
- **Begunstigde, categorie, rekening, datum** — wat je in het formulier vastlegde.
- **Bon** — de e-bon. “Kopiëren” zet de code op het klembord zodat je hem kunt plakken waar je wilt. Is het een link, dan is er ook “Openen” — de bon opent in de browser.
- **Tags** — de labels van de transactie als chips, zoals in de stroom: “#huisje”.
- **Foto's** — miniaturen van de gekoppelde afbeeldingen en pdf's. Tik op een afbeelding om haar schermvullend te openen.
- **Delen van de splitsing** — bij een gesplitst bedrag: elk deel met zijn eigen categorie, notitie en bedrag.

##### Knoppen onderaan

- **“Bewerken”** — open deze transactie in het formulier en wijzig wat je wilt.
- **“Herhalen”** — een nieuwe transactie met dezelfde begunstigde, categorie en hetzelfde bedrag. Handig voor wat je vaak koopt: koffie, ov, lunch.
- **“Geplande betaling aanmaken”** — maak van deze transactie een vaste betaling: huur, een abonnement, een lening. Je hoeft alleen nog te kiezen hoe vaak ze terugkomt.

Een gesplitst bedrag en een overboeking hebben alleen “Bewerken”: de app herhaalt ze niet half.

## Rapporten {#reports}

Tien rapporten: waar je geld heen gaat, hoe uitgaven veranderen, waar het inkomen vandaan komt en of je vermogen groeit.

*Het tabblad “Rapporten” onderaan het scherm*

### Hoe het tabblad werkt {#reports-how}

Eén rapport tegelijk op het scherm. Bovenaan staat welk rapport en voor welke periode, daaronder het rapport zelf. De app onthoudt rapport en periode: open “Uitgaventrend” over zes maanden, en de volgende keer opent precies dat.

[Rapport Waar het geld heen ging voor september — november: ring, totaal 5.893, lijst met categorieën]

1. **Naam van het rapport** — tik erop om de lijst met alle rapporten te openen (schermafbeelding hieronder).

2. **Filters** — de trechter: periode, categorieën, rekeningen, tags. Het getal erop is hoeveel filters er aanstaan.

   *Hoe het werkt:*
   Zet de categorie “Huur” uit — ze verdwijnt uit de uitgavenrapporten, en het beeld van je dagelijkse uitgaven wordt helderder. Filters worden per budget onthouden.

3. **Periode** — de pijlen “‹ ›” schuiven het venster een maand terug of vooruit, en tikken op het opschrift opent de periodekiezer: een maand, 3, 6, 12 maanden, het lopende jaar of een eigen bereik.

   *Hoe het werkt:*
   Weg van de huidige maand? Ernaast verschijnt “Vandaag”, om terug te gaan. Elk rapport heeft een eigen periode: uitgaven bekijk je handig per maand, de trend per jaar.

4. **Weergave** — sommige rapporten hebben meerdere weergaven: ring, bellen, tegels, tabel of grafiek. De keuze wordt per rapport onthouden.

5. **Lijst** — dezelfde getallen als regels: kleur, naam, bedrag, percentage. Tik op een regel om het scherm van de categorie of begunstigde te openen.

[Blad voor het kiezen van een rapport: onderdelen Uitgaven, Geldverkeer, Vermogen]
**Een rapport kiezen.** Drie onderdelen — naar de vraag die het rapport beantwoordt.

[Blad met rapportfilters: Periode, Categorieën, Rekeningen, Tags]
**Rapportfilters.** Elk onderdeel klapt uit.

### Uitgaven {#reports-spending}

Waar het geld heen gaat en hoe dat verandert.

#### Waar het geld heen ging {#reports-r-spending}

Uitgaven in de periode per categorie — het hoofdrapport voor “waar is het allemaal gebleven”. Drie weergaven van hetzelfde: kies wat jou het duidelijkst is.

[Bellen: Huur 3.600, 61%, Boodschappen 886,98, 15%]
**Bellen.** De oppervlakte van een bel is het bedrag.

[Tegels: Huur, Boodschappen, Grote aankopen]
**Tegels.** De oppervlakte van een tegel is het bedrag.

(•)
#### Ring, bellen, tegels

Wissel ertussen met de pictogrammen rechts boven de afbeelding. De ring is vertrouwd; bellen en tegels tonen kleine categorieën beter naast grote.

(•)
#### Tikken

Tik op een stuk van de ring, een bel of een tegel — die wordt gemarkeerd, en zijn regel licht op in de lijst. Een tweede tik opent het scherm van die categorie.

(•)
#### Wat er geteld wordt

Uitgaven min terugbetalingen, zonder overboekingen tussen je eigen rekeningen. Op de schermafbeelding ging er in drie maanden € 5.893 uit, waarvan 61% aan huur.

*Hoe het werkt:*
Wil je de dagelijkse uitgaven zien zonder huur en nutsvoorzieningen? Haal ze weg in het filter “Categorieën”.

#### Uitgaventrend {#reports-r-trend}

Stijgen of dalen je uitgaven — per maand, met het gemiddelde en een trendlijn.

[Uitgaventrend juni — november: staven per maand, verloop, trend- en gemiddeldelijnen, Totaal voor de periode 11.590,28]

(•)
#### Bovenaan

De gemiddelde uitgaven per maand en waar ze heen gaan: “stijgend ≈ € 38,20/mnd” of “dalend”.

(•)
#### De grafiek

Staven zijn de uitgaven van elke maand. De lijn met punten is het verloop, de rechte lijn de trend, de stippellijn het gemiddelde. De huidige maand is vaag: ze is nog niet voorbij, dus telt ze niet mee voor het gemiddelde en de trend.

(•)
#### De tabel “Per maand”

Elke maand en hoe ver ze van het gemiddelde af ligt — in euro's en procenten. Tik op een maand in de grafiek, en het exacte bedrag verschijnt erboven.

#### Voorbeeld: worden de nutsvoorzieningen duurder {#reports-r-trend-example}

De algemene trend vertelt het je niet: daarin zitten alle uitgaven samen, en groei in één categorie gaat verloren in de rest. Laat maar één categorie in het rapport.

[Rapportfilters: Categorieën 1 van 18, Alles deselecteren, alleen Nutsvoorzieningen aangevinkt]
**Het filter.** Er blijft één categorie in het rapport.

[Uitgaventrend alleen voor nutsvoorzieningen: € 97,27/mnd, dalend ≈ € 3,87/mnd, oktober −20% t.o.v. gemiddelde]
**Het resultaat.** De trend van alleen de nutsvoorzieningen.

6. **“Categorieën”** — tik in “Uitgaventrend” rechtsboven op de trechter, dan op “Categorieën”: een lijst met alle categorieën met vinkjes opent.

7. **“Alles deselecteren”** — haalt alle vinkjes in één keer weg, in plaats van één voor één.

8. **De categorie die je nodig hebt** — vink “Nutsvoorzieningen” aan. Onder “Categorieën” staat nu “1 van 18”. Sluit het blad: veeg het omlaag of tik ernaast.

9. **Het getal op de trechter** — hoeveel filters er aanstaan. Zolang het brandt, toont het rapport niet alle uitgaven.

Nu gaat het rapport alleen over nutsvoorzieningen: gemiddeld € 97,27 per maand, de rekeningen dalen met ongeveer € 3,87 per maand, en oktober was 20% goedkoper dan gemiddeld. Het filter wordt voor dit rapport onthouden: de volgende keer opent “Uitgaventrend” ermee. Alle categorieën terughalen — “Alles selecteren” of “Wissen” in het filterblad.

#### Belangrijkste begunstigden {#reports-r-payees}

Hetzelfde als “Waar het geld heen ging”, maar per begunstigde: aan wie je het meest betaalt.

[Belangrijkste begunstigden: ring, Verhuurder 3.600, Albert Heijn, IKEA, Jumbo]

(•)
#### Dezelfde drie weergaven

Ring, bellen of tegels — dit rapport houdt een eigen keuze bij.

(•)
#### Tikken

Een regel of een stuk opent het scherm van de begunstigde: alle uitgaven met hem, per categorie en per maand (artikel [“Begunstigden en tags”](#payees-tags)).

#### Afwijking {#reports-r-deviation}

Waar je deze maand meer of minder uitgeeft dan gewoonlijk — in één oogopslag. Vergeleken wordt met je 12 maanden vóór de periode: de lopende maand met dezelfde dagen van voorbije maanden, van de 1e tot vandaag, en een periode van meerdere maanden met een gewone maand maal hun aantal.

[Afwijking voor november: tegels per categorie, de kleur toont meer of minder dan gewoonlijk, samenvatting: Vervoer +8,71]

(•)
#### Tegels

De grootte van een tegel is hoeveel er werd uitgegeven, de kleur hoeveel meer (roodachtig) of minder (groenachtig) dan gewoonlijk, in drie stappen. Grijze zijn zoals gewoonlijk, binnen 10%. Een omlijning zonder vulling betekent dat de categorie voor het eerst verscheen.

(•)
#### “Gewoonlijk”

Het midden van je voorbije maanden over het jaar: één ongewoon dure maand verschuift het niet. Voor de huidige maand — “gewoonlijk tot deze datum”: 10 november wordt vergeleken met dezelfde dagen van voorbije maanden.

(•)
#### De samenvatting in woorden

Onder de tegels — “Meer dan gewoonlijk”, “Minder”, “Nieuw” met bedragen. “Categorieën” of “Begunstigden” — chips bovenaan.

#### Tags {#reports-r-tags}

Hoeveel er onder elke tag ging — per maand, als tabel of grafiek.

[Rapport Tags: tabel per maand — huisje, Samen, Alle uitgaven; onderdeel Verrekeningen — samsam, nog te innen 43]

[Rapport Tags als grafiek: In de grafiek 1 van 4, De grootste in de periode]

(•)
#### De tabel

Een regel per tag, een kolom per maand. “Samen” is alle tags tegelijk: een transactie met twee tags telt daarin één keer. “Alle uitgaven” staat er ter vergelijking.

(•)
#### “Verrekeningen”

Tags met “Verrekening” aan, als apart blok: hoeveel er nog te innen of terug te geven is.

(•)
#### De grafiek

Tot vier tags als lijnen per maand; welke — kies je boven de grafiek.

### Geldverkeer {#reports-flow}

Waar het geld vandaan kwam, waar het heen ging, en hoeveel er over is.

#### Geldstroom {#reports-r-flow}

De hele reis van het geld in één afbeelding: van inkomstenbronnen — naar het budget — per groep — per categorie.

[Geldstroom: Werkgever → Budget; bovenaan Inkomsten 8.400, Uitgave 5.893, Netto +2.507, Gespaard 30%]
**Links** — waar het geld vandaan kwam.

[Geldstroom, het rechterdeel: uitgavengroepen → categorieën, Rest]
**Veeg opzij** — groepen en categorieën.

(•)
#### Bovenaan

Inkomsten, uitgaven, “netto” (hoeveel er over is) en de spaarquote — welk percentage van het inkomen niet werd uitgegeven.

(•)
#### Linten

De dikte van een lint is het bedrag. Tik op een lint om bedrag en percentage te zien. De groene band “Rest” is geld dat nergens heen ging.

(•)
#### Hoe je kijkt

De afbeelding is breder dan het scherm: veeg opzij en omlaag. De kop met de totalen schuift mee met de afbeelding.

#### Inkomsten en uitgaven {#reports-r-ie}

Een boekhouding per maand: hoeveel er binnenkwam, hoeveel er per groep uitging, wat er over is.

[Inkomsten en uitgaven als tabel: Inkomsten, Uitgaven per groep, Totaal, Spaarquote per maand]
**Tabel.**

[Inkomsten en uitgaven als grafiek: groene en rode staven per maand en een totaallijn]
**Grafiek.**

(•)
#### De tabel

Regels zijn inkomsten per bron en uitgaven per groep; een groep kun je uitklappen tot categorieën. Onderaan — het “Totaal” en de “Spaarquote” van elke maand.

*Hoe het werkt:*
Tik op een getal om de lijst met transacties te openen waaruit het bestaat. De tabel is breder dan het scherm — veeg opzij.

(•)
#### De grafiek

Elke maand heeft twee staven: groen omhoog — hoeveel geld er binnenkwam, rood omlaag — hoeveel er uitging. Een dunne lijn toont wat er over is: boven nul eindigde de maand in de plus; eronder gaf je meer uit dan er binnenkwam. Boven de grafiek staan vier getallen voor de hele periode: inkomsten, uitgaven, totaal en spaarquote. Tik op een maand, en de getallen tonen alleen die maand; schuif je vinger, en ze veranderen over de buurmaanden; tik nog eens op dezelfde maand, en het is weer de hele periode.

#### Leeftijd van het geld {#reports-r-aom}

Hoe de leeftijd van je geld maand na maand veranderde.

[Leeftijd van het geld: 52 dagen aan het eind van de periode, een lijn per maand]

(•)
#### Het getal bovenaan

De leeftijd aan het eind van de periode — hetzelfde getal als op “Overzicht”.

(•)
#### Waarom

Je ziet of je buffer groeit. Een stijgende lijn betekent dat je steeds verder weg bent van “van salaris tot salaris”. Wat het getal betekent en hoe het berekend wordt — in het artikel [“Overzicht”](#overview), onderdeel “Leeftijd van het geld in detail”.

### Vermogen {#reports-capital}

Alles wat je bezit en alles wat je schuldig bent.

#### Vermogen {#reports-r-networth}

Het totaal van alle rekeningen min schulden — en hoe het veranderde.

[Vermogen: 12.209,72 aan het eind van de periode, een lijn per maand, een tabel per maand met pijlen]

(•)
#### Wat erin zit

Alle rekeningen in de hoofdvaluta — zowel in het budget als buiten het budget (spaargeld, deposito's), min creditcards en leningen. Rekeningen in andere valuta worden niet omgerekend en tellen niet mee in het totaal.

(•)
#### De tabel

Het vermogen aan het eind van elke maand, met een pijl — omhoog of omlaag.

#### Kaartschuld {#reports-r-carddebt}

Hoeveel je op creditcards schuldig bent — en of de schuld groeit.

[Kaartschuld: 890,63 aan het eind van de periode, de schuld groeide met 563,13 in de periode]

(•)
#### Het getal bovenaan

De schuld op alle creditcards aan het eind van de periode en hoeveel ze in de periode groeide of kromp.

(•)
#### Wanneer je het ziet

Het rapport staat alleen in de lijst als je een creditcard hebt. Hoe een creditcard in het budget werkt — in het artikel [“Hoe het budget werkt”](#start).

## Saldo's {#accounts}

Elke plek waar je geld staat: passen, je portemonnee, spaargeld, creditcards. En hoeveel er nu waar staat.

*Het tabblad “Saldo's” onderaan het scherm*

### Waarom dit scherm {#accounts-why}

Hier zie je waar je geld nu staat: hoeveel op de betaalrekening, hoeveel in je portemonnee, hoeveel je op de creditcard schuldig bent. De enveloppen op het scherm “Budget” beantwoorden “waarvoor”, en rekeningen beantwoorden “waar”.

##### Voeg je rekeningen toe

Elke plek waar geld staat: passen bij elke bank, je portemonnee, spaargeld.

##### Stem af met de bank

Eén keer per week of per maand controleren of de app en de bank hetzelfde laten zien.

##### Ruim het oude op

Een pas opgezegd? Verberg hem, en de geschiedenis blijft.

### Wat waar staat op het scherm {#accounts-screen}

Tik op een schermafbeelding om haar schermvullend te openen.

[Scherm “Saldo's”: onderdelen “IN BUDGET”, “CREDITCARDS”, “BUITEN BUDGET” met rekeningen en bedragen]

1. **Onderdeel** — een plank met rekeningen van één soort. Tik op de naam om het onderdeel in te klappen.

   *Hoe het werkt:*
   Er zijn vier onderdelen, en in welk onderdeel een rekening terechtkomt, hangt af van haar type. “IN BUDGET” is geld dat je over enveloppen verdeelt: betaalrekening, contant. “CREDITCARDS” — creditcards. “BUITEN BUDGET” — wat je spaart of alleen in beeld wilt houden: spaargeld, een deposito. “Schulden” — leningen. Een leeg onderdeel wordt niet getoond. Meer in het onderdeel [“In het budget of buiten het budget”](#accounts-kinds).

2. **Totaal van het onderdeel** — hoeveel er op alle rekeningen van het onderdeel staat.

   *Hoe het werkt:*
   “IN BUDGET” is op de schermafbeelding € 4.712,98: dat is betaalrekening en contant samen, precies het geld dat je op het scherm “Budget” over enveloppen verdeelt. “CREDITCARDS” heeft een rood totaal — dat is schuld.

3. **Rekening** — één regel is één portemonnee, pas of deposito. Pictogram en kleur komen van het type rekening.

   *Hoe het werkt:*
   Tik op de regel om het rekeningscherm te openen: al haar transacties, zoals in “Boekingen”, maar alleen voor deze rekening. Houd ingedrukt om het menu van de rekening te openen ([hieronder](#accounts-hold)). Veeg naar links of rechts — “Bewerken” of “Verwijderen”.

4. **Saldo** — hoeveel er volgens je administratie nu op de rekening staat.

   *Hoe het werkt:*
   Dit is de som van alle transacties van de rekening met het startsaldo. Klopt het niet met de bank, dan is er een transactie vergeten of dubbel vastgelegd. Hoe je haar vindt — [“Saldo afstemmen”](#accounts-reconcile).

5. **“Nog niet verwerkt”** — het totaal van transacties die de bank nog niet heeft verwerkt.

   *Hoe het werkt:*
   De betaalrekening toont op de schermafbeelding −€ 47,55: de aankoop bij “Albert Heijn” heb je al vastgelegd, maar bij de bank staat ze er nog niet. Als ze op je afschrift verschijnt, vink je haar af met het rondje in de stroom (in “Boekingen” — uitleg 9), en de regel verdwijnt. Zolang er zulke transacties zijn, verschillen het saldo in de app en het saldo in de app van je bank terecht — met precies dat bedrag. De markering is optioneel. Gebruik je haar niet, dan komen alle transacties van de rekening hier terecht — dat is geen fout, de regel vertelt je dan alleen niets.

6. **“CREDITCARDS”** — een apart onderdeel voor creditcards. Het rode totaal is hoeveel je de bank schuldig bent. Voor elke creditcard maakt de app zelf een speciale categorie op het scherm “Budget” — laat die met rust.

   *Hoe het werkt:*
   Creditcarduitgaven maken enveloppen net zo kleiner als betaalpasuitgaven. Maar het geld om ze af te lossen zet de app zelf opzij — in de groep “Kaartbetalingen” op het scherm “Budget”. Een creditcardaflossing is een overboeking van je betaalpas naar de creditcard.

   **De speciale categorie.** Maak je een rekening van het type “Creditcard” aan, dan maakt de app op het scherm “Budget”, in de groep “Kaartbetalingen”, een categorie met dezelfde naam als de kaart. Onder de naam staat “Kaartschuld …”. De app zet er geld in opzij voor de aflossing: € 35 uitgegeven met de creditcard — € 35 schoof hierheen uit de envelop van de aankoop.

   **Laat deze categorie met rust** — de app laat je er sowieso niet aankomen: ze kan niet hernoemd, verwijderd of naar een andere groep verplaatst worden, en je kunt geen eigen categorie aan de groep “Kaartbetalingen” toevoegen. De app telt er de schuld van precies deze kaart mee. Hernoem de kaart op het scherm “Saldo's” — de categorie hernoemt zichzelf. Geef de kaart een ander type — de categorie verdwijnt, en haar geld gaat terug naar “niet toegewezen”.

   Eén ding blijft van jou: **de schuld die de kaart had voordat je begon bij te houden**. Daarvoor zet de app geen geld opzij — om haar af te lossen, stop je geld in deze categorie zoals in elke envelop, beetje bij beetje of in één keer.

7. **“BUITEN BUDGET”** — rekeningen waarvan het geld niet over enveloppen wordt verdeeld: spaargeld, een deposito. Hoe ze verschillen — [hieronder](#accounts-kinds).

8. **Het menu “⋮”** — een rekening toevoegen en instellen hoe de lijst eruitziet. Uitgelegd [hieronder](#accounts-menu).

### In het budget of buiten het budget {#accounts-kinds}

De hoofdvraag bij elke rekening: verdeel je haar geld over enveloppen? Het antwoord bepaalt waar de rekening op dit scherm staat en of haar geld op het scherm “Budget” terechtkomt.

##### In het budget

Betaalrekening, contant, creditcard — waar je dagelijks van uitgeeft. Elke euro hier hoort in een envelop. Een salaris komt op de betaalrekening — het gaat naar “niet toegewezen”.

##### Buiten het budget

Spaargeld, een deposito, beleggingen, een lening — wat je wilt zien maar niet dagelijks uitgeeft. Dit geld heeft geen enveloppen. Geld van de spaarrekening naar de betaalrekening gezet? Het verschijnt in “niet toegewezen”, en je kunt het verdelen.

Een nieuwe rekening komt vanzelf in haar onderdeel, naar type: “Contant” en “Bankrekening” gaan naar “IN BUDGET”, “Creditcard” naar “CREDITCARDS”, “Lening” naar “Schulden”, “Alleen bijhouden” naar “BUITEN BUDGET”. Leningen en rekeningen “Alleen bijhouden” hebben geen enveloppen.

### Het menu “⋮” {#accounts-menu}

Een nieuwe rekening en hoe de lijst getoond wordt.

[Het menu “⋮” van het scherm “Saldo's”: Rekening toevoegen, Lopende saldi, Verborgen rekeningen, Tips, Kennisbank]

(F)
#### Rekening toevoegen

Een nieuwe pas, portemonnee of deposito.

*Hoe het werkt:*
1. Tik op “Rekening toevoegen”.
2. Kies een type: “Contant”, “Bankrekening”, “Creditcard”, “Lening” of “Alleen bijhouden”. Het type bepaalt het onderdeel en het pictogram.
3. Voer een naam in — hoe je deze rekening noemt: “ING-pas”, “Portemonnee”.
4. Voer in hoeveel er vandaag op de rekening staat — het bedrag uit de app van je bank of uit je portemonnee.
5. Opslaan. Het bedrag wordt het startsaldo. Bij contant en een bankrekening gaat het meteen naar “niet toegewezen” op het scherm “Budget” — verdeel het over de enveloppen.

(G)
#### Lopende saldi

Toon het saldo na elke transactie — voor alle rekeningen tegelijk.

*Hoe het werkt:*
Hetzelfde als “Lopend saldo” in het menu van één rekening, alleen voor allemaal. **Direct na het installeren:** uit.

(H)
#### Verborgen rekeningen

Toon verborgen rekeningen onderaan de lijst.

*Hoe het werkt:*
Het getal tussen haakjes is hoeveel het er zijn. Zolang er geen verborgen rekeningen zijn, is het item grijs, zoals op de schermafbeelding. Elke verborgen rekening in de lijst heeft een knop “Terugzetten”.

(I)
#### Tips

Alle tips van dit scherm op één plek.

(J)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

### Wat je met een regel kunt doen {#accounts-gestures}

Een rekeningregel heeft geen knoppen. Tik erop, houd ingedrukt, of veeg opzij.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik | Het rekeningscherm: al haar transacties, met het saldo en “Nog niet verwerkt” bovenaan. |
| Houd ingedrukt | Het menu van de rekening — [hieronder uitgelegd](#accounts-hold). |
| Veeg naar links | “Bewerken” — het bewerkblad van de rekening: naam, type, uiterlijk. |
| Veeg naar rechts | “Verwijderen”. Had de rekening transacties, dan biedt de app “Verbergen” aan. |

#### Het menu van de rekening — ingedrukt houden {#accounts-hold}

Een rekeningregel heeft geen eigen “⋮”, om de naam geen ruimte af te nemen. Het menu opent met lang drukken, precies waar je vinger is. Dezelfde items staan in de “⋮” op het eigen scherm van de rekening.

[Menu van de rekening bij lang drukken: Saldo afstemmen, Lopend saldo, Rekening verbergen, Rekening bewerken, Rekening verwijderen]

(A)
#### Saldo afstemmen

Controleer of de app en de bank hetzelfde laten zien.

*Hoe het werkt:*
1. Open de app van je bank en kijk hoeveel er op de rekening staat.
2. Houd in “Saldo's” deze rekening ingedrukt en kies “Saldo afstemmen”.
3. In het venster staat “In de app: …”. Voer daaronder, in het veld “Werkelijk saldo bij de bank”, het bedrag van de bank in en tik op “Afstemmen”.
4. Het klopt — de app zegt “Saldo afgestemd ✓”. Alle transacties van de rekening tot vandaag krijgen een slotje, en onder de rekening verschijnt “afgestemd” met de datum.
5. Het klopt niet — het venster “Het saldo klopt niet” toont het verschil. Zoek eerst een vergeten of overbodige transactie. Niet gevonden? Tik op “Correctie aanmaken”: de app voegt een transactie toe voor dat verschil, en categorie, begunstigde en notitie vul je zelf in.

Transacties met een slotje gelden als gecontroleerd: er een bewerken vraagt om bevestiging, zodat wat afgestemd is niet per ongeluk wegschuift.

(B)
#### Lopend saldo

Toon onder elke transactie van deze rekening hoeveel er daarna op de rekening stond.

*Hoe het werkt:*
Handig om te vinden waar het saldo van het bankafschrift afweek: loop de transacties door en vergelijk de saldi regel voor regel. Het gaat alleen voor deze rekening aan; voor allemaal tegelijk — “Lopende saldi” in het menu “⋮”.

(C)
#### Rekening verbergen

Haal een rekening die je niet meer gebruikt uit de lijst.

*Hoe het werkt:*
Een pas opgezegd? Verwijderen kan niet — er is geschiedenis. Een verborgen rekening verdwijnt uit de lijst, maar haar transacties blijven in de geschiedenis en de rapporten. Terughalen: “⋮” → “Verborgen rekeningen” — ze verschijnen onderaan de lijst met een knop “Terugzetten”.

(D)
#### Rekening bewerken

Wijzig de naam, het type, het pictogram en de kleur van de rekening, en bij een rekening in een andere valuta — de valuta.

*Hoe het werkt:*
Hetzelfde blad opent als je de regel naar links veegt. Heeft de rekening een startsaldo, dan staat er in het blad een regel “Startsaldo” met datum en bedrag — tik erop om die transactie zelf te openen, en corrigeer haar zoals elke andere.

(E)
#### Rekening verwijderen

Alleen een rekening zonder één enkele transactie.

*Hoe het werkt:*
Heeft de rekening al transacties, dan zegt de app hoeveel en biedt hij aan de rekening te verbergen in plaats van te verwijderen — rapporten en saldi hebben de geschiedenis nodig. Hetzelfde bij vegen naar rechts.

## Transactieformulier {#entry}

Hoe je een aankoop, inkomen, een overboeking of een aankoop verdeeld over meerdere categorieën vastlegt — en wat elk veld doet.

*“+ Transactie” op elk tabblad*

### Waarom dit scherm {#entry-why}

Hier leg je alles vast wat er met je geld gebeurt: een aankoop, een salaris, een overboeking van de ene pas naar de andere. Hoe sneller je vastlegt, hoe eerlijker het budget — daarom kan het belangrijkste van het formulier meteen bij de kassa, in een paar tikken.

##### Openen

“+ Transactie” op elk tabblad. Vanaf een rekening- of categoriescherm opent het formulier met die al ingevuld. Nog sneller — een widget op het startscherm.

##### Het minimum

Bedrag, categorie en rekening. Begunstigde, notitie en de rest zijn optioneel.

##### Niet alleen met de hand

De camera boven de “+” leest de QR-code van de bon, de microfoon een zin als “Albert Heijn 70 Boodschappen”. Beide knoppen openen hetzelfde formulier, al ingevuld.

### Wat waar staat op het scherm {#entry-screen}

Zo ziet het formulier eruit direct nadat je op “+” tikte. Het toetsenblok voor het bedrag opent meteen: je begint bijna altijd met het bedrag. Tik op een schermafbeelding om haar schermvullend te openen.

[Nieuwe transactie: schakelaar Uitgaand en Inkomend, bedrag 0,00, velden Begunstigde, Categorie, Rekening, Datum, toetsenblok voor het bedrag]

1. **Sluiten** — het kruisje. Is er al iets getypt, dan vraagt de app “Verlaten zonder op te slaan?” — “Blijven” of “Niet opslaan”.

2. **“Uitgaand” / “Inkomend”** — een uitgave of inkomen. De keuze bepaalt het teken van het bedrag en de kleur van de kop: roodachtig — een uitgave, groen — inkomen, grijs — een overboeking.

   *Hoe het werkt:*
   Kies “Inkomend” en een begunstigde — de app zet zelf de inkomstencategorie van deze maand erin: zo gaat een salaris meteen naar “niet toegewezen” op het scherm “Budget”.

   Tik bij inkomen op het veld “Categorie” — het blad “Waar de inkomsten heen gaan” opent: “Inkomsten voor november”, “Inkomsten voor december” of “Naar een uitgavecategorie…” (een terugbetaling, jouw deel van een gezamenlijke aankoop). Een salaris wordt voor volgende maand vastgelegd zodra de leeftijd van je geld 30 dagen haalt — waarom en wat er verandert, staat in het artikel [“Overzicht”](#overview), onderdeel “Leeftijd van het geld in detail”.

3. **Bedrag** — getypt op het toetsenblok hieronder. Is het toetsenblok verborgen, tik dan op het bedrag om het terug te halen.

4. **Begunstigde** — aan wie je betaalde of van wie het geld kwam: “Albert Heijn”, “Werkgever”. Overboekingen tussen je eigen rekeningen staan hier ook.

   *Hoe het werkt:*
   Kies een begunstigde die je eerder vastlegde — de app vult categorie en notitie in zoals de vorige keer. Alleen lege velden: koos je al een categorie, dan blijft die. Een nieuwe begunstigde maak je vanuit de zoekbalk: typ de naam en kies ““…” aanmaken”. Een begunstigde van een transactie verwijderen gaat met het kruisje rechts in het veld. Meer — [hieronder](#entry-pickers).

5. **Categorie** — de envelop waar het geld uit ging. Zonder categorie verkleint een aankoop geen enkele regel op het scherm “Budget”.

6. **Rekening** — waar het geld vandaan ging of waar het binnenkwam: betaalrekening, portemonnee, creditcard. Pictogram en kleur zijn dezelfde als in de lijst met rekeningen.

7. **Datum** — vandaag, als je er niet aankomt. Tik erop voor een kalender.

   *Hoe het werkt:*
   Een datum meer dan een maand vooruit — dan vraagt de app nog eens: “De transactie krijgt de datum …, meer dan een maand vooruit. Toch vastleggen?”. Zo vang je een tikfout in het jaar.

8. **Toetsenblok voor het bedrag** — van de app zelf, met een rekenmachine. Uitgelegd [hieronder](#entry-keypad).

### Het toetsenblok voor het bedrag {#entry-keypad}

Het gewone toetsenbord van de telefoon is onhandig voor bedragen: kleine cijfers, geen bewerkingen, de komma ergens op een tweede scherm. Het formulier heeft een eigen — groot en met een rekenmachine.

(+)
#### Het rekent

Een bon voor twee, twee aankopen op één pas — reken meteen in het veld.

*Hoe het werkt:*
Typ 120, tik op “+”, typ 35 en tik op “=” — het bedrag wordt 155. “+”, “−”, “×” en “÷” werken allemaal. De gekozen bewerking blijft gemarkeerd terwijl je het tweede getal typt.

(,)
#### Komma of centen

Hoe je het deel na de komma typt, kies je zelf.

*Hoe het werkt:*
**Met komma** — zoals een rekenmachine: 12, komma, 50 is 12,50. Terwijl je de centen typt, is de kommatoets gemarkeerd.

**Vanaf de centen** — zoals een betaalautomaat: 1250 is 12,50. In plaats van een komma heeft het toetsenblok dan een toets “00”: “3”, “00”, “00” is 300,00.

Wisselen doe je in “Instellingen → Taal en notaties → Bedrag invoeren”. **Direct na het installeren:** met komma.

(⌫)
#### Wissen

Tik om het laatste cijfer te wissen. Houd ingedrukt om alles in één keer te wissen, samen met een begonnen bewerking.

(✓)
#### “Uitvoeren”

Verbergt het toetsenblok, waarna de andere velden en de knop “Opslaan” eronder zichtbaar worden. De Terug-knop van het systeem doet hetzelfde.

(✋)
#### Welke hand

De cijfers onder je duim.

*Hoe het werkt:*
“Voor de rechterhand” — cijfers rechts, bewerkingen en “Uitvoeren” links (zoals op de schermafbeelding). “Voor de linkerhand” — andersom. “Instellingen → Taal en notaties → Bedragtoetsen”. **Direct na het installeren:** voor de rechterhand.

### Begunstigde en categorie kiezen {#entry-pickers}

Beide velden openen een lijst van onderen op het scherm. Bovenaan — zoeken: typ een paar letters, en de lijst wordt korter.

[Lijst met begunstigden: zoeken, een onderdeel Overboekingen met rekeningen en saldi, Buiten budget, begunstigden met een letter links]
**Begunstigde.** Eerst je rekeningen voor overboekingen, dan begunstigden.

[Lijst met categorieën: zoeken, Bedrag splitsen, Vaak gebruikt, categoriegroepen]
**Categorie.** “Bedrag splitsen”, de vaakst gebruikte, dan alle groepen.

(A)
#### Overboekingen — in de lijst met begunstigden

Ging het geld naar je eigen rekening? Kies haar in het onderdeel “Overboekingen”: “Overboeking: Visa”.

*Hoe het werkt:*
Onder de naam van de rekening staat haar saldo, zodat je niet de verkeerde kiest. Rekeningen buiten het budget (spaargeld, een deposito) staan in een eigen onderdeel eronder. Hoe een overboeking werkt — [hieronder](#entry-transfer).

(B)
#### Nieuwe begunstigde

Staat hij niet in de lijst? Typ de naam in de zoekbalk en kies ““…” aanmaken”.

*Hoe het werkt:*
Begunstigden hoef je niet vooraf in te stellen: de lijst groeit vanzelf terwijl je vastlegt. Hernoemen of verwijderen — “Instellingen → Begunstigden”.

(C)
#### “Vaak gebruikt”

Chips met de categorieën die je het vaakst kiest. Eén tik en klaar.

*Hoe het werkt:*
Zoeken begrijpt ook de naam van de groep. Niet gevonden? Kies ““…” aanmaken in groep”: de nieuwe categorie verschijnt meteen ook op het scherm “Budget”.

(D)
#### “Bedrag splitsen”

Eén aankoop — meerdere categorieën. Uitgelegd [hieronder](#entry-split).

### Een ingevulde transactie {#entry-filled}

De aankoop bij “Albert Heijn” uit het artikel “Boekingen”: met een tag, een e-bon en een foto. Het toetsenblok is verborgen en “Aanvullend” is uitgeklapt — alle velden van het formulier zijn zichtbaar.

[De transactie Albert Heijn 47,55 bewerken: velden, Aanvullend met de tag huisje, bon, foto, Verwerkt, Vlag, Transactie verwijderen, Opslaan]

9. **Notitie** — wat je kocht of waarom: “Melk, eieren, brood”. Ze staat cursief in de stroom en is te vinden met zoeken.

10. **“Aanvullend”** — de weinig gebruikte velden in één kaart. Tik op de kop om de kaart in of uit te klappen.

    *Hoe het werkt:*
    Een ingeklapte kaart is één regel, met rechts pictogrammen voor de velden die erin verborgen zitten: tag, bon, foto, “Verwerkt”, vlag. Een ingevuld veld is altijd zichtbaar, ook in een ingeklapte kaart. De app onthoudt je keuze. **Direct na het installeren:** ingeklapt.

11. **Tags** — labels bovenop de categorie: “#huisje”, “#vakantie”. Het keuzeblad — [hieronder](#entry-tags).

12. **E-bon** — de code of link van de bon. Het scannerpictogram rechts richt de camera op een QR-code, “+” voegt nog een bon toe.

    *Hoe het werkt:*
    Kent de app de bonnen van jouw land, dan vergelijkt hij de bon met het formulier: hij vult het bedrag in als het er nog niet is, en als de bedragen verschillen, toont hij een regel onder het veld en biedt “Corrigeren” aan. Een bon verandert nooit de datum. Meer over bonnen en foto's — in het artikel [“Boekingen”](#transactions).

13. **Foto's en pdf's** — “Toevoegen” — een bon fotograferen, een foto uit de galerij of een pdf kiezen. Het kruisje op een miniatuur haalt hem weg.

    *Hoe het werkt:*
    Overdrijf het niet: elke foto gaat mee in alle back-ups en, als dat aanstaat, naar de cloud. Meer — in het artikel [“Boekingen”](#transactions).

14. **“Verwerkt”** — vink het aan als de transactie op je bankafschrift verschijnt. Het rondje in de regel van de stroom doet hetzelfde.

    *Hoe het werkt:*
    De markering is optioneel: ze heeft geen invloed op het budget, ze helpt alleen de rekening met de bank af te stemmen. Gebruikte je haar nooit, sla haar dan gewoon over — lege rondjes zijn prima.

15. **Vlag** — een gekleurde markering “kom hier later op terug”: om te controleren, op een terugbetaling te wachten, te bespreken. In de regel van de stroom verschijnt een vlaggetje.

16. **Transactie verwijderen** — alleen bij een transactie die al is vastgelegd. De app vraagt nog eens.

17. **“Opslaan”** — vastleggen. Zonder rekening of categorie slaat de app niet op en zegt hij wat je moet kiezen. Een bedrag van nul mag: zo'n boeking wordt een herinneringsnotitie in de stroom.

### Een overboeking tussen je eigen rekeningen {#entry-transfer}

Contant geld opgenomen, een creditcard afgelost, geld naar een deposito gezet — dat is geen uitgave, het geld verplaatst zich alleen. Leg zulke transacties vast als overboekingen, anders telt het budget ze als uitgaven.

[Een overboeking van 300 vastgelegd als vertrek van Betaalrekening: Uitgaand, Overboeking: Visa, rekening Betaalrekening, rode gloed]
**Manier 1.** Vertrek van Betaalrekening: “Uitgaand”.

[Dezelfde overboeking van 300 vastgelegd als aankomst op de Visa: Inkomend, Overboeking: Betaalrekening, rekening Visa, groene gloed]
**Manier 2.** Aankomst op de Visa: “Inkomend”.

(E)
#### Waarheen — in het veld “Begunstigde”

Kies een rekening in het onderdeel “Overboekingen”. De kop van het formulier wordt grijs.

*Hoe het werkt:*
De schermafbeelding toont een creditcardaflossing: € 300 van “Betaalrekening” naar “Visa”. In de stroom verschijnen twee regels: een min op de betaalrekening en een plus op de creditcard.

(F)
#### “Geen categorie nodig”

Het geld is nog steeds van jou — het verhuisde alleen. De enveloppen op het scherm “Budget” veranderen niet.

*Hoe het werkt:*
De uitzondering is een overboeking tussen een budgetrekening en een rekening buiten het budget (bijvoorbeeld naar spaargeld). Dan verlaat geld de enveloppen of komt het erin, en vraagt de app om een categorie.

(G)
#### “Uitgaand” en “Inkomend” bij een overboeking

De richting is vanuit het standpunt van de rekening in het veld “Rekening”.

*Hoe het werkt:*
**“Uitgaand”** — het geld verlaat deze rekening naar de rekening in het veld “Begunstigde”. Achter het bedrag gloeit zacht een rode cirkel. **“Inkomend”** — het geld komt op deze rekening binnen van die in “Begunstigde”. De cirkel is groen. De kop van een overboeking is hoe dan ook grijs.

(!)
#### Eén overboeking — twee manieren om haar vast te leggen

Een betaling van € 300 van “Betaalrekening” naar “Visa” kun je van beide kanten vastleggen. Het resultaat is hetzelfde.

*Hoe het werkt:*
1. **Vertrek van de betaalrekening** (linker schermafbeelding): “Rekening” — Betaalrekening, “Begunstigde” — “Overboeking: Visa”, “Uitgaand”, rode gloed.
2. **Aankomst op de creditcard** (rechter schermafbeelding): “Rekening” — Visa, “Begunstigde” — “Overboeking: Betaalrekening”, “Inkomend”, groene gloed.

In beide gevallen verschijnen in de stroom dezelfde twee regels: −300 op Betaalrekening en +300 op Visa, beide met het overboekingspictogram. Kies wat je het handigst vindt: vergelijk je het afschrift van de betaalrekening — leg haar vast als vertrek van de betaalrekening; zegt de app van je bank “creditcardbetaling ontvangen” — leg haar vast als aankomst op de kaart. Vanaf een rekeningscherm opent het formulier vanzelf met die rekening.

**Leg een overboeking één keer vast.** De andere kant voegt de app zelf toe. Leg je haar vast als vertrek van de betaalrekening en daarna ook nog als aankomst op de creditcard, dan verdubbelt de overboeking: er gaat € 600 van de betaalrekening af, en er komt € 600 op de kaart in plaats van € 300.

(H)
#### Verschillende valuta

Van een dollarpas naar een eurorekening — het formulier biedt zelf omrekenen aan.

*Hoe het werkt:*
Onder de begunstigde verschijnen velden: “Bijgeschreven” — hoeveel er op de tweede rekening binnenkomt — en “Koers”, met een knop die de richting van de koers omdraait. Wijzig het bedrag, en “Bijgeschreven” wordt opnieuw berekend; wijzig de koers — hetzelfde; voer “Bijgeschreven” in — en de koers wordt opnieuw berekend.

### Een gesplitst bedrag {#entry-split}

Eén aankoop — meerdere enveloppen: bij “HEMA” kocht je voor € 61 eten en voor € 25 schoonmaakmiddel. Leg het vast als één transactie, maar in twee categorieën — dan krimpen beide enveloppen eerlijk.

[HEMA gesplitst 86: SPLITSING, Totaal, Boodschappen 61, Huishoudelijke artikelen 25, Deel toevoegen]

(I)
#### “SPLITSING”

Verschijnt in plaats van het veld “Categorie” als je “Bedrag splitsen” kiest. Ernaast — het “Totaal” van de delen.

(J)
#### Een deel

Een eigen categorie, bedrag en notitie. Tik op de categorie of het bedrag — alleen dit deel verandert.

*Hoe het werkt:*
Een deel kan ook een overboeking zijn: contant opgenomen aan de kassa — € 70 naar “Boodschappen” en € 30 als “Overboeking: Contant”. Een voorbeeld met getallen — in het artikel [“Boekingen”](#transactions).

(K)
#### “+ tag”

Een tag alleen voor dit deel. Een tag uit het veld “Tags” van het formulier geldt voor de hele aankoop tegelijk.

(L)
#### “Deel toevoegen”

Nog een regel. Het kruisje rechts van een overbodig deel haalt het weg.

(M)
#### “Annuleren”

Terug naar één categorie voor het hele bedrag.

Tellen de delen niet op tot het totaal? Uitgelegd [hieronder](#entry-split-mismatch).

#### De delen tellen niet op tot het bedrag {#entry-split-mismatch}

Een fout gemaakt in een deel? De app corrigeert het niet stilzwijgend — hij toont het verschil meteen onder de delen en biedt een manier aan om het te sluiten.

[Delen 61 en 35 bij een totaal van 86: Splitsing overschrijdt het totaal met 10, een knop Verhogen naar 96]
**De delen zijn meer.** “Verhogen naar € 96,00”.

[Delen 61 en 15 bij een totaal van 86: Nog te verdelen 10, een knop Verlagen naar 76]
**De delen zijn minder.** “Verlagen naar € 76,00”.

(N)
#### “Splitsing overschrijdt het totaal met …” / “Nog te verdelen: …”

Hoe ver de delen van het totaal af liggen. De regel verschijnt vanzelf onder de delen terwijl je bewerkt.

*Hoe het werkt:*
Tijdens het bewerken is de regel geel — een hint. Tik op “Opslaan” met bedragen die niet kloppen, en de regel wordt rood, en het formulier slaat de transactie niet op tot de bedragen overeenkomen. Dezelfde correctieknop staat ook in het bericht onderaan het scherm.

(O)
#### “Verhogen naar …” / “Verlagen naar …”

Eén tik — en het totaal wordt gelijk aan de som van de delen.

*Hoe het werkt:*
Links: in het tweede deel typte je 35 in plaats van 25. Samen maken de delen € 96, terwijl het totaal € 86 is: “Splitsing overschrijdt het totaal met € 10,00”, en de knop “Verhogen naar € 96,00” telt die 10 bij het totaal op. Rechts is het andersom: 15 in plaats van 25 — “Nog te verdelen: € 10,00”, en de knop “Verlagen naar € 76,00” haalt er 10 af.

**De knop corrigeert het totaal, niet het deel.** Klopt het totaal — zoals op de bon — en zat de fout in een deel, corrigeer dan het deel zelf: tik op zijn bedrag en typ het juiste.

### Terugbetaling voor een geretourneerd artikel {#entry-refund}

Bedorven melk teruggebracht, een jas die niet paste geretourneerd — het geld kwam terug. Dat is geen inkomen: leg het vast als terugbetaling naar dezelfde categorie waaruit je betaalde.

[Blad Waar de inkomsten heen gaan: Inkomsten voor november, Inkomsten voor december, Naar een uitgavecategorie]
**Stap 3.** In het veld “Categorie” staat “Inkomsten voor november” — tik erop en kies “Naar een uitgavecategorie…”.

[Een terugbetaling van 3,00 van Albert Heijn: Inkomend, categorie Boodschappen, rekening Betaalrekening, notitie Terugbetaling: melk over datum]
**Klaar.** “Inkomend”, de winkel, de categorie van de aankoop.

(P)
#### Hoe je het vastlegt

Een terugbetaling is geld dat van de winkel terugkwam naar de categorie waaruit het vertrok.

*Hoe het werkt:*
1. “+ Transactie” → “+ Inkomend”.
2. Het bedrag van de terugbetaling. Begunstigde — dezelfde winkel. Rekening — waar het geld werd teruggestort, meestal dezelfde pas.
3. Uit gewoonte zet de app “Inkomsten voor november” in “Categorie” (linker schermafbeelding). Tik op het veld “Categorie” → “Naar een uitgavecategorie…” → kies de categorie waaruit je kocht: “Boodschappen”.
4. Notitie — optioneel: “Terugbetaling: melk over datum”. Opslaan.

(Q)
#### Wat er verandert

De envelop “Boodschappen” wordt aangevuld, “niet toegewezen” niet.

*Hoe het werkt:*
- Op het scherm “Budget” toont “Boodschappen” een “uitgegeven” dat € 3 lager is, en het saldo groeit met hetzelfde bedrag.
- “Niet toegewezen” verandert niet: je verdiende het niet, je kreeg je eigen geld terug.
- Op de schermen van categorie en winkel worden uitgaven na terugbetalingen geteld.
- In de kalender van “Overzicht” wordt een dag met alleen terugbetalingen gemarkeerd met een lege ring.
- Teruggestort op een creditcard? De schuld van de kaart daalt, en daarmee het bedrag dat in “Kaartbetalingen” voor de aflossing opzij staat.

(R)
#### Wat als je het als inkomen vastlegt

Dan liegt het budget twee keer.

*Hoe het werkt:*
“Inkomsten voor november” telt € 3 bij “niet toegewezen” op alsof je het verdiende, terwijl “Boodschappen” een aankoop houdt die eigenlijk niet gebeurde. Het rapport “Inkomsten en uitgaven” toont dan zowel inkomsten als uitgaven hoger dan ze werkelijk zijn.

(S)
#### Waarom niet de aankoop verwijderen

Dat kan als je alles op dezelfde dag terugbracht.

*Hoe het werkt:*
Is de aankoop al door de bank verwerkt of afgestemd, of bracht je maar een deel terug, leg de terugbetaling dan als aparte transactie vast. Op het bankafschrift staan twee regels, de aankoop en de terugbetaling — laat de app er ook twee hebben: dan klopt de afstemming.

Geld dat een vriend je terugbetaalde voor zijn helft van een gezamenlijke aankoop, leg je op dezelfde manier vast: “+ Inkomend”, van de vriend, naar de categorie van de aankoop.

### Tags {#entry-tags}

Het veld “Tags” in “Aanvullend” opent een keuzeblad.

[Blad Tags: zoeken Tag zoeken of maken, Recent: huisje aangevinkt, samsam]

1. Vink de tags aan die je nodig hebt — recente staan bovenaan, met rechts het aantal transacties.
2. Staat de tag er niet bij? Typ de naam in de regel “Tag zoeken of aanmaken” en kies “Tag “…” aanmaken”.
3. Tik op “Klaar”.

De keuze gaat niet verloren, ook niet als je het blad omlaag veegt. Waarom tags handig zijn en waar je later de totalen ziet — in het artikel [“Boekingen”](#transactions).

### Geen tijd? — “Naar inbox” {#entry-inbox}

Bij de kassa heb je soms maar een seconde: je onthoudt het bedrag, maar er is geen tijd om een categorie en rekening te kiezen.

Zet “Instellingen → GEGEVENS → Inbox” aan. Heeft het formulier nu een bedrag maar geen categorie of rekening, dan staat er op de knop **“Naar inbox”** in plaats van “Opslaan”, en op het toetsenblok slaat hij meteen op. De transactie wordt vastgelegd, maar met het label “Indelen”.

Zolang er zulke transacties zijn, hangt er een strook boven de navigatie, en staat er een melding op “Overzicht”. Tik erop — het formulier opent ze één voor één, in de volgorde waarin je ze vastlegde: handig om de dag winkel voor winkel terug te halen. **Direct na het installeren:** uit.

Het is vooral handig met je stem: zeg de aankoop bij de kassa — en deel thuis in wat de stem niet herkende. Het scenario — in het artikel [“Invoer met je stem”](#voice-inbox).

### Wat je in het formulier kunt doen {#entry-gestures}

Een kort spiekbriefje met gebaren en knoppen.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik op het bedrag | Het toetsenblok terughalen. |
| De Terug-knop van de telefoon | Verbergt eerst het toetsenblok, de tweede keer verlaat hij het formulier (vraagt als er iets niet is opgeslagen). |
| Houd ⌫ ingedrukt | Het hele bedrag wissen. |
| Het kruisje in het veld “Begunstigde” | De begunstigde van de transactie verwijderen. |
| Tik op de kop “Aanvullend” | De weinig gebruikte velden in- of uitklappen. |
| Het kruisje op een fotominiatuur | De afbeelding of pdf van de transactie verwijderen. |

## Invoer met je stem {#voice}

Zeg de aankoop in één zin — “Albert Heijn 70 Boodschappen” — en de app opent het formulier al ingevuld. Controleer en sla op.

*de groene microfoonknop boven “+ Transactie”*

### Waarom {#voice-why}

Bij de kassa heb je je handen vol, maar je moet de aankoop meteen vastleggen, zolang je het nog weet. Bedrag typen, begunstigde, categorie en rekening kiezen — dat zijn vijf tikken. Met je stem — één zin.

De stem legt zelf niets vast. Hij vult het transactieformulier in, en jij slaat op — zodat een herkenningsfout nooit ongemerkt in het budget belandt.

De microfoonknop is groen, boven “+ Transactie” op “Overzicht”, in “Boekingen” en op de schermen van rekening en categorie.

### De eerste keer {#voice-first}

[Blad voor invoer met je stem: microfoon, Zeg het bedrag en je eigen namen: categorie, winkel, rekening; Bijvoorbeeld: “70 Boodschappen”; Het herkende komt in het formulier — daar kun je het controleren en aanpassen; knoppen Annuleren en Spreken]

1. **Wat je zegt** — het bedrag en je eigen namen: categorie, winkel, rekening.

2. **Voorbeeld** — een zin uit je eigen budget: je vaakst gebruikte categorie en een gebruikelijk bedrag. Herhaal hem — en het werkt.

3. **Waar het heen gaat** — naar het transactieformulier, waar je alles kunt controleren en aanpassen.

4. **“Spreken”** — zet de microfoon aan. De eerste keer zet het blad hem niet zelf aan: lees eerst wat je moet zeggen. Daarna gaat de microfoon aan zodra je het blad opent.

De app vraagt toestemming voor de microfoon — geef die. Spreek, tik dan op “Klaar” of houd gewoon op met praten: de herkende zin verschijnt op het blad, en het formulier opent.

### Wat je zegt {#voice-say}

Begin met het bedrag en de categorie, voeg dan de rest toe. Het voorbeeld onder de microfoon groeit met je mee: twee geslaagde zinnen op rij — en het toont de volgende stap.

De stappen op het demobudget:

| Zin | Wat er ingevuld wordt |
|---|---|
| “70 Boodschappen” | Bedrag en categorie. |
| “Albert Heijn 70 Boodschappen” | Plus de begunstigde. |
| “Albert Heijn 70 Boodschappen notitie Eten” | Plus een notitie: alles na het woord “notitie”. |
| “Albert Heijn 70 Boodschappen van rekening Betaalrekening” | Plus de rekening waarmee je betaalde. |
| “overboeking 100 van rekening Betaalrekening naar rekening Visa” | Een overboeking tussen rekeningen. |
| “inkomsten 1400 Werkgever naar rekening Betaalrekening” | Inkomen en de rekening waar het geld heen ging. |

[Formulier Transactie toevoegen na de zin “Albert Heijn 70 Boodschappen van rekening Betaalrekening”: Uitgaand, 70,00, Begunstigde Albert Heijn, Categorie Boodschappen, Rekening Betaalrekening, Datum]

De schermafbeelding toont het formulier na de zin “Albert Heijn 70 Boodschappen van rekening Betaalrekening”. De datum is vandaag. Controleer en tik op “Uitvoeren”, dan op “Opslaan”.

##### Woorden die de app begrijpt

- **“overboeking”** — een overboeking tussen rekeningen; **“inkomsten”** — er kwam geld binnen. Zonder deze woorden is de zin een uitgave.
- **“van rekening …”** of **“van …”** — van welke rekening; **“naar rekening …”** of **“naar …”** — naar welke rekening. Het woord “rekening” mag je weglaten.
- **“notitie”** — alles na dit woord wordt de notitie. Zeg het dus als laatste.
- **“categorie …”** — als de naam van een categorie lijkt op die van een winkel en de app ze verwart.

##### Bedrag

In cijfers of woorden — de herkenning maakt van “tweehonderdvijftig” zelf 250. Centen komen na een komma: “25,50”. Staan er meerdere getallen in de zin, dan is het bedrag het eerste.

### Hoe namen herkend worden {#voice-names}

De app zoekt in de zin naar **jouw** namen: begunstigden, categorieën en rekeningen uit dit budget. Nieuwe maakt hij niet aan — noem een winkel die nog niet in het budget staat, en het veld “Begunstigde” blijft leeg.

##### De begunstigde brengt de categorie mee

Zodra de begunstigde herkend is, vullen categorie en notitie zich in vanuit zijn eerdere transacties, alsof je hem met de hand in het formulier koos. “Albert Heijn 70” zeggen is genoeg — de categorie “Boodschappen” vult zich zelf in.

##### Hoeveel woorden er nodig zijn

Voor een begunstigde volstaat één woord uit de naam. Een categorie met meerdere woorden heeft er minstens twee nodig — zodat “Zorg en gezondheid” niet verward wordt met “Zorg”. Een volledig uitgesproken naam wordt altijd herkend.

*Waarom het voorbeeld uit je eigen budget komt:*
Een voorbeeld met verzonnen namen (“ING 100 boodschappen Gamma”) zou een zin aanleren die in je budget niet bestaat: herhaal hem, en je krijgt een leeg formulier. Daarom wordt het voorbeeld altijd gebouwd uit je eigen gegevens — je vaakste aankoop, je rekeningen, een recente notitie.

### Niet alles verstaan — “Naar inbox” {#voice-inbox}

De stem herkende het bedrag, maar niet de categorie of de winkel. Geen tijd om het bij de kassa uit te zoeken, en je wilt de aankoop niet kwijtraken. Daarvoor is de “Inbox”.

##### Nu vastleggen, thuis indelen

1. Zet één keer “Instellingen → GEGEVENS → Inbox” aan.
2. Zeg bij de kassa de zin zoals gewoonlijk. Voeg aan het eind “notitie” en een paar woorden over de aankoop toe — bijvoorbeeld “notitie apotheek bij huis”. De notitie wordt bewaard, ook als winkel en categorie niet herkend zijn.
3. Ontbreekt er iets in het formulier? In plaats van “Opslaan” staat er een knop “Naar inbox”, ook op het toetsenblok. Tik erop — de aankoop wordt vastgelegd en gemarkeerd met “Indelen”.
4. Tik thuis op de strook boven de navigatie of op de melding op “Overzicht”. Het formulier opent deze aankopen één voor één, in de volgorde waarin je ze vastlegde: “Inbox · 1 van 3”. Kies een categorie en rekening — “Opslaan”.

Het bedrag, de datum en alles wat de stem herkende, staan al in de transactie — daarmee en met de notitie is de aankoop makkelijk terug te halen. Werd de rekening herkend, dan heeft de aankoop haar saldo al verlaagd, en staat ze op “Budget” in de regel “Zonder categorie” tot je haar indeelt. Werd de rekening niet herkend, dan wacht de aankoop buiten het budget en komt ze erin zodra je de rekening kiest.

*Wat er niet naar de “Inbox” gaat:*
Een overboeking tussen rekeningen en een gesplitst bedrag: die hebben beide rekeningen of alle delen tegelijk nodig. Zonder bedrag gaat het ook niet: ving de stem het getal niet op, typ het dan in het formulier. Meer over de “Inbox” in het artikel [“Transactieformulier”](#entry-inbox).

### Als het niet begrepen werd {#voice-fail}

| Op het blad | Wat er gebeurde |
|---|---|
| “Niets verstaan — probeer het opnieuw” | De telefoon herkende geen enkel woord. Spreek dichter bij de microfoon en tik op “Opnieuw proberen”. |
| “Geen bedrag en geen van je namen herkend” | De zin werd herkend, maar er staat geen getal en geen bekende naam in. Het formulier opent niet — kijk naar het voorbeeld en tik op “Opnieuw proberen”. |
| “Geen toegang tot de microfoon, of herkenning is niet beschikbaar…” | De app kreeg de microfoon niet, of de telefoon heeft geen spraakherkenning. Controleer de machtigingen van de app in de instellingen van de telefoon. |

Werd er niets herkend, dan wordt het voorbeeld op het blad een stap eenvoudiger. Werd een naam herkend maar het bedrag niet, dan blijft het voorbeeld hetzelfde: waarschijnlijk werd de zin gewoon afgekapt.

### Taal {#voice-language}

De app luistert in de interfacetaal — die gekozen in “Instellingen”, onderdeel “WEERGAVE” → “Taal en notaties” → “Interfacetaal”. Meer in het artikel [“Instellingen”](#settings-formats). Onder het voorbeeld staat in welke taal hij luistert.

##### “De taal van de app is niet geïnstalleerd voor spraakherkenning — ik luister in …”

De telefoon heeft geen herkenningsmodel voor deze taal, dus luistert de app in de taal van de telefoon. Voeg de taal toe in de instellingen voor spraakherkenning van de telefoon — en de regel verdwijnt.

##### De woorden “overboeking”, “inkomsten”, “notitie” — in jouw taal

Elke taal heeft eigen sleutelwoorden: in het Oekraïens “переказ”, “дохід”, “нотатка”, in het Russisch “перевод”, “доход”, “заметка”. Het voorbeeld onder de microfoon toont altijd de woorden van jouw taal.

## Bonscanner {#receipt}

Richt de camera op de QR-code van de bon — de app vult bedrag en datum in, en herkent een winkel die je al eerder zag aan zijn kassanummer, met begunstigde, categorie en rekening erbij.

*de paarse QR-codeknop boven “+ Transactie”*

### Waarom {#receipt-why}

Bonnen stapelen zich op in je zak, en 's avonds moet je je herinneren waar, hoeveel en wanneer. De scanner haalt bedrag en datum van de bon — geen tikfouten in de cijfers, en de echte dag van de aankoop, ook als je de bon pas de volgende dag invoert. De bon wordt in de transactie bewaard als e-bon: de papieren kun je weggooien.

### Waar de knop zit {#receipt-where}

De paarse knop met een QR-code staat boven “+ Transactie” op “Overzicht”, in “Boekingen” en op de schermen van rekening en categorie.

Hij verschijnt alleen als de app de bonnen van jouw land kent:

| Land | Wanneer de knop verschijnt |
|---|---|
| Oekraïne | Hryvnja in het budget of op een rekening, of de telefoon is in Oekraïne gekocht (regio UA). |
| Kazachstan | Tenge in het budget of op een rekening, of de regio van de telefoon is KZ. |
| Rusland | Roebel in het budget of op een rekening. |
| Portugal | De regio van de telefoon is PT, of de taal van de app is Portugees en er staan euro's in het budget of op een rekening. |

Nederland en België staan nog niet in de lijst: de app kan de QR-code van hun bonnen nog niet lezen. Daarom verschijnt de knop in een eurobudget hier niet. Je kunt ons helpen het de app te leren — [hoe](#receipt-your-country).

*Waarom op valuta en niet op taal:*
Een taal zegt niets over het land waar je boodschappen doet: Russisch wordt zowel in Oekraïne als in Kazachstan geschreven, en de bonnen zijn daar verschillend. De valuta daarentegen koos je zelf — en die zegt waar je betaalt.

In andere landen is er geen knop. Maar de code van elke bon kun je in een transactie bewaren — met het scannerpictogram in het veld “E-bon (URL of code)” van het formulier ([hieronder](#receipt-form)).

### Hoe je scant {#receipt-how}

[Venster De app leert van uw bonnen: in de QR-code staan alleen de datum, het bedrag en het kassanummer; knoppen Annuleren en Scannen]

1. Tik op de paarse knop.
2. De eerste drie keer legt de app uit hoe hij van bonnen leert (schermafbeelding). Tik op “Scannen”. Zodra hij een winkel heeft herkend, legt hij het niet meer uit.
3. De camera opent: “Richt de camera op de QR-code van de bon”. De code wordt vanzelf gelezen, je hoeft nergens op te tikken.
4. Het transactieformulier opent met bedrag, datum en bon. Controleer en tik op “Opslaan”.

Staat de bon als foto of pdf op je telefoon? Onder de camera — “Kiezen uit de galerij” en “Pdf kiezen”.

### Wat er van de bon komt {#receipt-what}

In de QR-code van een bon staat geen winkelnaam en geen lijst met aankopen — alleen het bedrag, datum en tijd, het bonnummer en het kassanummer. Dus:

| Veld in het formulier | Waar het vandaan komt |
|---|---|
| Bedrag | Van de bon. |
| Datum | Van de bon: de dag van de aankoop, niet vandaag. |
| “E-bon (URL of code)” | De code van de bon zelf. Daarmee kun je de bon openen en kopiëren. |
| Begunstigde | Op kassanummer: wie je koos voor eerdere bonnen van deze kassa. |
| Categorie en notitie | Op begunstigde — alsof je hem met de hand in het formulier koos. |
| Rekening | Die waarmee je de vorige keer in deze winkel betaalde. |

*Een kassa betekent dezelfde winkel:*
Een kassa hoort altijd bij één winkel. In een supermarkt kom je bij de ene of de andere rij uit — bij Oekraïense bonnen herkent de app ook een naburige kassa van dezelfde winkel. Leiden naburige kassa's naar verschillende begunstigden, dan zwijgt de app: liever kies je de winkel zelf dan dat je de verkeerde krijgt.

### Een nieuwe winkel {#receipt-new-shop}

Bij de eerste bon van een nieuwe winkel vult de app alleen bedrag en datum in — en opent meteen de keuze van de begunstigde.

[Blad Begunstigde over het formulier: zoeken, overboekingen, begunstigden]

[Het formulier na de keuze: 713,00, Begunstigde Albert Heijn, Categorie Boodschappen, Rekening leeg, Datum 9 november, E-bon met een link naar de bon]

1. Zoek de winkel in de lijst of typ een nieuwe naam.
2. De categorie vult zich zelf in als je al eerder bij deze begunstigde kocht.
3. Kies de rekening: in deze winkel betaalde je nog niet, dus de app kent haar niet.
4. “Opslaan”.

De volgende bon van deze kassa komt binnen met begunstigde, categorie en rekening al ingevuld.

### Dubbele bonnen en fouten {#receipt-problems}

| Melding | Wat er gebeurde |
|---|---|
| “Deze bon is al ingevoerd” | Precies deze bon staat al in een transactie — datum en bedrag staan in het venster. “Bewerken” opent die transactie, “Toch toevoegen” — een nieuwe, “Annuleren” — niets. |
| “Dit is geen bon die de app kent” | De QR-code komt niet van een bon, of van een bon uit een ander land. Het formulier opent niet. |
| “In deze bon staat geen bedrag” | De code werd gelezen, maar er staat geen bedrag in. Voer de aankoop in met “+ Transactie”. |

Sommige kassadiensten drukken op de bon een link naar hun eigen website, zonder bedrag of datum — zo'n bon kan de app niet lezen.

### Een bon uit een bestand: “Delen” {#receipt-share}

Kwam de bon per e-mail, via een messenger of in de app van je bank als afbeelding of pdf? Tik daar op “Delen” en kies “Mijn budget”.

- Er is een bekende bon gevonden — het formulier opent zoals na de camera, en de app vraagt “Bestand aan de transactie koppelen?”. De e-bon wordt hoe dan ook toegevoegd; koppel het bestand als je de bon zelf wilt zien.
- In het bestand staat geen bon, of een onbekende — de app zegt waarom en biedt “Handmatig invullen” aan: het formulier opent met het bestand al gekoppeld.

### Een bon in het formulier {#receipt-form}

In het transactieformulier staat onder “Aanvullend” een veld “E-bon (URL of code)” met een scannerpictogram. Het werkt met **elke** QR-code, in elk land: het zet wat er in de code staat in het veld.

Is de bon een bekende, dan vergelijkt de app hem met het formulier: hij vult het bedrag in als het er nog niet is, en als de bedragen verschillen, toont hij de regel “Op de bon staat een ander bedrag: …” en biedt “Corrigeren” aan. Een bon verandert de datum in een geopend formulier niet. Meer in het artikel [“Transactieformulier”](#entry).

Een bewaarde bon verschijnt als pictogram in de regel van de transactie, en in de transactiekaart als knoppen “Kopiëren” en “Openen”. Meer in het artikel [“Boekingen”](#transactions).

### Leer de app de bonnen van jouw land {#receipt-your-country}

De app leest een bon zonder internet: alles wat hij nodig heeft — bedrag en datum — moet in de QR-code zelf staan. In veel landen is dat zo: de QR-code van een fiscale bon bevat bedrag, datum en kassanummer. Geldt dat ook voor jouw land, dan kunnen we zijn bonnen toevoegen.

##### Stuur 5–10 bonnen

1. Neem bonnen van verschillende winkels: een supermarktketen, een apotheek, een tankstation, een kleine winkel. E-bonnen — een pdf of afbeelding uit een e-mail — mogen ook.
2. Fotografeer elke bon zo dat de QR-code en het totaal goed zichtbaar zijn.
3. Stuur ze naar de “Telegram-chat” of per e-mail met “Verbetering voorstellen” — beide in “Instellingen”, onderdeel “HELP EN CONTACT”. Vermeld je land.

Er zijn meerdere bonnen nodig om zeker te weten dat de code bij verschillende kassa's en ketens op dezelfde manier is opgebouwd. Eén bon kan dat niet vertellen.

*Wat je op de foto mag afdekken:*
We hebben alleen de QR-code, het bedrag en de datum nodig. De laatste cijfers van je pas, de naam van de kassière, een klantenkaart en alles wat verder persoonlijk is, mag je met een vinger afdekken of zwart maken — het heeft geen invloed op de herkenning.

*Wanneer het niet werkt:*
Staat er in de QR-code van de bon alleen een link naar een website — zonder bedrag en zonder datum —, dan staan de gegevens op die website. De app gaat daar niet heen: hij belooft te werken zonder server en zonder registratie. Zulke bonnen blijven zonder scanner, maar hun code kun je altijd bewaren in het veld “E-bon (URL of code)”.

## Widgets en snelkoppelingen {#widgets}

Knoppen om een aankoop vast te leggen, gewoon op het startscherm van je telefoon: stem, een nieuwe transactie, de bonscanner. Eén tik en je staat in het formulier — zonder de app te openen of naar de “+” te scrollen.

*startscherm van de telefoon — “Widgets” → “Mijn budget”; snelkoppelingen — houd het app-pictogram ingedrukt*

### Waarom {#widgets-why}

Aankopen worden vastgelegd zolang je ze nog weet: bij de kassa, op weg de winkel uit. Elke extra tik is een excuus om het uit te stellen “tot vanavond” en te vergeten. Een widget op het startscherm opent meteen wat je nodig hebt: de stem, het formulier of de camera voor een bon.

### Vijf widgets {#widgets-widgets}

| Widget | Grootte | Wat het doet |
|---|---|---|
| “Spraak” | 1 cel | Een groene knop met een microfoon — [invoer met je stem](#voice). |
| “Transactie” | 1 cel | Een knop met een “+” in de kleur van “+ Transactie” — een nieuwe transactie. |
| “Bon” | 1 cel | Een paarse knop met een QR-code — [de bonscanner](#receipt). |
| “Knoppen in een kolom” | 1 × 2 cellen | Alle drie de knoppen onder elkaar. |
| “Knoppen op een rij” | 2 × 1 cellen | Alle drie de knoppen naast elkaar. |

De kleuren zijn dezelfde als de knoppen in de app: groen voor de stem, paars voor bonnen.

##### De bonknop is niet voor iedereen

Iedereen krijgt de losse widget “Bon”. Maar in de widgets met drie knoppen verschijnt de bonknop alleen als de app de bonnen van jouw land kent — volgens dezelfde regel als de knop in de app. De regel staat in het artikel [“Bonscanner”](#receipt-where). Anders heeft de widget twee knoppen.

### Hoe je een widget toevoegt {#widgets-add}

1. Houd een lege plek op het startscherm ingedrukt.
2. Kies “Widgets”.
3. Zoek “Mijn budget” en de widget die je wilt.
4. Sleep hem naar het startscherm.

De namen in het menu hangen af van de telefoon: bij sommige staat “Widgets” in het menu van het startscherm, bij andere in een aparte lijst. De widgets “Spraak”, “Transactie” en “Bon” nemen één cel in, zoals een app-pictogram.

### Snelkoppelingen {#widgets-shortcuts}

Een snelkoppeling is dezelfde actie als een gewoon pictogram: de launcher tekent hem zoals app-pictogrammen, en hij staat op elke telefoon netjes in lijn ermee.

1. Houd het pictogram “Mijn budget” ingedrukt.
2. “Spraak” en “Transactie” verschijnen — tik op een ervan om hem meteen te openen.
3. Of sleep een snelkoppeling naar het startscherm — hij blijft daar staan als pictogram.

Voor bonnen is er geen snelkoppeling: een snelkoppeling kan niet verborgen worden waar de app de bonnen van het land niet kent. Gebruik voor bonnen de widget “Bon”.

### Wat er opent {#widgets-open}

| Je tikt op | Wat er gebeurt |
|---|---|
| “Spraak” | De app opent op “Overzicht” met het blad voor invoer met je stem erbovenop. |
| “Transactie” | “Overzicht”, met het formulier voor een nieuwe transactie erbovenop. |
| “Bon” | “Overzicht”, met de camera van de scanner erbovenop. |

Na het opslaan blijf je op “Overzicht” en zie je dat de aankoop in het budget staat.

##### Als er een pincode is ingesteld

De app vraagt eerst om je pincode of vingerafdruk, en opent direct daarna wat je aantikte. Je hoeft nergens nog eens op te tikken.

## Begunstigden en tags {#payees-tags}

Aan wie je betaalt en waarvoor — twee doorsneden van je transactiestroom, naast de categorieën.

*Een pictogram in de kop van “Boekingen”*

### Waarom dit scherm {#payees-tags-why}

Categorieën beantwoorden “waar ging het geld heen”. Hier staan twee andere doorsneden van dezelfde transactiestroom: **aan wie** je betaalt en **waarvoor**. Hoeveel er dit jaar naar “Albert Heijn” ging, wat het huisje kostte, wie wie wat schuldig is voor een gezamenlijke aankoop.

##### Hoe je er komt

Het pictogram “Begunstigden en tags” in de kop van “Boekingen”. Of “Instellingen → GEGEVENS → Begunstigden” en “Tags”. Of “Alle tags ›” in het blok “Mijn tags” op “Overzicht”.

##### Vooraf instellen hoeft niet

Begunstigden en tags verschijnen vanzelf de eerste keer dat je ze in het transactieformulier typt. Hier bekijk, hernoem en ruim je ze op.

##### Twee tabbladen

“Begunstigden” en “Tags”. Het scherm onthoudt op welk tabblad je bleef.

### Het tabblad “Begunstigden” {#payees-tags-payees}

Iedereen aan wie je betaalde of van wie je geld kreeg. Tik op een schermafbeelding om haar schermvullend te openen.

[Tabblad Begunstigden: zoeken, Totaal, dit jaar, Albert Heijn −1.111,89, Netflix, Werkgever +16.800, knop Nieuwe begunstigde]

1. **Tabbladen** — “Begunstigden” en “Tags”.

2. **Het menu “⋮”** — de volgorde van de lijst met begunstigden en de periode van het totaal. Uitgelegd rechts van de tweede schermafbeelding.

3. **Zoeken** — typ een paar letters van de naam.

4. **Begunstigde** — een letter, de naam, rechts het totaal over de periode, onder de naam hoeveel transacties er in dezelfde periode waren en wanneer de laatste was.

   *Hoe het werkt:*
   Het totaal is “netto” en heeft een teken: bij een winkel een min na terugbetalingen; bij een werkgever een plus. Op de schermafbeelding kostte “Albert Heijn” sinds het begin van het jaar € 1.111,89, en bracht “Werkgever” € 16.800 binnen. Deze getallen hebben bewust geen kleur: het teken toont de richting.

   Tik op een regel — het scherm van de begunstigde opent ([hieronder](#payees-tags-payee)). Veeg naar links — “Bewerken”: hernoemen. Veeg naar rechts — “Verwijderen”: de app vraagt nog eens en zegt hoeveel transacties de begunstigde heeft. De transacties zelf verdwijnen niet; ze blijven alleen zonder begunstigde achter.

5. **“Totaal, dit jaar”** — het opschrift boven de lijst: welke periode de getallen rechts beslaan. De periode kies je in het menu “⋮”.

6. **“+ Nieuwe begunstigde”** — een begunstigde met de hand toevoegen. Meestal niet nodig: het transactieformulier maakt er zelf een.

#### Volgorde van de lijst {#payees-tags-sort}

[Menu Sorteren: Meest gebruikt, Recent, Alfabetisch, Op bedrag, Periode]

(A)
#### Meest gebruikt

Wie de meeste transacties heeft, bovenaan. Dit is de instelling direct na het installeren.

(B)
#### Recent

Wie de meest recente transactie heeft, bovenaan.

(C)
#### Alfabetisch

Handig als je honderden begunstigden hebt.

(D)
#### Op bedrag

De grootste bovenaan: zowel aan wie je het meest betaalt als van wie je het meest krijgt. Het teken doet er niet toe, alleen de grootte.

(E)
#### Periode

“Totaal, dit jaar” (de standaard direct na het installeren), “Totaal, afgelopen 12 maanden” of “Totaal, alle tijd”. De periode bepaalt het bedrag in elke regel, “Transacties: N” en de volgordes “Meest gebruikt” en “Op bedrag”; de datum van de laatste transactie is altijd over alle tijd. Het jaar begint op 1 januari: op 1 januari begint het totaal bij nul.

### Het scherm van een begunstigde {#payees-tags-payee}

Alles over één begunstigde: hoeveel, waaraan en wanneer. “⋮” hernoemt, en de “+” onderaan start een nieuwe transactie met deze begunstigde al ingevuld.

[Scherm van de begunstigde Netflix: periode november 2026, Uitgaventrends, Per categorie, transacties per dag]

(F)
#### Periode

Begint bij de huidige maand. De pijlen bladeren door de maanden, en tikken op de naam opent het blad “Periode”: hetzelfde als in “Rapporten”.

*Hoe het werkt:*
Wil je alles zien wat in een jaar naar een begunstigde ging? Kies een jaar of een eigen bereik, en het scherm toont het volledig: het totaal, de categorieën en alle transacties.

(G)
#### “Uitgaventrends”

Hoeveel er in de periode bij de begunstigde werd uitgegeven en hoeveel gemiddeld per maand.

*Hoe het werkt:*
Uitgaven worden na terugbetalingen geteld. Betaalt de begunstigde vooral jou (een werkgever, een huurder), dan heet het blok “Trends in ontvangsten” en telt het inkomen.

(H)
#### “Per categorie”

Waaraan het geld voor deze begunstigde opging. Verschijnt bij twee of meer categorieën.

*Hoe het werkt:*
Op de schermafbeelding heeft Netflix twee categorieën: internet thuis in “Telefoon en internet” en het abonnement in “Abonnementen”.

(I)
#### Transacties

Alle transacties met deze begunstigde in de periode, per dag.

### Het tabblad “Tags” {#payees-tags-tags}

Labels bovenop categorieën: “#huisje”, “#vakantie”, “#samsam”. Hoe je een tag op een transactie zet — in het artikel [“Boekingen”](#transactions).

[Tabblad Tags: samsam — nog te innen 43, 43 ingezameld van 86; huisje — 118,26, twee transacties]

7. **Tag** — de naam, het totaal over de hele periode van de tag, de periode zelf en het aantal transacties. Bij een tag met “Verrekening” toont de rechterkant hoeveel er nog te innen of terug te geven is.

   *Hoe het werkt:*
   De volgorde is: eerst tags met een openstaande verrekening, dan naar hoe recent de laatste transactie is, en tags zonder transacties aan het eind. Verborgen tags staan samen in een apart blok “Verborgen tags” onderaan.

   Tik — het tagscherm ([hieronder](#payees-tags-tag)). Houd ingedrukt — een menu: “Naam wijzigen”, “Verrekening”, “Verbergen uit keuze”. Veeg naar links om te hernoemen, naar rechts om te verwijderen.

8. **“+ Nieuwe tag”** — een tag met de hand toevoegen. Meestal worden tags meteen in het transactieformulier gemaakt.

### Het tagscherm {#payees-tags-tag}

Alles wat onder één tag ging — hoeveel, waaraan en wanneer. Hier stel je ook “Verrekening” in.

[Tagscherm samsam: 10 november, 2 transacties, nog te innen 43, 50% verrekend, Uitgegeven 86, Ontvangen 43, Per categorie, transacties]

(J)
#### Periode en transacties

De eerste en laatste dag met transacties onder de tag, en hoeveel het er zijn. De totalen van het scherm beslaan de hele periode van de tag.

(K)
#### Verrekening

Staat “Verrekening” aan voor de tag: hoeveel er nog over is om quitte te spelen, en een balk “N% verrekend”.

*Hoe het werkt:*
Verrekenen beantwoordt “wie is wie wat schuldig” voor gedeelde kosten. De app rekent: uitgegeven min ontvangen over de hele periode van de tag.

- **“Nog te innen”** — je gaf meer uit dan je inzamelde. Op de schermafbeelding: een aankoop van € 86 bij “HEMA” werd gedeeld met Andries, hij betaalde € 43 terug — er is nog € 43 over, 50% verrekend.
- **“Terug te geven”** — je zamelde meer in dan je uitgaf: iedereen legde bijvoorbeeld in voor een cadeau, en er bleef wisselgeld over.
- **“Verrekend”** in groen — alles klopt.

Leg geld van een vriend vast als terugbetaling naar de categorie van de aankoop, met dezelfde tag — zoals in het artikel [“Transactieformulier”](#entry), onderdeel “Terugbetaling voor een geretourneerd artikel”. “Verrekening” raakt het budget en de rapporten niet: het is een hulpje voor jou.

(L)
#### “Uitgegeven” en “Ontvangen”

Hoeveel er onder de tag uitging en binnenkwam. Overboekingen tussen je eigen rekeningen tellen niet mee.

(M)
#### “Per categorie”

Waaraan het geld onder deze tag opging. Een tag op één deel van een gesplitst bedrag telt alleen dat deel.

(N)
#### Transacties

Alle transacties met de tag, per dag.

#### Het menu “⋮” van de tag {#payees-tags-tag-menu}

[Menu van de tag: Naam wijzigen, Tonen in Mijn tags, Verrekening aangevinkt, Verbergen uit keuze, Tips, Kennisbank, Verwijderen]

(O)
#### Naam wijzigen

De nieuwe naam verschijnt op alle transacties met de tag. Een naam die al bezet is, accepteert de app niet.

(P)
#### “Tonen in Mijn tags”

Voeg de tag toe aan het blok “Mijn tags” op “Overzicht”. Er zijn vier plaatsen; zijn ze vol, dan is het item grijs en zegt het waarom: “Mijn tags heeft al 4”.

(Q)
#### Verrekening

Zet de berekening “wie is wie wat schuldig” voor deze tag aan of uit.

(R)
#### Verbergen uit keuze

De tag verdwijnt uit het keuzeblad in het formulier, maar blijft op de transacties. Handig voor een vakantie die voorbij is. Bij een verborgen tag staat hier “Terug in keuze”.

(S)
#### Tips

De tips van dit scherm.

(T)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

(U)
#### Verwijderen

De tag wordt van alle transacties gehaald; de transacties zelf blijven. De app vraagt nog eens.

### Wat je met een regel kunt doen {#payees-tags-gestures}

In de regels staan geen knoppen: tik, houd ingedrukt of veeg met je vinger.

| Doe dit | Wat er gebeurt |
|---|---|
| Tik op een begunstigde | Het scherm van de begunstigde. |
| Veeg een begunstigde naar links / rechts | “Bewerken” (hernoemen) / “Verwijderen”. |
| Tik op een tag | Het tagscherm. |
| Houd een tag ingedrukt | Een menu: “Naam wijzigen”, “Verrekening”, “Verbergen uit keuze”. |
| Veeg een tag naar links / rechts | “Bewerken” (hernoemen) / “Verwijderen”. |

## Geplande betalingen {#scheduled}

Huur, abonnementen, je salaris — alles wat terugkomt. De app onthoudt vervaldatums, herinnert je eraan en vult bedrag en categorie zelf in. Geld in het budget beweegt pas als je de betaling bevestigt.

*“Instellingen” → “PLANNING” → “Geplande betalingen”*

### Waarom dit scherm {#scheduled-why}

De helft van de uitgaven van een maand ligt vooraf vast: huur op de 1e, internet op de 5e, een abonnement op de 11e, twee keer per maand salaris. Een geplande betaling is zo'n transactie, één keer en vooraf opgeschreven.

##### Niet vergeten

De app herinnert je met een melding aan de vervaldatum — op de dag van de betaling of vooraf, zoals je het instelt.

##### Niet met de hand typen

De vervaldatum is daar — tik op “Bevestigen”, en de transactie legt zichzelf vast: bedrag, begunstigde, categorie, rekening.

##### Zien wat eraan komt

Komende betalingen staan op “Overzicht” in het blok “Wat eraan komt” en in de “Kalender”. Je ziet waar het geld al aan beloofd is.

Een geplande betaling is nog geen uitgave. Tot je haar bevestigt, veranderen saldi van rekeningen en enveloppen niet: ze herinnert en stelt alleen voor.

### Wat waar staat op het scherm {#scheduled-screen}

Alle geplande betalingen in één lijst, de dichtstbijzijnde vervaldatum bovenaan. Tik op een schermafbeelding om haar schermvullend te openen.

[Scherm Geplande betalingen: Werkgever +1.400 twee keer per maand, Verhuurder −1.200 maandelijks, Eneco, Spotify, Netflix, een streepje −800 jaarlijks met een rode vlag en de notitie Autoverzekering, knop Betaling]

1. **Regel** — één terugkerende betaling. Ze is opgebouwd als een transactieregel: wie en hoeveel, categorie en rekening, hoe ze terugkomt en wanneer ze weer vervalt.

   *Hoe het werkt:*
   De eerste regel is de begunstigde en het bedrag met teken: “−” betekent dat er geld vertrekt, “+” dat er geld binnenkomt. De tweede is de categorie en de rekening. De derde is de frequentie en de dichtstbijzijnde vervaldatum.

   Een betaling zonder begunstigde toont een streepje “———” in plaats van een naam, en de notitie staat op een vierde regel — op de schermafbeelding “Autoverzekering”.

   De lijst is gesorteerd op de dichtstbijzijnde vervaldatum. Betalingen waarvan de vervaldatum al voorbij is, staan hier ook, bovenaan: die wachten op bevestiging — meer daarover [hieronder](#scheduled-due).

2. **Frequentie en datum** — links hoe ze terugkomt, rechts de volgende vervaldatum. Nadat een vervaldatum is ingevoerd of overgeslagen, schuift de datum vanzelf naar de volgende.

3. **Vlag** — dezelfde gekleurde markering als op een transactie. Als de betaling wordt ingevoerd, gaat de vlag mee naar de transactie.

4. **“+ Betaling”** — een nieuwe geplande betaling. De stappen staan [hieronder](#scheduled-new).

Zolang er geen geplande betalingen zijn, is het scherm leeg: “Geen geplande betalingen” en de tip “Huur, abonnementen, salaris — voeg toe met de knop “Betaling””.

### Een nieuwe geplande betaling {#scheduled-new}

Het formulier is hetzelfde als voor een gewone transactie, alleen met een veld “Herhalen”. Tikken op een regel in de lijst opent het ook: dan heet het “Geplande betaling” en bewerk je de bestaande.

[Formulier geplande betaling: Uitgaand, 1.200, Begunstigde Verhuurder, Categorie Huur, Rekening Betaalrekening, Datum, Herhalen Maandelijks, Notitie, Aanvullend, Opslaan]

[Blad Herhalen: Eenmalig, Dagelijks, Wekelijks, Om de 2 weken, Twee keer per maand, Om de 4 weken, Maandelijks, Om de 2 maanden, Om de 3 maanden, Om de 4 maanden, Twee keer per jaar, Jaarlijks]

5. **Bedrag** — typ het op het toetsenblok van de app en tik op “Uitvoeren”. Boven het bedrag — “− Uitgaand” voor een betaling en “+ Inkomend” voor een salaris.

6. **Begunstigde** — aan wie je betaalt of wie jou betaalt.

7. **Categorie** — uit welke envelop het geld gaat. Bij een salaris — het inkomen van de maand.

8. **Rekening** — van welke rekening het wordt afgeschreven of op welke het binnenkomt.

9. **Datum** — de dichtstbijzijnde vervaldatum. Vanaf daar rekent de app de volgende.

10. **“Herhalen”** — hoe vaak: twaalf opties, het blad staat op de tweede schermafbeelding.

    *Hoe het werkt:*
    - **“Eenmalig”** — een betaling zonder herhaling. Als ze is ingevoerd of overgeslagen, verdwijnt ze uit de lijst.
    - **“Twee keer per maand”** — op de vervaldag en 15 dagen daarna: de 3e en de 18e. Bestaat de tweede dag in een maand niet, dan valt de vervaldatum op de laatste dag van de maand.
    - **“Om de 4 weken”** — niet hetzelfde als “Maandelijks”: er zijn 13 vervaldatums per jaar, niet 12, en de datum verschuift elke keer.
    - **“Maandelijks”** en minder vaak — op dezelfde dag van de maand. Bestaat die dag in een maand niet, dan valt de vervaldatum op de laatste dag van de maand en keert ze in de volgende terug: een betaling op de 31e komt op 28 februari, 31 maart, 30 april.

11. **Tags** — dezelfde labels als op transacties. Op de schermafbeelding heeft de huur de tag “appartement”.

12. **“Aanvullend”** — e-bon, foto's en pdf's, “Verwerkt” en de vlag. Op de schermafbeelding is aan de huur een pdf van het huurcontract gekoppeld.

    *Hoe het werkt:*
    Alles wat je hier invult, gaat samen met de tags naar elke transactie die vanuit deze betaling wordt ingevoerd. Tags horen hier thuis: elke huurbetaling komt vanzelf onder de tag “appartement”. Een bijlage daarentegen is meestal maar één keer nodig: het huurcontract hoeft maar aan één transactie te hangen — tik bij het invoeren van de eerste betaling op “Bewerken” en voeg de pdf toe in het formulier. Hier gekoppeld zou het jarenlang als pictogram naast elke betaling staan. Vul bon, foto's en pdf's hier alleen in als elke transactie het document echt nodig heeft.

13. **“Opslaan”** — de betaling verschijnt in de lijst. Staan herinneringen aan, dan herinnert de app je eraan.

##### Hoe je een betaling aanmaakt

1. “Instellingen” → “PLANNING” → “Geplande betalingen”.
2. Tik rechtsonder op “+ Betaling”. “Nieuwe geplande betaling” opent.
3. Typ het bedrag en tik op “Uitvoeren”.
4. Kies de begunstigde, categorie en rekening.
5. “Datum” — de dichtstbijzijnde vervaldatum.
6. “Herhalen” — hoe vaak ze terugkomt.
7. Desgewenst — tags en “Aanvullend”.
8. “Opslaan”.

##### Een geplande overboeking

Een creditcardaflossing, een termijn van een lening, geld naar een spaarrekening — dat is een overboeking tussen je eigen rekeningen. Kies in het veld “Begunstigde” een rekening in het onderdeel “Overboekingen”, en de richting — “Uitgaand” of “Inkomend”, zoals bij een gewone overboeking.

*Een overboeking betekent twee rekeningen:*
- De betaling staat op de schermen van **beide** rekeningen, in het blok “Wat eraan komt”: als min op de betaalrekening, als plus op de lening.
- Op het bevestigingsscherm, in de herinnering en in het weekoverzicht heet ze naar haar route: “Betaalrekening → Lening”.
- “Bevestigen” legt de overboeking in één keer op beide rekeningen vast, zoals het formulier.
- Rekeningen in verschillende valuta — onder de begunstigde verschijnen “Bijgeschreven” en “Koers”: voer de koers meteen bij het aanmaken in. Als de vervaldatum komt, opent “Bevestigen” het formulier met deze getallen — controleer de koers van de dag en sla op.
- Een overboeking naar een rekening buiten het budget (een lening, een deposito) haalt geld uit een envelop — de app vraagt om een categorie, zoals bij een gewone overboeking. Een overboeking tussen budgetrekeningen (betaalrekening → creditcard) heeft geen categorie nodig.
- In de “Kalender” op “Overzicht” wordt een creditcardaflossing niet als uitgave ingekleurd: het geld bleef in het budget. Een termijn van een lening buiten het budget wel.

##### Wat een geplande betaling niet kan hebben

Een gesplitst bedrag: bij het opslaan zegt de app “Geplande splitsingen worden nog niet ondersteund”.

### Vanuit een bestaande transactie {#scheduled-from-txn}

Het snelst maak je een geplande betaling van een transactie die je al vastlegde: het formulier krijgt alles behalve de frequentie.

[Transactieblad Albert Heijn: begunstigde, categorie, rekening, datum, bon, foto; onderaan knoppen Herhalen, Bewerken en Geplande betaling aanmaken]

(14)
##### “Geplande betaling aanmaken”

1. Tik op een transactie in “Boekingen”, op een rekening- of categoriescherm — het transactieblad opent.
2. Onderaan — “Geplande betaling aanmaken”.
3. “Nieuwe geplande betaling” opent met hetzelfde bedrag, dezelfde begunstigde, categorie, rekening, notitie, vlag en tags. E-bon, foto's en pdf's en “Verwerkt” zijn leeg: elke betaling heeft haar eigen. Moet je bijvoorbeeld een contract koppelen? Voeg het hier toe. Bovenop opent meteen het blad “Herhalen” — kies de frequentie.
4. De datum vult zich zelf in — de dichtstbijzijnde vervaldatum na die transactie, maar niet eerder dan vandaag: vanuit een transactie op de 5e begint een maandelijkse betaling op de 5e van volgende maand.
5. “Opslaan”.

Alleen een gewone transactie heeft de knop: een gesplitst bedrag en een overboeking niet.

### Als hij vervalt {#scheduled-due}

Op de vervaldatum begint de betaling te wachten op bevestiging. Ze wordt niet vanzelf ingevoerd: de huur kan een dag te laat betaald zijn, en de energierekening komt elke maand met een ander bedrag. Jij beslist.

[Banner op Overzicht: Geplande betalingen: 2 wachten op bevestiging]
Bovenaan “Overzicht” verschijnt een banner: “Geplande betalingen: 2 wachten op bevestiging”. Tik erop om het bevestigingsscherm te openen.

[Bevestigingsscherm: kaarten Werkgever +1.400 en Verhuurder −1.200, elk met een invoerdatum en pijlen, Overslaan, Bewerken, Bevestigen]

[Dezelfde kaart met de datum een dag verschoven: opschriften verschoven en teruggezet]

(A)
##### Betalingskaart

Wie, hoeveel, categorie, rekening en frequentie. De oudste vervaldatum bovenaan.

(B)
##### Invoerdatum

Begint als de vervaldatum. “‹ ›” schuiven haar een dag eerder of later, en tikken op de datum opent een kalender — een maand naar beide kanten. Na het verschuiven verschijnen “verschoven” en “teruggezet” ernaast (tweede schermafbeelding); “teruggezet” haalt de vervaldatum terug.

(C)
##### “Bevestigen”

De transactie wordt vastgelegd op de gekozen datum en verschijnt in “Boekingen” met alles wat de betaling bevat: tags, bon, foto's en pdf's, de markering “Verwerkt”. De kaart verdwijnt, en de vervaldatum schuift naar de volgende.

*Hoe het werkt:*
De volgende vervaldatum wordt gerekend vanaf de VERVALDATUM, niet vanaf de invoerdatum: huur die op de 1e verviel, werd op de 3e betaald — de volgende vervaldatum is nog steeds de 1e. Anders zou het schema met elke vertraging opschuiven.

(D)
##### “Bewerken”

Als het bedrag deze keer anders is. Het transactieformulier opent met de velden van de betaling — en met haar tags, bon, foto's en pdf's: pas aan en sla op — de transactie wordt vastgelegd, en de vervaldatum is afgesloten. Het formulier gesloten zonder op te slaan? Er veranderde niets.

(E)
##### “Overslaan”

Er was deze keer geen betaling. Er wordt geen transactie vastgelegd, en de vervaldatum schuift naar de volgende. Een betaling “Eenmalig” verdwijnt na overslaan.

*Als er meerdere vervaldatums opgestapeld zijn:*
De app twee maanden niet geopend? Een maandelijkse betaling heeft dan twee vervaldatums achter zich. De kaart toont de oudste; bevestig of sla haar over — de volgende verschijnt, tot je bij vandaag bent. Valt er niets meer af te handelen, dan zegt het scherm “Geen betalingen om te bevestigen”.

Een geplande overboeking wordt als overboeking ingevoerd — op beide rekeningen tegelijk. Staan de rekeningen in verschillende valuta, dan opent “Bevestigen” het formulier met de velden “Bijgeschreven” en “Koers”, ingevuld bij het aanmaken — pas aan naar de koers van de dag en sla op.

### Eerder of later dan gepland {#scheduled-early-late}

Geld komt zelden precies op de dag. Een betaling wordt ingevoerd met de datum waarop ze echt plaatsvond — en de vervaldatum wordt afgesloten: op haar dag komt ze niet opnieuw terug, niet op het bevestigingsscherm en niet als herinnering.

##### Het salaris kwam 2 dagen eerder

De vervaldatum is nog niet gekomen, dus staat het niet op het bevestigingsscherm.

1. “Instellingen” → “PLANNING” → “Geplande betalingen”.
2. Veeg de regel “Werkgever” naar links — “Invoeren” verschijnt. Tik erop.
3. Het transactieformulier opent: bedrag, begunstigde, categorie, rekening, tags — van de betaling, datum — vandaag. Kwam het geld niet vandaag? Tik op het veld “Datum” en kies de dag.
4. “Opslaan”.

Het salaris wordt vastgelegd op de dag dat het binnenkwam. De vervaldatum is afgesloten: op haar dag herinnert de app je niet en vraagt hij niet om bevestiging. De volgende vervaldatum volgt het schema: twee keer per maand — de volgende van de twee dagen, maandelijks — een maand na de vervaldatum, niet na de dag waarop je het vastlegde.

##### De huur werd een dag te laat betaald

De vervaldatum is al voorbij — de betaling wacht op het bevestigingsscherm.

1. Tik op de banner “Geplande betalingen: … wachten op bevestiging” op “Overzicht”.
2. Tik in de kaart van de betaling op “›” — de invoerdatum schuift een dag later. Tik op de datum zelf voor een kalender.
3. “Bevestigen”.

De transactie wordt vastgelegd op de dag dat je betaalde. De volgende vervaldatum blijft op schema — de 1e, niet de 2e.

##### Het bedrag is deze keer anders

De energierekening is elke maand anders. De vervaldatum is daar — “Bewerken” in de kaart op het bevestigingsscherm; nog niet — “Invoeren” in de lijst. Corrigeer het bedrag in het formulier en tik op “Opslaan”: de transactie wordt vastgelegd met het nieuwe bedrag, en de geplande betaling houdt het oude.

### Wat je met een regel kunt doen {#scheduled-gestures}

In de regel staan geen knoppen. Je veegt de regel met je vinger opzij — naar een knop die eronder tevoorschijn komt.

[Regel Eneco naar links geveegd: knop Invoeren]

[Regel Eneco naar rechts geveegd: rode knop Verwijderen]

| Doe dit | Wat er gebeurt |
|---|---|
| Tik op de regel | Het formulier “Geplande betaling”: wijzig bedrag, datum, frequentie — wat je wilt. “Opslaan”. |
| Veeg naar links | “Invoeren” — voer de dichtstbijzijnde vervaldatum nu meteen in: je betaalde de huur vooruit, het geld kwam vroeg. Een nieuw transactieformulier opent met de velden van de betaling en de datum van vandaag. Na het opslaan is de transactie vastgelegd, deze vervaldatum afgesloten, en volgt de volgende het schema. |
| Veeg naar rechts | “Verwijderen” — na de vraag “Geplande betaling verwijderen?”. Transacties die al vanuit deze betaling werden vastgelegd, blijven. |

### Herinneringen {#scheduled-reminders}

De app herinnert je met een melding aan een vervaldatum: “Vandaag: …”, “Morgen: …” of “Over 3 dagen: …”. Wanneer hij je herinnert — op de dag van de betaling, een dag, 2 of 3 dagen vooraf, of een week vooraf —, hoe laat, en of bedragen op het vergrendelscherm verborgen worden, staat in [“Instellingen” → “Herinneringen”](#settings-reminders).

### Waar geplande betalingen nog meer verschijnen {#scheduled-elsewhere}

**“Overzicht”** — het blok “Wat eraan komt”: komende betalingen met data, en de “Kalender” in de modus “Gepland”: komende vervaldatums, ingevoerde en niet ingevoerde. Meer in het artikel [“Overzicht”](#overview-heatmap).

**Rekeningscherm** — boven de stroom een kaart “Wat eraan komt”: de geplande betalingen van deze rekening. Tikken op een regel opent “Geplande betalingen”.

**“Doelen”** — heeft een categorie een geplande betaling, dan stelt de doelkaart “Uit de geplande betaling: …” voor. Meer in het artikel [“Doelen”](#goals-new).

**Weekoverzicht** — staat het aan, dan bevat het de komende geplande betalingen. Meer in [“Instellingen” → “Herinneringen”](#settings-reminders).

## Cloud en back-ups {#sync}

Hoe je je budget niet kwijtraakt, en hoe je het op meerdere apparaten bijhoudt.

*“Instellingen” → onderdeel “SYNCHRONISATIE”*

### Waarom dit allemaal {#sync-why}

Het budget staat op je telefoon. Dit onderdeel van de instellingen beantwoordt drie vragen.

**“Mijn telefoon viel in het meer”** — drie jaar budget mogen niet mee zinken. [Back-ups](#sync-backups) en de cloud helpen: een nieuwe telefoon [laadt het budget uit de cloud](#sync-restore).

**“We houden het budget samen bij”** — of alleen jij, maar met een telefoon en een computer. Alle apparaten kijken naar één cloud en wisselen wijzigingen uit: dat is [synchronisatie](#sync-sync).

**“Gisteren heb ik alles verpest”** — de verkeerde rekening verwijderd, het verkeerde bestand geïmporteerd. De app maakt zelf [back-ups volgens een schema](#sync-backups), en je kunt ernaar terug.

**Waar beginnen.** Drie stappen zijn genoeg:

1. [Koppel een cloud](#sync-auth) — Google Drive, Dropbox of WebDAV (Nextcloud, ownCloud, pCloud, je eigen server).
2. [Stel een wachtwoord in](#sync-password) als je niet wilt dat iemand anders je gegevens in de cloud kan lezen. Schrijf het op.
3. Dat is alles. Synchronisatie en back-ups lopen vanaf dan vanzelf: elke keer dat je de app opent.

### Autorisatie: een cloud koppelen {#sync-auth}

Hier log je in bij een cloud. Er zijn er drie, en je kunt er één of meerdere koppelen. Op de schermafbeelding is Dropbox al gekoppeld, terwijl Google Drive en WebDAV dat nog niet zijn: zo zie je beide soorten blokken.

[Scherm Autorisatie: Cloudversleuteling, Google Drive met een knop Inloggen met Google, Dropbox met een gekoppeld account, WebDAV met velden voor adres, gebruikersnaam en wachtwoord]

(1)
**Cloudversleuteling** — hetzelfde blok als op de schermen “Synchronisatie” en “Back-ups”. Het wachtwoord stel je één keer in — uitgelegd [hieronder](#sync-password).

(2)
**Google Drive** — “Inloggen met Google” — en kies een account. Het budget gaat naar een map “My budget” op je Google Drive.

*Hoe het werkt:*
Na het inloggen vervangt een accountplaatje de knop: naam, e-mail, tijd van de laatste synchronisatie en “Uitloggen”. Op Google Drive ziet de app alleen wat hij zelf aanmaakte: andere bestanden zijn voor hem niet toegankelijk.

(3)
**Dropbox** — “Inloggen met Dropbox” opent de inlogpagina van Dropbox in de browser. Daar kun je op twee manieren inloggen: met het e-mailadres en wachtwoord van Dropbox, of met de knop “Doorgaan met Google”. Geef toegang — en de browser brengt je terug naar de app. Het budget gaat naar een map “My budget”.

*Waarom e-mail en wachtwoord van Dropbox beter zijn:*
Inloggen via Google koppelt Dropbox aan het Google-account waarmee je inlogde. Een tweede apparaat, of een tweede persoon met een ander Google-account, komt zo makkelijk in een andere Dropbox terecht waar je budget niet staat. E-mail en wachtwoord van Dropbox werken hetzelfde op elke telefoon en computer, bij iedereen met wie je het budget bijhoudt.

*Een reserveroute, als je niet terug in de app kwam:*
Meestal volstaat de gewone aanmelding — met de terugkeer vanuit de browser. Brengt de browser je niet terug naar de app, klap dan “Lukt inloggen niet?” uit → “Inloggen met een code (als je niet terugkwam in de app)”: Dropbox toont een code, plak die in het venster van de app.

De schermafbeelding toont een gekoppelde Dropbox: een accountplaatje met “Uitloggen” en “Nu synchroniseren”. “Dropbox-token vernieuwen” op dezelfde plek is ook een reserve-uitgang: alleen als inloggen ineens niet meer werkt.

(4)
**WebDAV** — je eigen server of een cloud die WebDAV spreekt: Nextcloud, ownCloud, pCloud, Yandex Disk en andere. Je hebt een adres, een gebruikersnaam en een wachtwoord nodig — inloggen bij een persoonlijk account is niet nodig.

*Hoe het werkt:*
Staat in de cloud tweefactorbeveiliging aan, dan accepteert de server je gewone wachtwoord niet: maak in de instellingen van de cloud een “app-wachtwoord” aan en voer dat in. Begin het adres met `https://` — met `http://` gaan gebruikersnaam en wachtwoord als platte tekst over het netwerk, en de app waarschuwt daarvoor.

**De hoofdregel: één cloudaccount voor alle apparaten**

De telefoon, tablet en computer die één budget bijhouden, loggen bij de cloud in met **hetzelfde** account. Anders schrijft elk apparaat naar zijn eigen cloud, en zien ze elkaars wijzigingen niet.

*En als we in het gezin verschillende Google-accounts hebben?:*
Maak voor het budget een **apart, nieuw Google-account** en log alleen daarmee, op alle apparaten, in bij de cloud van de app. Log op de telefoon van je vrouw niet in met je eigen persoonlijke account, en op de jouwe niet met het hare: de telefoon gaat dan contacten, berichten en foto's met dat account synchroniseren, en de persoonlijke gegevens van twee mensen raken door elkaar. Een apart account voor het budget kent alleen het budget.

**Dropbox** — log in met je **e-mail en wachtwoord** van Dropbox, niet met de knop “Doorgaan met Google”. Inloggen via Google koppelt Dropbox aan het Google-account waarmee je inlogde — en op een apparaat met een ander Google-account kom je makkelijk in een andere Dropbox terecht waar je budget niet staat.

**WebDAV** — op alle apparaten hetzelfde adres, dezelfde gebruikersnaam en hetzelfde wachtwoord.

### Synchronisatie {#sync-sync}

Wijzigingen uitwisselen tussen dit apparaat en de cloud, en via de cloud — met je andere apparaten. Een aankoop op de telefoon ingevoerd — een minuut later staat ze op de computer.

[Scherm Synchronisatie: Cloudversleuteling, status Gesynchroniseerd (Dropbox), cloudkeuze Dropbox, schakelaars Foto's synchroniseren en Automatische back-up naar de cloud vanaf dit apparaat, knop Nu synchroniseren]

(1)
**Cloudversleuteling** — een wachtwoord op alles wat naar de cloud gaat. Uitgelegd [hieronder](#sync-password).

(2)
**Status** — hoe de laatste synchronisatie afliep: “Gesynchroniseerd (Dropbox)” in groen, een fout in rood, met een knop “Probleem melden”.

(3)
**Cloud** — zijn er meerdere clouds gekoppeld, kies dan met welke je synchroniseert. Geen cloud — op deze plek staat “Er zijn geen clouds gekoppeld…” en waar je er een koppelt.

*Hoe het werkt:*
Alle apparaten synchroniseren via ÉÉN cloud. De app ververst de andere gekoppelde clouds ook om de paar dagen — voor het geval de hoofdcloud onbereikbaar wordt.

(4)
**Foto's synchroniseren** — bonfoto's en pdf's gaan naar de cloud, naar de map van het budget, en verschijnen op andere apparaten. **Direct na het installeren:** uit.

*Hoe het werkt:*
Zonder deze schakelaar komen transacties op het tweede apparaat aan met een fotomarkering, maar zonder de afbeelding zelf. Elke foto neemt ruimte in de cloud in; bekijk je bonnen alleen op de telefoon waarmee je ze maakte, dan hoeft het niet aan. Is er een wachtwoord ingesteld, dan worden foto's versleuteld geüpload.

(5)
**Automatische back-up naar de cloud vanaf dit apparaat** — elke automatische back-up van het budget gaat ook naar de cloud. **Direct na het installeren:** aan.

*Hoe het werkt:*
Houden twee apparaten het budget bij, dan maken ze allebei cloudback-ups — en krijg je dubbele. Laat de schakelaar op één apparaat aan en zet hem op de andere uit. Wil je dat de cloudback-up alle bonfoto's bevat, zet dan ook “Foto's synchroniseren” aan: anders gaan alleen de foto's van dit apparaat mee in de back-up.

(6)
**Nu synchroniseren** — nu meteen synchroniseren. Meestal hoef je er niet op te tikken — de app doet het zelf, zie hieronder.

#### Wanneer de app zelf synchroniseert {#sync-when}

**Elke keer dat je hem opent** — een paar seconden nadat je terugkomt in de app. Daarom hoef je bijna nooit met de hand te synchroniseren.

**Niet bij het minimaliseren** — Android laat een app na het minimaliseren niet doorwerken. Wijzigingen van vóór het minimaliseren gaan de volgende keer dat je de app opent. Wil je ze meteen versturen? Tik op het synchronisatiepictogram op “Overzicht”.

**Het pictogram op “Overzicht”** — rechtsboven. Het getal erop is hoeveel wijzigingen nog niet naar de cloud zijn gestuurd. Tikken synchroniseert meteen.

*Hoe het werkt:*
Na elke synchronisatie licht het pictogram 15 seconden op: groen (gelukt) of rood (niet gelukt). Eén mislukking is meestal het netwerk: de metro, een huisje in het bos. Mislukken vier synchronisaties achter elkaar, dan blijft het pictogram rood tot de volgende lukt — dan is er iets stuk, en is het de moeite waard dit scherm te openen. Houd het pictogram ingedrukt om de fouttekst te zien.

Over automatische synchronisaties zwijgt de app. Het bericht “Gesynchroniseerd” verschijnt alleen als je de synchronisatie zelf startte.

#### Als er iets misgaat {#sync-trouble}

Op het scherm “Synchronisatie” verschijnt een kaart: wat er gebeurde en wat te doen. Dit zijn de soorten.

**“Het budget “…” bestaat al in de cloud met gegevens”** — met de knoppen “Uit de cloud” en “Samenvoegen” onder de kaart.

**Wat er gebeurde.** Je koppelde een cloud, en daarin staat al een budget met **dezelfde naam** als het budget op dit apparaat — en beide hebben al gegevens. Meestal is dit een tweede telefoon: iemand voegde er eerst rekeningen of een paar aankopen aan toe, en koppelde pas daarna de cloud van de eerste telefoon. De app kan niet weten of het één budget is of twee verschillende met dezelfde naam, dus raakt hij niets aan en wacht hij op je antwoord. Hij vraagt het één keer — bij de eerste synchronisatie van dit budget.

**Wat kiezen:**

- **Dit is een tweede apparaat voor hetzelfde budget** — tik op **“Uit de cloud”**, dan op “Laden”. Dit apparaat krijgt het hele budget uit de cloud, en wat je hier invoerde, gaat verloren — voer het opnieuw in. Dit antwoord heb je het vaakst nodig.
- **Je hield echt één budget apart op twee apparaten bij** en wilt alles samenbrengen — tik op **“Samenvoegen”**. Alles telt op: wat je hier invoerde en wat er in de cloud staat. Maar rekeningen en categorieën die je op elk apparaat apart aanmaakte, komen naast elkaar te staan — twee “Betaalrekening”-rekeningen, twee begunstigden “Café de Hoek” — en de overbodige moet je met de hand opruimen.
- **Het zijn twee verschillende budgetten** die toevallig dezelfde naam hebben — bijvoorbeeld dat van jou en dat van je partner, allebei “Mijn budget”. Tik op geen van beide knoppen. Hernoem het budget op dit apparaat: tik op de naam van het budget in de kop van “Overzicht” → de “⋮” naast dit budget → “Naam wijzigen”. Met de nieuwe naam krijgt het een eigen map in de cloud en synchroniseert het apart.

Twijfel je? Maak eerst een back-up: “Back-ups” → “Nu een back-up maken” → “Apparaat”. Blijkt de keuze verkeerd, dan kun je ernaar terug.

**“De cloud is met een wachtwoord beveiligd”** — de gegevens in de cloud zijn versleuteld met een wachtwoord dat op een ander apparaat is ingesteld, en hier is het niet of anders ingesteld. De gegevens zijn heel. “Wachtwoord invoeren” — voer hetzelfde wachtwoord in, en de synchronisatie gaat verder.

*Hoe het werkt:*
“Wachtwoord kwijt” is een laatste redmiddel: het bestand in de cloud wordt vervangen door de gegevens van dit apparaat, en de versleuteling wordt verwijderd. De gegevens van andere apparaten gaan niet verloren — hun wijzigingen komen bij hun volgende synchronisatie terug. Vóór het vervangen maakt de app back-ups, en bewaart hij het oude versleutelde bestand ernaast — voor het geval je het wachtwoord toch nog weet.

**“De cloud is niet versleuteld”** — op dit apparaat is een wachtwoord ingesteld, maar de gegevens in de cloud zijn open: de versleuteling werd op een ander apparaat verwijderd. Jij beslist: “Cloud versleutelen” — dan moeten de andere apparaten hetzelfde wachtwoord invoeren — of “Wachtwoord hier verwijderen”.

**“Het synchronisatiebestand in de cloud is onleesbaar”** — het bestand in de cloud is beschadigd en herstelt zich niet vanzelf. “Cloud herstellen” maakt verse back-ups van het budget en overschrijft het cloudbestand met de gegevens van dit apparaat.

*Hoe het werkt:*
Wijzigingen van een ander apparaat die dit apparaat nog niet bereikt hadden, staan alleen nog in het beschadigde bestand — een kopie ervan wordt naast de back-ups bewaard. Werkt het tweede apparaat, dan brengt het zijn gegevens bij zijn volgende synchronisatie terug.

**“Foto's uit de cloud niet ontsleuteld: N”** — de gegevens kwamen aan, de foto's niet: ze zijn versleuteld met een wachtwoord dat hier niet of anders is ingesteld. Stel hetzelfde wachtwoord in als op het andere apparaat — de foto's komen bij de volgende synchronisatie.

**“Conflict”** — hetzelfde record werd op twee apparaten gewijzigd. De kaart toont hoe de versies verschillen: “Behouden” houdt de versie van dit apparaat, “Overnemen” neemt die van de cloud.

### Cloudversleuteling: het wachtwoord {#sync-password}

Het blok “Cloudversleuteling” staat als eerste op de schermen “Autorisatie”, “Synchronisatie” en “Back-ups”. Het is één en hetzelfde wachtwoord.

**Wat het afsluit** — alles wat naar de cloud gaat: back-ups, bonfoto's en het synchronisatiebestand. De versleuteling is AES-256. Zonder wachtwoord kan iedereen met toegang tot de cloudmap deze bestanden lezen.

**Hoe je het instelt** — tik op “Wachtwoord instellen”.

*Stap voor stap:*
1. Het venster “Versleutelingswachtwoord” opent.
2. Voer het wachtwoord in bij “Wachtwoord” en nog eens bij “Herhaal het wachtwoord” — minstens 4 tekens.
3. Vink “Ik heb het wachtwoord op een veilige plek opgeschreven” aan — anders kun je niet op “Opslaan” tikken.
4. “Opslaan”. Het blok wordt “De cloud is met een wachtwoord beveiligd”.

**Op andere apparaten** — stel **hetzelfde** wachtwoord in. Het wachtwoord synchroniseert niet en gaat noch naar de cloud, noch naar de ontwikkelaar — het staat alleen op het apparaat. Met verschillende wachtwoorden stopt de synchronisatie met de kaart “De cloud is met een wachtwoord beveiligd”.

**Vergeet je het wachtwoord, dan kan niemand de cloudback-ups herstellen.** Jij niet, de ontwikkelaar niet, op geen enkele manier. Schrijf het op waar je je andere belangrijke wachtwoorden bewaart.

**Wijzigen of verwijderen** — tik in het blok op “Bewerken” — “Wachtwoord wijzigen” of “Versleuteling uitzetten”. Wijzig het wachtwoord op alle apparaten: houdt er één het oude, dan kan dat de cloud niet meer lezen.

**Back-ups op de telefoon worden niet versleuteld** — ze staan naast de database van het budget zelf, en die is open. Daarom dragen back-ups “Apparaat” in de lijst, zodra er een wachtwoord is, het label “Niet versleuteld” — zodat je niet denkt dat alles op slot zit.

### Back-ups {#sync-backups}

Een back-up is het hele budget op een bepaald moment: rekeningen, categorieën, transacties, doelen, geplande betalingen en foto's. De app maakt back-ups zelf; hier kom je als je terug moet.

[Scherm Back-ups: Nu een back-up maken, Laatste back-up, Cloudversleuteling, Back-upschema, filters Alle, Apparaat, Dropbox, een lijst van zeven back-ups]

(1)
**Nu een back-up maken** — nu meteen een back-up, bijvoorbeeld vóór een import of een grote opruimbeurt. De app vraagt “Waar de back-up opslaan?” — schermafbeelding [hieronder](#sync-where).

(2)
**“Laatste back-up: …”** — wanneer de meest recente back-up van dit budget werd gemaakt. Is dat lang geleden, dan wordt de regel geel.

(3)
**Cloudversleuteling** — hetzelfde wachtwoord als op “Synchronisatie” — [hierboven](#sync-password).

(4)
**Back-upschema** — hoe vaak de app back-ups maakt en hoeveel hij bewaart. Tik om uit te klappen — [hieronder](#sync-schedule).

(5)
**Filters** — “Alle”, “Apparaat” en een chip voor elke gekoppelde cloud. Het getal is hoeveel back-ups daar staan. Geen clouds gekoppeld — geen filters: er valt niets te filteren.

(6)
**Back-up** — datum en tijd, waar ze staat, wat voor soort het is en van welk budget.

*Hoe het werkt:*
Onder de datum — waar ze staat (“Apparaat”, “Dropbox”…) en haar soort: “Auto, frequent”, “Auto, zeldzaam” of “Handmatig”. Daaronder — de naam van het budget, hoeveel posten, foto's en pdf's er in de back-up zitten, en de bestandsgrootte.

Het pictogram klok-met-pijl — **het budget terugzetten naar deze back-up**. De prullenbak — de back-up verwijderen (de app vraagt nog eens).

(7)
**Het menu “⋮”** — “Herstellen uit een bestand”, “Leesbare kopie”, “Tips” — [hieronder](#sync-menu).

#### Hoe je het budget terugzet naar een back-up {#sync-back}

1. Zoek de back-up van de dag die je nodig hebt. Weet je niet welke? Neem de laatste van voordat het misging.
2. Tik op het pictogram klok-met-pijl in de regel.
3. Het venster “De gegevens herstellen?”: “De gegevens worden hersteld uit … De huidige gegevens worden vervangen.” — tik op “Herstellen”.
4. Onderaan verschijnt “Hersteld vanaf …”. Het budget is nu zoals het was op het moment van de back-up.

**Is er een cloud gekoppeld, dan is één keer terugzetten niet genoeg.**

Een back-up zet je terug om van recente wijzigingen af te komen: de verkeerde rekening verwijderd, het verkeerde bestand geïmporteerd. Maar terugzetten verandert het budget alleen op deze telefoon. In de cloud staat het budget nog met precies die wijzigingen, en bij het synchroniseren voegt de app telefoon en cloud samen, waarbij de recentere wijziging wint. Tik op “Nu synchroniseren” — en alles waar je vanaf wilde, is binnen een halve minuut terug uit de cloud.

Om het terugzetten blijvend te maken, moet de cloud vervangen worden door het teruggezette budget. Hoe — hieronder.

#### Ook de cloud terugzetten {#sync-rollback}

Het budget staat op één telefoon — deze stappen zijn genoeg. De volgorde doet ertoe.

1. **Zet de back-up terug** — de stappen hierboven. Tik daarna **niet op “Nu synchroniseren”**.
2. **Verlaat de app** met de Home-knop. Zolang de app geminimaliseerd is, synchroniseert hij niet.
3. **Verwijder het synchronisatiebestand in de cloud.** Open de cloud in een browser: de map “My budget” → de map met de naam van het budget → het bestand `ynab_budget_sync.json`. Verwijder alleen dat — laat de mappen met back-ups en foto's met rust. In Dropbox staat de map “My budget” in “Apps” → “My Budget Envelopes”.
4. **Ga terug naar de app.** Een paar seconden later synchroniseert hij vanzelf, vindt hij geen bestand in de cloud en zet hij het teruggezette budget daar. Op het scherm “Synchronisatie” hoort “Gesynchroniseerd” te staan.

*Waarom eerst terugzetten en daarna het bestand verwijderen:*
Elke keer dat je terugkomt in de app, synchroniseert hij een paar seconden later. Verwijder je eerst het bestand, dan zet de app bij je terugkomst uit de browser meteen het huidige budget — nog met die wijzigingen — in de cloud. Dan moet je helemaal opnieuw beginnen.

#### Als meerdere apparaten het budget bijhouden {#sync-rollback-devices}

De tweede telefoon en de computer hebben die wijzigingen ook. Bij hun synchronisatie zetten ze die terug in de cloud, en vandaar — weer naar jou. Daarom moet elk ander apparaat zijn gegevens vergeten en het budget opnieuw uit de cloud halen — voordat het de kans krijgt te synchroniseren.

1. Zet op één apparaat het budget en de cloud terug — de stappen hierboven.
2. Zet op de andere telefoon **de vliegtuigmodus aan** en open pas daarna de app: zonder netwerk synchroniseert hij niet.
3. “Instellingen” → “Over de app” → “Alle gegevens wissen”.
4. **Zet de vliegtuigmodus uit.** De app synchroniseert en laadt het al teruggezette budget uit de cloud.

Op een computer — hetzelfde: verbreek de internetverbinding voordat je het programma start, wis de gegevens in de instellingen, maak weer verbinding. Wijzigingen op deze apparaten die de cloud nog niet hadden bereikt, gaan bij het wissen verloren.

#### Back-upschema {#sync-schedule}

De app maakt zelf een back-up als dat aan de beurt is — als je de app opent en als je naar een ander budget wisselt. Elk budget heeft een eigen schema. Er zijn twee soorten back-ups: frequente — om een paar dagen terug te gaan, en zeldzame — om maanden terug te gaan.

[Back-upschema in de modus Eigen: frequente back-ups om de 5 dagen, 7 bewaren; zeldzame eens per maand, 12 bewaren; Hoe ver terug: frequente ongeveer 35 dagen, zeldzame tot 12 maanden]
**“Eigen”.** Dezelfde keuzes als “Standaard”.

**Standaard** — frequente back-ups om de 5 dagen, de laatste 7 worden bewaard — dat is ongeveer 35 dagen terug; zeldzame — eens per maand, 12 worden bewaard — tot een jaar terug.

**Eigen** — frequente — elke dag of om de 2, 3, 5, 7 dagen, bewaar er 3, 5, 7, 10, 14 of 30; zeldzame — eens per maand of eens per kwartaal, bewaar er 3, 4, 6, 12 of 24 — of “Niet maken”.

**“Hoe ver terug”** — de app rekent uit hoeveel dagen en maanden je met het gekozen schema terug kunt.

**Waarschuwingen** — houden frequente back-ups op voordat een zeldzame begint, dan toont de app “Tussen … en … dagen zijn er misschien geen kopieën” met knoppen die het gat dichten. Kies je “Niet maken” voor zeldzame, dan waarschuwt hij dat er geen back-ups ouder dan een paar dagen zullen zijn.

**Oude back-ups worden verwijderd** — verlaag je hoeveel er bewaard worden, dan worden de overbodige back-ups bij de volgende automatische back-up verwijderd — zowel op de telefoon als in de cloud. Daarom vraagt “Opslaan” eerst: hoeveel er verwijderd worden, en de datum van de oudste.

**Handmatige back-ups** — worden onbeperkt bewaard: het schema raakt ze niet aan. Het schema geldt voor dit apparaat en synchroniseert niet.

**De automatische back-up mislukte twee keer achter elkaar** — op “Overzicht” verschijnt een waarschuwing “Automatische back-up mislukt” met de reden (bijvoorbeeld te weinig ruimte) en een knop “Nu back-uppen”.

#### “Waar de back-up opslaan?” {#sync-where}

“Nu een back-up maken” vraagt dit.

[Blad Waar de back-up opslaan: Apparaat, Bestand op de telefoon, Google Drive, Dropbox, WebDAV]

**Apparaat** — in de back-upmap van de app. De back-up verschijnt in de lijst.

**Bestand op de telefoon** — kies een map — bijvoorbeeld “Downloads” — en bewaar de back-up als bestand. Je kunt het naar jezelf sturen of op een computer zetten. Is er een wachtwoord ingesteld, dan wordt het bestand versleuteld.

**Google Drive, Dropbox, WebDAV** — de back-up gaat meteen naar de cloud. Cloud niet gekoppeld? De app zegt waar je hem koppelt.

#### Het menu “⋮” {#sync-menu}

[Menu van het scherm Back-ups: Herstellen uit een bestand, Leesbare kopie, Tips, Kennisbank]

[Blad Leesbare kopie: Archief met foto’s en pdf’s, Alleen gegevens, Een bestand uit de cloud]

(A)
#### Herstellen uit een bestand

het budget terughalen uit een back-upbestand dat niet in de lijst staat: gedownload uit de cloud, naar jezelf gestuurd, opgeslagen in “Downloads”.

*Hoe het werkt:*
Een back-up (`.y4zip`), een “Leesbare kopie” en zelfs het synchronisatiebestand `ynab_budget_sync.json`, met de browser uit de cloud gedownload, werken allemaal. Is het bestand versleuteld, dan vraagt de app om het wachtwoord. Komt de back-up van een ander budget (geen enkele gedeelde rekening), dan vraagt de app nog eens: “Dit lijkt een ander budget”. Een bestand uit YNAB 4 hoort hier niet — dat zet je over met “Importeren uit YNAB” in de instellingen.

(B)
#### Leesbare kopie

je gegevens als een bestand dat elk programma zonder wachtwoord kan openen. Bewaar het waar vreemden niet kijken.

*Hoe het werkt:*
Drie opties:

- **Archief met foto’s en pdf’s** — dit budget volledig; elk archiefprogramma opent het.
- **Alleen gegevens** — dit budget als één tekstbestand; elke teksteditor opent het. E-bonnen staan erin, foto's en pdf's niet.
- **Een bestand uit de cloud** — wachtwoord en compressie verwijderen van een synchronisatiebestand of cloudback-up die je met de browser uit de cloud downloadde.

Het is een weg naar je gegevens buiten de app om: ook zonder de app blijft het budget van jou.

(C)
#### Tips

de tips van dit scherm als lijst.

(D)
#### Kennisbank

Dit artikel op de website: het opent in de browser, in de taal van de app.

### Een budget uit de cloud laden {#sync-restore}

Een nieuwe telefoon, een herinstallatie of een tweede apparaat. Het budget staat in de cloud onder zijn naam; dit scherm vindt het en laadt het hierheen. De optie “Ik heb al een budget” in de wizard bij de eerste keer openen opent hetzelfde scherm.

[Scherm Budget uit de cloud laden: stap 1 Verbind een cloud met een knop Verbinden, stap 2 Naam van het budget]

(1)
**Verbind een cloud** — dezelfde als op het eerste apparaat: dezelfde Google Drive, Dropbox of WebDAV en **hetzelfde account**.

(2)
**Kies een budget** — de app toont de budgetten in de cloud met de datum van hun laatste synchronisatie. Tik op het jouwe en op “Budget laden”.

*Hoe het werkt:*
Geen lijst, of staat je budget er niet in? Tik op “Naam met de hand invoeren” en typ de naam precies zoals hij op het eerste apparaat heet: de naam van het budget is het adres van zijn map in de cloud. Hoofdletters maken niet uit. De naam staat op het eerste apparaat in de kop van “Overzicht”.

Staan er op dit apparaat al gegevens, dan vraagt de app nog eens: “Gegevens vervangen door die uit de cloud?”: alles wat niet in de cloud staat, gaat verloren.

**Wachtwoord** — is er op het eerste apparaat een wachtwoord ingesteld, stel dan hier hetzelfde in. Zonder stopt de synchronisatie, en komen bonfoto's wel aan maar gaan ze niet open.

### Lokale overdracht: zonder cloud {#sync-local}

Een budget rechtstreeks tussen je eigen apparaten verplaatsen — als bestand of via wifi. Geen internet en geen accounts. Het is een eenmalige overdracht, geen doorlopende synchronisatie.

[Scherm Lokale overdracht: een blok Bestand met knoppen Exporteren en Importeren, een blok WiFi met de rollen versturen en ontvangen]

(1)
**Bestand** — “Exporteren” — de gegevens van het budget als bestand: stuur het via een messenger, per e-mail of op een usb-stick. Op het andere apparaat — “Importeren” en kies dat bestand.

*Hoe het werkt:*
Importeren **voegt** de gegevens uit het bestand **samen** met wat er al staat, en verschilt hetzelfde record, dan neemt het de versie uit het bestand. Foto's gaan niet mee in het bestand. Alles inclusief foto's verplaatsen — via wifi of een [back-up](#sync-backups) (“Archief met foto’s en pdf’s”).

(2)
**WiFi (lokaal netwerk)** — beide apparaten op hetzelfde wifinetwerk. Het ene verstuurt de gegevens, het andere ontvangt ze en stuurt met “Samenvoegen” zijn eigen wijzigingen terug. Foto's gaan ook mee.

*Hoe het werkt:*
1. Op het verzendende apparaat: “Server starten”. Er verschijnen een QR-code en een bevestigingscode van 6 cijfers.
2. Op het ontvangende: “QR scannen” — de code vult beide velden. Of voer het IP-adres en de code met de hand in.
3. “Gegevens ontvangen”. De app vraagt “Hoe de gegevens toepassen?”: “Samenvoegen” — zoals een gewone synchronisatie in beide richtingen: de wijzigingen van dit apparaat gaan ook naar het verzendende, er gaat niets verloren; “Volledig vervangen” — dit budget wordt een exacte kopie van het verzendende, en alles wat hier niet gesynchroniseerd is, gaat verloren. “Vervangen” is voor een nieuw apparaat.
4. Op het verzendende apparaat — “Server stoppen”.

De overdracht wordt versleuteld met de bevestigingscode, en de code zelf gaat nooit over het netwerk.

## Instellingen {#settings}

Wat elke regel doet en waarop hij direct na het installeren staat.

*Het tandwiel linksboven op “Overzicht”*

De onderdelen staan in de volgorde waarin je ze nodig hebt: het vaakst gebruikte bovenaan.

### Planning {#settings-s-plan}

Alles wat terugkomt: vaste betalingen en herinneringen.

[Onderdeel Planning: Geplande betalingen, Herinneringen]

**Geplande betalingen** — huur, abonnementen, een salaris — alles wat terugkomt. Op de dag zelf biedt de app aan de betaling met één tik in te voeren, en “Wat eraan komt” op “Overzicht” toont de komende.

**Herinneringen** — wanneer en waarover de app je een melding stuurt. Een eigen scherm — [hieronder](#settings-reminders).

#### Het scherm “Herinneringen” {#settings-reminders}

[Scherm Herinneringen: Geplande betalingen, Uitgaven van de dag, Weekoverzicht, Alle herinneringen]

**Geplande betalingen** — “Wanneer herinneren” — op de dag van de betaling, 1, 2 of 3 dagen vooraf, of een week vooraf; “Tijd van de herinnering”; “Bedragen verbergen in meldingen” — de herinnering staat op het vergrendelscherm, en zonder deze schakelaar kan iedereen die je telefoon oppakt het bedrag lezen. **Direct na het installeren:** de dag ervoor, om 09:00, bedragen zichtbaar.

**Uitgaven van de dag** — “Herinner me aan het invoeren van uitgaven” — 's avonds, als je vandaag niets hebt vastgelegd. Heb je dat wel gedaan, dan zwijgt hij. **Direct na het installeren:** uit, om 21:00.

**Weekoverzicht** — “Overzicht sturen” — op de laatste dag van de week: hoeveel er werd uitgegeven en waaraan het meest, welke categorieën opraken, welke geplande betalingen eraan komen. **Direct na het installeren:** uit.

**Alle herinneringen** — “Herinneringen op de exacte tijd”. Zonder toestemming mag Android een herinnering te laat bezorgen. De schakelaar opent de Android-instellingen waar die toestemming wordt gegeven.

### Gegevens {#settings-s-data}

De lijsten van het budget en gegevens uitwisselen met andere programma's.

[Onderdeel Gegevens: Begunstigden, Tags, Exporteren naar CSV, Importeren uit YNAB, Inbox]

**Begunstigden en Tags** — lijsten die vanzelf groeien terwijl je transacties vastlegt. Alles erover — in het artikel [“Begunstigden en tags”](#payees-tags).

**Exporteren naar CSV** — alle transacties van het huidige budget als spreadsheetbestand — om te openen in Excel of Google Spreadsheets.

*Meer:*
In het bestand staat alles wat een transactie heeft: datum, rekening, begunstigde, categorie en haar groep, bedrag en valuta, “verwerkt”, notitie, de delen van een gesplitst bedrag, overboeking, tags, vlag, e-bonnen, de budgetmaand (bij een salaris dat “voor volgende maand” werd vastgelegd — de maand waarvoor het opzijstaat), en bij een overboeking tussen valuta — hoeveel er binnenkwam, in welke valuta en tegen welke koers. Alleen foto's en pdf's worden niet geëxporteerd: dat zijn bestanden op de telefoon.

De kolomnamen zijn Engels (`date`, `amount`, `tags`…) en hangen niet af van de taal van de app: zo gaan formules en draaitabellen niet stuk als je de taal wijzigt. De getallen in het bestand zijn altijd echt, ook als “Bedragen verbergen” aanstaat. Het scheidingsteken tussen velden volgt de getalnotatie, zodat de tabel als kolommen opent en niet als één regel.

**Importeren uit YNAB** — een budget overzetten uit YNAB 4 (een .y4backup-bestand) of uit de webversie van YNAB (een .zip-export): rekeningen, categorieën en de hele geschiedenis. Na het importeren laat een woordenlijst zien hoe elke YNAB-term hier heet.

**Inbox** — bij de kassa alleen het bedrag; rekening en categorie kies je later. Hoe het werkt — in het artikel [“Transactieformulier”](#entry). **Direct na het installeren:** uit.

### Synchronisatie {#settings-s-sync}

De cloud, back-ups en een budget tussen apparaten verplaatsen. Hier kort wat waar staat; uitgebreid — het artikel [“Cloud en back-ups”](#sync).

[Onderdeel Synchronisatie: Autorisatie, Synchronisatie, Back-ups, Budget uit de cloud laden, Lokale overdracht]

**Autorisatie** — koppel een cloud: Google Drive, Dropbox of WebDAV. De hoofdregel: alle apparaten die dit budget bijhouden, gebruiken **hetzelfde cloudaccount**, anders zien ze elkaar niet.

*Meer:*
**Hebben gezinsleden verschillende Google-accounts**, maak dan voor het budget een **apart, nieuw Google-account** en log alleen daarmee, op alle apparaten, in bij de cloud van de app. Log op de telefoon van je vrouw niet in met je eigen persoonlijke account, en op de jouwe niet met het hare: de telefoon gaat dan contacten, berichten en foto's met dat account synchroniseren, en de persoonlijke gegevens van twee mensen raken door elkaar. Een apart account voor het budget kent alleen het budget.

**Dropbox** — log in met je **e-mail en wachtwoord** van Dropbox, niet met de knop “Doorgaan met Google”. Inloggen via Google koppelt Dropbox aan het Google-account waarmee je inlogde — en op een apparaat met een ander Google-account kom je makkelijk in een andere Dropbox terecht waar je budget niet staat. E-mail en wachtwoord van Dropbox werken op elk apparaat hetzelfde.

**WebDAV** — een cloud die het ondersteunt (Nextcloud, ownCloud, pCloud en andere) of je eigen server; op alle apparaten hetzelfde adres, dezelfde gebruikersnaam en dezelfde map.

**Synchronisatie** — wijzigingen uitwisselen met de cloud en andere apparaten; ook het wachtwoord dat de cloud versleutelt, en het synchronisatielogboek.

**Back-ups** — kopieën van het budget: automatisch volgens schema en handmatig, op de telefoon en in de cloud. Ook vanuit hier — een “Leesbare kopie” als bestand.

**Budget uit de cloud laden** — een nieuwe telefoon of een herinstallatie — het budget komt terug uit de cloud of uit een back-upbestand.

**Lokale overdracht** — een budget tussen je eigen apparaten verplaatsen via wifi of als bestand — zonder cloud.

### Budget {#settings-s-budget}

Instellingen van het huidige budget.

[Onderdeel Budget: Valuta van het budget, Categorieën van Betaal jezelf, Leeftijd van het geld]

**Valuta van het budget** — het symbool waarin je je budget bijhoudt. Alleen voor dit budget; de app rekent bedragen niet om — alleen het symbool verandert.

**“Categorieën van “Betaal jezelf””** — welke categorieën tellen als “opzijgezet voor jezelf” — meestal spaargeld. Is er niets gekozen, dan staat er geen blok “Betaal jezelf” op “Overzicht”. Wat het toont — in het artikel [“Overzicht”](#overview).

**Leeftijd van het geld** — hoe die berekend wordt: drie manieren. Een eigen scherm — [hieronder](#settings-aom).

#### Het scherm “Leeftijd van het geld” {#settings-aom}

[Scherm Hoe de leeftijd van het geld wordt berekend: Klassiek YNAB FIFO, Met spaargeld, Met spaargeld en de diepte van het tekort]

De drie manieren staan meteen op het scherm beschreven. Welke dichter bij de waarheid ligt en waarom, met voorbeelden — in het artikel [“Overzicht”](#overview), onderdeel “Leeftijd van het geld in detail”. Kort gezegd: **“Met spaargeld”** telt precies het geld dat op je rekeningen staat. **Direct na het installeren:** “Klassiek (YNAB FIFO)”.

### Beveiliging {#settings-s-security}

Een slot op de app.

[Onderdeel Beveiliging: Pincode]

**Pincode** — de app vraagt erom bij het openen. Is er een pincode ingesteld, dan verschijnt eronder “Biometrisch ontgrendelen” — een vingerafdruk of gezicht in plaats van cijfers.

*Meer:*
Zonder pincode kan biometrie niet aan: zonder pincode is er geen slot. Zolang er een pincode is, wordt de kaart van de app in de lijst met geopende apps afgedekt, en zien nieuwsgierige ogen daar je saldi niet (op Android 13 en nieuwer).

### Weergave {#settings-s-look}

Twee schermen: taal met notaties, en het hele uiterlijk van de app.

[Onderdeel Weergave: Taal en notaties, Weergave]

**Taal en notaties** — de interfacetaal, hoe bedragen en datums eruitzien, hoe je een bedrag typt. Het scherm — [hieronder](#settings-formats).

**Weergave** — thema, stijl, lettertype, pictogrammen en hoe een transactieregel eruitziet. Het scherm — [hieronder](#settings-appearance).

#### Het scherm “Taal en notaties” {#settings-formats}

[Scherm Taal en notaties: Interfacetaal, Bedragnotatie, Bedrag invoeren, Bedragtoetsen, Datumnotatie]

**Interfacetaal** — dertien talen; “Systeemstandaard” is de taal van de telefoon. De taal staat op dit apparaat en synchroniseert niet: de telefoon kan in het Nederlands staan en de computer in het Engels.

**Bedragnotatie** — scheidingstekens voor duizendtallen en decimalen, aan welke kant het valutasymbool staat. Standaard — zoals gebruikelijk in de gekozen taal: “€ 1.234.567,89”.

**Bedrag invoeren** — “Met komma” of “Vanaf centen, zoals een pinautomaat” (1-2-5-0 betekent 12,50). **Direct na het installeren:** met komma.

**Bedragtoetsen** — “Voor de rechterhand” — cijfers rechts, bewerkingen links; “Voor de linkerhand” — andersom. **Direct na het installeren:** voor de rechterhand.

**Datumnotatie** — volgorde, scheidingsteken, maand als getal of als woord — 24 opties om uit te kiezen.

#### Het scherm “Weergave” {#settings-appearance}

[Scherm Weergave: Thema, Stijl, Hoeken, Kleuren van inkomsten en uitgaven, Lettertype, Dichtheid, Pictogrammen, Kleur van bedragen, Vorm van de vlag, Terug naar]

**Thema** — “Systeem”, “Licht” of “Donker”. “Systeem” volgt de telefoon.

**Stijl** — het kleurkarakter van de app: “Klassiek”, “Neon”, “Aurora”, “Zuur”, “Snoep”, “Spekje”, “Grafiet”. Elke stijl heeft een lichte en een donkere versie.

**Hoeken** — “Strak”, “Normaal” of “Zacht” — de hoeken van kaarten, knoppen en chips. Los van de stijl.

**Kleuren van inkomsten en uitgaven** — “Standaard” — inkomsten groen, uitgaven rood. “Versterkt” — inkomsten blauw: voor wie groen moeilijk van rood onderscheidt.

*Meer:*
Ongeveer één op de twaalf mannen en één op de tweehonderd vrouwen ziet kleuren anders. Er zijn drie soorten:

- **deuteranopie** — zwakkere waarneming van groen; de meest voorkomende;
- **protanopie** — zwakkere waarneming van rood;
- **tritanopie** — blauw en geel worden verward; zeer zeldzaam.

Bij de eerste twee smelten groen en rood samen tot een gelijkaardige bruinachtige kleur, en is inkomen niet op kleur van uitgaven te onderscheiden. Beide zien blauw goed — daarom is inkomen in “Versterkt” blauw.

**Wat de app nog meer voor deze mensen doet — al, zonder enige instelling:**

- elk bedrag heeft een teken “+” of “−”: de richting van een transactie is helemaal zonder kleur te zien (en direct na het installeren hebben transactiebedragen sowieso geen kleur);
- een overschrijding spreekt niet alleen met kleur maar ook met een pictogram: een portemonnee — je gaf je eigen geld uit, een kaart — je ging schulden aan op een creditcard;
- een mislukte synchronisatie verandert niet alleen de kleur van het pictogram maar ook de tekening — er verschijnt een “!” in;
- de kleuren van rapportgrafieken zijn zo gekozen dat naburige stukken ook in helderheid verschillen, niet alleen in tint.

**Wat “Versterkt” verandert:** overal blauw inkomen — in bedragen, in de kop van het inkomstenformulier, in de grafieken en in de tabel “Inkomsten en uitgaven”; de kleuren van transactievlaggen worden op helderheid uit elkaar gehaald; de rapportgrafieken en “Geldstroom” gebruiken een eigen kleurenset. Elke set wordt tijdens de ontwikkeling tegen alle drie de soorten gecontroleerd.

“Versterkt” helpt ook wie kleuren goed onderscheidt, maar in fel zonlicht naar het scherm kijkt.

**Lettertype** — het systeemlettertype of een van zeven: “Fira Sans”, “Geologica”, “IBM Plex Sans”, “Inter”, “Manrope”, “Noto Sans”, “Source Sans 3” — voor de hele interface.

**Dichtheid** — “Compact”, “Normaal” of “Ruim” — de ruimte tussen regels en blokken. De lettergrootte verandert niet.

**Pictogrammen** — “Standaard” of “Tweekleurig”.

**Kleur van bedragen** — of bedragen in transactielijsten gekleurd worden: “Zonder kleur”, “Alleen inkomsten” of “Uitgaven en inkomsten”.

*Meer:*
**Direct na het installeren — “Zonder kleur”**, en elke schermafbeelding in deze handleiding is zo gemaakt. Waarom: rood is de kleur van alarm, en brood kopen verdient geen alarm; als elke regel rood oplicht, zegt de kleur niets meer. Het teken toont de richting van een transactie: “−” voor uitgaven, “+” voor inkomen. Wil je kleur? Kies “Uitgaven en inkomsten” of “Alleen inkomsten”.

Een overschrijding van een categorie, schuld en de stand van de synchronisatie blijven gekleurd, wat je ook kiest: daar is kleur een waarschuwing.

**Vorm van de vlag** — “Stip”, “Driehoekige vlag” of “Wapperende vlag” — hoe de vlag eruitziet in transactieregels.

**Terug naar** — “Overzicht” — na een pauze van meer dan 30 seconden en bij het opstarten opent “Overzicht”; “Waar je gebleven was” — hetzelfde scherm, zelfs met een open formulier. In beide gevallen wordt om de pincode gevraagd.

### Help en contact {#settings-s-help}

Tips en contact met de ontwikkelaar.

[Onderdeel Help en contact: Tips, Kennisbank, Telegram-chat, Probleem melden, Verbetering voorstellen]

**Tips** — alle tips van de app als lijst, per scherm. Ook “Tips opnieuw tonen”. De tips van één scherm open je ook via het item “Tips” in zijn menu “⋮”.

**Kennisbank** — artikelen over elk scherm op de website, in de taal van de app; het item opent de startpagina. Het artikel van één scherm open je via het item “Kennisbank” in zijn menu “⋮”.

**Telegram-chat** — een groep waar vragen beantwoord worden en waar je andere gebruikers iets kunt vragen.

**Probleem melden** — een e-mail aan de ontwikkelaar. De versies van app en apparaat worden vanzelf ingevuld; je kunt het gebeurtenislogboek uit “Over de app” meesturen.

**Verbetering voorstellen** — een e-mail met een idee: wat nu onhandig is en hoe je het zou willen.

### Over de app {#settings-s-about}

Eén regel, en daarachter een scherm met de versie, documenten en onderhoudsitems.

[Onderdeel Over de app]

**Over de app** — het scherm — [hieronder](#settings-about-screen).

#### Het scherm “Over de app” {#settings-about-screen}

[Scherm Over de app: Versie, Versie voor Windows, App delen, Privacybeleid, Licentie, Gebeurtenislogboek, Alle gegevens wissen]

**Versie** — het versienummer; tik erop voor “Wat is er nieuw”: wat er in de laatste versies veranderde.

**Versie voor Windows** — hetzelfde budget op een computer — in de Microsoft Store.

**App delen** — stuur een link naar de app in Google Play.

**Privacybeleid en Licentie** — documenten. Kort gezegd: je gegevens zijn van jou, en de ontwikkelaar heeft er geen toegang toe.

**Gebeurtenislogboek** — fouten van de app en de synchronisatie. Handig als je over een probleem schrijft.

**Alle gegevens wissen** — verwijder alle rekeningen, categorieën, transacties, geplande betalingen en doelen. De app vraagt nog eens: “Alle gegevens wissen?”. Dit kan niet ongedaan worden gemaakt.

*Meer:*
Is synchronisatie gekoppeld, dan komen de gegevens bij de volgende synchronisatie terug uit de cloud. Om ze voorgoed te verwijderen, koppel je de cloud los of verwijder je het synchronisatiebestand erin. Maak vóór het wissen een kopie in “Back-ups”.
