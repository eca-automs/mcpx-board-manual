# Gestione manovra

## Parametro 024

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 7|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|tutte funzioni escluse
1|frecce lampeggianti
2|occupato lampeggiante
4|arrivo/prenotazioni lampeggianti

Sommando i valori si ottengono varie combinazioni di configurazione.

## Parametro 025

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
4|uscita RTFC impostata per segnalazione fuori servizio

Sommando i valori si ottengono varie combinazioni di configurazione.

## Parametro 026

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

## Parametro 031

Impostazione manovre speciali

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


## Parametro 032

Gestione emendamento A3

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

## Parametro 033

Tipo display (gestito da periferica)

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

## Parametro 034

Configurazione display segmenti

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

## Parametro 035

Configurazione costole mobili (CM1-CM2), fondo mobile (FM), sovraccarico (SVR)

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

## Parametro 036

Configurazione seriale cabina

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 2|nessuna|nessuna

#### Funzioni
Valore|Funzione
---|---
0|Tutto escluso
1|Seriale cabina senza induttori
2|Seriale cabina e induttori

## Parametro 041

Configurazione comando gong in cabina

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

I valori __9__-__10__-__11__ impostano __come__ __1__-__2__-__3__ in più abilitano segnalazione direzione prossima partenza (FSX-FDX). I valori __13__-__14__-__15__ impostano come __5__-__6__-__7__ in più abilitano segnalazione prossima partenza (FSX-FDX). Se impostato impianto a prenotazione in batteria alla chiamata al piano viene attivato gong e accese entrambe le frecce per individuare quale ascensore aprirà le porte.
