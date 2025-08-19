// ==============================
// EXERCICE 2 : FACTORIELLE
// ==============================

// 1. Demande un nombre à l’utilisateur avec prompt()
// TODO: convertir en nombre entier avec parseInt()
const n = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"), 10);

// 2. Crée une fonction qui calcule la factorielle
// Rappel : 5! = 5 * 4 * 3 * 2 * 1
// TODO: utiliser une boucle for
function factorielle(n) {
   let resultat = 1;
   // boucle qui décrémente: i = n; i >= 2; i--
   for (let i = n; i >= 2; i--) {
     resultat = resultat * i;
   }
   return resultat;
}

// 3. Affiche le résultat dans la console
const r = factorielle(n);
console.log("Le résultat est : " + r);

