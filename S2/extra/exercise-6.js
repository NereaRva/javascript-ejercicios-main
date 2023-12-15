const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(Array, parametro1, parametro2){
    if (parametro1 < 0 || parametro1 >= array.length || parametro2 < 0 || parametro2 >= array.length) {
        console.error("Índices fuera de rango");
        return array;  
    }

const temp = array[parametro1];
array[parametro1] = array[parametro2];
array[parametro2] = temp;
return array
}


const resultado = swap(array, 1, 3);
console.log(resultado);