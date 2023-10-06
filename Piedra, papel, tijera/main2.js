const opciones = ['piedra', 'papel', 'tijera'];

let partidasGanadas = 0;
let partidasGanadasPC = 0;

function juego(usuarioChoice){
    const eleccionUsuario = usuarioChoice;
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (eleccionUsuario == eleccionComputadora) {
        resultado = "¡Empate!";
    } else if(
        (eleccionUsuario == "piedra" && eleccionComputadora == "tijera") |
        (eleccionUsuario == "papel" && eleccionComputadora == "piedra") |
        (eleccionUsuario == "tijera" && eleccionComputadora == "papel")) 
        {
            resultado = "¡Has ganado!";
            incrementarContador(); 
        } else {
            resultado = "¡Has perdido!";
            incrementarContadorPC();
        }   
    
        document.querySelector("#resultado").innerHTML = `Has escogido ${eleccionUsuario}, PC ha escogido ${eleccionComputadora}. ${resultado}`;
    }

document.querySelector("#piedra").addEventListener("click", function(){ juego("piedra")});
document.querySelector("#papel").addEventListener("click", function(){juego("papel")});
document.querySelector("#tijeras").addEventListener("click", function(){juego("tijera")});

function incrementarContador() {
    partidasGanadas++;
    document.getElementById('contador').textContent = partidasGanadas;
}
function incrementarContadorPC(){
    partidasGanadasPC++;
    document.getElementById('contadorPC').textContent = partidasGanadasPC;
}
