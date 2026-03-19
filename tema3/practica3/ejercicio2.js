const prompt = require('prompt-sync')();
let year = prompt("Introduce el año de la fecha futura ");
let mes = prompt("Introduce el mes numérico de la fecha futura (0 para enero, 1 para febrero,...): ");
let dia = prompt("Introduce el día de la fecha futura: ");
fechaActual = new Date();
fechaFutura = new Date(year, mes, dia);
let restantes = Math.floor(((year - fechaActual.getFullYear())*365) + (mes - fechaActual.getMonth())*30 + (dia - fechaActual.getDate()));
console.log("dias restantes " + restantes);