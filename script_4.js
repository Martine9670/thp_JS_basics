// ==============================
// EXERCICE 4 : ENTREPRENEURS
// ==============================

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1. Filtre les entrepreneurs nés dans les années 70
// TODO: utiliser filter()
const seventies = entrepreneurs.filter(p => p.year >= 1970 && p.year < 1980);
console.log(seventies);

// 2. Affiche les prénoms et noms
// TODO: utiliser map()
const nomsComplets = entrepreneurs.map(p => p.first + " " + p.last);
console.log(nomsComplets);

// 3. Calcule leur âge aujourd’hui
// TODO: utiliser map() avec l’année courante (2025)
const ages = entrepreneurs.map(p => ({ ...p, age: 2025 - p.year }));
console.log(ages);

// 4. Trie les entrepreneurs par nom de famille
// TODO: utiliser sort()
const triesParNom = [...entrepreneurs].sort((a, b) => a.last.localeCompare(b.last));
console.log(triesParNom);


