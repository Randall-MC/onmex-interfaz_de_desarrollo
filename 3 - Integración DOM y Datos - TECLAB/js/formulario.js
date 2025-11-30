"use strict";
// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 1 - Tema 3

const btnGuardar = document.querySelector("button#btnGuardar");

const inputCodigo = document.querySelector("input#inputCodigo");
const inputNombre = document.querySelector("input#inputNombre");
const inputImporte = document.querySelector("input#inputImporte");
const inputStock = document.querySelector("input#inputStock");

const productos = recuperarProductosDeLS() || [];

const obtenerCodigo = () => parseInt(Math.random() * 10_000);
// Almacenar la información dentro de cada input en el objeto "nuevoProducto", guardar el objeto dentro del arreglo "productos"
function guardarProducto() {
  const nuevoProducto = {
    id: obtenerCodigo(),
    nombre: inputNombre.value,
    importe: parseFloat(inputImporte.value),
    stock: parseInt(inputStock.value),
  };

  productos.push(nuevoProducto);
  almacenarProductosEnLS();
  cargarProductos();
}
// Crear una fila con la información de cada producto
function retornarFilaHTML(producto) {
  return `<tr>
  <td>${producto.id}</td>
  <td>${producto.nombre}</td>
  <td>${producto.importe}</td>
  <td>${producto.stock}</td>
  <td id="${producto.id}" class="btn-eliminar">❌</td>
  </tr>`;
}
// Guardar la información del arreglo productos en localStorage
function almacenarProductosEnLS() {
  if (productos.length > 0) {
    localStorage.setItem("Productos", JSON.stringify(productos));
  }
}
// Recuperar la información almacenada en localStorage
function recuperarProductosDeLS() {
  return JSON.parse(localStorage.getItem("Productos"));
}
// Mostrar el contenido del arreglo "productos" en la tabla
const tbody = document.querySelector("tbody");
function cargarProductos() {
  if (productos.length > 0) {
    tbody.innerHTML = "";
    productos.forEach((producto) => {
      tbody.innerHTML += retornarFilaHTML(producto);
    });
  }
  activarClickEnBotonesEliminar();
}
// Agregar un listener al botón guardar
btnGuardar.addEventListener("click", guardarProducto);
// Llamar a la función cargarProductos() apenas cargue el documento
// document.addEventListener("DOMContentLoaded", () => cargarProductos());
cargarProductos();
// Agregar de manera masiva el evento para eliminar un elemento en la tabla
function activarClickEnBotonesEliminar() {
  const botonesEliminar = document.querySelectorAll(".btn-eliminar");
  for (let botonEliminar of botonesEliminar) {
    botonEliminar.addEventListener("click", () => {
      const id = productos.findIndex(
        (producto) => producto.id === parseInt(botonEliminar.id)
      );
      if (id !== -1) {
        productos.splice(id, 1);
        almacenarProductosEnLS();
        cargarProductos();
      }
    });
  }
}

// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 1 - Tema 4
// Actividad 4
// const promesa = new Promise((resolve, reject) => {
//   // controlar estados de la promesa y, resolverla o rechazarla
//   const numeroAleatorio = Math.random();

//   if (numeroAleatorio > 0.5) {
//     resolve(productos); // Se resuelve con éxito
//   } else {
//     reject(new Error(`El número ${numeroAleatorio} es menor a 0.5`)); // La promesa es rechazada
//   }
// });
// // Métodos de control - catch, then, finally
// promesa
//   .then((resultado) => console.table(resultado))
//   .catch((err) =>
//     console.error("La promesa se rechazó debido a un error: ", err)
//   )
//   .finally(() => 1);

// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 2 - Tema 4
// fetch() - get
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.table(data))
  .catch((err) => console.error(err));
// fetch() - post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Post de prueba ONMEX",
    body: "Esta es una nueva noticia para mi blog de pruebas",
    userId: 1,
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
// fetch() - put
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "Modificación de prueba ONMEX",
    body: "Esta es una noticia que se modificó para mi blog de pruebas",
    userId: 1,
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
// fetch() - delete
fetch("https://jsonplaceholder.typicode.com/posts/13", { method: "DELETE" });
// Manejo de códigos de estado fetch() (respuesta del servidor)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Error en la sintaxis (modulo2)
    // response.status === 200
    //   ? response.json()
    //   : throw new Error("Error al obtener los datos")
    // Solución 1 reemplazar el ternario por un bloque if/else
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Error al obtener los datos");
  })
  .then((data) => console.table(data))
  .catch((err) => console.error(err));

// //////////////////////////////////////////////////
// ///// Módulo 2 - Unidad 2 - Actividad 8
// Acceder a la guía de JSONPlaceHolder: https://jsonplaceholder.typicode.com/guide/.
// Ubicar el código de ejemplo para generar un post nuevo (método post).
// Copiar el código de ejemplo y pegarlo en la consola con las siguientes modificaciones

// Title: “Post generado por mí”.
// Body: “Este es un post generado a partir de la microactividad 8”.

// Modificar el último método de control .then(): pasar datos como parámetro y ejecutar console.table() para visualizar la respuesta del servidor.

// Creating a new resource
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Post generado por mí",
    body: "Este es un post generado a partir de la microactividad 8",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.table(json));
