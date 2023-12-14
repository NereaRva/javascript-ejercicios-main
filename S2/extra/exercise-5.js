function rollDice (numFaces){
    if (numFaces <= 1) {
        
        return
    }
    const result = Math.floor(Math.random() * numFaces) + 1;
console.log(`El dado de ${numFaces} caras muestra: ${result}`);
return result;

}
rollDice(6);
