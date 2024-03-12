const express = require("express");
const app = express();

// Other setup code

// Status route
app.get("/status", (req, res) => {
  res
    .status(200)
    .send({ status: "OK", message: "Server is running smoothly." });
});

app.listen(11435, "0.0.0.0", () => {
  console.log("Server is running on port 11434");
});
