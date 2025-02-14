/*
04. Imprimir un arreglo

Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
*/

let arreglo = [3, 6, 7, 8, 2, 4, 6, 9, 10, 8]

const imprimirArreglo = arreglo =>
{
  for (let x = 0; x < arreglo.lenght; x++) {

    console.log(`${arreglo[x]}`);
  }
}

let resultado = imprimirArreglo(arreglo);

