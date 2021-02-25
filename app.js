require("dotenv").config();
const { connectToMonggo } = require("./src/data/dbConnection");
const { setUpServer } = require("./src/routes");

connectToMonggo();
setUpServer();
