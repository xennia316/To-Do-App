const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
