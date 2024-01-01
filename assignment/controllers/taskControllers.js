const TaskModel = require("../models/taskSchema");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.Task.find();
    res.render("tasks", { tasks: tasks });
  } catch (error) {
    console.log("error in getting info of all tasks", error);
  }
};

exports.findSingleTask = async (req, res) => {
  try {
    const _taskID = req.params.taskID;
    const task = await TaskModel.Task.findOne({
      taskID: { $eq: _taskID },
    });
    res.json(task);
    console.log("task fetched");
  } catch (error) {
    console.log("error in getting info of the task", error);
  }
};

exports.addNewTask = async (req, res) => {
  try {
    const newTask = new TaskModel.Task(req.body);
    await newTask
      .save()
      .then(async () => {
        res.status(201).redirect("/");
        console.log("object saved in database");
      })
      .catch((err) => {
        res.status(400).json({ error: `something is missing ${err}` });
        console.log("error occured in saving to database", err);
      });
  } catch (error) {
    console.log("error in adding a new task", error);
  }
};

exports.patchTask = async (req, res) => {
  try {
    const updatedTask = await TaskModel.Task.findOneAndUpdate(
      { taskID: { $eq: req.params.taskID } },
      req.body,
      {
        new: true,
      }
    );
    res.status(201).redirect("/");
    console.log("object updated successfully");
  } catch (error) {
    res.status(400).json({
      message: "error occured in updating the task to database",
    });
    console.log("error occured in updating the task to database", error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deletedProduct = await TaskModel.Task.findOneAndDelete({
      taskID: { $eq: req.params.taskID },
    });
    res.status(201).json(deletedProduct);
  } catch (error) {
    res.status(400).json({
      message: "error occured in deleting the task from database",
    });
    console.log("error in deleting the task", error);
  }
};
