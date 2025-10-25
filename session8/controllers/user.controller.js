// controllers/user.controller.js

const users = require("../db/user.json");

const getAllUsers = () => {
  return users;
};

const getUserById = (userId) => {
  let user = users.find((u) => u.id === userId);
  return user;
};

const addNewUser = (user) => {
  users.push(user);
  return { success: true, message: "User added successfully" };
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser
};
