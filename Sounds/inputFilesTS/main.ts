// piano
const btnP: any= document.getElementById("piano");
const pianoAudio: any = document.getElementById("audioP");
let reproduciendoP = false;
   
btnP.addEventListener("click", () => {
    if (reproduciendoP) {
        pianoAudio.pause();
        reproduciendoP = false;

    } else {
        pianoAudio.setAttribute("src", "sonidos/piano.mp3");
        pianoAudio.play();
        reproduciendoP = true;
    }
})

// bateria
const btnB: any = document.getElementById("bateria");
const bateriaAudio: any = document.getElementById("audioB")
let reproduciendoB = false;

btnB.addEventListener("click", () => {
    if (reproduciendoB) {
        bateriaAudio.pause();
        reproduciendoB = false;
    } else {
        bateriaAudio.setAttribute("src", "sonidos/bateria.mp3");
        bateriaAudio.play();
        reproduciendoB = true;
    }
})
// guitarra acustica
const btnG: any = document.getElementById("guitarra");
const guitarraAudio: any = document.getElementById("audioG")
let reproduciendoG = false;

btnG.addEventListener("click", () =>{
    if (reproduciendoG) {
        guitarraAudio.pause();
        reproduciendoG = false;
    } else {
        guitarraAudio.setAttribute("src", "sonidos/guitarra.mp3");
        guitarraAudio.play();
        reproduciendoG = true;
    }
})
// bajo
const btnBJ: any = document.getElementById("bajo");
const bajoAudio: any = document.getElementById("audioBJ");
let reproduciendoBJ = false;

btnBJ.addEventListener("click", ()=>{
    if (reproduciendoBJ) {
        bajoAudio.pause();
        reproduciendoBJ = false;
    } else {
        bajoAudio.setAttribute("src", "sonidos/bajo.mp3");
        bajoAudio.play();
        reproduciendoBJ = true;
    } 
})
// guitarra eléctrica
const btnGE: any = document.getElementById("gelectrica");
const gelectricaAudio: any = document.getElementById("audioGE")
let reproduciendoGE = false;

btnGE.addEventListener("click", ()=>{
    if (reproduciendoGE) {
        gelectricaAudio.pause();
        reproduciendoGE = false;
    } else {
        gelectricaAudio.setAttribute("src", "sonidos/guitarra-electrica.mp3");
        gelectricaAudio.play();
        reproduciendoGE = true;
    }
})