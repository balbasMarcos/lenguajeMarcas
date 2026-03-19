const prompt = require('prompt-sync')();
let texto = prompt("Introduce una cadena de texto: ");
let posicion = prompt("Introduce una posición de dicha cadena (1 es la primera letra izquierda): ");

if (posicion < 1 || posicion > texto.length) {
    console.log("ERROR: Posición no válida");
} else {
    console.log(`El carácter en la posición ${posicion} es ${texto.charAt(posicion - 1)}`);
}
