import { verificarUsuario } from "../../../controllers/controllerUsuario.js";

const loginForm = document.querySelector(".loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const resultado = verificarUsuario(email, password);

    if (resultado.success) {
        alert(resultado.message);
        window.location.href = "../home.html"; 
    } else {
        alert(resultado.message);
    }
});
