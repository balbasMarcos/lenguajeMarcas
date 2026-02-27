const prompt = require('prompt-sync')();
let base = prompt("Introduce un número entero como base de la potencia: ");
let exponente = prompt("Introduce un número entero como exponente de la potencia: ");

let potencia = Math.pow(base, exponente);

console.log(base + " elevado a " + exponente + " = " + potencia);