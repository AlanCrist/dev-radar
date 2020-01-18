const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

const routes = Router();


routes.post("/devs");

module.exports = routes;