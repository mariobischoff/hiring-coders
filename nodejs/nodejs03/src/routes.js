const { Router } = require("express");

const routes = new Router();

routes.get("/", (_, res) => {
  return res.json({ message: "Ok" });
});

module.exports = routes;
