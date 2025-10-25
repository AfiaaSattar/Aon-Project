const express = require("express");

const app = express();
const db = require("./db.js");

app.use(express.json());

app.get("/", async (req, res) => {
  res.send({ message: "Server is Live..." });
});

app.get("/products", async (req, res) => {
  let result = await db.query("select * from products");
  res.send(result.rows);
});

app.get("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let result = await db.query(`select * from products where id = ${id}`);
  res.send(result.rows);
});

app.post("/products", async (req, res) => {
  const body = req.body;
  let result = await db.query(`insert into products (name, description, price)
                 values ('${body.name}', '${body.description}', ${body.price})`);
  if (result.rowCount !== 1) {
    return res.status(500).send({ message: "Error...." });
  }
  res.send({message: "Insert Succefulley!."});
});

process.on("SIGINT", async () => {
  await db.end();
  process.exit(0);
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
