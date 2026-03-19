const prompt = require('prompt-sync')();
let num = prompt("Introduce un número entero del 1 al 7: ");

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

switch(num){
    case "1":
        console.log(`El día ${num} es ${dias[0]}`);
        break;
    case "2":
        console.log(`El día ${num} es ${dias[1]}`);
        break;
    case "3":
        console.log(`El día ${num} es ${dias[2]}`);
        break;
    case "4":
        console.log(`El día ${num} es ${dias[3]}`);
        break;
    case "5":
        console.log(`El día ${num} es ${dias[4]}`);
        break;
    case "6":
        console.log(`El día ${num} es ${dias[5]}`);
        break;
    case "7":
        console.log(`El día ${num} es ${dias[6]}`);
        break;
    default:
        console.log("Número no válido");
}