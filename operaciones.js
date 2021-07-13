const suma = (x , y) =>{
    return x + y;
};

const resta = (x , y) =>{
    return x - y;
};

const multi = (x , y) =>{
    return x * y;
};

const divi = (x , y) =>{
    return x / y;
};

/* module.exports = suma; */

module.exports = {
    suma: suma,
    resta: resta,
    multiplicacion: multi,
    division: divi
};