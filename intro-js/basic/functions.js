// Tipos de declaracion de funciones

// tradicional
function add(a, b) {
  return a + b;
}

// valores por defecto de las parametros
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

console.log(calculateBill(567, 0.2, 0.1));

// asignacion a una variable
const square = function (x) {
  return x * x;
};

console.log(square(4));

// Arrow Function
// son siempre anonimas
// (parametros) => {sentencias}

const getSum = (a, b) => a + b;

console.log(getSum(45, 67));
