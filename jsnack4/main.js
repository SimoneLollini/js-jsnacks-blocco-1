// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome
// comunicagli se può partecipare o no alla festa. 

const invitati = [
    "pippo",
    "pluto",
    "paperino",
    "topolino",
]
let i = 0;
let userName = prompt("inserisci il tuo nome")
let accesso = false;
console.log(userName);
while (i < invitati.length) {
    const nomeInvitato = invitati[i]
    //console.log(nomeInvitato);

    if (userName === invitati[i]) {
        //console.log("sei stato invitato!");
        accesso = true
    }
    i++
}
// console.log(accesso);
if (accesso === true) {
    console.log("Sei stato invitato!");
} else {
    console.log("Mi dispiace, non puoi entrare!");

}