// external import
const express = require("express");
const dotenv = require("dotenv");
// initialize app
const app = express();

// initialize dotenv config
dotenv.config();

// port
const port = process.env.PORT || 3000;

//routing
app.get("/", (req, res) => {
  res.send("hello express");
});
// listing app
app.listen(port, () => {
  console.log(`listing port on ${port}`);
});
