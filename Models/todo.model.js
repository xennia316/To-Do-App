const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema(
  {
    content: String,
    completed: Boolean,
    dueDate: Date,
    priority: Number,
  },
  { timestamps: true }
);

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;
