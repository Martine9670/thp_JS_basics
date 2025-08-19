// ==============================
// EXERCICE 5 : BIBLIOTHÉCAIRE
// ==============================

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// 1. Est-ce que tous les livres ont été empruntés au moins une fois ?
// TODO: utiliser every()
const tousEmpruntes = books.every(b => b.rented > 0);
console.log(tousEmpruntes);

// 2. Quel est le livre le plus emprunté ?
// TODO: utiliser reduce()
const plusEmprunte = books.reduce((max, b) => b.rented > max.rented ? b : max );
console.log(plusEmprunte);

// 3. Quel est le moins emprunté ?
// TODO: utiliser reduce()
const moinsEmprunte = books.reduce((min, b) => b.rented < min.rented ? b : min );
console.log(moinsEmprunte);

// 4. Trouve le livre avec l’ID 873495
// TODO: utiliser find()
const livreId = books.find(b => b.id === 873495);
console.log(livreId);

// 5. Supprime le livre avec l’ID 133712
// TODO: utiliser filter()
const sans133712 = books.filter(b => b.id !== 133712);
console.log(sans133712);

// 6. Trie les livres par titre
// TODO: utiliser sort()
const tries = [...sans133712].sort((a, b) => a.title.localeCompare(b.title));
console.log(tries);


