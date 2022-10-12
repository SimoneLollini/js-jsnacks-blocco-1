// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("Inserisci una parola")
const parola2 = prompt("Inserisci un' altra parola")
let parola;
if (parola1.length > parola2.length) {
    console.log("La parola " + parola1 + " è la più lunga");
    parola = "La parola " + parola1 + " è la più lunga"
} else if (parola2.length > parola1.length) {
    console.log("La parola " + parola2 + " è la più lunga");
    parola = "La parola " + parola2 + " è la più lunga"
} else {
    console.log("Le due parole sono lunghe uguale");
    parola = "Le due parole sono lunghe uguale"
}

document.querySelector('body').innerHTML = parola;