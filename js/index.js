"use-strict";
// //////////////////////////////////////////////////
// API 1
// Importa el array "productos" en el archivo "productos.js"
// import { productos } from "./productos.js";
import { agregarAlCarrito, carritoFrutas } from "./carrito.js";
// Limpiar el contenido actual de "div.container"
const contenedor = document.querySelector(".container");
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
const paginaActual = window.location.pathname;
document.addEventListener("DOMContentLoaded", () => {
  if (paginaActual.includes("index") || paginaActual === "/") {
    contenedor.innerHTML = "";
    obtenerProductos();
  }

  if (paginaActual.includes("checkout")) {
    tbody.innerHTML = "";
    cargarFila(carritoFrutas);
  }
});

// //////////////////////////////////////////////////
// API 2
// Actualizar los productos para que tengan la estructura `id, imagen, nombre, precio`
// Crear el archivo `carrito.js`. Este archivo compartirá información con el archivo `index.html` y el archivo `checkout.html`

// Agregar un evento "click" masivo sobre todos los botones que conforman las Cards HTML. Crea la arrow function `activarClickEnBotones()`
const activarClickEnBotones = () => {
  // Define la constante `botonesAgregar` que enlace a la colección de elementos `<button class=".button .button-outline .button-add"></button>`
  const botonesAgregar = document.querySelectorAll(".button-add");
  // Valida que el tipo de dato de la constante no sea `null`
  if (botonesAgregar === null) return console.error("Error");
  // Iterar sobre la colección de elementos, agregar un "eventListener" para el evento "click". Utiliza como callback el objeto global Event y ante cada click llama a la función `agregarCarrito()` pasándole como parámetro el `target.id` existente en el objeto global Event
  for (let botonAgregar of botonesAgregar) {
    botonAgregar.addEventListener("click", (e) => {
      agregarAlCarrito(parseInt(e.target.id));
    });
  }
};

// ////////////////////////////////////////////////
// Esto es de mi parte, no vi si en los videos de los módulos explicaban cómo cargar los productos en checkout.html
// Seleccionar el contenedor de los elementos
const tbody = document.querySelector("tbody");
// Función "crearFila" que recibe como parámetro un objeto y que devuelva un bloque HTML (fila)
const crearFila = function (producto) {
  const card = `<tr>
    <td>${producto.id}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>
      <img
        src="images/icon-fruits-64.png"
        width="24px"
      />
    </td>
  </tr>`;
  return card;
};
// Función "cargarFila()" que recibe como parámetro un arreglo de productos. Iterar cada elemento en el arreglo y llamar a la función "crearFila()" para agregar cada elemento al DOM dentro de "tbody"
const cargarFila = (productos) => {
  for (let producto of productos) {
    const card = crearFila(producto);
    tbody.insertAdjacentHTML("beforeend", card);
  }
};

// //////////////////////////////////////////////////
// API 4
// 1
// Crear el archivo "productos.json" que contenga los productos de "productos.js"
// Crear el arreglo `productos` vacío en "index.js"
const productos = [];
// Crear la constante `URL` que almacene la referencia a la ruta de "productos.json"
const URL = "./js/productos.json";
// Crear la función `obtenerProductos()` que utilice `fetch()` para obtener el contenido dentro de "productos.json" y almacenar el contenido dentro de `productos`
const obtenerProductos = function () {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      productos.push(...data);
      // Llamar a la función `cargarProductos(productos)` dentro de un método `.then`. El llamado a la función original debe ser quitado, porque ahora la función `obtenerProductos()` debe ser la función principal a llamar.
      cargarProductos(productos);
    })
    .catch((err) => alert("Hubo un error", err));
};

// 2
// Ya esá hecho, mover a "carrito.js" la lógica que se encarga de recuperar los datos almacenados en `localStorage` y de la lógica que se encarga de mostrar los la tabla

// 3
// Crear el evento para que al pulsar el botón comprar en "checkout.html", se muestre un mensaje de agradecimiento por la compra realizada.
// Seleccionar el botón "Comprar"
const btnComprar = document.querySelector("#btnComprar");
if (paginaActual.includes("checkout")) {
  btnComprar.addEventListener("click", () => {
    alert("Compra realizada correctamente ✅");
    // Después vaciar el arreglo `carritoFrutas`
    productos.length = 0;
    // Después vaciar el contenido de la propiedad en `localStorage`
    localStorage.removeItem("carritoFrutas");
    // Después vaciar la tabla HTML con los productos
    tbody.innerHTML = "";
    // Extra mio
    // Redirigir al usuario a la página principal
    window.location.href = "index.html";
  });
}
