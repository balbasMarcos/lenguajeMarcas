const prompt = require('prompt-sync')();
let nombre = prompt("¿Cuál es tu nombre? ");
let apell1 = prompt("¿Cuál es tu primer apellido? ");
let apell2 = prompt("¿Cuál es tu segundo apellido? ");
let edad = prompt("¿Qué edad tienes? ");
let peso = prompt("¿Cuánto kilos pesas? ");
let DNI = prompt("¿Cuál es tu número de dni (sin la letra)? ");
let letraDNI = prompt("¿Cuál es la letra de tu dni? ");

console.log("¡Hola " + nombre + " " + apell1 + " " + apell2 + ", tienes " + edad + " años, pesas " + peso + " kilos y tu DNI es " + DNI +"-"+ letraDNI+"!");