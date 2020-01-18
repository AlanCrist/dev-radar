const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv/config");

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0-hrys0.mongodb.net/week10?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);


app.listen(4000);