function calcularVenta(precio, cantidad) {
  precio = Number(precio);
  cantidad = Number(cantidad);

  if ( Number.isNaN(precio) || Number.isNaN(cantidad) ) {
    return "Debe ingresar valores numéricos";
  }

  if (precio <= 0 || cantidad <= 0) {
    return "Datos no válidos";
  }

  return precio * cantidad;
}

console.log( calcularVenta("abc", 3) );