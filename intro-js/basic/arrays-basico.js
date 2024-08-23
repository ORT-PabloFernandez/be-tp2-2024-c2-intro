// declaracion e inicializacion de un Array

let nombres = ["Juan", "Pedro", "Maria"];

console.log(nombres[2]);

console.log(nombres[nombres.length - 1]);

// iterar un Array

for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element);
}

// agregar elemento al final de un array
nombres.push("Elena");
// sacar un elemento del final
let ultimo = nombres.pop();
// sacar del principio
let primero = nombres.shift();
// agrego al principio
nombres.unshift("Anna");

// Buscar la posición
let posicion = nombres.indexOf("Elena");

// Eliminar en una posición
nombres.splice(nombres.indexOf("Elena"), 2);

// realizar una copia
let nuevoNombres = nombres.slice();

// Generar un array a partir de un string
let stringNombres = "Juan;Pedro;Maria;Pablo";

let nombresArray = stringNombres.split(";");
console.log(nombresArray);

// volver a unir
let cadenaNombres = nombresArray.join(";");
console.log(cadenaNombres);
