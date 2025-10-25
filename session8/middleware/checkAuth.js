const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader === "valid-token") {
    next(); // User is authenticated, proceed to the next middleware/route handler
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};

module.exports = checkAuth;