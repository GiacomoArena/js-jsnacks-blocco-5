const output = document.querySelector('h2');
const squadre = [
  {
    nome: "Catania",
    punti: randomNumber(1,60),
    falliSubiti: randomNumber(1,10),
  },
  {
  nome: "Juventus",
    punti: randomNumber(1,60),
    falliSubiti: randomNumber(1,10),
  },
  {
    nome: "Milan",
    punti: randomNumber(1,60),
    falliSubiti: randomNumber(1,10),
  },
  {
    nome: "Inter",
    punti: randomNumber(1,60),
    falliSubiti: randomNumber(1,10),
  },
  {
    nome: "Napoli",
    punti: randomNumber(1,60),
    falliSubiti: randomNumber(1,10),
  },
]

console.log(squadre);
const finalMessage = squadre.map(nomePunti => {
  const {nome, falliSubiti} = nomePunti
  return ` <br> Nome:"${nome} con un totale di ${falliSubiti} falli subiti <br>`
})
console.log(finalMessage);

output.innerHTML = finalMessage;

//--------------funzioni------------------
function randomNumber(min, max) {
  const random = Math.floor(Math.random() * (max - min +1) +min);
  return random;
}