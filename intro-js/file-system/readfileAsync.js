import fs from "fs";

const path = "./bigfile.txt";
const datos = "[vacio]";

fs.readFile(path, "utf-8", (err, data) => {
  if (!err) {
    datos = data;
    console.log("Finalizada la lectura");
  } else {
    console.log("Error: ", err);
  }
});
console.log(datos);
console.log("Ya termino de leer el archivo??");
