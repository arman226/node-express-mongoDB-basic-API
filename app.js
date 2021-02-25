require("dotenv").config();
const express = require("express");
//ROUTERS IMPORT//
const userRouter = require("./src/routes/users");

const app = express();

const PORT = process.env.PORT;

const onServerStart = () => {
  console.log(`Welcome to port ${PORT}`);
};

app.use("/api/user", userRouter);

app.listen(PORT, onServerStart);
