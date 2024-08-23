// operadores de igualdad
// (==) igualdad sin verificar tipo

console.log(1 == 1);
console.log(1 == "1");
console.log(0 == false);
console.log(null == 0);
console.log(null == undefined);

// (===) igualdad verificando tipo
console.log(1 === "1");
console.log(null === undefined);

// Valores falsos en Javacript
// false, undefined, null, 0, NaN, "" (cadena vacia)

let a = { nombre: "pedro" };
if (a) console.log("a es verdadero");
else console.log("a es false");
