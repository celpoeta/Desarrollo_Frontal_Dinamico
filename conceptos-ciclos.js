console.log("\n=========== CICLO FOR ===========");

// Ciclo FOR → Lo usamos cuando sabemos cuántas veces queremos repetir algo.
const limiteNumeros = 10;

for (let contador = 1; contador <= limiteNumeros; contador++) {
    console.log("Número:", contador); // Imprime del 1 al 10
}

console.log("\n=========== CICLO FOR OF ===========");

// Ciclo FOR OF → Sirve para recorrer ARRAYS o STRINGS de forma sencilla.
let listaDeFrutas = ["Manzana", "Banana", "Naranja", "Fresa", "Kiwi", "Mango", "Papaya"];

for (let fruta of listaDeFrutas) {
    console.log(`Fruta: ${fruta}`); // Recorre cada fruta del array
}

// También podemos recorrer cada caracter de un STRING
let nombreEstudiante = "Caled Flores";

for (let caracter of nombreEstudiante) {
    console.log(`Caracter: ${caracter}`);
}

console.log("\n=========== CICLO FOR IN ===========");

// Ciclo FOR IN → Sirve para recorrer las PROPIEDADES de un OBJETO.
let listaDeCompras = {
    manzanas: 5,
    bananas: 10,
    naranjas: 8,
    fresas: 12,
    carneDeRes: "2 lb"
};

for (let producto in listaDeCompras) {
    console.log(`Producto: ${producto} - Cantidad: ${listaDeCompras[producto]}`);
}

// 🔍 Acceder directamente a propiedades de un objeto
console.log("Fresas:", listaDeCompras.fresas);
console.log("Carne de Res:", listaDeCompras.carneDeRes);

console.log("\n=========== CICLO WHILE ===========");

// Ciclo WHILE → Se ejecuta MIENTRAS la condición sea verdadera.
let cajaDeGalletas = 0;

while (cajaDeGalletas > 0) {
    console.log(`Me comí una galleta, quedan ${cajaDeGalletas--} galletas en la caja`);
}

// Nota: En este caso el ciclo no se ejecutará porque la condición es falsa desde el inicio.

console.log("\n=========== CICLO DO WHILE ===========");

// Ciclo DO WHILE → Se ejecuta AL MENOS UNA VEZ, aunque la condición sea falsa.
let contrasenaCorrecta = "12345";
let contrasenaIngresada;

do {
    // En Node.js prompt no funciona de forma nativa. Esto funciona solo en navegador.
    contrasenaIngresada = prompt("Ingresa la contraseña:");

    if (contrasenaIngresada !== contrasenaCorrecta) {
        console.log("Contraseña incorrecta, intenta de nuevo.");
    } else {
        console.log("Contraseña correcta, acceso concedido.");
    }
} while (contrasenaIngresada !== contrasenaCorrecta);
