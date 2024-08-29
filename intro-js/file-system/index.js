import fs from "fs";

let text = fs.readFileSync("texto.txt", "utf-8");

text = text + "\nEsto es una nueva linea";
fs.writeFileSync("texto.txt", text);

console.log(text);
