const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let letterA = animals
.flatMap(animals => animals.toLowerCase().split('')).filter(letra=>letra=='a').length;
console.log(letterA);