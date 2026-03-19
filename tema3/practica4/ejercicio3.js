const prompt = require('prompt-sync')();
let num = prompt("Introduce un número entero del 1 al 7: ");

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if(num > 7 || num <1)
    console.log("Número no válido");
else{
    console.log("El día de la semana es " + dias[num-1]);
}