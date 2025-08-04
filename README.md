
# Guía Explicativa del Archivo `productos.json`

---

## ¿Qué es este archivo?

El archivo `productos.json` contiene una **lista de productos** representados como objetos en formato JSON. Es comúnmente utilizado para:

- Cargar datos dinámicos en una web.
- Simular bases de datos.
- Realizar pruebas de visualización con JavaScript y el DOM.

---

## Estructura general del archivo

```json
[
  {
    "nombre": "Nombre del producto",
    "precio": 0,
    "cantidad": 0,
    "descripcion": "Descripción del producto",
    "categoria": "Categoría",
    "imagen": "ruta/imagen.jpg",
    "aplicaDescuento": true,
    "activo": true
  }
]
```

---

## Ejemplo de producto real

```json
{
  "nombre": "Laptop HP Pavilion 15",
  "precio": 1200,
  "cantidad": 5,
  "descripcion": "Laptop de alto rendimiento con procesador Intel Core i7.",
  "categoria": "Tecnología",
  "imagen": "img/laptop.jpg",
  "aplicaDescuento": true,
  "activo": true
}
```

---

## Explicación de cada campo

| Campo             | Tipo     | Descripción |
|------------------|----------|-------------|
| `nombre`         | String   | Nombre del producto. |
| `precio`         | Número   | Precio unitario del producto. |
| `cantidad`       | Número   | Cantidad disponible. |
| `descripcion`    | String   | Detalle o especificación del producto. |
| `categoria`      | String   | Categoría a la que pertenece. |
| `imagen`         | String   | Ruta local o URL de la imagen. |
| `aplicaDescuento`| Booleano | Si el producto tiene descuento (`true` o `false`). |
| `activo`         | Booleano | `true` el producto esta visible, `false` el producto esta oculto |

---

## Importante sobre JSON

> **JSON no permite comentarios** (`//` o `/* */`).  
> Por eso esta explicación se ofrece en un archivo `.md` separado.  
> Si agregagamos comentarios al archivo `.json`, no podrá ser leído correctamente por JavaScript o `fetch()`.

---

## Recomendaciones

- Puedes agregar más productos al archivo usando la misma estructura.
- Puedes aplicar filtros usando JavaScript (por categoría, estado, o descuento).
- Practica recorriendo los productos con `forEach` o `for...of`.

---

## Archivos relacionados

- `productos.json`: Contiene los datos reales.
- `app.js`: Contiene el código JavaScript que consume este archivo.
- `index.html`: Página que muestra los productos dinámicamente.
- `README.md`: Esta guía explicativa.

---

© Desarrollado para fines educativos – Curso de Desarrollo Frontal Dinámico UNITEC
