const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  putSingleUser,
  patchUser,
  deleteUser,
} = require("../controller/users");

const router = express.Router();

router
  .get("/", getAllUsers)
  .get("/:id", getSingleUser)
  .post("/", createNewUser)
  .put("/:id", putSingleUser)
  .patch("/:id", patchUser)
  .delete("/:id", deleteUser);

exports.router = router;
