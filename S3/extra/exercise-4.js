const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const ulCountries = document.createElement("ul")
document.body.appendChild(ulCountries)

countries.forEach(country => {
    let liCountries = document.createElement("li")
    let div = document.createElement("div")
    ulCountries.appendChild(liCountries)
    liCountries.appendChild(div)
    div.innerHTML = `<h4>${country.title}</h4><img src="
    ${country.imgUrl}"><button>Eliminar</button>`

});
const enlaceHTML = document.querySelector("a")
enlaceHTML.addEventListener("click", eliminar)

function eliminar() {
    ulCountries.removeChild(ulCountries.lastElementChild)
}
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
  boton.addEventListener("click", eliminarElemento);
});

function eliminarElemento() {
  const liEliminar = this.parentNode.parentNode; // Accede al elemento li padre
  ulCountries.removeChild(liEliminar);
}
