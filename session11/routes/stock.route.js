//
// 2️⃣ GET /stock/available
//    ➤ Purpose: Return the number of “ready” cards for each plan.
//    ➤ Response Example:
//        [
//          { planId: 1, planName: "Zain 5K", available: 25 },
//          { planId: 2, planName: "Google Play 10$", available: 10 }
//        ]
const express = require("express");
const router = express.Router();
const { getAvailableStock } = require("../controllers/stockController");

router.get("/available", async (req, res) => {
  try {
    const stock = await getAvailableStock();
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching stock." });
  }
});

// 3️⃣ GET /stock/sold
//    ➤ Purpose: Count sold cards for each plan.
router.get("/sold", async (req, res) => {
  try {
    const stock = await getSoldStock();
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching sold stock." });
  }
});
// 8️⃣ POST /stock/batch
//    ➤ Purpose: Insert multiple card codes for one plan.
//    ➤ Body: { planId, codes: ["...", "..."] }
//    ➤ Response: { inserted: N }
router.post("/batch", async (req, res) => {
  try {
    const { planId, codes } = req.body;

    const result = await addStockBatch(planId, codes);

    if (!result.success) {
      return res.status(400).send({ message: result.message });
    }

    res.send({ inserted: result.inserted });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "An issue found" });
  }
});
module.exports = router;
