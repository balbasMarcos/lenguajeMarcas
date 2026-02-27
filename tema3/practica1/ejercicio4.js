const prompt = require('prompt-sync')();
let ancho = prompt("Introduce el ancho (en cm) de un rectángulo: ");
let alto = prompt("Introduce el alto (en cm) de un rectángulo: ");

let area = ancho * alto;

console.log("El valor de su área es: " + area+" cm²");