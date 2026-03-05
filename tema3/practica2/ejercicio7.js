const prompt = require('prompt-sync')();
let texto = prompt("Introduce una cadena de texto formada por tres palabras en minúsculas: ");
posicion1 = texto.charAt(0);
posicion2 = texto.indexOf(" ", posicion1+1)+1;
posicion3 = texto.lastIndexOf(" ")+1;

texto =  texto.charAt(posicion1).toUpperCase()+texto.substring(1, posicion2)+texto.charAt(posicion2).toUpperCase()+texto.substring(posicion2+1, posicion3)+texto.charAt(posicion3).toUpperCase()+texto.substring(posicion3+1);

console.log("La cadena de texto con la primera letra de cada palabra en mayúscula es: " + texto);