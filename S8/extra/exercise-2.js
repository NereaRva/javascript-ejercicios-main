fetch(`http://localhost:3000/diary`)
  .then(response => response.json())
  .then(data => {
    data.forEach(entry => {
      entry.date = new Date(entry.date);
    });
    data.sort((a, b) => a.date - b.date);

    console.log(data);
    const div = document.createElement("div")
    document.body.appendChild(div)
    let divContent = ''
    data.forEach(nota => {
        divContent += `<h3>${nota.title}</h3><h5>${nota.date}</h5><p>${nota.description}</p>`
    });
    div.innerHTML = divContent
    console.log(divContent);
  })
  .catch(error => {
    console.error('Error:', error);
  });

