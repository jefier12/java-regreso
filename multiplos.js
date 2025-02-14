/*
06. FizzBuzz

Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
*/

let numero = parseInt(prompt(" ingrese un numero"));

const fizzBuzz = (numero) => { 
  if (numero % 3 === 0) {
    mensaje = ("(fizz) si el número es múltiplo de 3.")
    
  }
  else if (numero % 5 === 0) {
    mensaje = ("(buzz) si el número es múltiplo de 5.")
  }
  else if (numero % 3 === 0 && numero % 5 === 0) {
    mensaje = ("(fizzbuzz) si el número es múltiplo tanto de 3 como de 5.")
  }
  else {
    return numero;
  }
  return mensaje;
} 

console.log(fizzBuzz(numero))