# Gestione manovra


## Parametro 024 {#024}

Segnalazioni occupato, arrivo/prenotato, freccie.

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

---

## Parametro 025 {#025}

Velocità manutenzione in impianti oleodinamici e a fune senza VVVF,
feedback VVVF in impianti a fune con VVVF, impostazione uscita FTC (pin 27 [vedi layout](../../layouts/mcpx.md)).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Verifica risposta del VVVF in bassa velocità
2|Effettua manutenzione in bassa velocità (solo impianti a fune 2 velocità e oleodinamici)
4|Uscita FTC (pin 27 [vedi layout](../../layouts/mcpx.md)) impostata per segnalazione fuori servizio

Sommando i valori si ottengono varie combinazioni di configurazione.

L'uscita FTC di default segnala che la fotocellula è rimasta interrotta per un tempo superiore a quello
impostato nel [parametro 10](./temporizzazioni.md#010).

---

## Parametro 026 {#026}

Finecorsa apertura porte, termico motore, termoresistenza motore, relè controllo fasi.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 15|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutte funzioni inserite
1|Fine-corsa apertura porte escluso
2|Termico impianto fine/oleo o allarme VVVF escluso
4|Termoresistenza motore (PTC) esclusi (pin 43 [vedi layout](../../layouts/mcpx.md))
8|Relè controllo fasi escluso

Sommando i valori si ottengono varie combinazioni di configurazione

---

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


---

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
7|Controllo batterie dispositivo CEV A3
8|Come 1 ed in più controllo batterie dispositivo CEV A3
9|Come 2 ed in più controllo batterie dispositivo CEV A3
10|Come 3 ed in più controllo batterie dispositivo CEV A3
11|Come 4 ed in più controllo batterie dispositivo CEV A3
12|Come 5 ed in più controllo batterie dispositivo CEV A3
13|Come 6 ed in più controllo batterie dispositivo CEV A3

Questo parametro viene __azzerato__ quando si entra nel parametro __043__.

---

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

---

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

---

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

---

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

---

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
I valori da __8 a 12__ non sono usati (impostano valore a zero).

---

## Parametro 042 {#042}

Configurazione chiamata al piano in impianto a prenotazione, configurazione
impianto duplex zoppo (con una fermata in più o in meno tra master e slave)
e reset chiamata della direzione opposta

Per chiamata al piano si intende:
*   l'utente preme il pulsante di chiamata / prenotazione di piano
*   il quadro apre le porte di cabina
*   l'utente entra in cabina
*   il quadro comincia a chiudere le porte per ripartire
*   se a questo punto viene premuto il pulsante della chiamata in cabina del piano corrente o il
    pulsante esterno il quadro riapre le porte, cosa che non farebbe senza impostare la chiamata al piano

Per reset chiamata direzione opposta si intende:
*   l'utente effettua una prenotazione in entrambe le direzioni
*   il primo ascensore che arriva al piano resetta la chiamata nella sua direzione (ad esempio salita)
    e in quella della direzione opposta (ad esempio dicesa)

Valori|Unità di misura|Risoluzione
---|---|---
0-7-8-9 se configurato come master o slave 3-4 in configurazione triplex, quadruplex o simplex. Da 0 a 9 se impostato come master o slave 2 in configurazione duplex | nessuna | nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Master con un piano in più in basso
2|Master con un piano in più in alto
3|Come 1 e chiamata al piano attivata
4|Come 2 e chiamata al piano attivata
5|Come 3 e reset chiamata direzione opposta attivata
6|Come 3 e reset chiamata direzione opposta attivata
7|Chiamata al piano attivata
8|Reset chiamata direzione opposta attivata
9|Chiamata al piano e reset chiamata direzione opposta attivati

La configurazione dei parametri dell'impianto __zoppo__ vengono __abilitati__ solo se il tipo di impianto è __impostato__ come __duplex__
(vedi [parametro 48](#048)) mentre quelli della __chiamata al piano__ solo se la manovra è a __prenotazione__
(vedi [parametro 48](#048)).

---

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

---

## Parametro 044 {#044}

Opzioni aggiuntive per impianti a prenotazione in batteria.

Da implementare.


---

## Parametro 045 {#045}

Gestione manovra uomo presente. Per usare queta modalità si deve collegare
al bus la [periferica 46](../../../periferiche/indirizzi.md#indirizzo-46).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 3|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0  | non abilitato
1  | cabina uomo presente, piani ad impulso
2  | cabina e piani uomo presente
3  | cabina e piani ad impulso

Il parametro può essere impostato se i parametri da [31](#031) a [36](#036) sono uaguali a `0` __e__
il parametro [48](#048) è impostato a `0` oppure `8`.
Se vengono modificati i parametri 31-36 o 48, il parametro 45 viene azzerato.

---

## Parametro 046 {#046}

Numero fermate.

Valori|Unità di misura|Risoluzione
---|---|---
da 1 a 31|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
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
numero fermate da impostare = numero fermate - 1
```

---

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

Nel conteggio del numero del piano lo zero viene considerato il piano estremo basso.

---

## Parametro 048 {#048}

Tipo di manovra e abilitazione comunicazione con scheda esterna per telecontrollo o
altra applicazioni (vedi [comunicazioni seriali](../../../bus_seriali/README.md/#bus-esterno)).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 12|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Manovra universale senza comunicazione esterna
1|Manovra simplex senza comunicazione esterna
2|Manovra duplex (va impostato solo nel quadro master) senza comunicazione esterna
3|Manovra triplex (va impostato solo nel quadro master) senza comunicazione esterna
4|Manovra quadruplex (va impostato solo nel quadro master) senza comunicazione esterna
5|Quadro impostato come slave 2 (in impianto duplex, triplex o qudruplex) senza comunicazione esterna
6|Quadro impostato come slave 3 (in impianto triplex o qudruplex) senza comunicazione esterna
7|Quadro impostato come slave 4 (in impianto qudruplex) senza comunicazione esterna
8|Manovra universale con comunicazione esterna
9|Manovra simplex con comunicazione esterna
10|Manovra duplex (va impostato solo nel quadro master) con comunicazione esterna
11|Manovra triplex (va impostato solo nel quadro master) con comunicazione esterna
12|Manovra quadruplex (va impostato solo nel quadro master) con comunicazione esterna

###### Collegamento impianti in batteria

* un quadro va impostato come master (è il quadro che gestisce tutti gli altri) impostando il parametro con un valore da 2 a 4 oppure da 10 a 14
* gli altri quadri vanno impostati come slave (vengono gestiti dal master) impostando il parametro con un valore da 5 a 7

Gli slave vanno impostati con dei valori precisi a seconda che l'impianto sia duplex, triplex o quadruplex.

Impianto|Valori slave
---|---
duplex|solo `5` (slave 2), in questa configurazione il master cerca slave con indirizzo `2`
triplex|`5-6` (slave 2, slave 3), in questa configurazione il master cerca slave con indirizzo `2` e `3`
quadruplex|`5-6-7` (slave 2, slave 3, slave 4), in questa configurazione il master cerca slave con indirizzo `2`, `3` e `4`


---

## Parametro 049 {#049}

Non usato.

## Parametri da 050 a 081 {#050}

Gestione apertura porte e stazionamento a porte chiuse al piano 0, 1, 2, 3 ... 31.

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 8|nessuna|nessuna


#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è disattivato.
2|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è disattivato.
3|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è disattivato.
4|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1. Lo stazionamento a porte chiuse è attivato.
5|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 2. Lo stazionamento a porte chiuse è attivato.
6|Gestisce 1 ingresso, oppure 2 ingressi alternati con selezione del lato 1 e del lato 2. Lo stazionamento a porte chiuse è attivato.
7|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è disattivato
8|Gestisce 2 ingressi selettivi. Lo stazionamento a porte chiuse è attivato

Nello stazionamento a porte chiuse vengono chiuse le porte di entrambi i lati.

Per attivare lo stazionamento a porte chiuse bisogna inoltre __impostare un tempo diverso da zero nel [parametro 008](./temporizzazioni.md#008)__. Cambiandolo, __in automatico tutti i parametri da 050 ad 081 vengono impostati__ a con un valore da 4 a 6, oppure 8 a seconda del valore impostato precendentemente nel parametro. Riportando a zero il parametro 8 tutti i parametri da 050 ad 081 vengono impostati ad un valore tra 1 e 3, oppure 7.

---

## Parametro 082 {#082}

Non usato.

---

## Parametro 083 {#083}

Non usato.

---

## Parametro 084 {#084}

Non usato.

---

## Parametro 085 {#085}

Non usato.

---

## Parametro 086 {#086}

Non usato.

---

## Parametro 087 {#087}

Non usato.

---

## Parametro 088 {#088}

Non usato.

---

## Parametro 089 {#089}

Non usato.

---

## Parametro 090 {#090}

Non usato.

---

## Parametro 091 {#091}

Non usato.

---

## Parametro 092 {#092}

Non usato.

---

## Parametro 093 {#093}

Non usato.

---

## Parametro 094 {#094}

Non usato.

---

## Parametro 095 {#095}

Non usato.

---

## Parametro 096 {#096}

Non usato.

---

## Parametro 097 {#097}

Non usato.

---

## Parametro 098 {#098}

Non usato.

---

## Parametro 099 {#099}

Non usato.

---

## Parametro 100 {#100}

Non usato.

---

## Parametro 101 {#101}

Non usato.

---

## Parametro 102 {#102}

Non usato.

---

## Parametro 103 {#103}

Non usato.

---

## Parametro 104 {#104}

Non usato.

---

## Parametro 105 {#105}

Non usato.

---

## Parametro 106 {#106}

Non usato.

---

## Parametro 107 {#107}

Non usato.

---

## Parametro 108 {#108}

Non usato.

---

## Parametro 109 {#109}

Non usato.

## Parametri da 110 a 140 {#110}

Gestione tipo di corsa tra piano 0 e 1, 1 e 2, 2 e 3 ... 30 e 31.

Per tipo di corsa si intende lo spazio che c'è tra i due piani.

###### Corrispondenza piani - parametro
Numero parametro|piani
---|---
110|corsa tra 0 e 1
111|corsa tra 1 e 2
112|corsa tra 2 e 3
113|corsa tra 3 e 4
114|corsa tra 4 e 5
115|corsa tra 5 e 6
116|corsa tra 6 e 7
117|corsa tra 7 e 8
118|corsa tra 8 e 9
119|corsa tra 9 e 10
120|corsa tra 10 e 11
121|corsa tra 11 e 12
122|corsa tra 12 e 13
123|corsa tra 13 e 14
124|corsa tra 14 e 15
125|corsa tra 15 e 16
126|corsa tra 16 e 17
127|corsa tra 17 e 18
128|corsa tra 18 e 19
129|corsa tra 19 e 20
130|corsa tra 20 e 21
131|corsa tra 21 e 22
132|corsa tra 22 e 23
133|corsa tra 23 e 24
134|corsa tra 24 e 25
135|corsa tra 25 e 26
136|corsa tra 26 e 27
137|corsa tra 27 e 28
138|corsa tra 28 e 29
139|corsa tra 29 e 30
140|corsa tra 30 e 31

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

Vedere i parametri [046 e 047](#046) per vedere come vengono contate le fermate ed i piani.

#### Funzioni
Valore|Funzione
---|---
0|piano normale
1|piano corto tipo 1
2|piano corto tipo 2
3|piano corto tipo 3
4|piano corto tipo 4
5|piano corto tipo 5
6|piano lungo tipo 1
7|piano lungo tipo 2


#### Gestione tipi di piani diversi {#gest-piani}

Vengono gestite 8 tipologie che vengono identificate con numeri progressivi.

Si ha la possibiltà di gestire 5 tipi di piano corto diversi e 2 tipi di piano lunghi diversi (per impianti veloci).

Numero|Tipo piano
---|---
0|normale
1|corto 1
2|corto 2
3|corto 3
4|corto 4
5|corto 5
6|lungo 1
7|lungo 2

###### Piano normale

Piano che non necessita di gestione particolare.

###### Piano corto 1

Piano con corsa breve.

###### Piano corto 2

Piano con corsa breve. Il rallentamento alla fermata viene regolato con il parametro [017](temporizzazioni.md/#017),
mentre quello alla partenza dal parametro [027](temporizzazioni.md/#027).

###### Piano corto 3

Piano con corsa breve. Il rallentamento alla fermata viene regolato con il parametro [018](temporizzazioni.md/#018),
mentre quello alla partenza dal parametro [028](temporizzazioni.md/#028).

###### Piano corto 4

Piano con corsa breve. Il rallentamento alla fermata viene regolato con il parametro [019](temporizzazioni.md/#019),
mentre quello alla partenza dal parametro [029](temporizzazioni.md/#029).

###### Piano corto 5

Piano con corsa breve. Il rallentamento alla fermata viene regolato con il parametro [020](temporizzazioni.md/#020),
mentre quello alla partenza dal parametro [030](temporizzazioni.md/#030).

###### Piano lungo 1

Piano con corsa lunga (impianti veloci). Il ritardo di rallentamento viene regolato dal parametro [021](temporizzazioni.md/#021).

###### Piano lungo 2

Piano con corsa lunga (impianti veloci). Il ritardo di rallentamento viene regolato dal parametro [021](temporizzazioni.md/#021).


---

## Parametro 141 {#141}

Password 1.

Questa password blocca l'accesso ai parametri dal numero 0 al numero 154 ed è composta solo da numeri.

---

## Parametro 142 {#142}

Password 2.

Questa password blocca l'accesso al parametro [144](#144) ed è composta solo da numeri.

---

## Parametro 143 {#143}

Password 3.

Questa password blocca l'accesso alla sezione `MANOVRA` del menù ed è composta solo da numeri.

---

## Parametro 144 {#144}

Numero corse massimo dell'impianto.

Al raggiungimento di questo limite l'impianto viene bloccato.

---

## Parametro 145 {#145}

Non usato.

---

## Parametro 146 {#146}

Non usato.

---

## Parametro 147 {#147}

Non usato.

---

## Parametro 148 {#148}

Non usato.

---

## Parametro 149 {#149}

Non usato.

---

## Parametro 150 {#150}

Non usato.


---

## Parametro 151 {#151}

Numero dell'impianto (matricola).

Non è possibile modificarlo.

---

## Parametro 152 {#152}

Numero seriale quadro.

Non è possibile modificarlo.

---

## Parametro 153 {#153}

Numero corse effettuate.

Non è possibile modificarlo.

---

## Parametro 154 {#154}

Versione firmware.

Non è possibile modificarlo.

Il valore rappresesenta nome e versione del firmware, ad esempio:

```
P000029
```

indica il firmware con nome `P` e versione 0.0.29.

Il primo carattere indica il nome, le 3 coppie di caratteri che seguono indicano ognuna un campo
della versione in [semver](http://semver.org/lang/it/).
