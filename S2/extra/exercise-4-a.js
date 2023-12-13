
const palabras = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]==text) {
            console.log(i)
        }
        
    }
}

findArrayIndex(palabras,"Mosquito")