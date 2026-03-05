const prompt = require('prompt-sync')();
let texto = prompt('Introduce una cadena de texto:');
let posicion1 = prompt("Introduce una posición inicial (1 es la primera letra izquierda):");
let posicion2 = prompt("Introduce una posición final (1 es la primera letra izquierda):");

console.log("La subcadena de texto de "+texto+" entre la posicion inical: "+posicion1+" y la posicion final: "+posicion2+" es: " + texto.substring(posicion1 - 1, posicion2));


