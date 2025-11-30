"use strict";
// ///////////////////////////////////////////////////////////////
// Declarar variables con let
let nombre = "TecLab";
let fechaNacimiento = "21/03/1975";
let añoInicial = 2018;

// ///////////////////////////////////////////////////////////////
// Declarar variables con const
const USUARIO = "Joe McMillais";
const securityID = "4621-7894-6549";

// ///////////////////////////////////////////////////////////////
// Arrays
const paisesDelSur = ["Argentina", "Uruguay", "Brazil", "Venezuela", "Chile"];
const carrito = [
  { codigo: 123, nombre: "Teclado Bluetooth", importe: 15500 },
  { codigo: 234, nombre: "Mouse Bluetooth", importe: 7800 },
  { codigo: 456, nombre: "SSD Portátil", importe: 47350 },
];

// ///////////////////////////////////////////////////////////////
// Mensajes en la consola
console.log("texto estático, o variable JS");
console.warn("mensaje estático con tono de advertencia");
console.error("Houston, tenemos un problema");

// ///////////////////////////////////////////////////////////////
// Condicionales
if (añoInicial === 2017) {
  console.log("La variable añoInicial tiene como valor 2017");
} else {
  console.warn("El valor de añoInicial no es 2017");
}

// ///////////////////////////////////////////////////////////////
// Operadores Lógicos
let username = "Pedro";
let password = "Contraseña ultra secreta";
if (username === "Pedro" && password === "Contraseña ultra secreta") {
  console.log("Bienvenido " + username);
} else {
  console.warn("Usuario y/o contraseña incorrectos");
}

// ///////////////////////////////////////////////////////////////
// Switch
let valorOfertado = 2500;
switch (valorOfertado) {
  case 1000:
    console.warn("Su oferta es muy baja, realiza otra oferta");
    break;
  case 2000:
    console.log("Gracias por tu oferta. Puedes retirar el producto hoy mismo");
    break;
  default:
    console.error("No pudimos interpretar tu oferta. Intenta nuevamente");
    break;
}

// ///////////////////////////////////////////////////////////////
// Operador ternario
let edad = 18;
let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado);

// ///////////////////////////////////////////////////////////////
// Ciclos de iteración
// For
for (let i = 0; i < paisesDelSur.length; i++) {
  console.log(paisesDelSur[i]);
}
// While
let contador = 0;
while (contador < 5) {
  console.log("while: " + contador);
  contador++;
}
// Do-While
contador = 0;
do {
  console.log("do-while: " + contador);
  contador++;
} while (contador < 5);

// ///////////////////////////////////////////////////////////////
// Funciones
function saludar() {
  console.log("Hola " + nombre);
}
saludar();

function multiplicar(numberA, numberB) {
  return numberA * numberB;
}
console.log(multiplicar(2, 4));

function dividir(numberA, numberB) {
  return numberA / numberB;
}

resultado = dividir(2013, 75);
console.log(resultado);

// Arrow function
const saludarArrow = (nombre) => {
  console.log(`Hola ${nombre} desde una arrow function`);
};
// Arrow function simplificada (cuando solo hay una línea de código dentro del bloque de ejecución)
const dividirArrow = (numeroA, numeroB) => numeroA / numeroB;

// ///////////////////////////////////////////////////////////////
// Evolución de los Objetos en JavaScript
// Objeto literal
const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 32,
  trabajo: "Programación",
  añoNacimiento: function () {
    return 2023 - this.edad;
  },
};
persona.añoNacimiento();

// Funciones constructoras
function PersonaConstructor(nombre, apellido, edad, trabajo) {
  (this.nombre = nombre),
    (this.apellido = apellido),
    (this.edad = edad),
    (this.trabajo = trabajo);
  this.añoNacimiento = function () {
    return 2023 - parseInt(this.edad);
  };
}
let persona1 = new PersonaConstructor("José", "Gonzales", 23, "Electricista");

// Clases JS
class PersonaClass {
  constructor(nombre, apellido, edad, trabajo) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.trabajo = trabajo);
  }

  añoNacimiento() {
    return 2023 - this.edad;
  }
}
let persona2 = new PersonaClass("Maria", "Ramirez", 45, "Secretaria");

// ///////////////////////////////////////////////////////////////
// Arrays
const productos = [
  { id: 1, nombre: "Mouse", stock: 10, precio: 500, categoria: "Periféricos" },
  {
    id: 2,
    nombre: "Teclado",
    stock: 7,
    precio: 15500,
    categoria: "Periféricos",
  },
  {
    id: 3,
    nombre: 'Monitor 24"',
    stock: 4,
    precio: 45000,
    categoria: "Hardware",
  },
  { id: 4, nombre: "Auriculares", stock: 15, precio: 8200, categoria: "Audio" },
  {
    id: 5,
    nombre: "SSD 1TB",
    stock: 6,
    precio: 47350,
    categoria: "Almacenamiento",
  },
];

