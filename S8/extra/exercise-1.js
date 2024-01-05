//no dejar hacer el .fecth a la API por tema de permisos

fetch('https://breakingbadapi.com/api/characters')
.then(response => {
  return response.json();
})
.then(data => {
  console.log('Data:', data);
})
.catch(error => {
  console.error('Error:', error);
});
