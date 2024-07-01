const express = require("express");
const cors = require("cors");
const { log } = require("console");

const app = express();
app.use(cors());

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(4000, () => {
  console.log("Server Started");
});
