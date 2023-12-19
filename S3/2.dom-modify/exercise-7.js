const elimElements = document.querySelectorAll('.fn-remove-me')
for (const eliminar of elimElements) {
    eliminar.parentNode.removeChild(eliminar);
}
    
