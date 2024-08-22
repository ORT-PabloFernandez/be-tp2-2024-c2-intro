"use strict";
// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje dinamico

// STRING //
let saludo = "Hola mundo";
let saludo2 = "Hola mundo";
let cadena = "c";
let cadena2 = `hola 
            mundo 
                como estas ${saludo} 🙏`;
//console.log(cadena2);

// NUMBER //
let numero = 123123;
let numero2 = 23424;
let var1 = -0;

//console.log(numero + numero2);

let esMayorDeEdad = true;
//console.log(esMayorDeEdad + numero);

// Null Data Type: Respuesta a la ausencia de algun valor
let nulo = 45;
nulo = null;
//console.log(nulo);

// Undefined : propiedad de un objeto que no existe o variable no asignada
let nodefinido;
//console.log(nodefinido);
let pepe = 45;
//console.log(pepe.mipropiedadinventada);

// Importante: Cuando se accede a una propiedad o variable no asignada
// Javascript no lanza un error / excepcion
// Esto es un motivo por el cual se suele usar Typescript junto con Javascript

console.log("Raiz cuadrada de (-1): ", Math.sqrt(-1));

nodefinido = 100;

// no declaro una variable y la uso

let mivariable = "Juan";
//mivariable = null;
//console.log(mivariable);

// para mejorar la calidad del codigo generalmente se usa Linters (ESLint)

// let vs var
// en la version ES15 se incorporo el let

console.log(typeof Math.sqrt(-1));

// Parseo de numeros
let cadenaNumero = "34";
console.log(parseInt(cadenaNumero) + 1);
let cadenaFloat = "43.5";
console.log(parseFloat(cadenaFloat) + 5.4);

console.log(Number.MAX_SAFE_INTEGER);

// declaracion de objetos
const actor = {
  nombre: "Juan",
  edad: 45,
  "numero telefono": "56756798",
};

// imprimir el propiedades del objeto
console.log(actor.nombre);

console.log(actor["numero telefono"]);
const nombre = "nombre";
console.log(actor[nombre]);
