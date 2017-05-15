# Gestione manovra

## Parametro 024 {#024}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutte funzioni escluse
1|Frecce lampeggianti
2|Occupato lampeggiante
4|Arrivo/prenotazioni lampeggianti

Sommando i valori si ottengono varie combinazioni di configurazione.

## Parametro 025 {#025}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Nessuna verifica risposta VVVF in bassa velocità, manutenzione in alta (per impianti oleo e fune a due velocità), uscita RTFC impostata per interruzione fotocellula
1|Verifica risposta del VVVF in bassa velocità
2|Effettua manutenzione in bassa velocità
4|Uscita RTFC????? impostata per segnalazione fuori servizio

Sommando i valori si ottengono varie combinazioni di configurazione.

## Parametro 026 {#026}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 15|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Fine-corsa apertura porte escluso
2|Termico impianto fine/oleo o allarme VVVF escluso
4|uscita RTFC impostata per segnalazione fuori servizio
8|Relè controllo fasi escluso

Sommando i valori si ottengono varie combinazioni di configurazione

## Parametro 031 {#031}

Impostazione manovre speciali.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 3|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Manovra pompieri
2|Manovra prioritaria
3|Manovra antincendio

Questo parametro viene __azzerato__ quando si entra nel parametro __048__ o quando il parametro __043__ è impostato per impianto ad 1 velocità.


## Parametro 032 {#032}

Gestione emendamento A3.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Impianto oleodinamico: controllo valole + test ogni 24 ore
2|Impianto oleodinamico: con comando valvole (no controllo + test)
3|Impianto a fune: controllo contatti N.O. su freni separati
4|Impianto a fune: controllo contatti N.C. su freni separati
5|Impianto a fune: controllo contatti N.O. su cev / freno emergenza
6|Impianto a fune: controllo contatti N.C. su cev / freno emergenza

Questo parametro viene __azzerato__ quando si entra nel parametro __043__.

## Parametro 033 {#033}

Tipo display (gestito da periferica).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 5 e da 8 a 13|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|1 filo per piano
1|Binario
2|Binario negato
3|Gray
4|Gray negato
5|Segmenti

I parametri da __8__ a __13__ impostano __come__ quelli da __0__ a __5__ e in più impostano la periferica con indirizzo 16 per lavorare __come presente__.

## Parametro 034 {#034}

Configurazione display segmenti.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|intervallo da 0 a 31
1|Intervallo da -1 a 30
2|Intervallo da -2 a 29
3|Intervallo da -3 a 28
4|Intervallo da -4 a 27
5|Intervallo da -5 a 26
altri|Da implementare

Questo parametro viene __azzerato__ quando si entra nel parametro __033__ ed è abilitato solo se il parametro __033__ è impostato per __display a segmenti__.

## Parametro 035 {#035}

Configurazione costole mobili (CM1-CM2), fondo mobile (FM), sovraccarico (SVR).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 170|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|CM1 contatto N.O.
2|CM1 contatto N.C.
4|CM2 contatto N.O.
8|CM2 contatto N.C.
16|FM contatto N.O.
32|FM contatto N.C.
64|SVR contatto N.O.
128|SVR contatto N.C.

Sommando i valori si ottengono varie combinazioni di configurazione.

## Parametro 036 {#036}

Configurazione seriale cabina.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 2|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Seriale cabina senza induttori
2|Seriale cabina e induttori

## Parametro 041 {#041}

Configurazione comando gong in cabina.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 15|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Gong alla fermata 1 impulso
2|Gong all'apertura 1 impulso
3|Gong al rallentamento 1 impulso
4|Tutto escluso
5|Gong alla fermata 1 impulso in salita, 2 impulsi in discesa
6|Gong all'apertura 1 impulso in salita, 2 impulsi in discesa
7|Gong al rallentamento 1 impulso in salita, 2 impulsi in discesa

