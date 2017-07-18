# Elenco errori

## Codice 001 {#001}
Contatto relè di fase aperto.

#### Descrizione
Il relè di fase è presente sui quadri in impianti a fune senza VVVF e oleodinamici. Controlla le fasi della rete di alimentazione. Nel caso di sfasamento, apre un contatto di allarme.

#### Cause
Le fasi della rete in ingresso sono state cambiate o non sono in fase.

#### Soluzioni
Girare le fasi per metterle in fase.


## Codice 002 {#002}
Contatto relè termico aperto (impianto a fune 1-2 velocità).

#### Descrizione
Il relè termico è presente in impianti a fune a 1 o 2 velocità e apre un contatto in caso di eccessivo
assorbimento sulla rete della forza motrice.

#### Cause
1. il motore sta lavorando eccessivamente
2. basso isolamento tra gli avvolgimenti

#### Soluzioni
1. controllare che il carico del motore non sia eccessivo
2. controllare isolamento avvolgimenti

Controllare assorbimento del motore sotto carico.


## Codice 003 {#003}
Contatto termico olio aperto (impianto oleodinamico).

#### Descrizione
Le centraline oleodinamiche hanno un relè che apre un contatto in caso di surriscaldamento dell'olio.

#### Cause
La centralina sta lavorando eccessivamente

#### Soluzioni
Controllare che il carico della centralina non sia eccessivo


## Codice 004 {#004}
Intervento allarme VVVF (impianto a fune).

#### Descrizione
Il VVVF in dotazione sugli impianti a fune ha un uscita di allarme.

#### Cause
Da ricercare nel codice di errore del VVVF.

#### Soluzioni
Da ricercare nel codice di errore del VVVF.


## Codice 005 {#005}
Collegamento termistori motore aperto o interrotto.

#### Descrizione
I motori hanno una serie di contatti che si aprono in caso di sovratemperatura su uno o più avvolgimenti.
L'errore segnala che il collegamento è assente.

#### Cause
Cavo interrotto o non collegato.

#### Soluzioni
Controllare collegamento tra termistori e quadro di manovra.

## Codice 006 {#006}
Intervento termistori motore per sovratemperatura.

#### Descrizione
I motori hanno una serie di contatti che si aprono in caso di sovratemperatura su uno o più avvolgimenti.
L'errore segnala che la serie si è aperta per sovratemperatura.

#### Cause
1. il motore sta lavorando eccessivamente
2. basso isolamento tra gli avvolgimenti

#### Soluzioni
1. controllare che il carico del motore non sia eccessivo
2. controllare isolamento avvolgimenti

Controllare assorbimento sotto carico.


## Codice 007 {#007}
Tensione 48VDC di manovra assente.

#### Descrizione
La tensione di manovra è la tensione di lavoro per il circuito di manovra, ovvero il circuito che monitorizza la serie
di sicurezza e comanda glia attuatori del quadro.

#### Cause
Tensione assente all'inizio della catena delle sicurezze.

#### Soluzioni
* controllare l'intervento della valvola di manvovra
* controllare trasformatore di alimentazione del quadro
* controllare circuito alimentazione manvora

## Codice 008 {#008}
Contatto extracorsa aperto.

Relativo solo ad impianto oleodinameci.

Questo errore provoca il __blocco dell'impianto__ (vedi [blocco per errore di extracorsa](../../blocco_errore/README.md#extracorsa)).

#### Descrizione
L'impianto è andato oltre il limite impostato dell'extracorsa.

#### Cause
La cabina non si è fermata. Potrebbe non essere stato ricevuto il comando di fermata.
Possibili cause sono:
1.   interferenze magnetiche
2.   accoppiamento piste magnetiche e induttori non corretto
3.   induttori difettosi
4.   cavo di cabina rovinato
5.   piste di fermata registrate non correttamente

