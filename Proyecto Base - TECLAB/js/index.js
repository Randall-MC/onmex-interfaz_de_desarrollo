"use-strict";
// //////////////////////////////////////////////////
// API 1
// Importa el array "productos" en el archivo "productos.js"
import { productos } from "./productos.js";
// Limpiar el contenido actual de "div.container"
const contenedor = document.querySelector(".container");
contenedor.innerHTML = "";
// Crear la función "retornarCardHTML" que recibe como parámetro un objeto y que devuelva un bloque HTML (card)
const retornarCardHTML = function (producto) {
  const card = `<div class="card">
  <div class="card-image">${producto.imagen}</div>
  <div class="card-name">${producto.nombre}</div>
  <div class="card-price">${producto.precio}</div>
  <div class="card-button">
  <button
  class="button button-outline button-add"
  id="card-$"
  title="Clic para agregar al carrito"
  >
  +
  </button>
  </div>
  </div>`;
  return card;
};
// Crear la función "cargarProductos" que recibe un como parámetro un arreglo, que itera cada elemento en el array y llama a la función "retornarCardHTML" para agregar cada elemento al DOM dentro de "div.container"
const cargarProductos = function (productos) {
  for (let producto of productos) {
    const card = retornarCardHTML(producto);
    contenedor.insertAdjacentHTML("beforeend", card);
  }
};
// Se ejecuta la función cuando el documento HTML está completamente analizado
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(productos);
});
