// ==============================
// EXERCICE 3 : PYRAMIDE DE MARIO
// ==============================

// 1. Demande à l’utilisateur combien d’étages il veut
// TODO: utiliser prompt() et parseInt()
const etages = parseInt(prompt("Combien d'étages veux-tu ?"), 10);

// 2. Construis la pyramide alignée à droite
// Astuce: " ".repeat(x) et "#".repeat(y)
// TODO: utiliser une boucle for
for (let i = 1; i <= etages; i++) {
   const espaces = " ".repeat(etages - i);
   const marches = "#".repeat(i);
   console.log(espaces + marches);
}

// Exemple attendu pour 5 étages :
//    #
//   ##
//  ###
// ####
//#####

