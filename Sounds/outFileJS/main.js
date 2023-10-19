"use strict";
// piano
const btnP = document.getElementById("piano");
const pianoAudio = document.getElementById("audioP");
let reproduciendoP = false;
btnP.addEventListener("click", () => {
    if (reproduciendoP) {
        pianoAudio.pause();
        reproduciendoP = false;
    }
    else {
        pianoAudio.setAttribute("src", "sonidos/piano.mp3");
        pianoAudio.play();
        reproduciendoP = true;
    }
});
// bateria
const btnB = document.getElementById("bateria");
const bateriaAudio = document.getElementById("audioB");
let reproduciendoB = false;
btnB.addEventListener("click", () => {
    if (reproduciendoB) {
        bateriaAudio.pause();
        reproduciendoB = false;
    }
    else {
        bateriaAudio.setAttribute("src", "sonidos/bateria.mp3");
        bateriaAudio.play();
        reproduciendoB = true;
    }
});
// guitarra acustica
const btnG = document.getElementById("guitarra");
const guitarraAudio = document.getElementById("audioG");
let reproduciendoG = false;
btnG.addEventListener("click", () => {
    if (reproduciendoG) {
        guitarraAudio.pause();
        reproduciendoG = false;
    }
    else {
        guitarraAudio.setAttribute("src", "sonidos/guitarra.mp3");
        guitarraAudio.play();
        reproduciendoG = true;
    }
});
