fetch('https://api.agify.io?name=michael')
.then(response => {
  return response.json();
})
.then(data => {
  console.log('Data:', data);
})
.catch(error => {
  console.error('Error:', error);
});

