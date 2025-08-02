// Capturamos los elementos del HTML usando su id
const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");

// Cambiamos el contenido del título apenas carga el script
titulo.textContent = "Hola mundo desde JavaScript";

// Agregamos un evento al botón
// addEventListener → escucha la acción del usuario (click, mouseover, etc.)
boton.addEventListener("click", () => {
    // ✅ Cuando el usuario hace clic en el botón:
    titulo.textContent = "¡Has hecho clic en el botón!";
    parrafo.textContent = "¡Gracias por interactuar!";
});