paisesDelSur.push("Paraguay"); // Agrega un elemento al final del arreglo
paisesDelSur.unshift("Bolivia"); // Agrega un elemento al inicio del arreglo

const indice = paisesDelSur.indexOf("Paraguay");
console.log(
  indice > -1
    ? "Se encuentra en la posición " + indice
    : "No se encontró el país"
);

console.log("splice()", paisesDelSur.splice(indice, 1)); // Elimina el elemento en la posición de "indice"
console.log("includes()", paisesDelSur.includes("Chile"));

// ForEach
paisesDelSur.forEach((pais) => {
  console.log(pais);
});

// ///////////////////////////////////////////////////////////////
// Funciones de orden superior
// filter()
const catFilter = productos.filter(
  (producto) => producto.categoria === "Periféricos"
);
// find()
const catFind = productos.find((producto) => producto.id === 3);
// reduce()
const total = carrito.reduce((acc, producto) => (acc += producto.importe), 0);
// map()
const productosMap = productos.map((producto) => {
  return {
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
  };
});
// findIndex()
const producto1 = productos.findIndex((producto) => producto.id === 1);
// sort()
productos.sort((productoA, productoB) => productoA.precio - productoB.precio);
// Haciendo una búsqueda aproximada
const findIncludes = productos.find((producto) =>
  producto.nombre.includes("Mouse")
);

// ///////////////////////////////////////////////////////////////
// DOM Parte 1
// Selecciona div con atributo id 'container'
const container = document.querySelector("div#container");
// button con dos clases CSS específicas
const button = document.querySelector("button.button-outline.button-add");
// tag HTML footer
const footer = document.querySelector("footer");
// tag HTML cuyo id es "imgCarrito"
const imgCarrito = document.querySelector("#imgCarrito");

// Seleccionando elementos del DOM
// innerText
const buttonInnerText = document.querySelector(
  "button.button-outline.button-add"
);
console.log(buttonInnerText.innerText); // retorna el contenido del elemento
buttonInnerText.innerText = "innerText"; // define el contenido del elemento
// textContent
const buttonTextContent = document.querySelector(
  "button.button-outline.button-add"
);
console.log(buttonInnerText.textContent); // retorna el contenido del elemento
buttonInnerText.textContent = "textContent"; // define el contenido del elemento

// innerHTML
// const ul = document.querySelector("ul");
// ul.innerHTML = "<li>List Item no. 1</li>"; // Agregamos un elemento '<li>' dentro del elemento '<ul>'

// Modificar atributos
// imgCarrito.src = "images/icono-carrito.jpg";

// querySelectorAll
const copetes = document.querySelectorAll("p.copete-noticia");
for (copete of copetes) {
  copete.className += "otra-clase";
}

// ///////////////////////////////////////////////////////////////
// DOM Parte 2
// Crear un elemento HTML con innerHTML
const main = document.querySelector(".main");
main.innerHTML = '<h1 class="h1">Creando un elemento con innerHTML</h1>';

// createElement
const h1 = document.createElement("h1");
h1.textContent = "Creando un elemento con createElement()";
h1.id = "main-title";
h1.className = "main-title";
main.append(h1);

// Template strings + literals
// Forma 1 - sin usar las backtick ``
const divCard1 =
  '<div class="card">' +
  '<div class="titulo-card">' +
  "<h1>Nombre producto</h1>" +
  "</div>" +
  '<div class="imagen-card-producto">' +
  '<img src="images/icon-fruits-64.png" alt="Image">' +
  "</div>" +
  "</div>";

// Forma 2 - sin usar las backtick `` + concatenar variables
const producto = {
  nombre: "Producto Asombroso",
  rutaImagen: "images/icon-fruits-64.png",
};
const divCard2 =
  '<div class="card">' +
  '<div class="titulo-card">' +
  "<h1>" +
  producto.nombre +
  "</h1>" +
  "</div>" +
  '<div class="imagen-card-producto">' +
  '<img src="' +
  producto.rutaImagen +
  '" alt="Image">' +
  "</div>" +
  "</div>";

// Usando backtick `` - Template Strings
const divCard3 = `<div class="card">
  <div class="titulo-card">
  <h1>Nombre producto</h1>
  </div>
  <div class="imagen-card-producto">
  <img src="images/icon-fruits-64.png" alt="Image">
  </div>
  </div>`;

// Usando backtick `` - Template Literals
const divCard = `<div class="card">
  <div class="titulo-card">
  <h1>${producto.nombre}</h1>
  </div>
  <div class="imagen-card-producto">
  <img src=${producto.rutaImagen} alt="Image">
  </div>
  </div>`;
main.innerHTML += divCard;

// Manejar CSS - CSSOM CSS Object Model
// Propiedad style
const h1Class = document.querySelector(".h1");
h1Class.style.color = "blue";
h1Class.style.backgroundColor = "blueviolet";

// Propiedad classList
const divPruebas = document.querySelector(".pruebas");
divPruebas.classList.remove("ocultar");
