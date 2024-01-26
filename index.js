const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(cors);

app.get("/", (req, res) => {
  res.send("Arthmetic service - Hello World!");
});

app.get("/add", (req, res) => {
  const num1 = parseInt(req.query.num1, 10);
  const num2 = parseInt(req.query.num2, 10);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;

    res.json({ sum: sum });
  } else {
    res.status(400).json({ error: "Invalid numbers provided" });
  }
});

app.listen(port, () => {
  console.log("PORT RUNNNING!");
});
