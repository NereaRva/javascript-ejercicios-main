const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const body = document.body
const createUl = document.createElement("ul")
body.appendChild(createUl)

for (const app of apps) {
    const createLi = document.createElement("li")
    const textNode = document.createTextNode(app)
    createLi.appendChild(textNode)
    createUl.appendChild(createLi)
}
