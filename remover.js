/*
13. Remover ceros

Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).
*/


arreglo = [0, 3, 4, 0, 12, 6, 7, 0, 5, 0, 32, 0, 45, 6, 7, 0]

const removerCeros = (arreglo) =>
{
  console.log(arreglo);
  eliminar = arreglo.filter(numero => numero != 0);
  return eliminar;
}

console.log(removerCeros(arreglo));