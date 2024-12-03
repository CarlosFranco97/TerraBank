const usuarios = [
    { email: "usuario1@terra.com", password: "123456" },
    { email: "usuario2@terra.com", password: "contraseña123" },
];

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
