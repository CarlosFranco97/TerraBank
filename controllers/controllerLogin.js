import { getUsers } from "../controllers/controllerRegistro.js";

export const verificarUsuario = async (email, password) => {
    try {
        const users = await getUsers();  

        if (!email || !password) {
            return { success: false, message: "Todos los campos son obligatorios." };
        }

        const usuarioValido = users.some(usuario => usuario.email === email && usuario.password === password);

        if (usuarioValido) {
            return { success: true, message: "Inicio de sesión exitoso." };
        } else {
            return { success: false, message: "Credenciales incorrectas." };
        }

    } catch (err) {
        console.error("Error al verificar usuario:", err);
        return { success: false, message: "Ocurrió un error al verificar el usuario." };
    }
};




// export const verificarUsuario = (email, password) => {
//     if (!email || !password) {
//         return { success: false, message: "Todos los campos son obligatorios." };
//     }

//     const usuarioValido = users.some(usuario => usuario.email === email && usuario.password === password);

//     if (usuarioValido) {
//         return { success: true, message: "Inicio de sesión exitoso." };
//     } else {
//         return { success: false, message: "Credenciales incorrectas." };
//     }
// };


