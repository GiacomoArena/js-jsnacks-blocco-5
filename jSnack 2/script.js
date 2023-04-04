const studenti = [
  {
    name: "Giacomo",
    lastname: "Arena",
    numMatricola: 337,
    voti:[4,8,7,6,7],
  },
  {
    name: "Giovanni",
    lastname: "Muciaccia",
    numMatricola: 155,
    voti:[5,4,3,5,5],
  },
  {
    name: "Mario",
    lastname: "Rossi",
    numMatricola: 153,
    voti:[4,8,7,6,7],
  },
  {
    name: "Fiorella",
    lastname: "Mannoia",
    numMatricola: 647,
    voti:[8,7,8,8,6],
  },
  {
    name: "Antonello",
    lastname: "Venditti",
    numMatricola: 74,
    voti:[4,3,5,7,2],
  },
  {
    name: "Domenico",
    lastname: "Bini",
    numMatricola: 151,
    voti:[5,6,7,9,4],
  },
  {
    name: "Claudio",
    lastname: "Baglioni",
    numMatricola: 775,
    voti:[4,8,7,6,7],
  }
]

let media; 

studenti.forEach((studente) => { 
media = calcolo_media(studente);
console.log(media);
})
const datiUtente  =  studenti.map(studente => {
  return `${studente.name} ${studente.lastname} N° ${studente.numMatricola} media voti: ${media}`
})
console.log(datiUtente);



function calcolo_media(element){
  let sum = 0;
  let media;
  for(let i = 0; i < element.voti.length; i++){
    sum += element.voti[i];
  }
  media = sum/element.voti.length;
  return media;
}