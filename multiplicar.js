/*
12. Multiplicar arreglo

Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

let arreglo = [5, 6, 4, 7]

const multiplicarArreglo = (arreglo) => {
  let multi = 1;
  for (let i = 0; i < arreglo.length; i++)
  { 
    multi = multi * arreglo[i]; 
  }
  return multi;
}


console.log(multiplicarArreglo(arreglo));