const output = document.querySelector('h1')
const bikes = [
  {
    name: "Graziella",
    weight: 21,
  },
  {
    name: "Mountain",
    weight: 31,
  },
  {
    name: "Scott",
    weight: 19,
  },
  {
    name: "MERIDA",
    weight: 25,
  },
  {
    name: "Cannondale",
    weight: 23,
  },
]
//array weight
let lightWeight;
const arrayWeight = bikes.map(light => {
  const {weight, name} = light
  return light.weight
})
//min val
lightWeight = Math.min(...arrayWeight);
const {name} = arrayWeight


output.innerHTML = `La bicicletta piú leggera ha un peso di ${lightWeight} Kg`

console.log(arrayWeight);
console.log(lightWeight);
