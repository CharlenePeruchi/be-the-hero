const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create); //rota para o login

routes.get("/ongs", OngController.index); //rota para listar ongs
routes.post("/ongs", OngController.create); //rota para criar cadastro de ong

routes.get("/profile", ProfileController.index); //rota para listar casos específicos de uma ong

routes.get("/incidents", IncidentController.index); //rota para listar casos
routes.post("/incidents", IncidentController.create); //rota para criar novos casos
routes.delete("/incidents/:id", IncidentController.delete); //rota para deletar casos

module.exports = routes;
