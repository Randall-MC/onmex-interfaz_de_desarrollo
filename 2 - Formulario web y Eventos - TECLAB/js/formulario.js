"use-strict";
// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 1 - Tema 1
// // Eventos del mouse
// const divCarrito = document.querySelector(".carrito-image");
// // Navigator
// const navegarHaciaDocumentoHTML = (document) => (navigator.href = document);
// // callback
// divCarrito.addEventListener("click", () => {
//   navegarHaciaDocumentoHTML("carrito.html");
// });
// // mousemove
// divCarrito.addEventListener("mousemove", () => {
//   divCarrito.style.cursor = "pointer";
// });
// ///// QuerySelector - Código base
const btnGuardar = document.querySelector("button#btnGuardar");

const inputCodigo = document.querySelector("input#inputCodigo");
const inputNombre = document.querySelector("input#inputNombre");
const inputImporte = document.querySelector("input#inputImporte");
const inputStock = document.querySelector("input#inputStock");

const nuevoProducto = { id: 0, nombre: "", importe: 0.0, stock: 0 };

const obtenerCodigo = () => parseInt(Math.random() * 10_000);
// // keypress
// // inputNombre.addEventListener("keypress", () => console.log(inputNombre.value));
// inputNombre.addEventListener("keypress", (e) => console.log(e.key));
// // change
// inputNombre.addEventListener(
//   "change",
//   () => (nuevoProducto.nombre = inputNombre.value)
// );
// inputImporte.addEventListener(
//   "change",
//   () => (nuevoProducto.importe = inputImporte.value)
// );
// inputStock.addEventListener(
//   "change",
//   () => (nuevoProducto.stock = inputStock.value)
// );
// // submit
// const formulario = document.querySelector("form");
// formulario.addEventListener("submit", (e) => {
//   // preventDefault
//   e.preventDefault();
//   inputCodigo.value = obtenerCodigo();
//   nuevoProducto.id = inputCodigo.value;
//   console.log(e);
// });
// // e.target
// btnGuardar.addEventListener("keypress", (e) => {
//   if (e.target.id === "btnGuardar") {
//     navigator.href === "#";
//   }
// });

// //////////////////////////////////////////////////
// ///// Actividad 1
// Guardar el contenido dentro de los inputs nombre, importe y stock en el objeto "nuevoProducto" cuando los inputs pierdan el foco
inputNombre.addEventListener(
  "change",
  () => (nuevoProducto.nombre = inputNombre.value)
);
inputImporte.addEventListener(
  "change",
  () => (nuevoProducto.importe = inputImporte.value)
);
inputStock.addEventListener(
  "change",
  () => (nuevoProducto.stock = inputStock.value)
);
// Crea una constante que almacene el elemento "form", prevenir su comportamiento por defecto y que ejecute un "console.table()" de "nuevoProducto" al enviar el formulario (submit)
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
  // preventDefault
  e.preventDefault();
  inputCodigo.value = obtenerCodigo();
  nuevoProducto.id = parseInt(inputCodigo.value);
  console.table(nuevoProducto);

  // //////////////////////////////////////////////////
  // ///// Actividad 2
  // Agregar una nueva clave a "localStorage" llamada "MiProducto" que contenga la información de "nuevoProducto"
  localStorage.setItem("MiProducto", JSON.stringify(nuevoProducto));
});

// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 1 - Tema 2
// // setItem()
// localStorage.setItem("nombre", "TecLab");
// // getItem()
// const userName = localStorage.getItem("nombre");
// // removeItem()
// localStorage.removeItem("nombre");
// // clear
// localStorage.clear();
// // localStorage y sessionStorage solo almacena strings
// // localStorage.setItem("producto", nuevoProducto);
// // const producto1 = localStorage.getItem("producto");
// // JSON.stringify()
// const producto = { id: 123, nombre: "Computadora", importe: 500 };
// const productoJSON = JSON.stringify(producto);
// // JSON.parse()
// const productoParse = JSON.parse(productoJSON);

// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 1 - Tema 3
