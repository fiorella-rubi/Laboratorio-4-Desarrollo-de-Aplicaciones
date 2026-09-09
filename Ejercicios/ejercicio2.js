const estudiantes = [
    { nombre: "Andrea", nota: 17 },
    { nombre: "Carlos", nota: 11 },
    { nombre: "Lucía", nota: 19 },
    { nombre: "Mateo", nota: 8 },
    { nombre: "Valeria", nota: 14 }
];

const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres:", nombres);

const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 13);
console.log("Nota >= 13:", aprobados);

const lucia = estudiantes.find(estudiante => estudiante.nombre === "Lucía");
console.log("Estudiante encontrado:", lucia);

const promedio = estudiantes.reduce(
    (total, estudiante) => total + estudiante.nota,
    0
) / estudiantes.length;
console.log("Promedio general:", promedio);

const desaprobados = estudiantes.filter(estudiante => estudiante.nota < 11);
console.log("Cantidad de desaprobados:", desaprobados.length);

const estudiantesConEstado = estudiantes.map(estudiante => {
    return {
        nombre: estudiante.nombre,
        nota: estudiante.nota,
        estado: estudiante.nota >= 11 ? "Aprobado" : "Desaprobado"
    };
});
console.log("Estudiantes con estado:", estudiantesConEstado);