I valori __9__-__10__-__11__ impostano __come__ __1__-__2__-__3__ in più abilitano segnalazione direzione prossima partenza (FSX-FDX).
I valori __13__-__14__-__15__ impostano come __5__-__6__-__7__ in più abilitano segnalazione prossima partenza (FSX-FDX).
Se impostato impianto a prenotazione in batteria alla chiamata al piano viene attivato gong e accese entrambe le frecce per individuare quale ascensore aprirà le porte.

## Parametro 042 {#042}

Configurazione chiamata al piano in impianto a prenotazione e configurazione
impianto duplex zoppo (con una fermata in più o in meno tra master e slave).

Per chiamata al piano si intende:
*   l'utente preme il pulsante di chiamata / prenotazione di piano
*   il quadro apre le porte di cabina
*   l'utente entra in cabina
*   il quadro comincia a chiudere le porte per ripartire
*   se a questo punto viene premuto il pulsante della chiamata in cabina del piano corrente o il
    pulsante esterno il quadro riapre le porte, cosa che non farebbe senza impostare la chiamata al piano o
    interrompendo la fotocellula

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 5|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Master con un piano in più in basso
2|Master con un piano in più in alto
3|Come 1 e chiamata al piano attivata
4|Come 2 e chiamata al piano attivata
5|Chiamata al piano attivata

