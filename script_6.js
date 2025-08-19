// ======================
// script_6.js
// Objectif : Code génétique simplifié
// ======================

// Table simplifiée des codons → acides aminés
const codonTable = {
  UCU: "Sérine", UCC: "Sérine", UCA: "Sérine", UCG: "Sérine", AGU: "Sérine", AGC: "Sérine",
  CCU: "Proline", CCC: "Proline", CCA: "Proline", CCG: "Proline",
  UUA: "Leucine", UUG: "Leucine",
  UUU: "Phénylalanine", UUC: "Phénylalanine",
  CGU: "Arginine", CGC: "Arginine", CGA: "Arginine", CGG: "Arginine", AGA: "Arginine", AGG: "Arginine",
  UAU: "Tyrosine", UAC: "Tyrosine"
};

// TODO 1 : Créer une fonction qui découpe l’ARN en codons (3 lettres)
// function decoupeARN(arn) { ... }
function decoupeARN(arn) {
   const codons = [];
   for (let i = 0; i < arn.length; i += 3) {
     codons.push( arn.slice(i, i + 3) );
   }
   return codons;
}

// TODO 2 : Traduire chaque codon en acide aminé
// function traduitARN(arn) { ... }
function traduitARN(arn) {
   const codons = decoupeARN(arn);
   const acides = codons.map(c => codonTable[c] || "Inconnu");
   return acides.join("-");
}

// TODO 3 : Tester avec les deux exemples donnés
console.log(traduitARN("CCGUCGUUGCGCUACAGC"));
console.log(traduitARN("CCUCGCCGGUACUUCUCG"));
