# Avvertenze

Di seguito alcune avvertenze e procedure da seguire.

## Catena sicurezze

Seguire la numerazione riportata nello schema fornito con la documentazione del quadro per i circuiti di sicurezza.
Questo perchè la diagnostica guasti della scheda mcpx fa riferimento questa numerazione e, se non rispettata, la lettura viene falsata e gli errori generati possono diventare fuorvianti.

Se dei circuiti non sono presenti ponticellare i relativi morsetti.

Una volta finito l'impianto prima di lasciarlo in funzione azzerare tutti gli errori che si sono verificati ed eseguire qualche viaggio di prova per controllare che non si presentino nuovi errori.

## Prima dell'accensione

Controllare la corrispondenza delle tensioni del o dei trasformatori del quadro con le apparecchiature dell'impianto (pattino, freno, valvole, porte, luminose).

Controllare che la tensione della rete corrisponda alle specifiche del quadro specie se presenti dispositivi vvvf o soft-starter.

## All'accensione

Se presente il relè di fase controllare che questo sia in fase (contatto di uscita chiuso),
altrimenti girare due fasi della rete e ricontrollare (in caso di contatto aperto la scheda mcpx segnalerà un errore --- SEGNALARE NUMERO ERRORE --- sul display).

Mettere in fase (giusta rotazione motori trifase) il motore dell'argano, pompa, o porte.

All'accensione la scheda entra in rifasamento automatico e dopo 5s fa partire la cabina in discesa diretta al piano estremo inferiore.
Il rifasamento non viene eseguito se la cabina si trova già al piano estremo inferiore o è in manutenzione.

## Uso del quadro per montaggio impianto

Collegare la bottoniera di manutenzione come da schema allegato all documentazione del quadro rispettando la numerazione dei morsetti di ALT.

Ponticellare il resto dei morsetti delle sicurezze.

Ponticellare i morsetti dei fine corsa (GND-FCD/FCS) e dei pre-finecorsa se presenti.

Collegare motore, freno, o valvole.

__Fare attenzione ai piani estremi in quanto la manovra verra' fermata esclusivamente dall'intervento della bottoniera di manutenzione__.

## Montaggio definitivo

__Evitare di collegare le linee relative alle chiamate, induttori, manutenzione sullo stesso cavo dove sono presenti le linee di luce, motore porte, pattino, sicurezze (cercare di mantenere separate le linee a potenziale differente)__.

Collegare tutti i circuiti e seguire il display della scheda per eventuali errori.

Tutte le funzioni possono essere monitorate sul display e lo stato degli induttori di lavoro è presente sia sul display che su 5 led sulla scheda mcpx stessa.

## Quadri con dispositivi vvvf

Eseguire autotuning del motore (seguire istruzioni su manuale vvvf).

__L'interruttore differenziale deve avere un valore non inferiore a 300ma (0,3A)__.

--- INSERIRE AVVERTENZE PTC IMPIANTI OLEO ---
