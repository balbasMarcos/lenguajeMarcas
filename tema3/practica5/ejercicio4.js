const prompt = require('prompt-sync')();



let valido = true;
while (valido) {
    let opcion = prompt("1.\t Seno,\n2.\t Coseno,\n3.\t Tangente\nElije una: ");
    
    let angulo = prompt("Introduce el angulo en grados: ");
    switch (opcion) {
        case "1": console.log(`El seno de ${angulo} es ${Math.sin(angulo)}`);
            break;
        case "2": console.log(`El seno de ${angulo} es ${Math.cos(angulo)}`);
            break;
        case "3": console.log(`El seno de ${angulo} es ${Math.tan(angulo)}`);
            break;
    }
}
