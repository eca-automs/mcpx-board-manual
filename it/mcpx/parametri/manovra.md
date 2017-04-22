## Gestione manovra

<table>
<tr>
    <th align="center">Parametro</th>
    <th align="center">Valori</th>
    <th align="center">Unità di misura/risoluzione</th>
    <th align="center">Cifre visualizzate su display LCD</th>
    <th align="center">Funzioni</th>
  </tr>
  <tr>
    <td align="center">024</td>
    <td align="center">da 0 a 7</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Titolo gruppo</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">tutte funzioni escluse</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">freccie lampeggianti</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">occupato lampeggiante</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">arrivo/prenotazioni lampeggianti</td>
        </tr>
      </table>
      <p>Sommando i valori si ottengono varie combinazioni di configurazione</p>
    </td>
  </tr>
  <tr>
    <td align="center">025</td>
    <td align="center">da 0 a 7</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Titolo gruppo</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Nessuna verifica risposta VVVF in bassa velocità, manutenzione in alta (per impianti oleo e fune a due velocità), uscita RTFC impostata per interruzione fotocellula</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Verifica risposta del VVVF in bassa velocità</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Effettua manutenzione in bassa velocità</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">uscita RTFC impostata per segnalazione fuori servizio</td>
        </tr>
      </table>
      <p>Sommando i valori si ottengono varie combinazioni di configurazione</p>
    </td>
  </tr>
  <tr>
    <td align="center">026</td>
    <td align="center">da 0 a 15</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Titolo gruppo</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Fine-corsa apertura porte escluso</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Termico impianto fine/oleo o allarme VVVF escluso</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">Termoresistenze motore escluse</td>
        </tr>
        <tr align="center">
          <td align="center">8</td>
          <td align="center">Relè controllo fasi escluso</td>
        </tr>
      </table>
      <p>Sommando i valori si ottengono varie combinazioni di configurazione</p>
    </td>
  </tr>
  <tr>
    <td align="center">031</td>
    <td align="center">da 0 a 3</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Impostazione manovre speciali</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Manovra pompieri</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Manovra prioritaria</td>
        </tr>
        <tr align="center">
          <td align="center">3</td>
          <td align="center">Manovra antincendio</td>
        </tr>
      </table>
      <p>Questo parametro viene azzerato quando si entra nel parametro `048` o quando il parametro `043` è impostato per impianto ad 1 velocità</p>
    </td>
  </tr>
  <tr>
    <td align="center">032</td>
    <td align="center">da 0 a 6</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Gestione emendamento A3</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Impianto oleodinamico: controllo valole + test ogni 24 ore</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Impianto oleodinamico: con comando valvole (no controllo + test)</td>
        </tr>
        <tr align="center">
          <td align="center">3</td>
          <td align="center">Impianto a fune: controllo contatti `N.O.` su freni separati</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">Impianto a fune: controllo contatti `N.C.` su freni separati</td>
        </tr>
        <tr align="center">
          <td align="center">5</td>
          <td align="center">Impianto a fune: controllo contatti `N.O.` su cev / freno emergenza</td>
        </tr>
        <tr align="center">
          <td align="center">6</td>
          <td align="center">Impianto a fune: controllo contatti `N.C.` su cev / freno emergenza</td>
        </tr>
      </table>
      <p>Questo parametro viene azzerato quando si entra nel parametro `043`</p>
    </td>
  </tr>
  <tr>
    <td align="center">033</td>
    <td align="center">da 0 a 5 e da 8 a 13</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Tipo display (gestito da periferica)</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">1 filo per piano</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Binario</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Binario negato</td>
        </tr>
        <tr align="center">
          <td align="center">3</td>
          <td align="center">Gray</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">Gray negato</td>
        </tr>
        <tr align="center">
          <td align="center">5</td>
          <td align="center">Segmenti</td>
        </tr>
      </table>
      <p>I parametri da 8 a 13 impostano come quelli da 0 a 5 e in più impostano la periferica con indirizzo `16` per lavorare come presente</p>
    </td>
  </tr>
  <tr>
    <td align="center">034</td>
    <td align="center">da 0 a 255</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Configurazione display segmenti</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">intervallo da 0 a 31</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Intervallo da -1 a 30</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Intervallo da -2 a 29</td>
        </tr>
        <tr align="center">
          <td align="center">3</td>
          <td align="center">Intervallo da -3 a 28</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">Intervallo da -4 a 27</td>
        </tr>
        <tr align="center">
          <td align="center">5</td>
          <td align="center">Intervallo da -5 a 26</td>
        </tr>
        <tr align="center">
          <td align="center">altri</td>
          <td align="center">Da implementare</td>
        </tr>
      </table>
      <p>Questo parametro viene azzerato quando si entra nel parametro `033` ed è abilitato solo se il parametro `033` è impostato per display a segmenti</p>
    </td>
  </tr>
  <tr>
    <td align="center">035</td>
    <td align="center">da 0 a 170</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Configurazione costole mobili (CM1-CM2), fondo mobile (FM), sovraccarico (SVR)</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">CM1 contatto `N.O.`</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">CM1 contatto `N.C.`</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">CM2 contatto `N.O.`</td>
        </tr>
        <tr align="center">
          <td align="center">8</td>
          <td align="center">CM2 contatto `N.C.`</td>
        </tr>
        <tr align="center">
          <td align="center">16</td>
          <td align="center">FM contatto `N.O.`</td>
        </tr>
        <tr align="center">
          <td align="center">32</td>
          <td align="center">FM contatto `N.C.`</td>
        </tr>
        <tr align="center">
          <td align="center">64</td>
          <td align="center">SVR contatto `N.O.`</td>
        </tr>
        <tr align="center">
          <td align="center">128</td>
          <td align="center">SVR contatto `N.C.`</td>
        </tr>
      </table>
      <p>Sommando i valori si ottengono varie combinazioni di configurazione</p>
    </td>
  </tr>
  <tr>
    <td align="center">036</td>
    <td align="center">da 0 a 2</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Configurazione seriale cabina</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Seriale cabina senza induttori</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Seriale cabina e induttori</td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td align="center">041</td>
    <td align="center">da 0 a 15</td>
    <td align="center">nessuna</td>
    <td align="center">0</td>
    <td align="center">
      <table>
        <caption>Configurazione comando gong in cabina</caption>
        <tr align="center">
          <td align="center">0</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">1</td>
          <td align="center">Gong alla fermata 1 impulso</td>
        </tr>
        <tr align="center">
          <td align="center">2</td>
          <td align="center">Gong all'apertura 1 impulso</td>
        </tr>
        <tr align="center">
          <td align="center">3</td>
          <td align="center">Gong al rallentamento 1 impulso</td>
        </tr>
        <tr align="center">
          <td align="center">4</td>
          <td align="center">Tutto escluso</td>
        </tr>
        <tr align="center">
          <td align="center">5</td>
          <td align="center">Gong alla fermata 1 impulso in salita, 2 impulsi in discesa</td>
        </tr>
        <tr align="center">
          <td align="center">6</td>
          <td align="center">Gong all'apertura 1 impulso in salita, 2 impulsi in discesa</td>
        </tr>
        <tr align="center">
          <td align="center">7</td>
          <td align="center">Gong al rallentamento 1 impulso in salita, 2 impulsi in discesa</td>
        </tr>
      </table>
      <p>I valori `9`-`10`-`11` impostano come `1`-`2`-`3` in più abilitano segnalazione direzione prossima partenza (FSX-FDX).
      I valori `13`-`14`-`15` impostano come `5`-`6`-`7` in più abilitano segnalazione prossima partenza (FSX-FDX).
      Se impostato impianto a prenotazione in batteria alla chiamata al piano viene attivato gong e  accese entrambe le frecce per individuare quale ascensore aprirà le porte.
      </p>
    </td>
  </tr>
</table>
