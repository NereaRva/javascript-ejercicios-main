const input = document.querySelector("input")
function valorInput() {
    const valorInput = input.value
    console.log(valorInput);
}
input.addEventListener("input",valorInput)