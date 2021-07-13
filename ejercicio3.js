const guardarTexto = require('./escribirArchivo');

const estudiantes = [
    {
        id:1,
        nombre: "Eduardo",
        pais: "ar",
        comidaFavorita: ['hamburguesa','asado', 'malteadas'],
        edad: 20
    },
    {
        id:2,
        nombre: "Magdalena",
        pais: "ar",
        comidaFavorita: ['hamburguesa','helado'],
        edad: 18
    },
    {
        id:3,
        nombre: "Dany",
        pais: "co",
        comidaFavorita: ['asado', 'malteadas'],
        edad: 30
    },
    {
        id:4,
        nombre: "Luciano",
        pais: "ar",
        comidaFavorita: ['hamburguesa'],
        edad: 22
    }
];

const nombres = estudiantes.map(estudiante => estudiante.nombre);

nombres.forEach(nombre =>{
    guardarTexto(nombre, 'nombresEstudiantes.txt');
})