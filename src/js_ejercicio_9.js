import "../sass/main.scss"

const input = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiarCompletadas");
const lista = document.getElementById("listaTareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function renderizarTareas() {
    lista.innerHTML = "";
    tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completada");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;
    checkbox.addEventListener("change", () => {
        tareas[index].completada = checkbox.checked;
        guardarTareas();
        renderizarTareas();
    });

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;

    li.appendChild(checkbox);
    li.appendChild(texto);
    lista.appendChild(li);
    });
}

botonAgregar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") return;
    tareas.push({ texto, completada: false });
    input.value = "";
    guardarTareas();
    renderizarTareas();
});

botonLimpiar.addEventListener("click", () => {
    tareas = tareas.filter(tarea => !tarea.completada);
    guardarTareas();
    renderizarTareas();
});

renderizarTareas();