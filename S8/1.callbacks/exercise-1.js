const numbersList = [];

function sum(a, b){
    const totalSuma = a + b
    return totalSuma
}

function substract(a, b){
    const totalResta = a - b
    return totalResta
}

function father(a, b, callback) {
    return numbersList.push(callback(a, b))

}
function sumCallback(x, y) {
    return x + y;
}

function subtractCallback(x, y) {
return x - y
}


father(5, 3, sum)
father(8, 2, substract)
father(10, 5, sum)

console.log("numbersList:", numbersList)
