const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/clientController");
const  clientAuth  = require('../middleware/clientAuth');

router.post("/register", async (req, res) => {
  try {
    const body = req.body;
    const isSaved = await register(body);
    if (!isSaved) {
      return res.status(501).send({ message: "اكو مشكله بالدنيا..." });
    }
    res.send({ message: "Register succefully." });
  } catch (error) {
    res.status(500).send({ message: "اكو مشكله بالدنيا..." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const body = req.body;
    const result = await login(body.phone, body.password);
    if (!result.success) {
      return res.status(501).send({ message: result.message });
    }
    res.send({ token: result.token });
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: "اكو مشكله بالدنيا..." });
  }
});


// 1️⃣ GET /client/:id/balance
//    ➤ Purpose: Return the balance of a specific client.
//    ➤ Response: { id, name, balance }
router.get("/:id/balance", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const balanceInfo = await getBalance(id);

    if (!balanceInfo) {
      return res.status(404).send({ message: "Client not found" });
    }

    res.send(balanceInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An issue found" });
  }
});

// 6️⃣ POST /client/:id/topup
//    ➤ Purpose: Add funds to a client’s wallet.
//    ➤ Body: { amount }
//    ➤ Response: { id, oldBalance, newBalance }
router.post("/:id/topup", clientAuth, async (req, res) => {
  try {
    const clientId = parseInt(req.params.id);
    const amount = parseFloat(req.body.amount);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).send({ message: "Invalid amount" });
    }

    const result = await topUp(clientId, amount);

    if (!result.success) {
      return res.status(404).send({ message: result.message });
    }

    res.send({
      id: result.id,
      oldBalance: result.oldBalance,
      newBalance: result.newBalance,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An issue found" });
  }
});

module.exports = router;
