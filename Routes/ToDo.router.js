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
router.get("/display", async (req, res) => {
  const all = await ToDoModel.find({});
  res.json({ data: all });
});
router.delete("/delete/:id", async (req, res) => {
  const _id = await req.params.id;
  const Deleted = await ToDoModel.findByIdAndDelete({ _id });
  res.json({ Deleted });
});

router.put("/update/:id", async (req, res) => {
  const _id = req.params;
  const { dueDate, priority, content } = req.body;

  const todo = await ToDoModel.findByIdAndUpdate(
    { _id },
    { dueDate, priority, content }
  );
  (await todo).save();
  res.json({ message: Successful, data: todo });
});

module.exports = router;
