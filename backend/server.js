const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const morgan = require("morgan");
const { ExpressPeerServer } = require("peer");

require("dotenv").config();

const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 5000;

app.use(morgan("dev"));
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
