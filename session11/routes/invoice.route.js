const express = require("express");
const router = express.Router();
const { getClientInvoices } = require("../controllers/invoiceController");
const clientAuth = require("../middleware/clientAuth");
// 7️⃣ GET /invoice/client/:id
//    ➤ Purpose: Return recent invoices for one client (limit 50).
router.get("/client/:id", clientAuth, async (req, res) => {
  try {
    const clientId = parseInt(req.params.id);

    const invoices = await getClientInvoices(clientId);

    res.send(invoices);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "اكو مشكله بالدنيا..." });
  }
});

module.exports = router;
