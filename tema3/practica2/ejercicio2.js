const prompt = require('prompt-sync')();
let texto = prompt('Ingrese un texto: ');

console.log("Tu cadena de texto tiene " + texto.length + " caracteres.");

let posicion = prompt("Introduce una posición de dicha cadena (1 es la primera letra izquierda):");

console.log("El carácter en la posición " + posicion + " es: " + texto.charAt(posicion - 1));