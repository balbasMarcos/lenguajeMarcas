const prompt = require('prompt-sync')();
let texto = prompt('Introduce una cadena de texto en la que aparezca tres veces la palabra ‘mesa’:');
let posicion1 = texto.indexOf("mesa");
let posicion2 = texto.indexOf("mesa", posicion1 + 1);
let posicion3 = texto.indexOf("mesa", posicion2 + 1);

console.log("La primera aparición de la palabra ‘mesa’ se encuentra en la posición: " + posicion1);
console.log("La segunda aparición de la palabra ‘mesa’ se encuentra en la posición: " + posicion2);
console.log("La tercera aparición de la palabra ‘mesa’ se encuentra en la posición: " + posicion3);

