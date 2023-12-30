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
  .get("/add", (req, res) => {
    res.render("addTask", { title: "Add New Task" });
  })
  .post("/add", addNewTask)
  .get("/:taskID", findSingleTask)
  .patch("/:taskID", patchTask)
  .delete("/:taskID", deleteTask);

exports.router = router;
