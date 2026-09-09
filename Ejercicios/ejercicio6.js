function registrarParticipante(nombre, edad, correo, tipo = "general") {
    edad = Number(edad);

    if (!nombre) {
        throw new Error("El nombre no puede estar vacío");
    }

    if (Number.isNaN(edad) || edad < 18) {
        throw new Error("La edad debe ser numérica y mayor o igual a 18");
    }

    if (!correo) {
        throw new Error("El correo no puede estar vacío");
    }

    if (tipo !== "general" && tipo !== "estudiante") {
        throw new Error('El tipo debe ser "general" o "estudiante"');
    }

    const costo = tipo === "estudiante" ? 30 : 50;

    return {
        nombre: nombre,
        edad: edad,
        correo: correo,
        tipo: tipo,
        costo: costo
    };
}

const participantes = [];

const datosParticipantes = [
    ["Andrea", 22, "andrea@correo.com", "estudiante"],
    ["Carlos", 30, "carlos@correo.com", "general"],
    ["Lucía", 19, "lucia@correo.com", "estudiante"],
    ["Mateo", 25, "mateo@correo.com", "general"],
    ["Valeria", 20, "valeria@correo.com", "estudiante"]
];

datosParticipantes.forEach(([nombre, edad, correo, tipo]) => {
    try {
        const participante = registrarParticipante(nombre, edad, correo, tipo);
        participantes.push(participante);
    } catch (error) {
        console.error("Error al registrar:", error.message);
    }
});

console.log("Participantes registrados:", participantes);

const estudiantes = participantes.filter(
    participante => participante.tipo === "estudiante"
);
console.log("Estudiantes:", estudiantes);

const nombresParticipantes = participantes.map(
    participante => participante.nombre
);
console.log("Nombres:", nombresParticipantes);

const totalRecaudado = participantes.reduce(
    (total, participante) => total + participante.costo,
    0
);
console.log("Total recaudado:", totalRecaudado);

const buscado = participantes.find(
    participante => participante.correo === "lucia@correo.com"
);
console.log("Participante encontrado:", buscado);

try {
    registrarParticipante("", 20, "sincorreo@correo.com");
} catch (error) {
    console.error("Error esperado:", error.message);
}
