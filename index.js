const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.status(202).json("Server running we are live and connected to jenkins.");
});

app.listen(5500, () => console.log("Server started on port 5500"));
