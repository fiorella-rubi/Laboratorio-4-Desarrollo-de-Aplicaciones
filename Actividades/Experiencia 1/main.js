console.log("JavaScript desde un archivo externo");

const nombreProducto = "Teclado mecánico";
let precio = 180;
let stock = 5;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(stock);
console.log(disponible);

console.log(typeof nombreProducto);
console.log(typeof precio);
console.log(typeof stock);
console.log(typeof disponible);

precio = "180";
console.log(typeof precio);

if (stock > 0) {
    var mensaje = "Producto disponible"; 
    let unidades = stock;
    console.log(mensaje);
    console.log(unidades);
}
console.log(mensaje); 

console.log(cantidad);
var cantidad = 10;
console.log(cantidad);
let descuento = 20;

const nombreCliente = "Andrea";
const cantidadProductos = 3;
const precioUnitario = 120;

const importe = cantidadProductos * precioUnitario;

console.log("Cliente: " + nombreCliente);
console.log("Cantidad: " + cantidadProductos);
console.log("Precio unitario: " + precioUnitario);
console.log("Importe: " + importe);
