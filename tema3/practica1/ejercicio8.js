const prompt = require('prompt-sync')();
let dineroTotal = prompt("Introduce la cantidad a repartir de manera directamente proporcional: ");
let cant1 = prompt("Introduce la primera cantidad entre la que repartir.: ");
let cant2 = prompt("Introduce la segunda cantidad entre la que repartir.: ");
let cant3 = prompt("Introduce la tercera cantidad entre la que repartir.: ");

const constProporcionalidad = parseFloat(dineroTotal) / (parseFloat(cant1) + parseFloat(cant2) + parseFloat(cant3));

let parte1 = constProporcionalidad * parseFloat(cant1);
let parte2 = constProporcionalidad * parseFloat(cant2);
let parte3 = constProporcionalidad * parseFloat(cant3); 


console.log("La parte correspondiente a la primera cantidad es: " + parte1);
console.log("La parte correspondiente a la segunda cantidad es: " + parte2);
console.log("La parte correspondiente a la tercera cantidad es: " + parte3);