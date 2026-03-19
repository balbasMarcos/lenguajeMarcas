const prompt = require('prompt-sync')();
let num = prompt("Introduce un número real: ");

if(num > 0){
    console.log(`El número ${num} es positivo`);
}else if(num < 0){
    console.log(`El número ${num} es negativo`);
}else{
    console.log(`El número ${num} es cero`);
}