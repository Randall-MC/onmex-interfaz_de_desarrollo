"use strict";

// //////////////////////////////////////////////////
// ///// Módulo 3 - Unidad 1 - Tema 1
// setTimeout()
// setTimeout(() => {
//   // Lógica a ejecutar
//   console.log("Hola mundo, setTimeout() 2.5 segundos");
// }, 2500); // Tiempo a esperar
// // setInterval()
// let contador = 0;
// const intervaloID = setInterval(() => {
//   contador++;
//   console.log(`setInterval contador: ${contador}`);
//   // Detener después de 5 segundos
//   if (contador === 5) {
//     clearInterval(intervaloID);
//     console.log("Intervalo detenido");
//   }
// }, 1000);

// async
// async function functionDeclaration() {
//   // bloque de código
//   const resultado = await peticionRemota();
//   if (resultado !== undefined) {
//     // Respuesta exitosa
//   }
// }

// const arrowFunction = async () => {
//   // bloque de código
//   const resultado = await peticionRemota();
//   if (resultado !== undefined) {
//     // Producto obtenidos
//   }
// };

// //////////////////////////////////////////////////
// ///// Actividad 1
// console.log("Primer console.log()");
// setTimeout(() => {
//   console.log("Segundo console.log()");
// }, 3);
// console.log("Tercer console.log()");

// //////////////////////////////////////////////////
// ///// Módulo 3 - Unidad 1 - Tema 2
// Try, Catch, Finally
// try {
//   // bloque de código que intentamos ejecutar
//   const resultado = 123 * 13;
//   console.log("Resultado ", resultado);
// } catch (err) {
//   // bloque de manejo de errores que ocurran en try
//   console.error("Se produjo un error ", err);
// } finally {
//   // Este bloque se ejecuta independientemente de que lo anterior se ejecute bien o si ocurre un error
//   console.log("Hola desde finally");
// }

// Ejemplo fetch con promesas
// function obtenerPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.table(data))
//     .catch((error) => console.error(error));
// }
// Ejemplo con async await
// async function obtenerPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.table(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// obtenerPosts();

// //////////////////////////////////////////////////
// ///// Módulo 3 - Unidad 1 - Tema 2 - Actividad 2
// Crear la arrow function `obtenerUsuarios()`. En ella crear un bloque `try-catch` y realizar una petición `fetch()` a la API "random users" (https://api.randomuser.me/?results=1000)
// Mostrar el resultado con `console.table()`
// Probar modificando la URL para obtener un error y que este sea manejado en el bloque `catch()`
// const obtenerUsuarios = async () => {
//   try {
//     const response = await fetch("https://api.randomuser.me/?results=3");
//     const data = await response.json();
//     console.table(data.results);
//   } catch (error) {
//     console.error(error);
//   }
// };
// obtenerUsuarios();

// //////////////////////////////////////////////////
// ///// Módulo 3 - Unidad 1 - Tema 3
// Definición de objetos basados en clases con métodos constructores
// Definición de una clase
// class Persona {
//   // Propiedades
//   constructor(nombre, edad) {
//     (this.nombre = nombre), (this.edad = edad);
//   }
//   // Métodos
//   saludar() {
//     console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
//   }
// }
// // Definición de objetos basados en clases
// const persona1 = new Persona("Juan", 25);
// const persona2 = new Persona("Maria", 30);
// persona1.saludar();
// persona2.saludar();

// Ejemplo - Modelo Vista Controlador (MVC)
// Modelo
// class UsuarioModel {
//   constructor(nombre, correo) {
//     (this.nombre = nombre), (this.correo = correo);
//   }
// }
// // Vista
// class UsuarioView {
//   mostrarUsuario(usuario) {
//     console.log(`Nombre: ${usuario.nombre}`);
//     console.log(`Correo: ${usuario.correo}`);
//   }
// }
// // Controlador
// class UsuarioController {
//   constructor(modelo, vista) {
//     (this.modelo = modelo); (this.vista = vista);
//   }

//   crearUsuario(nombre, correo) {
//     const nuevoUsuario = new UsuarioModel(nombre, correo);
//     this.vista.mostrarUsuario(nuevoUsuario);
//   }
// }
// // Uso del MVC
// const modelo = new UsuarioModel();
// const vista = new UsuarioView();
// const controlador = new UsuarioController(modelo, vista);
// controlador.crearUsuario("Albert", "albert@teclab.edu.ar");

// Ejemplo - Model View - ViewModel (MV-VM)
// Modelo
// class UsuarioModel {
//   constructor(nombre, correo) {
//     this.nombre = nombre;
//     this.correo = correo;
//   }
// }
// // Vista
// class UsuarioView {
//   mostrarUsuario(usuario) {
//     console.log(`Nombre: ${usuario.nombre}`);
//     console.log(`Correo: ${usuario.correo}`);
//   }
// }
// // VistaModelo
// class UsuarioViewModel {
//   constructor(modelo, vista) {
//     this.modelo = modelo;
//     this.vista = vista;
//   }

//   mostrarUsuario() {
//     this.vista.mostrarUsuario(this.modelo);
//   }
// }
// // Uso del MVVM
// const modelo = new UsuarioModel("Albert", "albert@teclab.edu.ar");
// const vista = new UsuarioView();
// const vistaModelo = new UsuarioViewModel(modelo, vista);
// vistaModelo.mostrarUsuario();

// Ejemplo de SPA - Identificar el cambio de hash
const contenedor = document.querySelector(".container");
const plantillaHTML = {
  inicio: `<h1>Título para la sección Inicio</h1>`,
  productos: `<h1>Título para la sección Productos</h1>`,
  contactos: `<h1>Título para la sección Contactos</h1>`,
  error404: `<h1>Contenido no encontrado</h1>`,
};
// Función para cargar el contenido según la ruta
function cargarContenido() {
  const hash = window.location.hash.substring(1); // Obtener el fragmento de la URL "#"
  // Cargar el contenido correspondiente a la ruta
  if (hash === "inicio" || hash === "") {
    contenedor.innerHTML = plantillaHTML.inicio;
  } else if (hash === "productos") {
    contenedor.innerHTML = plantillaHTML.productos;
  } else if (hash === "contactos") {
    contenedor.innerHTML = plantillaHTML.contactos;
  } else {
    contenedor.innerHTML = plantillaHTML.error404;
  }
}
// Generando evento para el cambio en el hash en la url
// Llamar a cargarContenido cuando el hash cambie
window.addEventListener("hashchange", cargarContenido);
// Llamar a cargarContenido al cargar la página (por si ya hay un hash en la URL)
window.addEventListener("DOMContentLoaded", cargarContenido);
// Llamada inicial (por seguridad) para renderizar contenido si el script se carga después del evento DOMContentLoaded
cargarContenido();
