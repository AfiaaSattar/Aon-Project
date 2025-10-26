const db = require("../db");
// 7️⃣ GET /invoice/client/:id
//    ➤ Purpose: Return recent invoices for one client (limit 50).
const getClientInvoices = async (clientId) => {
  // Fetch last 50 invoices for this client, ordered by newest first
  const { rows } = await db.query(
    `SELECT * FROM invoice WHERE client_id = $1 ORDER BY created_at DESC LIMIT 50`,
    [clientId]
  );
  return rows;
};

module.exports = {
  getClientInvoices,
};
