const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

// Imprir en tabla

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

//printInventors(inventors);
// 1. Filtre los inventores nacidos andes del 1800
//printInventors(inventors.filter((inventor) => inventor.year > 1800));

// TODO filtrar los invetores cuyo apellido empieza con la letra C

// 2. Convertir el apellido en mayusculas
console.log(
  inventors.map((inventor) => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year,
    fullname: inventor.first + " " + inventor.last,
  }))
);

// TODO: Retornar ambas cosas, filtrado y nombre en mayusculas

// TODO Buscar inventor Kepler y retornar el objeto (find)

// TODO Retornar false o true si en el array hay algun inventor que nacio en 1858

// TODO Ordenar los inventores por fecha de nacimiento (sort)

// TODO Ordenar los inventores por orden alfabetico por Apellido (sort)
