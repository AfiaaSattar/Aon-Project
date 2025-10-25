// routes/user.routes.js
const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  addNewUser,
} = require("../controllers/user.controller");
const checkAuth = require("../middleware/checkAuth");

router.get("/", (req, res) => {
  let users = getAllUsers();
  res.send(users);
});

router.get("/:id", (req, res) => {
  let userId = parseInt(req.params.id);
  let user = getUserById(userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

router.post("/", checkAuth, (req, res) => {
  try {
    let newUser = req.body;
    let result = addNewUser(newUser);
    console.log("New user added:", result);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
