const prompt = require('prompt-sync')();
let anio = prompt("Introduce tu edad de nacimiento: ");
let mes = prompt("Introduce tu mes de nacimiento (enero, febrero, etc.): ").toLowerCase();
let dia = prompt("Introduce tu día de nacimiento: ");

let valido = true;
if (mes == "enero") {
    mes = 0;
} else if (mes == "febrero") {
    mes = 1;
} else if (mes == "marzo") {
    mes = 2;
} else if (mes == "abril") {
    mes = 3;
} else if (mes == "mayo") {
    mes = 4;
} else if (mes == "junio") {
    mes = 5;
} else if (mes == "julio") {
    mes = 6;
} else if (mes == "agosto") {
    mes = 7;
} else if (mes == "septiembre") {
    mes = 8;
} else if (mes == "octubre") {
    mes = 9;
} else if (mes == "noviembre") {
    mes = 10;
} else if (mes == "diciembre") {
    mes = 11;
} else {
    console.log("Mes no válido");
    valido = false;
}
if (valido) {
    let fecha = new Date(anio, mes, dia);
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    console.log(`Tu fecha de nacimiento cae en: ${dias[fecha.getDay()]}`);
}