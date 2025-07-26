console.log("\n=========== OPERADORES DE COMPARACIÓN ===========")

// Declaración de variables para las pruebas
let numeroDiez = 10;
let numeroVeinte = 20;
let stringDiez = "10"; // <- ojo: es un string, no un número
let esEstudiante = true;

// == (Compara solo el valor, ignora el tipo)
console.log("numeroDiez == stringDiez:", numeroDiez == stringDiez)
// true → porque compara solo el valor (10 == "10")

// === (Compara valor y tipo)
console.log("numeroDiez === stringDiez:", numeroDiez === stringDiez)
// false → porque uno es número y el otro string

// '!=' (Diferente en valor)
console.log("numeroDiez != stringDiez:", numeroDiez != stringDiez)
// false → porque 10 y "10" son iguales en valor

// '!==' (Diferente en valor o tipo)
console.log("numeroDiez !== stringDiez:", numeroDiez !== stringDiez)
// true → porque son de diferente tipo

// '!==' (con número idéntico)
console.log("numeroDiez !== 10:", numeroDiez !== 10)
// false → porque son iguales en valor y tipo

// < (Menor que)
console.log("numeroDiez < numeroVeinte:", numeroDiez < numeroVeinte)

// > (Mayor que)
console.log("numeroDiez > numeroVeinte:", numeroDiez > numeroVeinte)

// <= (Menor o igual que)
console.log("numeroDiez <= stringDiez:", numeroDiez <= stringDiez)

// >= (Mayor o igual que)
console.log("numeroDiez >= numeroVeinte:", numeroDiez >= numeroVeinte)

console.log("\n=========== OPERADORES LÓGICO AND (&&) ===========")
// AND (&&) → Solo devuelve true si ambas condiciones son true
console.log("numeroDiez === stringDiez && numeroDiez === numeroVeinte:", numeroDiez === stringDiez && numeroDiez === numeroVeinte)

console.log("\n=========== OPERADORES LÓGICO OR (||) ===========")
// OR (||) → Devuelve true si al menos una condición es true
console.log("numeroDiez <= stringDiez || numeroDiez >= numeroVeinte:", numeroDiez <= stringDiez || numeroDiez >= numeroVeinte)

console.log("\n=========== OPERADORES NOT (!) ===========")
// NOT (!) → Invierte el resultado de la condición
console.log("!(numeroDiez != stringDiez && numeroDiez == stringDiez):", !(numeroDiez != stringDiez && numeroDiez == stringDiez))
console.log("!esEstudiante:", !esEstudiante)

console.log("\n=========== CONDICIONAL IF ===========")
let edad = 18;

if (edad >= 18) {
    console.log("Es Mayor de Edad")
}

console.log("\n=========== CONDICIONAL IF/ELSE ===========")
if (edad >= 18) {
    console.log("Es Mayor de Edad")
} else {
    console.log("Es Menor de Edad")
}

console.log("\n=========== CONDICIONAL IF/ELSE IF ===========")
// Excelente (90 - 100), muy bueno (80 - 89), bueno (70 - 79), reprobado (0 - 69)

// En Node.js reemplaza prompt por un valor fijo:
let nota = 85; // <-- en navegador se usa prompt("Ingrese una nota entre 0 y 100:")

if (nota >= 90 && nota <= 100) {
    console.log("Obtuvo una excelente nota de:", nota)
} else if (nota >= 80 && nota <= 89) {
    console.log("Obtuvo una muy buena nota de:", nota)
} else if (nota >= 70 && nota <= 79) {
    console.log("Obtuvo una buena nota de:", nota)
} else if (nota >= 0 && nota <= 69) {
    console.log("REPROBADO CON:", nota)
} else {
    console.log("La nota que ingresó no es válida, el rango permitido es de 0 - 100")
}

console.log("\n=========== CONDICIONAL SWITCH ===========")
// Switch evaluando rangos usando true
switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("Obtuvo una excelente nota de:", nota)
        break;
    case (nota >= 80 && nota <= 89):
        console.log("Obtuvo una muy buena nota de:", nota)
        break;
    case (nota >= 70 && nota <= 79):
        console.log("Obtuvo una buena nota de:", nota)
        break;
    case (nota >= 0 && nota <= 69):
        console.log("REPROBADO CON:", nota)
        break;
    default:
        console.log("La nota que ingresó no es válida, el rango permitido es de 0 - 100")
}