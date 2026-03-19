const prompt = require('prompt-sync')();
let year = prompt("Introduce tu año de nacimiento: ");
let mes = prompt("Introduce tu mes de nacimiento (0 para enero, 1 para febrero,...): ");
let dia = prompt("Introduce tu día de nacimiento: ");

let dias = ["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

let fecha = new Date(year, mes-1, dia);
console.log("Naciste un " + dias[fecha.getDay()]);