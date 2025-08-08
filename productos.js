// Función asíncrona para cargar y mostrar productos desde un archivo JSON
async function cargarProductos() {

    // 1. Obtenemos el contenedor donde se mostrarán los productos
    const contenedorProductos = document.getElementById('contenedor-productos');

    // 2. Obtenemos el elemento <template> que servirá como base para cada producto
    const nodo = document.getElementById('producto-template');

    try {
        // 3. Realizamos la solicitud al archivo productos.json usando fetch
        const response = await fetch('index-productos.json');

        // 4. Convertimos la respuesta en un array de objetos JavaScript
        //    Sugerencia: si solo necesitas validar la respuesta antes de procesar,
        //    puedes usar response.ok para verificar el estado HTTP.
        const productos = await response.json();

        // 5. Limpiamos el contenido previo del contenedor para evitar duplicados
        //    Sugerencia: si quieres conservar lo anterior, omite esta línea.
        contenedorProductos.innerHTML = '';

        // 6. Recorremos el array de productos
        //    Sugerencia: este forEach se podría reemplazar por un for...of si se prefiere.
        productos.forEach(producto => {

            // 6.1. Clonamos el contenido del template para crear una nueva tarjeta de producto
            const templateProduct = nodo.content.cloneNode(true);

            // ====== Asignar datos del producto ======

            // Imagen del producto
            const img = templateProduct.querySelector('.producto-img');
            img.src = producto.imagen;             // Ruta de la imagen
            img.alt = producto.altImagen;          // Texto alternativo para accesibilidad
            img.srcset = producto.srcsetImagen;    // Versiones de imagen para diferentes resoluciones

            // Información del producto
            templateProduct.querySelector('.producto-titulo').textContent = producto.titulo;
            templateProduct.querySelector('.producto-descripcion').textContent = producto.descripcion;
            templateProduct.querySelector('.producto-precio').textContent = producto.precio;
            templateProduct.querySelector('.producto-cantidad').textContent = producto.cantidad;

            // 6.2. Insertamos el producto ya completo en el DOM
            contenedorProductos.appendChild(templateProduct);
        });

    } catch (error) {
        // Manejo de errores: se ejecuta si ocurre algún problema con fetch o al procesar el JSON
        // Sugerencia: se podría mostrar un mensaje en el HTML para informar al usuario.
        console.error("Error al cargar los productos:", error);
    }
}

// Ejecutamos la función para mostrar los productos al cargar la página
cargarProductos();
