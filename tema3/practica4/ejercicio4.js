const prompt = require('prompt-sync')();
let nota = prompt("Introduce una calificación del 0 al 10: ");


if(nota > 10 || nota <0){

    console.log("Número no válido");
}else if(nota == 10){
    console.log("Tu calificación se corresponde con un: Matrícula de Honor");
}else if(nota >= 9){
    console.log("Tu calificación se corresponde con un: Sobresaliente");
}else if(nota >= 7){
    console.log("Tu calificación se corresponde con un: Notable");
}else if(nota >= 6){
    console.log("Tu calificación se corresponde con un: Bien");
}else if(nota >= 5){
    console.log("Tu calificación se corresponde con un: Aprobado");
}else{
    console.log("Tu calificación se corresponde con un: Suspenso");
}