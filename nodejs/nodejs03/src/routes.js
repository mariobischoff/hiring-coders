import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserControler from "./app/controllers/UserControler";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import CollaboratorController from "./app/controllers/CollaboratorController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserControler.store);
routes.post("/session", SessionController.store);

// Rotas autenticadas
routes.use(authMiddleware);
routes.get("/users", UserControler.list);

// Lista colaboradores
routes.get("/collaborator", CollaboratorController.index);

routes.put("/users", UserControler.update);

// Upload de arquivos
routes.post("/files", upload.single("file"), FileController.store);

export default routes;
