const { Router } = require("express");
const axios = require("axios");

const routes = Router();


routes.post("/devs", async (req, res) => {
    const { github_username } = req.body;

    apiResp = await axios.get(`http://api.github.com/users/${github_username}`)

    console.log(apiResp.data);

    return res.json({ message: "Hello" });
});

module.exports = routes;