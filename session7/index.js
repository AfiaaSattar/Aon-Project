const express = require("express");
const app = express();
const port = 3000;

const todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build a REST API", completed: false },
  { id: 3, task: "Write tests", completed: false },
  { id: 4, task: "Deploy to production", completed: true },
  { id: 5, task: "Monitor performance", completed: true },
];

app.use(express.json());

app.get("/todo-list", (req, res) => {
  res.json(todos);
});

app.get("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let todo = todos.find((t) => t.id === id);
  res.json(todo);
});

app.get("/todo-filter", (req, res) => {
  const isCompleted = req.query.isCompleted === "true";
  let filteredTodos = todos.filter((t) => t.completed === isCompleted);
  res.json(filteredTodos);
});

app.post("/todo", (req, res) => {
  const body = req.body;
  todos.push(body);
  res.json({ message: "Todo added successfully", todo: body });
});

app.delete("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let newTodos = todos.filter((t) => t.id !== id);
  res.json({ message: "Todo deleted successfully", newTodos });
});

app.put("/todo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;

  let newArr = todos.map((todo) => {
    if (todo.id === id) {
      return body;
    }
    return todo;
  });

  res.json({ message: "Todo updated successfully", newArr });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
