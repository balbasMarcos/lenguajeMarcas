const prompt = require('prompt-sync')();
console.log("Piensa un número… multiplícalo por 3, después súmale al resultado 6, a continuación divide todo entre 2 y finalmente resta uno.")
let numPensado = prompt("Dime el resultado obtenido de las operaciones anteriores: ");

let numOriginal = (2 * numPensado - 4) / 3;
console.log("El número que pensaste inicialmente es: " + numOriginal);
