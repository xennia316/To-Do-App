const express = require("express");
const UserModel = require("../Models/user.model");
const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { name, email, password } = await req.body;
  const newUser = await new UserModel({
    name,
    email,
    password,
  });
  newUser.save();
  res.json({ message: `Welcome ${newUser.name}`, data: newUser });
});

router.post("/login", async (req, res) => {
  const { email, password } = await req.body;

  const LoggedIn = await UserModel.findOne({ email, password });

  LoggedIn
    ? res.json({ message: Welcome, data: LoggedIn })
    : res.json({ message: "Not found" });
});

router.put("/update-user/:id", async (req, res) => {
  const { _id } = req.params.id;
  const { name, email, password } = await req.body;
  const UserUpdate = await UserModel.findOneAndUpdate(
    { _id },
    { name, email, password }
  );
  UserUpdate.save();
});
router.delete("/delete-user/:id", async (req, res) => {
  const { _id } = req.params.id;
  const DeletedUser = await UserModel.findByIdAndDelete({ _id });
});

module.exports = router;
