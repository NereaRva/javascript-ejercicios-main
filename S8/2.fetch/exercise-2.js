
const button = document.querySelector('#button')
button.addEventListener('click',api)
function api() {
    let baseUrl = 'https://api.nationalize.io?name='
    const input = document.querySelector('#input').value
    baseUrl += input
    fetch(baseUrl)
.then(response => {
  return response.json()
})
.then(data => {
    console.log('Data:', data)
    const p = document.createElement('p')
    p.textContent += `El nombre ${input} tiene `

    data.country.forEach(country => {
    const countryName = country.country_id
    const countryProb = country.probability
    p.textContent += ` un ${countryProb} de ser de ${countryName}`
    });

    const closeButton = document.createElement('button')
    closeButton.textContent = 'X'
    closeButton.addEventListener('click', () => {
    document.body.removeChild(p)
    });

    p.appendChild(closeButton);
    document.body.appendChild(p)

})
.catch(error => {
    console.error('Error:', error)
})
}








