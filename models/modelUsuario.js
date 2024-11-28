export const usuarios = [
    { email: "usuario1@terra.com", password: "123456" },
    { email: "usuario2@terra.com", password: "contraseña123" },
];

export const validarUsuario = (email, password) => {
    return usuarios.some(usuario => usuario.email === email && usuario.password === password);
};
