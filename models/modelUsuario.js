// Archivo: modelUsuario.js


export function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
}


export function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}


export function generarUsuarios() {
    const usuariosEjemplo = [
        { email: 'usuario1@terra.com', password: 'password123' },
        { email: 'usuario2@terra.com', password: 'securepass456' },
    ];
    guardarUsuarios(usuariosEjemplo);
}


export function validarUsuario(email, password) {
    const usuarios = obtenerUsuarios();
    return usuarios.some(user => user.email === email && user.password === password);
}


if (!obtenerUsuarios().length) {
    generarUsuarios();
}
