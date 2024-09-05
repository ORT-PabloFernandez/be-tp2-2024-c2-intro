setTimeout(() => {
  console.log("Despues de los 3 segundos");
}, 3000);

console.log("Depues de 3 segundos????");

let i = 0;
const idTimer = setInterval(() => {
  console.log("cada 2 segundos");
  i++;
  if (i === 5) {
    clearInterval(idTimer);
  }
}, 2000);
