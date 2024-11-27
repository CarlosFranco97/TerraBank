
const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío automático del formulario


    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();


    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';


    let isValid = true;

    if (!email) {
        document.getElementById('emailError').textContent = 'El email es obligatorio.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Ingrese un email válido.';
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'La contraseña es obligatoria.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        isValid = false;
    }

 
    if (isValid) {
     
        importarControladorYValidar(email, password);
    }
});


function importarControladorYValidar(email, password) {
 
    console.log('Validando usuario...', { email, password });


    alert('Validación simulada: inicio de sesión procesado.');
}
