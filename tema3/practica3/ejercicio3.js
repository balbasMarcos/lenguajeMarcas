const prompt = require('prompt-sync')();
let dias = prompt("Introduce un número de días: ");


let fechaActual = new Date();
let mes = fechaActual.getMonth() + 1;
dias = dias + fechaActual.getDate();
switch(mes){
    case 2:
        if(dias > 28){
            mes++;
            dias = 1;
        }

        break;
    case 1,3,5,7,8,10,12:
        if(dias > 31){
            mes++;
            dias = 1;
        }
        break;
    default:
        if(dias > 30){
            mes++;
            dias = 1;
        }
}
console.log("dias restantes " + dias + " mes " + mes+ " año " + fechaActual.getFullYear());