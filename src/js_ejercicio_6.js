import "../sass/main.scss"



let horas = 0;
let minutos = 0;
let segundos = 0;

let temporizador;

const reloj = document.getElementById("reloj");
const botonIniciar = document.getElementById("iniciar");
const botonPausar = document.getElementById("pausar");
const botonReiniciar = document.getElementById("reiniciar");

function actualizarReloj() {
    const h = String(horas).padStart(2, "0");
    const m = String(minutos).padStart(2, "0");
    const s = String(segundos).padStart(2, "0");
    reloj.textContent = `${h}:${m}:${s}`;
}


function contar() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;
    }
    actualizarReloj();
    temporizador = setTimeout(contar, 1000);
}


document.getElementById("iniciar").addEventListener("click", () => {
    contar();
});

document.getElementById("pausar").addEventListener("click", () => {
    clearTimeout(temporizador);
    temporizador = null;
});

document.getElementById("reiniciar").addEventListener("click", () => {
    clearTimeout(temporizador);
    temporizador = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarReloj();
});