#### Soluzioni
1.   posizionare le piste di fermata con lati opposti (ad esempio una con lato giall ed una con lato nero)
2.   controllare che la distanza tra induttori e piste non sia maggiore di 1cm
3.   controllare che gli induttori non siano difettosi
4.   controllare che il cavo di cabina non sia interrotto
5.   assicurarsi che lo spazio di sovrapposizione tra le piste di fermata sia di almeno 2cm, regolare la fermata con i parametri [015](../parametri/temporizzazioni.md#015) e [016](../parametri/temporizzazioni.md#016).

## Codice 009 {#009}
Contatti 2-3-4 catena sicurezze aperti.
#### Descrizione
La catena dei contatti della serie di sicurezza tra 2 e 4 (morsetti del quadro) è aperta.

#### Cause
L'impianto non era in manutenzione e:
*    si è aperto il contatto di ALT
*    si è aperto il deviatore normale/manovra

#### Soluzioni
Controllare bottoniera di manovra in cabina.


## Codice 010 {#010}
Contatti 5-6-7 catena sicurezze aperti.

#### Descrizione
La catena dei contatti della serie di sicurezza tra 5 e 7 (morsetti del quadro) è aperta.

#### Cause
1. intervenuto alt cabina
2. intervenuto cev
3. intervenuto paracadute

#### Soluzioni
1. controllare contatto alt cabina
2. controllare contatto cev
3. controllare contatto paracadute


## Codice 011 {#011}
Contatto preliminari aperto durante il viaggio.

#### Descrizione
Il contatto dei preliminari (morsetti 7-8 sulla serie delle sicurezze) si è aperto in viaggio.

#### Cause
1. i contatti delle serrature sono difettosi
2. il cavo di vano è difettoso

#### Soluzioni
1. controllare i contatti delle serrature
2. controllare il cavo di vano


## Codice 012 {#012}
Contatto porte cabina aperto durante il viaggio.

#### Descrizione
Il contatto delle porte di cabina (morsetti 8-9 del quadro sulla serie delle sicurezze) si è aperto in viaggio.

#### Cause
1. i contatti delle porte di cabina sono difettosi
2. il cavo di cabina è difettoso

#### Soluzioni
1. controllare i contatti di cabina
2. controllare il cavo di cabina


## Codice 013 {#013}
Relè PV attratto in bassa velocità (impianto oleodinamico).

#### Descrizione
Negli impianti oleodinamici, quando viene dato il comando di bassa velocità, il relè PV del quadro cade (il comando viene tolto) per chiudere la valvola di livellazione.

#### Cause
1. relè difettoso
2. contatto relè di feedback alla scheda difettoso (vedi schema del quadro)
3. ingresso feedback della scheda difettoso (pin 42, vedi [layout](../../layouts/mcpx.md))
4. uscita di comando scheda difettosa (pin 66, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. cambiare il relè
2. cambiare relè
3. 4 mandare scheda in assistenza


## Codice 014 {#014}
Teleruttore PV non attratto in bassa velocità (impianto fune a 2 velocità).

#### Descrizione
Negli impiantio a fune a 2 velocità senza VVVF lo scambio tra alta e bassa velocità avviene con due teleruttori:
* `P`, attratto solo in alta velocità
* `PV`, attratto solo in bassa velocità

#### Cause
1. teruttore difettoso
2. contatto del teleruttore di feedback alla scheda difettoso (vedi schema del quadro)
3. ingresso feedback della scheda difettoso (pin 42, vedi [layout](../../layouts/mcpx.md))
4. uscita di comando scheda difettosa (pin 66, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. cambiare il teleruttore
2. cambiare il contatto o teleruttore
3. 4 mandare scheda in assistenza


## Codice 015 {#015}
Teleruttore P attratto in bassa velocità (impianto fune a 2 velocità).

#### Descrizione
Negli impiantio a fune a 2 velocità senza VVVF lo scambio tra alta e bassa velocità avviene con due teleruttori:
* `P`, attratto solo in alta velocità
* `PV`, attratto solo in bassa velocità

#### Cause
1. teruttore difettoso
2. contatto del teleruttore di feedback alla scheda difettoso (vedi schema del quadro)
3. ingresso feedback della scheda difettoso (pin 41, vedi [layout](../../layouts/mcpx.md))
4. uscita di comando scheda difettosa (pin 65, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. cambiare il teleruttore
2. cambiare il contatto o teleruttore
3. 4 mandare scheda in assistenza


## Codice 016 {#016}
Pre-finecorsa aperto in discesa.

#### Descrizione
In impianti veloci per ragioni di sicurezza viene usato un contatto aggiuntivo oltre al finecorsa di discesa.

#### Cause
1. contatto difettoso
2. cavo di vano difettoso
3. ingresso scheda difettoso (pin 83, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. sostituire contatto
2. controllare cavo di vano
3. mandare scheda in assistenza


## Codice 017 {#017}
Contatto blocchi aperto in discesa.

#### Descrizione
Il contatto 9-10 (morsetti del quadro) delle serie di sicurezza si è aperto mentre la cabina viaggiava in discesa.

#### Cause
1. contatto blocchi difettoso
2. ingresso scheda difettoso (pin 6-7, vedi [layout](../../layouts/mcpx.md))
3. cavo di vano difettoso

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza
3. controllare cavo di vano


## Codice 018 {#018}
Teleruttore DIS non attratto in discesa.

#### Descrizione
Il teleruttore DIS viene attratto per dare il comando di discesa.

#### Cause
1. teleruttore difettoso
2. tensione di manovra bassa
3. uscita scheda difettosa (pin 67, vedi [layout](../../layouts/mcpx.md))
4. ingresso di feedback della scheda difettoso (pin 40, vedi [layout](../../layouts/mcpx.md))
5. contatto di feedback del teleruttore alla scheda difettoso (vedi schema del quadro)

#### Soluzioni
1. cambiare teleruttore
2. controllare tensione di manovra ad inizio e fine serie durante il funzionamento e identificare il circuito che provoca il calo di tensione
3. 4 mandare scheda in assistenza
5. cambiare contatto o teleruttore


## Codice 019 {#019}
Porte cabina automatiche aperte in discesa.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 020 {#020}
Teleruttore SAL attratto in dicesa.

#### Descrizione
Il teleruttore di comando di salita SAL era attratto durante il comando di discesa.

#### Cause
1. teleruttore difettoso
2. contatto di feedback del teleruttore alla scheda difettoso (vedi schema quadro)
3. ingresso di feedback della scheda difettoso (pin 39, vedi [layout](../../layouts/mcpx.md)))
4. uscita di comando della scheda difettosa (pin 68, vedi [layout](../../layouts/mcpx.md)))

#### Soluzioni
1. cambiare teleruttore
2. cabiare contatto o teleruttore
3. 4 mandare scheda in assistenza


## Codice 021 {#021}
Pre-finecorsa aperto in salita.

#### Descrizione
In impianti veloci per ragioni di sicurezza viene usato un contatto aggiuntivo oltre al finecorsa di salita.

#### Cause
1. contatto difettoso
2. cavo di vano difettoso
3. ingresso scheda difettoso (pin 80, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. sostituire contatto
2. controllare cavo di vano
3. mandare scheda in assistenza


## Codice 022 {#022}
#### Descrizione
Il contatto 9-10 (morsetti del quadro) delle serie di sicurezza si è aperto mentre la cabina viaggiava in salita.

#### Cause
1. contatto blocchi difettoso
2. ingresso scheda difettoso (pin 6-7, vedi [layout](../../layouts/mcpx.md))
3. cavo di vano difettoso

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza
3. controllare cavo di vano


## Codice 023 {#023}
Teleruttore SAL non attratto in salita.

#### Descrizione
Il teleruttore SAL viene attratto per dare il comando di discesa.

#### Cause
1. teleruttore difettoso
2. tensione di manovra bassa
3. uscita scheda difettosa (pin 68, vedi [layout](../../layouts/mcpx.md))
4. ingresso di feedback della scheda difettoso (pin 39, vedi [layout](../../layouts/mcpx.md))
5. contatto di feedback del teleruttore alla scheda difettoso

#### Soluzioni
1. cambiare teleruttore
2. controllare tensione di manovra ad inizio e fine serie durante il funzionamento e identificare il circuito che provoca il calo di tensione
3. 4 mandare scheda in assistenza
5. cabiare contatto o teleruttore


## Codice 024 {#024}
Porte cabina automatiche aperte in salita.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 025 {#025}
Teleruttore DIS attratto in salita.

#### Descrizione
Il teleruttore di comando di salita SAL era attratto durante il comando di discesa.

#### Cause
1. teleruttore difettoso
2. contatto di feedback del teleruttore alla scheda difettoso
3. ingresso di feedback della scheda difettoso (pin 49, vedi [layout](../../layouts/mcpx.md)))
4. uscita di comando della scheda difettosa (pin 67, vedi [layout](../../layouts/mcpx.md)))

#### Soluzioni
1. cambiare teleruttore
2. cabiare contatto o teleruttore
3. 4 mandare scheda in assistenza


## Codice 026 {#026}
Contatti pre-finecorsa aperti in alta velocità (impianto a fune con VVVF).

#### Descrizione
In impianti veloci per ragioni di sicurezza vengono usati 2 contatti aggiuntivi oltre al finecorsa di salita e di discesa.

#### Cause
1. contatto difettoso
2. cavo di vano difettoso
3. ingresso scheda difettoso (pin 80 e 83, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. sostituire contatto
2. controllare cavo di vano
3. mandare scheda in assistenza

## Codice 027 {#027}
Contatto blocchi aperto in alta velocità (impianto a fune con VVVF).

#### Descrizione
Il contatto 9-10 (morsetti del quadro) delle serie di sicurezza si è aperto mentre la cabina viaggiava in alta velocità. Questo errore viene segnalato solo in impianti a fune con VVVF.

#### Cause
1. contatto blocchi difettoso
2. ingresso scheda difettoso (pin 6-7, vedi [layout](../../layouts/mcpx.md))
3. cavo di vano difettoso

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza
3. controllare cavo di vano


## Codice 028 {#028}
Teleruttore P non attratto.

#### Descrizione
Il teleruttore P viene attratto per comandare il motore della centralina in impianti oleodinamici e
per comandare il motore sia in salita che in discesa in impianti a fune senza VVVF.

#### Cause
1. teleruttore difettoso
2. tensione di manovra bassa
3. uscita scheda difettosa (pin 65, vedi [layout](../../layouts/mcpx.md))
4. ingresso di feedback della scheda difettoso (pin 41, vedi [layout](../../layouts/mcpx.md))
5. contatto di feedback del teleruttore alla scheda difettoso

#### Soluzioni
1. cambiare teleruttore
2. controllare tensione di manovra ad inizio e fine serie durante il funzionamento e identificare il circuito che provoca il calo di tensione
3. 4 mandare scheda in assistenza
5. cambiare contatto o teleruttore


## Codice 029 {#029}
Porte cabina automatiche aperte in alta velocità (impianto a fune con VVVF).

#### Descrizione
Il contatto delle porte cabina (morsetti 8-9 del quadro) della catena delle sicurezze si è aperto mentre l'impianto era in alta velocità.
Questo codice viene segnalato solo in impianti a fune con VVVF.

#### Cause
1. contatto perte cabina difettoso
2. ingresso scheda difettoso (pin 5-6, vedi [layout](../../layouts/mcpx.md))
3. cavo di vano difettoso

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza
3. controllare cavo di vano


## Codice 030 {#030}
Mancata risposta del VVVF in bassa al cambio di velocità.
#### Descrizione
Il VVVF non ha attivato la propria uscita al cambio di velocità. L'uscita del VVVF può essere configurata per dare un segnale
al cambio di velocità. Questo segnale viene letto sul pin 44 della scheda (vedi [layout](../../layouts/mcpx.md)).
Questo ingresso può essere impostato con il parametro [025](../parametri/manovra.md#025).

#### Cause
#### Soluzioni

## Codice 031 {#031}
Contatti pre-finecorsa aperti in bassa velocità (impianto a fune con VVVF).

#### Descrizione
In impianti veloci per ragioni di sicurezza vengono usati 2 contatti aggiuntivi oltre al finecorsa di salita e di discesa.

#### Cause
1. contatto difettoso
2. cavo di vano difettoso
3. ingresso scheda difettoso (pin 80 e 83, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. sostituire contatto
2. controllare cavo di vano
3. mandare scheda in assistenza


## Codice 032 {#032}
Contatto blocchi aperto in bassa velocità (impianto a fune con VVVF).

#### Descrizione
Il contatto 9-10 (morsetti del quadro) delle serie di sicurezza si è aperto mentre la cabina viaggiava in bassa velocità. Questo errore viene segnalato solo in impianti a fune con VVVF.

#### Cause
1. contatto blocchi difettoso
2. ingresso scheda difettoso (pin 6-7, vedi [layout](../../layouts/mcpx.md))
3. cavo di vano difettoso

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza
3. controllare cavo di vano


## Codice 033 {#033}
Teleruttori di marcia non attratti in bassa velocità (impianto a fune con VVVF).

#### Descrizione
In impianti a fune con VVVF vengono usati due teleruttori TM e TM1 per comandare il motore.

#### Cause
1. teleruttori difettosi
2. bassa tensione di manovra
3. comando scheda difettoso (pin 8 e 82, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. cambiare teleruttori
2. controllare tensione di manovra ad inizio e fine serie durante il funzionamento e identificare il circuito che provoca il calo di tensione
3. mandare scheda in assistenza


## Codice 034 {#034}
Porte cabina automatiche aperte in bassa velocità (impianto a fune con VVVF).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 035 {#035}
Mancata risposta del VVVF alla fine della rampa di rallentamento.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 036 {#036}
5 tentativi di rifasamento falliti.
#### Descrizione
All'accensione della scheda la prima cosa che viene effettuata è un rifasamento dell'impianto (ritorno al piano più basso).
La partenza viene provata per 5 volte, dopodichè viene __bloccato l'impianto__.

#### Cause
Qualsiasi condizione che possa bloccare la partenza:
* blocchi aperti
* fotocellula interrotta etc...

#### Soluzioni
Controllare che non ci siano condizioni che impediscono la partenza.

## Codice 037 {#037}
Fine tempo di tenuta manovra in attesa che il contatto dei blocchi si chiuda.

#### Descrizione
Quando viene dato il comando di partenza, vengono aspettati circa 15 secondi per la chiusura dei blocchi.

#### Cause
1. contatto blocchi difettoso
2. ingresso scheda difettoso (pin 6-7, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza

## Codice 038 {#038}
Fine tempo di tenuta manovra in attesa che le porte di cabina automatiche si chiudano.

#### Descrizione
Quando viene dato il comando di partenza, vengono aspettati circa 15 secondi per la chiusura del contatto di porte cabina.

#### Cause
1. contatto porte cabina difettoso
2. ingresso scheda difettoso (pin 5-6, vedi [layout](../../layouts/mcpx.md))

#### Soluzioni
1. controllare contatto blocchi
2. mandare scheda in assistenza


## Codice 039 {#039}
Fine tempo di tenuta manovra in attesa che i contatti dei pre-finecorsa si chiudano ?????????.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 040 {#040}
Fine tempo di tenuta manovra in attesa che il teleruttore P si attragga con catena contatti sicurezze chiusa.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 041 {#041}
Fine tempo di tenuta manovra in attesa che il teleruttore SAL si attragga con catena contatti sicurezze chiusa.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 042 {#042}
Fine tempo di tenuta manovra in attesa che il teleruttore DIS si attragga con catena contatti sicurezze chiusa.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 043 {#043}
Relè PV non attratto alla pertenza (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 044 {#044}
Teleruttore Y non attratto alla partenza (impianto oleodinamico con avviamento stella-triangolo).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 045 {#045}
Teleruttore Y non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avviamento stella-triangolo).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 046 {#046}
Teleruttore SAL non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avviamento stella-triangolo).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 047 {#047}
Teleruttore P non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avviamento diretto o soft-starter).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 048 {#048}
Relè PV attratto all'avvio del ripescamento in salita (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 049 {#049}
Teleruttori P e SAL non attratti all'avvio del ripescamento in salita (impianto oleodinamico con avviamento diretto o soft-starter).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 050 {#050}
Teleruttore P non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avviamento diretto o soft-starter).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 051 {#051}
Modulo sicurezza non attratto dopo avvio ripescamento in salita (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 052 {#052}
Induttore ID aperto nel ripescamento in salita (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 053 {#053}
Teleruttore SAL non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avvio diretto o soft-starter).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 054 {#054}
Teleruttore P non attratto all'avvio del ripescamento in salita (impianto oleodinamico con avviamento diretto o soft-starter).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 055 {#055}
Relè PV attratto nel ripescamento in dicsesa (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 056 {#056}
Teleruttore P e relè DIS non attratti all'avvio del ripescamento in dicsesa (impianto oleodinamico avviamento diretto o soft-starter)??????????????????????????????????????.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 057 {#057}
Modulo sicurezza non attratto dopo avvio ripescamento in discesa (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 058 {#058}
Induttore IS aperto nel ripescamento in discesa (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 059 {#059}
Relè DIS non attratto all'avvio del ripescamento in discesa (impianto oleodinamico avviamento diretto o soft-starter)????????????????????????????.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 060 {#060}
Relè DIS attratto nel ripescamento in salita (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 061 {#061}
Teleruttore SAL attratto nel ripescamento in discesa (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 062 {#062}
Scaduto tempo ripescamento in salita (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 063 {#063}
Scaduto tempo ripescamento in discesa (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 064 {#064}
Scaduto tempo corsa.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 065 {#065}
Scaduto tempo bassa velocità.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 066 {#066}
Ripristino conteggio discesa dal conteggio di salita.
#### Descrizione
Durante ogni viaggio vengono contate separatemente le piste di discesa e di salita incontrate nella corsa. Per andare dal piano A al piano B sono presenti nel vano N piste di salita e N piste di discesa.
Alla fermata (induttori IS e ID  chiusi) viene confrontato il numero di piste di salita e discesa contate con il numero N.
In questo caso il numero di piste di discesa contate è diverso da N, mentre quelle di salita è giusto, quindi viene ripristinato il conteggio delle piste di discesa al numero N.
#### Cause
*   interferenze magnetiche
*   accoppiamento piste magnetiche e induttori non corretto
*   induttori difettosi
*   cavo di cabina rovinato


#### Soluzioni
*   posizionare le piste di fermata con lati opposti (ad esempio una con lato giall ed una con lato nero)
*   controllare che la distanza tra induttori e piste non sia maggiore di 1cm
*   controllare che gli induttori non siano difettosi
*   controllare che il cavo di cabina non sia interrotto

## Codice 067 {#067}
Ripristino conteggio salita dal conteggio di discesa.
#### Descrizione
Durante ogni viaggio vengono contate separatemente le piste di discesa e di salita incontrate nella corsa. Per andare dal piano A al piano B sono presenti nel vano N piste di salita e N piste di discesa.
Alla fermata (induttori IS e ID  chiusi) viene confrontato il numero di piste di salita e discesa contate con il numero N.
In questo caso il numero di piste di salita contate è diverso da N, mentre quelle di discesa è giusto, quindi viene ripristinato il conteggio delle piste di salita al numero N.
#### Cause
*   interferenze magnetiche
*   accoppiamento piste magnetiche e induttori non corretto
*   induttori difettosi
*   cavo di cabina rovinato


#### Soluzioni
*   posizionare le piste di fermata con lati opposti (ad esempio una con lato giall ed una con lato nero)
*   controllare che la distanza tra induttori e piste non sia maggiore di 1cm
*   controllare che gli induttori non siano difettosi
*   controllare che il cavo di cabina non sia interrotto

## Codice 068 {#068}
Effettuata una chiamata ad un piano più alto del numero di fermate.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 069
Entrambi i finecorsa (FCS e FCD) sono aperti, non è possibile effettuare partenza.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 070 {#070}
Induttore IS aperto alla fermata per scivolamento.
#### Descrizione
Dopo il comando di fermata (induttori IS e ID chiusi) viene avviato un timer dalla durata fissa di 4 secondi.
Se in questo frangente l'induttore IS si apre viene dedotto che l'impianto ha scivolato.
#### Cause
#### Soluzioni

## Codice 071 {#071}
Induttore ID aperto alla fermata per scivolamento.
#### Descrizione
Dopo il comando di fermata (induttori IS e ID chiusi) viene avviato un timer dalla durata fissa di 4 secondi.
Se in questo frangente l'induttore ID si apre viene dedotto che l'impianto ha scivolato.
#### Cause
#### Soluzioni

## Codice 072 {#072}
Induttore ID aperto con impianto fermo per deriva dovuta ad elasticità funi o manovra a mano.
#### Descrizione
Dopo il comando di fermata (induttori IS e ID chiusi), scaduto il timer di 4 secondi di controllo
di scivolamento della cabina ([vedi errore 070 o 071](#070)), si è aperto l'induttore ID.
Viene dedotto che le funi hanno troppa elasticità o la cabina è stata spostata a mano.
Questo errore è __escluso__ nell'__impianto oleodinamico__.
#### Cause
#### Soluzioni

## Codice 073 {#073}
Induttore IS aperto con impianto fermo per deriva dovuta ad elasticità funi o manovra a mano.
#### Descrizione
Dopo il comando di fermata (induttori IS e ID chiusi), scaduto il timer di 4 secondi di controllo
di scivolamento della cabina ([vedi errore 070 o 071](#070)), si è aperto l'induttore IS.
Viene dedotto che le funi hanno troppa elasticità o la cabina è stata spostata a mano.
Questo errore è __escluso__ nell'__impianto oleodinamico__.
#### Cause
#### Soluzioni

## Codice 074 {#074}
Scaduto timer apertura porte di sicurezza.
#### Descrizione
Il timer di sicurezza per l'apertura porte è un timer dalla durata fissa di 25 secondi che serve a fermare il comando di apertura porte nel caso in cui tutti i controlli hanno fallito.
#### Cause
#### Soluzioni

## Codice 075 {#075}
Il contatto di controllo del relè AP è rimasto chiuso per oltre 25 secondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 076 {#076}
Il contatto di controllo del teleruttore DIS è rimasto chiuso per oltre 25 secondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 077 {#077}
Il contatto di controllo del teleruttore SAL è rimasto chiuso per oltre 25 secondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 078 {#078}
Il contatto di controllo del teleruttore P è rimasto chiuso per oltre 25 secondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 079 {#079}
Il contatto di controllo del teleruttore PV è rimasto chiuso per oltre 25 secondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 082 {#082}
Mancata risposta del VVVF all'avvio o in marcia.
#### Descrizione
Quando viene dato il comando di marcia al VVVF questo chiude un contatto N.O. (contatto OUT) per segnalare che
ha accettato la richiesta e la marcia è partita. Questo contatto viene letto e, se alla
partenza o in viaggio non è chiuso, viene segnalato questo errore e fermata la cabina.
#### Cause
#### Soluzioni

## Codice 083 {#083}
Induttori IS e ID chiusi in viaggio all'apertura del finecorsa di discesa FCD.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 084 {#084}
Induttori IS e ID chiusi in viaggio all'apertura del finecorsa di salita FCS.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 085 {#085}
Esauriti 10 tentativi di partenza con prenotazione.
#### Descrizione
Negli impianti a prenotazione la partenza viene tentata per 10 volte in attesa che eventuali situazioni
che bloccano l'impianto si ripristino (tipo chiusura blocchi, contatto fotocellula / costola mobile etc)
#### Cause
#### Soluzioni

## Codice 086 {#086}
Peirferica 41 ferma per 200 millisecondi.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 087 {#087}
Rimbalzo dei contatti di cabina alla partenza.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 088 {#088}
Rimbalzo dei contatti dei blocchi alla partenza.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 089 {#089}
Peirferica 41 ferma per 200 millisecondi durante ripescamento (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 090 {#090}
Sovraccarico inserito per più di 3 minuti e 20 secondi (impianto a prenotazione).
#### Descrizione
Se l'ingresso del sovraccarico rimane attivo per più di 3 minuti e 20 secondi in impianto a prenotazione viene dedotto che l'impianto
non può camminare e viene attivato il "fuori servizio" e annullate tutte le prenotazioni.
#### Cause
#### Soluzioni

## Codice 091 {#091}
Ingresso costola mobile dell'ingresso 1 (CM1) inserito per più di 3 minuti e 20 secondi (impianto a prenotazione).
#### Descrizione
Se l'ingresso della contola mobile rimane attivo per più di 3 minuti e 20 secondi in impianto a prenotazione viene dedotto che l'impianto
non può camminare e viene attivato il "fuori servizio" e annullate tutte le prenotazioni.
#### Cause
#### Soluzioni

## Codice 092 {#092}
Ingresso costola mobile dell'ingresso 2 (CM2) inserito per più di 3 minuti e 20 secondi (impianto a prenotazione).
#### Descrizione
Se l'ingresso della contola mobile rimane attivo per più di 3 minuti e 20 secondi in impianto a prenotazione viene dedotto che l'impianto
non può camminare e viene attivato il "fuori servizio" e annullate tutte le prenotazioni.
#### Cause
#### Soluzioni

## Codice 093 {#093}
Contatto porte cabina in impianti con porte a battente aperto per più di 3 minuti e 20 secondi (impianto a prenotazione).
#### Descrizione
Se il contatto delle porte cabina rimane aperto per più di 3 minuti e 20 secondi in impianto a porte a battente e a prenotazione viene dedotto che l'impianto
non può camminare e viene attivato il "fuori servizio" e annullate tutte le prenotazioni.
#### Cause
#### Soluzioni

## Codice 094 {#094}
Contatto porte cabina in impianti con porte a battente aperto per più di 3 minuti e 20 secondi (impianto a prenotazione).
#### Descrizione
Se il contatto delle porte cabina rimane aperto per più di 3 minuti e 20 secondi in impianto a porte a battente e a prenotazione viene dedotto che l'impianto
non può camminare e viene attivato il "fuori servizio" e annullate tutte le prenotazioni.
#### Cause
#### Soluzioni

## Codice 095 {#095}
Relè di sicurezza aperto al piano (impianto oleodinamico).
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 096 {#096}
Relè di sicurezza rimasto chiuso all'abbandono del piano (impianto oleodinamico).
#### Descrizione
Il contatto del relè di sicurezza è rimasto chiuso quando la cabina ha lasciato il piano in cui si trovava.
La posizione della cabina riportata nell'errore in questo caso è quella del piano successivo o precedente a seconda che questa si
sia mossa in salita o in discesa. Ad esempio, se viene segnalato l'errore al piano 5 e la cabina si è mossa in salita, l'errore si  è verificato
al piano 4.
#### Cause
#### Soluzioni

## Codice 097 {#097}
Scaduto timer di 10 secondi che controlla lo stato dei teleruttori.
#### Descrizione
VEDERE CODICI ERRORI PRECEDENTI A QUESTO PER CONOSCERE CAUSA
SE TELER NON ATTRAE IL COMANDO E'RIPETUTO PER 10" POI ERRORE
GLI ERRORI IN MEMORIA PRIMA DI QUESTO DANNO IL MOTIVO ????????????????????????
#### Cause
#### Soluzioni

## Codice 098 {#098}
Il relè AP non si è attratto al comando di apertura porte.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 099 {#099}
Il finecorsa di apertura porte è rimasto chiuso dopo la fine dell'apertura.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 100 {#100}
Il relè AP si è attratto al compando di apertura ma l'operatore non ha aperto.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 101 {#101}
La periferica 47 (controllo emedamento A3) è assente o guasta.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 102 {#102}
La batteria di alimentazione del CEV e braccio per controllo emedamento A3 è guasta.
#### Descrizione
----Breve descrizione del contesto dell'errore------
#### Cause
#### Soluzioni

## Codice 103 {#103}
Scaduto tempo corsa per impianto a fune a 1 velocità.
#### Descrizione
Dopo il comando di fermata sulla prima pista, la cabina non è arrivata al piano.
#### Cause
*   induttore ID o IS difettoso
*   cavo di cabina difettoso
*   accoppiamento piste magnetiche induttore errato
*   disturbi elettromagnetici
#### Soluzioni

## Codice 255 {#255}
Scaduto il timer WDT (watch dog timer).
#### Descrizione
Questo timer interviene in caso il software rimanga bloccato resettando la scheda.
#### Cause
*   bug nel software

#### Soluzioni
*   contattare l'assistenza tecnica
