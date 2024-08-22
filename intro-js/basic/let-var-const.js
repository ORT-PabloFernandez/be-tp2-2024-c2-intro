// let vs var
// let es la forma moderna de declarar variables dsde ES6

// el alcance de var es global y de let a nivel bloque
// let no permite declarar dos veces la misma variable y var si

let x = 1;
if (x === 1) {
  let x = 2; //
  console.log(x); //2
}

console.log(x); // 2 esperaria que imprima 1

// const para declarar una constante
const key = "asdfasdfas";

//
