const formularioRegistro = document.getElemenById('formularioRegistro').value;
const inputs = document.querySelectorAll('#formularioRegistro input');

inputs.forEach((input) =>{
  input.addEventListener('keyup');
})