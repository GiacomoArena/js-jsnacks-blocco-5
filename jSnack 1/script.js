const container = document.querySelector('.container');

const utenti = [
  {
    name: "Giacomo",
    lastname: "Arena",
    age: 24,
  },
  {
    name: "Giovanni",
    lastname: "Muciaccia",
    age: 15,
  },
  {
    name: "Mario",
    lastname: "Rossi",
    age: 13,
  },
  {
    name: "Fiorella",
    lastname: "Mannoia",
    age: 69
  },
  {
    name: "Antonello",
    lastname: "Venditti",
    age: 74,
  },
  {
    name: "Domenico",
    lastname: "Bini",
    age: 11,
  },
  {
    name: "Claudio",
    lastname: "Baglioni",
    age: 71,
  }
]


const utentiMinorenni = utenti.filter(utente => (utente.age < 18));

console.log("utentiMinorenni",utentiMinorenni);

const utentiOver65 = utenti.filter(utente => (utente.age >= 65));

console.log("utentiOver65", utentiOver65);
