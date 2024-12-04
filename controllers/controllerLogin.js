import { usuarios } from "../models/modelUsuarios.js";


export const verificarUsuario = (email, password) => {
    if (!email || !password) {
        return { success: false, message: "Todos los campos son obligatorios." };
    }

    const usuarioValido = usuarios.some(usuario => usuario.email === email && usuario.password === password);

    if (usuarioValido) {
        return { success: true, message: "Inicio de sesión exitoso." };
    } else {
        return { success: false, message: "Credenciales incorrectas." };
    }
};


