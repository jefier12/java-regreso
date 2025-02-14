/*
9. Número de aes (letra "a")

Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/


let texto = prompt("ingrese texto")

const numeroDeAes = (texto) =>
{ 
  let letra = /a/g;
  respuesta = ((texto.match(letra).length));
  return respuesta;
}


console.log(numeroDeAes(texto));

