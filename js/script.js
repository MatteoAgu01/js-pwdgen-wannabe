

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

const nomeUtente = prompt('Inserisci il tuo nome');

const cognomeUtente = prompt('Inserisci il tuo cognome');

const colorePreferito = prompt('inserisci colore preferito');

if(nomeUtente && cognomeUtente) 
     document.getElementById('psw').innerHTML = `
     <h1>${nomeUtente}${cognomeUtente}${colorePreferito}21</h1>`;
else
     document.getElementById('psw').innerHTML = `
     <h1>inserire un testo valido</h1>`;
