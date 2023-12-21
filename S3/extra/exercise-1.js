const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement("ul")
const body = document.body
body.appendChild(ulCountries)
for (const country of countries) {
    const li = document.createElement("li")
    li.textContent = country
    ulCountries.appendChild(li)
}
    