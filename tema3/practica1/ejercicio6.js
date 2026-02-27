const prompt = require('prompt-sync')();
let numChicos = prompt("Introduce el número de chicos en clase: ");
let numChicas = prompt("Introduce el número de chicas en clase: ");

let porcentajeChicos = (parseFloat(numChicos) / (parseFloat(numChicos) + parseFloat(numChicas))) * 100;
let porcentajeChicas = (parseFloat(numChicas) / (parseFloat(numChicos) + parseFloat(numChicas))) * 100;

console.log("Hay un " + porcentajeChicos + "% de chicos");
console.log("Hay un " + porcentajeChicas + "% de chicas");