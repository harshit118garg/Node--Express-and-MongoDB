const TaskModel = require("../models/taskSchema");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.Task.find();
    console.log("tasks", tasks);
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
    console.log("req.body", req.body);
    await newTask
      .save()
      .then(() => {
        res.status(201).json({ message: "object saved in database" });
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
    await TaskModel.Task.findOneAndUpdate(
      { taskID: { $eq: req.params.taskID } },
      req.body,
      {
        new: true,
      }
    )
      .then((updatedTask) => {
        console.log("updatedTask", updatedTask);
        res.status(201).json(updatedTask);
        console.log("object updated successfully");
      })
      .catch((err) => {
        res.status(400).json({
          message: "error occured in updating the task to database",
        });
        console.log("error occured in updating the task to database", err);
      });
  } catch (error) {
    console.log("error in updating the task", error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await TaskModel.Task.findOneAndDelete({
      taskID: { $eq: req.params.taskID },
    })
      .then((deletedProduct) => {
        res.status(201).json(deletedProduct);
        console.log("object deleted successfully");
      })
      .catch((err) => {
        res.status(400).json({
          message: "error occured in deleting the task from database",
        });
        console.log("error occured in deleting the task from database", err);
      });
  } catch (error) {
    console.log("error in deleting the task", error);
  }
};
