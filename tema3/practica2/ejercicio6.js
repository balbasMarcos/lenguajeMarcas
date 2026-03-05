const prompt = require('prompt-sync')();
let texto = prompt('Introduce tu nombre y apellidos separados por espacios: ').toLowerCase().replace(" ",".").replace(" ",".")+"@al.colegiosangabriel.com";

console.log("Tu correo electronico es " + texto);
