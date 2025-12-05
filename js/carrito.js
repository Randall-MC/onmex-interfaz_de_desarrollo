"use strict";
import { productos } from "./productos.js";
// Definir la arrow function "agregarAlCarrito()"
export const agregarAlCarrito = (frutaID) => {
  // Validar que `frutaID` tenga un valor mayor a 0. De ser verdadero, buscar en el array `productos` la fruta con ese id utilizando el método `find()`
  if (frutaID > 0) {
    // Guarda el valor en una constante, valida que el tipo de dato no sea `undefined` y agrega el objeto `producto` al array `carritoFrutas`
    const fruta = productos.find((producto) => producto.id === frutaID);
    carritoFrutas.push(fruta);
    // Agregar la función `almacenarCarrito()` dentro de la función `agregarAlCarrito()` para que, por cada producto que se agrega en `carritoFrutas`, se guarde en "localStorage"
    almacenarCarrito();
  }
};

// //////////////////////////////////////////////////
// API 3
// Crear la función `almacenarCarrito()`. Esta debe validar que `carritoFrutas` posee al menos un elemento. De ser así, guardar el contenido en "localStorage".
// Reto: Intentar utilizar el operador lógico AND (&&) para validar si `carritoFrutas` contiene al menos un elemento
const almacenarCarrito = () => {
  // Solution 1 - if
  // if (carritoFrutas.length) {
  //   localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
  // }
  // Solution 2 - AND (short circuiting)
  carritoFrutas.length &&
    localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas));
};
// Crear la función `recuperarCarrito()` que recupere la información guardada en "localStorage" y la devuelva, si la clave no existe entonces deberá retornar un array vacío. Puedes usar el operador OR (||) para hacer la comprobación
const recuperarCarrito = () => {
  return JSON.parse(localStorage.getItem("carritoFrutas")) || [];
};
// Mueve la constante `carritoFrutas` después de la función `recuperarCarrito()` y reemplaza el valor de array vacío por el llamado a la función `recuperarCarrito()`
// Crear el arreglo "carritoFrutas"
export const carritoFrutas = recuperarCarrito();
