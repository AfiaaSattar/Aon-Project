// index.js

const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/user.routes");

// Middleware to parse JSON bodies
app.use(express.json());

// Use user routes
app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
