/**
 * Modelo esperado de un producto (referencia para el equipo)
 * {
 *   id: string|number,
 *   nombre: string,
 *   precio: number,
 *   imagen: string,
 *   alt?: string,
 *   iconoCarrito?: string,
 *   altIconoCarrito?: string,
 *   descripcion?: string,
 *   galeria?: string[]
 * }
 */

// IDs de nodos usados frecuentemente (evita strings mágicos)
const ID_GRID_PRODUCTOS = "contenedor-productos";
const ID_template_CARD = "template-producto";
const ID_DETALLE = "detalle-producto";
const ID_template_DETALLE = "template-detalle-producto";

let catalogo = [];                         // Lista completa de productos
let indicePorId = new Map();               // Índice rápido: id -> producto

/**
 * Punto de entrada: carga datos, pinta tarjetas y activa la delegación de eventos.
 */
async function init() {
    await cargarProductos();
    renderizarTarjetas();
    activarDelegacionDeClicks();
}

/**
 * 1) Cargar productos y construir índice por id.
 * - Valida la respuesta HTTP.
 * - Convierte el JSON a objeto JS.
 * - Construye un Map para acceso O(1) por id.
 */
async function cargarProductos() {
    try {
        const response = await fetch("data/productos.json");
        const data = await response.json();

        catalogo = Array.isArray(data) ? data : [];
        // Creamos un "índice" de productos para búsquedas rápidas.
        //   - La clave (key) es el id del producto convertido a texto.
        //   - El valor (value) es el objeto producto completo.
        // Ejemplo práctico:
        //   Si catalogo = [{ id: 1, nombre: "Brocha" }, { id: 2, nombre: "Labial" }]
        //   entonces indicePorId.get("2") devolverá { id: 2, nombre: "Labial" }
        // Esto evita tener que recorrer todo el array para encontrar un producto.
        indicePorId = new Map(
            catalogo.map(producto => [String(producto.id), producto])
        );

    } catch (err) {
        console.error("No se pudieron cargar los productos:", err);
        catalogo = [];
        indicePorId = new Map();
    }
}

/**
 * 2) Renderizar tarjetas de producto en el grid.
 * - Clona el template por cada producto.
 * - Asigna atributos y textos.
 * - Inserta en el contenedor principal.
 */
function renderizarTarjetas() {
    const gridProductos = document.getElementById(ID_GRID_PRODUCTOS);
    const templateCardContent = document.getElementById(ID_template_CARD).content;

    // Limpia el contenedor antes de pintar
    gridProductos.innerHTML = "";

    for (const producto of catalogo) {
        const card = templateCardContent.cloneNode(true);

        // Enlace que abre el detalle. Usa hash fijo para :target en CSS.
        const enlaceDetalle = card.querySelector(".detalle-link");
        enlaceDetalle.href = "#product-detail";
        enlaceDetalle.dataset.id = String(producto.id); // se recupera luego en el click

        // Imagen de la tarjeta
        const imgProducto = card.querySelector(".imagen-producto");
        imgProducto.src = producto.imagen;
        imgProducto.alt = producto.alt || producto.nombre || "Producto";

        // Textos principales
        const precioEl = card.querySelector(".price");
        const tituloEl = card.querySelector(".title");
        precioEl.textContent = `$ ${Number(producto.precio).toFixed(2)}`;
        tituloEl.textContent = producto.nombre;

        // Icono de carrito (opcional)
        const iconoCarrito = card.querySelector(".icono-carrito");
        if (iconoCarrito) {
            iconoCarrito.src = producto.iconoCarrito || "";
            iconoCarrito.alt = producto.altIconoCarrito || "Agregar al carrito";
        }

        gridProductos.appendChild(card);
    }
}

/**
 * 3) Delegación de clicks:
 * - Escucha clicks en el grid para abrir detalle.
 * - Escucha clicks en el detalle para cerrar.
 */
function activarDelegacionDeClicks() {
    // Abrir detalle desde cualquier .detalle-link dentro del grid
    document.getElementById(ID_GRID_PRODUCTOS).addEventListener("click", (evt) => {
        const enlace = evt.target.closest(".detalle-link");
        if (!enlace) return;

        evt.preventDefault();
        const idProducto = enlace.dataset.id;
        renderizarDetalle(idProducto);
        // Cambia el hash para activar estilos con :target (CSS)
        location.hash = "product-detail";
    });

    // Cerrar detalle desde el botón dentro del aside
    document.getElementById(ID_DETALLE).addEventListener("click", (evt) => {
        if (evt.target.closest(".close-btn")) {
            evt.preventDefault();
            cerrarDetalle();
            // Limpia el hash sin recargar la página
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    });
}

/**
 * 4) Renderizar detalle del producto según su id.
 * - Reemplaza el contenido del contenedor de detalle.
 * - Construye dots del slider con base en la galería (o la imagen principal).
 */
function renderizarDetalle(idProducto) {
    const producto = indicePorId.get(String(idProducto));
    if (!producto) return;

    const hostDetalle = document.getElementById(ID_DETALLE);
    const templateDetalleContent = document.getElementById(ID_template_DETALLE).content;
    const detalle = templateDetalleContent.cloneNode(true);

    // Asignar un id estático para que :target funcione con el hash
    const aside = detalle.querySelector(".product-detail");
    aside.id = "product-detail";

    // Imagen principal
    const imgDetalle = detalle.querySelector(".detalle-img");
    imgDetalle.src = producto.imagen;
    imgDetalle.alt = producto.alt || producto.nombre || "Producto";

    // Dots del slider: siempre tres dots, el primero activo
    const dots = detalle.querySelector(".slider-dots");
    dots.innerHTML = ""; // Limpiamos cualquier contenido previo

    for (let contador = 1; contador <= 3; contador++) {
        const dot = document.createElement("span");
        // Operador ternario: un if simplificado para asignar la clase CSS.
        // Si contador === 1 → asigna "dot active", en caso contrario → asigna "dot".
        dot.className = (contador === 1) ? "dot active" : "dot";
        dots.appendChild(dot);
    }
    // Textos del detalle
    detalle.querySelector(".price").textContent = `$ ${Number(producto.precio).toFixed(2)}`;
    detalle.querySelector(".title").textContent = producto.nombre || "Producto";
    detalle.querySelector(".description").textContent = producto.descripcion || "Sin descripción disponible.";

    // Pintar el detalle
    hostDetalle.innerHTML = "";
    hostDetalle.appendChild(detalle);
}

/**
 * 5) Cerrar detalle.
 * - Limpia el contenedor de detalle.
 */
function cerrarDetalle() {
    document.getElementById(ID_DETALLE).innerHTML = "";
}

document.addEventListener("DOMContentLoaded", init);