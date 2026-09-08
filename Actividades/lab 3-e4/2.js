function calcularVenta(precio, cantidad) {
  precio = Number(precio);
  cantidad = Number(cantidad);

  if (precio <= 0 || cantidad <= 0) {
    return "Datos no válidos";
  }

  return precio * cantidad;
}

console.log( calcularVenta("100", "3") );
console.log( calcularVenta(-20, 3) );
console.log( calcularVenta(100, 0) );