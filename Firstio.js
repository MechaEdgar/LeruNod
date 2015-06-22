var fs = require('fs');
var nombre = process.argv[2];
archivo = fs.readFileSync(nombre);
contenidos = file.toString();
console.log(contenidos.split('\n').length -1)
