const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

peliculaPequeña = []

peliculaMediana = []

peliculaGrande = []

for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes <100) {
       peliculaPequeña.push(movies[i].name)
    }
    else if(movies[i].durationInMinutes >100 && movies[i].durationInMinutes <200) {
        peliculaMediana.push(movies[i].name)
    }
    else{
     (movies[i].durationInMinutes >200) 
        peliculaGrande.push(movies[i].name)
    }
    
}
console.log("peliculas pequeñas" + JSON.stringify(peliculaPequeña) +"peliculas medianas" + JSON.stringify(peliculaMediana) + "peliculas grandes"+JSON.stringify(peliculaGrande))
