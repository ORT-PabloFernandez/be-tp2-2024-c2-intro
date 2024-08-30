import fs from "fs";

function getInventors() {
  const inventors = fs.readFileSync("inventors.json", "utf-8");

  return JSON.parse(inventors);
}

function addInventor(inventor) {
  const inventors = getInventors();
  inventors.push(inventor);
  fs.writeFileSync("inventors.json", JSON.stringify(inventors, null, " "));
}

function deleteInventor(id) {
  let inventors = getInventors();
  inventors.splice(
    inventors.findIndex((inventor) => inventor._id == id),
    1
  );
  fs.writeFileSync("inventors.json", JSON.stringify(inventors, null, " "));
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

// TODO: Hacer el update
// TODO: Hacer el getInventor(id)

// CRUD de inventores

// printInventors(getInventors());

export { addInventor, getInventors, deleteInventor };
