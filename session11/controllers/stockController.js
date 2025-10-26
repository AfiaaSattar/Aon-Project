const db = require("../db");
//
// 2️⃣ GET /stock/available
//    ➤ Purpose: Return the number of “ready” cards for each plan.
//    ➤ Response Example:
//        [
//          { planId: 1, planName: "Zain 5K", available: 25 },
//          { planId: 2, planName: "Google Play 10$", available: 10 }
//        ]
const getAvailableStock = async () => {
  const result = await db.query(`
    SELECT 
      p.id AS "planId",
      p.name AS "planName",
      COUNT(s.id) AS available
    FROM plan p
    LEFT JOIN stock s ON s.plan_id = p.id AND s.state = 'ready'
    GROUP BY p.id, p.name
    ORDER BY p.id;
  `);

  return result.rows; 
};
// 3️⃣ GET /stock/sold
//    ➤ Purpose: Count sold cards for each plan.
const getSoldStock = async () => {
  const result = await db.query(`
    SELECT 
      p.id AS "planId",
      p.name AS "planName",
      COUNT(s.id) AS sold
    FROM plan p
    LEFT JOIN stock s ON s.plan_id = p.id AND s.state = 'sold'
    GROUP BY p.id, p.name
    ORDER BY p.id;
  `);

  return result.rows; // [{ planId, planName, sold }, ...]
};
// 8️⃣ POST /stock/batch
//    ➤ Purpose: Insert multiple card codes for one plan.
//    ➤ Body: { planId, codes: ["...", "..."] }
//    ➤ Response: { inserted: N }
const addStockBatch = async (planId, codes) => {
  if (!planId || !codes || !Array.isArray(codes) || codes.length === 0) {
    return { success: false, message: "Plan ID and codes are required" };
  }

  // Create the insert query dynamically
  const values = codes.map(code => `('${code}', ${planId}, 'ready', now())`).join(", ");

  const result = await db.query(
    `INSERT INTO stock (code, plan_id, state, created_at) VALUES ${values}`
  );

  return { success: true, inserted: result.rowCount };
};

module.exports = {
  getAvailableStock,
  getSoldStock,
  addStockBatch,
};