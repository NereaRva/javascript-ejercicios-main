const createDiv = document.createElement("div")
const body = document.body

for (let i = 1; i <= 6; i++) { 
     const createParrafo = document.createElement("p")
     createParrafo.textContent = "parrafo"+i
     createDiv.appendChild(createParrafo)
}
body.appendChild(createDiv);