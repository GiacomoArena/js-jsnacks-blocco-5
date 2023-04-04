const studenti = [
  {
    name: "Giacomo",
    lastname: "Arena",
    numMatricola: 348537,
    voti:[4,8,7,6,7],
  },
  {
    name: "Giovanni",
    lastname: "Muciaccia",
    numMatricola: 153745,
    voti:[5,4,3,5,5],
  },
  {
    name: "Mario",
    lastname: "Rossi",
    numMatricola: 137453,
    voti:[4,8,7,6,7],
  },
  {
    name: "Fiorella",
    lastname: "Mannoia",
    numMatricola: 69347,
    voti:[8,7,8,8,6],
  },
  {
    name: "Antonello",
    lastname: "Venditti",
    numMatricola: 74754,
    voti:[4,3,5,7,2],
  },
  {
    name: "Domenico",
    lastname: "Bini",
    numMatricola: 134751,
    voti:[5,6,7,9,4],
  },
  {
    name: "Claudio",
    lastname: "Baglioni",
    numMatricola: 775141,
    voti:[4,8,7,6,7],
  }
]

studenti.forEach((element) => {
  const mediaVoti = studenti.map((voto, i, voti)=> {
    let media = 0
    return   (media += element.voti[i])
  })
  console.log(mediaVoti);

})

  

const datiUtente  =  studenti.map(studente => {
  return `${studente.name} ${studente.lastname}`
})

console.log(datiUtente);