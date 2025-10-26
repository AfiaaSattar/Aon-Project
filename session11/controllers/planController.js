const db = require("../db");

const getPlans = async () => {
  const { rows } = await db.query("SELECT * FROM plan");
  return rows;
};

const getPlanById = async (palnId) => {
  const { rows } = await db.query(`SELECT * FROM plan WHERE id = ${palnId}`);
  return rows[0];
};

const purchase = async (planId, clientId) => {
  const stockResult = await db.query(
    `SELECT * FROM stock WHERE plan_id = ${planId} AND state = 'ready'`
  );
  if (stockResult.rows.length == 0) {
    return { success: false, message: "no stock" };
  }

  const clientResults = await db.query(
    `SELECT * FROM client WHERE id = ${clientId}`
  );

  if (clientResults.rows.length == 0) {
    return { success: false, message: "منيلك هاي الكلاوات" };
  }

  const planResult = await db.query(`SELECT * FROM plan WHERE id = ${planId}`);

  let user = clientResults.rows[0];
  let stock = stockResult.rows[0];
  let plan = planResult.rows[0];

  if (user.balance < parseInt(plan.price)) {
    return { success: false, message: "ماعندك فلوس، روح اشتغل وتعال" };
  }

  await db.query(`UPDATE stock SET state = 'sold' WHERE id = ${stock.id}`);
  await db.query(
    `UPDATE client SET balance = ${
      user.balance - plan.price
    } WHERE id = ${clientId}`
  );

  const result = await db.query(
    `INSERT INTO invoice (plan_id, code, client_id, price, plan_name)
    VALUES (${planId}, '${stock.code}', ${clientId}, ${plan.price}, '${plan.name}')
    RETURNING *;`
  );

  const newInvoice = result.rows[0];

  return { success: true, code: stock.code, newInvoice };
};

// 5️⃣ GET /plans/:id/stock
//    ➤ Purpose: Show stock summary for a single plan (ready/sold/error counts).
//    ➤ Response Example:
//        { planId, planName, ready, sold, error }

const getPlanStock = async (planId) => {
  // Get stock counts for the plan
  const { rows } = await db.query(
    `SELECT 
       plan.id AS "planId",
       plan.name AS "planName",
       COUNT(CASE WHEN stock.state='ready' THEN 1 END) AS ready,
       COUNT(CASE WHEN stock.state='sold' THEN 1 END) AS sold,
       COUNT(CASE WHEN stock.state='error' THEN 1 END) AS error
     FROM plan
     LEFT JOIN stock ON stock.plan_id = plan.id
     WHERE plan.id = $1
     GROUP BY plan.id`,
    [planId]
  );

  return rows[0] || { planId, planName: null, ready: 0, sold: 0, error: 0 };
};

module.exports = {
  getPlans,
  getPlanById,
  purchase,
  getPlanStock,
};
