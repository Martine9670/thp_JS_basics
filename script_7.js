// ==============================
// EXERCICE 7 : ACNÉ-BOT
// ==============================

// 1. Demande une phrase à l’utilisateur
// TODO: utiliser prompt()
const phrase = prompt("Parle au bot :") || "";

// 2. Analyse la phrase et affiche la réponse adaptée :
// - Si ça finit par "?" → "Ouais Ouais..."
// - Si c’est tout en majuscules → "Pwa, calme-toi..."
// - Si ça contient "Fortnite" → "on s' fait une partie soum-soum ?"
// - Si c’est vide → "t'es en PLS ?"
// - Sinon → "balek."
const estQuestion = phrase.endsWith("?");
const aDesLettres = /[A-ZÀ-ÖØ-Ýa-zà-öø-ý]/.test(phrase);
const estEnMajuscules = aDesLettres && (phrase === phrase.toUpperCase());
const contientFortnite = phrase.includes("Fortnite");
const estVide = phrase.trim().length === 0;

let reponse;

if (estQuestion) {
   reponse = "Ouais Ouais...";
} else if (estEnMajuscules) {
   reponse = "Pwa, calme-toi...";
} else if (contientFortnite) {
   reponse = "on s' fait une partie soum-soum ?";
} else if (estVide) {
   reponse = "t'es en PLS ?";
} else {
   reponse = "balek.";
}

console.log(reponse);

// Astuce: 
// - phrase.endsWith("?")
// - phrase === phrase.toUpperCase()
// - phrase.includes("Fortnite")
// - phrase.trim() === ""

