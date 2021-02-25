const express = require("express");
const {
  home,
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controller/usersController");
const router = express.Router();

//home
router.get("/", home);

//get all users
router.get("/users", getAllUsers);

//get user by id
router.get("/user/:id", getUserById, (req, res) => {
  res.json(res.user);
});

//create user
router.post("/user", createUser);

//remove user
router.delete("/user/:id", getUserById, deleteUser);

//updateUser
router.patch("/user/:id", getUserById, updateUser);

module.exports = router;
