/* variables pregunta uno */
const arrowOpenSectionOne = document.getElementById('flechaSeccionUnoID');
const containerOneQuestions = document.getElementById('divPreguntasFrecuentesUno');
const containerResponseOne = document.getElementById('contenedorRespuestaUnoID');
/* variables pregunta dos */
const arrowOpenSectionTwo = document.getElementById('flechaSeccionDosID');
const containerTwoQuestions = document.getElementById('divPreguntasFrecuentesDos');
const containerResponseTwo = document.getElementById('contenedorRespuestaDosID');

/* variables pregunta tres */
const arrowOpenSectionThree = document.getElementById('flechaSeccionTresID');
const containerThreeQuestions = document.getElementById('divPreguntasFrecuentesTres');
const containerResponseThree = document.getElementById('contenedorRespuestaTresID');


/* abrir pregunta uno */
arrowOpenSectionOne.addEventListener('click', () => {
    if (arrowOpenSectionOne.classList.toggle('clicked')) {
        containerOneQuestions.classList.add('abrirPreguntaFrecuente');
        containerResponseOne.classList.add('abrirContenedorRespuesta');
        arrowOpenSectionOne.classList.add('flechaClick');
    } else {
        containerOneQuestions.classList.remove('abrirPreguntaFrecuente');
        containerResponseOne.classList.remove('abrirContenedorRespuesta');
        arrowOpenSectionOne.classList.remove('flechaClick');
    }
});

/* abrir pregunta dos */
arrowOpenSectionTwo.addEventListener('click', () => {
    if (arrowOpenSectionTwo.classList.toggle('clicked')) {
        containerTwoQuestions.classList.add('abrirPreguntaFrecuente');
        containerResponseTwo.classList.add('abrirContenedorRespuesta');
        arrowOpenSectionTwo.classList.add('flechaClick');
    } else {
        containerTwoQuestions.classList.remove('abrirPreguntaFrecuente');
        containerResponseTwo.classList.remove('abrirContenedorRespuesta');
        arrowOpenSectionTwo.classList.remove('flechaClick');
    }
});

/* abrir pregunta tres */
arrowOpenSectionThree.addEventListener('click', () => {
    if(arrowOpenSectionThree.classList.toggle('clicked')){
        containerThreeQuestions.classList.add('abrirPreguntaFrecuente');
        containerResponseThree.classList.add('abrirContenedorRespuesta');
        arrowOpenSectionThree.classList.add('flechaClick');

    } else {
        containerThreeQuestions.classList.remove('abrirPreguntaFrecuente');
        containerResponseThree.classList.remove('abrirContenedorRespuesta');
        arrowOpenSectionThree.classList.remove('flechaClick');
    }
})



