// L’utente inserisce due numeri in successione con due prompt
// Il software stampa il maggiore. 

const n1 = prompt('Inserisci un numero')
const n2 = prompt('Inserisci un altro numero')

console.log(n1, n2);
let result;
if (n1 > n2) {
    console.log("Il primo numero è più grande del secondo!");
    result = n1

} else if (n2 > n1) {
    console.log("Il secondo numero è più grande del primo!");
    result = n2

} else {
    console.log("I due numeri sono uguali!");
    result = "I due numeri sono uguali!"
}
document.getElementById('number').innerHTML = result;