"use strict";
import { productos } from "./productos.js";
// Crear el arreglo "carritoFrutas"
const carritoFrutas = [];
// Definir la arrow function "agregarAlCarrito()"
export const agregarAlCarrito = (frutaID) => {
  // Validar que `frutaID` tenga un valor mayor a 0. De ser verdadero, buscar en el array `productos` la fruta con ese id utilizando el método `find()`
  if (frutaID > 0) {
    // Guarda el valor en una constante, valida que el tipo de dato no sea `undefined` y agrega el objeto `producto` al array `carritoFrutas`
    const fruta = productos.find((producto) => producto.id === frutaID);

    carritoFrutas.push(fruta);
  }
};
