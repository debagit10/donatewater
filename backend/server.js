const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT_NO || 5000;

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
