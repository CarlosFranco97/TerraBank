import { validarUsuario } from "../models/modelUsuario.js";

export const verificarUsuario = (email, password) => {
    if (!email || !password) {
        return { success: false, message: "Todos los campos son obligatorios." };
    }

    const usuarioValido = validarUsuario(email, password);
    if (usuarioValido) {
        return { success: true, message: "Inicio de sesión exitoso." };
    } else {
        return { success: false, message: "Credenciales incorrectas." };
    }
};
