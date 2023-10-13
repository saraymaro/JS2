// botones pantalla verde
function movegreen(action) {
    var elem = document.getElementById("myBarG");
    var width = parseInt(elem.style.width) || getRandomG(30, 60);

    if (action === "increment") {
        width += 10;
    } else if (action === "decrement") {
        width -= 10;
    }

    if (width > 100) {
        width = 100;
    } else if (width < 0) {
        width = 0;
    }

    elem!.style.width = width + '%';

    // Cambiar el color de fondo en función del rango de valores
    if (width >= 0 && width <= 30) {
        elem!.style.backgroundColor = 'red';
    } else if (width > 30 && width <= 60) {
        elem!.style.backgroundColor = 'orange';
    } else if (width > 60) {
        elem!.style.backgroundColor = 'green';
    }
}
function getRandomG(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById("brocoli")!.addEventListener("click", function () {
    movegreen("increment");
});
movegreen(null, Math.floor(Math.random() * 31) + 30);

document.getElementById("pollo")!.addEventListener("click", function () {
    movegreen("increment");
});

document.getElementById("chuche")!.addEventListener("click", function () {
    movegreen("decrement");
});
// botones pantalla amarilla
function moveyellow(action) {
    const elem = document.getElementById("myBarY");
    var width = parseInt(elem.style.width) || getRandomY(30, 60); // Generar valor aleatorio entre 30 y 60

    if (action == "increment") {
        width += 10;
    } else if (action == "decrement"){
        width -= 10;
    }
    if (width > 100) {
        width = 100;
    } else if (width < 0) {
        width = 0;
    }
    elem.style.width = width + "%";
    if (width >= 0 && width <= 30) {
        elem.style.backgroundColor = "red";
    } else if (width > 30 && width < 60){
        elem.style.backgroundColor = "orange";
    } else if (width > 60) {
        elem.style.backgroundColor = "green";
    }
}

function getRandomY(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("deberes").addEventListener("click", function () {
    moveyellow("increment");
})
document.getElementById("amistad").addEventListener("click", function (){
    moveyellow("increment");
})
document.getElementById("burla").addEventListener("click", function (){
    moveyellow("decrement");
})
// botones pantalla roja
function movered(action) {
    const elem = document.getElementById("myBarR");
    var width = parseInt(elem.style.width) || 0;

    if (action == "increment") {
        width += 10;
    } else if (action == "decrement"){
        width -= 10;
    }
    if (width > 100) {
        width = 100;
    } else if (width < 0) {
        width = 0;
    }
    elem!.style.width = width + "%";
    if (width >= 0 && width <= 30) {
        elem!.style.backgroundColor = "red";
    } else if (width > 30 && width < 60){
        elem!.style.backgroundColor = "orange";
    } else if (width > 60) {
        elem!.style.backgroundColor = "green";
    }
}

document.getElementById("futbol")!.addEventListener("click", function () {
    movered("increment");
})
document.getElementById("ducha")!.addEventListener("click", function (){
    movered("increment");
})
document.getElementById("game")?.addEventListener("click", function (){
    movered("decrement");
})
// botones pantalla azul
function moveblue(action) {
    const elem = document.getElementById("myBarB");
    var width = parseInt(elem.style.width) || 0;

    if (action == "increment") {
        width += 10;
    } else if (action == "decrement"){
        width -= 10;
    }
    if (width > 100) {
        width = 100;
    } else if (width < 0) {
        width = 0;
    }
    elem!.style.width = width + "%";
    if (width >= 0 && width <= 30) {
        elem!.style.backgroundColor = "red";
    } else if (width > 30 && width < 60){
        elem!.style.backgroundColor = "orange";
    } else if (width > 60) {
        elem!.style.backgroundColor = "green";
    }
}
document.getElementById("dormir")!.addEventListener("click", function () {
    moveblue("increment");
})
document.getElementById("cuento")!.addEventListener("click", function (){
    moveblue("increment");
})
document.getElementById("enfado")?.addEventListener("click", function (){
    moveblue("decrement");
})
// barra felicidad
function calcularFelicidad() {
    const alimentacion = parseInt(document.getElementById("myBarG")!.style.width) || 0;
    const colegio = parseInt(document.getElementById("myBarY")!.style.width) || 0;
    const casa = parseInt(document.getElementById("myBarR")!.style.width) || 0;
    const noche = parseInt(document.getElementById("myBarB")!.style.width) || 0;

    // Puedes ajustar esta fórmula según tus necesidades
    const felicidad = (alimentacion + colegio + casa + noche) / 4;

    return felicidad;
}

function updateHappiness() {
    const felicidad = calcularFelicidad();
    const felicidadBar = document.getElementById("myBarP")!;
    felicidadBar.style.width = felicidad + "%";
    felicidadBar.style.backgroundColor = getColorForHappiness(felicidad);
}

function getColorForHappiness(felicidad) {
    if (felicidad >= 0 && felicidad <= 30) {
        return "red";
    } else if (felicidad > 30 && felicidad < 60) {
        return "orange";
    } else {
        return "green";
    }
}

// Llama a la función para actualizar la felicidad cuando cambia una de las otras barras
document.getElementById("brocoli")!.addEventListener("click", updateHappiness);
document.getElementById("pollo")!.addEventListener("click", updateHappiness);
document.getElementById("chuche")!.addEventListener("click", updateHappiness);
document.getElementById("deberes")!.addEventListener("click", updateHappiness);
document.getElementById("amistad")!.addEventListener("click", updateHappiness);
document.getElementById("burla")!.addEventListener("click", updateHappiness);
document.getElementById("futbol")!.addEventListener("click", updateHappiness);
document.getElementById("ducha")!.addEventListener("click", updateHappiness);
document.getElementById("game")!.addEventListener("click", updateHappiness);
document.getElementById("dormir")!.addEventListener("click", updateHappiness);
document.getElementById("cuento")!.addEventListener("click", updateHappiness);
document.getElementById("enfado")!.addEventListener("click", updateHappiness);

function updateHappiness() {
    const felicidad = calcularFelicidad();
    const felicidadBar = document.getElementById("myBarP");
    felicidadBar.style.width = felicidad + "%";
    felicidadBar.style.backgroundColor = getColorForHappiness(felicidad);

    // Verifica si la felicidad es mayor del 50% y cambia la imagen del niño
    const ninoImage = document.getElementById("tama");
    if (felicidad > 50) {
        ninoImage.src = "img/saludo.png"; // Cambia la imagen del niño
    } else {
        ninoImage.src = "img/niño.png"; // Restaura la imagen original si la felicidad es 50% o menos
    }
}





// REVISAR RANDOM PRINCIPIO



// prueba DnD
// let isDragging = false;
//     let clickEvent;

//     function performAction(event) {
//       if (isDragging) {
//         // Simular un evento de clic si se soltó después de arrastrar
//         document.getElementById('chuche').dispatchEvent(clickEvent);
//         isDragging = false;
//       } else {
//         // Realizar la funcionalidad de clic normal
//         alert('Función al hacer clic');
//       }
//     }

//     function dragStart(event) {
//       isDragging = true;

//       // Simular un evento de clic en caso de que se suelte después de arrastrar
//       clickEvent = new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//         view: window
//       });
//     }

//     document.getElementById('tama-container').addEventListener('dragover', function (event) {
//       event.preventDefault();
//     });

//     document.getElementById('tama-container').addEventListener('drop', function (event) {
//       event.preventDefault();
//       let data = event.dataTransfer.getData('text/plain');
//       let element = document.getElementById(data);

//       // Restaurar la posición del botón al soltarlo
//       element.style.top = '0px';
//       element.style.left = '0px';

//       event.target.appendChild(element);
//       performAction(event); // Ejecutar la funcionalidad al soltarlo en la imagen
//     }