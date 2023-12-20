function splitName (completName){
    const spaceIndex = completName.indexOf(' ');
    const firstName = completName.substring(0, spaceIndex);
    const lastName = completName.substring(spaceIndex + 1);
    return { firstName, lastName };

}
const nombreCompleto = "Abel Cabeza";
const { firstName, lastName } = splitName(nombreCompleto);

console.log("Nombre:", firstName);
console.log("Apellido:", lastName);