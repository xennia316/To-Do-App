const express = require("express");
const ToDo = require("../Models/todo.model");
const router = express.Router();

const ToDoModel = require("../Models/todo.model");

router.post("/add", async (req, res) => {
  const { content, dueDate, priority } = await req.body;

  const NewToDo = await new ToDo({
    content,
    dueDate,
    priority,
    completed: false,
  });
  NewToDo.save();

  res.json({ message: "Succesfully added a to do", data: NewToDo });
});

router.delete("/delete/:id", async (req, res) => {
  const _id = await req.params.id;
  const Deleted = await ToDoModel.findByIdAndDelete({ _id });
  res.json({ Deleted });
});

router.post("/", async (req, res) => {});

module.exports = router;
