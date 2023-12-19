const insertText = document.querySelectorAll('.fn-insert-here')
for (const insert of insertText) {
    const newP = document.createElement("p")
    newP.textContent = 'Voy dentro!'
    insert.appendChild(newP)

}