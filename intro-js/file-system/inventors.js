import fs from "fs";

function getInventors() {
  const inventors = fs.readFileSync("inventors.json", "utf-8");

  return JSON.parse(inventors);
}

function addInventors(inventor) {
  const inventors = getInventors();
  inventors.push(inventor);
  printInventors(inventors);
}

function printInventors(inventors) {
  console.log("Nombre      Apellido    Año");
  console.log("---------------------------");
  //   for (const inventor of inventors) {
  //     console.log(
  //       `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
  //         inventor.year
  //       }`
  //     );
  //   }
  inventors.forEach((inventor) =>
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    )
  );
}

addInventors({ first: "Pablo", last: "Fernandez", year: 1974 });

// printInventors(getInventors());
