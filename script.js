/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/


const parolaInserita = prompt("Inserisci una parola");

const risultato = isPalindroma(parolaInserita);

console.log( risultato )

if (risultato === true) {
  alert("Palindroma")
}else{
  alert("Non Palindroma")
}

function isPalindroma(parolaInserita) {

  let parolaInvertita = '';
    
  for (let i = parolaInserita.length -1; i > -1  ; i--){
    
    parolaInvertita = parolaInvertita + parolaInserita[i];

  }
  console.log( parolaInserita );
  console.log( parolaInvertita );

  if (parolaInserita == parolaInvertita) {

    return true;

    } else {

      return false;

    } 
}
