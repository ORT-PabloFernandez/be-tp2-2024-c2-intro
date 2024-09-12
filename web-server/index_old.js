import http from "http";

const PORT = 3000;
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

http
  .createServer((request, response) => {
    switch (request.url) {
      case "/":
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("Esta es la información de la API");
        break;
      case "/api/inventors":
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(JSON.stringify(inventors));
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("El recurso no encontrado");
        break;
    }
    response.end();
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Servidor Web en el puerto ${PORT} levantado`);
  });
