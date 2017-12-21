# Comandi

Di seguito viene riportato l'elenco dei comandi disponibili e le loro funzioni.

## Esclusione apertura porte (esclus aperture) {#escl-apert}

<img src="../../../../dist/menu-manovra-voce-esempio-1.jpg" style="width: 300px; border-radius: 5%;">

Esclusione apertura delle porte. Può risultare utile usare questo comando nel caso in cui si vuole fare delle prove
ed impedire l'accesso in cabina agli utenti.

Valore impostato|Effetto
--|--
S|Le porte non vengono mai aperte
N|Le porte vengono comandate normalmente

## Tuning VVVF (tuning vvvf) {#tun-vvvf}

<img src="../../../../dist/menu-manovra-tuning.jpg" style="width: 300px; border-radius: 5%;">

Attrae i teleruttori di marcia per preparazione alla procedura di tuning del vvvf.
Le __serie devono essere chiuse__ affinchè il comando funzioni.

Valore impostato|Effetto
--|--
S|I teleruttori si attraggono
N|I teleruttori cadono

## Manovra da pulsanti (manovra da pulsanti up-sw) {#man-puls}

<img src="../../../../dist/menu-manovra-manovra-puls.jpg" style="width: 300px; border-radius: 5%;">

Abilita il comando di movimento in manovra tramite i pulsanti UP e SW della scheda.

La stessa funzione si può ottenere spostando lo switch in dotazione sul quadro in `manutenzione` ed usare
i pulsanti UP e SW per manovrare l'impianto.

Valore impostato|Effetto
--|--
S|La manovra da pulsanti è attiva
N|La manvora da pulsanti non è attiva

Una volta impostato il parametro, una volta usciti dal menu si vedrà lampeggiare a scermo la scritta `manovra da pulsanti`

<img src="../../../../dist/manutenzione1.jpg" style="width: 300px; border-radius: 5%;">

A questo punto premendo UP si manda la cabina in salita, premendo SW in discesa.

Spostando lo switch del quadro invece, a schermo si vedrà scritto `mn` e `FS` nella pagina di stato del quadro
(vedi [modailtà manovra](../../manovra/README.md))

<img src="../../../../dist/manutenzione2.jpg" style="width: 300px; border-radius: 5%;">

e si potrà spostare la cabina alla stessa maniera.

## Reset errore A3 (reset errore a3) {#res-err-a3}

<img src="../../../../dist/menu-manovra-reset-err-a3.jpg" style="width: 300px; border-radius: 5%;">

Resetta l'errore del modulo che gestisce movimento incontrollato cabina in base all'emendamento A3.

Vedi errori [101](../../errori/elenco.md#101) e [102](../../errori/elenco.md#102).

Valore impostato|Effetto
--|--
S|L'errore viene resettato
N|L'errore non viene resettato

## Reset extracorsa (res extracorsa) {#res-extra}

<img src="../../../../dist/menu-manovra-reset-extracorsa.jpg" style="width: 300px; border-radius: 5%;">

Resetta l'errore di extracorsa.

Vedi errore [008](../../errori/elenco.md#008).

Valore impostato|Effetto
--|--
S|L'errore viene resettato
N|L'errore non viene resettato

## Reset errori (reset errori) {#res-err}

<img src="../../../../dist/menu-manovra-reset-errori.jpg" style="width: 300px; border-radius: 5%;">

Azzera l'elenco degli errori.

Valore impostato|Effetto
--|--
S|L'elenco viene azzerato
N|L'elenco non viene azzerato

## Memorizzazione indirizzo periferica (memor ind perif) {#mem-ind}

<img src="../../../../dist/menu-manovra-mem-ind-per.jpg" style="width: 300px; border-radius: 5%;">

Avvia la procedura di memorizzazione di una scheda PER16B-SMD.

Valore impostato|Effetto
--|--
S|La procedura viene avviata
N|La procedura non viene avviata

#### Procedura memorizzazione

Una scheda PER16B-SMD alla volta può essere memorizzata. Prima di iniziare assicurarsi di aver collegato la scheda PER16B-SMD alla scheda MCP2015X-SMD come mostrato in foto.

<img src="../../../../dist/esempio-collegamento.jpg" style="width: 200px; border-radius: 5%;">

Dopo aver selezionato S nella voce del menu, verrà presentata la seguente schermata.

<img src="../../../../dist/mem-new.jpg" style="width: 300px; border-radius: 5%;">

Impostare l'indirizzo della scheda desiderato (vedi [elenco indirizzi periferiche e relative funzioni](../../../../periferiche/indirizzi.md)), utilizzando il tasto UP per modificare il valore puntato dal cursore, SW per spostare il cursore orizzontalmente, SET per impostare e MENU per uscire.

Se tutto è andato a buon fine verrà presentata la schermata

<img src="../../../../dist/mem-ok.jpg" style="width: 300px; border-radius: 5%;">

Dopo essere usciti, per rendere le modifiche attive bisogna __resettare la scheda MCP2015X-SMD__ (vedi [reset sistema](#reset-sistema)).

##### Periferica già programmata

Se la scheda PER16B-SMD è stata già programmata, nella schermata di memorizzazione verrà visualizzato l'indirizzo corrente.

<img src="../../../../dist/mem-old.jpg" style="width: 300px; border-radius: 5%;">

È possibile a questo punto __modifcare__ l'indirizzo, tenendo a mente che __non è possibile memorizzare due schede con lo  stesso indirizzo__.
In tal caso la procedura fallisce.

<img src="../../../../dist/mem-error.jpg" style="width: 300px; border-radius: 5%;">

## Reset sistema (RESET SISTEMA) {#reset-sistema}

<img src="../../../../dist/menu-manovra-reset-sist.jpg" style="width: 300px; border-radius: 5%;">

Riavvia il firmware.

Valore impostato|Effetto
--|--
S|La scheda viene riavviata
N|La scheda non viene riavviata

## Chiamate da pulsanti (chiamate da pulsanti up-sw-set) {#ch-puls}

<img src="../../../../dist/menu-manovra-chiamate-puls.jpg" style="width: 300px; border-radius: 5%;">

Permette di effettuare chiamate ad un piano specifico selezionato con i pulsanti UP, SW, SET.

Valore impostato|Effetto
--|--
S|Le chiamate da pulsanti sono attivate
N|Le chiamate da pulsanti non sono attivate

#### Chiamate da pulsanti

Una volta attivate le chiamate da pulsanti, quando si esce dal menu manovra verrà visualizzata la seguente schermata.

<img src="../../../../dist/chiamate-puls-1.jpg" style="width: 300px; border-radius: 5%;">

`CH:00` indica il piano a cui verrà fatta la chiamata. Con i tasti UP e SW è possibile cambiare il numero del piano. Premendo SET verrà effetuata la chiamata e schermo si vedrà una cosa simila a questa:

<img src="../../../../dist/chiamate-puls-2.jpg" style="width: 300px; border-radius: 5%;">

nella foto l'impianto è partito in discesa dal piano 8 (`PC:08` indica la posizione della cabina).
