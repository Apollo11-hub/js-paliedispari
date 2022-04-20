/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Bonus: L’inserimento avviene tramite un campo input
*/






const parolaInserita = prompt("Inserisci una parola");

const lettereUno = [];

const lettereDue = []; 

console.log("Inizio" , lettereUno);

console.log("Inizio" , lettereDue);

// if(parolaInserita){

// }

for ( let i = 0 ; i < parolaInserita.length; i++){

  lettereUno.push(parolaInserita[i]);

}


for (let i = parolaInserita.length -1; i > -1  ; i--){

  lettereDue.push(parolaInserita[i]);

}


console.log("lettera uno ->" , lettereUno);

console.log("lettera due ->" , lettereDue);

let palidrome = lettereUno.length == lettereDue.length && lettereUno.every(function(element, index) {

  return element === lettereDue[index]; 

});

if (palidrome) {
  alert(" LA TUA PAROLA E' PALINDROMA")
}else{
  alert("LA TUA PAROLA NON E' Palindroma")
}