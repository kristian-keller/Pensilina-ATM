# Pensilina-ATM

Una semplice web app che tenta di simulare i display delle pensiline di ATM a Milano.
In sostanza utilizza lo stesso server che usa il sito di ATM per Giromilano.

## "Voglio usare questo codice per creare qualcosa di mio!"
Va bene, puoi fare un fork o usarla in qualche tuo progetto (smart mirror, etc) ma **citami in qualche modo**.

## "Sono un utente normale e vorrei usare questa app"
Te lo sconsiglio perché è un prototipo e non è totalmente sicura. Puoi scaricarla e funziona come una normale web app, ricordati solo che devi disabilitare le "Cross-Origin Restrictions" del tuo browser (**SCONSIGLIATO!**).

## Funzionamento generale
All'apertura viene chiesto il codice della fermata a cui vuoi collegarti, una volta inserito si collega alla pensilina e mostra i dati. Per cambiare fermata devi riaggiornare la pagina, ma l'app è pensata per essere lasciata attiva senza altre interazioni.
Ogni 5 secondi vengono aggiornati i dati.

## Istruzioni per hardware fisico
Questa è una web app, per funzionare ha bisogno di un browser e una connessione costante a Internet.
Se hai un display da appendere e qualche board in grado di eseguire un browser puoi fare in modo che venga mostrata a tutto schermo.
Se vuoi un risultato più simile a quella reale di ATM devi trovare il modo di programmare un display Dot Matrix, puoi seguire la stessa procedura usata qui e fornire i dati scaricati al display.

### Altre cose da tenere a mente
- Non usa le API ufficiali di ATM, probabilmente non rispetta i Terms of Service di ATM (tradotto: *è un progetto fatto per divertimento non vendetelo*)
- Se ATM cambia qualcosa sul server tipo la struttura del JSON questa app non funziona più
- Il collegamento al server non è una connessione sicura, devi disabilitare le Cross-Origin Restriction e ti sconsiglio di farlo
