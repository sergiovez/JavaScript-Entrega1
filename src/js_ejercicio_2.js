import "../sass/main.scss"


let botonClicks = document.getElementById("botonClicks");
let contadorClicks = document.getElementById("contadorClicks");
let contadorActual = 0;

console.log(contadorActual);

botonClicks.addEventListener('click',()=>{
    contadorActual += 1;
    contadorClicks.textContent = "Clicks: " + contadorActual;
    console.log(contadorActual);
})
