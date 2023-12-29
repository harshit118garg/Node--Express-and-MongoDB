const express = require("express");
const {
  getAllTasks,
  findSingleTask,
  deleteTask,
  addNewTask,
  patchTask,
} = require("../controllers/taskControllers");

const router = express.Router();

router
  .get("/", getAllTasks)
  .get("/:taskID", findSingleTask)
  .post("/", addNewTask)
  .patch("/:taskID", patchTask)
  .delete("/:taskID", deleteTask);

exports.router = router;
