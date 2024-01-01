const express = require("express");
const {
  getAllTasks,
  findSingleTask,
  deleteTask,
  addNewTask,
  patchTask,
} = require("../controllers/taskControllers");
const TaskModel = require("../models/taskSchema");

const router = express.Router();

router
  .get("/", getAllTasks)
  .get("/add", (req, res) => {
    res.render("addTask", { title: "Add New Task" });
  })
  .get("/update/:taskID", async (req, res) => {
    const _taskID = Number(req.params.taskID);
    const toUpdateTask = await TaskModel.Task.findOne({
      taskID: { $eq: _taskID },
    });
    res.render("update", { title: "Update Task", task: toUpdateTask });
  })
  .post("/add", addNewTask)
  .post("/update/:taskID", patchTask)
  .get("/:taskID", findSingleTask)
  .delete("/:taskID", deleteTask);

exports.router = router;
