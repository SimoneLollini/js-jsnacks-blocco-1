// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


/*
let userNumber;
let result;
for (let i = 0; i < 10; i++) {
    userNumber = Number(prompt("Inserisci un numero"))
    const valore = [userNumber]
    console.log(valore);
    console.log(userNumber);
    result = valore[0] + [1] + [2] + [3] + [4] + [5] + [6] + [7] + [8] + [9];
    console.log(result);
}
*/

// Snack 3 blocco 1 con While:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let i = 0
let sumN = i;
while (i < 10) {

    console.log(i);
    const userNumber = Number(prompt("Inserisci un numero"))
    sumN += userNumber


    i++
} console.log(sumN);