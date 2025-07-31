let cajaDeZapatos = 'Tenis';
// console.log(cajaDeZapatos);

// Lo NO permitido
let cdz = 'Tenis'
let cdzapatos = 'Tenis'
let x = 'Tenis'

// Lo permitido
let primerCajaDeZapatos = 'Tenis'
let urlCajaDeZapatos = 'http://zapatos.com/tenis'
// console.log(urlCajaDeZapatos);
let idDeZapatos = '12345'


// ----------------------------------------------
// TEMA 1: Tipos de datos primitivos
// ----------------------------------------------
let nombre = 'Caled Flores'; // String
let edad = 25; // Number
let precio = 19.99; // Number (decimal)
let activo = false; // Boolean
let pais; // Undefined
let sinValor = null; // Null

console.log("=========== TIPOS DE DATOS PRIMITIVOS ===========");
console.log("Caja de Zapatos:", cajaDeZapatos);
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Activo?:", activo);
console.log("País:", pais); // undefined
console.log("Sin valor (null):", sinValor);

// ----------------------------------------------
// TEMA 2: Números grandes y BigInt
// ----------------------------------------------
let numeroGrande = 9007199254740991;

console.log("\n=========== NÚMEROS SIN BigInt ===========");
console.log("Número + 1:", numeroGrande + 1);
console.log("Número + 2:", numeroGrande + 2);

let numeroGigante = 9007199254740991n;

console.log("\n=========== NÚMEROS CON BigInt ===========");
console.log("BigInt + 1n:", numeroGigante + 1n);
console.log("BigInt + 2n:", numeroGigante + 2n);

// ----------------------------------------------
// TEMA 3: Symbol
// ----------------------------------------------
let token = Symbol('usuario');

console.log("\n=========== SYMBOL ===========");
console.log("Token (Symbol):", token.toString());

// ----------------------------------------------
// TEMA 4: Tipos de datos complejos
// ----------------------------------------------
let persona = {
    nombre: 'Caled',
    edad: 25,
    esEstudiante: false,
    pais: 'Honduras',
    adrress: {
        calle: '123 Calle Principal',
        ciudad: 'Tegucigalpa',
        pais: 'Honduras'
    }
};

let misColoresFavoritos = ["Negro", "Morado", "Blanco"];

console.log("\n=========== DATOS COMPLEJOS ===========");
console.log("Persona:", persona);
console.log("Colores favoritos:", misColoresFavoritos);

// ----------------------------------------------
// TEMA 5: Funciones
// ----------------------------------------------
function saludar(nombre) {
    console.log("Hola " + nombre);
}

console.log("\n=========== FUNCIONES ===========");
saludar('Caled Flores');

// ----------------------------------------------
// TEMA 6: Manipulación de Strings
// ----------------------------------------------
let string1 = "Hola mundo";
let string2 = 'JavaScript es genial';
let string3 = `${nombre} desde una comilla invertida`;
let string4 = nombre + ' desde una comilla invertida';
let string5 = '    Hola Mundo   ';

console.log("\n=========== STRINGS ===========");
console.log("Texto original:", string2);
console.log("Longitud:", string2.length);
console.log("Minúsculas:", string2.toLowerCase());
console.log("Mayúsculas:", string2.toUpperCase());
console.log("Substring (0,10):", string2.substring(0, 10));
console.log("Texto con espacios:", `"${string5}"`);
console.log("Texto sin espacios:", `"${string5.trim()}"`);

// ----------------------------------------------
// TEMA 7: Operadpores aritméticos
// ----------------------------------------------
let suma = 5 + 3;
let resta = 10 - 2;
let multiplicacion = 4 * 2;
let division = 20 / 4;
let numberDecimal = 0.3 + 0.15;
let totalNumber = numberDecimal.toFixed(2)

// ----------------------------------------------
// TEMA 8: Operadpores avanzados
// ----------------------------------------------
let modulo = 8 % 3;
let potencia = 2 ** 3;
let mathsqrt = Math.sqrt(16)


console.log("\n=========== OPERADORES ARITMÉTICOS Y AVANZADOS ===========");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Potencia:", potencia);
console.log("Raíz cuadrada:", mathsqrt);
console.log("Número decimal:", numberDecimal);
console.log("Número decimal con dos decimales:", totalNumber);

// ----------------------------------------------
// TEMA 9: Javascript como lenguaje débilmente tipado
// ----------------------------------------------
let variableEdad = 25;
console.log("\n=========== TIPADO DÉBIL ===========");
console.log("Edad original:", variableEdad, "Tipo:", typeof variableEdad);
variableEdad = "25"; // Cambiando a string
console.log(`Edad modificada: ${variableEdad} Tipo: ${typeof variableEdad}`);

// ----------------------------------------------
// TEMA 10: Typecasting
// ----------------------------------------------
sumaDeEdades = variableEdad + edad // "25" + 25
console.log("\n=========== TYPECASTING ===========");
console.log("Type casting implicito:")
console.log("Suma de edades (string + number):", sumaDeEdades, "Tipo:", typeof sumaDeEdades)
console.log("\nType casting explicito:")
let edadString = "25"
let sumaDeEdadComoNumero = Number(edadString) + 25; // 25 + 25
console.log("Suma de edades (string convertido a number):", sumaDeEdadComoNumero)

let nombreSplit = nombre.split(' ') // ["Caled", "Flores"]
console.log("Nombre dividido en partes:", nombreSplit);
console.log("Primer nombre:", nombreSplit[0]);
console.log("Primer apellido:", nombreSplit[1]);