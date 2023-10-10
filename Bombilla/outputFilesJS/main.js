"use strict";
// Boton on off + options + encender apagar bombilla
const btnoff = document.querySelector("#boff");
const options = document.querySelector("#options");
const btnon = document.querySelector("#bon");
const ioff = document.querySelector("#bomoff");
const ion = document.querySelector("#bomon");
btnoff.addEventListener("click", () => {
    options.style.display = "block";
    btnon.style.display = "block";
    btnoff.style.display = "none";
    ioff.style.display = "none";
    ion.style.display = "block";
});
btnon.addEventListener("click", () => {
    options.style.display = "none";
    btnon.style.display = "none";
    btnoff.style.display = "block";
    ioff.style.display = "block";
    ion.style.display = "none";
});
// Hacer zoom y nivel de luz
const rz = document.querySelector("#rzoom");
const rl = document.querySelector("#rlevel");
rz.addEventListener("input", () => {
    const escalar = 1 / rz.value;
    ion.style.transform = `scale(${escalar})`;
    ioff.style.transform = `scale(${escalar})`;
});
rl.addEventListener("input", () => {
    const opacidad = 1 / rl.value;
    ion.style.opacity = opacidad;
});
// Hacer que la imagen rote
const rr = document.querySelector("#rrot");
rr.addEventListener("input", () => {
    const rotacion = rr.value;
    ion.style.transform = `rotate(${rotacion}deg)`;
    ioff.style.transform = `rotate(${rotacion}deg)`;
});
