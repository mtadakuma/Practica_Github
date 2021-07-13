const fs = require('fs'); //filesystem

const guardarTexto = (texto, nombreArchivo) => {
    fs.appendFileSync(nombreArchivo,`${texto}\n`);
}

module.exports = guardarTexto;