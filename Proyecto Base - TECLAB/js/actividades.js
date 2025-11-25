"use strict";
// ////////////////////////////////////////////////////////////
// Actividad 1
// Instalar VS Code
// Instalar la extension live-server

/////////////////////////////////////////////////////////////////
// Actividad 2
// Definir dos variables, una de tipo número y una de tipo string
let numberVar = 1;
let stringVar = "string";
// Definir el array "arrayFrutas" con 5 elementos
const arrayFrutas = ["manzana", "plátano", "sandía", "piña", "kiwi"];
// Utilizar el método "console" para ver el valor de las variables y constantes creadas
console.log(numberVar, stringVar);
console.table(arrayFrutas);

// ////////////////////////////////////////////////////////////
// Actividad 3
// Crear una función "iterarArrayFrutas()" que itere el arreglo "arrayFrutas" y mostrar el contenido del arreglo con "console.log()". Crear una condición que impida que se muestre el valor en la posición 1 y 3.
function iterarArrayFrutas() {
  for (let i = 0; i < arrayFrutas.length; i++) {
    if (i === 1 || i === 3) {
      continue;
    }
    console.log(arrayFrutas[i]);
  }
}
// iterarArrayFrutas();

// ////////////////////////////////////////////////////////////
// Actividad 4
// Convertir la función anterior en una Arrow Function
// La función debe tener el parámetro "array"

const iterarArrayFrutasArrow = (array) => {
  for (const [i, el] of array.entries()) {
    if (i === 1 || i === 3) {
      continue;
    }
    console.log(el);
  }
};
iterarArrayFrutasArrow(arrayFrutas);

// ////////////////////////////////////////////////////////////
// Actividad 5
// Crear la clase "Producto". El método constructor debe recibir los datos: id, precio, stock
// Agregar el método descontarDeStock(), que recibe como parámetro las "unidades" que se descontarán. Solo puede recibir datos de tipo numérico, si no es así, envía un error a la consola y termina la ejecución. Validar que la cantidad que se va a descontar sea menor que el stock, si no es así, mostrar un error en la consola y terminar la ejecución
class Producto {
  constructor(id, precio, stock) {
    (this.id = id), (this.precio = precio), (this.stock = stock);
  }

  descontarDeStock(unidades) {
    if (!(typeof unidades === "number")) {
      return console.error("Solo se permiten números");
    }

    if (unidades > this.stock) {
      return console.error("No hay suficientes unidades");
    }

    this.stock -= unidades;
    return this.stock;
  }
}

let banana = new Producto(0, 10, 40);
console.log(banana.stock);
console.log(banana.descontarDeStock(3));

// ////////////////////////////////////////////////////////////
// Actividad 6
// Crear la función "agregarElemento()" que recibe el parámetro "país" y que agrega el país al array "paisesDelSur"
// Validar que el elemento que se va a agregar no existe en el array "paisesDelSur", si existe, mostrar una advertencia en la consola y termina la ejecución de la función
// Aplicar filtros de saneamiento y validación (normalizar los datos)

// Datos de prueba
const paisesDelSur = ["Argentina", "Uruguay", "Brazil", "Venezuela", "Chile"];

function agregarElemento(pais) {
  if (typeof pais !== "string" || pais.trim().length === 0) {
    return "Se espera el nombre de un país";
  }

  let paisNormalizado = pais.trim().toLowerCase();
  paisNormalizado =
    paisNormalizado.charAt(0).toUpperCase() + paisNormalizado.slice(1);

  if (paisesDelSur.includes(paisNormalizado)) {
    return `El país ${paisNormalizado} ya existe`;
  }

  paisesDelSur.push(paisNormalizado);

  return 1;
}
console.log(agregarElemento("Argentina"));

// ////////////////////////////////////////////////////////////
// Actividad 7
// Repite la estructura del 'div' con la clase "card" al menos 7 veces más
// Declara la variable 'botones' que almacene todos los elementos '<button>'
// Mostrar el contenido de 'botones' en la consola
const frutas = [
  { nombre: "Manzana", emoji: "🍎", precio: 800 },
  { nombre: "Plátano", emoji: "🍌", precio: 450 },
  { nombre: "Sandía", emoji: "🍉", precio: 1200 },
  { nombre: "Piña", emoji: "🍍", precio: 950 },
  { nombre: "Kiwi", emoji: "🥝", precio: 600 },
  { nombre: "Fresa", emoji: "🍓", precio: 700 },
  { nombre: "Uva", emoji: "🍇", precio: 520 },
];
// Espero a que se cargue el DOM
// document.addEventListener("DOMContentLoaded", () => {
//   // Selecciono el elemento contenedor
//   const container = document.querySelector(".container");
//   // Si no existe el contenedor, enviar mensaje de alerta
//   if (!container)
//     return console.warn("No se encontró el contenedor .container");
//   // Generar las tarjetas
//   for (const { nombre, emoji, precio } of frutas) {
//     // Card que se va a repetir
//     const cardHTML = `
//       <div class="card">
//         <div class="card-image">${emoji}</div>
//         <div class="card-name">${nombre}</div>
//         <div class="card-price">$ ${precio}</div>
//         <div class="card-button">
//           <button
//             class="button button-outline button-add"
//             id="btn-add-$"
//             title="Clic para agregar al carrito"
//           >
//             +
//           </button>
//         </div>
//       </div>
//     `;
//     // Agrega el elemento dentro del contenedor después de su último hijo
//     container.insertAdjacentHTML("beforeend", cardHTML);
//   }
//   // Declarar 'botones' y mostrar en consola
//   const botones = document.querySelectorAll(".button-add");
//   // console.log(botones.length);
// });

// ////////////////////////////////////////////////////////////
// Actividad 8
// Crear la constante "container" que haga referencia al elemento "div.container"
// Crear la función "retornarCardHTML()" que contenga la estructura de "div.card" usando template strings y devolver la card (return)
// La función "retornarCardHTML()" debe tener el parámetro "producto" que recibe un objeto de "productos.js"
// Usar template literals para reemplazar los valores estáticos (emoji, nombre, precio) por valores dinámicos (productos)
// Crear la función "cargarProductos()" que recibe como parámetro un array. Itera el array con forEach, cada producto se le pasará al método como parámetro
// Dentro de la iteración forEach, escribir de forma acumulativa en el método "container.innerHTML" cada una de las cards retornadas en la iteración
import { productos } from "./productos.js";
const container = document.querySelector(".container");
const retornarCardHTML = function (producto) {
  const card = `<div class="card">
          <div class="card-image">${producto.imagen}</div>
          <div class="card-name">${producto.nombre}</div>
          <div class="card-price">${producto.precio}</div>
          <div class="card-button">
            <button
              class="button button-outline button-add"
              id=""
              title="Clic para agregar al carrito"
            >
              Agregar
            </button>
          </div>
        </div>`;
  return card;
};

const cargarProductos = function (productos) {
  for (let producto of productos) {
    const card = retornarCardHTML(producto);
    container.innerHTML += card;
  }
};

cargarProductos(productos);
