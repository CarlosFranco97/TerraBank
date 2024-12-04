import { regularExpressions } from "../../helpers/expresionesRegularesFormularios.js"    
import { register } from "../../controllers/controllerRegistro.js";

let buttonRegister = document.getElementById('btnRegistro'); 

let inputs = document.getElementsByTagName('input');
for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener('keyup', validarformulario);
}

function validarformulario({target}) {
  
  switch (target.name) {
    case "nombre":
    if (regularExpressions.nombre.test(target.value)) {
        document.getElementById("nombre").classList.add("correcto");
        document.getElementById("nombre").classList.remove("incorrecto");
      } else {
        document.getElementById("nombre").classList.add("incorrecto");
        document.getElementById("nombre").classList.remove("correcto");
      }
      break;

    case "apellido":
      if (regularExpressions.apellido.test(target.value)) {
        document.getElementById("apellido").classList.add("correcto");
        document.getElementById("apellido").classList.remove("incorrecto");
      } else {
        document.getElementById("apellido").classList.add("incorrecto");
        document.getElementById("apellido").classList.remove("correcto");
      }
      break;

    case "email":
      if (regularExpressions.correo.test(target.value)) {
        document.getElementById("email").classList.add("correcto");
        document.getElementById("email").classList.remove("incorrecto");
      } else {
        document.getElementById("email").classList.add("incorrecto");
        document.getElementById("email").classList.remove("correcto");
      }
      break;

    case "phone":
      if (regularExpressions.telefono.test(target.value)) {
        document.getElementById("phone").classList.add("correcto");
        document.getElementById("phone").classList.remove("incorrecto");
      } else {
        document.getElementById("phone").classList.add("incorrecto");
        document.getElementById("phone").classList.remove("correcto");
      }
      break;

    case "password":
      if (regularExpressions.contrasena.test(target.value)) {
        document.getElementById("password").classList.add("correcto");
        document.getElementById("password").classList.remove("incorrecto");
      } else {
        document.getElementById("password").classList.add("incorrecto");
        document.getElementById("password").classList.remove("correcto");
      }
      break;
    }


}

buttonRegister.addEventListener('click', register)