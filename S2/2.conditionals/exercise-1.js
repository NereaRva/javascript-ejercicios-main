const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
const isApproved = (alumn) => {
    trimApprov = ['T1', 'T2', 'T3'].filter(trim => alumn[trim]) 
    return trimApprov.length >= 2;
}
alumns.forEach (alumn => {
    alumn.isApproved = isApproved(alumn)
})
console.log(alumns);


