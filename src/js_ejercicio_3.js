import "../sass/main.scss"

const texto = document.getElementById("texto");
const botonAgregar = document.getElementById("botonAgregar");
const lista = document.getElementById("lista");

botonAgregar.addEventListener('click',()=>{
    const elemento = texto.value;
    if (elemento.trim() !== ""){
        const li = document.createElement('li');
        li.textContent = elemento;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'botonEliminar';
        botonEliminar.addEventListener('click',()=>{
            lista.removeChild(li);
        })

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        texto.value = "";
        texto.focus();

    }
})