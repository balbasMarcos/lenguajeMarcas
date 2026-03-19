const prompt = require('prompt-sync')();
let num = prompt("Introduce un número entero: ");


if(num %2 == 0){
    console.log(`El número ${num} es par`);
}else{
    console.log(`El número ${num} es impar`);
}