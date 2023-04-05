
const students = [
  {
    id:213 ,
    name: "Marco della Rovere",
    grades: 78
  },
  {
    id:110  ,
    name: "Paola Cortellessa ",
    grades: 96
  },
  {
    id:250  ,
    name: "Andrea Mantegna",
    grades: 48
  },
  {
    id:145 ,
    name: "Gaia Borromini   ",
    grades: 74
  },
  {
    id:196  ,
    name: "Luigi Grimaldello",
    grades: 68
  },
  {
    id:102  ,
    name: "Piero della Francesca ",
    grades: 50
  },
  {
    id:120  ,
    name: "Francesca da Polenta",
    grades: 84
  },
]
//name with uppercase
  const nameToUpperCase = students.map(nameUpper => {
    return nameUpper.name.toUpperCase()
  })
  console.log(nameToUpperCase);

  //if grades > 70

  const voteOver70 = students.filter(over70 => {
    if(over70.grades > 70){
      return true
    }
  })
  console.log(voteOver70);

  //if grades > 70 and id >120
  const voteOverid = students.filter(overid => {
    if(overid.grades > 70 && overid.id >120){
      return true
    }
  })
  console.log(voteOverid);