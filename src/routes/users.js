const express = require("express");
const { home } = require("../controller/usersController");
const router = express.Router();

router.get("/", home);

module.exports = router;
