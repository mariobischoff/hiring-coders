import { createServer } from "http";
import { parse } from "querystring";

const PORT = process.env.PORT || 3000;
const host = "localhost";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(
        JSON.stringify({
          status: "okay",
        })
      );
      response.end();
      break;
    }
    case "/authenticate": {
      let data = "";
      request.on("data", (chunk) => {
        data += chunk;
      });
      request.on("end", () => {
        const params = parse(data);
        response.end();
      });
      break;
    }
    default: {
      response.writeHead(404, "Service not found");
      response.end();
    }
  }
});

server.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
