function registrarProducto(nombre, precio, stock) {
  if (typeof nombre !== "string" || nombre.trim() === "") {
    throw new Error("El nombre del producto no puede estar vacío");
  }
  precio = Number(precio);
  stock = Number(stock);
  if (Number.isNaN(precio) || Number.isNaN(stock)) {
    throw new Error("Precio y stock deben ser valores numéricos");
  }
  if (precio <= 0) {
    throw new Error("El precio debe ser mayor que cero");
  }
  if (stock < 0) {
    throw new Error("El stock no puede ser negativo");
  }
  return { nombre: nombre, precio: precio, stock: stock };
}
try {
  const producto1 = registrarProducto("Laptop", 2500, 10);
  console.log("Prueba 1 - Producto registrado:", producto1);
} catch (error) {
  console.error("Prueba 1 - Error:", error.message);
}
try {
  const producto2 = registrarProducto("Mouse", -50, 20);
  console.log("Prueba 2 - Producto registrado:", producto2);
} catch (error) {
  console.error("Prueba 2 - Error:", error.message);
}
try {
  const producto3 = registrarProducto("Teclado", 80, -5);
  console.log("Prueba 3 - Producto registrado:", producto3);
} catch (error) {
  console.error("Prueba 3 - Error:", error.message);
}