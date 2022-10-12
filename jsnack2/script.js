// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Inserisci una parola")
const word2 = prompt("Inserisci un' altra parola")
let word;
if (word1.length > word2.length) {
    console.log("La parola " + word1 + " è la più lunga");
    word = "La parola " + word1 + " è la più lunga"
} else if (word2.length > word1.length) {
    console.log("La parola " + word2 + " è la più lunga");
    word = "La parola " + word2 + " è la più lunga"
} else {
    console.log("Le due parole sono lunghe uguale");
    word = "Le due parole sono lunghe uguale"
}

document.querySelector('body').innerHTML = parola;