const operaciones = require('./operaciones');
const guardarTexto = require('./escribirArchivo');


guardarTexto(('7 X 4 = ' + operaciones.multiplicacion(7,4)),'log.txt');
guardarTexto(('10 - 4 = ' + operaciones.resta(10,4)),'log.txt');
guardarTexto(('15 / 3 = ' + operaciones.division(15,3)),'log.txt');
