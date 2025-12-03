import { reciboFoco, pierdoFoco } from './eventos.js'

const inputs = document.querySelectorAll("input")

for (let input of inputs) {
    input.addEventListener("focus", ()=> reciboFoco(input))
    input.addEventListener("blur", ()=> pierdoFoco(input))
}
