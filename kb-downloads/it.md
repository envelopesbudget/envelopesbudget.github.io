# Il mio budget — Centro assistenza

## Che cosa fa l'app {#about}

«Il mio budget» non è un registro delle spese: è un budget completo basato sul metodo delle buste. Sa fare molte cose, e quasi nessuna è sepolta nei menu: stanno nei gesti e nei piccoli dettagli. Questa pagina è un giro veloce; poi ogni schermata ha il suo articolo.

### L'essenziale {#about-main}

Annotare le spese risponde alla domanda «dove sono finiti i soldi». Un budget risponde a una domanda più importante: **«che cosa possono ancora coprire»**: oggi, fino allo stipendio, prima delle vacanze.

##### Buste

Ogni euro ha un compito: spesa, affitto, vacanze. Vedi quanto resta in ogni busta, e lo sforamento diventa subito rosso. Approfondisci in [«Come funziona il budget»](#start).

##### I dati sono tuoi

Il budget vive sul tuo telefono e nel tuo cloud. Lo sviluppatore non ha accesso. Il cloud si può chiudere con una password: AES-256. Approfondisci in [«Cloud e backup»](#sync-password).

##### Arrivi da YNAB

Conti, categorie e tutta la storia da YNAB 4 o da YNAB web arrivano con un file, e un piccolo glossario mostra come si chiamano qui i termini a cui sei abituato. Approfondisci in [«Primi passi»](#first-steps).

### Inserimento rapido {#about-input}

È più facile registrare un acquisto alla cassa che ricordarlo la sera. Per questo i modi sono diversi.

##### In arrivo

Alla cassa non hai tempo di scegliere categoria e conto? Inserisci solo l'importo. Il pulsante «In arrivo» lo salva con l'etichetta «Smista», e a casa il modulo apre queste transazioni una alla volta. Si attiva in «Impostazioni → DATI → In arrivo». Approfondisci in [«Modulo della transazione»](#entry-inbox).

##### Con la voce

«Esselunga 70 Spesa dal conto Conto corrente», e il modulo è compilato. Approfondisci in [«Inserimento vocale»](#voice).

##### Da uno scontrino

Inquadra il QR dello scontrino: importo e data si compilano da soli, e dalla seconda volta l'app riconosce il negozio dalla cassa. Funziona dove l'app sa leggere gli scontrini del tuo paese. Approfondisci in [«Scanner degli scontrini»](#receipt).

##### Dalla schermata Home

Widget e scorciatoie aprono il modulo con un tocco, senza entrare nell'app. Approfondisci in [«Widget e scorciatoie»](#widgets).

##### Tastierino calcolatrice

Gli importi si digitano sul tastierino dell'app, con somma e sottrazione, si dividono tra più categorie, si trasferiscono tra conti, anche in valute diverse. Approfondisci in [«Modulo della transazione»](#entry).

### Piani {#about-plans}

##### Obiettivi

Cinque tipi: al mese, entro una data, mantenere un saldo, percentuale del reddito e una lista di spese. L'app calcola quanto mettere da parte. Approfondisci in [«Obiettivi»](#goals).

##### Pagamenti pianificati

Affitto, abbonamenti, rate di un prestito: con un promemoria in anticipo e registrati con un tocco. Approfondisci in [«Pagamenti pianificati»](#scheduled).

##### Carte di credito e debiti

I soldi per saldare la carta di credito vengono messi da parte da soli, e vedi il debito mese per mese. Approfondisci nello scenario [«Carte di credito e debiti»](#scenario-credit).

##### Tag e «chi deve a chi»

Un viaggio, una ristrutturazione, spese comuni con gli amici: un tag le raccoglie da categorie diverse e calcola chi deve a chi. Approfondisci in [«Beneficiari e tag»](#payees-tags).

### Report {#about-reports}

Dieci report: dove sono finiti i soldi, andamento e scostamento dal solito, flusso del denaro dalle entrate alle spese, entrate e uscite per mese, età del denaro, patrimonio netto, debito delle carte di credito. E la «Panoramica» è la tua schermata principale: i blocchi li scegli e li disponi tu. Approfondisci in [«Report»](#reports) e [«Panoramica»](#overview).

### Dispositivi e cloud {#about-devices}

Un solo budget su telefono, tablet e computer Windows: in due o per tutta la famiglia. Sincronizzazione tramite Google Drive, Dropbox o WebDAV (Nextcloud, ownCloud, pCloud, il tuo server); i backup si fanno da soli secondo un calendario. Approfondisci negli scenari [«Un budget su più dispositivi»](#scenario-devices) e [«In due o più in un solo budget»](#scenario-together).

### Su misura {#about-yours}

Tredici lingue, sessanta valute, formati di importi e date del tuo paese. Sette stili chiari e scuri, caratteri, densità, angoli, icone. Più budget: personale, di famiglia, di lavoro. Approfondisci in [«Impostazioni»](#settings).

### Da dove cominciare {#about-start}

1. [«Come funziona il budget»](#start): il metodo delle buste in dieci minuti.
2. [«Primi passi»](#first-steps): dall'installazione al primo mese.
3. [Scenari](#scenario-paycheck): risposte pronte. Da stipendio a stipendio, freelance, carte di credito, un viaggio con gli amici.

## Come funziona il budget {#start}

Il metodo delle buste in dieci minuti: da dove arrivano i soldi, come dividerli e che cosa succede quando cambia il mese.

### Le buste: l'idea principale {#start-idea}

Immagina di aver ritirato lo stipendio in contanti e di averlo diviso in buste: «Spesa», «Utenze», «Vacanze». Quando fai la spesa, prendi i soldi solo da quella busta. Una busta vuota vuol dire che per quella cosa i soldi sono finiti. L'app fa esattamente questo, solo senza carta.

(1)
##### Soldi sui conti

Conto corrente: 1.700 €

Contanti: 200 €

(2)
##### «Non assegnato»

1.900 €: ancora senza un compito

(3)
##### Le buste delle categorie

Spesa: 550 €

Utenze: 170 €

…e così via, finché non arriva a 0

(4)
##### Le spese

Hai comprato il pane: la busta «Spesa» si è assottigliata

Ogni euro sui conti sta in un solo posto: in una busta oppure in «non assegnato». Così in ogni momento vedi che cosa puoi ancora permetterti e che cosa no. Il primo obiettivo è portare «non assegnato» a zero: allora **ogni euro ha un compito**. Non è il traguardo, ma il primo passo: dove porta il metodo dopo è [alla fine dell'articolo](#start-ladder).

In che cosa è diverso dal solito «annotare le spese» è spiegato [più sotto](#start-vs).

### In che cosa è diverso dall'annotare le spese {#start-vs}

Molti annotano le spese per anni, su un quaderno, in un foglio di calcolo, nell'app della banca, e continuano a non capire perché i soldi finiscono prima del mese. Annotare le spese racconta onestamente il passato. Le buste aiutano a guidare il futuro.

|  | Annotare le spese | Budget a buste |
|---|---|---|
| Quando pensi ai soldi | Dopo aver speso: guardi dove sono andati. | Prima di spendere: decidi quanto puoi spendere. |
| La domanda principale | «Dove sono finiti i soldi?» | «Che cosa posso ancora permettermi?» |
| Lo sforamento | Lo scopri a fine mese, quando è tardi. | Lo vedi subito: la busta diventa rossa nel momento dell'acquisto, e sposti i soldi da un'altra. |
| I soldi in banca | Un solo numero: «sul conto ci sono 1.400 €, quindi i soldi ci sono». | Divisi per compito: una parte è già promessa all'affitto, una alle vacanze. È libero solo ciò che sta nella busta giusta. |
| Lo stipendio | Solo un'entrata che «in qualche modo si spenderà». | Soldi a cui dai subito un compito. |
| Le spese irregolari | L'assicurazione o una riparazione arrivano dal nulla. | Metti da parte un po' ogni mese: quando arriva il conto, i soldi ci sono già. |

(1.400 €)
#### Esempio: «sul conto c'è ancora parecchio»

È metà mese e sul conto corrente ci sono 1.400 €. Vuoi delle cuffie da 280 €.

*Come funziona:*
**Annotare le spese** vede 1.400 € e dice: «vai pure». Ma tra una settimana c'è l'affitto, 800 €, più le utenze e la spesa fino allo stipendio. Le cuffie sono comprate, e per l'affitto non basta.

**Le buste** vedono gli stessi 1.400 €, ma divisi: «Affitto» 800 €, «Utenze» 170 €, «Spesa» 260 €, «Svago e hobby» 170 €. Per le cuffie sono liberi 170 €. Le vuoi comprare adesso? Decidi da quale busta prendere i 110 € che mancano. La decisione la prendi tu, e la prendi prima dell'acquisto, non dopo.

(?)
#### Quindi qui le spese non si annotano?

Sì che si annotano, e in modo più dettagliato che su un quaderno.

*Come funziona:*
Ogni acquisto viene registrato, e «Dove sono finiti i soldi», «Spese del mese» e i report mostrano dove è andato tutto. Solo che qui non è lo scopo, ma la verifica del piano: quello che hai deciso coincide con quello che è successo? Il mese dopo farai il budget in modo più preciso.

(↻)
#### In breve

Annotare le spese è lo specchietto retrovisore. Le buste sono il volante.

*Come funziona:*
Guardare nello specchietto è utile: vedi da dove arrivi. Ma ad andare avanti aiuta solo il volante: una decisione su dove vanno i soldi, presa in anticipo.

### Tre numeri per ogni categoria {#start-envelope}

Gira il telefono di lato: la schermata «Budget» diventa una tabella, e i tre numeri della busta sono scritti nei titoli delle colonne.

[Budget in orizzontale: colonne Categoria, Pianificato, Speso, Disponibile; Utenze 100, −92,74, 29,44]
Telefono di lato: lo stesso «Budget» come tabella. Nella vista normale «Disponibile» è l'importo a destra della categoria, e «… di … spesi» è la riga sotto la barra.

1. **«Pianificato»**: quanto hai messo nella busta questo mese. È una decisione: «100 € per le utenze a novembre».

2. **«Speso»**: quanto è già uscito dalla busta, cioè tutte le spese di questa categoria nel mese, con il segno meno. Un rimborso per un articolo reso riduce questo numero.

3. **«Disponibile»**: quanto puoi ancora spendere. Riportato dal mese prima + pianificato − speso.

   *Come funziona:*
   Nello screenshot «Utenze» ha pianificato 100 e speso 92,74: sembrerebbe che restino 7,26. Ma ne sono disponibili 29,44: 22,18 € non sono stati spesi a ottobre e sono passati a novembre. È così che una busta si accumula.

   Il chip verde vuol dire che nella busta ci sono soldi, lo zero grigio che è vuota, il rosso che è in meno: hai speso più di quanto c'era.

[Schermata Budget: gruppi di categorie, importi a destra, barre e righe della spesa]

Com'è sullo schermo e dove toccare è nell'articolo [«Budget»](#budget). Qui ci sono solo le regole che seguono i numeri.

(€)
#### Le entrate vanno in «non assegnato», non in una categoria

Lo stipendio non entra in una busta da solo: va in «non assegnato», e lo dividi tu.

*Come funziona:*
Nel modulo della transazione un'entrata si registra di solito su «Entrate per novembre», cioè nel «non assegnato» di questo mese. Puoi anche scegliere «Entrate per dicembre»: vedi la sezione [«L'età del denaro nel dettaglio»](#overview) dell'articolo «Panoramica».

(↺)
#### Un rimborso torna nella busta

Ti hanno restituito i soldi per un articolo reso? Tornano nella categoria da cui erano usciti, non nelle entrate.

*Come funziona:*
Come registrarlo: l'articolo [«Modulo della transazione»](#entry), sezione «Rimborso per un articolo reso».

(⇄)
#### Un trasferimento non è una spesa

Hai prelevato contanti, saldato la carta di credito, spostato soldi nei risparmi: i soldi restano tuoi.

*Come funziona:*
Un trasferimento tra conti del budget non tocca nessuna busta. Solo un trasferimento verso un conto fuori dal budget (risparmi, un deposito) esce dalle buste: allora l'app chiede una categoria.

### Mese dopo mese {#start-months}

Il budget vive per mesi. Che cosa succede a una busta quando cambia il mese è una delle regole principali.

(+)
#### Il più passa al mese dopo

Non hai speso tutto? Il resto passa al mese successivo e resta nella busta.

*Come funziona:*
È così che si risparmia per le cose grandi e irregolari: metti 150 € in «Vacanze» ogni mese, non spenderli, e per l'estate ce ne sono 900. Puoi anche mettere da parte soldi per il futuro subito: si può assegnare denaro a qualsiasi mese in avanti, con la freccia «›» nella schermata «Budget».

(−)
#### Il meno si azzera

Hai speso più di quanto c'era nella busta? La categoria diventa rossa. Al cambio del mese il meno si cancella, ma non senza lasciare traccia.

*Come funziona:*
Un meno dei tuoi soldi (rosso, icona del portafoglio) riduce il «non assegnato» del mese dopo: i soldi sono già stati spesi. Per questo è meglio coprire subito un meno spostando soldi da un'altra categoria: tocca l'importo rosso nella schermata «Budget».

Un meno sulla carta di credito (giallo, icona della carta) è un'altra storia: non mangia i tuoi soldi, fa crescere il debito della carta. «Non assegnato» non lo tocca, ma il debito andrà comunque pagato.

(≡)
#### «Budget del mese» in «Panoramica»

Tutti i conti del mese in una scala: riporto dal mese prima, entrate, assegnato e il totale «non assegnato».

*Come funziona:*
Se il numero sul chip sembra strano, guarda qui: vedrai da dove viene. Approfondisci nell'articolo [«Panoramica»](#overview).

### Una carta di credito nel budget {#start-credit}

La carta di credito è la parte meno abituale del metodo delle buste. La regola è una: un acquisto con la carta di credito spende i soldi della busta come un acquisto con la carta di debito.

(1)
#### L'acquisto

Hai fatto la spesa con la carta di credito per 35 €: la busta «Spesa» si è assottigliata di 35 €, come sempre.

(2)
#### I soldi per il pagamento si mettono da parte da soli

L'app sposta questi 35 € nel gruppo «Pagamenti carte», nella categoria della tua carta di credito.

*Come funziona:*
Così alla data del pagamento i soldi per saldarla sono già separati, e non puoi spenderli per sbaglio. Non devi mettere da parte niente tu.

(3)
#### Saldare la carta

Salda la carta di credito con un trasferimento dal tuo conto normale alla carta. I soldi messi da parte vanno al pagamento.

*Come funziona:*
Come registrare un trasferimento: l'articolo [«Modulo della transazione»](#entry).

### Le quattro regole del metodo {#start-rules}

L'app non ti obbliga a seguirle: le propone una alla volta, quando una regola diventa utile.

(1)
#### Dai un compito a ogni euro

Continua ad assegnare i soldi finché «non assegnato» non è a zero. I soldi senza un compito spariscono senza che te ne accorga.

(2)
#### Accetta le spese vere

L'assicurazione una volta all'anno, la riparazione dell'auto, i regali per le feste: anche queste sono spese. Metti da parte un po' per loro ogni mese.

*Come funziona:*
Aiutano gli obiettivi «Entro una data»: l'app calcola quanto mettere ogni mese per arrivarci in tempo.

(3)
#### Adattati agli imprevisti

Sforare non è un fallimento. Sposta i soldi da un'altra busta e vai avanti.

*Come funziona:*
Un budget è un piano, non un giuramento. Conta che le buste mostrino onestamente quanto resta.

(4)
#### Fai invecchiare i tuoi soldi

L'obiettivo è spendere soldi guadagnati un mese fa, non ieri.

*Come funziona:*
Lo tiene d'occhio l'«Età del denaro» in «Panoramica». Quando arriva a 30 giorni, puoi vivere con i soldi del mese prima: i dettagli nell'articolo [«Panoramica»](#overview).

### Lo zero è solo il primo passo {#start-ladder}

«Non assegnato» a zero è un buon obiettivo, ma non quello finale. Il metodo va oltre: da «arrivo allo stipendio» a «i miei soldi lavorano per me». I gradini vanno in ordine, e saltarli è rischioso: investire senza un cuscinetto vuol dire vendere gli investimenti al primo guasto dell'auto.

(1)
#### Ogni euro ha un compito

Tutti i soldi sui conti sono divisi nelle buste. Sai che cosa puoi permetterti fino alla fine del mese.

**Come capire che sei qui:** «non assegnato» è a zero e nessuna categoria è rossa.

**Come aiuta l'app:** il chip «Non assegnato», l'assegnazione automatica, «Copri tutti gli sforamenti».

(2)
#### Buste per le spese irregolari

Assicurazione, riparazioni dell'auto, regali e vacanze non ti colgono più di sorpresa: ogni mese ci va un po'.

**Come capire che sei qui:** arriva un conto grosso, e i soldi per pagarlo ti aspettano già nella sua busta.

**Come aiuta l'app:** gli obiettivi «Entro una data» e «Al mese» calcolano quanto mettere; il blocco «In arrivo» in «Panoramica» ricorda dove mancano soldi.

(3)
#### Un mese in anticipo

Spendi soldi guadagnati un mese fa. Questo mese non ha bisogno del nuovo stipendio: va al prossimo.

**Come capire che sei qui:** l'«Età del denaro» è di 30 giorni o più.

**Come aiuta l'app:** l'«Età del denaro» in «Panoramica», l'entrata per il mese prossimo nel modulo: i dettagli nell'articolo [«Panoramica»](#overview), sezione «L'età del denaro nel dettaglio».

(4)
#### Un fondo di emergenza

Una riserva di tre-sei mesi di spese normali. Perdere il lavoro o ammalarsi diventa un contrattempo, non un disastro.

**Come capire che sei qui:** nel «Fondo di emergenza» ci sono le spese di alcuni mesi.

**Come aiuta l'app:** un obiettivo «Saldo» sulla categoria «Fondo di emergenza»; la spesa media mensile nei report e nella schermata della categoria.

(5)
#### I tuoi soldi lavorano per te

Il cuscinetto c'è, le spese irregolari sono coperte, sei un mese avanti: ora il di più può fare qualcosa di meglio che stare fermo. Un deposito, obbligazioni, investimenti. I soldi cominciano a fare soldi.

**Come capire che sei qui:** ogni mese una parte delle entrate va in «Investimenti», e non la tocchi per le spese di tutti i giorni.

**Come aiuta l'app:** il gruppo «Risparmi» con la categoria «Investimenti»; «Paga te stesso» in «Panoramica» mostra quale percentuale delle entrate metti da parte (la norma è il 10% o più); un conto «Solo monitoraggio» per un deposito o un conto titoli; il «Patrimonio» in «Panoramica»: come cresce tutto ciò che possiedi.

Quanto dura la strada dipende dal reddito e dalle abitudini. Il primo passo di solito è il primo mese. Arrivare un mese avanti richiede da tre mesi a un anno. Conta fare un passo ogni mese, non un salto.

Pronto a cominciare? Il prossimo è [«Primi passi»](#first-steps): dal primo avvio al primo mese.

## Primi passi {#first-steps}

Dal primo avvio a un budget che funziona: la procedura guidata, l'elenco «Primi passi» e che cosa fare nel primo mese.

*Come funziona il metodo in sé è spiegato in [«Come funziona il budget»](start.md)*

### Primo avvio: come vuoi iniziare {#first-steps-welcome}

Al primo avvio si apre la procedura guidata. La prima schermata offre tre porte. La lingua si cambia subito qui, con il pulsante nell'angolo in alto a destra: anche le categorie che l'app propone di default saranno in quella lingua.

[Passo 1 di 6: Benvenuto, pulsante della lingua, tre opzioni: Comincio da zero, Ho già un budget, Arrivo da YNAB]

(A)
#### «Comincio da zero»

La procedura ti accompagna in cinque passi: valuta e nome, conti, categorie, la prima assegnazione. I passi sono spiegati più sotto.

(B)
#### «Ho già un budget»

Hai tenuto un budget su un altro telefono o prima di reinstallare. L'app lo carica dal cloud (Google Drive, Dropbox o WebDAV) o da un file di backup.

*Come funziona:*
Qui il nome non viene chiesto: arriva con il budget e fa da indirizzo della sua cartella nel cloud.

(C)
#### «Arrivo da YNAB»

YNAB 4 o YNAB web: conti, categorie e storia arrivano da un file.

*Come funziona:*
Prima valuta e nome, poi scegli il file esportato, e alla fine c'è un glossario: come si chiama qui ogni termine di YNAB. Il glossario si può aprire anche dopo, importando dalle impostazioni.

Circa cinque minuti. Ogni passo si può saltare: l'elenco «Primi passi» in «Panoramica» ricorderà che cosa manca.

### Comincio da zero: cinque passi {#first-steps-fresh}

In fondo a ogni passo ci sono «Avanti» e «Salta». Il tasto Indietro del sistema torna di un passo invece di chiudere l'app.

[Passo 2. Valuta e nome]

(•)
#### Passo 2. Valuta e nome

L'app propone la valuta in base al paese del telefono: controllala. È il simbolo in cui tieni il budget; l'app non converte gli importi.

*Come funziona:*
Inventa un nome tuo: «Famiglia», «Personale». Se lasci il campo vuoto, il budget si chiamerà «Il mio budget». Il nome compare nell'intestazione e nel nome della cartella nel cloud, così il budget si riconosce facilmente su qualsiasi dispositivo.

[Passo 3. Dove sono i tuoi soldi]

(•)
#### Passo 3. Dove sono i tuoi soldi

Aggiungi ogni posto in cui tieni soldi, con il saldo di oggi: il portafoglio, le carte di ogni banca, la carta di credito, i risparmi.

*Come funziona:*
Basta dimenticare una carta, e il budget non corrisponde a ciò che hai davvero. Tocca «+» accanto a un modello adatto: si apre il foglio del nuovo conto con il tipo già scelto. Il saldo del conto va dritto in «non assegnato»: nello screenshot due conti hanno portato 1.900 €. Sui conti approfondisci nell'articolo [«Conti»](#accounts).

[Passo 4. Le tue categorie]

(•)
#### Passo 4. Le tue categorie

I chip «In cosa spendi» aggiungono le categorie che ti servono: «Auto», «Figli», «Animali domestici». Sotto c'è tutto l'elenco, e lo puoi sistemare come ti serve.

*Come funziona:*
- tocca una categoria per rinominarla;
- la crocetta toglie una categoria;
- «Aggiungi categoria» c'è in ogni gruppo, «Aggiungi un nuovo gruppo» è in fondo;
- la matita accanto al nome di un gruppo lo rinomina.

Lo screenshot mostra l'inizio dell'elenco; è più lungo.

[Passo 5. Assegna il denaro]

(•)
#### Passo 5. Assegna il denaro

Dividi «non assegnato» tra le buste: tocca l'importo accanto a una categoria e scrivi quanto sei disposto a spenderci questo mese.

*Come funziona:*
In alto si vede quanto resta. Nello screenshot sono assegnati 840 € e ne restano 1.060. Qui non serve arrivare a zero: comincia dall'essenziale (casa, cibo, telefono) e il resto assegnalo dopo nella schermata «Budget».

[Passo 6. Fatto]

(•)
#### Passo 6. Fatto

Ancora una volta la regola principale: continua ad assegnare i soldi finché «non assegnato» non arriva a zero.

*Come funziona:*
«Apri il budget» porta alla schermata «Budget». Da lì l'app dà suggerimenti strada facendo: un suggerimento alla volta, quando serve.

### Dopo la procedura: l'elenco «Primi passi» {#first-steps-first-steps}

In cima alla «Panoramica» compare una scheda con un elenco. Contiene ciò che serve al budget prima di poter mostrare la verità. La procedura segna già quello che hai fatto.

[Panoramica con la scheda Primi passi: 3 di 6, Soldi assegnati aperto, 1.900 non assegnati, pulsante Vai al budget]

1. **Contanti nel portafoglio**: il portafoglio come conto a parte. I contanti sono la prima cosa a sfuggire: senza un conto loro, il budget si allontana dai soldi che hai in mano al primo acquisto. Niente contanti? «Niente contanti».
2. **Carte di tutte le banche**: tutte le carte e i conti sono aggiunti. Se li hai aggiunti nella procedura, la voce è già spuntata.
3. **Categorie su misura**: l'elenco delle categorie è sistemato. Se sei passato dal passo delle categorie, è spuntata. Il pulsante apre la stessa schermata della procedura. Una categoria che ha già transazioni non viene eliminata dalla crocetta ma nascosta: le transazioni restano dove sono.
4. **Soldi assegnati**: «Non assegnato» è arrivato a zero. Fino ad allora la voce mostra quanto resta e porta a «Budget».
5. **Prima transazione**: hai registrato il primo acquisto, il budget ha preso vita. Il pulsante apre il modulo.
6. **Una copia fuori dal telefono**: un cloud o un file di backup. Perdi il telefono, e il budget non va perso. Pulsanti: collegare un cloud o «Backup».

(1)
#### Le voci fatte hanno la spunta

In alto, «3 di 6»: quante sono fatte. Una voce completata è una sola riga con la spunta.

(2)
#### Una voce è aperta

La prima non fatta, o quella che hai toccato. Dice che cosa fare e perché.

(3)
#### Il pulsante principale è una porta

Porta dritto dove la voce si completa: il modulo del conto, «Budget», il modulo della transazione, l'accesso al cloud. A volte accanto ce n'è un secondo, la tua risposta: «Niente contanti», «Aggiunte tutte», «Lascia così».

(⋮)
#### Nascondere l'elenco

Menu della scheda → «Nascondi l'elenco» (con «Annulla» in fondo allo schermo). Quando tutto è fatto, la scheda dice «Il budget è pronto»: tocca «Ho capito».

*Come funziona:*
Finché l'elenco è aperto, i normali suggerimenti della «Panoramica» tacciono, così la stessa cosa non viene detta due volte. Per far tornare tutti i suggerimenti: «Impostazioni → AIUTO E CONTATTI → Suggerimenti → Mostra di nuovo i suggerimenti».

Se arrivi da YNAB, l'elenco è diverso: riconciliare i saldi dei conti con la banca, i contanti, l'assegnazione e un backup. Conti e categorie sono già arrivati con il file.

### Il primo mese {#first-steps-month1}

1. **Registra ogni acquisto**: subito, alla cassa. «+ Transazione», la fotocamera per lo scontrino o il microfono. Cinque secondi adesso invece di una serata con l'estratto conto dopo. Non hai tempo? «In arrivo» (articolo [«Modulo della transazione»](#entry)).
2. **Sono arrivati soldi: dividili.** Ogni stipendio finisce in «non assegnato»; distribuiscilo nelle buste nella schermata «Budget».
3. **Una busta è diventata rossa: sposta soldi** da un'altra. È normale: il primo mese mostra sempre che cosa hai sottovalutato.
4. **Una volta alla settimana riconcilia i conti** con la banca: menu del conto, «Riconciliazione del saldo» (articolo [«Conti»](#accounts)).
5. **A fine mese guarda la «Panoramica»**: «Dove sono finiti i soldi», «Spese del mese». Il mese dopo assegnerai in base all'esperienza.

## Un budget su più dispositivi {#scenario-devices}

Il telefono in tasca, il tablet a casa, il computer al lavoro, e su tutti lo stesso budget. Registri un acquisto alla cassa, e la sera è sul portatile. Come impostarlo e a che cosa fare attenzione.

*«Impostazioni», sezione «SINCRONIZZAZIONE»*

### A chi serve {#scenario-devices-who}

##### Telefono e computer

Le spese dal telefono, alla cassa. La pianificazione del mese, i report e i controlli su uno schermo grande. Per il computer c'è la «Versione per Windows»: lo stesso budget, con un aspetto pensato per il mouse. Si sincronizza tramite Google Drive: se c'è di mezzo un computer, scegli questo cloud anche sul telefono.

##### Telefono e tablet

Dividere lo stipendio tra le buste è comodo sul tablet: «Budget» in orizzontale è una tabella a tutto schermo.

##### Un telefono nuovo

Il vecchio si è rotto o l'hai cambiato: anni di budget passano in un paio di minuti. È lo stesso scenario: il telefono nuovo è il secondo dispositivo.

I dispositivi li collega un cloud: Google Drive, Dropbox o WebDAV (Nextcloud, ownCloud, pCloud, il tuo server). Ogni dispositivo ci manda le sue modifiche e prende quelle degli altri. Come funziona nel dettaglio è nell'articolo [«Cloud e backup»](#sync).

### Sul primo dispositivo {#scenario-devices-first}

Quello in cui tieni già il budget.

1. «Impostazioni», sezione «SINCRONIZZAZIONE» → «Autorizzazione».
2. Accedi al cloud. Per Google Drive: con l'account Google che userai anche sugli altri dispositivi. Per Dropbox: con nome utente e password di Dropbox, non tramite Google. Ci sarà un computer Windows? Scegli Google Drive: la versione per Windows non si collega ad altri cloud.
3. Vuoi chiudere i dati nel cloud con una password? «Imposta una password» nel blocco «Cifratura del cloud». Scriviti la password: nessuno può recuperarla.
4. Torna alla «Panoramica» e tocca l'icona della sincronizzazione in alto a destra. Il budget va nel cloud.

[Schermata Autorizzazione: Cifratura del cloud, Google Drive, Dropbox, WebDAV]
«Autorizzazione»: qui si collega un cloud. Ogni cloud nel dettaglio è nell'articolo [«Cloud e backup»](sync.md#auth).

### Sul secondo dispositivo {#scenario-devices-second}

##### L'app è appena installata

1. Nella procedura del primo avvio scegli «Ho già un budget».
2. Si apre «Carica il budget dal cloud». Collega **lo stesso** cloud con **lo stesso** account.
3. Scegli il budget nell'elenco e tocca «Carica il budget».
4. Se sul primo dispositivo è impostata una password, imposta la stessa anche qui.
5. Controlla la valuta: «Impostazioni» → «Valuta del budget». I dettagli sono [più sotto](#scenario-devices-per-device).

[Schermata Carica il budget dal cloud: passo 1 Collega un cloud, passo 2 Nome del budget]
«Carica il budget dal cloud»: prima il cloud, poi un budget dall'elenco.

##### L'app è già installata, con un budget suo

«Impostazioni», sezione «SINCRONIZZAZIONE» → «Carica il budget dal cloud», poi gli stessi passi. Oppure tocca il nome del budget nell'intestazione della «Panoramica»: anche lì c'è «Carica il budget dal cloud».

*Come funziona:*
Se su questo dispositivo un budget con lo stesso nome ha già dati suoi, alla prima sincronizzazione l'app chiede se è un solo budget o due diversi: «Dal cloud» o «Unisci». Approfondisci nell'articolo [«Cloud e backup»](#sync-trouble).

### Che cosa è comune e che cosa tiene per sé ogni dispositivo {#scenario-devices-per-device}

Si sincronizzano i **dati del budget**. Le impostazioni di aspetto e sicurezza no: ogni dispositivo ha le sue.

| Comune a tutti i dispositivi | Separato su ogni dispositivo |
|---|---|
| Conti, le loro icone e i colori | Lingua e formati |
| Categorie e gruppi, note delle categorie | Aspetto: stile, tema, carattere, angoli |
| Transazioni, tag, beneficiari | PIN e accesso con l'impronta |
| Importi messi da parte per mese, obiettivi e righe dell'«Elenco» | La password del cloud, che però deve coincidere |
| Pagamenti pianificati | Promemoria |
| Foto e PDF, se «Sincronizza le foto» è attivo | Calendario dei backup |
| | **Valuta del budget** |

##### Valuta del budget: controllala su ogni dispositivo

Il simbolo della valuta del budget vive sul dispositivo e non va nel cloud. Un budget caricato prende la valuta del budget che c'era già su questo dispositivo, di solito in base al paese del telefono. Gli importi non cambiano, solo il simbolo accanto. Simbolo sbagliato? «Impostazioni» → «Valuta del budget».

##### Le foto degli scontrini

Subito dopo l'installazione le foto restano sul dispositivo dove sono state scattate. Perché compaiano ovunque, attiva «Sincronizza le foto» nella schermata «Sincronizzazione», su **ogni** dispositivo.

### Tutti i giorni {#scenario-devices-daily}

##### A mano si sincronizza di rado

L'app si sincronizza da sola, qualche secondo dopo ogni apertura. Il numero sull'icona della sincronizzazione in «Panoramica» dice quante tue modifiche non sono ancora andate nel cloud.

##### Hai registrato un acquisto e metti via il telefono

Quando l'app è ridotta a icona, Android non la lascia lavorare, quindi le modifiche partono alla prossima apertura. Se stai per sederti al computer, tocca l'icona della sincronizzazione sul telefono, così l'acquisto è già lì.

##### Il colore dell'icona della sincronizzazione

Lampeggia verde: tutto a posto. Rosso: non è riuscita; un singolo errore di solito vuol dire solo che manca la rete. Se l'icona resta rossa, la sincronizzazione è fallita più volte di fila: apri la schermata «Sincronizzazione», dice che cosa è successo.

### Errori frequenti {#scenario-devices-mistakes}

| Che cosa è successo | Perché, e che cosa fare |
|---|---|
| Sul secondo dispositivo mancano le modifiche del primo | I dispositivi sono entrati nel cloud con account **diversi**: ognuno scrive nel suo cloud. Accedi ovunque con un solo account. |
| «Il cloud è protetto da password» | La password è impostata su un dispositivo, e sull'altro non c'è o è diversa. Imposta **la stessa**. |
| Le foto sono arrivate ma non si aprono | Stessa cosa: la password è diversa tra i dispositivi. |
| Hai rinominato il budget, e il secondo dispositivo non vede più le modifiche | Il nome del budget è l'indirizzo della sua cartella nel cloud. Dopo averlo rinominato, rinomina il budget esattamente allo stesso modo sugli altri dispositivi. |
| «Conflitto: …» | Lo stesso record è stato cambiato su due dispositivi prima che si sincronizzassero. La scheda mostra entrambe le versioni: scegli quella giusta. |

### Senza cloud {#scenario-devices-no-cloud}

Non vuoi un cloud? Il budget si può spostare direttamente tra i tuoi dispositivi: come file o via Wi-Fi sulla stessa rete. È un trasferimento una tantum, non una sincronizzazione continua: le modifiche andranno trasferite di nuovo. Va bene per passare a un telefono nuovo. Approfondisci nell'articolo [«Cloud e backup»](#sync-local).

## In due o più in un solo budget {#scenario-together}

Una famiglia con i soldi in comune: pagano tutti e due, registrano tutti e due, vedono tutti e due quanto resta in ogni busta. Come mettersi d'accordo con l'app e tra di voi, senza confusione e senza doppioni.

*«Impostazioni», sezione «SINCRONIZZAZIONE»*

### Per chi è {#scenario-together-who}

I soldi sono comuni: gli stipendi finiscono in una cassa unica, e affitto, cibo e vacanze escono da lì. Ognuno paga con la sua carta o in contanti, ma le buste sono comuni: tutti e due vedono «Spesa», e chi arriva per primo al limite è quello che vede il rosso.

Se ognuno ha anche soldi personali che l'altro non deve vedere, guarda lo scenario [«Coppia: spese comuni e soldi personali»](#scenario-couple).

### Impostazione {#scenario-together-setup}

Tecnicamente è lo stesso budget su più dispositivi: i passi sono nello scenario [«Un budget su più dispositivi»](#scenario-devices). C'è una differenza, ed è importante.

##### Un account cloud a parte, solo per il budget

Tutti i dispositivi devono accedere al cloud con **un solo** account. Ma entrare con l'account Google personale del marito sul telefono della moglie è una pessima idea: il telefono comincerà a sincronizzare i suoi contatti, le foto e la posta.

Crea un account Google **nuovo**, solo per il budget, e usalo per accedere al cloud dell'app su ogni dispositivo. Ognuno tiene i suoi account personali. Lo stesso vale per Dropbox: un Dropbox a parte, con accesso tramite nome utente e password.

##### Una sola password del cloud per tutti

Se imposti una password, imposta **la stessa** su ogni telefono. La password non si sincronizza: si inserisce a mano su ogni dispositivo.

### Chi ha pagato che cosa {#scenario-together-whose}

L'app non ricorda su quale telefono è stata registrata una transazione. A distinguere le spese è il **conto**.

##### Un conto per ciascuno

Dai a ognuno i suoi conti: «Carta di Giulia», «Carta di Marco», «Contanti di Giulia». Su quale conto è registrato un acquisto, quella persona ha pagato. Ognuno riconcilia i saldi dei conti con la propria banca: «Riconciliazione del saldo» nell'articolo [«Conti»](#accounts).

Le spese di chi, questo mese: «Attività» → «⋮» → «Filtro», filtro per conto.

##### Se serve sapere «chi deve a chi»

In un budget comune di solito non serve: i soldi sono comunque comuni. Ma se vi siete accordati per dividere qualcosa a metà, un tag con «Conguaglio» attivo per quegli acquisti mostra chi deve a chi e quanto. Approfondisci nell'articolo [«Beneficiari e tag»](#payees-tags).

### Assegnare i soldi {#scenario-together-assign}

Dividere uno stipendio tra le buste è più facile per una persona sola, o per due davanti allo stesso schermo.

##### Perché non ognuno dal proprio telefono

Se tutti e due cambiate nello stesso momento quanto è messo da parte nella stessa categoria, vince la modifica arrivata per ultima nel cloud, oppure l'app mostra un «Conflitto: …» e chiede di scegliere. L'importo nella busta potrebbe non essere quello concordato.

Mettetevi d'accordo su chi assegna. Prima di cominciare apri l'app e lasciale un paio di secondi per sincronizzarsi, così vedi le ultime spese dell'altro.

##### Che cosa vedete tutti e due

«Non assegnato», il saldo di ogni busta, «Sforamento» e «Sta finendo» in «Panoramica» sono comuni. Se «Spesa» diventa gialla, la vedete tutti e due, e parlate degli stessi numeri.

### Pagamenti pianificati {#scenario-together-scheduled}

Affitto e abbonamenti sono comuni, e la scadenza arriva su tutti e due i telefoni.

##### Conferma una persona sola

Se due persone toccano «Conferma» sullo stesso pagamento prima che i telefoni si siano sincronizzati, la transazione viene registrata **due volte**. Mettetevi d'accordo su chi conferma i pagamenti pianificati, oppure lasciate sincronizzare l'app prima di confermare. La transazione in più si elimina in «Attività».

I promemoria delle scadenze arrivano su tutti e due i telefoni, a chi li ha attivati. Ognuno li imposta sul proprio telefono: «Impostazioni» → «Promemoria».

### Tutti i giorni {#scenario-together-daily}

##### Hai registrato qualcosa? Sincronizza

L'app si sincronizza quando la apri, non quando la riduci a icona. Hai registrato un acquisto grosso e sai che l'altro sta per guardare il budget? Tocca l'icona della sincronizzazione in «Panoramica».

##### Il promemoria della sera vi conta tutti e due

«Ricordami di inserire le spese» tace se nel budget oggi ci sono già spese, anche quelle inserite dall'altro e arrivate con la sincronizzazione. Se volete che ricordi a ciascuno, ognuno registri le sue spese in giornata.

##### Le «Ultime transazioni» sono comuni

In «Panoramica» vedi che cosa ha comprato l'altro: i suoi acquisti compaiono lì dopo una sincronizzazione.

### Errori frequenti {#scenario-together-mistakes}

| Che cosa è successo | Perché, e che cosa fare |
|---|---|
| Su un telefono ci sono più spese che sull'altro | I telefoni sono entrati nel cloud con account diversi: sono due cloud diversi. Accedi ovunque con un solo account, separato, per il budget. |
| Una transazione è comparsa due volte | L'avete inserita tutti e due: per esempio uno scontrino comune l'ha registrato chi ha pagato e anche chi ha portato le borse. Accordatevi: registra chi ha usato la sua carta. |
| Un pagamento pianificato è stato registrato due volte | Tutti e due avete toccato «Conferma». Elimina la transazione in più; d'ora in poi conferma una persona sola. |
| «Il cloud è protetto da password» su un telefono | Un telefono ha la password impostata, l'altro non ce l'ha o ne ha una diversa. Impostate la stessa. |
| Il simbolo della valuta è diverso tra voi due | La valuta del budget vive sul dispositivo. Correggila in «Impostazioni» → «Valuta del budget». |

## "Coppia: spese comuni e soldi personali" {#scenario-couple}

Ognuno ha il suo stipendio e le sue spese, mentre casa, cibo e vacanze si dividono a metà. Come gestirlo nell'app oggi, che cosa ancora non sa fare e come fare i conti una volta al mese.

*il tag «comune» nel modulo della transazione e il blocco «I miei tag» in «Panoramica»*

### Che cosa funziona oggi {#scenario-couple-today}

L'ideale sarebbe questo: un budget comune, «Casa nostra», che tenete tutti e due, più uno personale ciascuno che l'altro non vede. Con un solo cloud comune **non funziona**: il perché è più sotto. Funziona invece se il budget comune ve lo passate via Wi-Fi a casa.

##### Perché

Un telefono accede al cloud con un solo account, e ogni budget su quel telefono si sincronizza in quel cloud. Anche la password del cloud è una per telefono, non per budget. Quindi un budget comune in un cloud comune e uno personale nascosto al partner non possono stare sullo stesso telefono: quello personale finirebbe nello stesso posto di quello comune.

I metodi che funzionano sono tre.

##### Budget personali e un tag «comune»

Ognuno ha il suo budget: nessuno vede i soldi dell'altro. Le spese comuni si segnano con un tag, e una volta al mese confrontate e pareggiate. I dettagli sono [più sotto](#scenario-couple-tag).

##### Due budget, quello comune via Wi-Fi

Su ogni telefono c'è il proprio budget e quello comune, «Casa nostra». Ognuno ha il suo cloud, e il budget comune ve lo passate via Wi-Fi a casa. I dettagli sono [più sotto](#scenario-couple-wifi).

##### Un solo budget comune per tutti e due

Tutti i soldi in un budget, i soldi personali come categorie a parte. Tutti e due vedete tutto. Va bene se non avete niente da nascondervi. I dettagli sono [più sotto](#scenario-couple-all-shared).

### Il metodo del tag «comune» {#scenario-couple-tag}

Ognuno ha il suo budget sul suo telefono: con il suo cloud o senza cloud. Ognuno registra le spese comuni nel proprio budget come sempre e ci mette un tag.

##### Come impostarlo, ognuno sul suo telefono

1. Crea una categoria per la tua parte di spese comuni: per esempio «Famiglia» nel gruppo «Spese fisse». Ogni mese mettici quanto avete concordato di versare nella cassa comune.
2. Hai pagato qualcosa di comune, la spesa per casa, le utenze? Registra l'acquisto in questa categoria.
3. Nel campo «Tag» crea un tag «comune» e mettilo su ogni acquisto di questo tipo.
4. In «Panoramica», nel blocco «I miei tag» → «⋮» → «Scegli i tag…», spunta «comune» e imposta il periodo su «Totale di questo mese».

*Perché una categoria e non «Spesa» e «Utenze»:*
Il tuo budget personale risponde alla domanda «quanto spendo io». La tua parte della casa comune è una voce sola, come l'affitto: «Famiglia». Se vuoi vedere dove vanno i soldi comuni, apri la schermata del tag «comune»: c'è «Per categoria». In quel caso metti le spese comuni nelle categorie normali, e il tag le raccoglierà.

### Fine del mese: chi deve a chi {#scenario-couple-month}

1. Ognuno guarda in «I miei tag» quanto ha speso in «comune» questo mese.
2. Sommate i due importi e dividete a metà: è la parte di ciascuno.
3. Chi ha speso meno della sua parte manda la differenza all'altro.

**Esempio.** Giulia ha speso 1.200 € in spese comuni, Marco 800 €. In tutto sono 2.000 €, quindi la parte di ciascuno è 1.000 €. Marco manda 200 € a Giulia.

##### Come registrare il trasferimento

- **Marco**: una spesa di 200 € nella categoria «Famiglia» con il tag «comune»: è anche il suo contributo alla cassa comune.
- **Giulia**: 200 € in arrivo da Marco nella stessa categoria «Famiglia», con lo stesso tag: i soldi sono tornati nella busta. Come registrare un rimborso in una categoria è nell'articolo [«Modulo della transazione»](#entry).

In «I miei tag» di Marco diventano 1.000 €. In quelli di Giulia restano 1.200 €: il blocco conta solo le spese. I suoi 1.000 € sono nella schermata del tag «comune»: «Ricevuto» 200 € e «Netto» 1.000 €.

Confrontate con «I miei tag» **prima** del trasferimento: dopo, i numeri sono già pareggiati.

*E il «Conguaglio» sul tag?:*
«Conguaglio» calcola «speso meno ricevuto» nel **tuo** budget: va bene quando dividi una spesa con qualcuno che non scrive nel tuo budget, un viaggio con gli amici, un regalo di gruppo. Per una coppia con due budget mostra solo la tua metà del quadro: il contributo dell'altro nel tuo budget non c'è. Quindi qui confrontate con «I miei tag». Sul «Conguaglio» c'è l'articolo [«Beneficiari e tag»](#payees-tags).

### Due budget, quello comune via Wi-Fi {#scenario-couple-wifi}

Su ogni telefono ci sono due budget: il proprio e quello comune, «Casa nostra». Ognuno ha il suo cloud: il suo account, la sua password. Tutti e due i budget vanno nel cloud del proprietario del telefono, e l'altro lì non li vede. Vi passate solo «Casa nostra», via Wi-Fi, quando siete tutti e due a casa.

##### Come impostarlo

1. Ognuno collega un cloud sul suo telefono con il suo account, come sempre.
2. Giulia crea il budget «Casa nostra»: tocca il nome del budget nell'intestazione della «Panoramica», lì c'è l'elenco dei budget e un budget nuovo. Marco crea sul suo telefono un budget vuoto con lo stesso nome.
3. La prima volta Marco riceve «Casa nostra» da Giulia via Wi-Fi (come, è più sotto) e sceglie «Sostituisci completamente»: il suo budget vuoto diventa una copia di quello di Giulia.

##### Lo scambio a casa

1. **Aprite tutti e due «Casa nostra».** Lo scambio avviene tra i budget aperti.
2. «Impostazioni» → «Trasferimento locale». Giulia: «Avvia il server». Marco: «Scansiona il QR» → «Ricevi i dati» → «Unisci».
3. Giulia: «Ferma il server».

Lo scambio va in tutte e due le direzioni: Marco riceve le modifiche di Giulia, e le sue vanno a Giulia, transazioni e foto degli scontrini. Non importa chi di voi invia e chi riceve.

**«Sembra un altro budget»: tocca «Annulla».** Se uno di voi ha aperto il proprio budget invece di «Casa nostra», i due budget non hanno né conti né transazioni in comune, e l'app chiede prima di unirli. «Continua comunque» verserebbe le spese personali nel budget comune, e non ci sarebbe modo di separarle di nuovo.

*E se i budget si sono uniti?:*
Separarli a mano non si può, ma si possono riportare tutti e due a un backup automatico: l'app li fa da sola, di default ogni 5 giorni. Lo scambio va in tutte e due le direzioni, quindi i budget rovinati sono due: quello personale di Marco (ci è entrata «Casa nostra») e «Casa nostra» di Giulia (ci sono entrate le spese personali di Marco). Ognuno sistema il suo sul proprio telefono.

1. Apri il budget rovinato. «Impostazioni» → «Backup».
2. Trova un backup di **questo** budget (il nome è nella riga del backup) con una data **precedente** allo scambio. Tocca l'icona dell'orologio con la freccia → «Ripristina». Dopo, **non toccare «Sincronizza»**: nel cloud c'è ancora il budget unito.
3. Elimina il file di sincronizzazione di questo budget nel tuo cloud, come nell'articolo [«Cloud e backup»](#sync-rollback), passi 2–4. Ognuno ha il suo cloud, e lì questo budget lo scrive solo il tuo telefono, quindi la parte sui più dispositivi non serve.
4. Le modifiche fatte dopo il backup andranno perse. Quelle comuni si recuperano: quando Giulia ha riportato indietro «Casa nostra», scambiate ancora una volta con tutti e due su «Casa nostra», e le modifiche comuni le tornano da «Casa nostra» di Marco, la cui copia è pulita. Le spese personali inserite dopo il backup andranno registrate di nuovo.

Prima del primo scambio conviene fare dei backup a mano: ognuno sul suo telefono, e di **tutti e due** i budget, perché il backup si fa del budget aperto. Apri il tuo budget → «Backup» → «Crea un backup adesso», poi apri «Casa nostra» e ripeti. Così torneresti non a un backup automatico di cinque giorni prima, ma allo stato subito prima dello scambio.

*La password del cloud deve coincidere?:*
No. Il trasferimento via Wi-Fi è cifrato con il codice di conferma sullo schermo del telefono che invia; la password dei backup non c'entra. La password nel blocco «Cifratura del cloud» chiude solo il **tuo** cloud. Deve essere la stessa solo quando due telefoni scrivono in un solo cloud, e qui i cloud sono diversi.

*E se avete modificato fuori casa?:*
Ognuno tiene «Casa nostra» sul suo telefono: registri un acquisto in negozio, ed è subito nella tua copia e nel tuo cloud. Scambiate a casa, e tutti e due avete tutto. Se un telefono ha ancora una versione più vecchia dell'app, le modifiche di chi riceve non tornano indietro: l'app lo dice; allora scambiate di nuovo, invertendo i ruoli. Se avete modificato tutti e due la stessa transazione, resta la modifica più recente, come con la sincronizzazione normale.

Il prezzo: il budget comune è allineato solo quando siete tutti e due a casa e avete fatto lo scambio.

### Un solo budget comune per tutti e due {#scenario-couple-all-shared}

Se non ci sono segreti personali, la cosa più semplice è tenere tutto insieme: così vedete il quadro completo e un solo «non assegnato» per tutti e due.

- Impostazione: come nello scenario [«In due o più in un solo budget»](#scenario-together), un account cloud a parte per il budget, con accesso su tutti e due i telefoni.
- Soldi personali: come categorie a parte, «Personale di Giulia», «Personale di Marco». Ogni mese ci va l'importo concordato; come spenderlo lo decide il proprietario.
- Conti: ognuno ha i suoi, «Carta di Giulia», «Carta di Marco». Così vedete chi ha pagato.

Il prezzo: tutti e due vedete tutto, sia le spese delle categorie «personali» sia i saldi delle carte.

### Che cosa ancora manca {#scenario-couple-not-yet}

Un budget comune che si sincronizza da solo tramite il cloud per tutti e due, accanto a budget personali nascosti al partner, e lo spostamento di una spesa comune dal budget personale a quello comune con un tocco: ancora non ci sono. Li faremo quando serviranno. Se servono a te, scrivi nella «Chat su Telegram» («Impostazioni», sezione «AIUTO E CONTATTI»): più messaggi così arrivano, prima succede.

## Freelance e reddito irregolare {#scenario-freelance}

I soldi arrivano quando il cliente paga: un mese abbondanza, quello dopo carestia. Come smettere di vivere da un pagamento all'altro con un reddito così, mettere da parte per le tasse e sapere quanto guadagni davvero.

*«Budget», «Panoramica», «Report»: tutto è più sotto*

### L'idea principale {#scenario-freelance-idea}

Con uno stipendio il mese è prevedibile: pagato il 5, basta fino al 5 successivo. Un freelance non conosce in anticipo le entrate del mese, quindi non può pianificare su di esse. Pianifica sui soldi che **hai già**.

##### Spendi ciò che hai guadagnato prima

Il mese vive di ciò che è arrivato prima. Ciò che arriva adesso lavora per il mese dopo. [Come](#scenario-freelance-last-month).

##### Livella con un cuscinetto

Un mese buono rimpingua la riserva, un mese magro ci attinge. [Come](#scenario-freelance-buffer).

##### Metti da parte subito le tasse

Una percentuale di ogni pagamento va nella sua busta prima che i soldi vengano spesi. [Come](#scenario-freelance-taxes).

### Spendere i soldi del mese prima {#scenario-freelance-last-month}

Registra ogni pagamento non in questo mese ma nel **prossimo**. Così il 1° tutto il mese è già pagato con soldi guadagnati, e lo dividi tra le buste una volta sola, non a pezzi dopo ogni pagamento.

##### Come registrare un pagamento

1. «+ Transazione» → «+ In entrata», beneficiario: il cliente, importo.
2. Tocca il campo «Categoria»: si apre «Dove mettere l'entrata».
3. Scegli «Entrate per dicembre» invece di «Entrate per novembre». Salva.

La data della transazione resta quella vera. Cambia solo il mese del budget in cui compaiono i soldi.

##### Da dove cominciare

Il primo mese dovrai sia spendere quello che hai sia risparmiare per il successivo. Comincia da un pagamento non ancora assegnato. Finché non hai abbastanza per un mese avanti, metti nel mese prossimo almeno una parte: l'app mostra quanto c'è già in «Budget del mese» in «Panoramica», la riga «Budget di dicembre».

L'obiettivo è un'«Età del denaro» di 30 giorni o più: vuol dire che spendi i soldi del mese prima. Approfondisci nell'articolo [«Panoramica»](#overview-age-month).

### Un cuscinetto per i mesi magri {#scenario-freelance-buffer}

Anche con i soldi un mese avanti, due mesi magri di fila capitano. Un cuscinetto è una busta che ti fa superare quei mesi.

##### Come impostarlo

1. La categoria «Fondo di emergenza», o una tua, «Cuscinetto».
2. Un obiettivo «Saldo»: l'importo è la tua spesa abituale di 3-6 mesi. Quanto fa: «Reddito medio al mese» e «Andamento delle spese», più sotto.
3. In un mese buono metti nel cuscinetto tutto ciò che supera il solito.

L'obiettivo «Saldo» fa sì che la riserva non si sciolga: ne spendi una parte, e l'app chiede di rimetterla. Approfondisci nell'articolo [«Obiettivi»](#goals-balance).

##### Un mese magro

Per le buste non è bastato, e le spese sono andate in rosso. Tocca l'importo rosso in «Budget» → «Copri da un'altra categoria» → sulla riga «Fondo di emergenza», «Prendi …». I soldi passano dal cuscinetto a dove c'è il meno. Approfondisci nell'articolo [«Budget»](#budget-screen).

### Le tasse, subito nella loro busta {#scenario-freelance-taxes}

La tassa su un pagamento si spende facilmente: i soldi sono sulla carta, e la tassa si paga il trimestre dopo.

##### Un obiettivo «% reddito»

1. La categoria «Tasse».
2. Un obiettivo «% reddito»: la percentuale che paghi. Sotto la percentuale lascia «Dal reddito di questo mese»: la tassa si calcola sui soldi arrivati, non sulla media.
3. Ogni pagamento aggiorna l'obiettivo da solo: è arrivato di più, l'obiettivo è salito, e «mancano …» dice quanto aggiungere.

Quello che metti da parte si accumula nella busta fino alla data del pagamento: il più passa di mese in mese. Approfondisci nell'articolo [«Obiettivi»](#goals-percent).

*Se registri le entrate nel mese prossimo:*
Allora l'obiettivo «% reddito» di questo mese è noto già il 1°: le entrate del mese sono arrivate il mese prima. Comodo: la tassa si mette da parte per prima, insieme alle altre buste.

### Sono arrivati soldi: dividili con un tocco {#scenario-freelance-income}

Dividere a mano ogni pagamento stanca. L'assegnazione automatica «Per percentuale» lo fa al posto tuo.

##### Impostalo una volta

1. In «Budget» tocca «non assegnato» nell'intestazione: si apre «Assegnazione automatica del budget».
2. «Per percentuale» → «Imposta le percentuali»: per esempio «Tasse» 5%, «Fondo di emergenza» 20%, «Investimenti» 10%.
3. Le percentuali vengono ricordate. Quello che non è coperto da una percentuale resta in «non assegnato»: assegnalo tu alle buste del mese.

Da lì in poi: sono arrivati soldi, tocca «non assegnato» → «Per percentuale». L'app divide esattamente ciò che è non assegnato in quel momento.

*Perché percentuali e non importi:*
Con un reddito irregolare un importo fisso un mese è impossibile e il mese dopo è ridicolo. Una percentuale sale e scende insieme alle entrate. L'arrotondamento: i chip «All'intero», «A 10», «A 100» sullo stesso foglio.

### Clienti e progetti {#scenario-freelance-clients}

##### Il cliente è il beneficiario

Registra ogni pagamento con il cliente nel campo «Beneficiario». Tocca il cliente in «Impostazioni» → «Beneficiari»: si apre la sua schermata. «Andamento delle entrate» mostra quanto paga in media, e il periodo «Anno» tutti i suoi pagamenti dell'anno. Si vede chi ti dà da vivere e chi paga due volte l'anno. Approfondisci nell'articolo [«Beneficiari e tag»](#payees-tags-payee).

##### Il progetto è un tag

Crea un tag per il progetto: «sito del bar». Mettilo sia sul pagamento del cliente sia sulle spese del progetto: un abbonamento a un servizio, un taxi per un incontro, un carattere tipografico. La schermata del tag mostra «Speso», «Ricevuto» e «Netto»: quanto ha reso davvero il progetto. Approfondisci nell'articolo [«Beneficiari e tag»](#payees-tags).

### Pagamenti attesi {#scenario-freelance-expected}

La fattura è partita, e i soldi sono promessi entro il 15. Per non dimenticare e vedere che cosa arriva, crea un pagamento pianificato.

1. «Impostazioni» → «Pagamenti pianificati» → «+ Pagamento».
2. «+ In entrata», il cliente, l'importo, la data promessa per il pagamento, «Ripeti»: «Una volta».
3. Il pagamento compare in «In arrivo» e nel «Calendario» in «Panoramica».
4. I soldi sono arrivati in tempo: «Conferma» nella schermata di conferma. Prima della scadenza: scorri a sinistra la riga del pagamento, «Registra». Il cliente è in ritardo: apri il pagamento e cambia il campo «Data».

Finché il pagamento non è confermato, non è nel budget: le buste non si riempiono con soldi promessi. Approfondisci nell'articolo [«Pagamenti pianificati»](#scheduled).

### Che cosa tenere d'occhio {#scenario-freelance-reports}

| Dove | Che cosa dice |
|---|---|
| «Panoramica» → «Budget del mese» | «Reddito medio al mese» su 12 mesi e «Budget di dicembre»: quanto hai già per il mese prossimo. |
| «Panoramica» → «Età del denaro» | 30 giorni o più: vivi con i soldi del mese prima. |
| «Panoramica» → «Spese del mese» | Se in questo momento spendi più del solito. |
| «Report» → «Entrate e uscite» | Una tabella mese per mese: entrate per fonte (ogni cliente ha la sua riga), uscite per gruppo e «Tasso di risparmio». Vedi sia la stagionalità sia chi paga quanto. |
| «Report» → «Andamento delle spese» | La tua spesa mensile abituale: la base per dimensionare il cuscinetto. |
| «Report» → «Flusso di denaro» | Dove sono andati i soldi guadagnati in un periodo, e quanto resta. |
| «Report» → «Età del denaro» | Come cresce mese per mese il tuo margine di tempo. |

Sui report approfondisci nell'articolo [«Report»](#reports).

### I soldi del lavoro a parte {#scenario-freelance-business}

Se il lavoro ha un suo conto e sue spese (servizi, attrezzatura, un commercialista), puoi tenerle in un **secondo budget**, per esempio «Lavoro». Tocca il nome del budget nell'intestazione della «Panoramica»: lì c'è il cambio di budget e un budget nuovo.

Il budget del lavoro contiene i pagamenti e le spese di lavoro. Quello che prendi per vivere va con un trasferimento sulla tua carta personale: nel budget del lavoro è una spesa, in quello personale un'entrata. Così il budget personale vive ogni mese con un importo costante, e tutti gli alti e bassi restano nel budget del lavoro.

## Da stipendio a stipendio {#scenario-paycheck}

I soldi finiscono prima del mese, e allo stipendio manca ancora una settimana. Come dividere quello che hai, arrivare al prossimo stipendio senza rosso e, un passo alla volta, uscire dalla corsa da un mese all'altro.

*«Budget», «Panoramica» e la schermata della categoria: tutto è più sotto*

### L'idea principale {#scenario-paycheck-idea}

Le buste non ti danno più soldi di quelli che hai. Ma ti mostrano **in anticipo** se basteranno fino allo stipendio: non l'ultimo giorno, ma il primo.

##### Assegna solo quello che hai

Una busta si riempie con soldi che sono già sui conti. Uno stipendio promesso non è ancora denaro. [Come](#scenario-paycheck-now).

##### Prima l'essenziale

Casa, cibo, andare al lavoro, medicine, la rata di un prestito. Tutto il resto viene dopo. [Come](#scenario-paycheck-now).

##### Un meno non è un fallimento

Sposta i soldi da un'altra busta e vai avanti. [Come](#scenario-paycheck-minus).

### Il giorno dello stipendio: dividilo subito {#scenario-paycheck-now}

Finché i soldi non sono divisi, sembrano tanti. Divisi nelle buste, dicono la verità: 200 € per il cibo fino al 5, e basta.

##### In ordine

1. Apri «Budget». In alto c'è «non assegnato»: tanti soldi non hanno ancora un compito.
2. Riempi prima le buste senza cui non arrivi al prossimo stipendio: affitto, utenze, «Spesa», andare al lavoro, medicine, la rata minima del prestito.
3. Poi tutto il resto, finché «non assegnato» non arriva a zero.
4. Non basta per tutto? Alcune buste restano vuote. Non è un errore ma una risposta onesta: per quella cosa questo mese i soldi non ci sono.

Come mettere soldi in una busta, passo per passo: l'articolo [«Budget»](#budget-screen).

*Il chip è diventato rosso: «Assegnato in eccesso»:*
Hai distribuito più di quanto hai sui conti. Riduci quanto è messo da parte in una delle buste: tocca l'importo e scrivi di meno. I soldi tornano in «non assegnato».

### Due stipendi al mese {#scenario-paycheck-two}

Soldi due volte al mese: li dividi due volte. Il primo va a ciò che serve fino al secondo. Il secondo al resto e a ciò che viene dopo.

##### Le bollette prima dello stipendio, come pagamenti pianificati

Crea pagamenti pianificati per affitto, utenze, telefono: «Impostazioni» → «Pagamenti pianificati» → «+ Pagamento». Compaiono nel blocco «In arrivo» e nel «Calendario» in «Panoramica», e il giorno prima della scadenza arriva un promemoria. Vedi quali bollette arrivano prima dello stipendio e quali dopo, e che cosa coprire con il primo. Approfondisci nell'articolo [«Pagamenti pianificati»](#scheduled).

### Quanto puoi spendere al giorno {#scenario-paycheck-until}

##### «≈ … al giorno»

Tocca una categoria in «Budget»: si apre la sua schermata. Sotto «Disponibile» c'è quanto puoi spendere ogni giorno fino a fine mese senza andare in negativo. Con 140 € in «Spesa» e dieci giorni alla fine del mese: «≈ 14 € al giorno». Approfondisci nell'articolo [«Schermata della categoria»](#category-screen).

##### «Sta finendo» in «Panoramica»

Nella busta ci sono ancora soldi, ma spendi più in fretta di quanto passa il mese: la categoria compare gialla nel blocco «Sta finendo». È il segnale di rallentare adesso, non tra una settimana. Approfondisci nell'articolo [«Panoramica»](#overview-blocks).

##### «Spese del mese»

Un blocco della «Panoramica»: se questo mese spendi più del solito a questa data.

### Un meno rosso {#scenario-paycheck-minus}

Hai speso più di quanto c'era nella busta: l'importo è rosso. Coprilo subito, prima che finisca il mese.

1. Tocca l'importo rosso in «Budget».
2. Nel foglio «Sforamento» tocca «Copri da un'altra categoria». Si apre «Da dove prendere il denaro:»: «Non assegnato» e ogni busta che ha soldi.
3. Tocca «Prendi …» accanto a una busta di cui puoi fare a meno. Il meno è coperto: «Sforamento coperto!».

Approfondisci nell'articolo [«Budget»](#budget-screen).

*Il meno è durato fino alla fine del mese:*
Si azzera, ma non senza lasciare traccia: il «non assegnato» del mese dopo si riduce dello stesso importo. Il prossimo stipendio risulta più piccolo esattamente di quel meno. Approfondisci nell'articolo [«Come funziona il budget»](#start-months).

*Più meno, e qualcosa in «non assegnato»:*
Tocca «non assegnato» nell'intestazione di «Budget» → «Copri tutti gli sforamenti». L'app copre tutti i meno del mese con i soldi non assegnati in un colpo solo.

### La carta di credito non è una via d'uscita {#scenario-paycheck-card}

La busta è vuota, ma sulla carta di credito c'è spazio. La tentazione è comprensibile, ma un acquisto con la carta di credito da una busta vuota è un meno **giallo**: i soldi non ci sono, e il debito cresce. Il mese dopo dovrai pagarlo con il nuovo stipendio, che quindi sarà di nuovo più piccolo. Approfondisci nello scenario [«Carte di credito e debiti»](#scenario-credit-yellow).

### Registra ogni giorno {#scenario-paycheck-daily}

Una busta dice la verità solo finché tutte le spese ci sono registrate. Un acquisto di ieri dimenticato, e «≈ … al giorno» ti mente.

- Il promemoria della sera: «Impostazioni» → «PIANIFICAZIONE» → «Promemoria» → «Spese del giorno» → «Ricordami di inserire le spese». Arriva solo se quel giorno non hai inserito niente. **Subito dopo l'installazione:** disattivato.
- Il modo più veloce di registrare è alla cassa: [con la voce](#voice) o [con lo scanner degli scontrini](#receipt). Non hai tempo di scegliere una categoria? [«In arrivo»](#entry-inbox), e la sera la sistemi.

### Come uscire dalla corsa da un mese all'altro {#scenario-paycheck-out}

L'obiettivo non è solo tirare avanti, ma un giorno vivere con soldi guadagnati un mese prima. Procedi un gradino alla volta.

(1)
##### Un piccolo cuscinetto

La categoria «Fondo di emergenza» con un obiettivo «Saldo»: per cominciare, abbastanza per almeno una settimana di spese. Si rompe il telefono: i soldi vengono da qui, non dalla busta del cibo. Approfondisci nell'articolo [«Obiettivi»](#goals-balance).

(2)
##### Le spese irregolari, un po' alla volta

Assicurazione, regali e riparazione delle scarpe smettono di rovinare il mese se metti da parte soldi per loro ogni mese. Un obiettivo «Entro una data» calcola quanto. Approfondisci nello scenario [«Risparmiare per qualcosa di grande»](#scenario-saving).

(3)
##### Soldi un mese avanti

Ogni mese lascia un po' in più. Quando hai messo da parte un mese intero, registra lo stipendio nel mese prossimo: «Categoria» → «Entrate per dicembre». Da lì in poi ogni mese è pagato in anticipo, e il giorno dello stipendio non conta più.

Quanto hai già per il mese prossimo: «Budget del mese» in «Panoramica», la riga «Budget di dicembre». Come sta andando: l'«Età del denaro»; 30 giorni o più vuol dire che sei uscito dalla corsa. Approfondisci nell'articolo [«Panoramica»](#overview-age-month) e nell'articolo [«Come funziona il budget»](#start-ladder).

## Carte di credito e debiti {#scenario-credit}

Una carta di credito, un prestito per l'auto, un debito che avevi prima dell'app. Come impostarli, come pagare perché il budget non menta, e come guardare il debito che si riduce.

*«Conti», «Budget» → «Pagamenti carte», «Report» → «Debito delle carte» e «Patrimonio»*

### Carta di credito {#scenario-credit-card}

La regola è una: un acquisto con la carta di credito spende i soldi della busta come un acquisto con la carta di debito. La differenza è dove aspettano quei soldi: non su un conto ma nella categoria della carta di credito, finché non paghi la banca.

##### Come impostarla

1. «Conti» → «⋮» → «Aggiungi un conto».
2. Tipo: «Carta di credito». Nome: come chiami la carta.
3. Importo: quanto devi alla banca adesso. Scrivilo e tocca «±» per renderlo negativo.
4. Salva. La carta va nella sezione «CARTE DI CREDITO», e in «Budget» compare una categoria con lo stesso nome nel gruppo «Pagamenti carte».

Quella categoria lasciala stare: l'app la usa per contare il debito di questa carta. Approfondisci nell'articolo [«Conti»](#accounts-screen).

##### Un acquisto

Registralo come sempre: conto, la carta di credito; categoria, quello che hai comprato. Hai fatto la spesa per 35 €: «Spesa» si è assottigliata di 35 €, e gli stessi 35 € sono passati nella categoria della carta per il pagamento. Non devi mettere da parte niente tu.

### Il debito che avevi prima di cominciare {#scenario-credit-old-debt}

Il debito iniziale, 800 € sulla carta dall'anno scorso, l'app non lo mette da parte: nelle buste i soldi per lui non ci sono mai stati.

Metti da parte i soldi nella categoria della carta di credito, come per qualsiasi busta: in «Budget» tocca il suo importo e scrivi quanto riesci questo mese. Tutto in una volta o un po' alla volta: decidi tu. Finché non li metti da parte, i soldi per saldarlo non ci sono.

### Il meno giallo {#scenario-credit-yellow}

Con la carta di credito hai speso più di quanto c'era nella busta: l'importo è diventato **giallo**, con l'icona della carta. Rosso, con l'icona del portafoglio, è un meno dei tuoi soldi.

##### Il rosso mangia i tuoi soldi

Un meno sulla carta di debito o in contanti. A fine mese riduce il «non assegnato» del mese dopo.

##### Il giallo fa crescere il debito

Non hai speso soldi: li hai presi in prestito. Nella categoria della carta di credito è andata solo la parte coperta; per il resto i soldi per il pagamento non ci sono.

##### Che cosa fare

Un meno giallo si copre come uno rosso: tocca l'importo → «Copri da un'altra categoria» → «Prendi …» da un'altra busta. Allora i soldi per il pagamento si completano da soli. Non ci sei riuscito? Il mese dopo metti la differenza direttamente nella categoria della carta.

### Saldare la carta {#scenario-credit-payment}

Quanto pagare alla banca lo mostra la categoria della carta di credito in «Budget»: tanto è già messo da parte per il pagamento.

1. «+ Transazione», conto: la tua carta di debito.
2. «Beneficiario» → la sezione «TRASFERIMENTI» → la tua carta di credito. L'intestazione del modulo diventa grigia, e la categoria non serve.
3. Importo: quanto paghi. Salva.

I soldi sulla carta di debito scendono, scende il debito della carta di credito, e con lui l'importo messo da parte nella sua categoria. Le buste non cambiano: la spesa l'hai fatta prima, con gli acquisti. Approfondisci nell'articolo [«Modulo della transazione»](#entry-transfer).

*Pagare tutto o il minimo:*
Nella categoria della carta di credito c'è esattamente quanto hai speso con la carta dalle buste. Paga ogni mese tutto quello che è messo da parte, e non si accumula nuovo debito. Paga solo il minimo, e il resto rimane nella categoria ad aspettare; sul debito che resta la banca applica gli interessi.

### Interessi e commissioni della carta {#scenario-credit-card-interest}

La banca ha addebitato interessi o una commissione di servizio: è una spesa.

Registra una spesa: conto, la carta di credito; beneficiario, la banca; categoria, una sua, per esempio «Interessi e commissioni». La busta si riduce, e i soldi per il pagamento si mettono da parte, come per qualsiasi acquisto. Si vede anche nei report: quanto ti costa questo credito.

### Prestito {#scenario-credit-loan}

Un prestito per l'auto, un mutuo, un acquisto a rate: soldi già spesi che restituisci a pezzi.

##### Come impostarlo

1. «Conti» → «⋮» → «Aggiungi un conto».
2. Tipo: «Prestito». Importo: quanto resta da restituire secondo l'estratto della banca, con il segno meno («±»).
3. Il conto va nella sezione «Debiti». È fuori budget: questi soldi non hanno buste, e il budget non tocca il debito iniziale.

##### Una busta per la rata

Crea una categoria per la rata mensile, per esempio «Prestiti» nel gruppo «Spese fisse», e un obiettivo «Al mese» per l'importo della rata. Ogni mese l'obiettivo ti ricorda di mettere da parte i soldi. Approfondisci nell'articolo [«Obiettivi»](#goals-monthly).

### Pagare un prestito {#scenario-credit-loan-payment}

1. «+ Transazione», conto: la carta con cui paghi.
2. «Beneficiario» → «TRASFERIMENTI» → il conto del prestito.
3. Il prestito è fuori budget, quindi l'app chiede una categoria: scegli «Prestiti». I soldi escono dalla busta, e il debito sul conto del prestito scende.

*La banca dice che 80 € della rata sono interessi:*
Registra tutta la rata come un solo trasferimento, come sopra. Poi una volta al mese registra gli interessi sul conto del prestito stesso: «− In uscita», conto: il prestito; beneficiario: la banca; importo: gli interessi. La categoria non serve: il conto è fuori budget. Così il debito nell'app coincide con quello della banca, e la busta «Prestiti» cede esattamente la tua rata.

*Un promemoria della rata:*
Crea un pagamento pianificato come trasferimento: «Impostazioni» → «Pagamenti pianificati» → «+ Pagamento», «Beneficiario» → «TRASFERIMENTI» → il conto del prestito, categoria «Prestiti», «Ripeti»: «Mensile». Il pagamento compare nelle schermate di tutti e due i conti, un promemoria arriva in anticipo, e «Conferma» registra il trasferimento. Lo stesso vale per il pagamento della carta di credito: dalla carta di debito alla carta di credito. Approfondisci nell'articolo [«Pagamenti pianificati»](#scheduled-new).

### Seguire il debito {#scenario-credit-watch}

| Dove | Che cosa dice |
|---|---|
| «Conti» | Le sezioni «CARTE DI CREDITO» e «Debiti»: quanto devi adesso. |
| «Budget» → «Pagamenti carte» | Quanto è messo da parte per saldare ogni carta. |
| «Report» → «Debito delle carte» | Il debito di tutte le carte di credito mese per mese: se scende o cresce. Disponibile se hai una carta di credito. |
| «Report» → «Patrimonio» | Tutto ciò che possiedi meno tutti i debiti. Ogni rata del prestito fa salire la linea. |

Sui report approfondisci nell'articolo [«Report»](#reports-capital).

## Risparmiare per qualcosa di grande {#scenario-saving}

Un portatile, una ristrutturazione, un'auto, l'anticipo per una casa. Come mettere da parte un po' alla volta, vedere se arrivi in tempo e non spendere i risparmi per sbaglio.

*«Budget», «Obiettivi», la schermata della categoria*

### Una busta solo per l'acquisto {#scenario-saving-envelope}

I soldi per il portatile mescolati con quelli per vivere si spendono per primi. Una busta a parte li protegge: finché stanno in «Portatile», non compaiono in «Spesa».

1. In «Budget» trova il gruppo con «Acquisti importanti» e «Viaggi e vacanze».
2. Tocca «⊕» accanto al suo nome: una categoria nuova. Chiamala come l'acquisto: «Portatile».
3. Oppure risparmia nella categoria già pronta «Acquisti importanti», se l'acquisto è uno solo.

Approfondisci nell'articolo [«Budget»](#budget-screen).

### Un obiettivo «Entro una data» {#scenario-saving-goal}

Di' all'app quanto ed entro quale mese: lei calcola quanto mettere ogni mese.

1. Tocca la categoria in «Budget» → la scheda «Obiettivo» → «Aggiungi un obiettivo».
2. «Tipo di obiettivo»: «Entro una data».
3. «Importo»: il prezzo dell'acquisto; «Accumulare entro il mese»: quando ti serve.
4. «Salva».

Un portatile da 2.400 € in sei mesi: l'obiettivo chiederà 400 € al mese. Salti un mese, e quello che manca si spalma sui mesi restanti, quindi la quota cresce. Metti di più, e le successive si riducono. Approfondisci nell'articolo [«Obiettivi»](#goals-bydate).

*Risparmiare senza scadenza:*
Un obiettivo «Saldo»: nella busta deve esserci questo importo, quando non importa. Va bene per «un'auto nuova, un giorno» e per un cuscinetto di emergenza. Approfondisci nell'articolo [«Obiettivi»](#goals-balance).

### Sono in tempo {#scenario-saving-pace}

##### Una stima veloce nella schermata della categoria

Tocca la categoria: un obiettivo «Entro una data» ha sotto la barra un selettore, «Per importo» e «Per scadenza». Muovi «Mettere da parte al mese»: vedi in che mese ci arrivi. Muovi il mese: vedi quanto mettere. Ti piace la nuova data? «Usa come scadenza: …». Approfondisci nell'articolo [«Obiettivi»](#goals-card).

##### Questo mese manca qualcosa

In «Budget» sotto l'importo ci sono una bandierina e «mancano …». Il chip «Insufficiente» sopra l'elenco lascia solo quelle categorie. In «Panoramica» quello che manca si vede nei blocchi «Obiettivi» e «In arrivo».

### Dove sono i soldi {#scenario-saving-where}

I risparmi spesso si tengono su un conto a parte: un conto deposito, un deposito vincolato, un salvadanaio. Come imposti quel conto decide se i soldi restano nella busta.

##### Nel budget: per un acquisto

Un conto di tipo «Conto bancario». Hai spostato 400 € dal conto corrente ai risparmi: la busta «Portatile» non è cambiata, i soldi si sono spostati ma sono ancora tuoi e ancora nel budget. L'obiettivo li vede e non li chiede di nuovo. **Risparmi per un acquisto? Scegli questa opzione.**

##### Fuori budget: per il patrimonio

Un conto di tipo «Solo monitoraggio»: investimenti, un fondo pensione. L'app registra un trasferimento lì come soldi che escono da una busta: chiede una categoria, e la busta si svuota. Per un acquisto non va: l'obiettivo chiederà di nuovo i soldi, anche se li hai.

Approfondisci nell'articolo [«Conti»](#accounts-kinds).

### Più obiettivi insieme {#scenario-saving-many}

Una vacanza, un portatile e i regali per le feste: questo mese i soldi potrebbero non bastare per tutto.

«Budget» → «⋮» → «Assegna agli obiettivi». L'app distribuisce «non assegnato» su tutti gli obiettivi in una volta. Non basta per tutto? Gli obiettivi ricevono i soldi in ordine, dall'alto in basso, come sono disposte le categorie in «Budget». Tieni più in alto ciò che conta: «⋮» → «Cambia l'ordine». Approfondisci nell'articolo [«Obiettivi»](#goals-allocate).

### L'acquisto {#scenario-saving-buy}

1. Registra l'acquisto come sempre, nella categoria «Portatile». La busta si svuota: è per questo che risparmiavi.
2. È costato meno? Il resto rimane nella busta. Serve altrove? In «Budget» tocca l'importo di «Portatile» e scrivi di meno: la differenza torna in «non assegnato».
3. È costato di più? L'importo diventa rosso. Toccalo → «Prendi …» da un'altra busta.
4. L'obiettivo non serve più? «Budget» → «⋮» → «Obiettivi» → tocca la categoria → «Elimina». I soldi nella busta restano. La categoria con l'acquisto in sé non si può eliminare, solo nascondere.

*L'hai comprato con la carta di credito:*
Va bene anche così: i soldi di «Portatile» si mettono da parte per saldare la carta. L'hai comprato a credito o a rate? È un debito; come seguirlo è nello scenario [«Carte di credito e debiti»](#scenario-credit-loan).

### Quanto risparmio {#scenario-saving-pay-yourself}

Il blocco «Paga te stesso» in «Panoramica» mostra quale percentuale delle entrate metti da parte: nel mese, in tre mesi e nell'anno. La norma è il 10%. Quali categorie contano come «risparmiate» lo scegli in «Impostazioni → Budget → Paga te stesso»: «Acquisti importanti», «Portatile», «Fondo di emergenza». Approfondisci nell'articolo [«Panoramica»](#overview-blocks).

## In viaggio con gli amici {#scenario-trip}

Hai pagato l'alloggio per quattro, un amico ha pagato la cena, la benzina si divide a metà, e all'estero ci sono pure contanti in un'altra valuta. Come risparmiare per un viaggio, vedere quanto è costato e non perdere il filo di chi deve a chi.

*il tag del viaggio, «Conguaglio» nella schermata del tag, il modulo della transazione*

### Prima del viaggio {#scenario-trip-before}

Risparmia in «Viaggi e vacanze» con un obiettivo «Entro una data»: l'importo è quanto pensi di spendere, il mese è quando parti. L'app calcola la quota mensile. Approfondisci nello scenario [«Risparmiare per qualcosa di grande»](#scenario-saving-goal).

### Un tag per il viaggio {#scenario-trip-tag}

Le spese del viaggio finiscono in categorie diverse: «Spesa», «Trasporti», «Viaggi e vacanze». Un tag le raccoglie.

1. Al primo acquisto del viaggio apri «Dati aggiuntivi» → «Tag» → scrivi un nome, per esempio «Svizzera», → «Crea il tag «…»».
2. Metti questo tag su ogni acquisto del viaggio.
3. «⋮» del tag → «Mostra in I miei tag»: il totale del viaggio sarà in «Panoramica».

La schermata del tag mostra «Speso» e «Per categoria»: quanto è costato il viaggio e dove sono andati i soldi. Approfondisci nell'articolo [«Beneficiari e tag»](#payees-tags-tag).

### Paghi per tutti {#scenario-trip-pay-for-all}

Hai pagato l'alloggio per quattro: 800 €. La tua parte è 200 €, e gli altri 600 € devono tornare a te.

##### Dividi l'importo tra la tua parte e quella degli amici

1. Registra l'acquisto da 800 €, conto: la tua carta; tag: «Svizzera».
2. «Categoria» → «Dividi l'importo».
3. La prima parte è «Viaggi e vacanze», 200 €: è la tua.
4. Anche la seconda parte è «Viaggi e vacanze», 600 €, e su di essa «+ tag» → un tag nuovo, «Svizzera: gli amici restituiscono».
5. Apri la schermata del tag «Svizzera: gli amici restituiscono» → «⋮» → «Conguaglio».

Adesso la schermata del tag dice «da raccogliere 600,00 €»: è quanto ti devono. Sugli importi divisi approfondisci nell'articolo [«Modulo della transazione»](#entry-split).

*Perché un secondo tag e non uno solo:*
«Conguaglio» calcola lo speso meno il ricevuto. Se lo attivassi per «Svizzera», anche la tua parte resterebbe lì come «Da raccogliere», e il conto non tornerebbe mai. Un tag solo sulla parte degli amici arriva a zero quando tutto è restituito.

### Un amico ti ha restituito i soldi {#scenario-trip-paid-back}

1. «+ Transazione» → «+ In entrata». Beneficiario: l'amico; importo: quanto ha restituito; conto: dove sono arrivati i soldi.
2. «Categoria» → «In una categoria di spesa…» → «Viaggi e vacanze». Non è un'entrata: sono soldi tuoi che tornano nella busta.
3. Tag: «Svizzera» e «Svizzera: gli amici restituiscono».

Quando tutti e tre ti hanno restituito i soldi, la schermata del tag «Svizzera: gli amici restituiscono» dice «Saldato», in verde. E per «Svizzera» il «Netto» sarà di 600 € più basso dello «Speso»: per l'alloggio resta esattamente la tua parte. Approfondisci nell'articolo [«Modulo della transazione»](#entry-refund).

### Ha pagato un amico {#scenario-trip-friend-paid}

Un amico ha pagato la cena, e la tua parte è 50 €. Dalla tua carta non è ancora uscito niente: non c'è niente da registrare.

Quando restituisci i soldi all'amico, registralo allora: una spesa, beneficiario: l'amico; categoria: «Viaggi e vacanze»; tag: «Svizzera». Finché non paghi, tieni il debito a mente o in una nota: l'app non segue i portafogli degli altri.

### All'estero {#scenario-trip-abroad}

##### Paghi con la tua carta

La banca addebita i soldi nella valuta della carta. Registra l'importo che la banca ha addebitato: lo vedi nell'app della banca. L'importo in valuta locale, se ti serve, va nella nota: «cena 42 CHF».

##### Hai preso contanti in valuta straniera

Crea un conto «Contanti CHF»: «Conti» → «⋮» → «Aggiungi un conto», tipo «Solo monitoraggio», «Valuta del conto»: CHF. Solo un conto fuori budget può avere una valuta sua. Come lavorarci è spiegato più sotto.

##### Cambiare e spendere i contanti

1. Hai cambiato i soldi: registra un trasferimento dalla tua carta a «Contanti CHF». Sotto il beneficiario compaiono «Accreditato» e «Tasso»: quanti franchi hai ricevuto.
2. Il conto è fuori budget, quindi l'app chiede una categoria: «Viaggi e vacanze». I soldi sono usciti dalla busta già al momento del cambio.
3. Registra le spese in contanti in franchi sul conto «Contanti CHF»: la categoria non serve, la busta ha già pagato. Metti il tag «Svizzera» come sempre.
4. Ti sono avanzati franchi e li hai cambiati indietro? Un trasferimento da «Contanti CHF» alla tua carta, «Categoria» → «In una categoria di spesa…» → «Viaggi e vacanze». I soldi tornano nella busta.

Sulle valute approfondisci nello scenario [«Più valute e casi particolari»](#scenario-currencies).

### Dopo il viaggio {#scenario-trip-after}

- La schermata del tag «Svizzera»: il «Netto» è quanto ti è costato il viaggio dopo tutte le restituzioni, «Per categoria» mostra dove sono andati i soldi. Comodo quando risparmi per il prossimo. Le spese in franchi sono su una riga a parte: non c'è conversione al cambio, e il cambio in sé è un trasferimento, quindi non è in «Speso».
- Il tag non serve più nella scelta? «⋮» del tag → «Nascondi dalla scelta». Sulle transazioni resta.
- In «Viaggi e vacanze» sono rimasti soldi? Lasciali lì fino alla prossima vacanza: il più passa di mese in mese.

## Più valute e casi particolari {#scenario-currencies}

Lo stipendio in una valuta, i risparmi in un'altra, un po' di bitcoin e i viaggi all'estero. Che cosa sa fare l'app con le valute, dove sono i limiti e come tenere i conti perché le buste non mentano.

*«Impostazioni» → «Valuta del budget», i conti fuori budget, un trasferimento con tasso*

### La regola principale {#scenario-currencies-rule}

**Un budget ha una sola valuta.** Tutte le buste, tutti i conti del budget e «non assegnato» sono in quella. Le altre valute vivono nei conti **fuori budget**: vedi quanto c'è, ma quei soldi non si dividono tra le buste.

*Perché funziona così:*
Una busta risponde a «quanto posso spendere per il cibo». Se dentro ci sono sia euro sia dollari, la risposta cambia ogni giorno insieme al cambio. Una sola valuta nelle buste, e la risposta resta sempre la stessa.

### Valuta del budget {#scenario-currencies-budget-currency}

«Impostazioni» → «Budget» → «Valuta del budget». L'elenco ha sessanta valute, quella attuale nella prima riga, con in alto una ricerca per nome e simbolo: «zloty» trova «Złoty».

Cambia solo il simbolo: l'app non converte gli importi. Se tenevi il budget in euro e scegli i dollari, 1.000 € diventano 1.000 $. Per questo la valuta si sceglie all'inizio, non a metà dei conti.

*Un budget per ogni valuta:*
Ogni budget ha la sua valuta. Vivi tra due paesi? Puoi tenere due budget: «Casa» in euro e «Londra» in sterline. Tocca il nome del budget nell'intestazione della «Panoramica»: lì c'è il cambio di budget e un budget nuovo; la valuta viene chiesta alla creazione.

### Un conto in un'altra valuta {#scenario-currencies-foreign-account}

1. «Conti» → «⋮» → «Aggiungi un conto».
2. Tipo: «Solo monitoraggio» (o «Prestito» se è un debito). Solo un conto fuori budget può avere una valuta sua.
3. Nella sezione «Valuta del conto» tocca il campo «Valuta»: si apre un elenco di sessanta valute, lo stesso del budget, con quella attuale nella prima riga e in alto la ricerca per nome e simbolo. I nomi sono nella lingua del paese: «zloty» trova «Złoty».
4. Criptovaluta: i chip sotto il campo, ₿, USDT, USDC.
5. Non c'è? Scrivila tu in «Oppure scrivi la tua (sigla)»: ETH, la sigla di un'azione o di un fondo. Gli importi del conto saranno etichettati con quella.
6. Importo: quanto c'è sul conto in quella valuta.

Il conto va nella sezione «FUORI BUDGET», con gli importi nel suo simbolo: «1.200,00 $». Approfondisci nell'articolo [«Conti»](#accounts-kinds).

### Il cambio {#scenario-currencies-exchange}

Hai comprato dollari con gli euro? È un trasferimento tra i tuoi conti, solo con un tasso.

1. «+ Transazione», conto: la tua carta in euro, «Beneficiario» → «TRASFERIMENTI» → il conto in dollari.
2. Importo: quanti euro sono usciti.
3. Sotto il beneficiario ci sono «Accreditato» e «Tasso». Scrivi o il tasso o quanti dollari sono arrivati: l'altro si calcola. Il pulsante accanto al tasso ne inverte la direzione: euro per un dollaro o dollari per un euro.
4. Il conto in dollari è fuori budget: l'app chiede una categoria, cioè da quale busta sono usciti i soldi. Per esempio «Fondo di emergenza» o «Investimenti».

Approfondisci nell'articolo [«Modulo della transazione»](#entry-transfer).

*Hai rivenduto i dollari:*
Un trasferimento dal conto in dollari alla tua carta. Il campo «Categoria» apre «Dove mettere l'entrata»: «Entrate per …» se sono soldi nuovi da distribuire, «In una categoria di spesa…» se tornano nella busta da cui erano usciti.

### Vivere in un paese, risparmiare in un altro {#scenario-currencies-two-countries}

Il budget è nella valuta in cui sei pagato e spendi ogni giorno: euro, franchi, sterline. I soldi a casa, un deposito in un'altra valuta, dei dollari messi da parte «per ogni evenienza»: conti fuori budget, ognuno nella sua valuta. Le buste contano ciò con cui vivi, e il resto si vede accanto, in «Conti».

Le spese con la carta all'estero si registrano con l'importo che la banca ha addebitato nella valuta della carta. L'importo in valuta locale, se ti serve, va nella nota. Approfondisci nello scenario [«In viaggio con gli amici»](#scenario-trip-abroad).

### Criptovaluta {#scenario-currencies-crypto}

Un conto fuori budget, il chip ₿, USDT o USDC sotto il campo «Valuta», e l'interruttore «Criptovaluta» si attiva da solo: «8 decimali». Per una sigla tua (ETH, SOL) attivalo a mano. Hai scelto una valuta normale dall'elenco? L'interruttore si spegne.

Il numero di decimali si sceglie una volta: quando il conto ha transazioni, l'interruttore dice «Non modificabile: il conto ha transazioni».

### Valute senza centesimi {#scenario-currencies-no-cents}

Lo yen, il won e il dong non hanno sottounità, ma l'app mostra comunque «,00». È solo la visualizzazione: scrivi i numeri interi come sempre. Con l'inserimento «Con la virgola», 1500 è 1.500, non 15,00. Come si digitano gli importi: «Impostazioni» → «Lingua e formati» → «Inserimento importo».

### Come si scrivono gli importi {#scenario-currencies-format}

«Impostazioni» → «Lingua e formati» → «Formato importi»: i separatori delle migliaia e dei decimali, il simbolo della valuta a sinistra o a destra. Di partenza segue la lingua dell'interfaccia: in italiano «1.234,56 €». L'inglese su un telefono indiano ha subito lakh e crore: «₹12,34,567.89». Approfondisci nell'articolo [«Impostazioni»](#settings-formats).

### Che cosa manca {#scenario-currencies-not-yet}

- **I tassi di cambio da internet.** Il tasso lo scrivi tu, quando cambi. È anche una protezione: l'app non chiede i tassi a nessun servizio, quindi nessuno da fuori sa in quali valute sono i tuoi soldi. I tuoi dati restano con te, come dice anche l'[informativa sulla privacy](#settings-s-about).
- **La conversione in un'unica valuta.** Il «Patrimonio» somma solo i conti nella valuta del budget: un conto in dollari non è incluso. In «Conti» una sezione che ha un conto in un'altra valuta non mostra il totale: non c'è modo di sommare euro e dollari.
- **Conti del budget in un'altra valuta.** Il perché è [più sopra](#scenario-currencies-rule).

## Panoramica {#overview}

La prima schermata all'avvio: i soldi bastano, che cosa è urgente e che cosa arriva, in un solo elenco di schede.

*La scheda «Panoramica» al centro in basso nello schermo*

### A che cosa serve questa schermata {#overview-why}

La «Panoramica» si apre per prima a ogni avvio dell'app. È uno sguardo del mattino ai tuoi soldi: va tutto bene, che cosa sta finendo, che cosa arriva. Qui non dividi i soldi e non modifichi transazioni: per quello ci sono «Budget» e «Attività». Qui guardi e decidi dove andare dopo.

##### Va tutto bene

Ci sono soldi non assegnati, dov'è un meno, quali buste si svuotano più in fretta di quanto passa il mese.

##### Che cosa è già successo

Le ultime transazioni, le spese grandi, un calendario dei giorni di spesa.

##### Che cosa arriva

I pagamenti pianificati, gli obiettivi a cui mancano soldi e le spese del mese rispetto al solito.

Riduci a icona l'app per più di mezzo minuto, e al ritorno si riapre la «Panoramica». Se preferisci tornare dove avevi lasciato, sceglilo in «Impostazioni → Aspetto → Tornare a».

### Che cosa c'è nella schermata {#overview-screen}

Tocca uno screenshot per aprirlo a schermo intero.

[Schermata «Panoramica»: intestazione, il chip «Non assegnato» ed «Età del denaro», «Ultime transazioni», «Sta finendo»]

1. **Impostazioni**: l'ingranaggio. Tutte le impostazioni dell'app: sincronizzazione, backup, aspetto, lingua.

2. **Nome del budget**: toccalo per aprire l'elenco dei tuoi budget e passare a un altro.

   *Come funziona:*
   I budget possono essere più d'uno: per esempio personale e di famiglia, o uno vecchio che non vuoi eliminare. Per creare, rinominare o eliminare un budget: il menu «⋮» → «Budget» ([più sotto](#overview-menu)).

3. **Sincronizzazione**: due frecce in cerchio. Toccala: le tue modifiche vanno nel cloud, e qui arrivano quelle degli altri dispositivi.

   *Come funziona:*
   Il numero sull'icona è quante modifiche non sono ancora state inviate. Subito dopo una sincronizzazione l'icona lampeggia per 15 secondi: verde, è riuscita; rossa, no. Tieni il dito sopra, e l'app dice che cosa è successo.

   Un singolo errore di solito è la rete: la metropolitana, una casa in montagna. Se fallisce quattro volte di fila, l'icona resta rossa con un «!» dentro finché non va a buon fine. Nessun cloud collegato: l'icona ha il suo colore solito, senza numero.

4. **Il menu «⋮»**: budget, scelta dei blocchi, «Nascondi gli importi». È spiegato [più sotto](#overview-menu).

5. **«Non assegnato»**: soldi che sono sui conti ma non ancora divisi tra le buste. Toccalo, e l'app propone come distribuirli.

   *Come funziona:*
   La scritta cambia insieme al numero:

   - **«Non assegnato»**: ci sono soldi da distribuire. Nello screenshot sono 300 €: è arrivato uno stipendio, e le buste di novembre sono già riempite.
   - **«Tutto assegnato»**, in verde: ogni euro ha un compito. È l'obiettivo.
   - **«Assegnato in eccesso»**, in rosso: nelle buste è stato messo più di quanto c'è sui conti. Togli l'eccesso da qualche categoria nella schermata «Budget».

   Si può toccare solo quando c'è qualcosa da distribuire. Si apre il foglio «Assegnazione automatica del budget»: «Copri tutti gli sforamenti», «Sottofinanziato», «Assegnazione del mese scorso» e altri modi. Accanto a ognuno c'è quanto richiederebbe. Niente cambia finché non confermi. Sulle buste approfondisci nell'articolo [«Budget»](#budget).

6. **«Età del denaro»**: quanti giorni in media stanno fermi i tuoi soldi prima che tu li spenda.

   *Come funziona:*
   Nello screenshot sono 52 giorni: quello che spendi oggi ti è arrivato quasi due mesi fa. L'app prende le ultime dieci spese e guarda quale entrata ha pagato ciascuna: i soldi più vecchi si spendono per primi.

   Sotto i 30 giorni vivi da stipendio a stipendio, e ogni ritardo della paga colpisce il budget. Sopra i 30 spendi i soldi del mese prima, e il nuovo stipendio aspetta tranquillo il suo turno. Un meno: si è speso più di quanto c'era sui conti del budget. La clessidra sull'icona dice lo stesso: piena, 30 giorni o più; mezza vuota, meno; vuota, un meno.

   L'età si può calcolare in tre modi, e dai 30 giorni ha senso vivere con i soldi del mese prima. Tutto questo è [più sotto](#overview-age).

7. **Blocchi**: schede di riepilogo, una sotto l'altra. Quali mostrare e in che ordine lo decidi tu. Ogni blocco è spiegato [più sotto](#overview-blocks).

8. **«+ Transazione»**: registra una spesa o un'entrata. Sopra ci sono la fotocamera (uno scontrino dal QR) e il microfono (con la voce). Scorri giù, e i pulsanti si richiudono in un solo «+».

   *Come funziona:*
   È lo stesso modulo della schermata [«Attività»](#transactions): ogni scheda ha un modo per arrivarci.

### I blocchi in ordine {#overview-blocks}

Sotto il chip «Non assegnato» (richiami 5 e 6) vengono le schede. Qui sono nell'ordine che hanno subito dopo l'installazione. Un blocco che non ha niente da mostrare si nasconde da solo: niente tag, niente «I miei tag»; niente obiettivi, niente «Obiettivi».

Per togliere un blocco, rimetterlo o spostarlo più in alto: «⋮» → «Widget» ([più sotto](#overview-menu)).

[Il blocco «Ultime transazioni» nello screenshot della «Panoramica»]

#### Ultime transazioni

Le ultime cinque registrazioni: data, beneficiario, importo, categoria e nota. Comodo per controllare che tutto di ieri sia registrato.

*Come funziona:*
Le entrate hanno il segno «+», le spese il «−». Un importo diviso («Conad» nello screenshot) ha accanto l'icona della forchetta, e le sue categorie sono elencate separate da punti. Nello screenshot gli importi in arrivo sono due: uno stipendio e 43 € da Andrea, un amico che ha restituito la sua metà di «Conad». Non è un'entrata ma un rimborso in «Spesa» (come registrarlo è nell'articolo [«Modulo della transazione»](#entry)).

Qui le righe non si toccano. Per correggere una transazione apri [«Attività»](#transactions).

[Il blocco «Sforamenti e avvisi» nello screenshot della «Panoramica»]

#### Sforamenti e «Sta finendo»

Le buste che chiedono attenzione adesso. Tocca una riga per aprire la schermata di quella categoria.

*Come funziona:*
- **«Sforamento»**, in rosso: la categoria è in meno, hai speso più di quanto avevi messo da parte. L'icona del portafoglio vuol dire un meno dei tuoi soldi; prenderà dal «non assegnato» del mese dopo. L'icona della carta e il giallo vogliono dire un meno sulla carta di credito: è diventato debito della carta invece di mangiare i tuoi soldi. Per togliere un meno: la schermata [«Budget»](#budget).
- **«Sta finendo»**, in giallo: nella busta i soldi bastano ancora, ma spendi più in fretta di quanto passa il mese. L'app divide il piano del mese in parti uguali per giorno e lascia un margine del 15%. Nello screenshot oggi è il 10 novembre, e per «Spesa» si è speso più di quanto previsto a questa data, anche con il margine.
- **«Tutto sotto controllo»**: niente meno, niente avvisi. Il blocco mostra questo invece di restare vuoto.

Le categorie con esattamente zero restante qui non compaiono: il piano è stato rispettato al centesimo.

[Il blocco «Dove sono finiti i soldi» nello screenshot della «Panoramica»]

#### Dove sono finiti i soldi

Le cinque categorie più care del mese: importo, percentuale di tutte le spese e una barra della stessa lunghezza.

*Come funziona:*
Nello screenshot l'«Affitto» è il 76% delle spese di novembre: l'affitto si paga il 1°, tutto in una volta, mentre le altre spese si accumulano giorno dopo giorno. A fine mese le percentuali si livellano.

Fai scorrere la scheda a destra con il dito per vedere il mese scorso, a sinistra per il successivo. Per tornare al mese in corso: il chip «Oggi», che compare nell'intestazione della scheda quando ti sei spostato su un altro mese.

[Il blocco «In arrivo» nello screenshot della «Panoramica»]

#### In arrivo

I pagamenti pianificati più vicini e gli obiettivi a cui mancano soldi: fino a sei righe, per data.

*Come funziona:*
Un pagamento pianificato ha l'icona di un calendario, un obiettivo una bandierina. Nello screenshot gli obiettivi sono due: al «Fondo di emergenza» mancano 1.124,53 € entro la fine di novembre, a «Viaggi e vacanze» 100 €. L'importo in giallo è quanto bisogna ancora metterci.

Le righe non si toccano: per mettere soldi in una categoria, la schermata [«Budget»](#budget); i pagamenti pianificati, «Impostazioni → PIANIFICAZIONE».

[Il blocco «Budget del mese» nello screenshot della «Panoramica»]

#### Budget del mese

Da dove viene il numero «Non assegnato»: una scala dal saldo del mese prima fino al totale.

*Come funziona:*
Si legge dall'alto in basso, come uno scontrino:

- **Riporto da ottobre**: quanto non era stato assegnato il mese scorso.
- **Budget di novembre**: le entrate di questo mese; nello screenshot due stipendi da 1.400 € ciascuno.
- **Assegnato a novembre**: quanto è già stato diviso tra le buste.
- **Non assegnato**: il totale, lo stesso numero del chip in cima alla schermata.

Sotto la linea c'è il «Piano»: quanto c'è già per dicembre, le entrate medie al mese e quanto chiedono i tuoi obiettivi al mese, con la percentuale delle entrate. A volte compaiono altre righe, lo sforamento del mese scorso, soldi dai risparmi, soldi messi da parte in anticipo; il blocco nasconde le righe vuote.

La scheda si sfoglia in tutti e due i sensi, anche in avanti: puoi assegnare soldi per dicembre già a novembre.

[Il blocco «Patrimonio» nello screenshot della «Panoramica»]

#### Patrimonio

Tutto ciò che possiedi meno i debiti, e come è cambiato.

*Come funziona:*
In grande, il tuo patrimonio oggi: 12.209,72 € nello screenshot. A destra, quanto è cresciuto nel periodo (+4.343,99 € in 6 mesi); sotto, una linea per mese e una suddivisione: «Beni» (tutti i conti in più) e «Debiti» (carte di credito e prestiti).

Nel «⋮» del blocco: il periodo (6 mesi, 12 mesi, quest'anno o da sempre) e «Conti in altre valute»: questi conti compaiono come righe a parte nella loro valuta, senza conversione e fuori dal totale.

**Subito dopo l'installazione:** il blocco è disattivato; si attiva in «⋮» → «Widget».

[Il blocco «Obiettivi» nello screenshot della «Panoramica»]

#### Obiettivi

Quante categorie non arrivano al loro obiettivo questo mese, e di quanto. Toccalo per aprire la schermata «Obiettivi».

*Come funziona:*
Nello screenshot a due obiettivi mancano 1.224,53 € in tutto. Gli obiettivi si impostano nella schermata della categoria o nella schermata «Obiettivi»: «Mettere da parte ogni mese», «Accumulare entro …», «Mantenere sul saldo», «Percentuale del reddito» o «elenco».

[Il blocco «Paga te stesso» nello screenshot della «Panoramica»]

#### Paga te stesso

Quale percentuale delle entrate metti da parte per il te stesso del futuro: in un mese, tre mesi e un anno.

*Come funziona:*
La regola è vecchia e semplice: da ogni stipendio paga prima te stesso, e solo dopo tutti gli altri. La norma è il 10% delle entrate.

Nello screenshot a novembre è messo da parte l'11,2%, 34,00 € sopra la norma. Se è sotto la norma, sotto la percentuale c'è «manca», con un importo.

Quali categorie contano come «risparmiate» lo decidi tu: «Impostazioni → Budget → Paga te stesso». Di solito sono i risparmi: «Fondo di emergenza», «Investimenti». Se non ne scegli nessuna, il blocco non c'è.

[Il blocco «Spese grandi» nello screenshot della «Panoramica»]

#### Spese grandi

Le tre spese più grandi del mese: data, beneficiario, importo, categoria e nota.

*Come funziona:*
Aiuta a cogliere ciò che salta fuori: una spesa inaspettatamente cara si vede subito, non a fine mese.

**Subito dopo l'installazione:** il blocco è disattivato; si attiva in «⋮» → «Widget».

[Il blocco «Calendario» nello screenshot della «Panoramica»]

#### Calendario

Il mese come griglia di giorni: più è vivace la cella, più si è speso. Tocca un giorno per vedere che cosa è successo.

*Come funziona:*
Uno sguardo dettagliato con le modalità e il menu è [più sotto](#overview-heatmap).

[Il blocco «I miei tag» nello screenshot della «Panoramica»]

#### I miei tag

Fino a quattro tag: quanto si è speso sotto di loro, in che arco di tempo e quante transazioni.

*Come funziona:*
Un tag con «Conguaglio» mostra a destra quanto raccogliere o restituire per andare in pari: nello screenshot «#a metà» mostra «da raccogliere 43,00 €», un acquisto alla «Conad» è stato diviso con un amico, e lui ne ha già restituita metà. Tocca un tag per aprire la sua schermata. «Tutti i tag ›» in fondo al blocco: tutto l'elenco.

Nel «⋮» del blocco: «Scegli i tag…», quali quattro mostrare e in che ordine; e il periodo, «Totale per tutto il periodo» o «Totale di questo mese». Se non scegli niente, l'app mostra da sola i tag con transazioni negli ultimi 30 giorni. Niente tag, niente blocco.

Sui tag in sé c'è l'articolo [«Attività»](#transactions).

[Il blocco «Spese del mese» nello screenshot della «Panoramica»]

#### Spese del mese

Quanto hai speso dall'inizio del mese, rispetto a quanto spendi di solito a questa data.

*Come funziona:*
In grande, le spese dal 1°: 1.620,99 €. A destra, la differenza dal solito: +59,87 €, cioè un po' più del solito. La linea vivace è questo mese, quella sottile il solito.

«Di solito» è il valore di mezzo dei tuoi mesi passati nell'ultimo anno: un mese insolitamente caro non lo sposta. La scheda si sfoglia come «Dove sono finiti i soldi».

### Il calendario nel dettaglio {#overview-heatmap}

Il blocco più vivace della «Panoramica»: un mese intero su una scheda. Passaci sopra con gli occhi, e vedi quali giorni sono stati cari e quali sono passati senza nessuna spesa.

[Il blocco «Calendario»: chip Spese, Entrate, Pianificati, la griglia di novembre, oggi — il giorno 10, «3 giorni senza spese»]

(E)
#### Modalità

Che cosa colorare: «Spese», «Entrate» o «Pianificati».

*Come funziona:*
- **«Spese»**: sei sfumature. La cella più vivace è il giorno più caro del mese, e ogni gradino in giù è la metà. La vivacità risponde a «quante volte questo giorno è costato meno del più caro».
- **«Entrate»**: lo stesso per i soldi in arrivo, in verde.
- **«Pianificati»**: i giorni di scadenza dei pagamenti pianificati. Un giorno passato in cui tutto è stato registrato ha una spunta; dove un pagamento è saltato, il numero del giorno è rosso.

In modalità «Spese» un giorno futuro con un pagamento pianificato ha un contorno tratteggiato.

(F)
#### Il menu del calendario

Tre puntini nell'intestazione della scheda, a destra del mese. Imposta che cos'altro disegnare sulla griglia e che cosa mostrare nel foglio del giorno.

*Come funziona:*
**Il foglio del giorno** non è una voce del menu. Si apre quando tocchi un numero nella griglia del calendario: dal basso sale un elenco di ciò che è successo quel giorno (screenshot [più sotto](#overview-day)). Il menu imposta solo che cosa contiene quel foglio.

Voci in modalità «Spese»:

- **«Entrate come punti»**: un giorno in cui sono arrivati soldi ha un punto verde nella cella.
- **«Giornata intera nel foglio del giorno»**: tocca un numero, e il foglio del giorno mostra non solo le spese ma anche le entrate di quel giorno, come riga chiusa in fondo; toccala per aprirla. Disattivato, il foglio mostra solo le spese.

In modalità «Pianificati» le voci sono altre: mostrare i pagamenti futuri come riempimento della cella o come punto, e se evidenziare in rosso il numero di un giorno con un pagamento saltato.

**Subito dopo l'installazione** «Entrate come punti» e «Giornata intera nel foglio del giorno» sono disattivati.

(G)
#### Oggi

Oggi ha un contorno.

*Come funziona:*
Fai scorrere il calendario con il dito per vedere un altro mese, indietro e avanti senza limiti: fa anche da calendario normale, in cui vedi in che giorno della settimana cade una data. Per tornare: il chip «Oggi» nell'intestazione della scheda.

(H)
#### Giorni senza spese

Quanti giorni del mese sono passati senza nemmeno una spesa. A destra, la scala della vivacità.

*Come funziona:*
Una cella vuota nel passato è un giorno senza spese. Se quel giorno c'è stato solo un rimborso di un negozio, al posto del riempimento c'è un anello vuoto.

#### Il foglio del giorno: tocca un numero nel calendario {#overview-day}

Dal basso sale un foglio: nell'intestazione la data e il totale del giorno, sotto ogni transazione. Un importo diviso si mostra a parti: nello screenshot «Conad», 61 € di spesa e 25 € di detersivi.

[Foglio del giorno del 10 novembre: totale −43,00 €, due parti dell'acquisto alla «Conad», il rimborso di Andrea]

Come aprirlo: in «Panoramica» trova il «Calendario» e tocca il numero del giorno che ti serve; nello screenshot qui sopra è il 10, con il contorno di «oggi» (G). Il foglio mostra quello che colora il calendario: in modalità «Spese», le spese del giorno; in «Entrate», i soldi in arrivo. Per vederli tutti e due insieme, attiva «Giornata intera nel foglio del giorno» nel menu del calendario (F). Per chiudere il foglio, trascinalo giù o tocca fuori.

In modalità «Pianificati» il foglio è diverso: che cosa non è registrato, che cosa sì e che cosa arriva ancora. Fai scorrere una scadenza a sinistra, «Registra»; a destra, «Elimina».

### L'età del denaro nel dettaglio {#overview-age}

Il numero sul chip risponde alla domanda: quanti giorni sono stati fermi i miei soldi prima che li spendessi. Lo stipendio è arrivato il 1° ottobre, e il 5 novembre compri il pane con quello che resta dei soldi di ottobre: quei soldi hanno 35 giorni. L'app prende le ultime dieci spese, trova per ciascuna quale entrata l'ha pagata (prima i soldi più vecchi) e mostra la media.

##### Sotto i 30 giorni

Da stipendio a stipendio: le spese di oggi si pagano con l'ultimo stipendio, e ogni ritardo colpisce subito.

##### 30 o più

Un mese avanti: spendi i soldi del mese prima. È l'obiettivo del metodo; [che cosa fare dopo](#overview-age-month).

##### Un meno

Si è speso più di quanto c'era sui conti del budget.

#### Tre modi di calcolarla {#overview-age-modes}

L'età del denaro è una misura discutibile, e per lei non c'è una formula giusta unica. Per questo il modo lo scegli tu: «Impostazioni → Budget → Età del denaro». Il numero cambia subito, sia sul chip sia nel report «Età del denaro».

##### Classico (YNAB FIFO) · subito dopo l'installazione

Il modo di YNAB. Non vede affatto i trasferimenti, né verso i risparmi né dai risparmi. Una spesa per cui non avevi soldi pesa esattamente −1 giorno, che sia cento euro o diecimila.

Va bene se non tocchi i risparmi: allora è onesto e coincide con YNAB. Va male se vivi di trasferimenti dai risparmi: i soldi arrivano sul conto corrente, lui non li vede, e disegna allegri giorni positivi. Su un budget vero i conti erano a −3.000 €, coperti da trasferimenti da «Investimenti», e il Classico mostrava +10 giorni.

##### Con i risparmi · il più vicino al vero

Un trasferimento dai risparmi sono soldi che entrano nel budget, un trasferimento verso i risparmi soldi che escono. Una spesa oltre quello che avevi si misura in giorni delle tue entrate: hai speso una settimana di entrate oltre quello che avevi, circa meno 7 giorni.

Il risultato è la media delle ultime 10 spese, quindi una spesa in meno tra altre coperte si attenua.

##### Con risparmi e profondità del rosso

Come il precedente finché il budget è in più. Ma finché è in meno, non mostra la media ma la profondità del buco: quanti giorni delle tue entrate abituali ci vorranno per chiuderlo.

Non è più un'età ma un segnale d'allarme. Comodo mentre risali dal meno: il numero si riduce onestamente a ogni stipendio.

##### Quale scegliere

Il più vicino al vero è **«Con i risparmi»**: conta esattamente i soldi sui conti del budget, con tutto ciò che è arrivato dai risparmi ed è andato ai risparmi. Il Classico è onesto solo finché non tocchi i risparmi. La profondità del rosso è per chi è in meno adesso e vuole vedere quanto manca. Se non sposti soldi ai risparmi e indietro e non spendi più di quanto hai, tutti e tre mostrano lo stesso numero.

#### Età di 30 giorni o più: vivere con i soldi del mese prima {#overview-age-month}

Visto che le tue spese sono già pagate dall'ultimo stipendio, questo mese non ha bisogno di quello in corso. Dallo subito al mese dopo: così ogni mese comincia con i soldi pronti, e li assegni in anticipo invece di aspettare il giorno dello stipendio.

##### Come fare

1. Registra lo stipendio come sempre: «+ Transazione» → «+ In entrata», beneficiario, importo.
2. Tocca il campo «Categoria». Si apre il foglio «Dove mettere l'entrata».
3. Scegli «Entrate per dicembre», il mese prossimo, invece di «Entrate per novembre». Salva.

La data della transazione resta quella vera, il giorno in cui sono arrivati i soldi. Cambia solo il mese del budget in cui compaiono. Uno stipendio già registrato si sposta allo stesso modo: aprilo e cambia la categoria.

##### Da quale stipendio cominciare

Da quello che non hai ancora diviso tra le buste. Spostarlo riduce il «non assegnato» di questo mese dell'importo dello stipendio. Se dopo mostra un «Assegnato in eccesso» rosso, quei soldi lavorano già questo mese: riporta lo stipendio in questo mese e sposta il successivo.

##### Come cambia il budget

- **Questo mese** vive di ciò che è arrivato prima. Il nuovo stipendio non finisce più nel suo «non assegnato».
- **Il mese prossimo** riceve i suoi soldi in anticipo. Nella schermata «Budget» vai avanti con la freccia «›»: lo stipendio è già nel suo «non assegnato», e puoi riempire le buste prima del 1°. In «Panoramica», in «Budget del mese» sotto la linea, la riga «Budget di dicembre».
- **Il 1°** tutto il mese è già pagato. I soldi si assegnano una volta, all'inizio del mese, invece che a pezzetti dopo ogni pagamento. «Assegnazione del mese scorso» nell'assegnazione automatica lo fa con un tocco.
- **Gli obiettivi «% reddito»** basati sulle entrate del mese sono noti dal primo giorno: le entrate del mese sono arrivate il mese prima.
- **I report** («Entrate e uscite», «Paga te stesso») contano uno stipendio così nel mese per cui è messo da parte.
- **L'età del denaro in sé** non cresce per questo segno: cresce quando spendi meno di quanto guadagni. Il segno blocca la riserva, così i soldi del mese prossimo non si sciolgono in questo. Finché non arriva il suo mese, un'entrata così non conta per l'età.

### Il menu «⋮» {#overview-menu}

I budget, l'aspetto della «Panoramica» e la modalità di visualizzazione.

[Il menu «⋮» della schermata «Panoramica»: Budget, Widget, Nascondi gli importi, Suggerimenti, Centro assistenza]

(A)
#### Budget

Tutto sui budget in un foglio.

*Come funziona:*
«Crea un nuovo budget», «Scegli il budget», «Elimina il budget». L'ultimo budget rimasto non si può eliminare: all'app ne serve almeno uno. Per passare semplicemente a un altro budget è più veloce toccare il nome in cima alla schermata.

(B)
#### Widget

Quali blocchi mostrare in «Panoramica» e in che ordine.

*Come funziona:*
Una spunta: il blocco si vede; vuoto, nascosto. Per spostare un blocco più su o più giù, trascinalo dalla maniglia a destra. L'impostazione vive su questo dispositivo: su un tablet la «Panoramica» può avere un aspetto diverso che sul telefono.

(C)
#### Nascondi gli importi

Puntini al posto dei numeri. Per il momento in cui qualcun altro vede lo schermo.

*Come funziona:*
Hai girato il telefono verso qualcuno, fai uno screenshot per l'assistenza, registri un video: attivalo, e gli importi su tutte le schermate diventano «••••». Il segno «+» o «−» resta: dice dove sono andati i soldi, ma non quanti. Barre, grafici e colori restano come erano.

Finché la modalità è attiva, nell'intestazione della «Panoramica» c'è un occhio barrato: toccalo per riavere gli importi. Oppure nello stesso «⋮»: la voce ora si chiama «Mostra gli importi». La modalità sopravvive al riavvio dell'app.

(D)
#### Suggerimenti

Tutti i suggerimenti di questa schermata in un posto.

(E)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

[Foglio «Widget della panoramica»: blocchi con spunte e maniglie di trascinamento]
**«Widget».** Una spunta, mostralo; la maniglia a destra, trascinalo.

### Che cosa si può fare nella schermata {#overview-gestures}

Quasi tutte le righe della «Panoramica» si leggono soltanto. Si toccano quelle che portano da qualche parte.

| Fai così | Che cosa succede |
|---|---|
| Trascina la schermata giù | Ricalcola tutti i blocchi. |
| Tocca il nome del budget | Passa a un altro budget. |
| Tocca «Non assegnato» | Il foglio «Assegnazione automatica del budget», se c'è qualcosa da distribuire. |
| Fai scorrere una scheda a sinistra o a destra | Un altro mese, per «Dove sono finiti i soldi», «Budget del mese», «Calendario» e «Spese del mese». Al primo avvio un dito ti mostra da solo questo gesto. |
| Tocca una riga di sforamento | La [schermata della categoria](#category): saldo, spese, transazioni del mese. |
| Tocca un giorno del calendario | Il foglio del giorno: che cosa è successo quel giorno. |
| Tocca «Obiettivi» o un tag | La schermata «Obiettivi» o la schermata del tag. |

## Budget {#budget}

Le tue buste. Qui decidi quanti soldi mettere da parte per il cibo, l'affitto e tutto il resto, e vedi quanto resta in ogni busta.

*La scheda «Budget» in basso nello schermo*

### A che cosa serve questa schermata {#budget-why}

Immagina una pila di buste con le scritte «Spesa», «Affitto», «Utenze». Il giorno dello stipendio dividi i soldi tra di loro. Quando spendi, prendi dalla busta giusta. Una busta è vuota: per quella cosa questo mese i soldi sono finiti, a meno di spostarne un po' da un'altra.

La schermata «Budget» è quella pila di buste. Ogni riga è una busta (nell'app si chiama categoria), e l'importo a destra è quanto c'è dentro adesso. La regola principale è una: distribuisci tutti i soldi nelle buste finché in alto non compare «Tutto assegnato».

##### Dividere uno stipendio

Sono arrivati soldi: in alto è comparso «non assegnato». Distribuiscili nelle buste.

##### Controllare prima di comprare

«Posso permettermi scarpe da ginnastica nuove?»: guarda l'importo accanto ad «Abbigliamento e scarpe».

##### Togliere il rosso

Hai speso più di quanto avevi messo da parte? Sposta soldi da un'altra busta.

### Che cosa c'è nella schermata {#budget-screen}

Tocca uno screenshot per aprirlo a schermo intero.

[Schermata «Budget», agosto: «Tutto assegnato», chip «Insufficiente» e «Disponibile», gruppi di categorie con saldi e barre]

1. **Mese**: quale mese stai dividendo adesso.

   *Come funziona:*
   Le frecce «‹» e «›» sfogliano i mesi. Tocca il nome per aprire la scelta del mese, così non devi sfogliare uno alla volta.

   In avanti si va senza limiti, ed è utile: a settembre puoi già mettere da parte i soldi per i regali di dicembre. Ogni mese ha le sue buste, e quello che resta in una busta passa da solo al mese dopo.

2. **«Non assegnato»**: soldi che non sono ancora in nessuna busta. Il numero più importante della schermata.

   *Come funziona:*
   Arriva uno stipendio: finisce qui. Il tuo compito è distribuirlo nelle buste finché questo non arriva a zero. Questo punto ha tre stati:

   - **un numero su un chip colorato**: i soldi aspettano un compito. Tocca il chip per aprire l'assegnazione automatica: l'app propone di dividere i soldi come il mese scorso, secondo la spesa media, secondo gli obiettivi o secondo le tue percentuali;
   - **«✓ Tutto assegnato»**: obiettivo raggiunto, ogni euro ha un compito. Come nello screenshot;
   - **«assegnato in eccesso» in rosso**: hai messo nelle buste più di quanto hai. Toccalo, e togli l'eccesso dalle buste.

3. **Il menu «⋮»**: obiettivi, ordine, aspetto delle righe. Ogni voce è spiegata [più sotto](#budget-menu).

4. **Chip dei filtri**: mostrano solo le buste che chiedono attenzione.

   *Come funziona:*
   «Sforato»: buste in meno. «Insufficiente»: buste a cui manca ancora qualcosa per l'obiettivo del mese. «Disponibile»: dove ci sono soldi. Il numero su un chip dice quante sono; nello screenshot due aspettano soldi per arrivare all'obiettivo, e dieci hanno soldi.

   Un chip con zero non compare: se niente è sforato, «Sforato» semplicemente non c'è. Tocca «Tutte» per riavere l'elenco intero.

5. **Gruppo**: uno scaffale di buste simili.

   *Come funziona:*
   «Spese fisse», «Spese quotidiane»… A destra, quanto c'è in tutte le buste del gruppo. Tocca il nome per chiudere il gruppo e toglierlo di mezzo. Tieni premuto per un menu: «Rinomina il gruppo», aggiungere una categoria o un gruppo nuovo, «Elimina il gruppo».

   Attiva «Percentuale del reddito» nel menu «⋮», e sotto l'importo del gruppo vedrai quale percentuale delle entrate del mese hai messo in tutte le sue buste insieme. Si vede subito che le «Spese fisse» prendono, poniamo, metà dello stipendio, e le «Spese quotidiane» un terzo. La percentuale conta tutte le buste del gruppo, anche se il gruppo è chiuso o alcune buste sono nascoste da un filtro.

6. **⊕ accanto a un gruppo**: una busta nuova in questo gruppo.

7. **Categoria**: una busta.

   *Come funziona:*
   Tocca la riga per aprire la [schermata della categoria](#category): tutte le spese da questa busta nel mese e l'andamento nei mesi passati.

   La riga si può far scorrere con il dito a sinistra o a destra, per rinominarla, spostarla in un altro gruppo o eliminarla. Come, esattamente, è nella sezione [«Che cosa si può fare con una riga»](#budget-gestures).

8. **L'importo a destra**: quanto c'è nella busta adesso. Il suo colore è il suggerimento principale della schermata.

   *Come funziona:*
   - **Verde**: ci sono soldi, puoi spendere.
   - **0,00 grigio**: la busta è vuota. Per l'affitto già pagato è normale.
   - **Rosso, con l'icona del portafoglio**: hai speso più di quanto c'era. Questo meno mangerà i soldi del mese dopo.
   - **Giallo, con l'icona della carta**: anche questo è un meno, ma hai pagato con la carta di credito: è cresciuto il debito della carta, e i soldi del budget non sono stati toccati.

   #### Come mettere soldi in una busta

   1. Tocca l'importo a destra.
   2. Si apre una finestra con un tastierino. Mostra non il saldo ma quanto hai già messo da parte in questa busta questo mese.
   3. Scrivi il nuovo importo: la prima cifra sostituisce quello vecchio. Vuoi invece aggiungere? Tocca «+», scrivi 35 e «=».
   4. La busta ha un obiettivo? Tocca «All'obiettivo: …»: l'importo necessario si compila da solo.
   5. Tocca «Fatto».

   I soldi vengono da «non assegnato» in alto: scende esattamente dello stesso importo.

   #### Come togliere un meno rosso

   1. Tocca l'importo rosso.
   2. Si apre il foglio «Sforamento: Spesa» con due voci. «Modifica il budget» apre il tastierino dell'importo di questa busta, per rabboccarla da «non assegnato». «Copri da un'altra categoria» sposta soldi da altre buste; ne parliamo qui sotto.
   3. Tocca «Copri da un'altra categoria». In alto, «Da coprire: 35,00 €»; sotto, «Da dove prendere il denaro:»: la prima riga è «Non assegnato», poi ogni busta che ha soldi, con il saldo di ciascuna.
   4. Ogni riga ha un pulsante «Prendi …»: l'app ha già calcolato quanto si può prendere da lì. Toccalo accanto a una busta di cui puoi fare a meno. Per esempio «Svago e hobby».
   5. Si apre un tastierino con quell'importo. Sei d'accordo? Tocca «Prendi …». Vuoi prendere di meno? Scrivi un importo tuo.
   6. Una busta non è bastata? Prendi il resto dalla successiva. Quando il meno è tolto, il foglio dice «Sforamento coperto!».

9. **Barra**: quanto di ciò che hai messo da parte è stato speso.

   *Come funziona:*
   Per «Utenze» nello screenshot la barra è quasi piena: quasi tutto ciò che era messo da parte per il mese è andato. Se vai oltre la fine, la barra diventa rossa.

   Se la busta ha un obiettivo, la barra non mostra più la spesa ma quanto l'obiettivo è raggiunto. Le barre si spengono nel menu «⋮».

   Nel mese in corso la barra della spesa ha una sottile linea verticale: oggi, cioè quanto del mese è passato. Se il riempimento ha superato la linea, spendi più in fretta di quanto passa il mese, e la busta potrebbe non arrivare a fine mese. La barra di un obiettivo non ha questa linea.

10. **«… di … spesi»**: la spesa di questo mese rispetto a quanto hai messo da parte questo mese.

    *Come funziona:*
    «92,74 € di 100,00 € spesi» per «Utenze»: hai messo da parte 100 €, ne hai spesi 92,74. Allora perché a destra c'è 29,44 e non 7,26? Perché nella busta c'erano anche soldi dei mesi passati: il saldo segue la busta.

    Per lo stesso motivo «Spesa» ha una riga rossa, «133,28 € spesi oltre 400,00 €», mentre l'importo a destra è verde: il piano del mese è stato superato, ma la riserva dei mesi passati ha coperto lo sforamento. La busta è in più, tutto a posto.

11. **Bandierina dell'obiettivo**: «Raggiunto» o «mancano …».

    *Come funziona:*
    Un obiettivo dice a una busta quanto deve contenere: «400 € per la spesa ogni mese» o «1.300 € per le vacanze entro luglio». La bandierina sotto l'importo mostra se l'obiettivo è raggiunto questo mese, e se no, quanto aggiungere ancora. Gli obiettivi si impostano nella schermata della categoria.

12. **«Oggi»**: torna al mese in corso. Compare quando ti sei spostato su un altro.

13. **Nuova spesa**: gli stessi tre pulsanti di «Attività». [Approfondisci nell'articolo «Attività»](#transactions)

### Il menu «⋮» {#budget-menu}

Obiettivi, ordine delle buste e che cosa mostrare nelle righe.

[Il menu «⋮» aperto della schermata «Budget»: Obiettivi, Assegna agli obiettivi, Cambia l'ordine, Barre di avanzamento, Percentuale del reddito, Categorie nascoste, Suggerimenti, Centro assistenza]

(A)
#### Obiettivi

Tutti gli obiettivi del budget in una schermata. Approfondisci nell'articolo [«Obiettivi»](#goals).

*Come funziona:*
Vedi quali buste sono in linea e a quali manca qualcosa. Tocca un obiettivo per cambiarlo.

(B)
#### Assegna agli obiettivi

Rabbocca ogni busta di quanto le manca per il suo obiettivo. Approfondisci nell'articolo [«Obiettivi»](#goals).

*Come funziona:*
L'app prende i soldi da «non assegnato» e li dà alle buste con un obiettivo, a ciascuna esattamente quanto manca. Prima mostra il piano, che cosa va dove, e solo dopo il tuo «sì» assegna.

Se tutti gli obiettivi del mese sono già raggiunti, mostra quanto contiene ciascuno, così vedi perché non c'è niente da distribuire.

(C)
#### Cambia l'ordine

Riordina buste e gruppi.

*Come funziona:*
Sulle righe compaiono delle maniglie: trascinale. È comodo tenere in alto le buste che usi di più. Quando hai finito, la stessa voce del menu si chiama «Termina l'ordinamento».

(D)
#### Barre di avanzamento

Mostra una barra e una riga «… di … spesi» sotto ogni busta.

*Come funziona:*
Spegnile se vuoi un elenco corto: restano solo nomi e importi. Le buste con un obiettivo tengono sempre la barra: mostra l'obiettivo.

**Subito dopo l'installazione:** attivo.

(E)
#### Percentuale del reddito

Quale percentuale delle entrate del mese metti da parte in ogni busta.

*Come funziona:*
Accanto all'importo compare un'etichetta come «12%»: l'affitto mangia il 40% delle entrate, la spesa il 15%. Ogni gruppo mostra sotto il suo importo la propria percentuale totale, su tutte le sue buste. La spesa non cambia la percentuale: la cambiano solo quanto metti da parte e le entrate stesse del mese.

**Da che cosa si calcola la percentuale.** Non da tutti i soldi che distribuisci, ma dalla riga «Budget di novembre» della scheda «Budget del mese» in «Panoramica»: le entrate assegnate a questo mese. Il «Riporto da ottobre» non ne fa parte. Distribuisci anche l'avanzo del mese prima, e le percentuali vengono più alte del reale, e insieme possono superare il 100%. Quanto di ciò che hai assegnato sono entrate di questo mese e quanto è avanzo lo vedi nella stessa scheda ([«Panoramica»](#overview-blocks)).

**Subito dopo l'installazione:** disattivato. **Vedi anche:** l'assegnazione automatica «Per percentuale»: tocca «non assegnato».

(F)
#### Categorie nascoste

Buste che hai tolto dalla vista.

*Come funziona:*
Una busta con delle spese non si può eliminare: ai report serve la sua storia. Si può nascondere: sparisce dall'elenco, e le spese passate restano. Qui puoi far tornare le buste nascoste.

(G)
#### Suggerimenti

Tutti i suggerimenti di questa schermata in un posto.

(H)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

### Che cosa si può fare con una riga {#budget-gestures}

Nella riga non ci sono pulsanti «modifica» ed «elimina». Si fa invece scorrere di lato con il dito la riga della busta, fino a un pulsante che compare da sotto. La prima riga dell'elenco ti mostra una volta come funziona.

| Fai così | Che cosa succede |
|---|---|
| Tocca la riga | La [schermata della categoria](#category): le spese di questa busta nel mese e l'andamento. |
| Tocca l'importo | Metti soldi nella busta o, su una rossa, togli il meno. I passi sono nella voce [«L'importo a destra»](#budget-balance) più sopra. |
| Scorri a sinistra | A destra compare il pulsante «Modifica». Toccalo per aprire «Modifica la categoria»: un nome nuovo e un campo «Gruppo». Scegli lì un altro gruppo, e la busta ci si sposta, con tutti i suoi soldi e la sua storia. |
| Scorri a destra | A sinistra compare un pulsante rosso «Elimina». Una busta vuota, senza nemmeno un acquisto, si elimina dopo la domanda «Eliminare la categoria?». Se c'erano spese, l'app dice «Impossibile eliminare: ci sono transazioni» e propone «Nascondi»: la busta sparisce dall'elenco, e la sua storia resta. Per far tornare una busta nascosta: menu «⋮» → «Categorie nascoste». |
| Tieni premuto un gruppo | Il menu del gruppo: «Rinomina il gruppo», aggiungere una categoria o un gruppo nuovo, «Elimina il gruppo». |

Le buste del gruppo «Pagamenti carte» non si fanno scorrere: le gestisce la carta di credito stessa, e i soldi ci vengono messi da parte da soli.

## Obiettivi {#goals}

Di quanti soldi ha bisogno ogni busta, e quanto metterci ancora questo mese.

*«Budget» → «⋮» → «Obiettivi»*

### Perché gli obiettivi {#goals-why}

Una busta risponde a «quanto c'è qui dentro». Un obiettivo risponde a «quanto ci dovrebbe essere». L'app confronta le due cose e ti dice quanto metterci ancora.

**«Per il cibo servono 400 € al mese»**: un obiettivo «Al mese» su «Spesa». Ogni mese l'app ti ricorda di mettere da parte quei 400 €.

**«Vacanze a marzo, mi servono 2.000 €»**: un obiettivo «Entro una data». L'app divide da sola l'importo tra i mesi: tanto a novembre, tanto a dicembre.

**«Nel fondo di emergenza devono esserci 4.000 €»**: un obiettivo «Saldo». Ne spendi una parte, e l'app chiede di rimetterla.

L'obiettivo in sé non sposta soldi: si limita a contare. I soldi nella busta li metti tu, nella schermata «Budget» o con un solo pulsante, «Assegna agli obiettivi» (ne parliamo [più sotto](#goals-allocate)). Ogni categoria ha un obiettivo.

### Che cosa c'è nella schermata {#goals-screen}

La schermata «Obiettivi» si apre da «Budget»: «⋮» → «Obiettivi». Contiene tutte le categorie con i loro obiettivi per il mese scelto. Lo screenshot mostra novembre nel budget demo: cinque obiettivi di cinque tipi.

[Schermata Obiettivi: mese novembre 2026, riepilogo Totale 5 obiettivi, Costo mensile 2.543,53, Manca 1.609,53; gruppi di categorie; Spesa — al mese 400, Raggiunto; Regali — elenco 175; Viaggi — entro una data 2.000; Fondo di emergenza — saldo 4.000; Investimenti — % reddito 280]

(1)
**Mese**: le frecce «‹ ›» sfogliano i mesi, toccando il nome si apre la scelta del mese. Gli obiettivi si calcolano per questo mese. Esci da quello in corso, e in basso compare il pulsante «Oggi».

(2)
**Il menu «⋮»**: quali categorie mostrare, barre di avanzamento, suggerimenti; è [più sotto](#goals-menu).

(3)
**Riepilogo**: «Totale» è quanti obiettivi ci sono. «Costo mensile» è quanto chiedono tutti gli obiettivi questo mese. «Manca» è quanto non è ancora stato messo.

(4)
**Gruppo**: gli stessi gruppi di «Budget». Sotto il nome, quanti obiettivi ha il gruppo e quanto manca, oppure «tutto coperto». Il tocco chiude il gruppo.

(5)
**Una categoria senza obiettivo**: «nessun obiettivo». Tocca la riga o il «⊕»: si apre «Nuovo obiettivo».

(6)
**Una categoria con un obiettivo**: tutto l'obiettivo in tre righe. Il tocco lo apre per modificarlo.

*Come funziona:*
La prima riga: il nome della categoria, il tipo di obiettivo («al mese», «entro una data», «saldo», «% reddito», «elenco») e l'importo dell'obiettivo. La seconda: una barra, quanto è fatto, e lo stato: una bandierina verde e «Raggiunto», oppure una bandierina e «mancano …», quanto aggiungere. La terza: la condizione dell'obiettivo a parole e la percentuale fatta.

Nello screenshot «Spesa» è raggiunta: a novembre nella busta sono già messi da parte 400 €. E a «Viaggi e vacanze» questo mese mancano 100 €: tanto serve al mese per arrivare a 2.000 € entro marzo.

#### Il menu «⋮» {#goals-menu}

[Menu della schermata Obiettivi: Tutte le categorie, Solo con obiettivi, Sottofinanziate, Barre di avanzamento, Suggerimenti, Centro assistenza]

(A, B, C)
#### Quali categorie mostrare

«Tutte le categorie», «Solo con obiettivi» o «Sottofinanziate», cioè quelle a cui per l'obiettivo manca qualcosa questo mese. La scelta viene ricordata; se non tutto è mostrato, sul «⋮» si accende un punto.

(D)
#### Barre di avanzamento

se mostrare barre e percentuali. Senza, la riga è più corta, mentre obiettivo e importo restano al loro posto.

(E)
#### Suggerimenti

i suggerimenti di questa schermata come elenco.

(F)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

### Come impostare un obiettivo {#goals-new}

Un obiettivo si imposta qui, in «Obiettivi», oppure nella schermata della categoria, con il pulsante «Aggiungi un obiettivo» nella scheda «Obiettivo». È lo stesso foglio.

[Foglio Nuovo obiettivo: Tipo di obiettivo Al mese, Importo da impostare, il pulsante Salva grigio]

[Foglio Tipo di obiettivo: Al mese, Entro una data, Saldo, % reddito, Elenco, ognuno con una spiegazione]

1. Tocca una categoria senza obiettivo. Si apre «Nuovo obiettivo».
2. «Tipo di obiettivo»: toccalo e scegli uno dei cinque. Ognuno dice sotto il nome a che cosa serve. Quale usare e quando è [più sotto](#goals-types).
3. «Importo»: toccalo e scrivi sul tastierino dell'app. Per «% reddito» al posto dell'importo c'è «Percentuale del reddito», per «Elenco» le righe dell'elenco.
4. «Entro una data» ha anche «Accumulare entro il mese»: il mese entro cui ti serve tutto l'importo.
5. «Salva». Finché l'importo non è impostato, il pulsante è grigio.

**Modificare o eliminare**: tocca una categoria con un obiettivo, si apre «Modifica l'obiettivo» con gli stessi campi. In basso, «Elimina» e «Salva». Un obiettivo eliminato sparisce; i soldi nella busta restano.

**Un suggerimento dai pagamenti pianificati**: se la categoria ha un pagamento pianificato, la scheda dell'obiettivo nella schermata della categoria mostra «Dal pagamento pianificato: …». Un pagamento ogni mese suggerisce «al mese» per il suo importo; una volta all'anno, «accumulare … entro il pagamento».

### Cinque tipi di obiettivo {#goals-types}

Il tipo di obiettivo è la regola con cui l'app calcola «quanto serve questo mese». Qui sotto ogni regola con un esempio dallo screenshot.

#### «Al mese»: per ciò che spendi ogni mese {#goals-monthly}

**Come si calcola**: ogni mese va messo da parte lo stesso importo. L'obiettivo guarda quanto hai messo nella busta **questo mese**, non quanto ci è rimasto.

*Come funziona:*
«Spesa», 400 € al mese. Metti 400 € per novembre: l'obiettivo è «Raggiunto», anche se metà è già spesa. È proprio per spendere che servono questi soldi. Metti 270 €: «mancano 130,00 €».

Per la spesa, internet, i trasporti, gli abbonamenti.

#### «Entro una data»: accumulare un importo entro un certo mese {#goals-bydate}

[Foglio Modifica l'obiettivo: Tipo di obiettivo Entro una data, Importo 2.000, Accumulare entro il mese marzo 2027]

**Come si calcola**: quanto manca ancora a tutto l'importo si divide per i mesi rimasti, contando questo. Ne viene la quota del mese.

*Come funziona:*
«Viaggi e vacanze», 2.000 € entro marzo. All'inizio di novembre nella busta ci sono 750 €, quindi ne mancano 1.250. Fino a marzo, contando novembre, ci sono cinque mesi: 250 € al mese. A novembre 150 € sono già messi da parte: l'obiettivo dice «mancano 100,00 €».

Salti un mese, e quello che manca si spalma sui mesi restanti, quindi la quota cresce da sola. Metti di più, e le quote successive si riducono.

La barra mostra un'altra cosa: quanto di tutto l'importo è già nella busta. Nello screenshot, il 45%.

**A che cosa serve**: una vacanza, l'assicurazione una volta all'anno, i regali per le feste, una ristrutturazione in primavera; tutto ciò che non succede ogni mese ma è prevedibile.

#### «Saldo»: tenere una riserva {#goals-balance}

**Come si calcola**: nella busta deve esserci sempre questo importo. Quanto ne manca all'inizio del mese, tanto chiede l'obiettivo.

*Come funziona:*
«Fondo di emergenza», 4.000 €. Adesso la busta ha 2.875,47 €: l'obiettivo chiede «mancano 1.124,53 €». Non c'è scadenza: rabbocca quando puoi. Hai preso parte della riserva per una riparazione? L'obiettivo chiede di nuovo di rimetterla.

Per un fondo di emergenza, la cassetta dei medicinali, una riserva per le riparazioni dell'auto.

#### «% reddito»: mettere da parte una percentuale delle entrate {#goals-percent}

[Foglio Modifica l'obiettivo: Tipo di obiettivo % reddito, Percentuale del reddito 10%, scelto Dal reddito di questo mese, Dal reddito medio; Reddito di novembre 2.800, Obiettivo del mese 280]

**Come si calcola**: l'obiettivo del mese è la tua percentuale delle entrate. L'app mostra l'importo direttamente nel foglio: «Reddito di novembre: 2.800,00 €», «Obiettivo del mese: 280,00 €».

**«Dal reddito di questo mese»**: si calcola sui soldi **già arrivati**. È arrivata la prima parte della paga: un obiettivo; è arrivata la seconda: l'obiettivo è cresciuto. Finché nel mese non ci sono entrate, l'obiettivo è zero e conta come raggiunto. **Di default:** è scelta questa.

**«Dal reddito medio»**: le entrate medie degli ultimi 12 mesi. L'obiettivo è noto dal 1° e durante il mese non cambia: comodo se vieni pagato a fine mese.

**A che cosa serve**: «mettere da parte il 10% di tutto quello che guadagno», per investimenti, risparmi, donazioni.

#### «Elenco»: che cosa comprare questo mese {#goals-list}

Un obiettivo fatto di righe: scrivi a che cosa andranno questo mese i soldi della categoria, e l'importo dell'obiettivo si somma da solo. Ogni mese ha il suo elenco.

[Foglio Modifica l'obiettivo: Tipo di obiettivo Elenco, Elenco di novembre: Compleanno della mamma 100, Torta 40 — registrato 43, Collega 35 — registrato 24 · 2 transazioni; Aggiungi riga; Obiettivo di novembre 175]

[Schermata della categoria Regali e feste: scheda Obiettivo — 175 al mese, dall'elenco; Assegna altri 105; righe dell'elenco]

[Foglio Riga dell’elenco: Collega, Importo previsto 35; Registrato 24 su 35, Riduci a 24; due transazioni — 20 e 4; Registra transazione; Elimina, Salva]

**Le righe**: scegli «Elenco» in «Tipo di obiettivo», e le righe del mese compaiono direttamente nel foglio. «⊕ Aggiungi riga»: un nome e un importo. In basso, «Obiettivo di novembre»: il totale di tutte le righe. Finché non ci sono righe, «Salva» è grigio.

**Nella schermata della categoria**: le righe vivono nella scheda «Obiettivo», sotto la barra. Lì ci lavori: tocca una riga per modificarla, scorri a sinistra per «Registra», a destra per «Elimina» (con «Annulla» nel messaggio in basso).

**«Registra»**: apre il normale modulo della transazione: l'importo pianificato (correggilo con quello vero), questa categoria, il nome della riga nella nota. Una volta salvata, sotto la riga in verde: «✓ registrato 43,00 € · 13 nov», mentre a destra resta l'importo pianificato: nello screenshot la torta era prevista a 40 € e comprata a 43 €.

*Come funziona:*
Una riga si può registrare di nuovo: un acquisto a volte sono più pagamenti — le gomme, poi il montaggio. Il modulo propone quanto resta del previsto, e sotto la riga compaiono il totale delle registrazioni e il loro numero. Il suo foglio ha un link a ogni transazione e «Registra transazione»; il pulsante «Riduci a …» porta il previsto a quanto registrato. Una riga registrata non si può spostare in un altro mese.

**Spostare in un altro mese**: tieni premuta una riga per attivare la selezione. Spunta quelle che ti servono; in basso, il loro totale e «⋮»: «Sposta a dicembre», «Sposta a un altro mese…», «Elimina».

**Un mese nuovo**: l'elenco è vuoto, «L'elenco di dicembre è vuoto», e c'è un pulsante «Copia le righe di novembre · importo»: le righe del mese prima vengono copiate (senza i segni «registrato»), e il mese prima non cambia.

### La scheda «Obiettivo» nella schermata della categoria {#goals-card}

Tocca una categoria in «Budget»: si apre la [sua schermata](#category). La sua scheda «Obiettivo» mostra l'obiettivo per il mese della schermata e dice quanto metterci.

[Schermata della categoria Viaggi e vacanze: riepilogo, scheda Obiettivo — Accumulare 2.000 entro marzo, Assegna altri 100 questo mese, selettore Per importo / Per scadenza, Mettere da parte al mese 400, cursore, Accumulare entro il mese Febbraio 2027, 1 mese prima della scadenza, Usa come scadenza]

**Intestazione**: la descrizione dell'obiettivo e una matita per modificarlo. Sotto, una barra e «Assegna altri … questo mese» oppure «L'obiettivo del mese è raggiunto».

**La stima «Per importo» / «Per scadenza»**: per un obiettivo «Entro una data», sotto la barra: e se mettessi da parte di più o di meno? «Per importo»: muovi il cursore «Mettere da parte al mese», e «Accumulare entro il mese» sotto mostra quando ci arrivi, e la riga più in basso dice «… mesi prima della scadenza», «… mesi dopo la scadenza» o «Proprio in tempo». «Per scadenza»: muovi «Accumulare entro il mese», e sotto il cursore vedi quanto mettere da parte al mese. Ti serve un importo preciso? Tocca «Mettere da parte al mese» e scrivilo sul tastierino.

*Come funziona:*
La stima non salva niente: esci dalla schermata, e tutto è come prima. Ti piace la nuova data? Tocca «Usa come scadenza: …», e l'obiettivo la prende.

Nello screenshot: mettendo 400 € al mese, i soldi per le vacanze sono pronti a febbraio, un mese prima della scadenza.

**Nessun obiettivo**: la scheda ha un solo pulsante, «Aggiungi un obiettivo». Se c'è un pagamento pianificato, accanto compare il suggerimento «Dal pagamento pianificato: …».

### Assegna agli obiettivi {#goals-allocate}

È arrivato lo stipendio: dividilo tra tutti gli obiettivi con un solo pulsante. «Budget» → «⋮» → «Assegna agli obiettivi».

[Finestra Assegnare agli obiettivi?: 230 a 3 categorie — Regali e feste +105, Viaggi e vacanze +100, Fondo di emergenza +25; resterà non assegnato 0,00; Annulla, Assegna]

**Che cosa fa**: prende i soldi da «non assegnato» e li mette nelle buste i cui obiettivi questo mese mancano di qualcosa. Prima mostra il piano, quanto va in quale busta; «Assegna» lo esegue, «Annulla» non cambia niente.

**Se non basta per tutto**: gli obiettivi si coprono in ordine, dall'alto in basso, come sono disposte le categorie in «Budget», e l'ultimo prende quello che resta. Nello screenshot 230 € sono bastati per «Regali e feste» e «Viaggi e vacanze» per intero, mentre «Fondo di emergenza» ha avuto 25 € su 1.124,53. Tieni più in alto ciò che conta: l'ordine si cambia in «Budget», «⋮» → «Cambia l'ordine».

**Se non c'è niente da assegnare**: «non assegnato» è vuoto, e l'app lo dice. Non ci sono obiettivi: ti dice dove impostarli. Tutti gli obiettivi sono già raggiunti: mostra per ciascuno quanto è messo da parte e quanto serve.

**Lo stesso nell'assegnazione automatica**: tocca «non assegnato» nell'intestazione di «Budget», e la modalità «Sottofinanziato» fa la stessa cosa. E la calcolatrice dell'importo della categoria in «Budget» ha il pulsante «All'obiettivo: …»: compila esattamente quanto manca.

### Dove altro si vedono gli obiettivi {#goals-elsewhere}

Un obiettivo non si vede solo qui.

**«Budget»**: una categoria con un obiettivo ha sotto l'importo una bandierina, «Raggiunto» o «mancano …», e la barra mostra l'obiettivo invece della spesa. Il chip «Insufficiente» sopra l'elenco lascia solo le categorie i cui obiettivi mancano di qualcosa. Approfondisci nell'articolo [«Budget»](#budget).

**«Panoramica»**: il blocco «Obiettivi» mostra quanti obiettivi ci sono, quanti sono raggiunti e quanto serve ancora questo mese. Approfondisci nell'articolo [«Panoramica»](#overview).

## Schermata della categoria {#category}

Una busta per intero: quanto conteneva, quanto è stato messo da parte e speso, quanto resta e per quanti giorni basterà. E poi l'obiettivo, una nota, le spese dei mesi passati e tutte le transazioni del mese.

*«Budget» → tocca una categoria*

### A che cosa serve questa schermata {#category-why}

In «Budget» una categoria ha una riga e un numero. Qui c'è tutto quello che sta dietro.

##### Basterà fino a fine mese

«Disponibile» e sotto «≈ … al giorno»: quanto puoi spendere ogni giorno fino a fine mese senza andare in negativo.

##### Dove sono andati i soldi

Tutte le transazioni di questa categoria nel mese, per giorno. Toccane una per aprire la sua scheda.

##### Quanto serve davvero

«Andamento delle spese» mostra quanto esce di solito al mese. Se metti da parte di meno, ogni mese finisce in meno.

### Come aprirla {#category-open}

- **«Budget»**: tocca la riga di una categoria. La schermata si apre sul mese scelto in «Budget». Questo con il telefono in verticale: in orizzontale il tocco su una riga della tabella apre la calcolatrice dell'importo, e su un tablet apre un pannello a destra ([più sotto](#category-tablet)).
- **«Panoramica»**: tocca una riga nel blocco «Sforamento» o «Sta finendo».
- **«Report»**: tocca una riga dell'elenco in «Dove sono finiti i soldi» o un riquadro in «Scostamento». La schermata si apre sul mese del report.

### Che cosa c'è nella schermata {#category-screen}

La schermata scorre: in alto il riepilogo, poi le schede «Obiettivo», «Nota» e «Andamento delle spese», e sotto le transazioni del mese. Tocca uno screenshot per aprirlo a schermo intero.

[Schermata della categoria Spesa: il mese con le frecce; riepilogo — Da ottobre, Pianificato, Speso, Disponibile e ≈ al giorno; scheda Obiettivo — Mettere da parte 400,00 al mese, L'obiettivo del mese è raggiunto; Nota; Andamento delle spese; Transazioni del mese per giorno: Conad, Coop, Esselunga; pulsante Transazione]

1. **Nome**: il nome della categoria. Si rinomina nel menu «⋮».

2. **«⋮»**: nascondere, rinominare o spostare in un altro gruppo, eliminare. I dettagli sono [più sotto](#category-menu).

3. **Mese**: «‹ ›» sfogliano i mesi, passati e futuri, senza limiti. I dettagli sono [più sotto](#category-months).

4. **«Da …»**: quanto era rimasto nella busta dal mese prima.

5. **«Pianificato per …»**: quanto hai messo da parte in questa busta questo mese. In piccolo sotto l'importo, quale percentuale delle entrate del mese è.

6. **«Speso a …»**: quanto è uscito dalla busta questo mese, al netto dei rimborsi.

7. **«Disponibile»**: quanto c'è nella busta adesso. Lo stesso numero della riga della categoria in «Budget».

8. **«≈ … al giorno»**: quanto puoi spendere al giorno fino a fine mese. Solo nel mese in corso e solo se «Disponibile» è sopra zero.

9. **«Obiettivo»**: l'obiettivo della categoria per questo mese, quanto mettere ancora da parte. Approfondisci nell'articolo [«Obiettivi»](#goals-card).

10. **«Nota»**: un tuo testo su questa categoria. I dettagli sono [più sotto](#category-note).

11. **«Andamento delle spese»**: quanto esce in media al mese. I dettagli sono [più sotto](#category-trends).

12. **Data**: le transazioni del mese per giorno, le più recenti in alto. I dettagli sono [più sotto](#category-ops).

13. **Transazione**: una riga come in «Attività», solo senza la categoria: qui ce n'è una sola.

14. **«+ Transazione»**: una transazione nuova con la categoria già scelta nel modulo.

### Il riepilogo: da dove vengono i numeri {#category-stats}

Le quattro righe del riepilogo formano un'unica formula:

**«Da …»** + **«Pianificato»** − **«Speso»** = **«Disponibile»**

##### Il più passa al mese dopo, il meno no

Non hai speso tutto? Il resto rimane nella busta e il mese dopo compare nella riga «Da …». Hai speso più di quanto c'era? Questo mese «Disponibile» è rosso. Al cambio del mese il meno si azzera: il mese dopo «Da …» sarà 0.

*Come funziona:*
Dove va il meno azzerato dipende da come hai pagato. In contanti o con la carta di debito, riduce il «non assegnato» del mese dopo. Con la carta di credito, è diventato debito della carta. Approfondisci nell'articolo [«Budget»](#budget).

##### Percentuale del reddito

Sotto «Pianificato»: quale percentuale delle entrate del mese hai messo da parte in questa busta. La stessa percentuale dell'etichetta «Percentuale del reddito» in «Budget». Niente entrate nel mese, niente percentuale. Si conta dalla riga «Budget di …» della scheda «Budget del mese», senza l'avanzo del mese prima; perché allora la percentuale può sembrare troppo alta è nell'articolo [«Budget»](#budget-income-share).

##### «≈ … al giorno»

«Disponibile» si divide per i giorni che restano fino a fine mese, oggi compreso, e si arrotonda per difetto, così un giorno non riceve mai più di quanto c'è. Oggi hai speso di meno? Domani il numero cresce.

### Nota {#category-note}

Scrivi che cosa va in questa categoria, per che cosa risparmi, che cosa avete concordato: tutto ciò che servirà tra sei mesi. Tocca il campo «Aggiungi una nota per la categoria…» e scrivi: la nota si salva da sola, non c'è un pulsante. Con un cloud arriva sugli altri dispositivi.

### «Andamento delle spese» {#category-trends}

Quanto esce di solito da questa categoria. Conta i 12 mesi interi prima di questo; il mese in corso non c'è perché non è ancora finito. La spesa è al netto dei rimborsi.

[Scheda Andamento delle spese della categoria Acquisti importanti: Media in un mese attivo 480, Spesa mensile media 96, Speso il mese scorso 0]

**«Spesa mensile media»**: quanto esce in media al mese, contando anche i mesi senza spese. È quanto conviene mettere da parte ogni mese perché la busta non vada in negativo.

**«Media in un mese attivo»**: la media solo sui mesi con spese. Compare quando non si è speso ogni mese: nello screenshot «Acquisti importanti» ha 480 € in un mese con un acquisto, e 96 € in media su tutti i mesi.

**«Speso a …»**: quanto è uscito il mese scorso; confrontalo con questo.

**Le percentuali sotto gli importi**: quale percentuale delle entrate è. Per le medie, delle entrate medie degli stessi mesi; per il mese scorso, delle sue entrate.

### Le transazioni del mese {#category-ops}

Tutte le transazioni di questa categoria nel mese della schermata, per giorno: le più recenti in alto. Di un importo diviso si vede solo la parte con questa categoria; nello screenshot, «Conad».

| Fai così | Che cosa succede |
|---|---|
| Tocca una riga | La scheda della transazione, la stessa di «Attività». Approfondisci nell'articolo [«Attività»](#transactions-detail). |
| Tocca il cerchio a destra | Il segno «Contabilizzato», come in «Attività». |
| Scorri a sinistra | «Modifica»: il modulo della transazione. |
| Scorri a destra | «Elimina», dopo una conferma. In basso compare «Annulla». |

L'ordine delle transazioni nel giorno e il totale del giorno accanto alla data si impostano in «Attività»: «⋮» → «Ordinamento» e «Totale del giorno». Qui sono gli stessi.

### Un altro mese {#category-months}

«‹» e «›» sopra il riepilogo sfogliano i mesi. Esci dal mese in corso, e in basso a sinistra compare «Oggi»: toccalo per tornare al mese in corso.

[La stessa schermata per il mese scorso: riepilogo senza la riga ≈ al giorno, un pulsante Oggi in basso a sinistra]

In un mese passato vedi quanto c'era e quanto si è speso allora. Lì la riga «≈ … al giorno» non c'è: il mese è finito. In un mese futuro vedi quanto è già messo da parte in anticipo.

### Il menu «⋮» {#category-menu}

[Menu: Nascondi la categoria, Modifica la categoria, Suggerimenti, Centro assistenza, Elimina la categoria]

(A)
##### «Nascondi la categoria»

La categoria sparisce da «Budget» e dall'elenco delle categorie nel modulo della transazione. I soldi e le transazioni restano, e nei calcoli conta come prima. Per farla tornare, qui stesso: la voce diventa «Mostra la categoria». Oppure «Budget» → «⋮» → «Categorie nascoste».

(B)
##### «Modifica la categoria»

Un foglio con il nome e un campo «Gruppo». I dettagli sono [più sotto](#category-edit).

(C)
##### «Suggerimenti»

I suggerimenti di questa schermata, anche quelli che hai già chiuso.

(D)
##### «Centro assistenza»

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

(E)
##### «Elimina la categoria»

Solo se la categoria non ha nessuna transazione. Allora, dopo la domanda «Eliminare la categoria?», sparisce, insieme al suo obiettivo, e tutto ciò che vi era messo da parte torna in «non assegnato».

*Come funziona:*
Se ci sono transazioni, l'app dice «Impossibile eliminare: ci sono transazioni» e propone «Nascondi». Una categoria eliminata sparirebbe dalla storia, e le sue transazioni resterebbero senza busta.

#### Rinominare e spostare in un altro gruppo {#category-edit}

[Foglio Modifica la categoria: Nome Spesa, Gruppo Spese quotidiane, pulsanti Elimina e Salva]

[Foglio Gruppo: Spese fisse, Spese quotidiane, Spese occasionali, Risparmi]

(E)
##### «Nome»

Il nuovo nome della categoria. Transazioni, obiettivo e soldi restano con lei.

(F)
##### «Gruppo»

Toccalo per aprire l'elenco dei gruppi. Scegline un altro e tocca «Salva»: la categoria si sposta in fondo a quel gruppo insieme ai suoi soldi e alla sua storia.

*Come funziona:*
Le categorie del gruppo «Pagamenti carte» non hanno questo campo: il loro gruppo lo gestisce l'app.

(G)
##### «Elimina»

Come «Elimina la categoria» nel menu.

##### Come spostare una categoria in un altro gruppo

1. Apri la categoria: «Budget» → tocca la sua riga.
2. «⋮» → «Modifica la categoria».
3. Tocca il campo «Gruppo» e scegli un gruppo.
4. «Salva».

Lo stesso si può fare direttamente in «Budget»: scorri a sinistra la riga della categoria → «Modifica».

### Su un tablet {#category-tablet}

Su un tablet in orizzontale il tocco su una riga di «Budget» non ti porta via dalla tabella: a destra compaiono riepilogo, obiettivo, nota, andamento e transazioni della categoria. Il mese lì è lo stesso della tabella; frecce sue non ne ha.

Il pannello non ha il menu «⋮». Per nascondere, rinominare o eliminare una categoria usa la sua schermata: metti il tablet in verticale e tocca la riga, oppure apri la categoria dalla «Panoramica» o dai «Report».

## Attività {#transactions}

Tutta la storia dei tuoi soldi in un solo elenco. Ogni acquisto, ogni stipendio, ogni «ho spostato un po' dal conto corrente ai risparmi».

*La scheda «Attività» in basso nello schermo*

### A che cosa serve questa schermata {#transactions-why}

La schermata «Budget» risponde alla domanda «quanto posso ancora spendere». «Attività» risponde a «ma allora dove sono andati». È il tuo diario: tutto ciò che hai registrato è qui per giorno, il giorno più recente in alto.

##### Trovare

«Quanto era costata quella cena a marzo?»: un paio di lettere nella ricerca, ed eccola.

##### Correggere

Categoria sbagliata, uno zero in più, un doppione: fai scorrere la riga e correggi.

##### Riconciliare con la banca

Segna ciò che è già passato sulla carta, e vedi subito che cosa la banca non ha ancora elaborato.

### Che cosa c'è nella schermata {#transactions-screen}

Tocca uno screenshot per aprirlo a schermo intero.

[Schermata «Attività»: ricerca, menu, chip del tipo di transazione, l'elenco delle transazioni per giorno e il pulsante per aggiungere]

1. **Ricerca**: trova qualsiasi cosa da un paio di lettere, un importo o delle date.

   *Come funziona:*
   Scrivi «essel»: nell'elenco restano solo le tue spese all'Esselunga. Cerca ovunque: beneficiario, categoria, nota e importo. «47,55» trova quell'importo, «latte» trova la nota «Latte, uova, pane».

   La ricerca capisce le date come le scrivi:

   - **15/8/2026**: un solo giorno;
   - **15/8**: quel giorno in qualsiasi anno, «che cosa ho comprato ai compleanni passati?»;
   - **8/2026**: tutto agosto;
   - **2/8/26-10/8/26**: da e fino a, tutti e due i giorni compresi. Funziona anche con i mesi: **6/2026-8/2026**, tutta l'estate.

   Tra «da» e «fino a» va bene un trattino, una lineetta o uno spazio: l'app capisce dov'è il confine. Un numero da solo, come «8», non viene preso per una data: altrimenti una ricerca di 8 € affogherebbe in tutto agosto.

   Il cancelletto attiva la ricerca per tag: «#vac», tutto ciò che ha il tag «vacanze»; «#vac bar», solo i bar delle vacanze. Due tag separati da uno spazio: le transazioni che li hanno tutti e due.

2. **Beneficiari e tag**: chi paghi più spesso e quanto.

   *Come funziona:*
   Una schermata a parte con due schede. «Beneficiari»: tutti quelli che hai pagato e che ti hanno pagato, con un totale per quest'anno (il periodo si cambia nel menu «⋮»). Spesso è qui che scopri che le «piccole» spese al negozio sotto casa in un anno hanno fatto una vacanza.

   «Tag»: le tue etichette trasversali alle categorie, «vacanze», «ristrutturazione», «regalo per la mamma». Tocca un beneficiario o un tag per aprire la sua storia. [L'articolo «Beneficiari e tag»](#payees-tags)

3. **Il menu «⋮»**: tutto ciò che cambia l'aspetto dell'elenco. Ogni voce è spiegata [più sotto](#transactions-menu).

4. **Tipo di transazione**: solo spese, solo entrate, con un tocco.

   *Come funziona:*
   Vuoi vedere solo i soldi in arrivo? Tocca «Entrate». I «Trasferimenti» sono quando i soldi si sono solo spostati tra i tuoi conti: dal conto corrente ai risparmi, per saldare la carta di credito. Le «Note» sono voci senza importo, promemoria per te stesso.

   Tocca di nuovo lo stesso chip, e torna tutto l'elenco.

5. **Data**: salta a qualsiasi giorno.

   *Come funziona:*
   Scorrere sei mesi indietro con il dito è un piacere per pochi. Tocca il chip della data, scegli un giorno nel calendario, e l'elenco è già lì. Per tornare a oggi, il pulsante «Oggi» in basso a sinistra.

6. **Contrassegno**: un segnalibro colorato per te.

   *Come funziona:*
   Un contrassegno non calcola niente: è solo un segnalibro. Rosso, «controllare che non sia stato addebitato due volte»; verde, «un amico ha promesso di restituirmeli». I colori e il loro significato li inventi tu.

   Il contrassegno si imposta nel modulo della transazione, o su una decina di righe in una volta con la selezione. Un contorno grigio vuol dire «nessun contrassegno». La forma del contrassegno (un punto, un triangolo o una bandierina ondulata) è in «Impostazioni → Aspetto».

7. **Categoria**: da quale busta sono usciti i soldi.

   *Come funziona:*
   Una categoria è una busta nella schermata «Budget». Un acquisto all'Esselunga con la categoria «Spesa» assottiglia la busta della spesa: è così che il budget sa quanto ti resta per il cibo.

   Lo scontrino era sia di cibo sia di detersivi? L'importo si può dividere: ogni parte va nella sua busta, e la riga mostra un chip per ogni parte. E per uno stipendio, al posto della categoria c'è «Disponibile questo mese»: i soldi sono arrivati e aspettano che tu li distribuisca nelle buste.

8. **Conto**: da dove sono stati addebitati o dove sono arrivati.

   *Come funziona:*
   Conto corrente, contanti, carta di credito: ogni conto ha la sua icona e il suo colore, così lo riconosci senza leggere. Un trasferimento ha due righe, una per conto: in una i soldi sono usciti, nell'altra sono arrivati. Per questo il titolo di un trasferimento non mostra un negozio ma l'altro conto: «Visa» sul conto corrente, «Conto corrente» sulla Visa.

9. **Contabilizzato**: se corrisponde all'estratto conto. Facoltativo.

   *Come funziona:*
   Hai registrato un acquisto alla cassa, e la banca l'ha elaborato un giorno o due dopo. Il cerchio ti evita di confonderti: vuoto, la banca non ha ancora questa transazione; con la spunta, ce l'ha. Hai visto l'acquisto nell'app della banca? Tocca il cerchio.

   Una volta al mese puoi riconciliare tutto il conto. Allora le spunte diventano lucchetti: «riconciliato, non lo tocco più».

   **Il segno è facoltativo:** non influisce sul budget, aiuta solo a riconciliare il conto con la banca. Se non l'hai mai usato, lascialo perdere: i cerchi vuoti vanno benissimo.

10. **Nuova spesa**: tre pulsanti nell'angolo in basso a destra.

    *Come funziona:*
    «+ Transazione» apre un modulo vuoto: importo, categoria e conto li compili tu.

    Sopra ci sono due pulsanti rotondi per non dover scrivere. Il viola è la fotocamera: inquadra il QR dello scontrino, e l'app compila da sola importo e data (se conosce gli scontrini del tuo paese). Il verde è il microfono: di' «caffè 6 dal conto conto corrente», e l'app compila importo e conto, più beneficiario e categoria se li riconosce tra i tuoi. In tutti e due i casi si apre lo stesso modulo: controllalo e salva. [L'articolo «Modulo della transazione»](#entry)

11. **Icone della fotocamera e del QR**: alla transazione sono allegati una foto dello scontrino e uno scontrino elettronico. [Che cos'è](#transactions-badges)

12. **Icona PDF**: alla transazione è allegato un file, una bolletta, una fattura, la ricevuta di un negozio online. [Che cos'è](#transactions-badges)

13. **Icona della forchetta**: l'importo è diviso in parti su categorie diverse. [Che cos'è](#transactions-badges)

14. **Cancelletti: i tag**: le tue etichette del «per che cosa»; una transazione può averne diverse. [Che cos'è](#transactions-tags)

### La schermata ha due aspetti {#transactions-two-views}

Non preoccuparti se la tua schermata non è come l'immagine qui sopra. I pulsanti nell'angolo in basso a destra si richiudono per non coprire le transazioni.

[Pulsanti aperti: «+ Transazione», sopra la fotocamera e il microfono]
**Hai appena aperto la schermata.** Tre pulsanti: «+ Transazione», fotocamera e microfono.

[Pulsanti chiusi: resta solo il «+»]
**Hai fatto scorrere l'elenco verso il basso.** Resta solo il «+»: fa la stessa cosa.

Per far tornare fotocamera e microfono, fai scorrere un po' l'elenco verso l'alto: i pulsanti si riaprono.

Il «+» si può toccare in tutti e due gli aspetti: apre sempre il modulo della nuova transazione.

### Icone e tag in una riga {#transactions-badges}

Piccole icone accanto a una transazione dicono che ha qualcosa in più: uno scontrino allegato, un file o più categorie. Da sole non fanno niente: per vedere che cosa è allegato, tocca la riga.

#### Fotocamera: una foto dello scontrino

Una foto di uno scontrino di carta, di un cartellino del prezzo o di qualsiasi cosa tu voglia tenere accanto all'acquisto.

**Non esagerare.** Allega foto a ciò che ti servirà davvero, non a ogni pagnotta. [Perché](#transactions-attach-weight)

*Come aggiungerla e perché:*
Il modulo della transazione ha un campo «Foto e PDF». Tocca «Aggiungi» e scegli «Scatta una foto» o «Scegli dalla galleria». Le foto possono essere più d'una.

Torna utile quando un mese dopo devi restituire qualcosa in garanzia o ricordare che cosa c'era in quell'acquisto da 47,55 €. La foto è salvata sul telefono; perché compaia anche sugli altri dispositivi, attiva «Sincronizza le foto» nelle impostazioni della sincronizzazione.

#### Quadrato QR: uno scontrino elettronico

Il codice o il link allo scontrino emesso dalla cassa.

*Come aggiungerlo e perché:*
Molti scontrini hanno in fondo un codice QR: con quello lo scontrino si ritrova nel sistema del negozio o del fisco. Il modulo della transazione ha un campo «Scontrino elettronico (URL o codice)»: incolla lì il link, oppure tocca l'icona dello scanner e inquadra il codice QR.

Se l'app conosce gli scontrini del tuo paese, confronta anche lo scontrino con il modulo: compila l'importo se non l'hai ancora scritto, e se gli importi sono diversi te lo dice e propone di correggere. Lo scanner non cambia la data nel modulo. Uno scontrino di un paese che l'app non conosce viene salvato così com'è, e torna comunque utile: nella scheda della transazione puoi copiare il codice e aprire il link.

#### Foglio «PDF»: un file allegato

Una bolletta, una fattura delle utenze, la ricevuta di un negozio online: tutto ciò che arriva come file.

**Non esagerare.** Un PDF non viene compresso quando lo aggiungi: il file è salvato così com'è. [Perché](#transactions-attach-weight)

*Come aggiungerlo e perché:*
Lo stesso campo «Foto e PDF» del modulo: «Aggiungi» → «Scegli un PDF». Il file sta accanto alla transazione: niente più bollette da cercare nella posta o in «Download».

Tocca un PDF allegato: in basso compaiono «Apri» (in un'app per i PDF) e «Salva su file» (una copia in una cartella a tua scelta).

#### Ogni foto ha un peso {#transactions-h-weight}

Il database in sé non ingrassa per le foto: contiene solo un link al file. Ma il file vive sul telefono e, cosa più importante, finisce per intero in **ogni backup**. Di default si tengono fino a 19 backup: 7 frequenti e 12 mensili, sul telefono e nel cloud.

Così una sola foto di uno scontrino da 300 KB può occupare quasi 6 MB nei backup, e cento foto così più di mezzo gigabyte. Se «Sincronizza le foto» è attivo, ognuna viaggia anche nel cloud e sugli altri dispositivi. Lo stesso per i PDF, solo che quelli non vengono compressi affatto.

**La regola è semplice:** allega ciò che ti servirà, un certificato di garanzia, lo scontrino di un acquisto costoso, una bolletta per i tuoi archivi. Pane e latte possono fare a meno delle foto. E uno scontrino elettronico (QR) pesa quanto una riga di testo: lo puoi salvare per ogni acquisto.

#### Forchetta: l'importo è diviso in parti

Un acquisto, più categorie. Nel modulo è «Dividi l'importo» nell'elenco delle categorie; nella scheda della transazione le parti stanno sotto il titolo «Suddivisione».

*Come funziona:*
Da «Conad» nello screenshot hai pagato 86 € in un solo pagamento, ma hai comprato sia cibo sia detersivi. Se avessi registrato tutto in «Spesa», la busta della spesa si sarebbe assottigliata di 25 € di troppo, mentre «Casalinghi» sarebbe rimasta intatta, e il budget comincerebbe a mentire.

Così l'importo si divide: 61 € in «Spesa», 25 € in «Casalinghi». Nell'elenco una transazione così ha un chip per ogni parte, e la sua scheda ha una sezione «Suddivisione». L'importo si divide nel modulo della transazione, scegliendo la categoria.

##### Anche il prelievo alla cassa è una suddivisione

Al supermercato paghi 100 € con la carta e chiedi al cassiere 30 € in contanti. La banca mostra un solo addebito da 100 €, ma in realtà sono successe due cose: 70 € sono andati in spesa, e 30 € si sono solo spostati dalla carta al portafoglio.

1. Registra una transazione da 100 € dal conto «Conto corrente» e dividi l'importo.
2. La prima parte: 70 €, categoria «Spesa».
3. La seconda parte: 30 €; nella scelta della categoria scorri fino alla sezione «TRASFERIMENTI» e scegli «Trasferimento: Contanti».

Nell'elenco compare un chip «Trasferimento: Contanti», il conto «Contanti» sale di 30 €, e la busta della spesa si assottiglia esattamente di 70 €. Registra tutto in «Spesa», e il budget penserà che hai mangiato 30 € in più, mentre il portafoglio mostra meno di quanto contiene davvero.

#### Una riga di cancelletti: i tag

Le tue etichette sopra le categorie: «#casa in campagna», «#a metà», «#vacanze». Una transazione può averne quante vuoi.

*Come funziona:*
Una categoria risponde a «in che cosa ho speso», e un tag risponde a «per che cosa». Latte e pane all'«Esselunga» sono «Spesa», ma sono stati comprati per la casa in campagna. Mettici il tag «#casa in campagna», e dopo vedrai a colpo d'occhio quanto è costata l'estate in campagna, anche se i soldi sono andati in spesa, benzina e materiali edili.

«Coop» nello screenshot ha due tag insieme: spesa per la casa in campagna, e pagata a metà con un amico. Una transazione può avere quanti tag vuoi.

##### Come aggiungere un tag

1. Nel modulo della transazione, sotto la nota, tocca il campo «Tag».
2. Si apre un elenco, con i tag recenti in alto. Spunta quelli che ti servono.
3. Il tag che ti serve non c'è ancora? Scrivi il suo nome nella riga «Cerca o crea un tag» e tocca «Crea il tag «…»».
4. Tocca «Fatto».

##### Dove guardare dopo

- **Quanto si è speso sotto un tag**: l'icona «Beneficiari e tag» nell'intestazione (richiamo 2), la scheda «Tag». Tocca un tag per aprire la sua schermata: quanto è uscito in tutto, per categoria e per mese, e tutte le transazioni.
- **Trovare le transazioni**: scrivi nella ricerca «#» e l'inizio del tag; «#casa» mostra tutto ciò che è per la casa in campagna.
- **Chi deve a chi**: per un tag come «#a metà» attiva «Conguaglio» nel menu «⋮» della sua schermata. L'app mostrerà quanto c'è ancora da raccogliere o da restituire per andare in pari.

Il tag nella riga non si tocca: è un'etichetta, non un pulsante.

Ci sono anche: **due frecce**, un trasferimento tra i tuoi conti; **un calendarietto con una freccia**, una transazione registrata da un pagamento pianificato; **un foglietto adesivo**, una nota: una voce senza importo, un promemoria per te stesso.

### Il menu «⋮» {#transactions-menu}

Qui tutto riguarda come mostrare l'elenco. Nessuna voce cambia o elimina le tue registrazioni: provale senza timore.

[Il menu «⋮» aperto: Seleziona transazioni, Filtro, Ordinamento, Totale del giorno, Suggerimenti, Centro assistenza]

(A)
#### Seleziona transazioni

Un'azione su una decina di righe in una volta.

*Come funziona:*
Devi mettere un contrassegno rosso su una decina di acquisti da controllare con l'estratto conto? Non serve aprirli uno per uno. Attiva la selezione e spunta le righe: in basso compare il loro totale (comodo anche per sommare scontrini). Tocca il «⋮» accanto al totale: puoi impostare per tutte insieme una categoria, un contrassegno o il segno «contabilizzato», ripeterle con la data di oggi, spostarle su un altro conto o eliminarle. L'ultima voce, «Annulla la selezione», esce dalla selezione senza cambiare niente.

La scorciatoia: tieni premuta una riga qualsiasi.

(B)
#### Filtro

Lascia nell'elenco solo ciò che ti serve.

*Come funziona:*
Per esempio: «spese al bar il mese scorso, solo con la carta». Si filtra per tipo, periodo, categoria, beneficiario, conto, importo e tag. I filtri si sommano: ognuno restringe ancora l'elenco.

Finché un filtro è attivo, sul «⋮» si accende un numero: ricorda che in questo momento l'elenco non è completo. Altrimenti è facile pensare che delle transazioni siano sparite.

**Subito dopo l'installazione:** nessun filtro. **Si azzera da solo:** quando cambi budget, perché un altro budget ha categorie e conti suoi. **Vedi anche:** [il filtro dei report](#reports).

(C)
#### Ordinamento

Come disporre le transazioni dentro un giorno.

*Come funziona:*
I giorni vanno sempre come in un calendario, il più recente in alto, e questo non si cambia. Ma dentro un giorno puoi scegliere un ordine tuo: le spese grosse in alto («Decrescente»), le piccole in alto («Crescente»), oppure prima le entrate. L'ordine scelto è scritto direttamente nella voce del menu, così una settimana dopo non ti stupisci che un giorno sembri «mescolato».

**Subito dopo l'installazione:** nell'ordine di inserimento. **Funziona anche:** nella schermata del conto, nelle transazioni di una categoria e per un beneficiario.

(D)
#### Totale del giorno

Quanto è uscito in un giorno, proprio accanto alla data.

*Come funziona:*
Attiva «Solo spese», e a destra di ogni data vedrai quanto hai speso quel giorno. Un ottimo modo per scovare i giorni «cari»: un sabato con mercato e cinema salta subito all'occhio.

«Spese ed entrate» mostra la differenza come un solo numero con segno: «−100», il giorno è andato in meno; «+1.400», è arrivato uno stipendio. I trasferimenti tra i tuoi conti e i saldi iniziali non contano: non sono spese, i soldi si sono solo spostati.

**Subito dopo l'installazione:** non mostrato. **Funziona anche:** nella schermata del conto e nelle transazioni di una categoria.

(E)
#### Suggerimenti

Tutti i suggerimenti di questa schermata in un posto.

*Come funziona:*
Nell'app i suggerimenti compaiono uno alla volta, quando servono, per non seppellirti sotto tutto insieme. Qui sono raccolti tutti, anche quelli a cui non sei ancora arrivato.

(F)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

### Che cosa si può fare con una riga {#transactions-gestures}

Nella riga non ci sono pulsanti «modifica» ed «elimina», per non disturbare la lettura. Invece si tocca la riga o la si fa scorrere di lato con il dito.

| Fai così | Che cosa succede |
|---|---|
| Tocca | Si apre la scheda della transazione: tutto su di lei, foto degli scontrini, modifica. [Che cosa contiene](#transactions-detail) |
| Scorri a sinistra | «Modifica»: dritto al modulo. |
| Scorri a destra | «Elimina». Hai cambiato idea? «Annulla» resta in basso per qualche secondo. |
| Tieni premuto | Si attiva la selezione di più righe, come la voce [«Seleziona transazioni»](#transactions-select). |

#### Hai toccato una transazione: che cosa c'è dentro {#transactions-detail}

La scheda della transazione sale dal basso: tutto ciò che hai registrato su di lei, in un foglio. Niente cambia finché non tocchi «Modifica»: puoi guardare con calma.

[Scheda della transazione «Esselunga»: importo, beneficiario, categoria, conto, data, scontrino elettronico, nota, tag «casa in campagna», foto dello scontrino, pulsanti «Ripeti», «Modifica», «Crea un pagamento pianificato»]
**Un acquisto con scontrino e foto.**

[Scheda della suddivisione «Conad»: parti — Spesa 61 € e Casalinghi 25 €]
**Un importo diviso.** In basso, le parti della suddivisione.

- **In grande in alto**: l'importo con il segno; meno è una spesa, più un'entrata.
- **Beneficiario, categoria, conto, data**: ciò che hai registrato nel modulo.
- **Scontrino**: lo scontrino elettronico. «Copia» mette il codice negli appunti, così lo incolli dove serve. Se è un link, c'è anche «Apri»: lo scontrino si apre nel browser.
- **Tag**: le etichette della transazione come chip, come nell'elenco: «#casa in campagna».
- **Foto**: le miniature delle immagini e dei PDF allegati. Tocca un'immagine per aprirla a schermo intero.
- **Parti della suddivisione**: per un importo diviso, ogni parte con la sua categoria, nota e importo.

##### Pulsanti in basso

- **«Modifica»**: apri questa transazione nel modulo e cambia qualsiasi cosa.
- **«Ripeti»**: una transazione nuova con lo stesso beneficiario, la stessa categoria e lo stesso importo. Comodo per ciò che compri spesso: caffè, mezzi pubblici, pranzo.
- **«Crea un pagamento pianificato»**: fai di questa transazione un pagamento regolare, l'affitto, un abbonamento, un prestito. Resta solo da scegliere ogni quanto si ripete.

Un importo diviso e un trasferimento hanno solo «Modifica»: l'app non li ripete a metà.

## Report {#reports}

Dieci report: dove vanno i soldi, come cambiano le spese, da dove arrivano le entrate e se il patrimonio cresce.

*La scheda «Report» in basso nello schermo*

### Come funziona la scheda {#reports-how}

Un report alla volta sullo schermo. In alto quale report e per quale periodo, sotto il report stesso. L'app ricorda report e periodo: apri «Andamento delle spese» su sei mesi, e la volta dopo si apre quello.

[Report Dove sono finiti i soldi per settembre — novembre: anello, totale 5.893, elenco delle categorie]

1. **Nome del report**: toccalo per aprire l'elenco di tutti i report (screenshot qui sotto).

2. **Filtri**: l'imbuto, cioè periodo, categorie, conti, tag. Il numero sopra dice quanti filtri sono attivi.

   *Come funziona:*
   Togli la categoria «Affitto»: sparisce dai report delle spese, e il quadro delle spese di tutti i giorni diventa più chiaro. I filtri vengono ricordati per ogni budget.

3. **Periodo**: le frecce «‹ ›» spostano la finestra di un mese indietro o avanti, e il tocco sulla scritta apre la scelta del periodo: un mese, 3, 6, 12 mesi, da inizio anno o un intervallo tuo.

   *Come funziona:*
   Ti sei allontanato dal mese in corso? Accanto compare «Oggi», per tornare. Ogni report ha il suo periodo: le spese è comodo guardarle per mese, l'andamento per anno.

4. **Vista**: alcuni report hanno più viste, anello, bolle, riquadri, tabella o grafico. La scelta viene ricordata per ogni report.

5. **Elenco**: gli stessi numeri come righe, colore, nome, importo, percentuale. Tocca una riga per aprire la schermata della categoria o del beneficiario.

[Foglio di scelta del report: sezioni Spese, Movimenti di denaro, Patrimonio]
**Scegliere un report.** Tre sezioni, secondo la domanda a cui il report risponde.

[Foglio dei filtri del report: Periodo, Categorie, Conti, Tag]
**Filtri del report.** Ogni sezione si apre.

### Spese {#reports-spending}

Dove vanno i soldi e come cambia.

#### Dove sono finiti i soldi {#reports-r-spending}

Le spese del periodo per categoria: il report principale del «dove è andato tutto». Tre viste della stessa cosa: scegli quella che ti è più chiara.

[Bolle: Affitto 3.600, 61%, Spesa 886,98, 15%]
**Bolle.** L'area di una bolla è l'importo.

[Riquadri: Affitto, Spesa, Acquisti importanti]
**Riquadri.** L'area di un riquadro è l'importo.

(•)
#### Anello, bolle, riquadri

Si passa dall'uno all'altro con le icone a destra sopra l'immagine. L'anello è familiare; bolle e riquadri mostrano meglio le categorie piccole accanto a quelle grandi.

(•)
#### Il tocco

Tocca una fetta dell'anello, una bolla o un riquadro: viene evidenziato, e nell'elenco si illumina la sua riga. Un secondo tocco apre la schermata di quella categoria.

(•)
#### Che cosa si conta

Le spese al netto dei rimborsi, senza i trasferimenti tra i tuoi conti. Nello screenshot in tre mesi sono usciti 5.893 €, il 61% per l'affitto.

*Come funziona:*
Vuoi vedere le spese di tutti i giorni senza affitto e utenze? Toglile nel filtro «Categorie».

#### Andamento delle spese {#reports-r-trend}

Le spese salgono o scendono: per mese, con la media e una linea di tendenza.

[Andamento delle spese giugno — novembre: barre per mese, andamento, linee di tendenza e media, Totale del periodo 11.590,28]

(•)
#### In alto

La spesa media al mese e dove va: «salgono ≈ 38,20 €/mese» o «scendono».

(•)
#### Il grafico

Le barre sono le spese di ogni mese. La linea con i punti è l'andamento, la retta è la tendenza, la linea tratteggiata è la media. Il mese in corso è sbiadito: non è ancora finito, quindi resta fuori dalla media e dalla tendenza.

(•)
#### La tabella «Per mese»

Ogni mese e quanto si allontana dalla media, in euro e in percentuale. Tocca un mese nel grafico, e sopra compare l'importo esatto.

#### Esempio: le utenze costano di più? {#reports-r-trend-example}

L'andamento generale non te lo dice: ha tutte le spese insieme, e la crescita di una categoria si perde nel resto. Lascia nel report una sola categoria.

[Filtri del report: Categorie 1 di 18, Deseleziona tutto, spuntata solo Utenze]
**Il filtro.** Nel report resta una categoria.

[Andamento delle spese solo per le utenze: 97,27 €/mese, scendono ≈ 3,87 €/mese, ottobre −20% rispetto alla media]
**Il risultato.** L'andamento delle sole utenze.

6. **«Categorie»**: in «Andamento delle spese» tocca l'imbuto in alto a destra, poi «Categorie»: si apre l'elenco di tutte le categorie con le caselle.

7. **«Deseleziona tutto»**: toglie la spunta a tutte le categorie in una volta invece che una alla volta.

8. **La categoria che ti serve**: spunta «Utenze». Sotto «Categorie» ora c'è scritto «1 di 18». Chiudi il foglio: trascinalo giù o tocca fuori.

9. **Il numero sull'imbuto**: quanti filtri sono attivi. Finché è acceso, il report non mostra tutte le spese.

Adesso il report riguarda solo le utenze: 97,27 € al mese in media, le bollette scendono di circa 3,87 € al mese, e ottobre è costato il 20% meno della media. Il filtro viene ricordato per questo report: la volta dopo «Andamento delle spese» si apre con lui. Per riavere tutte le categorie: «Seleziona tutto» o «Reimposta» nel foglio dei filtri.

#### Principali beneficiari {#reports-r-payees}

Come «Dove sono finiti i soldi», ma per beneficiario: chi paghi di più.

[Principali beneficiari: anello, Proprietario 3.600, Esselunga, IKEA, Coop]

(•)
#### Le stesse tre viste

Anello, bolle o riquadri: questo report tiene la sua scelta.

(•)
#### Il tocco

Una riga o una fetta apre la schermata del beneficiario: tutte le spese con lui, per categoria e per mese (articolo [«Beneficiari e tag»](#payees-tags)).

#### Scostamento {#reports-r-deviation}

Dove questo mese spendi più o meno del solito, a colpo d'occhio. Il confronto è con i tuoi 12 mesi prima del periodo: il mese in corso si confronta con gli stessi giorni dei mesi passati, dal 1° alla data di oggi, e un periodo di più mesi con un mese abituale moltiplicato per il loro numero.

[Scostamento di novembre: riquadri per categoria, il colore indica più o meno del solito]

(•)
#### Riquadri

La grandezza di un riquadro è quanto si è speso, il colore quanto più (rossastro) o meno (verdastro) del solito, in tre gradini. Quelli grigi sono come al solito, entro il 10%. Un contorno senza riempimento vuol dire che la categoria è comparsa per la prima volta.

(•)
#### «Di solito»

Il valore di mezzo dei tuoi mesi passati nell'anno: un mese insolitamente caro non lo sposta. Per il mese in corso, «di solito a questa data»: 10 novembre si confronta con gli stessi giorni dei mesi passati.

(•)
#### Il riepilogo a parole

Sotto i riquadri, «Più del solito», «Meno», «Nuovi» con gli importi. «Categorie» o «Beneficiari»: i chip in alto.

#### Tag {#reports-r-tags}

Quanto è andato sotto ogni tag, per mese, come tabella o grafico.

[Report Tag: tabella per mese — casa in campagna, Insieme, Tutte le spese; sezione Conti da saldare — a metà, da raccogliere 43]

[Report Tag come grafico: 1 di 4 nel grafico, I più grandi del periodo]

(•)
#### La tabella

Una riga per tag, una colonna per mese. «Insieme» sono tutti i tag in una volta: una transazione con due tag ci conta una volta sola. «Tutte le spese» serve per il confronto.

(•)
#### «Conti da saldare»

I tag con «Conguaglio» attivo, come blocco a parte: quanto raccogliere o restituire.

(•)
#### Il grafico

Fino a quattro tag come linee per mese; quali, lo scegli sopra il grafico.

### Movimenti di denaro {#reports-flow}

Da dove sono arrivati i soldi, dove sono andati e quanto resta.

#### Flusso di denaro {#reports-r-flow}

Tutto il percorso dei soldi in un'immagine: dalle fonti di entrata, nel budget, per gruppo, per categoria.

[Flusso di denaro: Datore di lavoro → Budget; in alto Entrata 8.400, Uscita 5.893, Netto +2.507, Risparmio 30%]
**A sinistra**: da dove sono arrivati i soldi.

[Flusso di denaro, parte destra: gruppi di spesa → categorie, Resto]
**Scorri di lato**: gruppi e categorie.

(•)
#### In alto

Entrate, uscite, il «netto» (quanto resta) e il tasso di risparmio, cioè quale percentuale delle entrate non è stata spesa.

(•)
#### I nastri

Lo spessore di un nastro è l'importo. Tocca un nastro per vedere importo e percentuale. La fascia verde «Resto» sono i soldi che non sono andati da nessuna parte.

(•)
#### Come guardarlo

L'immagine è più larga dello schermo: scorri di lato e in basso. L'intestazione con i totali scorre insieme all'immagine.

#### Entrate e uscite {#reports-r-ie}

I conti mese per mese: quanto è entrato, quanto è uscito per gruppo, che cosa resta.

[Entrate e uscite come tabella: Entrate, Uscite per gruppo, Totale, Tasso di risparmio per mese]
**Tabella.**

[Entrate e uscite come grafico: barre verdi e rosse per mese e una linea del totale]
**Grafico.**

(•)
#### La tabella

Le righe sono le entrate per fonte e le uscite per gruppo; un gruppo si può aprire fino alle categorie. In fondo, il «Totale» e il «Tasso di risparmio» di ogni mese.

*Come funziona:*
Tocca un numero per aprire l'elenco delle transazioni di cui è fatto. La tabella è più larga dello schermo: scorri di lato.

(•)
#### Il grafico

Ogni mese ha due barre: verde verso l'alto, quanti soldi sono entrati; rossa verso il basso, quanti sono usciti. Una linea sottile mostra che cosa resta: sopra lo zero, il mese si è chiuso in più; sotto, hai speso più di quanto è entrato. Sopra il grafico ci sono quattro numeri per tutto il periodo: entrate, uscite, totale e tasso di risparmio. Tocca un mese, e i numeri mostrano solo quel mese; fai scorrere il dito, e cambiano sui mesi vicini; tocca di nuovo lo stesso mese, e torna tutto il periodo.

#### Età del denaro {#reports-r-aom}

Come è cambiata la tua età del denaro mese per mese.

[Età del denaro: 52 giorni alla fine del periodo, una linea per mese]

(•)
#### Il numero in alto

L'età alla fine del periodo: lo stesso numero della «Panoramica».

(•)
#### Perché

Vedi se il tuo margine cresce. Una linea che sale vuol dire che sei sempre più lontano dal «da stipendio a stipendio». Che cosa significa il numero e come si calcola è nell'articolo [«Panoramica»](#overview), sezione «L'età del denaro nel dettaglio».

### Patrimonio {#reports-capital}

Tutto ciò che possiedi e tutto ciò che devi.

#### Patrimonio {#reports-r-networth}

Il totale di tutti i conti meno i debiti, e come è cambiato.

[Patrimonio: 12.209,72 alla fine del periodo, una linea per mese, una tabella per mese con le frecce]

(•)
#### Che cosa comprende

Tutti i conti nella valuta principale, sia nel budget sia fuori budget (risparmi, depositi), meno carte di credito e prestiti. I conti in altre valute non vengono convertiti e non entrano nel totale.

(•)
#### La tabella

Il patrimonio alla fine di ogni mese, con una freccia, in su o in giù.

#### Debito delle carte {#reports-r-carddebt}

Quanto devi sulle carte di credito, e se il debito cresce.

[Debito delle carte: 890,63 alla fine del periodo, il debito è cresciuto di 563,13 nel periodo]

(•)
#### Il numero in alto

Il debito su tutte le carte di credito alla fine del periodo e di quanto è cresciuto o sceso nel periodo.

(•)
#### Quando lo vedi

Il report è nell'elenco solo se hai una carta di credito. Come funziona una carta di credito nel budget è nell'articolo [«Come funziona il budget»](#start).

## Conti {#accounts}

Ogni posto in cui tieni i soldi: carte, portafoglio, risparmi, carte di credito. E quanto c'è dove in questo momento.

*La scheda «Conti» in basso nello schermo*

### A che cosa serve questa schermata {#accounts-why}

Qui vedi dove sono i tuoi soldi in questo momento: quanto c'è sul conto corrente, quanto nel portafoglio, quanto devi sulla carta di credito. Le buste nella schermata «Budget» rispondono a «per che cosa», e i conti a «dove».

##### Aggiungi i tuoi conti

Ogni posto in cui tieni soldi: le carte di ogni banca, il portafoglio, i risparmi.

##### Riconcilia con la banca

Una volta alla settimana o al mese, controlla che l'app e la banca mostrino la stessa cosa.

##### Togli il vecchio

Hai chiuso una carta? Nascondila, e la storia resta.

### Che cosa c'è nella schermata {#accounts-screen}

Tocca uno screenshot per aprirlo a schermo intero.

[Schermata «Conti»: sezioni «NEL BUDGET», «CARTE DI CREDITO», «FUORI BUDGET» con conti e importi]

1. **Sezione**: uno scaffale di conti dello stesso tipo. Tocca il nome per chiudere la sezione.

   *Come funziona:*
   Le sezioni sono quattro, e in quale finisce un conto dipende dal suo tipo. «NEL BUDGET» sono i soldi che dividi tra le buste: conto corrente, contanti. «CARTE DI CREDITO»: le carte di credito. «FUORI BUDGET»: ciò che risparmi o vuoi solo tenere d'occhio, risparmi, un deposito. «DEBITI»: i prestiti. Una sezione vuota non compare. Approfondisci nella sezione [«Nel budget o fuori budget»](#accounts-kinds).

2. **Totale della sezione**: quanto c'è in tutti i conti della sezione.

   *Come funziona:*
   «NEL BUDGET» nello screenshot è 4.712,98 €: conto corrente e contanti insieme, esattamente i soldi che dividi tra le buste nella schermata «Budget». «CARTE DI CREDITO» ha un totale rosso: è un debito.

3. **Conto**: una riga è un portafoglio, una carta o un deposito. Icona e colore vengono dal tipo del conto.

   *Come funziona:*
   Tocca la riga per aprire la schermata del conto: tutte le sue transazioni, come in «Attività», ma solo di questo conto. Tieni premuto per aprire il menu del conto ([più sotto](#accounts-hold)). Scorri a sinistra o a destra: «Modifica» o «Elimina».

4. **Saldo**: quanto c'è sul conto in questo momento secondo le tue registrazioni.

   *Come funziona:*
   È la somma di tutte le transazioni del conto con il saldo iniziale. Se non coincide con la banca, una transazione è stata dimenticata o registrata due volte. Come trovarla: [«Riconciliazione del saldo»](#accounts-reconcile).

5. **«Non contabilizzato»**: il totale delle transazioni che la banca non ha ancora elaborato.

   *Come funziona:*
   Il conto corrente nello screenshot mostra −47,55 €: hai già registrato l'acquisto all'«Esselunga», ma in banca non c'è ancora. Quando compare nell'estratto conto, spuntalo con il cerchio nell'elenco (in «Attività», richiamo 9), e la riga sparisce. Finché ci sono transazioni così, il saldo nell'app e quello nell'app della banca differiscono legittimamente, esattamente di quell'importo. Il segno è facoltativo. Se non lo usi, qui finiscono tutte le transazioni del conto: non è un errore, solo che allora la riga non ti dice niente.

6. **«CARTE DI CREDITO»**: una sezione a parte per le carte di credito. Il totale rosso è quanto devi alla banca. Per ogni carta di credito l'app crea da sola una categoria speciale nella schermata «Budget»: lasciala stare.

   *Come funziona:*
   Le spese con la carta di credito assottigliano le buste proprio come quelle con la carta di debito. Ma i soldi per saldarla l'app li mette da parte da sola, nel gruppo «Pagamenti carte» della schermata «Budget». Il pagamento della carta di credito è un trasferimento dalla carta di debito alla carta di credito.

   **La categoria speciale.** Quando crei un conto di tipo «Carta di credito», l'app crea nel gruppo «Pagamenti carte» della schermata «Budget» una categoria con lo stesso nome della carta. Sotto il nome c'è scritto «Debito carta …». L'app ci mette da parte i soldi per il pagamento: hai speso 35 € con la carta di credito, e 35 € sono passati qui dalla busta dell'acquisto.

   **Lascia stare questa categoria**, e comunque l'app non ti lascia toccarla: non si può rinominare, eliminare o spostare in un altro gruppo, e non puoi aggiungere una tua categoria al gruppo «Pagamenti carte». L'app la usa per contare il debito di questa carta. Rinomina la carta nella schermata «Conti», e la categoria si rinomina da sola. Cambia la carta in un altro tipo, e la categoria sparisce, e i suoi soldi tornano in «non assegnato».

   Una cosa con lei è ancora tua: **il debito che la carta aveva prima che cominciassi a tenere i conti**. Per lui l'app non mette da parte soldi: per saldarlo, metti soldi in questa categoria come in qualsiasi busta, un po' alla volta o tutto insieme.

7. **«FUORI BUDGET»**: conti i cui soldi non si dividono tra le buste: risparmi, un deposito. Come si distinguono è [più sotto](#accounts-kinds).

8. **Il menu «⋮»**: aggiungere un conto e impostare l'aspetto dell'elenco. È spiegato [più sotto](#accounts-menu).

### Nel budget o fuori budget {#accounts-kinds}

La domanda principale su ogni conto: i suoi soldi li dividi tra le buste? La risposta decide dove compare il conto in questa schermata e se i suoi soldi arrivano alla schermata «Budget».

##### Nel budget

Conto corrente, contanti, carta di credito: ciò da cui spendi ogni giorno. Ogni euro qui deve stare in qualche busta. Uno stipendio arriva sul conto corrente: va in «non assegnato».

##### Fuori budget

Risparmi, un deposito, investimenti, un prestito: ciò che vuoi vedere ma non spendi ogni giorno. Questi soldi non hanno buste. Hai spostato soldi dai risparmi al conto corrente? Compaiono in «non assegnato», e li puoi distribuire.

Un conto nuovo finisce da solo nella sua sezione, secondo il tipo: «Contanti» e «Conto bancario» vanno in «NEL BUDGET», «Carta di credito» in «CARTE DI CREDITO», «Prestito» in «DEBITI», «Solo monitoraggio» in «FUORI BUDGET». Prestiti e conti «Solo monitoraggio» non hanno buste.

### Il menu «⋮» {#accounts-menu}

Un conto nuovo e come mostrare l'elenco.

[Il menu «⋮» della schermata «Conti»: Aggiungi un conto, Saldi progressivi, Conti nascosti, Suggerimenti, Centro assistenza]

(F)
#### Aggiungi un conto

Una nuova carta, un portafoglio o un deposito.

*Come funziona:*
1. Tocca «Aggiungi un conto».
2. Scegli un tipo: «Contanti», «Conto bancario», «Carta di credito», «Prestito» o «Solo monitoraggio». Il tipo decide la sezione e l'icona.
3. Scrivi un nome, come chiami questo conto: «Carta Intesa», «Portafoglio».
4. Scrivi quanto c'è oggi sul conto: l'importo dall'app della banca o dal portafoglio.
5. Salva. L'importo diventa il saldo iniziale. Per i contanti e un conto bancario va dritto in «non assegnato» nella schermata «Budget»: distribuiscilo nelle buste.

(G)
#### Saldi progressivi

Mostra il saldo dopo ogni transazione, per tutti i conti in una volta.

*Come funziona:*
Come «Saldo progressivo» nel menu di un singolo conto, solo per tutti. **Subito dopo l'installazione:** disattivato.

(H)
#### Conti nascosti

Mostra i conti nascosti in fondo all'elenco.

*Come funziona:*
Il numero tra parentesi è quanti sono. Finché non ci sono conti nascosti, la voce è grigia, come nello screenshot. Ogni conto nascosto nell'elenco ha un pulsante «Ripristina».

(I)
#### Suggerimenti

Tutti i suggerimenti di questa schermata in un posto.

(J)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

### Che cosa si può fare con una riga {#accounts-gestures}

Una riga di conto non ha pulsanti. Toccala, tienila premuta o falla scorrere di lato.

| Fai così | Che cosa succede |
|---|---|
| Tocca | La schermata del conto: tutte le sue transazioni, con il saldo e «Non contabilizzato» in alto. |
| Tieni premuto | Il menu del conto, [spiegato più sotto](#accounts-hold). |
| Scorri a sinistra | «Modifica»: il foglio di modifica del conto, nome, tipo, aspetto. |
| Scorri a destra | «Elimina». Se il conto aveva transazioni, l'app propone «Nascondi». |

#### Il menu del conto: tieni premuto {#accounts-hold}

Una riga di conto non ha un «⋮» suo, per non togliere spazio al nome. Il menu si apre con una pressione lunga proprio dove hai il dito. Le stesse voci sono nel «⋮» della schermata del conto.

[Menu del conto alla pressione lunga: Riconciliazione del saldo, Saldo progressivo, Nascondi il conto, Modifica il conto, Elimina il conto]

(A)
#### Riconciliazione del saldo

Controlla che l'app e la banca mostrino la stessa cosa.

*Come funziona:*
1. Apri l'app della banca e guarda quanto c'è sul conto.
2. In «Conti» tieni premuto questo conto e scegli «Riconciliazione del saldo».
3. La finestra dice «Nell'app:» e il saldo. Sotto, nel campo «Saldo reale in banca», scrivi l'importo della banca e tocca «Riconcilia».
4. Coincide: l'app dice «Saldo riconciliato ✓». Tutte le transazioni del conto fino a oggi prendono un lucchetto, e sotto il conto compare «Riconciliato» con la data.
5. Non coincide: la finestra «Il saldo non coincide» mostra la differenza. Prima cerca una transazione dimenticata o in più. Non la trovi? Tocca «Crea una rettifica»: l'app aggiunge una transazione per quella differenza, e categoria, beneficiario e nota li compili tu.

Le transazioni con il lucchetto contano come controllate: modificarne una chiede conferma, perché ciò che è riconciliato non si sposti per sbaglio.

(B)
#### Saldo progressivo

Mostra sotto ogni transazione di questo conto quanto c'era sul conto dopo di lei.

*Come funziona:*
Comodo per trovare dove il saldo si è separato dall'estratto conto: scorri le transazioni e confronta i saldi riga per riga. Si attiva solo per questo conto; per tutti insieme, «Saldi progressivi» nel menu «⋮».

(C)
#### Nascondi il conto

Togli dall'elenco un conto che non usi più.

*Come funziona:*
Hai chiuso una carta? Non puoi eliminarla: ha una storia. Un conto nascosto sparisce dall'elenco, ma le sue transazioni restano nella storia e nei report. Per farlo tornare: «⋮» → «Conti nascosti», compaiono in fondo all'elenco con un pulsante «Ripristina».

(D)
#### Modifica il conto

Cambia nome, tipo, icona e colore del conto, e per un conto in un'altra valuta, la valuta.

*Come funziona:*
Lo stesso foglio si apre facendo scorrere la riga a sinistra. Se il conto ha un saldo iniziale, il foglio ha una riga «Saldo iniziale» con data e importo: toccala per aprire quella transazione stessa, e correggila come qualsiasi altra.

(E)
#### Elimina il conto

Solo un conto senza nemmeno una transazione.

*Come funziona:*
Se il conto ha già transazioni, l'app dice quante sono e propone di nasconderlo invece di eliminarlo: ai report e ai saldi serve la storia. Lo stesso facendo scorrere la riga a destra.

## Modulo della transazione {#entry}

Come registrare un acquisto, un'entrata, un trasferimento o un acquisto diviso su più categorie, e a che cosa serve ogni campo.

*«+ Transazione» in qualsiasi scheda*

### A che cosa serve questa schermata {#entry-why}

Qui registri tutto ciò che succede ai tuoi soldi: un acquisto, uno stipendio, un trasferimento da una carta all'altra. Più in fretta registri, più il budget è onesto: per questo l'essenziale del modulo si fa direttamente alla cassa, in pochi tocchi.

##### Aprirlo

«+ Transazione» in qualsiasi scheda. Dalla schermata di un conto o di una categoria, il modulo si apre con quelli già compilati. Ancora più veloce: un widget nella schermata Home.

##### Il minimo

Importo, categoria e conto. Beneficiario, nota e tutto il resto sono facoltativi.

##### Non solo a mano

La fotocamera sopra il «+» legge il QR dello scontrino, il microfono una frase come «caffè 6 Svago e hobby». Tutti e due i pulsanti aprono questo stesso modulo, già compilato.

### Che cosa c'è nella schermata {#entry-screen}

Ecco com'è il modulo subito dopo il tocco su «+». Il tastierino dell'importo si apre subito: si comincia quasi sempre dall'importo. Tocca uno screenshot per aprirlo a schermo intero.

[Nuova transazione: selettore In uscita e In entrata, importo 0,00, campi Beneficiario, Categoria, Conto, Data, tastierino dell'importo]

1. **Chiudi**: la crocetta. Se hai già scritto qualcosa, l'app chiede «Uscire senza salvare?»: «Resta» o «Non salvare».

2. **«− In uscita» / «+ In entrata»**: una spesa o un'entrata. La scelta decide il segno dell'importo e il colore dell'intestazione: rossastro, una spesa; verde, un'entrata; grigio, un trasferimento.

   *Come funziona:*
   Scegli «+ In entrata» e un beneficiario: l'app mette da sola la categoria delle entrate di questo mese, così uno stipendio va dritto in «non assegnato» nella schermata «Budget».

   Tocca il campo «Categoria» di un'entrata: si apre il foglio «Dove mettere l'entrata», con «Entrate per novembre», «Entrate per dicembre» o «In una categoria di spesa…» (un rimborso, la tua parte di un acquisto comune). Lo stipendio si registra per il mese prossimo quando l'età del denaro arriva a 30 giorni: perché e che cosa cambia è nell'articolo [«Panoramica»](#overview), sezione «L'età del denaro nel dettaglio».

3. **Importo**: si digita sul tastierino qui sotto. Se il tastierino è nascosto, tocca l'importo per farlo tornare.

4. **Beneficiario**: chi hai pagato o da chi sono arrivati i soldi, «Esselunga», «Datore di lavoro». Qui ci sono anche i trasferimenti tra i tuoi conti.

   *Come funziona:*
   Scegli un beneficiario che hai già registrato: l'app compila categoria e nota come l'ultima volta. Compila solo i campi vuoti: se hai già scelto una categoria, resta. Un beneficiario nuovo si crea dalla ricerca: scrivi il nome e scegli «Crea «…»». Per togliere il beneficiario da una transazione, la crocetta a destra del campo. Approfondisci [più sotto](#entry-pickers).

5. **Categoria**: la busta da cui sono usciti i soldi. Senza, un acquisto non riduce nessuna riga della schermata «Budget».

6. **Conto**: da dove sono usciti i soldi o dove sono arrivati, conto corrente, portafoglio, carta di credito. Icona e colore sono gli stessi dell'elenco dei conti.

7. **Data**: oggi, se non la tocchi. Toccala per aprire un calendario.

   *Come funziona:*
   Una data oltre un mese in avanti: l'app chiede di nuovo, «La transazione sarà registrata in data …, oltre un mese in avanti. Registrarla?». Così si scopre un errore nell'anno.

8. **Tastierino dell'importo**: quello dell'app, con la calcolatrice. È spiegato [più sotto](#entry-keypad).

### Il tastierino dell'importo {#entry-keypad}

La normale tastiera del telefono è scomoda per gli importi: cifre piccole, nessuna operazione, la virgola da qualche parte su una seconda schermata. Il modulo ha la sua, grande e con la calcolatrice.

(+)
#### Fa i conti

Uno scontrino per due, due acquisti con la stessa carta: calcola direttamente nel campo.

*Come funziona:*
Scrivi 120, tocca «+», scrivi 35 e tocca «=»: l'importo diventa 155. Funzionano «+», «−», «×» e «÷». L'operazione scelta resta evidenziata mentre scrivi il secondo numero.

(,)
#### Virgola o centesimi

Come digitare la parte decimale lo decidi tu.

*Come funziona:*
**Con la virgola**: come una calcolatrice, 12, virgola, 50 fa 12,50. Mentre scrivi i centesimi, il tasto della virgola è evidenziato.

**Dai centesimi**: come un terminale delle carte, 1250 fa 12,50. Al posto della virgola il tastierino ha un tasto «00»: «3», «00», «00» fa 300,00.

Si cambia in «Impostazioni → Lingua e formati → Inserimento importo». **Subito dopo l'installazione:** con la virgola.

(⌫)
#### Cancellare

Tocca per cancellare l'ultima cifra. Tieni premuto per cancellare tutto in una volta, insieme a un'operazione cominciata.

(✓)
#### «Fatto»

Nasconde il tastierino, e sotto si vedono gli altri campi e il pulsante «Salva». Il tasto Indietro del sistema fa lo stesso.

(✋)
#### Quale mano

Le cifre sotto il pollice.

*Come funziona:*
«Per la mano destra»: cifre a destra, operazioni e «Fatto» a sinistra (come nello screenshot). «Per la mano sinistra»: il contrario. «Impostazioni → Lingua e formati → Tastierino dell’importo». **Subito dopo l'installazione:** per la mano destra.

### Scegliere beneficiario e categoria {#entry-pickers}

Tutti e due i campi aprono un elenco dal basso dello schermo. In alto, la ricerca: scrivi un paio di lettere, e l'elenco si restringe.

[Elenco dei beneficiari: ricerca, una sezione Trasferimenti con conti e saldi, Fuori budget, beneficiari con una lettera a sinistra]
**Beneficiario.** Prima i tuoi conti per i trasferimenti, poi i beneficiari.

[Elenco delle categorie: ricerca, Dividi l'importo, Usati di frequente, gruppi di categorie]
**Categoria.** «Dividi l'importo», le frequenti, poi tutti i gruppi.

(A)
#### I trasferimenti, nell'elenco dei beneficiari

I soldi sono andati su un tuo conto? Sceglilo nella sezione «TRASFERIMENTI»: «Trasferimento: Visa».

*Come funziona:*
Sotto il nome del conto c'è il suo saldo, così non sbagli conto. I conti fuori budget (risparmi, un deposito) sono nella loro sezione più in basso. Come funziona un trasferimento è [più sotto](#entry-transfer).

(B)
#### Beneficiario nuovo

Non è nell'elenco? Scrivi il nome nella ricerca e scegli «Crea «…»».

*Come funziona:*
Non serve preparare i beneficiari in anticipo: l'elenco si forma da solo mentre registri. Per rinominare o eliminare: «Impostazioni → Beneficiari».

(C)
#### «Usati di frequente»

Chip con le categorie che scegli più spesso. Un tocco e hai finito.

*Come funziona:*
La ricerca capisce anche il nome del gruppo. Non la trovi? Scegli «Crea «…» nel gruppo»: la nuova categoria compare subito anche nella schermata «Budget».

(D)
#### «Dividi l'importo»

Un acquisto, più categorie. È spiegato [più sotto](#entry-split).

### Una transazione compilata {#entry-filled}

L'acquisto all'«Esselunga» dell'articolo «Attività»: con un tag, uno scontrino elettronico e una foto. Il tastierino è nascosto e «Dati aggiuntivi» è aperto: si vedono tutti i campi del modulo.

[Modifica della transazione Esselunga 47,55: campi, Dati aggiuntivi con il tag casa in campagna, scontrino, foto, Contabilizzato, Contrassegno, Elimina la transazione, Salva]

9. **Nota**: che cosa hai comprato o perché, «Latte, uova, pane». Nell'elenco si vede in corsivo e si trova con la ricerca.

   *Come funziona:*
   L'importo non è obbligatorio: una registrazione senza importo è una nota su un fatto. Per esempio: cambio olio a 85.000 km, chiavi della casa di campagna date ad Andrea. Servono comunque conto e categoria. Al primo tocco su «Salva» l'app risponde «Inserisci un importo», al secondo «Inserisci un importo. Tocca di nuovo e verrà salvato senza importo», e il terzo salva la registrazione.

   Poi la trova la ricerca in «Attività»: cerca anche nel testo della nota; scrivi, per esempio, olio.

10. **«Dati aggiuntivi»**: i campi usati di rado in una sola scheda. Tocca l'intestazione per chiudere o aprire la scheda.

    *Come funziona:*
    Una scheda chiusa è una riga sola, con a destra le icone dei campi nascosti dentro: tag, scontrino, foto, «Contabilizzato», contrassegno. Un campo compilato si vede sempre, anche nella scheda chiusa. L'app ricorda la tua scelta. **Subito dopo l'installazione:** chiusa.

11. **Tag**: etichette sopra la categoria, «#casa in campagna», «#vacanze». Il foglio di scelta è [più sotto](#entry-tags).

12. **Scontrino elettronico**: il codice o il link dello scontrino. L'icona dello scanner a destra punta la fotocamera su un codice QR, «+» aggiunge un altro scontrino.

    *Come funziona:*
    Se l'app conosce gli scontrini del tuo paese, confronta lo scontrino con il modulo: compila l'importo se non c'è ancora, e se gli importi sono diversi mostra una riga sotto il campo e propone «Correggi». Uno scontrino non cambia mai la data. Su scontrini e foto approfondisci nell'articolo [«Attività»](#transactions).

13. **Foto e PDF**: «Aggiungi», cioè fotografare uno scontrino, scegliere una foto dalla galleria o un PDF. La crocetta su una miniatura la toglie.

    *Come funziona:*
    Non esagerare: ogni foto finisce in tutti i backup e, se è attivo, nel cloud. Approfondisci nell'articolo [«Attività»](#transactions).

14. **«Contabilizzato»**: spuntalo quando la transazione compare nell'estratto conto. Il cerchio nella riga dell'elenco fa lo stesso.

    *Come funziona:*
    Il segno è facoltativo: non influisce sul budget, aiuta solo a riconciliare il conto con la banca. Se non l'hai mai usato, lascialo perdere: i cerchi vuoti vanno benissimo.

15. **Contrassegno**: un segno colorato del «ci torno dopo», da controllare, aspettare un rimborso, discutere. Nella riga dell'elenco compare una bandierina.

16. **Elimina la transazione**: solo per una transazione già registrata. L'app chiede di nuovo.

17. **«Salva»**: registra. Senza un conto o una categoria l'app non salva e dice che cosa scegliere. Un importo zero è permesso: una voce così diventa una nota promemoria nell'elenco.

### Un trasferimento tra i tuoi conti {#entry-transfer}

Hai prelevato contanti, saldato la carta di credito, spostato soldi su un deposito: non è una spesa, sono soldi che si spostano. Registra queste transazioni come trasferimenti, altrimenti il budget le conterà come uscite.

[Un trasferimento di 300 registrato come uscita dal Conto corrente: In uscita, Trasferimento: Visa, conto Conto corrente, alone rosso]
**Modo 1.** In uscita dal Conto corrente: «− In uscita».

[Lo stesso trasferimento di 300 registrato come arrivo sulla Visa: In entrata, Trasferimento: Conto corrente, conto Visa, alone verde]
**Modo 2.** In arrivo sulla Visa: «+ In entrata».

(E)
#### Dove: nel campo «Beneficiario»

Scegli un conto nella sezione «TRASFERIMENTI». L'intestazione del modulo diventa grigia.

*Come funziona:*
Lo screenshot mostra un pagamento della carta di credito: 300 € dal «Conto corrente» alla «Visa». Nell'elenco compaiono due righe: un meno sul conto corrente e un più sulla carta di credito.

(F)
#### «Nessuna categoria necessaria»

I soldi sono ancora tuoi: si sono solo spostati. Le buste nella schermata «Budget» non cambiano.

*Come funziona:*
L'eccezione è un trasferimento tra un conto del budget e uno fuori budget (verso i risparmi, per esempio). Allora i soldi escono dalle buste o ci entrano, e l'app chiede una categoria.

(G)
#### «− In uscita» e «+ In entrata» per un trasferimento

La direzione è dal punto di vista del conto nel campo «Conto».

*Come funziona:*
**«− In uscita»**: i soldi escono da questo conto verso il conto nel campo «Beneficiario». Dietro l'importo si accende piano un cerchio rosso. **«+ In entrata»**: i soldi arrivano su questo conto da quello in «Beneficiario». Il cerchio è verde. L'intestazione di un trasferimento è grigia in tutti e due i casi.

(!)
#### Un trasferimento, due modi di registrarlo

Un pagamento di 300 € dal «Conto corrente» alla «Visa» si può registrare da tutti e due i lati. Il risultato è lo stesso.

*Come funziona:*
1. **In uscita dal conto corrente** (screenshot a sinistra): «Conto», Conto corrente; «Beneficiario», «Trasferimento: Visa»; «− In uscita», alone rosso.
2. **In arrivo sulla carta di credito** (screenshot a destra): «Conto», Visa; «Beneficiario», «Trasferimento: Conto corrente»; «+ In entrata», alone verde.

In tutti e due i casi nell'elenco compaiono le stesse due righe: −300 sul Conto corrente e +300 sulla Visa, entrambe con l'icona del trasferimento. Scegli quello che ti è più comodo: stai riconciliando l'estratto del conto corrente, registralo come uscita dal conto corrente; l'app della banca dice «pagamento della carta ricevuto», registralo come arrivo sulla carta. Dalla schermata di un conto, il modulo si apre da solo con quel conto.

**Registra un trasferimento una volta sola.** L'altro lato l'app lo aggiunge da sola. Registralo come uscita dal conto corrente e poi anche come arrivo sulla carta, e il trasferimento raddoppia: dal conto corrente escono 600 €, e sulla carta ne arrivano 600 invece di 300.

(H)
#### Valute diverse

Da una carta in euro a un conto in dollari: il modulo propone da solo la conversione.

*Come funziona:*
Sotto il beneficiario compaiono dei campi: «Accreditato», quanto arriva sul secondo conto, e «Tasso», con un pulsante che inverte la direzione del tasso. Cambi l'importo, e «Accreditato» si ricalcola; cambi il tasso, lo stesso; scrivi «Accreditato», e si ricalcola il tasso.

### Un importo diviso {#entry-split}

Un acquisto, più buste: da «Conad» hai comprato cibo per 61 € e detersivi per 25 €. Registralo come una transazione sola, ma in due categorie: allora tutte e due le buste si assottigliano onestamente.

[Suddivisione Conad 86: Suddivisione, Totale, Spesa 61, Casalinghi 25, Aggiungi una parte]

(I)
#### «Suddivisione»

Compare al posto del campo «Categoria» quando scegli «Dividi l'importo». Accanto, il «Totale» delle parti.

(J)
#### Una parte

Categoria, importo e nota suoi. Tocca la categoria o l'importo: cambia solo questa parte.

*Come funziona:*
Una parte può anche essere un trasferimento: hai chiesto contanti alla cassa, 70 € in «Spesa» e 30 € come «Trasferimento: Contanti». Un esempio con i numeri è nell'articolo [«Attività»](#transactions).

(K)
#### «+ tag»

Un tag solo per questa parte. Un tag dal campo «Tag» del modulo vale per tutto l'acquisto in una volta.

(L)
#### «Aggiungi una parte»

Un'altra riga. La crocetta a destra di una parte in più la toglie.

(M)
#### «Annulla»

Torna a una categoria per tutto l'importo.

Le parti non fanno il totale? È spiegato [più sotto](#entry-split-mismatch).

#### Le parti non fanno l'importo {#entry-split-mismatch}

Hai sbagliato in una parte? L'app non corregge in silenzio: mostra la differenza proprio sotto le parti e propone un modo per chiuderla.

[Parti 61 e 35 con un totale di 86: La suddivisione supera il totale di 10, un pulsante Aumenta a 96]
**Le parti sono di più.** «Aumenta a 96,00 €».

[Parti 61 e 15 con un totale di 86: Da suddividere ancora 10, un pulsante Riduci a 76]
**Le parti sono di meno.** «Riduci a 76,00 €».

(N)
#### «La suddivisione supera il totale di …» / «Da suddividere ancora: …»

Quanto le parti sono lontane dal totale. La riga compare da sola sotto le parti mentre modifichi.

*Come funziona:*
Mentre modifichi, la riga è gialla: è un suggerimento. Tocca «Salva» con importi che non tornano, e la riga diventa rossa, e il modulo non salva la transazione finché gli importi non coincidono. Lo stesso pulsante di correzione c'è anche nel messaggio in basso allo schermo.

(O)
#### «Aumenta a …» / «Riduci a …»

Un tocco, e il totale diventa uguale alla somma delle parti.

*Come funziona:*
A sinistra: nella seconda parte hai scritto 35 invece di 25. Insieme le parti fanno 96 €, mentre il totale è 86 €: «La suddivisione supera il totale di 10,00 €», e il pulsante «Aumenta a 96,00 €» aggiunge quei 10 al totale. A destra è il contrario: 15 invece di 25, «Da suddividere ancora: 10,00 €», e il pulsante «Riduci a 76,00 €» toglie 10.

**Il pulsante corregge il totale, non la parte.** Se il totale è giusto, come sullo scontrino, e hai sbagliato in una parte, correggi la parte stessa: tocca il suo importo e scrivi quello giusto.

### Rimborso per un articolo reso {#entry-refund}

Hai restituito del latte scaduto, riportato una giacca che non andava: i soldi sono tornati. Non è un'entrata: registralo come rimborso nella stessa categoria da cui hai pagato.

[Foglio Dove mettere l'entrata: Entrate per novembre, Entrate per dicembre, In una categoria di spesa]
**Passo 3.** Il campo «Categoria» ha «Entrate per novembre»: toccalo e scegli «In una categoria di spesa…».

[Un rimborso di 3,00 da Esselunga: In entrata, categoria Spesa, conto Conto corrente, nota Rimborso: latte scaduto]
**Fatto.** «+ In entrata», il negozio, la categoria dell'acquisto.

(P)
#### Come registrarlo

Un rimborso sono soldi tornati dal negozio nella categoria da cui erano usciti.

*Come funziona:*
1. «+ Transazione» → «+ In entrata».
2. L'importo del rimborso. Beneficiario: lo stesso negozio. Conto: dove sono stati restituiti i soldi, di solito la stessa carta.
3. Per abitudine l'app mette in «Categoria» «Entrate per novembre» (screenshot a sinistra). Tocca il campo «Categoria» → «In una categoria di spesa…» → scegli la categoria da cui avevi comprato: «Spesa».
4. Nota, facoltativa: «Rimborso: latte scaduto». Salva.

(Q)
#### Che cosa cambia

La busta «Spesa» si rabbocca, «non assegnato» no.

*Come funziona:*
- Nella schermata «Budget» «Spesa» mostra lo «speso» più basso di 3 €, e il saldo cresce dello stesso importo.
- «Non assegnato» non cambia: non li hai guadagnati, hai riavuto i tuoi soldi.
- Nelle schermate della categoria e del negozio le spese si contano al netto dei rimborsi.
- Nel calendario della «Panoramica» un giorno con soli rimborsi è segnato da un anello vuoto.
- Rimborsato sulla carta di credito? Il debito della carta scende, e con lui l'importo messo da parte per pagarla in «Pagamenti carte».

(R)
#### E se lo registri come entrata

Il budget mentirà due volte.

*Come funziona:*
«Entrate per novembre» aggiunge 3 € a «non assegnato» come se li avessi guadagnati, mentre «Spesa» si tiene un acquisto che in realtà non c'è stato. Il report «Entrate e uscite» mostra sia entrate sia uscite più alte del reale.

(S)
#### Perché non eliminare l'acquisto

Si può eliminare se hai restituito tutto lo stesso giorno.

*Come funziona:*
Se l'acquisto è già passato in banca o è stato riconciliato, oppure ne hai restituito solo una parte, registra il rimborso come transazione a parte. L'estratto conto avrà due righe, l'acquisto e il rimborso: che anche l'app ne abbia due, e la riconciliazione tornerà.

I soldi che un amico ti restituisce per la sua metà di un acquisto comune si registrano allo stesso modo: «+ In entrata», dall'amico, nella categoria dell'acquisto.

### Tag {#entry-tags}

Il campo «Tag» in «Dati aggiuntivi» apre un foglio di scelta.

[Foglio Tag: ricerca Cerca o crea un tag, Recenti: casa in campagna spuntato, a metà]

1. Spunta i tag che ti servono: quelli recenti sono in alto, con il numero di transazioni a destra.
2. Quello che ti serve non c'è? Scrivi il suo nome nella riga «Cerca o crea un tag» e scegli «Crea il tag «…»».
3. Tocca «Fatto».

La scelta non si perde nemmeno se trascini giù il foglio. Perché i tag sono utili e dove vedere i totali dopo è nell'articolo [«Attività»](#transactions).

### Non hai tempo? «In arrivo» {#entry-inbox}

Alla cassa a volte hai solo un secondo: ricordi l'importo, ma non c'è tempo di scegliere categoria e conto.

Attiva «Impostazioni → DATI → In arrivo». Ora, se il modulo ha un importo ma non una categoria o un conto, il pulsante dice **«In arrivo»** invece di «Salva», e sul tastierino dell'importo salva subito. La transazione è registrata, ma con l'etichetta «Smista».

Finché ci sono transazioni così, sopra la navigazione resta una striscia, e in «Panoramica» c'è un avviso. Toccalo: il modulo le apre una alla volta, nell'ordine in cui le hai registrate, comodo per ricostruire la giornata negozio per negozio. **Subito dopo l'installazione:** disattivato.

È particolarmente comodo con la voce: di' l'acquisto alla cassa, e a casa sistemi ciò che la voce non ha riconosciuto. Lo scenario è nell'articolo [«Inserimento vocale»](#voice-inbox).

### Che cosa si può fare nel modulo {#entry-gestures}

Un breve promemoria di gesti e pulsanti.

| Fai così | Che cosa succede |
|---|---|
| Tocca l'importo | Fa tornare il tastierino dell'importo. |
| Il tasto Indietro del telefono | Prima nasconde il tastierino, la seconda volta esce (chiede se qualcosa non è salvato). |
| Tieni premuto ⌫ | Cancella tutto l'importo. |
| La crocetta nel campo «Beneficiario» | Toglie il beneficiario dalla transazione. |
| Tocca l'intestazione «Dati aggiuntivi» | Chiude o apre i campi usati di rado. |
| La crocetta sulla miniatura di una foto | Toglie l'immagine o il PDF dalla transazione. |

## Inserimento vocale {#voice}

Di' l'acquisto in una frase, «Esselunga 70 Spesa», e l'app apre il modulo già compilato. Controllalo e salva.

*il pulsante verde del microfono sopra «+ Transazione»*

### Perché {#voice-why}

Alla cassa hai le mani occupate, ma l'acquisto va registrato subito, finché te lo ricordi. Scrivere l'importo, scegliere beneficiario, categoria e conto: sono cinque tocchi. Con la voce, una frase.

La voce non registra niente da sola. Compila il modulo della transazione, e a salvare sei tu: così un errore di riconoscimento non finisce mai nel budget senza che te ne accorga.

Il pulsante del microfono è verde, sopra «+ Transazione» in «Panoramica», in «Attività» e nelle schermate del conto e della categoria.

### La prima volta {#voice-first}

[Foglio dell'inserimento vocale: microfono, Di' l'importo e i tuoi nomi: categoria, negozio, conto; Per esempio: «70 Spesa»; Quanto riconosciuto finirà nel modulo — lì puoi controllarlo e correggerlo; pulsanti Annulla e Parla]

1. **Che cosa dire**: l'importo e i tuoi nomi, categoria, negozio, conto.

2. **Esempio**: una frase del tuo budget, la categoria più frequente e un importo tipico. Ripetila, e funzionerà.

3. **Dove va**: nel modulo della transazione, dove puoi controllare e correggere tutto.

4. **«Parla»**: accende il microfono. La prima volta il foglio non lo accende da solo: prima leggi che cosa dire. Dopo, il microfono si accende appena apri il foglio.

L'app chiede il permesso di usare il microfono: concedilo. Parla, poi tocca «Fatto» o semplicemente smetti di parlare: la frase riconosciuta compare sul foglio, e si apre il modulo.

### Che cosa dire {#voice-say}

Comincia con importo e categoria, poi aggiungi il resto. L'esempio sotto il microfono cresce con te: due frasi riuscite di fila, e mostra il passo successivo.

I passi sul budget demo:

| Frase | Che cosa si compila |
|---|---|
| «70 Spesa» | Importo e categoria. |
| «Esselunga 70 Spesa» | In più il beneficiario. |
| «Esselunga 70 Spesa nota Detersivo e carta» | In più una nota: tutto ciò che viene dopo la parola «nota». |
| «Esselunga 70 Spesa dal conto Conto corrente» | In più il conto da cui hai pagato. |
| «trasferimento 100 dal conto Conto corrente al conto Visa» | Un trasferimento tra conti. |
| «entrata 1400 Datore di lavoro al conto Conto corrente» | Un'entrata e il conto su cui sono andati i soldi. |

[Modulo Aggiungi transazione dopo la frase «Esselunga 70 Spesa dal conto Conto corrente»: In uscita, 70,00, Beneficiario Esselunga, Categoria Spesa, Conto Conto corrente, Data]

Lo screenshot mostra il modulo dopo la frase «Esselunga 70 Spesa dal conto Conto corrente». La data è oggi. Controllalo e tocca «Fatto», poi «Salva».

##### Le parole che l'app capisce

- **«trasferimento»**: un trasferimento tra conti; **«entrata»**: sono arrivati soldi. Senza queste parole la frase è una spesa.
- **«dal conto …»** o **«da …»**: da quale conto; **«al conto …»** o **«a …»**: verso quale conto. La parola «conto» si può omettere.
- **«nota»**: tutto ciò che viene dopo questa parola diventa la nota. Quindi dilla per ultima.
- **«categoria …»**: se il nome di una categoria suona come quello di un negozio e l'app li confonde.

##### Importo

In cifre o a parole: il riconoscimento trasforma da solo «duecentocinquanta» in 250. I centesimi vanno dopo la virgola: «25,50». Se la frase ha più numeri, l'importo è il primo.

### Come si riconoscono i nomi {#voice-names}

L'app cerca nella frase i **tuoi** nomi: beneficiari, categorie e conti di questo budget. Non ne crea di nuovi: nomina un negozio che non è ancora nel budget, e il campo «Beneficiario» resta vuoto.

##### Il beneficiario si porta dietro la categoria

Una volta riconosciuto il beneficiario, categoria e nota si compilano dalle sue transazioni passate, come se l'avessi scelto a mano nel modulo. Basta dire «Esselunga 70»: la categoria «Spesa» si compila da sola.

##### Quante parole servono

Per un beneficiario basta una parola del nome. Per una categoria di più parole ne servono almeno due, così «Salute e medicina» non si confonde con «Salute». Un nome detto per intero si riconosce sempre.

*Perché l'esempio viene dal tuo budget:*
Un esempio con nomi inventati («Intesa 100 spesa Leroy Merlin») insegnerebbe una frase che nel tuo budget non esiste: ripetila, e avresti un modulo vuoto. Per questo l'esempio si costruisce sempre con i tuoi dati: il tuo acquisto più frequente, i tuoi conti, una nota recente.

### Non ha capito tutto: «In arrivo» {#voice-inbox}

La voce ha riconosciuto l'importo, ma non la categoria o il negozio. Alla cassa non c'è tempo di sistemarlo, e non vuoi perdere l'acquisto. Per questo c'è «In arrivo».

##### Registra adesso, sistema a casa

1. Attiva una volta «Impostazioni → DATI → In arrivo».
2. Alla cassa di' la frase come sempre. Alla fine aggiungi «nota» e un paio di parole sull'acquisto, per esempio «nota farmacia sotto casa». La nota si salva anche se negozio e categoria non sono stati riconosciuti.
3. Nel modulo manca qualcosa? Al posto di «Salva» c'è un pulsante «In arrivo», e anche sul tastierino dell'importo. Toccalo: l'acquisto è registrato con l'etichetta «Smista».
4. A casa tocca la striscia sopra la navigazione o l'avviso in «Panoramica». Il modulo apre questi acquisti uno alla volta, nell'ordine in cui li hai registrati: «In arrivo · 1 di 3». Scegli categoria e conto, «Salva».

L'importo, la data e tutto ciò che la voce è riuscita a riconoscere sono già nella transazione: con questi e la nota è facile ricordare l'acquisto. Se il conto è stato riconosciuto, l'acquisto ne ha già ridotto il saldo, e in «Budget» sta nella riga «Senza categoria» finché non lo sistemi. Se il conto non è stato riconosciuto, l'acquisto aspetta fuori dal budget e ci entra quando scegli il conto.

*Che cosa non va in «In arrivo»:*
Un trasferimento tra conti e un importo diviso: servono tutti e due i conti o tutte le parti insieme. Non ci va nemmeno senza importo: se la voce non ha preso il numero, scrivilo nel modulo. Su «In arrivo» approfondisci nell'articolo [«Modulo della transazione»](#entry-inbox).

### Se non ha capito {#voice-fail}

| Sul foglio | Che cosa è successo |
|---|---|
| «Non ho sentito nulla: riprova» | Il telefono non ha riconosciuto nemmeno una parola. Parla più vicino al microfono e tocca «Riprova». |
| «Non ho riconosciuto né l'importo né i tuoi nomi» | La frase è stata riconosciuta, ma non ha un numero né un nome conosciuto. Il modulo non si apre: guarda l'esempio e tocca «Riprova». |
| «Nessun accesso al microfono o riconoscimento non disponibile…» | All'app non è stato dato il microfono, o il telefono non ha il riconoscimento vocale. Controlla i permessi dell'app nelle impostazioni del telefono. |

Se non è stato riconosciuto niente, l'esempio sul foglio diventa di un gradino più semplice. Se è stato riconosciuto un nome ma non l'importo, l'esempio resta lo stesso: molto probabilmente la frase è stata solo tagliata.

### Lingua {#voice-language}

L'app ascolta nella lingua dell'interfaccia, quella scelta in «Impostazioni», sezione «ASPETTO» → «Lingua e formati» → «Lingua dell'interfaccia». Approfondisci nell'articolo [«Impostazioni»](#settings-formats). Sotto l'esempio c'è scritto in quale lingua ascolta.

##### «La lingua dell’interfaccia non è installata per il riconoscimento vocale: ascolto in …»

Il telefono non ha il modello di riconoscimento per questa lingua, quindi l'app ascolta nella lingua del telefono. Aggiungi la lingua nelle impostazioni del riconoscimento vocale del telefono, e la riga sparisce.

##### Le parole «trasferimento», «entrata», «nota», nella tua lingua

Ogni lingua ha le sue parole chiave: in ucraino «переказ», «дохід», «нотатка», in russo «перевод», «доход», «заметка». L'esempio sotto il microfono mostra sempre le parole della tua lingua.

## Scanner degli scontrini {#receipt}

Inquadra il QR dello scontrino: l'app compila importo e data, e riconosce dal numero della cassa un negozio già visto, compilando beneficiario, categoria e conto.

*il pulsante viola con il codice QR sopra «+ Transazione»*

### Perché {#receipt-why}

Gli scontrini si accumulano in tasca, e la sera devi ricordare dove, quanto e quando. Lo scanner prende importo e data dallo scontrino: niente errori nei numeri, e il giorno vero dell'acquisto, anche se registri lo scontrino il giorno dopo. Lo scontrino si salva nella transazione come scontrino elettronico: quello di carta lo puoi buttare.

### Dov'è il pulsante {#receipt-where}

Il pulsante viola con un codice QR sta sopra «+ Transazione» in «Panoramica», in «Attività» e nelle schermate del conto e della categoria.

Compare solo se l'app conosce gli scontrini del tuo paese:

| Paese | Quando compare il pulsante |
|---|---|
| Ucraina | Grivna nel budget o su un conto, oppure il telefono è stato comprato in Ucraina (regione UA). |
| Kazakistan | Tenge nel budget o su un conto, oppure la regione del telefono è KZ. |
| Russia | Rublo nel budget o su un conto. |
| Portogallo | La regione del telefono è PT, oppure la lingua dell'app è il portoghese e ci sono euro nel budget o su un conto. |

L'Italia non è ancora nell'elenco: nel QR di uno scontrino del supermercato l'importo non c'è, quindi in un budget in euro il pulsante qui non compare. Una sola eccezione: la ricevuta di un pagamento Mooney (per esempio una bolletta pagata in tabaccheria) ha importo e data nel codice, e il campo «Scontrino elettronico» del modulo la riconosce ([più sotto](#receipt-form)). Puoi aiutarci a insegnare all'app gli altri scontrini: [come](#receipt-your-country).

*Perché in base alla valuta e non alla lingua:*
Una lingua non dice niente del paese in cui fai la spesa: in russo si scrive sia in Ucraina sia in Kazakistan, e gli scontrini lì sono diversi. La valuta invece l'hai scelta tu, e dice dove paghi.

Negli altri paesi il pulsante non c'è. Ma il codice di qualsiasi scontrino lo puoi salvare in una transazione, con l'icona dello scanner nel campo «Scontrino elettronico» del modulo ([più sotto](#receipt-form)). E per insegnare all'app a leggere gli scontrini del tuo paese, mandacene qualcuno: [come](#receipt-your-country).

### Come scansionare {#receipt-how}

[Finestra L'app impara dai tuoi scontrini: il codice QR ha solo data, importo e numero della cassa; pulsanti Annulla e Scansiona]

1. Tocca il pulsante viola.
2. Le prime tre volte l'app spiega come impara dagli scontrini (screenshot). Tocca «Scansiona». Una volta che ha riconosciuto un negozio, non lo spiega più.
3. Si apre la fotocamera: «Inquadra il codice QR dello scontrino». Il codice si legge da solo, non serve toccare niente.
4. Si apre il modulo della transazione con importo, data e scontrino. Controllalo e tocca «Salva».

Lo scontrino è una foto o un PDF sul telefono? Sotto la fotocamera ci sono «Scegli dalla galleria» e «Scegli un PDF».

### Che cosa arriva dallo scontrino {#receipt-what}

Il QR di uno scontrino non contiene né il nome del negozio né l'elenco degli acquisti: solo importo, data e ora, numero dello scontrino e numero della cassa. Quindi:

| Campo del modulo | Da dove viene |
|---|---|
| Importo | Dallo scontrino. |
| Data | Dallo scontrino: il giorno dell'acquisto, non oggi. |
| «Scontrino elettronico» | Il codice dello scontrino stesso. Con lui puoi aprire e copiare lo scontrino. |
| Beneficiario | Dal numero della cassa: quello che hai scelto per gli scontrini precedenti di questa cassa. |
| Categoria e nota | Dal beneficiario, come se l'avessi scelto a mano nel modulo. |
| Conto | Quello con cui hai pagato in questo negozio l'ultima volta. |

*Una cassa vuol dire lo stesso negozio:*
Una cassa appartiene sempre a un solo negozio. Al supermercato capiti a una fila o all'altra: con gli scontrini ucraini l'app riconosce anche una cassa vicina dello stesso negozio. Se casse vicine portano a beneficiari diversi, l'app tace: meglio scegliere il negozio tu che averne uno sbagliato.

### Un negozio nuovo {#receipt-new-shop}

Per il primo scontrino di un negozio nuovo l'app compila solo importo e data, e apre subito la scelta del beneficiario.

[Foglio Beneficiario sopra il modulo: ricerca, trasferimenti, beneficiari]

[Il modulo dopo la scelta: 713,00, Beneficiario Esselunga, Categoria Spesa, Conto vuoto, Data 9 novembre, Scontrino elettronico con un link allo scontrino]

1. Trova il negozio nell'elenco o scrivi un nome nuovo.
2. La categoria si compila da sola se hai già comprato da questo beneficiario.
3. Scegli il conto: in questo negozio non hai ancora pagato, quindi l'app non lo conosce.
4. «Salva».

Il prossimo scontrino di questa cassa arriva con beneficiario, categoria e conto già compilati.

### Doppioni ed errori {#receipt-problems}

| Messaggio | Che cosa è successo |
|---|---|
| «Questo scontrino è già inserito» | Lo stesso scontrino è già in una transazione: data e importo sono nella finestra. «Modifica» apre quella transazione, «Aggiungi comunque» una nuova, «Annulla» niente. |
| «Questo non è uno scontrino che l'app conosce» | Il codice QR non viene da uno scontrino, o viene da uno scontrino di un altro paese. Il modulo non si apre. |
| «In questo scontrino non c’è un importo» | Il codice è stato letto, ma dentro non c'è un importo. Inserisci l'acquisto con «+ Transazione». |

Alcuni servizi di cassa stampano sullo scontrino un link al proprio sito, senza importo né data: uno scontrino così l'app non lo legge.

### Uno scontrino da un file: «Condividi» {#receipt-share}

Lo scontrino è arrivato per email, su WhatsApp o nell'app della banca come immagine o PDF? Tocca lì «Condividi» e scegli «Il mio budget».

- Viene trovato uno scontrino conosciuto: il modulo si apre come dopo la fotocamera, e l'app chiede «Allegare il file alla transazione?». Lo scontrino elettronico si aggiunge comunque; allega il file se vuoi vedere lo scontrino in sé.
- Nel file non c'è uno scontrino, o è uno sconosciuto: l'app dice perché e propone «Compila a mano», e il modulo si apre con il file già allegato.

### Uno scontrino nel modulo {#receipt-form}

Nel modulo della transazione, sotto «Dati aggiuntivi», c'è un campo «Scontrino elettronico» con l'icona dello scanner. Funziona con **qualsiasi** codice QR, in qualsiasi paese: mette nel campo quello che dice il codice.

Se lo scontrino è uno conosciuto, l'app lo confronta con il modulo: compila l'importo se non c'è ancora, e se gli importi sono diversi mostra la riga «Lo scontrino riporta un altro importo: …» e propone «Correggi». Uno scontrino non cambia la data di un modulo aperto. Approfondisci nell'articolo [«Modulo della transazione»](#entry).

Uno scontrino salvato si vede come icona nella riga della transazione, e nella scheda della transazione come pulsanti «Copia» e «Apri». Approfondisci nell'articolo [«Attività»](#transactions).

### Insegna all'app gli scontrini del tuo paese {#receipt-your-country}

L'app legge uno scontrino senza internet: tutto ciò che le serve, importo e data, deve stare nel codice QR stesso. In molti paesi è così: il QR di uno scontrino fiscale contiene importo, data e numero della cassa. Se è vero anche nel tuo paese, possiamo aggiungere i suoi scontrini.

##### Mandaci 5-10 scontrini

1. Prendi scontrini di negozi diversi: una catena di supermercati, una farmacia, un distributore, un piccolo negozio. Vanno bene anche gli scontrini elettronici, un PDF o un'immagine da un'email.
2. Fotografa ognuno in modo che si vedano bene il codice QR e il totale.
3. Mandali nella «Chat su Telegram» o per email con «Proponi un miglioramento», tutti e due in «Impostazioni», sezione «AIUTO E CONTATTI». Indica il tuo paese.

Servono più scontrini per essere sicuri che il codice sia costruito allo stesso modo su casse e catene diverse. Uno scontrino solo non lo dice.

*Che cosa coprire nella foto:*
Ci servono solo il codice QR, l'importo e la data. Le ultime cifre della carta, il nome del cassiere, una carta fedeltà e qualsiasi altra cosa personale si possono coprire con un dito o annerire: sul riconoscimento non influisce.

*Quando non funziona:*
Se il QR dello scontrino contiene solo un link a un sito, senza importo né data, i dati stanno su quel sito. L'app non ci va: promette di funzionare senza server e senza registrazione. Questi scontrini restano senza scanner, ma il loro codice lo puoi sempre salvare nel campo «Scontrino elettronico».

## Widget e scorciatoie {#widgets}

Pulsanti per registrare un acquisto direttamente nella schermata Home del telefono: voce, una transazione nuova, lo scanner degli scontrini. Un tocco e sei nel modulo, senza aprire l'app né cercare il «+».

*schermata Home del telefono, «Widget» → «Il mio budget»; scorciatoie, pressione lunga sull'icona dell'app*

### Perché {#widgets-why}

Gli acquisti si registrano finché li ricordi: alla cassa, uscendo dal negozio. Ogni tocco in più è una scusa per rimandare «a stasera» e dimenticare. Un widget nella schermata Home apre subito quello che ti serve: la voce, il modulo o la fotocamera per uno scontrino.

### Cinque widget {#widgets-widgets}

| Widget | Grandezza | Che cosa fa |
|---|---|---|
| «Voce» | 1 cella | Un pulsante verde con un microfono: [l'inserimento vocale](#voice). |
| «Transazione» | 1 cella | Un pulsante con un «+» del colore di «+ Transazione»: una transazione nuova. |
| «Scontrino» | 1 cella | Un pulsante viola con un codice QR: [lo scanner degli scontrini](#receipt). |
| «Pulsanti in colonna» | 1 × 2 celle | Tutti e tre i pulsanti uno sopra l'altro. |
| «Pulsanti in riga» | 2 × 1 celle | Tutti e tre i pulsanti uno accanto all'altro. |

I colori sono quelli dei pulsanti dell'app: verde per la voce, viola per gli scontrini.

##### Il pulsante dello scontrino non è per tutti

Il widget «Scontrino» separato c'è per tutti. Ma nei widget a tre pulsanti il pulsante dello scontrino compare solo se l'app conosce gli scontrini del tuo paese, con la stessa regola del pulsante nell'app. La regola è nell'articolo [«Scanner degli scontrini»](#receipt-where). Altrimenti il widget ha due pulsanti.

### Come aggiungere un widget {#widgets-add}

1. Tieni premuto uno spazio vuoto della schermata Home.
2. Scegli «Widget».
3. Trova «Il mio budget» e il widget che ti serve.
4. Trascinalo nella schermata Home.

I nomi dei menu dipendono dal telefono: alcuni hanno «Widget» nel menu della schermata Home, altri in un elenco a parte. I widget «Voce», «Transazione» e «Scontrino» occupano una cella, come l'icona di un'app.

### Scorciatoie {#widgets-shortcuts}

Una scorciatoia è la stessa azione di un'icona normale: il launcher la disegna come le icone delle app, e si allinea con loro su qualsiasi telefono.

1. Tieni premuta l'icona «Il mio budget».
2. Compaiono «Voce» e «Transazione»: toccane una per aprirla subito.
3. Oppure trascina una scorciatoia nella schermata Home: resta lì come un'icona.

Per gli scontrini non c'è una scorciatoia: una scorciatoia non si può nascondere dove l'app non conosce gli scontrini del paese. Per gli scontrini usa il widget «Scontrino».

### Che cosa si apre {#widgets-open}

| Tocchi | Che cosa succede |
|---|---|
| «Voce» | L'app si apre sulla «Panoramica» con sopra il foglio dell'inserimento vocale. |
| «Transazione» | La «Panoramica», con sopra il modulo della nuova transazione. |
| «Scontrino» | La «Panoramica», con sopra la fotocamera dello scanner. |

Dopo aver salvato resti sulla «Panoramica» e vedi che l'acquisto è entrato nel budget.

##### Se è impostato un PIN

L'app chiede prima il PIN o l'impronta, e subito dopo apre quello che hai toccato. Non serve toccare di nuovo niente.

## Beneficiari e tag {#payees-tags}

Chi paghi e per che cosa: due tagli del tuo elenco delle transazioni, accanto alle categorie.

*Un'icona nell'intestazione di «Attività»*

### A che cosa serve questa schermata {#payees-tags-why}

Le categorie rispondono a «dove sono finiti i soldi». Qui ci sono altri due tagli dello stesso elenco delle transazioni: **chi** paghi e **per che cosa**. Quanto è andato all'«Esselunga» quest'anno, quanto è costata la casa in campagna, chi deve a chi per un acquisto comune.

##### Come arrivarci

L'icona «Beneficiari e tag» nell'intestazione di «Attività». Oppure «Impostazioni → DATI → Beneficiari» e «Tag». Oppure «Tutti i tag ›» nel blocco «I miei tag» della «Panoramica».

##### Non serve prepararli in anticipo

Beneficiari e tag compaiono da soli la prima volta che li scrivi nel modulo della transazione. Qui li guardi, li rinomini e fai pulizia.

##### Due schede

«Beneficiari» e «Tag». La schermata ricorda su quale scheda l'hai lasciata.

### La scheda «Beneficiari» {#payees-tags-payees}

Tutti quelli che hai pagato o da cui hai ricevuto soldi. Tocca uno screenshot per aprirlo a schermo intero.

[Scheda Beneficiari: ricerca, Totale dell'anno in corso, Esselunga −1.111,89, Netflix, Datore di lavoro +16.800, pulsante Nuovo beneficiario]

1. **Schede**: «Beneficiari» e «Tag».

2. **Il menu «⋮»**: l'ordine dell'elenco dei beneficiari e il periodo del totale. È spiegato a destra del secondo screenshot.

3. **Ricerca**: scrivi un paio di lettere del nome.

4. **Beneficiario**: una lettera, il nome, a destra il totale del periodo, sotto il nome quante transazioni ci sono state nello stesso periodo e quando è stata l'ultima.

   *Come funziona:*
   Il totale è «netto» e con il segno: per un negozio, un meno al netto dei rimborsi; per un datore di lavoro, un più. Nello screenshot l'«Esselunga» è costata 1.111,89 € da inizio anno, e il «Datore di lavoro» ha portato 16.800 €. Questi numeri non hanno colore apposta: la direzione la dice il segno.

   Tocca una riga: si apre la schermata del beneficiario ([più sotto](#payees-tags-payee)). Scorri a sinistra: «Modifica», per rinominare. Scorri a destra: «Elimina», l'app chiede di nuovo e dice quante transazioni ha il beneficiario. Le transazioni stesse non spariscono: restano solo senza beneficiario.

5. **«Totale dell'anno in corso»**: la scritta sopra l'elenco, cioè quale periodo coprono i numeri a destra. Il periodo si sceglie nel menu «⋮».

6. **«+ Nuovo beneficiario»**: aggiungere un beneficiario a mano. Di solito non serve: il modulo della transazione lo crea da solo.

#### L'ordine dell'elenco {#payees-tags-sort}

[Menu dell'ordinamento: Più usati, Recenti, Alfabetico, Per importo, Periodo]

(A)
#### Più usati

In alto quelli con più transazioni. È l'impostazione subito dopo l'installazione.

(B)
#### Recenti

In alto quelli con la transazione più recente.

(C)
#### Alfabetico

Comodo quando i beneficiari sono centinaia.

(D)
#### Per importo

I più grandi in alto: sia chi paghi di più sia da chi ricevi di più. Il segno non conta, solo la grandezza.

(E)
#### Periodo

«Totale dell'anno in corso» (l'impostazione subito dopo l'installazione), «Totale in 12 mesi» o «Totale di sempre». Il periodo decide l'importo di ogni riga, «Transazioni: N» e gli ordinamenti «Più usati» e «Per importo»; la data dell'ultima transazione è sempre su tutto il tempo. L'anno comincia il 1° gennaio: il 1° gennaio il totale riparte da zero.

### La schermata del beneficiario {#payees-tags-payee}

Tutto su un beneficiario: quanto, per che cosa e quando. «⋮» lo rinomina, e il «+» in basso avvia una transazione nuova con questo beneficiario già compilato.

[Schermata del beneficiario Netflix: periodo novembre 2026, Andamento delle spese, Per categoria, transazioni per giorno]

(F)
#### Periodo

Comincia dal mese in corso. Le frecce sfogliano i mesi, e il tocco sul nome apre il foglio «Periodo»: lo stesso dei «Report».

*Come funziona:*
Vuoi vedere tutto ciò che è andato a un beneficiario in un anno? Scegli un anno o un intervallo tuo, e la schermata lo mostra per intero: il totale, le categorie e tutte le transazioni.

(G)
#### «Andamento delle spese»

Quanto si è speso con il beneficiario nel periodo e quanto in media al mese.

*Come funziona:*
Le spese si contano al netto dei rimborsi. Se il beneficiario soprattutto ti paga (un datore di lavoro, un inquilino), il blocco si chiama «Andamento delle entrate» e conta le entrate.

(H)
#### «Per categoria»

A che cosa sono andati i soldi dati a questo beneficiario. Compare quando le categorie sono due o più.

*Come funziona:*
Nello screenshot Netflix ha due categorie: l'internet di casa in «Telefono e internet» e l'abbonamento in «Abbonamenti».

(I)
#### Transazioni

Tutte le transazioni con questo beneficiario nel periodo, per giorno.

### La scheda «Tag» {#payees-tags-tags}

Etichette sopra le categorie: «#casa in campagna», «#vacanze», «#a metà». Come mettere un tag su una transazione è nell'articolo [«Attività»](#transactions).

[Scheda Tag: a metà — da raccogliere 43, raccolti 43 su 86; casa in campagna — 118,26, due transazioni]

7. **Tag**: il nome, il totale su tutta la durata del tag, la durata stessa e il numero di transazioni. Per un tag con «Conguaglio», a destra c'è quanto raccogliere o restituire.

   *Come funziona:*
   L'ordine è: prima i tag con un conguaglio aperto, poi per quanto è recente l'ultima transazione, e in fondo i tag senza transazioni. I tag nascosti sono raccolti in un blocco a parte, «Tag nascosti», in fondo.

   Tocca: la schermata del tag ([più sotto](#payees-tags-tag)). Tieni premuto: un menu, «Rinomina», «Conguaglio», «Nascondi dalla scelta». Scorri a sinistra per rinominare, a destra per eliminare.

8. **«+ Nuovo tag»**: aggiungere un tag a mano. Di solito i tag si creano direttamente nel modulo della transazione.

### La schermata del tag {#payees-tags-tag}

Tutto ciò che è andato sotto un tag: quanto, per che cosa e quando. Qui si imposta anche il «Conguaglio».

[Schermata del tag a metà: 10 novembre, 2 transazioni, da raccogliere 43, 50% saldato, Speso 86, Ricevuto 43, Per categoria, transazioni]

(J)
#### Durata e transazioni

Il primo e l'ultimo giorno con transazioni sotto il tag, e quante sono. I totali della schermata coprono tutta la durata del tag.

(K)
#### Conguaglio

Se per il tag è attivo «Conguaglio»: quanto resta per andare in pari, e una barra «N% saldato».

*Come funziona:*
Il conguaglio risponde a «chi deve a chi» per una spesa comune. L'app calcola: speso meno ricevuto su tutta la durata del tag.

- **«Da raccogliere»**: hai speso più di quanto hai raccolto. Nello screenshot: un acquisto da 86 € alla «Conad» è stato diviso con Andrea, lui ne ha restituiti 43, ne restano 43, saldato al 50%.
- **«Da restituire»**: hai raccolto più di quanto hai speso; per esempio tutti hanno messo soldi per un regalo, ed è avanzato il resto.
- **«Saldato»** in verde: tutto torna.

I soldi di un amico registrali come rimborso nella categoria dell'acquisto, con lo stesso tag, come nell'articolo [«Modulo della transazione»](#entry), sezione «Rimborso per un articolo reso». «Conguaglio» non tocca il budget né i report: è un aiuto per te.

(L)
#### «Speso» e «Ricevuto»

Quanto è uscito ed entrato sotto il tag. I trasferimenti tra i tuoi conti non sono inclusi.

(M)
#### «Per categoria»

A che cosa sono andati i soldi sotto questo tag. Un tag su una parte di un importo diviso conta solo quella parte.

(N)
#### Transazioni

Tutte le transazioni con il tag, per giorno.

#### Il menu «⋮» del tag {#payees-tags-tag-menu}

[Menu del tag: Rinomina, Mostra in I miei tag, Conguaglio spuntato, Nascondi dalla scelta, Suggerimenti, Centro assistenza, Elimina]

(O)
#### Rinomina

Il nuovo nome compare su tutte le transazioni con il tag. L'app non accetta un nome già preso.

(P)
#### Mostra in «I miei tag»

Aggiungi il tag al blocco «I miei tag» della «Panoramica». I posti sono quattro; quando sono pieni, la voce è grigia e dice perché: «I miei tag ne ha già 4».

(Q)
#### Conguaglio

Attiva o disattiva il calcolo del «chi deve a chi» per questo tag.

(R)
#### Nascondi dalla scelta

Il tag sparisce dal foglio di scelta nel modulo, ma resta sulle transazioni. Comodo per una vacanza finita. Per un tag nascosto, qui c'è «Rimetti nella scelta».

(S)
#### Suggerimenti

I suggerimenti di questa schermata.

(T)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

(U)
#### Elimina

Il tag viene tolto da tutte le transazioni; le transazioni stesse restano. L'app chiede di nuovo.

### Che cosa si può fare con una riga {#payees-tags-gestures}

Nelle righe non ci sono pulsanti: tocca, tieni premuto o fai scorrere con il dito.

| Fai così | Che cosa succede |
|---|---|
| Tocca un beneficiario | La schermata del beneficiario. |
| Scorri un beneficiario a sinistra / a destra | «Modifica» (rinominare) / «Elimina». |
| Tocca un tag | La schermata del tag. |
| Tieni premuto un tag | Un menu: «Rinomina», «Conguaglio», «Nascondi dalla scelta». |
| Scorri un tag a sinistra / a destra | «Modifica» (rinominare) / «Elimina». |

## Pagamenti pianificati {#scheduled}

Affitto, abbonamenti, stipendio: tutto ciò che si ripete. L'app ricorda le scadenze, te le ricorda e compila da sola importo e categoria. I soldi nel budget si muovono solo quando confermi il pagamento.

*«Impostazioni» → «PIANIFICAZIONE» → «Pagamenti pianificati»*

### A che cosa serve questa schermata {#scheduled-why}

Metà delle spese di un mese si conosce in anticipo: l'affitto il 1°, internet il 5, un abbonamento l'11, lo stipendio due volte al mese. Un pagamento pianificato è una transazione così, scritta una volta, in anticipo.

##### Non dimenticare

L'app ti ricorda la scadenza con una notifica: il giorno del pagamento o prima, come la imposti.

##### Non scriverlo a mano

La scadenza è arrivata: tocca «Conferma», e la transazione si registra da sola, importo, beneficiario, categoria, conto.

##### Vedere che cosa arriva

I pagamenti in arrivo sono in «Panoramica», nel blocco «In arrivo» e nel «Calendario». Vedi a che cosa sono già promessi i soldi.

Un pagamento pianificato non è ancora una spesa. Finché non lo confermi, i saldi di conti e buste non cambiano: ricorda e propone soltanto.

### Che cosa c'è nella schermata {#scheduled-screen}

Tutti i pagamenti pianificati in un elenco, la scadenza più vicina in alto. Tocca uno screenshot per aprirlo a schermo intero.

[Schermata Pagamenti pianificati: Datore di lavoro +1.400 due volte al mese, Proprietario −1.200 mensile, Enel, Spotify, Netflix, un trattino −800 annuale con un contrassegno rosso e la nota Assicurazione auto, pulsante Pagamento]

1. **Riga**: un pagamento che si ripete. È fatta come la riga di una transazione: chi e quanto, categoria e conto, come si ripete e quando è la prossima scadenza.

   *Come funziona:*
   La prima riga è il beneficiario e l'importo con il segno: «−» vuol dire che i soldi usciranno, «+» che arriveranno. La seconda è categoria e conto. La terza è la frequenza e la scadenza più vicina.

   Un pagamento senza beneficiario mostra un trattino «———» al posto del nome, e la nota sta su una quarta riga; nello screenshot, «Assicurazione auto».

   L'elenco è ordinato per scadenza più vicina. Anche i pagamenti la cui scadenza è già passata sono qui, in alto: aspettano di essere confermati; se ne parla [più sotto](#scheduled-due).

2. **Frequenza e data**: a sinistra come si ripete, a destra la prossima scadenza. Dopo che una scadenza è stata registrata o saltata, la data passa da sola alla successiva.

3. **Contrassegno**: lo stesso segno colorato di una transazione. Quando il pagamento viene registrato, il contrassegno passa alla transazione.

4. **«+ Pagamento»**: un nuovo pagamento pianificato. I passi sono [più sotto](#scheduled-new).

Finché non ci sono pagamenti pianificati, la schermata è vuota: «Nessun pagamento pianificato» e il suggerimento «Affitto, abbonamenti, stipendio: aggiungili con il pulsante «Pagamento»».

### Un nuovo pagamento pianificato {#scheduled-new}

Il modulo è lo stesso di una transazione normale, solo con un campo «Ripeti». Anche il tocco su una riga dell'elenco lo apre: allora si chiama «Pagamento pianificato» e modifica quello esistente.

[Modulo del pagamento pianificato: In uscita, 1.200, Beneficiario Proprietario, Categoria Affitto, Conto Conto corrente, Data, Ripeti Mensile, Nota, Dati aggiuntivi, Salva]

[Foglio Ripeti: Una volta, Ogni giorno, Ogni settimana, Ogni 2 settimane, Due volte al mese, Ogni 4 settimane, Mensile, Ogni 2 mesi, Ogni 3 mesi, Ogni 4 mesi, Due volte l'anno, Annuale]

5. **Importo**: scrivilo sul tastierino dell'app e tocca «Fatto». Sopra l'importo, «− In uscita» per un pagamento e «+ In entrata» per uno stipendio.

6. **Beneficiario**: chi paghi o chi ti paga.

7. **Categoria**: da quale busta usciranno i soldi. Per uno stipendio, le entrate del mese.

8. **Conto**: su quale conto si addebita o arriva.

9. **Data**: la scadenza più vicina. Le successive l'app le conta da lì.

10. **«Ripeti»**: ogni quanto, dodici opzioni; il foglio è nel secondo screenshot.

    *Come funziona:*
    - **«Una volta»**: un pagamento senza ripetizioni. Quando è registrato o saltato, sparisce dall'elenco.
    - **«Due volte al mese»**: il giorno della scadenza e 15 giorni dopo, il 3 e il 18. Se il secondo giorno in un mese non c'è, la scadenza cade nell'ultimo giorno del mese.
    - **«Ogni 4 settimane»**: non è come «Mensile»: le scadenze sono 13 all'anno, non 12, e la data si sposta ogni volta.
    - **«Mensile»** e più di rado: lo stesso giorno del mese. Se in un mese quel giorno non c'è, la scadenza cade nell'ultimo giorno del mese e torna al successivo: un pagamento il 31 arriva il 28 febbraio, il 31 marzo, il 30 aprile.

11. **Tag**: le stesse etichette delle transazioni. Nello screenshot l'affitto ha il tag «appartamento».

12. **«Dati aggiuntivi»**: scontrino elettronico, foto e PDF, «Contabilizzato» e il contrassegno. Nello screenshot all'affitto è allegato un PDF del contratto.

    *Come funziona:*
    Tutto ciò che compili qui, insieme ai tag, finisce in ogni transazione registrata da questo pagamento. I tag qui hanno senso: ogni pagamento dell'affitto finisce da solo sotto il tag «appartamento». Un allegato invece di solito serve una volta: basta allegare il contratto a una transazione, quando registri il primo pagamento tocca «Modifica» e aggiungi il PDF nel modulo. Allegato qui, starebbe come icona accanto a ogni pagamento per anni. Compila scontrino, foto e PDF qui solo se ogni transazione ha davvero bisogno del documento.

13. **«Salva»**: il pagamento compare nell'elenco. Se i promemoria sono attivi, l'app te lo ricorderà.

##### Come creare un pagamento

1. «Impostazioni» → «PIANIFICAZIONE» → «Pagamenti pianificati».
2. Tocca «+ Pagamento» in basso a destra. Si apre «Nuovo pagamento pianificato».
3. Scrivi l'importo e tocca «Fatto».
4. Scegli beneficiario, categoria e conto.
5. «Data»: la scadenza più vicina.
6. «Ripeti»: ogni quanto si ripete.
7. Se vuoi, i tag e «Dati aggiuntivi».
8. «Salva».

##### Un trasferimento pianificato

Il pagamento della carta di credito, la rata di un prestito, un versamento sul conto risparmio: è un trasferimento tra i tuoi conti. Nel campo «Beneficiario» scegli un conto nella sezione «TRASFERIMENTI», e la direzione, «− In uscita» o «+ In entrata», come per un trasferimento normale.

*Un trasferimento vuol dire due conti:*
- Il pagamento si vede nelle schermate di **tutti e due** i conti, nel blocco «In arrivo»: come meno sul conto corrente, come più sul prestito.
- Nella schermata di conferma, nel promemoria e nel riepilogo settimanale si chiama con il suo percorso: «Conto corrente → Prestito».
- «Conferma» registra il trasferimento su tutti e due i conti insieme, come fa il modulo.
- Conti in valute diverse: sotto il beneficiario compaiono «Accreditato» e «Tasso»; scrivi il tasso subito, quando lo crei. Alla scadenza «Conferma» apre il modulo con questi numeri: controlla il tasso del giorno e salva.
- Un trasferimento verso un conto fuori budget (un prestito, un deposito) toglie soldi da una busta: l'app chiede una categoria, come per un trasferimento normale. Un trasferimento tra conti del budget (conto corrente → carta di credito) non ha bisogno di categoria.
- Nel «Calendario» della «Panoramica» un pagamento della carta di credito non si colora come spesa: i soldi sono rimasti nel budget. La rata di un prestito fuori budget invece si colora.

##### Che cosa un pagamento pianificato non può avere

Un importo diviso: al salvataggio l'app dice «Le suddivisioni pianificate non sono ancora supportate».

### Da una transazione esistente {#scheduled-from-txn}

Il modo più veloce di creare un pagamento pianificato è da una transazione già registrata: il modulo prende tutto tranne la frequenza.

[Foglio della transazione Esselunga: beneficiario, categoria, conto, data, scontrino, foto; in basso i pulsanti Ripeti, Modifica e Crea un pagamento pianificato]

(14)
##### «Crea un pagamento pianificato»

1. Tocca una transazione in «Attività», nella schermata di un conto o di una categoria: si apre il foglio della transazione.
2. In basso, «Crea un pagamento pianificato».
3. Si apre «Nuovo pagamento pianificato» con lo stesso importo, beneficiario, categoria, conto, nota, contrassegno e tag. Scontrino elettronico, foto e PDF e «Contabilizzato» sono vuoti: ogni pagamento ha i suoi. Devi allegare, per esempio, un contratto? Aggiungilo qui. Sopra si apre subito il foglio «Ripeti»: scegli la frequenza.
4. La data si compila da sola: la scadenza più vicina dopo quella transazione, ma non prima di oggi; da una transazione del 5, un pagamento mensile comincia il 5 del mese prossimo.
5. «Salva».

Il pulsante ce l'ha solo una transazione normale: un importo diviso e un trasferimento no.

### Quando scade {#scheduled-due}

Alla scadenza il pagamento comincia ad aspettare la conferma. Non si registra da solo: l'affitto potrebbe essere stato pagato un giorno dopo, e le utenze arrivano ogni mese con un importo diverso. Decidi tu.

[Avviso in Panoramica: Pagamenti pianificati: 2 in attesa di conferma]
In cima alla «Panoramica» compare un avviso: «Pagamenti pianificati: 2 in attesa di conferma». Toccalo per aprire la schermata di conferma.

[Schermata di conferma: schede Datore di lavoro +1.400 e Proprietario −1.200, ognuna con una data di registrazione e frecce, Salta, Modifica, Conferma]

[La stessa scheda con la data spostata di un giorno: etichette spostato e reimpostato]

(A)
##### Scheda del pagamento

Chi, quanto, categoria, conto e frequenza. La scadenza più vecchia in alto.

(B)
##### Data di registrazione

All'inizio è la data della scadenza. «‹ ›» la spostano un giorno prima o dopo, e il tocco sulla data apre un calendario, un mese in un senso o nell'altro. Una volta spostata, accanto compaiono «spostato» e «reimpostato» (secondo screenshot); «reimpostato» riporta la data della scadenza.

(C)
##### «Conferma»

La transazione si registra nella data scelta e compare in «Attività» con tutto ciò che il pagamento contiene: tag, scontrino, foto e PDF, il segno «Contabilizzato». La scheda se ne va, e la scadenza passa alla successiva.

*Come funziona:*
La scadenza successiva si conta dalla data della SCADENZA, non da quella di registrazione: l'affitto con scadenza il 1° pagato il 3, la scadenza successiva resta il 1°. Altrimenti il calendario slitterebbe a ogni ritardo.

(D)
##### «Modifica»

Se questa volta l'importo è diverso. Si apre il modulo della transazione con i campi del pagamento, e con i suoi tag, scontrino, foto e PDF: sistema e salva, la transazione è registrata e la scadenza chiusa. Hai chiuso il modulo senza salvare? Non è cambiato niente.

(E)
##### «Salta»

Questa volta il pagamento non c'è stato. Nessuna transazione viene registrata, e la scadenza passa alla successiva. Un pagamento «Una volta» sparisce dopo un salto.

*Se si sono accumulate più scadenze:*
Non hai aperto l'app per due mesi? Un pagamento mensile ha due scadenze alle spalle. La scheda mostra la più vecchia; confermala o saltala, e compare la successiva, fino ad arrivare a oggi. Quando non c'è più niente da sistemare, la schermata dice «Nessun pagamento da confermare».

Un trasferimento pianificato si registra come trasferimento, su tutti e due i conti insieme. Se i conti sono in valute diverse, «Conferma» apre il modulo con i campi «Accreditato» e «Tasso» compilati alla creazione: sistemali al tasso del giorno e salva.

### Prima o dopo la scadenza {#scheduled-early-late}

I soldi arrivano di rado il giorno esatto. Un pagamento si registra con la data in cui è avvenuto davvero, e la scadenza si chiude: nel suo giorno non tornerà più, né nella schermata di conferma né come promemoria.

##### Lo stipendio è arrivato 2 giorni prima

La scadenza non è ancora arrivata, quindi non è nella schermata di conferma.

1. «Impostazioni» → «PIANIFICAZIONE» → «Pagamenti pianificati».
2. Fai scorrere a sinistra la riga «Datore di lavoro»: compare «Registra». Toccalo.
3. Si apre il modulo della transazione: importo, beneficiario, categoria, conto, tag dal pagamento, data di oggi. I soldi non sono arrivati oggi? Tocca il campo «Data» e scegli il giorno.
4. «Salva».

Lo stipendio è registrato nel giorno in cui è arrivato. La scadenza è chiusa: nel suo giorno l'app non lo ricorderà né chiederà di confermarlo. La scadenza successiva segue il calendario: due volte al mese, il prossimo dei due giorni; mensile, un mese dopo la scadenza, non dopo il giorno in cui l'hai registrato.

##### L'affitto è stato pagato un giorno dopo

La scadenza è già passata: il pagamento aspetta nella schermata di conferma.

1. Tocca l'avviso «Pagamenti pianificati: … in attesa di conferma» in «Panoramica».
2. Nella scheda del pagamento tocca «›»: la data di registrazione si sposta di un giorno dopo. Tocca la data stessa per aprire un calendario.
3. «Conferma».

La transazione è registrata nel giorno in cui hai pagato. La scadenza successiva resta in calendario: il 1°, non il 2.

##### Questa volta l'importo è diverso

Le utenze sono diverse ogni mese. La scadenza è arrivata: «Modifica» nella scheda della schermata di conferma; non ancora: «Registra» nell'elenco. Correggi l'importo nel modulo e tocca «Salva»: la transazione è registrata con il nuovo importo, e il pagamento pianificato tiene quello vecchio.

### Che cosa si può fare con una riga {#scheduled-gestures}

Nella riga non ci sono pulsanti. Si fa scorrere la riga di lato con il dito, fino a un pulsante che compare da sotto.

[Riga Enel scorsa a sinistra: pulsante Registra]

[Riga Enel scorsa a destra: pulsante rosso Elimina]

| Fai così | Che cosa succede |
|---|---|
| Tocca la riga | Il modulo «Pagamento pianificato»: cambia importo, data, frequenza, qualsiasi cosa. «Salva». |
| Scorri a sinistra | «Registra»: registra adesso la scadenza più vicina, hai pagato l'affitto in anticipo, i soldi sono arrivati prima. Si apre un modulo di transazione nuova con i campi del pagamento e la data di oggi. Una volta salvata, la transazione è registrata, questa scadenza è chiusa, e la successiva segue il calendario. |
| Scorri a destra | «Elimina», dopo la domanda «Eliminare il pagamento pianificato?». Le transazioni già registrate da questo pagamento restano. |

### Promemoria {#scheduled-reminders}

L'app ti ricorda una scadenza con una notifica: «Oggi: …», «Domani: …» o «Tra 3 giorni: …». Quando ricordartelo (il giorno del pagamento, un giorno, 2 o 3 giorni prima, o una settimana prima), a che ora e se nascondere gli importi sulla schermata di blocco è in [«Impostazioni» → «Promemoria»](#settings-reminders).

### Dove altro si vedono i pagamenti pianificati {#scheduled-elsewhere}

**«Panoramica»**: il blocco «In arrivo», i pagamenti in arrivo con le date, e il «Calendario» in modalità «Pianificati»: scadenze in arrivo, registrate e non registrate. Approfondisci nell'articolo [«Panoramica»](#overview-heatmap).

**Schermata del conto**: sopra l'elenco, una scheda «In arrivo» con i pagamenti pianificati di questo conto. Il tocco su una riga apre «Pagamenti pianificati».

**«Obiettivi»**: se una categoria ha un pagamento pianificato, la scheda dell'obiettivo propone «Dal pagamento pianificato: …». Approfondisci nell'articolo [«Obiettivi»](#goals-new).

**Riepilogo settimanale**: se è attivo, comprende i pagamenti pianificati in arrivo. Approfondisci in [«Impostazioni» → «Promemoria»](#settings-reminders).

## Cloud e backup {#sync}

Come non perdere il budget e come tenerlo su più dispositivi.

*«Impostazioni» → sezione «SINCRONIZZAZIONE»*

### Perché tutto questo {#sync-why}

Il budget vive sul tuo telefono. Questa sezione delle impostazioni risponde a tre domande.

**«Mi è caduto il telefono nel lago»**: tre anni di budget non devono affondare con lui. Aiutano i [backup](#sync-backups) e il cloud: un telefono nuovo [carica il budget dal cloud](#sync-restore).

**«Teniamo il budget insieme»**: oppure sei solo tu, ma con un telefono e un computer. Tutti i dispositivi guardano un solo cloud e si scambiano le modifiche: è la [sincronizzazione](#sync-sync).

**«Ieri ho combinato un disastro»**: hai eliminato il conto sbagliato, importato il file sbagliato. L'app fa da sola dei [backup secondo un calendario](#sync-backups), e ci puoi tornare.

**Da dove cominciare.** Bastano tre passi:

1. [Collega un cloud](#sync-auth): Google Drive, Dropbox o WebDAV (Nextcloud, ownCloud, pCloud, il tuo server).
2. [Imposta una password](#sync-password) se non vuoi che nessun altro possa leggere i tuoi dati nel cloud. Scrivitela.
3. Fatto. Da lì in poi sincronizzazione e backup vanno da soli: ogni volta che apri l'app.

### Autorizzazione: collegare un cloud {#sync-auth}

Qui si accede a un cloud. Sono tre, e puoi collegarne uno o più. Nello screenshot Dropbox è già collegato, mentre Google Drive e WebDAV non ancora: così vedi tutti e due i tipi di blocco.

[Schermata Autorizzazione: Cifratura del cloud, Google Drive con un pulsante Accedi con Google, Dropbox con un account collegato, WebDAV con campi indirizzo, nome utente e password]

(1)
**Cifratura del cloud**: lo stesso blocco delle schermate «Sincronizzazione» e «Backup». La password si imposta una volta; è spiegato [più sotto](#sync-password).

(2)
**Google Drive**: «Accedi con Google», e scegli un account. Il budget va in una cartella «My budget» nel tuo Google Drive.

*Come funziona:*
Dopo l'accesso al posto del pulsante c'è la targhetta dell'account: nome, email, ora dell'ultima sincronizzazione ed «Esci». Su Google Drive l'app vede solo ciò che ha creato lei: gli altri file non le sono accessibili.

(3)
**Dropbox**: «Accedi con Dropbox» apre nel browser la pagina di accesso di Dropbox. Lì puoi accedere in due modi: con email e password di Dropbox, o con il pulsante «Continua con Google». Consenti l'accesso, e il browser ti riporta nell'app. Il budget va in una cartella «My budget».

*Perché sono meglio email e password di Dropbox:*
L'accesso con Google lega Dropbox all'account Google che hai usato. Un secondo dispositivo, o una seconda persona con un altro account Google, può facilmente finire in un altro Dropbox, che il tuo budget non ce l'ha. Email e password di Dropbox funzionano allo stesso modo su qualsiasi telefono o computer, per chiunque tenga il budget con te.

*Un'alternativa, se non sei tornato nell'app:*
L'accesso principale, il ritorno dal browser, di solito basta. Se il browser non ti riporta mai nell'app, apri «Problemi ad accedere?» → «Accedi con un codice (se non sei tornato nell'app)»: Dropbox mostra un codice, incollalo nella finestra dell'app.

Lo screenshot mostra un Dropbox collegato: la targhetta dell'account con «Esci» e «Sincronizza». Anche «Aggiorna il token di Dropbox» lì è un'alternativa: solo per quando l'accesso smette all'improvviso di funzionare.

(4)
**WebDAV**: il tuo server o un cloud che parla WebDAV, Nextcloud, ownCloud, pCloud, Yandex Disk e altri. Servono un indirizzo, un nome utente e una password; non serve accedere a un account personale.

*Come funziona:*
Se il cloud ha la protezione a due fattori attiva, il server non accetta la tua password normale: crea una «password per le app» nelle impostazioni del cloud e scrivi quella. Comincia l'indirizzo con `https://`: con `http://` nome utente e password viaggiano in chiaro, e l'app te lo segnala.

**La regola principale: un solo account cloud per tutti i dispositivi**

Telefono, tablet e computer che tengono un budget accedono al cloud con **lo stesso** account. Altrimenti ogni dispositivo scrive nel suo cloud, e non vedono le modifiche degli altri.

*E se in famiglia abbiamo account Google diversi?:*
Crea un **account Google nuovo, a parte**, per il budget e accedi al cloud dell'app solo con quello, su tutti i dispositivi. Non entrare con il tuo account personale sul telefono di tua moglie, né con il suo sul tuo: il telefono comincerà a sincronizzare contatti, messaggi e foto con quell'account, e i dati personali di due persone si mescoleranno. Un account a parte per il budget sa solo del budget.

**Dropbox**: accedi con **nome utente e password** di Dropbox, non con il pulsante «Continua con Google». L'accesso con Google lega Dropbox all'account Google che hai usato, e su un dispositivo con un altro account Google è facile finire in un altro Dropbox, che il tuo budget non ce l'ha.

**WebDAV**: lo stesso indirizzo, nome utente e password su tutti i dispositivi.

### Sincronizzazione {#sync-sync}

Lo scambio di modifiche tra questo dispositivo e il cloud, e attraverso il cloud con gli altri tuoi dispositivi. Aggiungi un acquisto sul telefono: un minuto dopo è sul computer.

[Schermata Sincronizzazione: Cifratura del cloud, stato Sincronizzato (Dropbox), scelta del cloud Dropbox, interruttori Sincronizza le foto e Backup automatico nel cloud da questo dispositivo, pulsante Sincronizza]

(1)
**Cifratura del cloud**: una password su tutto ciò che va nel cloud. È spiegato [più sotto](#sync-password).

(2)
**Stato**: come si è chiusa l'ultima sincronizzazione. «Sincronizzato (Dropbox)» in verde, un errore in rosso, con un pulsante «Segnala un problema».

(3)
**Cloud**: se i cloud collegati sono più d'uno, scegli con quale sincronizzarti. Nessun cloud: qui c'è scritto «Nessun cloud collegato.» e dove collegarne uno.

*Come funziona:*
Tutti i dispositivi si sincronizzano tramite UN solo cloud. L'app aggiorna anche gli altri cloud collegati ogni qualche giorno, nel caso quello principale non sia più disponibile.

(4)
**Sincronizza le foto**: le foto degli scontrini e i PDF vanno nel cloud, nella cartella del budget, e compaiono sugli altri dispositivi. **Subito dopo l'installazione:** disattivato.

*Come funziona:*
Senza questo interruttore le transazioni arrivano sul secondo dispositivo con il segno della foto, ma l'immagine in sé non c'è. Ogni foto occupa spazio nel cloud; se guardi gli scontrini solo sul telefono con cui li hai fotografati, non serve attivarlo. Con una password impostata le foto vengono caricate cifrate.

(5)
**Backup automatico nel cloud da questo dispositivo**: ogni backup automatico del budget va anche nel cloud. **Subito dopo l'installazione:** attivo.

*Come funziona:*
Se il budget lo tengono due dispositivi, tutti e due fanno backup nel cloud, e ottieni dei doppioni. Lascia l'interruttore attivo su un dispositivo e spegnilo sugli altri. Perché il backup nel cloud abbia tutte le foto degli scontrini, attiva anche «Sincronizza le foto»: altrimenti nel backup finiscono solo le foto scattate su questo dispositivo.

(6)
**Sincronizza**: sincronizzare adesso. Di solito non serve toccarlo: l'app lo fa da sola, vedi qui sotto.

#### Quando l'app si sincronizza da sola {#sync-when}

**A ogni apertura**: qualche secondo dopo che torni nell'app. Per questo non serve quasi mai avviare una sincronizzazione a mano.

**Non quando la riduci a icona**: Android non lascia lavorare un'app dopo che l'hai ridotta a icona. Le modifiche fatte prima di ridurla partono alla prossima apertura. Vuoi mandarle subito? Tocca l'icona della sincronizzazione in «Panoramica».

**L'icona in «Panoramica»**: in alto a destra. Il numero sopra è quante modifiche non sono ancora state inviate al cloud. Il tocco sincronizza adesso.

*Come funziona:*
Dopo ogni sincronizzazione l'icona si accende per 15 secondi: verde (è riuscita) o rossa (no). Un singolo errore di solito è la rete: la metropolitana, una casa in montagna. Se quattro sincronizzazioni di fila falliscono, l'icona resta rossa finché la successiva non riesce: vuol dire che si è rotto qualcosa, e conviene aprire questa schermata. Tieni premuta l'icona per vedere il testo dell'errore.

Sulle sincronizzazioni automatiche l'app tace. Il messaggio «Sincronizzato» compare solo se la sincronizzazione l'hai avviata tu.

#### Se qualcosa va storto {#sync-trouble}

Nella schermata «Sincronizzazione» compare una scheda: che cosa è successo e che cosa fare. Ecco i tipi.

**«Il budget «…» esiste già nel cloud con dati»**, con i pulsanti «Dal cloud» e «Unisci» sotto la scheda.

**Che cosa è successo.** Hai collegato un cloud, e lì c'è già un budget con **lo stesso nome** del budget su questo dispositivo, e tutti e due hanno già dati. Di solito è un secondo telefono: qualcuno ci ha aggiunto prima conti o un paio di acquisti, e solo dopo ha collegato il cloud del primo telefono. L'app non sa dire se è un solo budget o due diversi con lo stesso nome, quindi non tocca niente e aspetta la tua risposta. Lo chiede una volta, alla prima sincronizzazione di questo budget.

**Che cosa scegliere:**

- **È un secondo dispositivo per lo stesso budget**: tocca **«Dal cloud»**, poi «Carica». Questo dispositivo riceve tutto il budget dal cloud, e quello che hai inserito qui va perso: inseriscilo di nuovo. È la risposta che serve più spesso.
- **Hai davvero tenuto un solo budget su due dispositivi separatamente** e vuoi mettere tutto insieme: tocca **«Unisci»**. Tutto si somma: ciò che hai inserito qui e ciò che c'è nel cloud. Ma conti e categorie creati separatamente su ogni dispositivo finiscono uno accanto all'altro, due conti «Conto corrente», due beneficiari «Bar Centrale», e i doppioni andranno tolti a mano.
- **Sono due budget diversi** che hanno solo lo stesso nome: per esempio il tuo e quello di tua moglie, tutti e due «Il mio budget». Non toccare nessuno dei due pulsanti. Rinomina il budget su questo dispositivo: tocca il nome del budget nell'intestazione della «Panoramica» → il «⋮» accanto a questo budget → «Rinomina». Con il nuovo nome ha la sua cartella nel cloud e si sincronizza a parte.

Non sei sicuro? Fai prima un backup: «Backup» → «Crea un backup adesso» → «Dispositivo». Se la scelta si rivela sbagliata, ci puoi tornare.

**«Il cloud è protetto da password»**: i dati nel cloud sono cifrati con una password impostata su un altro dispositivo, e qui non è impostata o è diversa. I dati sono intatti. «Inserisci la password»: scrivi la stessa password, e la sincronizzazione continua.

*Come funziona:*
«Password persa» è l'ultima risorsa: il file nel cloud viene sostituito con i dati di questo dispositivo, e la cifratura viene tolta. I dati degli altri dispositivi non vanno persi: le loro modifiche tornano alla loro prossima sincronizzazione. Prima di sostituire, l'app fa dei backup e salva il vecchio file cifrato accanto a loro, nel caso ti ricordassi la password.

**«Il cloud non è cifrato»**: su questo dispositivo è impostata una password, ma i dati nel cloud sono aperti: la cifratura è stata tolta su un altro dispositivo. Decidi tu: «Cifra il cloud», e allora gli altri dispositivi dovranno inserire la stessa password, oppure «Togli la password qui».

**«Il file di sincronizzazione nel cloud è illeggibile»**: il file nel cloud è danneggiato e non si sistemerà da solo. «Ripara il cloud» fa backup freschi del budget e sovrascrive il file del cloud con i dati di questo dispositivo.

*Come funziona:*
Le modifiche di un altro dispositivo che non erano ancora arrivate qui restano solo nel file danneggiato; una sua copia si salva accanto ai backup. Se il secondo dispositivo funziona, riporta i suoi dati alla sua prossima sincronizzazione.

**«Foto dal cloud non decifrate: N»**: i dati sono arrivati, ma le foto no: sono cifrate con una password che qui non è impostata o è diversa. Imposta la stessa password dell'altro dispositivo: le foto arrivano alla prossima sincronizzazione.

**«Conflitto: …»**: lo stesso record è stato cambiato su due dispositivi. La scheda mostra in che cosa differiscono le versioni: «Mantieni» tiene la versione di questo dispositivo, «Prendi» prende quella del cloud.

### Cifratura del cloud: la password {#sync-password}

Il blocco «Cifratura del cloud» viene per primo nelle schermate «Autorizzazione», «Sincronizzazione» e «Backup». È una sola e stessa password.

**Che cosa chiude**: tutto ciò che va nel cloud, cioè backup, foto degli scontrini e il file di sincronizzazione. La cifratura è AES-256. Senza password chiunque abbia accesso alla cartella del cloud può leggere questi file.

**Come impostarla**: tocca «Imposta una password».

*Passo per passo:*
1. Si apre la finestra «Password di cifratura».
2. Scrivi la password in «Password» e di nuovo in «Ripeti la password»: almeno 4 caratteri.
3. Spunta «Ho annotato la password in un posto sicuro»: senza, «Salva» non si può toccare.
4. «Salva». Il blocco diventa «Il cloud è protetto da password».

**Sugli altri dispositivi**: imposta **la stessa** password. La password non si sincronizza e non va né nel cloud né allo sviluppatore: vive solo sul dispositivo. Con password diverse la sincronizzazione si ferma con la scheda «Il cloud è protetto da password».

**Dimentica la password, e nessuno potrà recuperare i backup del cloud.** Né tu, né lo sviluppatore, in nessun modo. Scrivila dove tieni le altre password importanti.

**Cambiarla o toglierla**: nel blocco tocca «Modifica», «Cambia la password» o «Disattiva la cifratura». Cambia la password su tutti i dispositivi: se uno tiene quella vecchia, smette di poter leggere il cloud.

**I backup sul telefono non sono cifrati**: stanno accanto al database del budget, e quello è aperto. Per questo, quando è impostata una password, i backup «Dispositivo» nell'elenco hanno un'etichetta «Non cifrata», così non pensi che tutto sia chiuso.

### Backup {#sync-backups}

Un backup è tutto il budget in un certo momento: conti, categorie, transazioni, obiettivi, pagamenti pianificati e foto. L'app fa i backup da sola; qui vieni quando devi tornare indietro.

[Schermata Backup: Crea un backup adesso, Ultimo backup, Cifratura del cloud, Calendario dei backup, filtri Tutti, Dispositivo, Dropbox, un elenco di sette backup]

(1)
**Crea un backup adesso**: un backup in questo momento, per esempio prima di un'importazione o di una grande pulizia. L'app chiede «Dove salvare il backup?»: screenshot [più sotto](#sync-where).

(2)
**«Ultimo backup: …»**: quando è stato fatto il backup più recente di questo budget. Se è passato molto tempo, la riga diventa gialla.

(3)
**Cifratura del cloud**: la stessa password di «Sincronizzazione»; è [più sopra](#sync-password).

(4)
**Calendario dei backup**: ogni quanto l'app fa i backup e quanti ne tiene. Tocca per aprirlo; è [più sotto](#sync-schedule).

(5)
**Filtri**: «Tutte», «Dispositivo» e un chip per ogni cloud collegato. Il numero è quanti backup ci sono. Nessun cloud collegato, nessun filtro: non c'è niente da filtrare.

(6)
**Backup**: data e ora, dov'è, di che tipo è e di quale budget.

*Come funziona:*
Sotto la data, dov'è («Dispositivo», «Dropbox»…) e il tipo: «Auto, frequente», «Auto, rara» o «Manuale». Sotto, il nome del budget, quanti record, foto e PDF ci sono nel backup, e la grandezza del file.

L'icona dell'orologio con la freccia: **riportare il budget a questo backup**. Il cestino: eliminare il backup (l'app chiede di nuovo).

(7)
**Il menu «⋮»**: «Ripristina da un file», «Copia leggibile», «Suggerimenti»; è [più sotto](#sync-menu).

#### Come riportare il budget a un backup {#sync-back}

1. Trova il backup del giorno che ti serve. Non sei sicuro quale? Prendi l'ultimo prima che le cose andassero storte.
2. Tocca l'icona dell'orologio con la freccia nella sua riga.
3. La finestra «Ripristinare i dati?»: «I dati verranno ripristinati da … I dati attuali verranno sostituiti.»; tocca «Ripristina».
4. In basso compare «Ripristinato da …». Il budget ora è com'era al momento del backup.

**Se è collegato un cloud, un ripristino non basta.**

Un backup si ripristina per liberarsi di modifiche recenti: hai eliminato il conto sbagliato, importato il file sbagliato. Ma un ripristino cambia il budget solo su questo telefono. Il cloud ha ancora il budget con quelle stesse modifiche, e durante la sincronizzazione l'app unisce telefono e cloud, e vince la modifica più recente. Tocca «Sincronizza», e tutto ciò di cui ti stavi liberando torna dal cloud in mezzo minuto.

Perché il ritorno indietro tenga, il cloud va sostituito con il budget ripristinato. Come, è qui sotto.

#### Riportare indietro anche il cloud {#sync-rollback}

Il budget è su un solo telefono: questi passi bastano. L'ordine conta.

1. **Ripristina il backup**: i passi qui sopra. Dopo, **non toccare «Sincronizza»**.
2. **Esci dall'app** con il tasto Home. Finché l'app è ridotta a icona, non si sincronizza.
3. **Elimina il file di sincronizzazione nel cloud.** Apri il cloud in un browser: la cartella «My budget» → la cartella con il nome del budget → il file `ynab_budget_sync.json`. Elimina solo quello: lascia stare le cartelle dei backup e delle foto. In Dropbox la cartella «My budget» è dentro «App» → «My Budget Envelopes».
4. **Torna nell'app.** Qualche secondo dopo si sincronizza da sola, non trova il file nel cloud, e ci mette il budget ripristinato. La schermata «Sincronizzazione» deve dire «Sincronizzato».

*Perché prima ripristinare e dopo eliminare il file:*
Ogni volta che torni nell'app, qualche secondo dopo si sincronizza. Elimina prima il file, e tornando dal browser l'app mette subito nel cloud il budget attuale, ancora con quelle modifiche. Allora dovresti ricominciare da capo.

#### Se il budget lo tengono più dispositivi {#sync-rollback-devices}

Anche il secondo telefono e il computer hanno quelle modifiche. Alla loro sincronizzazione le rimetterebbero nel cloud, e da lì di nuovo a te. Quindi ogni altro dispositivo deve dimenticare i suoi dati e prendere il budget dal cloud da capo, prima di fare in tempo a sincronizzarsi.

1. Riporta indietro budget e cloud su un dispositivo: i passi qui sopra.
2. Sull'altro telefono **attiva la modalità aereo** e solo dopo apri l'app: senza rete non si sincronizza.
3. «Impostazioni» → «Informazioni» → «Reimposta tutti i dati».
4. **Disattiva la modalità aereo.** L'app si sincronizza e carica dal cloud il budget già riportato indietro.

Su un computer, lo stesso: scollegati da internet prima di avviare il programma, reimposta i dati nelle impostazioni, ricollegati. Le modifiche di questi dispositivi che non erano ancora arrivate nel cloud si perdono con il ripristino.

#### Calendario dei backup {#sync-schedule}

L'app fa un backup da sola quando è il momento: quando apri l'app e quando passi a un altro budget. Ogni budget ha il suo calendario. I backup sono di due tipi: frequenti, per tornare indietro di qualche giorno, e rari, per tornare indietro di mesi.

[Calendario dei backup in modalità Personalizzato: backup frequenti ogni 5 giorni, tenerne 7; rari una volta al mese, tenerne 12; Quanto indietro: frequenti circa 35 giorni, rari fino a 12 mesi]
**«Personalizzato».** Le stesse scelte di «Predefinito».

**Predefinito**: backup frequenti ogni 5 giorni, se ne tengono gli ultimi 7, circa 35 giorni indietro; rari, una volta al mese, se ne tengono 12, fino a un anno indietro.

**Personalizzato**: frequenti, ogni giorno oppure ogni 2, 3, 5, 7 giorni, tenerne 3, 5, 7, 10, 14 o 30; rari, una volta al mese o una volta al trimestre, tenerne 3, 4, 6, 12 o 24, oppure «Non fare».

**«Quanto indietro»**: l'app calcola di quanti giorni e mesi puoi tornare indietro con il calendario scelto.

**Avvisi**: se i backup frequenti finiscono prima che cominci uno raro, l'app mostra «Tra … e … giorni potrebbero mancare copie» con pulsanti che chiudono il buco. Scegli «Non fare» per i rari, e avvisa che non ci saranno backup più vecchi di qualche giorno.

**I backup vecchi si eliminano**: se riduci quanti tenerne, i backup in più si eliminano al prossimo backup automatico, sia sul telefono sia nel cloud. Per questo «Salva» chiede prima: quanti ne verranno eliminati, e la data del più vecchio.

**I backup manuali**: si tengono senza limite, il calendario non li tocca. Il calendario vale per questo dispositivo e non si sincronizza.

**Il backup automatico è fallito due volte di fila**: in «Panoramica» compare un avviso «Il backup automatico non riesce» con il motivo (per esempio, poco spazio) e un pulsante «Fai il backup».

#### «Dove salvare il backup?» {#sync-where}

Lo chiede «Crea un backup adesso».

[Foglio Dove salvare il backup: Dispositivo, File sul telefono, Google Drive, Dropbox, WebDAV]

**Dispositivo**: nella cartella dei backup dell'app. Il backup compare nell'elenco.

**File sul telefono**: scegli una cartella, per esempio «Download», e salva il backup come file. Puoi mandartelo o metterlo su un computer. Con una password impostata il file è cifrato.

**Google Drive, Dropbox, WebDAV**: il backup va dritto nel cloud. Il cloud non è collegato? L'app ti dice dove collegarlo.

#### Il menu «⋮» {#sync-menu}

[Menu della schermata Backup: Ripristina da un file, Copia leggibile, Suggerimenti, Centro assistenza]

[Foglio Copia leggibile: Archivio con foto e PDF, Solo dati, Un file dal cloud]

(A)
#### Ripristina da un file

riporta il budget da un file di backup che non è nell'elenco: scaricato dal cloud, mandato a te stesso, salvato in «Download».

*Come funziona:*
Vanno bene un backup (`.y4zip`), una «Copia leggibile» e perfino il file di sincronizzazione `ynab_budget_sync.json` scaricato dal cloud in un browser. Se il file è cifrato, l'app chiede la password. Se il backup è di un altro budget (non di un solo account comune), l'app chiede di nuovo: «Sembra un altro budget». Un file di YNAB 4 non va qui: si porta con «Importa da YNAB» nelle impostazioni.

(B)
#### Copia leggibile

i tuoi dati come file che qualsiasi programma apre, senza password. Tienilo dove gli estranei non guardano.

*Come funziona:*
Tre opzioni:

- **Archivio con foto e PDF**: questo budget per intero; lo apre qualsiasi programma per archivi.
- **Solo dati**: questo budget in un unico file di testo; lo apre qualsiasi editor di testo. Gli scontrini elettronici ci sono, foto e PDF no.
- **Un file dal cloud**: togliere password e compressione da un file di sincronizzazione o da un backup del cloud scaricato in un browser.

È una strada ai tuoi dati che passa fuori dall'app: anche senza l'app il budget resta tuo.

(C)
#### Suggerimenti

i suggerimenti di questa schermata come elenco.

(D)
#### Centro assistenza

Questo articolo sul sito: si apre nel browser, nella lingua dell'app.

### Caricare un budget dal cloud {#sync-restore}

Un telefono nuovo, una reinstallazione o un secondo dispositivo. Il budget sta nel cloud sotto il suo nome; questa schermata lo trova e lo carica qui. L'opzione «Ho già un budget» della procedura del primo avvio apre la stessa schermata.

[Schermata Carica il budget dal cloud: passo 1 Collega un cloud con un pulsante Collega, passo 2 Nome del budget]

(1)
**Collega un cloud**: come sul primo dispositivo, lo stesso Google Drive, Dropbox o WebDAV e **lo stesso account**.

(2)
**Scegli un budget**: l'app mostra i budget nel cloud con la data della loro ultima sincronizzazione. Tocca il tuo e «Carica il budget».

*Come funziona:*
Non c'è un elenco, o il tuo budget non c'è? Tocca «Scrivere il nome a mano» e scrivi il nome esattamente come si chiama sul primo dispositivo: il nome del budget è l'indirizzo della sua cartella nel cloud. Maiuscole e minuscole non contano. Il nome si vede nell'intestazione della «Panoramica» sul primo dispositivo.

Se questo dispositivo ha già dati, l'app chiede di nuovo: «Sostituire i dati con quelli del cloud?»: tutto ciò che non è nel cloud va perso.

**Password**: se sul primo dispositivo è impostata una password, imposta la stessa anche qui. Senza, la sincronizzazione si ferma, e le foto degli scontrini arrivano ma non si aprono.

### Trasferimento locale: senza cloud {#sync-local}

Sposta un budget direttamente tra i tuoi dispositivi, come file o via Wi-Fi. Niente internet e niente account. È un trasferimento una tantum, non una sincronizzazione continua.

[Schermata Trasferimento locale: un blocco File con i pulsanti Esporta e Importa, un blocco WiFi con i ruoli di chi invia e chi riceve]

(1)
**File**: «Esporta», cioè i dati del budget come file: mandalo con un messenger, per email o su una chiavetta. Sull'altro dispositivo, «Importa» e scegli quel file.

*Come funziona:*
L'importazione **unisce** i dati del file con quelli già presenti, e se lo stesso record è diverso, prende la versione del file. Le foto nel file non vanno. Per spostare tutto, foto comprese: Wi-Fi o un [backup](#sync-backups) («Archivio con foto e PDF»).

(2)
**WiFi (rete locale)**: tutti e due i dispositivi sulla stessa rete Wi-Fi. Uno invia i dati, l'altro li riceve e, con «Unisci», gli rimanda le sue modifiche. Si spostano anche le foto.

*Come funziona:*
1. Sul dispositivo che invia: «Avvia il server». Compaiono un codice QR e un «Codice di conferma: …» di 6 cifre.
2. Su quello che riceve: «Scansiona il QR», il codice compila tutti e due i campi. Oppure scrivi a mano indirizzo IP e codice.
3. «Ricevi i dati». L'app chiede «Come applicare i dati?»: «Unisci», come una normale sincronizzazione a due vie, le modifiche di questo dispositivo vanno anche a quello che invia, non si perde niente; «Sostituisci completamente», questo budget diventa una copia esatta di quello che invia, e tutto ciò che qui non è sincronizzato va perso. «Sostituisci» è per un dispositivo nuovo.
4. Sul dispositivo che invia, «Ferma il server».

Il trasferimento è cifrato con il codice di conferma, e il codice stesso non passa mai sulla rete.

## Impostazioni {#settings}

Che cosa fa ogni riga e com'è impostata subito dopo l'installazione.

*L'ingranaggio in alto a sinistra in «Panoramica»*

Le sezioni sono in ordine di quanto spesso servono: le più frequenti in alto.

### Pianificazione {#settings-s-plan}

Tutto ciò che si ripete: pagamenti regolari e promemoria.

[Sezione Pianificazione: Pagamenti pianificati, Promemoria]

**Pagamenti pianificati**: affitto, abbonamenti, uno stipendio, tutto ciò che si ripete. Nel giorno giusto l'app propone di registrare il pagamento con un tocco, e «In arrivo» in «Panoramica» mostra quelli in arrivo.

**Promemoria**: quando e su che cosa l'app ti avvisa. Ha una schermata sua; è [più sotto](#settings-reminders).

#### La schermata «Promemoria» {#settings-reminders}

[Schermata Promemoria: Pagamenti pianificati, Spese del giorno, Riepilogo settimanale, Tutti i promemoria]

**Pagamenti pianificati**: «Quando ricordare», il giorno del pagamento, 1, 2 o 3 giorni prima, o una settimana prima; «Ora del promemoria»; «Nascondere gli importi nelle notifiche»: il promemoria si vede sulla schermata di blocco, e senza questo chiunque prenda in mano il telefono può leggere l'importo. **Subito dopo l'installazione:** il giorno prima, alle 09:00, importi visibili.

**Spese del giorno**: «Ricordami di inserire le spese», la sera, se oggi non hai registrato niente. Se l'hai fatto, tace. **Subito dopo l'installazione:** disattivato, alle 21:00.

**Riepilogo settimanale**: «Invia un riepilogo», l'ultimo giorno della settimana: quanto si è speso e dove di più, quali categorie stanno finendo, quali pagamenti pianificati arrivano. **Subito dopo l'installazione:** disattivato.

**Tutti i promemoria**: «Promemoria all'ora esatta». Senza permesso Android può consegnare un promemoria in ritardo. L'interruttore apre le impostazioni di Android dove si concede quel permesso.

### Dati {#settings-s-data}

Gli elenchi del budget e lo scambio di dati con altri programmi.

[Sezione Dati: Beneficiari, Tag, Esporta in CSV, Importa da YNAB, In arrivo]

**Beneficiari e Tag**: elenchi che si formano da soli mentre registri le transazioni. Tutto su di loro è nell'articolo [«Beneficiari e tag»](#payees-tags).

**Esporta in CSV**: tutte le transazioni del budget corrente come file di tabella, da aprire in Excel o Google Fogli.

*Di più:*
Il file contiene tutto ciò che ha una transazione: data, conto, beneficiario, categoria e il suo gruppo, importo e valuta, «contabilizzato», nota, le parti di un importo diviso, trasferimento, tag, contrassegno, scontrini elettronici, il mese del budget (per uno stipendio registrato per il mese prossimo, il mese per cui è messo da parte), e per un trasferimento tra valute quanto è arrivato, in che valuta e a che tasso. Non si esportano solo foto e PDF: sono file sul telefono.

I nomi delle colonne sono in inglese (`date`, `amount`, `tags`…) e non dipendono dalla lingua dell'app: così formule e tabelle pivot non si rompono se cambi lingua. I numeri nel file sono sempre quelli veri, anche se «Nascondi gli importi» è attivo. Il separatore dei campi segue il formato dei numeri, così la tabella si apre in colonne e non in una riga sola.

**Importa da YNAB**: porta un budget da YNAB 4 (un file .y4backup) o da YNAB web (un'esportazione .zip): conti, categorie e tutta la storia. Dopo l'importazione un glossario mostra come si chiama qui ogni termine di YNAB.

**In arrivo**: alla cassa solo l'importo; conto e categoria li scegli dopo. Come funziona è nell'articolo [«Modulo della transazione»](#entry). **Subito dopo l'installazione:** disattivato.

### Sincronizzazione {#settings-s-sync}

Il cloud, i backup e lo spostamento di un budget tra dispositivi. Qui in breve che cosa c'è dove; nel dettaglio, l'articolo [«Cloud e backup»](#sync).

[Sezione Sincronizzazione: Autorizzazione, Sincronizzazione, Backup, Carica il budget dal cloud, Trasferimento locale]

**Autorizzazione**: collegare un cloud, Google Drive, Dropbox o WebDAV. La regola principale: tutti i dispositivi che tengono questo budget usano **lo stesso account cloud**, altrimenti non si vedono.

*Di più:*
**Se in famiglia ci sono account Google diversi**, crea un **account Google nuovo, a parte**, per il budget e accedi al cloud dell'app solo con quello, su tutti i dispositivi. Non entrare con il tuo account personale sul telefono di tua moglie, né con il suo sul tuo: il telefono comincerà a sincronizzare contatti, messaggi e foto con quell'account, e i dati personali di due persone si mescoleranno. Un account a parte per il budget sa solo del budget.

**Dropbox**: accedi con **nome utente e password** di Dropbox, non con il pulsante «Continua con Google». L'accesso con Google lega Dropbox all'account Google che hai usato, e su un dispositivo con un altro account Google è facile finire in un altro Dropbox, che il tuo budget non ce l'ha. Nome utente e password di Dropbox funzionano allo stesso modo su qualsiasi dispositivo.

**WebDAV**: un cloud che lo supporta (Nextcloud, ownCloud, pCloud e altri) o il tuo server; lo stesso indirizzo, nome utente e cartella su tutti i dispositivi.

**Sincronizzazione**: lo scambio di modifiche con il cloud e gli altri dispositivi; anche la password che cifra il cloud, e il registro della sincronizzazione.

**Backup**: copie del budget, automatiche secondo un calendario e manuali, sul telefono e nel cloud. Sempre da qui, una «Copia leggibile» come file.

**Carica il budget dal cloud**: un telefono nuovo o una reinstallazione, il budget torna dal cloud o da un file di backup.

**Trasferimento locale**: spostare un budget tra i tuoi dispositivi via WiFi o come file, senza cloud.

### Budget {#settings-s-budget}

Le impostazioni del budget corrente.

[Sezione Budget: Valuta del budget, Categorie di Paga te stesso, Età del denaro]

**Valuta del budget**: il simbolo in cui tieni il budget. Solo per questo budget; l'app non converte gli importi, cambia solo il simbolo.

**Categorie di «Paga te stesso»**: quali categorie contano come «messe da parte per te»: di solito i risparmi. Se non ne scegli nessuna, in «Panoramica» non c'è il blocco «Paga te stesso». Che cosa mostra è nell'articolo [«Panoramica»](#overview).

**Età del denaro**: come calcolarla, in tre modi. Ha una schermata sua; è [più sotto](#settings-aom).

#### La schermata «Età del denaro» {#settings-aom}

[Schermata Come si calcola l'età del denaro: Classico YNAB FIFO, Con i risparmi, Con risparmi e profondità del rosso]

I tre modi sono descritti direttamente sulla schermata. Quale è più vicino al vero e perché, con esempi, è nell'articolo [«Panoramica»](#overview), sezione «L'età del denaro nel dettaglio». In breve: **«Con i risparmi»** conta esattamente i soldi che ci sono sui tuoi conti. **Subito dopo l'installazione:** «Classico (YNAB FIFO)».

### Sicurezza {#settings-s-security}

Un lucchetto sull'app.

[Sezione Sicurezza: Codice PIN]

**Codice PIN**: l'app lo chiede all'apertura. Una volta impostato un PIN, sotto compare «Sblocco biometrico»: un'impronta o il viso al posto delle cifre.

*Di più:*
Senza PIN la biometria non si attiva: senza di lui non c'è lucchetto. Finché un PIN è impostato, la scheda dell'app nell'elenco delle app aperte è coperta, e occhi indiscreti non vedono lì i tuoi saldi (su Android 13 e successivi).

### Aspetto {#settings-s-look}

Due schermate: lingua con i formati, e tutto l'aspetto dell'app.

[Sezione Aspetto: Lingua e formati, Aspetto]

**Lingua e formati**: la lingua dell'interfaccia, l'aspetto di importi e date, come digitare un importo. La schermata è [più sotto](#settings-formats).

**Aspetto**: tema, stile, carattere, icone e aspetto della riga di una transazione. La schermata è [più sotto](#settings-appearance).

#### La schermata «Lingua e formati» {#settings-formats}

[Schermata Lingua e formati: Lingua dell'interfaccia, Formato importi, Inserimento importo, Tastierino dell'importo, Formato data]

**Lingua dell'interfaccia**: tredici lingue; «Predefinita di sistema» è la lingua del telefono. La lingua vive su questo dispositivo e non si sincronizza: il telefono può essere in inglese e il computer in tedesco.

**Formato importi**: separatori delle migliaia e dei decimali, da che parte va il simbolo della valuta. Di default, come si usa nella lingua scelta: «1.234.567,89 €».

**Inserimento importo**: «Con la virgola» o «Dai centesimi, come al POS» (1-2-5-0 vuol dire 12,50). **Subito dopo l'installazione:** con la virgola.

**Tastierino dell’importo**: «Per la mano destra», cifre a destra, operatori a sinistra; «Per la mano sinistra», il contrario. **Subito dopo l'installazione:** per la mano destra.

**Formato data**: ordine, separatore, mese come numero o come parola: 24 opzioni tra cui scegliere.

#### La schermata «Aspetto» {#settings-appearance}

[Schermata Aspetto: Tema, Stile, Angoli, Colori di entrate e spese, Carattere, Densità, Icone, Colore degli importi, Forma del contrassegno, Tornare a]

**Tema**: «Sistema», «Chiaro» o «Scuro». «Sistema» segue il telefono.

**Stile**: il carattere cromatico dell'app: «Classico», «Neon», «Aurora», «Acido», «Caramella», «Marshmallow», «Grafite». Ognuno ha una versione chiara e una scura.

**Angoli**: «Netti», «Normali» o «Morbidi», gli angoli di schede, pulsanti e chip. Indipendenti dallo stile.

**Colori di entrate e spese**: «Standard», entrate in verde, spese in rosso. «Rafforzati», entrate in blu: per chi fa fatica a distinguere il verde dal rosso.

*Di più:*
Circa un uomo su dodici e una donna su duecento vedono i colori in modo diverso. I tipi sono tre:

- **deuteranopia**: percezione del verde più debole; la più frequente;
- **protanopia**: percezione del rosso più debole;
- **tritanopia**: si confondono blu e giallo; molto rara.

Con le prime due, verde e rosso si fondono in un colore simile, brunastro, e le entrate non si distinguono dalle spese per colore. Tutte e due vedono bene il blu: per questo in «Rafforzati» le entrate sono blu.

**Che cos'altro fa già l'app per queste persone, senza nessuna impostazione:**

- ogni importo ha un segno «+» o «−»: la direzione di una transazione si vede del tutto senza colore (e subito dopo l'installazione gli importi delle transazioni non hanno comunque colore);
- lo sforamento parla non solo con il colore ma anche con un'icona: un portafoglio, hai speso soldi tuoi; una carta, sei andato in debito sulla carta di credito;
- una sincronizzazione fallita cambia non solo il colore dell'icona ma anche il disegno: dentro compare un «!»;
- i colori dei grafici dei report sono scelti in modo che le fette vicine differiscano anche per luminosità, non solo per tinta.

**Che cosa cambia «Rafforzati»:** entrate in blu ovunque, negli importi, nell'intestazione del modulo delle entrate, nei grafici e nella tabella «Entrate e uscite»; i colori dei contrassegni delle transazioni si separano per luminosità; i grafici dei report e il «Flusso di denaro» usano un loro insieme di colori. Ogni insieme è verificato su tutti e tre i tipi durante lo sviluppo.

«Rafforzati» aiuta anche chi distingue bene i colori ma guarda lo schermo sotto il sole forte.

**Carattere**: il carattere di sistema o uno di sette, «Fira Sans», «Geologica», «IBM Plex Sans», «Inter», «Manrope», «Noto Sans», «Source Sans 3», per tutta l'interfaccia.

**Densità**: «Compatta», «Normale» o «Ariosa», lo spazio tra righe e blocchi. La grandezza delle lettere non cambia.

**Icone**: «Normali» o «Bicolori».

**Colore degli importi**: se colorare gli importi negli elenchi delle transazioni: «Senza colore», «Solo entrate» o «Spese ed entrate».

*Di più:*
**Subito dopo l'installazione: «Senza colore»**, e tutti gli screenshot di questa guida sono fatti così. Perché: il rosso è il colore dell'allarme, e comprare il pane non merita un allarme; quando ogni riga brilla di rosso, il colore smette di dire qualcosa. La direzione di una transazione la mostra il segno: «−» per le spese, «+» per le entrate. Vuoi il colore? Scegli «Spese ed entrate» o «Solo entrate».

Lo sforamento delle categorie, il debito e lo stato della sincronizzazione restano colorati qualunque cosa tu scelga: lì il colore è un avviso.

**Forma del contrassegno**: «Pallino», «Bandierina triangolare» o «Bandierina ondulata», l'aspetto del contrassegno nelle righe delle transazioni.

**Tornare a**: «Panoramica», dopo una pausa di più di 30 secondi e all'avvio si apre la «Panoramica»; «Dove eri rimasto», la stessa schermata, anche con un modulo aperto. Il PIN viene chiesto in tutti e due i casi.

### Aiuto e contatti {#settings-s-help}

Suggerimenti e contatti con lo sviluppatore.

[Sezione Aiuto e contatti: Suggerimenti, Centro assistenza, Chat su Telegram, Segnala un problema, Proponi un miglioramento]

**Suggerimenti**: tutti i suggerimenti dell'app come elenco, per schermata. Anche «Mostra di nuovo i suggerimenti». I suggerimenti di una schermata si aprono anche con la voce «Suggerimenti» nel suo menu «⋮».

**Centro assistenza**: articoli su ogni schermata sul sito, nella lingua dell'app; la voce apre la pagina principale. L'articolo di una schermata si apre con la voce «Centro assistenza» nel suo menu «⋮».

**Chat su Telegram**: un gruppo dove si risponde alle domande e dove puoi chiedere ad altri utenti.

**Segnala un problema**: un'email allo sviluppatore. Le versioni dell'app e del dispositivo si compilano da sole; puoi allegare il registro eventi da «Informazioni».

**Proponi un miglioramento**: un'email con un'idea, che cosa è scomodo adesso e come lo vorresti.

### Informazioni {#settings-s-about}

Una riga, e dietro una schermata con la versione, i documenti e le voci di servizio.

[Sezione Informazioni]

**Informazioni**: la schermata è [più sotto](#settings-about-screen).

#### La schermata «Informazioni» {#settings-about-screen}

[Schermata Informazioni: Versione, Versione per Windows, Condividi l'app, Informativa sulla privacy, Licenza, Registro eventi, Reimposta tutti i dati]

**Versione**: il numero di versione; toccalo per «Novità», che cosa è cambiato nelle ultime versioni.

**Versione per Windows**: lo stesso budget su un computer, nel Microsoft Store.

**Condividi l'app**: manda un link all'app su Google Play.

**Informativa sulla privacy e Licenza**: i documenti. In breve: i dati sono tuoi, e lo sviluppatore non ha accesso.

**Registro eventi**: errori dell'app e della sincronizzazione. Utile se scrivi di un problema.

**Reimposta tutti i dati**: elimina tutti i conti, le categorie, le transazioni, i pagamenti pianificati e gli obiettivi. L'app chiede di nuovo: «Reimpostare tutti i dati?». Non si può annullare.

*Di più:*
Se la sincronizzazione è collegata, i dati tornano dal cloud alla prossima sincronizzazione. Per eliminarli definitivamente scollega il cloud o elimina lì il file di sincronizzazione. Prima di reimpostare, fai una copia in «Backup».
