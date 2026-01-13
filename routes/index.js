const myController = require ("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/tTech", myController.tTech)

module.exports = routes