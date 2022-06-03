import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse as parseQuery } from "query-string";
import { parse as parseURL } from "url";
import { readFile, unlink, writeFile } from "fs";

const PORT = 3000;
const HOSTNAME = "localhost";

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  let resposta: String | Buffer;
  const url = parseURL(req.url, true);
  const params = parseQuery(url.search ? url.search : "");

  if (url.pathname === "/criar-atualizar-usuario") {
    writeFile("users/" + params.id + ".txt", JSON.stringify(params), (err) => {
      if (err) throw err;
      resposta = `Usuário ID: ${params.id} criado com sucesso!`;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.statusCode = 201;
      res.write(JSON.stringify({ msg: resposta }));
      res.end();
      return;
    });
  } else if (url.pathname === "/seleciona-usuario") {
    readFile("users/" + params.id + ".txt", "utf8", (err, data) => {
      if (err) throw err;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.statusCode = 200;
      res.write(data);
      res.end();
      return;
    });
  } else if (url.pathname === "/remove-usuario") {
    unlink("users/" + params.id + ".txt", (err) => {
      if (err) throw err;
      resposta = `Usuario ${params.id} removido com sucesso.`;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.statusCode = 200;
      res.write(JSON.stringify({ msg: resposta }));
      res.end();
      return;
    });
  } else {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.statusCode = 200;
    res.write(JSON.stringify({ errr: "err" }));
    res.end();
    return;
  }
});

server.listen(PORT, () =>
  console.log(`Server is running at http://${HOSTNAME}:${PORT} !`)
);

// http://localhost:3000/criar-atualizar-usuario?id=1&nome=mario&idade=29
// http://localhost:3000/seleciona-usuario?id=1
// http://localhost:3000/remove-usuario?id=1
