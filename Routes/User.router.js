const express = require("express");
const UserModel = require("../Models/user.model");
const router = express.Router();

router.post("/signup", async (req, res) => {
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
    ? res.json({ message: "Welcome", data: LoggedIn })
    : res.json({ message: "Not found" });
});

router.post("/updateuser", async (req, res) => {
  const { id, name, email, password } = await req.body;
  const UserUpdate = await UserModel.findByIdAndUpdate(
    { id },
    { name, email, password }
  );
  UserUpdate
    ? res.json({ message: "Welcome", data: UserUpdate })
    : res.json({ message: "Not found" });
});
router.delete("/delete-user/:id", async (req, res) => {
  const _id = await req.params.id;
  const Deleted = await UserModel.findByIdAndDelete({ _id });
  res.json({ Deleted });
});

module.exports = router;
