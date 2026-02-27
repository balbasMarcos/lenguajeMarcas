const prompt = require('prompt-sync')();
let num1 = prompt("Introduce el primer número decimal: ");
let num2 = prompt("Introduce el segundo número decimal: ");

let suma = parseFloat(num1) + parseFloat(num2);
let resta = parseFloat(num1) - parseFloat(num2);
let multiplicacion = parseFloat(num1) * parseFloat(num2);
let division = parseFloat(num1) / parseFloat(num2);

console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
console.log("La resta de " + num1 + " y " + num2 + " es: " + resta);
console.log("La multiplicación de " + num1 + " y " + num2 + " es: " + multiplicacion);
console.log("La división de " + num1 + " y " + num2 + " es: " + division);
