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


/* console.log(estudiantes); */

/* estudiantes.forEach(estudiante =>{
    console.log(estudiante);
}) */

/* const estudiantesAr = estudiantes.filter(estudiante => estudiante.pais === 'ar');

console.log(estudiantesAr); */

const nombreEstudiantes = estudiantes.map(estudiante => estudiante.nombre);

console.log(nombreEstudiantes);

//Map para hacer transformaciones
//Filter para filtrar
//Find para buscar la primera ocurrencia
//forEach para recorrer