# Gestione temporizzazioni

## Parametro 000 {#000}

Tempo corsa.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 001 {#001}

Ritardo comando apertura porte.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 002 {#002}

Durata comando apertura porte.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 003 {#003}

Ritardo comando chiusura porte.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 004 {#004}

Durata comando chiusura porte.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 005 {#005}

Ritardo attrazione pattino retrattile.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 006 {#006}

Ritardo caduta pattino retrattile.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 007 {#007}

Tempo occupato / Partenza (per impianti con manovra a prenotazione).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 008 {#008}

Tempo avvio stazionamento a porte chiuse (il comando di chiusura porte viene dato dopo il tempo impostato).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 009 {#009}

Tempo avvio ritorno al piano di stazionamento (dopo il tempo impostato la cabina va al piano impostato per lo stazionamento).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 010 {#010}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 011 {#011}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 012 {#012}

--------Breve descrizione parametro-----------

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.1 secondi

## Parametro 013 {#013}

Ritardo attrazione relè PV alla partenza in impianti oleodinamici (permette partenza in bassa).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 014 {#014}

Tempo bassa velocità.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 015 {#015}

Ritardo fermata in salita (il ritardo viene applicato alla chiusura degli induttori IS-ID solo in salita).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 016 {#016}

Ritardo fermata in discesa (il ritardo viene applicato alla chiusura degli induttori IS-ID solo in discesa).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 017 {#017}

Ritardo rallentamento alla fermata relativo al piano corto 2.

Quando viene impostato un piano come corto, il rallentamento prima della fermata viene effettuato con
la pista del piano precedente.
L'avvio del rallentamento viene regolato in base al valore impostato in questo parametro.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 018 {#018}

Ritardo rallentamento alla fermata relativo al piano corto 3.

Quando viene impostato un piano come corto, il rallentamento prima della fermata viene effettuato con
la pista del piano precedente.
L'avvio del rallentamento viene regolato in base al valore impostato in questo parametro.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 019 {#019}

Ritardo rallentamento alla fermata relativo al piano corto 4.

Quando viene impostato un piano come corto, il rallentamento prima della fermata viene effettuato con
la pista del piano precedente.
L'avvio del rallentamento viene regolato in base al valore impostato in questo parametro.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 20 {#020}

Ritardo rallentamento alla fermata relativo al piano corto 5.

Quando viene impostato un piano come corto, il rallentamento prima della fermata viene effettuato con
la pista del piano precedente.
L'avvio del rallentamento viene regolato in base al valore impostato in questo parametro.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 021 {#021}

Ritardo rallentamento relativo al piano normale 6.

In impianti veloci dove le piste di rallentamento sono molto distanti da quelle di fermata,
il tempo impostato in questo parametro ritarda il comando di rallentamento (un volta incontrata la pista relativa) quando viene effettuata  una
corsa tra due piani adiacenti.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 022 {#022}

Ritardo relativo al piano normale 7.

In impianti veloci dove le piste di rallentamento sono molto distanti da quelle di fermata,
il tempo impostato in questo parametro ritarda il comando di rallentamento (un volta incontrata la pista relativa) quando viene effettuata  una
corsa tra due piani adiacenti.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 6000|secondo|0.01 secondi

## Parametro 027 {#027}

Ritardo rallentamento alla partenza relativo al piano corto 2.

Quando viene impostato un piano come corto, quando si fa una partenza da questo piano a quello vicino (corsa ridotta),
il comando di rallentamento non viene gestito con le piste, ma viene ritardato con il tempo impostato in questo parametro.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi

## Parametro 028 {#028}

Ritardo rallentamento alla partenza relativo al piano corto 3.

Quando viene impostato un piano come corto, quando si fa una partenza da questo piano a quello vicino (corsa ridotta),
il comando di rallentamento non viene gestito con le piste, ma viene ritardato con il tempo impostato in questo parametro

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi

## Parametro 029 {#029}

Ritardo rallentamento alla partenza relativo al piano corto 4.

Quando viene impostato un piano come corto, quando si fa una partenza da questo piano a quello vicino (corsa ridotta),
il comando di rallentamento non viene gestito con le piste, ma viene ritardato con il tempo impostato in questo parametro

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi

## Parametro 030 {#030}

Ritardo rallentamento alla partenza relativo al piano corto 5.

Quando viene impostato un piano come corto, quando si fa una partenza da questo piano a quello vicino (corsa ridotta),
il comando di rallentamento non viene gestito con le piste, ma viene ritardato con il tempo impostato in questo parametro

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi

## Parametro 039 {#039}

Ritardo scambio teleruttore stella con triangolo (in impianti oleodinamici con avviamento stella-triangolo).

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi

## Parametro 040 {#040}

Durata impulso gong e pausa tra doppio impulso.

Valori|Unità di misura|Risoluzione
---|---|---
da 0 a 255|millisecondi|100 millisecondi
