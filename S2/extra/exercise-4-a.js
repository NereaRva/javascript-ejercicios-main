
const palabras = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    
    return -1;
  }
  findArrayIndex(palabras,"Salamandra")
console.log(findArrayIndex(palabras,"Salamandra"));