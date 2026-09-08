// 1. Primero la función (de la Parte 4)
function calcularVenta(precio, cantidad) {
  precio = Number(precio);
  cantidad = Number(cantidad);

  if (Number.isNaN(precio) || Number.isNaN(cantidad)) {
    throw new Error("Precio y cantidad deben ser numéricos");
  }

  if (precio <= 0 || cantidad <= 0) {
    throw new Error("Los valores deben ser mayores que cero");
  }

  return precio * cantidad;
}

// 2. Luego las pruebas de la Parte 6
try {
  const total = calcularVenta("abc", 3);
  console.log("Prueba 1 - Total:", total);
} catch (error) {
  console.error("Prueba 1 - Error:", error.message);
} finally {
  console.log("Prueba 1 - finally: Proceso de venta finalizado");
}

try {
  const total = calcularVenta(100, 3);
  console.log("Prueba 2 - Total:", total);
} catch (error) {
  console.error("Prueba 2 - Error:", error.message);
} finally {
  console.log("Prueba 2 - finally: Proceso de venta finalizado");
}