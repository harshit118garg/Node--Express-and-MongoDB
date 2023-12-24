const fs = require("fs");

const dataFile = JSON.parse(fs.readFileSync("../static/users.json", "utf8"));
const users = dataFile.users;

exports.getAllUsers = (req, res) => {
  res.send(users);
};

exports.getSingleUser = (req, res) => {
  const _id = parseInt(req.params.id);
  const user = users.find((p) => p.id === _id);
  res.json(user);
};

exports.createNewUser = (req, res) => {
  users.push(req.body);
  res.send(req.body);
};

exports.putSingleUser = (req, res) => {
  const _id = parseInt(req.params.id);
  let userIdx = users.findIndex((p) => p.id === _id);
  users.splice(userIdx, 1, { ...req.body, id: _id });
  res.status(201).json({ message: "User Info Replaced" });
};

exports.patchUser = (req, res) => {
  const _id = parseInt(req.params.id);
  let userIdx = users.findIndex((p) => p.id === _id);
  const user = users[userIdx];
  users.splice(userIdx, 1, { ...user, ...req.body });
  res.status(201).json();
};

exports.deleteUser = (req, res) => {
  const _id = parseInt(req.params.id);
  let userIdx = users.findIndex((p) => p.id === _id);
  users.splice(userIdx, 1);
  res.status(201).send({ messgae: "user deleted" });
};
