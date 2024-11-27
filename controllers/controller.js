// Archivo: controller.js


import { validarUsuario } from '../models/modelUsuario.js';


export function manejarLogin(email, password) {
    if (validarUsuario(email, password)) {
        alert('Inicio de sesión exitoso');

    } else {
        alert('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}
