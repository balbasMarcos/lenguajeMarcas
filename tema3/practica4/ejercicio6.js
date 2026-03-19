const prompt = require('prompt-sync')();
let texto = prompt("Introduce una cadena de texto: ");
let posInicial = prompt("Introduce una posición inicial (1 es la primera letra izquierda): ");
let posFinal = prompt("Introduce una posición final (1 es la primera letra izquierda): ");


if(posInicial < 1 || posInicial > texto.length || posFinal < 1 || posFinal > texto.length || posFinal < posInicial) {
    console.log("ERROR: Posiciones no válidas");
}else{
    console.log(`La subcadena ${texto} desde la posicion ${posInicial} hasta la posicion final ${posFinal} es ${texto.substring(posInicial - 1, posFinal)}`);
}
