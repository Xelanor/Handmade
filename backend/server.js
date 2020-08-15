const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();

const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 5000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

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

app.use(passport.initialize());
require("./config/passport")(passport);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

// ADD THIS LINE
app.use(express.static("build"));

// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
