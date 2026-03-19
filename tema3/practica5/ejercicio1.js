const prompt = require('prompt-sync')();
let num = prompt("Introduce un número entero: ");


switch(num % 2){
    case 0:
        console.log(`El número ${num} es par`);
        break;
    default:
        console.log(`El número ${num} es impar`);
        break;
}