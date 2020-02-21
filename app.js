const config = require("./utils/config.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const phoneRouter = require("./controllers/phoneBook.js");
const usersRouter = require("./controllers/users.js");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");
const loginRouter = require("./controllers/login.js");
const request = require("request");

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

app.use("/api/persons", phoneRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
