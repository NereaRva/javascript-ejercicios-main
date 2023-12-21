const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const dataFunction = document.querySelector('div[data-function="printHere"]');
let html = "<ul>"
cars.forEach(car => {
    html += `<li>${car}</li>`
});

html += `</ul>`

dataFunction.innerHTML = html