/* const funcionSuma = require('./operaciones'); */

/* console.log(funcionSuma(1,3)); */

const operaciones = require('./operaciones');

const operacion1 = operaciones.suma(1,2);
const operacion2 = operaciones.resta(1,2);
const operacion3 = operaciones.multiplicacion(1,2);
const operacion4 = operaciones.division(1,2);
console.log(operacion1);
console.log(operacion2);
console.log(operacion3);
console.log(operacion4);