const miArray = ['🎲', '🎯', '👾', '👽', '👻', '🏓', '🕹', '🎱', '🪁'];
let currentIndex = 0;
const container = document.getElementById("array-container");

// añadir push derecha
function mostrarSiguienteD() {
    if (currentIndex < miArray.length) {
        const elemento = document.createElement("span");
        elemento.textContent = miArray[currentIndex];
        container.appendChild(elemento);
        currentIndex++;
    } else {
        container.textContent = "Fin";
    }
}
// añadir unshift izquirda
function mostrarSiguienteI() {
    if (currentIndex < miArray.length) {
        const elemento = document.createElement("span");
        elemento.textContent = miArray[currentIndex];

        if (container.firstChild){
            container.insertBefore(elemento, container.firstChild);
        }else{
            container.appendChild(elemento);
        }
        currentIndex++;
    } else {
        container.textContent ="Fin";
    }
}
// añadir donde indique el numero insert at
function añadirPorNum() {
    const posicionInput = document.getElementById("inputMas");
    const posicion = parseInt(posicionInput.value);
    if (!isNaN(posicion) && posicion >= 1 && posicion <= miArray.length + 1) {
        const elemento = document.createElement("span");
        elemento.textContent = miArray[currentIndex];
        container.insertBefore(elemento, container.childNodes[posicion -1]); 
        currentIndex++;
    } else {
        container.textContent = "Fin";
    }
}

// eliminar shift derecha
function eliminarActualD() {
    if (container.childNodes.length > 0) {
        container.removeChild(container.lastChild);
        currentIndex--;
    } else {
        currentIndex = 0;
        container.textContent = "Fin";
    }
}
// eleminar pop izquierda
function eliminarActualI() {
    if(container.childNodes.length > 0){
        container.removeChild(container.firstChild);
        currentIndex--;
    }else{
        currentIndex = 0;
        container.textContent = "Fin";
    }
}
// eliminar por el num del input con remove at
function eliminarPorNum() { 
    const posicionInput = document.getElementById("inputMenos");
    const posicion = parseInt(posicionInput.value);
    if (!isNaN(posicion) && posicion >= 1 && posicion <= miArray.length + 1) {
        container.removeChild(container.childNodes[posicion -1]); 
        currentIndex--;
        
    }else{
        currentIndex = 0;
        container.textContent = "Fin"
    }
}


document.querySelector("#btnPush").addEventListener("click", mostrarSiguienteD);

document.querySelector("#btnUnshift").addEventListener("click", mostrarSiguienteI);

document.querySelector("#btnInsertAt").addEventListener("click", añadirPorNum);

document.querySelector("#btnShift").addEventListener("click", eliminarActualD);

document.querySelector("#btnPop").addEventListener("click", eliminarActualI);

document.querySelector("#btnRemoveAt").addEventListener("click", eliminarPorNum);

window.addEventListener("DOMContentLoaded", miArray);
