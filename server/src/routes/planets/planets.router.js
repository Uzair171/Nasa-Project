const express = require("express");
const { getallPlanets } = require("./planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/planets", getallPlanets);

module.exports = planetsRouter;
