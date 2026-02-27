const prompt = require('prompt-sync')();
let radio = prompt("Introduce el radio (en cm) de un círculo: ");

let area = Math.PI * Math.pow(radio, 2);

console.log("El valor de su área es: " + area+" cm²");