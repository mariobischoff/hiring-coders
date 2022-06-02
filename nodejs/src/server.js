import http from "http";
import { parse } from "url";
import queryString from "query-string";
import fs from "fs";
import { v4 as uuid } from "uuid"

const HOSTNAME = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedURL = parse(req.url, true);
  const params = queryString.parse(parsedURL.search)
  let resposta;

  if (parsedURL.pathname === "/criar-usuario") {
    // criar usuario
    params.id = uuid();
    fs.writeFile("users/" + params.id + ".txt", JSON.stringify(params), (err) => {
      if (err) throw err;
    });
    resposta = `Usuario ${params.id} criado com sucesso!`;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(resposta);
  } else if (parsedURL.pathname === "/selecionar-usuario") {
    // selecionar usuario
    fs.readFile("users/" + params.id + ".txt", (err, data) => {
      if (err) throw err;
      resposta = data;
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      res.end(resposta);
    })
  } else if (parsedURL.pathname === "/remover-usuario") {
    // remover usuario
    fs.unlink("users/" + params.id + ".txt", (err) => {
      if (err) throw err;
      resposta = `Usuario ${params.id} removido com sucesso!`;
      res.statusCode = 204;
      res.setHeader("Content-Type", "application/json");
      res.end(resposta);
    })
  }
})

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at ${HOSTNAME}:${PORT}`);
})
