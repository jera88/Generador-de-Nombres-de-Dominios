/* eslint-disable */
console.log("Cualquier string");

let array1 = ["the", "our"];
let array2 = ["great", "big"];
let array3 = ["jogger", "racoon"];

let todasLasCombinaciones = [];

for (let elemento1 of array1) {
  for (const elemento2 of array2) {
    for (const elemento3 of array3) {
      todasLasCombinaciones.push(elemento1 + elemento2 + elemento3 + ".com");
    }
  }
}

console.timeLog(todasLasCombinaciones);
