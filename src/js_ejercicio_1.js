import "../sass/main.scss"


let botonColor = document.getElementById("botonColor");

botonColor.addEventListener('click',()=>{
    document.body.style.backgroundColor = cambioColor();
})

function cambioColor() {
    let red = Math.floor((Math.random())*255);
    let green = Math.floor((Math.random())*255);
    let blue = Math.floor((Math.random())*255);
    return `rgb(${red}, ${green}, ${blue})`; 
}
