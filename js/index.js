"use-strict";
// //////////////////////////////////////////////////
// API 1
// Importa el array "productos" en el archivo "productos.js"
import { productos } from "./productos.js";
import { agregarAlCarrito } from "./carrito.js";
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
  id="${producto.id}"
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
    // LLamar a la función `activarClickEnBotones()` al final de la función `cargarProductos()`, posterior a iterar y armar todas las Cards HTML
  }
  activarClickEnBotones();
};
// Se ejecuta la función cuando el documento HTML está completamente analizado
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos(productos);
});

// //////////////////////////////////////////////////
// API 2
// Actualizar los productos para que tengan la estructura `id, imagen, nombre, precio`
// Crear el archivo `carrito.js`. Este archivo compartirá información con el archivo `index.html` y el archivo `checkout.html`

// Agregar un evento "click" masivo sobre todos los botones que conforman las Cards HTML. Crea la arrow function `activarClickEnBotones()`
const activarClickEnBotones = () => {
  // Define la constante `botonesAgregar` que enlace a la colección de elementos `<button class=".button .button-outline .button-add"></button>`
  const botonesAgregar = document.querySelectorAll(
    "button.button.button-outline.button-add"
  );
  // Valida que el tipo de dato de la constante no sea `null`
  if (botonesAgregar === null) return console.error("Error");
  // Iterar sobre la colección de elementos, agregar un "eventListener" para el evento "click". Utiliza como callback el objeto global Event y ante cada click llama a la función `agregarCarrito()` pasándole como parámetro el `target.id` existente en el objeto global Event
  for (let botonAgregar of botonesAgregar) {
    botonAgregar.addEventListener("click", (e) => {
      agregarAlCarrito(parseInt(e.target.id));
    });
  }
};
