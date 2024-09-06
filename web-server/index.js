import http from "http";

const PORT = 3000;

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hola mundo desde el servidor nuevamente</h1>");
    console.log("Llego una petición");
    response.end();
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Servidor Web en el puerto ${PORT} levantado`);
  });
