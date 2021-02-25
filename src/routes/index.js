require("dotenv").config();
const express = require("express");
const userRouter = require("./users");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const onServerStart = () => {
  console.log(`Welcome to port ${PORT}`);
};

const setUpRoutes = () => {
  app.use("/api/user", userRouter);
};

module.exports.setUpServer = () => {
  app.use(express.json()); // => req.body
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  setUpRoutes();
  app.listen(PORT, onServerStart);
};