La configurazione dei parametri dell'impianto __zoppo__ vengono __abilitati__ solo se il tipo di impianto è __impostato__ come __duplex__
(---------link relativo all'impostazione qui--------) mentre quelli della __chiamata al piano__ solo se la manovra è a __prenotazione__
(---------link relativo all'impostazione e spiegazione qui--------).

## Parametro 043 {#043}

Tipo di impianto.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 23|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Impianto a fune 1 velocità porte a battente (manuale)
1|Impianto a fune 2 velocità porte a battente (manuale)
2|Impianto a fune con VVVF porte a battente (manuale)
3|Impianto oleodinamico con avviamento diretto porte a battente (manuale)
4|Impianto oleodinamico con avviamento stella triangolo porte a battente (manuale)
5|Impianto oleodinamico con avviamento soft-starter porte a battente (manuale)
6|Impianto a fune 1 velocità porte automatiche 1 ingresso
7|Impianto a fune 2 velocità porte automatiche 1 ingresso
8|Impianto a fune con VVVF porte automatiche 1 ingresso
9|Impianto oleodinamico con avviamento diretto porte automatiche 1 ingresso
10|Impianto oleodinamico con avviamento stella triangolo porte automatiche 1 ingresso
11|Impianto oleodinamico con avviamento soft-starter porte automatiche 1 ingresso
12|Impianto a fune 1 velocità porte automatiche 2 ingressi alternati
13|Impianto a fune 2 velocità porte automatiche 2 ingressi alternati
14|Impianto a fune con VVVF porte automatiche 2 ingressi alternati
15|Impianto oleodinamico con avviamento diretto porte automatiche 2 ingressi alternati
16|Impianto oleodinamico con avviamento stella triangolo porte automatiche 2 ingressi alternati
17|Impianto oleodinamico con avviamento soft-starter porte automatiche 2 ingressi alternati
18|Impianto a fune 1 velocità porte automatiche 2 ingressi selettivi
19|Impianto a fune 2 velocità porte automatiche 2 ingressi selettivi
20|Impianto a fune con VVVF porte automatiche 2 ingressi selettivi
21|Impianto oleodinamico con avviamento diretto porte automatiche 2 ingressi selettivi
22|Impianto oleodinamico con avviamento stella triangolo porte automatiche 2 ingressi selettivi
23|Impianto oleodinamico con avviamento soft-starter porte automatiche 2 ingressi selettivi

## Parametro 044 {#044}

Tipo di manovra a prenotazione.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 170|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|SIMPLEX-MASTER-SLAVE 2-3-4 SALITA-DISCESA????
1|Manovra simplex solo salita, quadro impostato come master
2|Manovra simplex solo discesa, quadro impostato come master
4|Manovra in batteria (duplex, triplex etc) solo salita, quadro impostato come slave 2
8|Manovra in batteria (duplex, triplex etc) solo discesa, quadro impostato come slave 2
16|Manovra in batteria (duplex, triplex etc) solo salita, quadro impostato come slave 3
32|Manovra in batteria (duplex, triplex etc) solo discesa, quadro impostato come slave 3
64|Manovra in batteria (duplex, triplex etc) solo salita, quadro impostato come slave 4
128|Manovra in batteria (duplex, triplex etc) solo discesa, quadro impostato come slave 4

COME SLAVE IMPOSTARE SOLO I RELATIVI VALORI
COME SIMPLEX IMPOSTARE SOLO I RELATIVI VALORI
COME MASTER IMPOSTARE SOMME VALORI PER MASTER COME
SI DESIDERA + STESSI VALORI IMPOSTATI AGLI SLAVE
QUANDO SI ENTRA IN PARAM 48 QUESTO VIENE AZZERATO???????????????

## Parametro 045 {#045}

Non usato.

## Parametro 046 {#046}

Numero fermate.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 31|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|0 fermate ??????????
1|2 fermate
2|3 fermate
3|4 fermate
4|5 fermate
5|6 fermate
6|7 fermate
7|8 fermate
8|9 fermate
9|10 fermate
10|11 fermate
11|12 fermate
12|13 fermate
13|14 fermate
14|15 fermate
15|16 fermate
16|17 fermate
17|18 fermate
18|19 fermate
19|20 fermate
20|21 fermate
21|22 fermate
22|23 fermate
23|24 fermate
24|25 fermate
25|26 fermate
26|27 fermate
27|28 fermate
28|29 fermate
29|30 fermate
30|31 fermate
31|32 fermate

Nel conteggio del numero di fermate lo zero viene cosiderato il piano estremo basso.
La relazione tra numero di fermate e numero da impostare nel parametro è:

```
numero fermate = numero da impostare + 1
```

## Parametro 047 {#047}

Numero del piano di stazionamento.

Dopo che è scaduto il tempo impostato nel timer di stazionamento ([Vedere parametro 009](temporizzazioni.md/#009))

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 31|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Ritorno al piano 0
1|Ritorno al piano 1
2|Ritorno al piano 2
3|Ritorno al piano 3
4|Ritorno al piano 4
5|Ritorno al piano 5
6|Ritorno al piano 6
7|Ritorno al piano 7
8|Ritorno al piano 8
9|Ritorno al piano 9
10|Ritorno al piano 10
11|Ritorno al piano 11
12|Ritorno al piano 12
13|Ritorno al piano 13
14|Ritorno al piano 14
15|Ritorno al piano 15
16|Ritorno al piano 16
17|Ritorno al piano 17
18|Ritorno al piano 18
19|Ritorno al piano 19
20|Ritorno al piano 20
21|Ritorno al piano 21
22|Ritorno al piano 22
23|Ritorno al piano 23
24|Ritorno al piano 24
25|Ritorno al piano 25
26|Ritorno al piano 26
27|Ritorno al piano 27
28|Ritorno al piano 28
29|Ritorno al piano 29
30|Ritorno al piano 30
31|Ritorno al piano 31

Nel conteggio del numero del piano lo zero viene cosiderato il piano estremo basso.

## Parametro 048 {#048}

Tipo di comunicazione.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 12???????|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|NO COMUNICAZIONE ESTERNA NORMALE(UNIVERSALE) ??????????
1|NO COMUNICAZIONE ESTERNA SIMPLEX ??????????
2|NO COMUNICAZIONE ESTERNA DUPLEX ??????????
3|NO COMUNICAZIONE ESTERNA TRIPLEX ??????????
4|NO COMUNICAZIONE ESTERNA QUADRUPLEX ??????????
5|NO COMUNICAZIONE ESTERNA SLAVE 2 ??????????
6|NO COMUNICAZIONE ESTERNA SLAVE 3 ??????????
7|NO COMUNICAZIONE ESTERNA SLAVE 4 ??????????
8|SI COMUNICAZIONE ESTERNA NORMALE(UNIVERSALE) ???????????
9|SI COMUNICAZIONE ESTERNA SIMPLEX ???????????
10|SI COMUNICAZIONE ESTERNA DUPLEX ???????????
12|SI COMUNICAZIONE ESTERNA TRIPLEX ???????????
13|SI COMUNICAZIONE ESTERNA QUADRUPLEX ???????????

## Parametro 049 {#049}

Non usato.

## Parametro 050 {#050}

Gestione apertura porte e stazionamento a porte chiuse al piano 0.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 051 {#051}

Gestione apertura porte e stazionamento a porte chiuse al piano 1.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 052 {#052}

Gestione apertura porte e stazionamento a porte chiuse al piano 2.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 053 {#053}

Gestione apertura porte e stazionamento a porte chiuse al piano 3.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 054 {#054}

Gestione apertura porte e stazionamento a porte chiuse al piano 4.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 055 {#055}

Gestione apertura porte e stazionamento a porte chiuse al piano 5.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 056 {#056}

Gestione apertura porte e stazionamento a porte chiuse al piano 6.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 057 {#057}

Gestione apertura porte e stazionamento a porte chiuse al piano 7.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 058 {#058}

Gestione apertura porte e stazionamento a porte chiuse al piano 8.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 059 {#059}

Gestione apertura porte e stazionamento a porte chiuse al piano 9.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 060 {#060}

Gestione apertura porte e stazionamento a porte chiuse al piano 10.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 061 {#061}

Gestione apertura porte e stazionamento a porte chiuse al piano 11.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 062 {#062}

Gestione apertura porte e stazionamento a porte chiuse al piano 12.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 063 {#063}

Gestione apertura porte e stazionamento a porte chiuse al piano 13.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 064 {#064}

Gestione apertura porte e stazionamento a porte chiuse al piano 14.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 065 {#065}

Gestione apertura porte e stazionamento a porte chiuse al piano 15.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 066 {#066}

Gestione apertura porte e stazionamento a porte chiuse al piano 16.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 067 {#067}

Gestione apertura porte e stazionamento a porte chiuse al piano 17.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 068 {#068}

Gestione apertura porte e stazionamento a porte chiuse al piano 18.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 069 {#069}

Gestione apertura porte e stazionamento a porte chiuse al piano 19.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 070 {#070}

Gestione apertura porte e stazionamento a porte chiuse al piano 20.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 071 {#071}

Gestione apertura porte e stazionamento a porte chiuse al piano 21.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 072 {#072}

Gestione apertura porte e stazionamento a porte chiuse al piano 22.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 073 {#073}

Gestione apertura porte e stazionamento a porte chiuse al piano 23.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 074 {#074}

Gestione apertura porte e stazionamento a porte chiuse al piano 24.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 075 {#075}

Gestione apertura porte e stazionamento a porte chiuse al piano 25.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 076 {#076}

Gestione apertura porte e stazionamento a porte chiuse al piano 26.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 077 {#077}

Gestione apertura porte e stazionamento a porte chiuse al piano 27.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 078 {#078}

Gestione apertura porte e stazionamento a porte chiuse al piano 28.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 079 {#079}

Gestione apertura porte e stazionamento a porte chiuse al piano 29.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 080 {#080}

Gestione apertura porte e stazionamento a porte chiuse al piano 30.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 081 {#081}

Gestione apertura porte e stazionamento a porte chiuse al piano 31.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso ??????
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato.
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato.

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

## Parametro 082 {#082}

Non usato.

## Parametro 083 {#083}

Non usato.

## Parametro 084 {#084}

Non usato.

## Parametro 085 {#085}

Non usato.

## Parametro 086 {#086}

Non usato.

## Parametro 087 {#087}

Non usato.

## Parametro 088 {#088}

Non usato.

## Parametro 089 {#089}

Non usato.

## Parametro 090 {#090}

Non usato.

## Parametro 091 {#091}

Non usato.

## Parametro 092 {#092}

Non usato.

## Parametro 093 {#093}

Non usato.

## Parametro 094 {#094}

Non usato.

## Parametro 095 {#095}

Non usato.

## Parametro 096 {#096}

Non usato.

## Parametro 097 {#097}

Non usato.

## Parametro 098 {#098}

Non usato.

## Parametro 099 {#099}

Non usato.

## Parametro 100 {#100}

Non usato.

## Parametro 101 {#101}

Non usato.

## Parametro 102 {#102}

Non usato.

## Parametro 103 {#103}

Non usato.

## Parametro 104 {#104}

Non usato.

## Parametro 105 {#105}

Non usato.

## Parametro 106 {#106}

Non usato.

## Parametro 107 {#107}

Non usato.

## Parametro 108 {#108}

Non usato.

## Parametro 109 {#109}

Non usato.

## Parametro 110 {#110}

Gestione tipo di corsa tra piano 0 e 1.

Per tipo di corsa si intende lo spazio che c'è tra i due piani.

Vengono gestite 8 tipologie:
*   piano corto tipo 1 ????
*   piano corto tipo 2 ????
*   piano corto tipo 3 ????
*   piano corto tipo 4 ????
*   piano corto tipo 5 ????
*   piano normale ????
*   piano lungo tipo 1 ????
*   piano lungo tipo 2 ????

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

#### Funzioni
Valore|Funzione
---|---
0|Piano normale
1|Piano corto tipo 1 senza timer.
2|CORTO TIPO 2 + TIMER 1 PAR 17 + COMPENS PAR 27.
3|CORTO TIPO 3 + TIMER 2 PAR 18 + COMPENS PAR 28.
4|CORTO TIPO 4 + TIMER 3 PAR 19 + COMPENS PAR 29.
5|CORTO TIPO 5 + TIMER 4 PAR 20 + COMPENS PAR 30.
6|LUNGO TIPO 1 + TIMER 5 PAR 21.
7|LUNGO TIPO 2 + TIMER 6 PAR 22.

PRINCIPIO DI CONFIGURAZIONE:

PIANO CORTO SUCCESSIVO A PIANO NORMALE: COMANDO
RALLENT SU PISTA RALL PIANO NORMALE - SE CORTO TIPO 1
INIZIA RALL-IGNORA FERMATA PIANO NORMALE E FERMA AL
CORTO SUCCESSIVO / SE CORTO TIPO 2-3-4-5 RITARDA RALL
SECONDO VALORE TIMER RELATIVO SE CONFIGURATO /
SE PIU' PIANI CORTI CONSECUTIVI RITARDO RALL = SOMMA
TIMER RELATIVI / LA PARTENZA DI UN PIANO CORTO TIPO 1
E' IN BASSA -TIPO2-3-4-5 AVVIA IN ALTA E CAMBIO IN BASSA
ALLA FINE TIMER RELATIVO - TIMER POTREBBE ESSERE BREVE
PERCHE' IMPOSTATO A VELOC DI REGIME - USARE PARAM DI
COMPENSAZIONE PER AUMENTARE RITARDO TIMER DI UNA
QUOTA FISSA PER LA PARTENZA
SE TRE PIANI CORTI CONSECUTIVI RALL AL 1°PIANO DEI TRE
CON SOMMA DI 2 TIMER RELATIVI SE INSERITI
PIANO LUNGO: IMPIANTI VELOCI RALL REGOLATO DA VELOC
DI REGIME - SE PARTENZA PIANO SUCCESSIVO IL RALL VIENE
ESEGUITO SUBITO - PER EVITARE INSERIRE TIMER RELATIVO
PER RITARDARE RALL ED AVERE UN GIUSTO SPAZIO DI RALL
/SE IMPOSTATO 1VEL TUTTI CORTI AZZERATI (NON GESTITI)
/ SE PRENOTAZIONE IMPOSTARE SOLO 0-6-7 (NO CORTI).

## Parametro 111 {#111}

Gestione tipo di corsa tra piano 1 e 2.

## Parametro 112 {#112}

Gestione tipo di corsa tra piano 2 e 3.

## Parametro 113 {#113}

Gestione tipo di corsa tra piano 3 e 4.

## Parametro 114 {#114}

Gestione tipo di corsa tra piano 4 e 5.

## Parametro 115 {#115}

Gestione tipo di corsa tra piano 5 e 6.

## Parametro 116 {#116}

Gestione tipo di corsa tra piano 6 e 7.

## Parametro 117 {#117}

Gestione tipo di corsa tra piano 7 e 8.

## Parametro 118 {#118}

Gestione tipo di corsa tra piano 8 e 9.

## Parametro 119 {#119}

Gestione tipo di corsa tra piano 9 e 10.

## Parametro 120 {#120}

Gestione tipo di corsa tra piano 10 e 11.

## Parametro 121 {#121}

Gestione tipo di corsa tra piano 11 e 12.

## Parametro 122 {#122}

Gestione tipo di corsa tra piano 12 e 13.

## Parametro 123 {#123}

Gestione tipo di corsa tra piano 13 e 14.

## Parametro 124 {#124}

Gestione tipo di corsa tra piano 14 e 15.

## Parametro 125 {#125}

Gestione tipo di corsa tra piano 15 e 16.

## Parametro 126 {#126}

Gestione tipo di corsa tra piano 16 e 17.

## Parametro 127 {#127}

Gestione tipo di corsa tra piano 17 e 18.

## Parametro 128 {#128}

Gestione tipo di corsa tra piano 18 e 19.

## Parametro 129 {#129}

Gestione tipo di corsa tra piano 19 e 20.

## Parametro 130 {#130}

Gestione tipo di corsa tra piano 20 e 21.

## Parametro 131 {#131}

Gestione tipo di corsa tra piano 21 e 22.

## Parametro 132 {#132}

Gestione tipo di corsa tra piano 22 e 23.

## Parametro 133 {#133}

Gestione tipo di corsa tra piano 23 e 24.

## Parametro 134 {#134}

Gestione tipo di corsa tra piano 24 e 25.

## Parametro 135 {#135}

Gestione tipo di corsa tra piano 25 e 26.

## Parametro 136 {#136}

Gestione tipo di corsa tra piano 26 e 27.

## Parametro 137 {#137}

Gestione tipo di corsa tra piano 27 e 28.

## Parametro 138 {#138}

Gestione tipo di corsa tra piano 28 e 29.

## Parametro 139 {#139}

Gestione tipo di corsa tra piano 29 e 30.

## Parametro 140 {#140}

Gestione tipo di corsa tra piano 30 e 31.

## Parametro 141 {#141}

Password 1.

Questa password blocca l'accesso ai parametri dal numero 24 al numero 154 ed è composta solo da numeri.

## Parametro 142 {#142}

Password 2.

Questa password blocca l'accesso al parametro [144](#144) ed è composta solo da numeri.

## Parametro 143 {#143}

Password 3.

Questa password blocca l'accesso alla sezione `MANOVRA` del menù ed è composta solo da numeri.

## Parametro 144 {#144}

Numero corse massimo dell'impianto.

Al raggiungimento di questo limite l'impianto viene bloccato.??????????????????????????????????

## Parametro 145 {#145}

Non usato.

## Parametro 146 {#146}

Non usato.

## Parametro 147 {#147}

Non usato.

## Parametro 148 {#148}

Non usato.

## Parametro 149 {#149}

Non usato.

## Parametro 150 {#150}

Non usato.


## Parametro 151 {#151}

Numero dell'impianto (matricola) ??????.

Non è possibile modificarlo.

## Parametro 152 {#152}

Numero seriale quadro.

Non è possibile modificarlo.

## Parametro 153 {#153}

Numero corse effettuate.

Non è possibile modificarlo.

## Parametro 154 {#154}

Versione firmware.

Non è possibile modificarlo.

## Parametro 155 {#155}

Codici di sicurezza per sblocco emergenza ?????????????????????????
