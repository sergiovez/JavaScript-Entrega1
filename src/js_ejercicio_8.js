import "../sass/main.scss"


const texto = document.getElementById("texto");
const caracteres = document.getElementById("caracteres");
const palabras = document.getElementById("palabras");

texto.addEventListener('input',()=>{
    let textoTotal = texto.value;

    const numeroPalabras = textoTotal.trim() === "" ? 0 : textoTotal.trim().split(/\s+/).length;
    const numeroCaracteres = textoTotal.trim().split(/\s+/).join().length;

    caracteres.textContent = "Caracteres: " + numeroCaracteres;
    palabras.textContent = "Palabras: " + numeroPalabras;
})