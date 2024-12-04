import { verificarUsuario } from "../../../controllers/controllerLogin.js";

const loginForm = document.querySelector(".formularioInicioSesion");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", async(event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const resultado = await verificarUsuario(email, password);


    if (resultado.success) {
        alert(resultado.message);
        window.location.href = '/index.html' 
    } else {
        alert(resultado.message);
    }
});
