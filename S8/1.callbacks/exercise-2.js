const userAnswers = []

function confirmExample(description) {
    const result = confirm(description)
    return result
}

function promptExample(description) {
    const result = prompt(description)
    return result
}

function father(description, callback) {
    const result = callback(description)
    userAnswers.push(result)
}


father("¿Quieres continuar?", confirmExample)
father("Ingresa tu nombre:", promptExample)
father("¿Estás seguro?", confirmExample)

console.log(userAnswers)
