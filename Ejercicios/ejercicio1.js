function calcularEnvio(peso, tipo = "normal") {
    peso = Number(peso);

    if (Number.isNaN(peso) || peso <= 0) {
        throw new Error("El peso ingresado no es válido");
    }

    let costoBase;

    if (peso <= 2) {
        costoBase = 8.00;
    } else if (peso <= 5) {
        costoBase = 12.00;
    } else {
        costoBase = 18.00;
    }

    let costoFinal = costoBase;

    if (tipo === "express") {
        costoFinal = costoBase * 1.40;
    }

    return {
        peso: peso,
        tipo: tipo,
        costoBase: costoBase,
        costoFinal: costoFinal
    };
}


console.log(calcularEnvio(1.5));


console.log(calcularEnvio(4, "express"));

try {
    console.log(calcularEnvio(-3));
} catch (error) {
    console.error("Error:", error.message);
}
