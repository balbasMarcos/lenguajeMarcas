const prompt = require('prompt-sync')();
let dineroTotal = prompt("Introduce la cantidad a repartir de manera inversamente proporcional: ");
let cant1 = prompt("Introduce la primera cantidad entre la que repartir: ");
let cant2 = prompt("Introduce la segunda cantidad entre la que repartir: ");
let cant3 = prompt("Introduce la tercera cantidad entre la que repartir: ");

const constProporcionalidad = parseFloat(dineroTotal) / (1/parseFloat(cant1) + 1/parseFloat(cant2) + 1/parseFloat(cant3));

let parte1 = constProporcionalidad * (1/parseFloat(cant1));
let parte2 = constProporcionalidad * (1/parseFloat(cant2));
let parte3 = constProporcionalidad * (1/parseFloat(cant3)); 


console.log("A la cantidad " + cant1 + " le corresponde: " + parte1);
console.log("A la cantidad " + cant2 + " le corresponde: " + parte2);
console.log("A la cantidad " + cant3 + " le corresponde: " + parte3);