import "../sass/main.scss"


const texto = document.getElementById("texto");
const lista = document.getElementById("lista");
const items = lista.getElementsByTagName("li");

console.log(items);

texto.addEventListener('input',()=>{
    let palabra = texto.value;
    for (let elemento of items){
        if(elemento.innerHTML.startsWith(palabra)){
            elemento.style.display ="";
        }else{
            elemento.style.display ="none";
        };
    }
})