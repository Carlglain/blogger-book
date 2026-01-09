const User = require("../models/Users");

const createUser = async (req, res) => {
  const data = req.body;
  await User.create(data);
  res.status(201).json(user);
};
const allUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};
const specificUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  res.status(200).json(user);
};
