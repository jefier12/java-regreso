/*
02. Calcular impuestos

Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.
*/

let edad = parseInt(prompt("Ingrese la edad"));
let ingresos = parseFloat(prompt("Ingrese los ingresos"));

const calcularImpuestos = (edad, ingresos) =>
{ 
  if (edad >= 18 && ingresos >= 1000) {
    mensaje = (" sus ingresos por el 40% es = "+ingresos * 0.4);
  }
  else { 
    mensaje = ("sus ingresos son = "+0)
  }
  return mensaje;
}

console.log(calcularImpuestos(edad,ingresos));



