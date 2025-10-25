const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/foo", (req, res) => {
  let filter = req.query.filter;
  //TODO: Implement GET method
  res.json({ message: "This is GET method" , filter});
});

app.post("/foo", (req, res) => {
  let body = req.body;
  //TODO: Implement POST method
  res.json({ message: "This is POST method", body });
});

app.delete("/foo/:id", (req, res) => {
  let id = req.params.id;
  //TODO: Implement DELETE method
  res.json({ message: "This is DELETE method", id });
});

app.put("/foo/:id", (req, res) => {
  let id = req.params.id;
  let body = req.body;
  //TODO: Implement PUT method
  res.json({ message: "This is PUT method", id, body });
});

app.get('/calc-age', (req, res) => {
  let year = parseInt(req.query.year);
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;
  res.json({ age });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
