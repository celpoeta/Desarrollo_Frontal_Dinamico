// ========== MANIPULACIÓN DEL DOM ==========

// Accedemos a elementos HTML usando su ID
const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");

// Cambiamos el texto del título al cargar el script
titulo.textContent = "Hola mundo desde JavaScript";

// Agregamos un evento al botón para cambiar el contenido cuando se hace clic
boton.addEventListener("click", () => {
    titulo.textContent = "¡Has hecho clic en el botón!";
    parrafo.textContent = "¡Gracias por interactuar!";
});


// ========== CREACIÓN DE ELEMENTOS CON createElement y appendChild ==========

// Creamos un párrafo nuevo con createElement
const parrafoDos = document.createElement("p");
parrafoDos.textContent = "Este es un párrafo Dos creado desde JavaScript";

// Lo agregamos al contenedor en el HTML
document.getElementById("contenedor").appendChild(parrafoDos);


// Creamos múltiples párrafos usando un bucle for + createElement
for (let contador = 0; contador < 5; contador++) {
    const parrafo = document.createElement("p");
    parrafo.textContent = `Este es el párrafo número ${contador}`;
    document.getElementById("contenedor").appendChild(parrafo);
}


// ========== USO DE insertAdjacentHTML PARA INSERTAR CÓDIGO HTML DIRECTO ==========

// Otra forma de insertar contenido: usando insertAdjacentHTML (más directo)
for (let contador = 0; contador < 5; contador++) {
    const contenedor = document.getElementById("contenedor");
    const parrafoHTML = `<p>Este es el párrafo número ${contador}</p>`;
    contenedor.insertAdjacentHTML("beforeend", parrafoHTML);
}


// ========== USO DE FETCH PARA CARGAR DATOS DESDE UN ARCHIVO JSON ==========

// Creamos una función asíncrona para obtener productos desde productos.json
async function obtenerProductos() {
    try {
        // Hacemos la solicitud al archivo productos.json
        const response = await fetch("productos.json");

        // Usamos .json() para convertir el cuerpo (body) de la respuesta en un array JS
        // .json() NO guarda la respuesta, simplemente la transforma en algo utilizable
        const productos = await response.json();

        // Seleccionamos el contenedor donde se mostrarán los productos
        const contenedor = document.getElementById("contenedor");

        // forEach es otro tipo de ciclo en JavaScript.
        // Solo funciona con arrays.
        // Recorre cada elemento de la lista y ejecuta una función por cada uno.
        // También podríamos usar un ciclo for...of para hacer lo mismo:

        // Con forEach:
        productos.forEach(producto => {
            // Creamos una tarjeta por producto
            contenedor.insertAdjacentHTML("beforeend", `
                <li>
                    <strong>Nombre del Producto:</strong> ${producto.nombre}<br>
                    <strong>Precio:</strong> ${producto.precio}<br>
                    <strong>Cantidad:</strong> ${producto.cantidad}
                </li>
            `);
        });

        // Equivalente con for...of:
        /*
        for (let producto of productos) {
            contenedor.insertAdjacentHTML("beforeend", `
                <li>
                    <strong>Nombre del Producto:</strong> ${producto.nombre}<br>
                    <strong>Precio:</strong> ${producto.precio}<br>
                    <strong>Cantidad:</strong> ${producto.cantidad}
                </li>
            `);
        }
        */

    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

// Ejecutamos la función
obtenerProductos();
