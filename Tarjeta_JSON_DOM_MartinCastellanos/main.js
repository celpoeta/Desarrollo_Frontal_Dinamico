async function cargarDatos() {
    try {
        const respuesta = await fetch('datos.json');
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.status);
        }
        const datos = await respuesta.json();

        // Obtiene el template y lo clona para crear una nueva tarjeta
        const template = document.getElementById('card-template');
        const clone = template.content.cloneNode(true); // Clona el contenido del template
        const card = clone.querySelector('.card'); // Selecciona el div principal de la tarjeta

        // Llena los campos de la tarjeta con los datos del JSON
        card.querySelector('.card-img-top').src = datos.foto; // Foto de perfil
        card.querySelector('h2').textContent = datos.nombre; // Nombre
        card.querySelector('.rol').textContent = datos.rol; // Rol
        card.querySelector('.pais').textContent = datos.pais; // País
        card.querySelector('.descripcion').textContent = datos.descripcion; // Descripción

        const redesDiv = card.querySelector('.card-social');
        datos.redes.forEach(red => {
            const a = document.createElement('a');
            a.href = red.url;
            a.className = 'social-link';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.title = red.nombre;
            a.setAttribute('aria-label', red.nombre);

            const img = document.createElement('img');
            img.src = red.icono;
            a.appendChild(img);
            redesDiv.appendChild(a);
        });

        document.body.appendChild(card);
    }
    catch (error) {
        console.error('Error al cargar los datos:', error);
        alert('No se pudieron cargar los datos. Por favor, inténtalo de nuevo más tarde.');
    }
}

document.addEventListener('DOMContentLoaded', cargarDatos);