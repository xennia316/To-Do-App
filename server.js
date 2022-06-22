const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const UserRouter = require("./Routes/User.router");
const ToDoRouter = require("./Routes/ToDo.router");

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/user", UserRouter);
app.use("/api/to-do", ToDoRouter);

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database successfully connected ...");
  })
  .catch(() => {
    console.log("Unable to connect to database ...");
  });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Using declared port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
