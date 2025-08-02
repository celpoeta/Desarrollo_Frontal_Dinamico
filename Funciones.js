console.log("\n=========== FUNCIONES ===========");

// EJEMPLO SIN FUNCIÓN (no es eficiente)
let nombreDelEstudiante = "Caled Flores";
console.log(`Hola ${nombreDelEstudiante}, Bienvenido al curso de Desarrollo Frontal Dinámico.`);

let nombreDelEstudianteDos = "Sergio";
console.log(`Hola ${nombreDelEstudianteDos}, Bienvenido al curso de Desarrollo Frontal Dinámico.`);

let nombreDelEstudianteTres = "Adrian";
console.log(`Hola ${nombreDelEstudianteTres}, Bienvenido al curso de Desarrollo Frontal Dinámico.`);

console.log("\n=========== FUNCIONES DE DECLARACIÓN ===========");

// DEFINICIÓN DE UNA FUNCIÓN TRADICIONAL
function saludarEstudiante(nombre) {
    return `Hola, ${nombre} Bienvenido al curso de Desarrollo Frontal Dinámico.`;
}

// LLAMADA A LA FUNCIÓN
console.log(saludarEstudiante("Caled Flores"));
console.log(saludarEstudiante("Sergio"));
console.log(saludarEstudiante("Adrian"));

// FUNCIÓN RECORRIENDO UN ARRAY DE ESTUDIANTES
let listaDeEstudiantes = ["Caled Flores", "Sergio", "Adrian", "Ana", "Luis"];

function saludarEstudiantes(nombreDelEstudiante) {
    return `Hola, ${nombreDelEstudiante} Bienvenido al curso de Desarrollo Frontal Dinámico.`;
}

// Recorremos la lista y saludamos a cada uno
for (let estudiante of listaDeEstudiantes) {
    console.log(saludarEstudiantes(estudiante));
}

// FUNCIÓN ASIGNACIÓN (se guarda en una variable)
console.log("\n=========== FUNCIONES ASIGNACIÓN ===========");
const despedida = function (nombre) {
    return `Adiós, ${nombre} hasta la próxima.`;
};

// Llamamos la función para despedir a cada estudiante
for (let estudiante of listaDeEstudiantes) {
    console.log(despedida(estudiante));
}

console.log("\n=========== FUNCIONES FLECHA (Arrow Functions) ===========");

// prompt funciona solo en navegador (no en Node.js)
// Para probar en Node.js, usa un valor fijo:
let numeroParaMultiplicar = 5; // <- reemplaza prompt("Ingrese un número para multiplicar por 2:")

// ARROW FUNCTION CON RETURN EXPLÍCITO
const multiplicarPorDos = (numeroAMultiplicar) => {
    return numeroAMultiplicar * 2;
};

console.log(`El resultado de multiplicar por 2 es: ${multiplicarPorDos(numeroParaMultiplicar)}`);

// ARROW FUNCTION QUE MUESTRA RESULTADO CON alert()
const multiplicarPorDosAlert = (numeroAMultiplicar) => {
    return alert(`El resultado es: ${numeroAMultiplicar * 2}`);
};

// En navegador esto mostrará un alert, en Node.js NO funcionará
// multiplicarPorDosAlert(numeroParaMultiplicar);

// ARROW FUNCTION AÚN MÁS CORTA (return implícito)
let multiplicarPorTres = numeroAMultiplicar =>
    alert(`El resultado es: ${numeroAMultiplicar * 3}`);

// Solo navegador
// multiplicarPorTres(numeroParaMultiplicar);
