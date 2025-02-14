/*
01. Contraseña válida

Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/


let contraseña = prompt(" ingrese la contraseña correcta ")

const contrasenaValida = (contraseña) =>
{
  if (contraseña == "2Fj(jjbFsuj" || contraseña == "eoZiugBf&g9") {
    mensaje = true;
  }else{ 
    mensaje = false;
  }
  return mensaje;
}

console.log(contrasenaValida(contraseña));