const prompt = require('prompt-sync')();
let texto = prompt('Introduce tu nombre y apellidos separados por espacios: ');
texto = texto.toLowerCase().replace(/ /g, ".")+"@al.colegiosangabriel.com";
console.log("Tu correo electronico es " + texto);
