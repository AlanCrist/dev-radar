const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require('http');
const cors = require("cors")
const { setupWebsocket } = require("./websocket")

require("dotenv/config");

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0-hrys0.mongodb.net/week10?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors({}));
app.use(express.json());
app.use(routes);


server.listen(4000);