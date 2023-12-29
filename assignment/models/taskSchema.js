const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  taskID: {
    type: Number,
  },
});

taskSchema.pre("save", function (next) {
  if (!this.taskID) {
    this.taskID = Math.floor(Date.now() / 1000);
  }
  next();
});

exports.Task = model(
  `${process.env.COMPASS_TEST_DATABASE_COLLECTION}`,
  taskSchema
);
