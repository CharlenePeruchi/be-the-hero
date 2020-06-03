const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); //converte o corpo no insomnia em json
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: buscar/listar uma informação do backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar rescursos
 * Request Body: corpo da requisição, utilizado par criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Instalar o banco de dados:
 * Drive: SELECT * FROM users
 * Query Builder: table ('users').select('*').where() .. esta é a linguagem mais universal
 * */

/**
 * Funcionalidades:
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadsatrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 */
