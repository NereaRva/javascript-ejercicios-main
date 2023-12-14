
const palabras = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    
    return -1;
  }

function removeItem(array,text){
    const index = findArrayIndex(array,text)
    console.log(index);
    array.splice(index,1)
    console.log(array)
}
removeItem(palabras,"Caracol")


