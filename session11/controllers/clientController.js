const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (body) => {
  const phone = body.phone;
  const password = body.password;
  const name = body.name;

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.query(`INSERT INTO Client (name, phone, password)
                VALUES
                ('${name}', '${phone}', '${hashedPassword}');`);

  if (result.rowCount === 1) {
    return true;
  } else {
    return false;
  }
};

const login = async (phone, password) => {
  const result = await db.query(`select * from client where phone = '${phone}'`);
  if (result.rowCount !== 1) {
    return { success: false, message: "user not found!" };
  }

  const user = result.rows[0];
  const hashedPassword = user.password;
  const isPassValid = await bcrypt.compare(password, hashedPassword);
  if (!isPassValid) {
    return { success: false, message: "لاتصير لوتي" };
  }

  const token = jwt.sign(
    {
      id: user.id,
      phone: user.phone,
      name: user.name,
    },
    process.env.SECRET_KEY
  );
  
  return { success: true, token: token };
};

// 1️⃣ GET /client/:id/balance
//    ➤ Purpose: Return the balance of a specific client.
//    ➤ Response: { id, name, balance }
const getBalance = async (id) => {
  const result = await db.query(
    `SELECT id, name, balance FROM client WHERE id = $1`,
    [id]
  );

  if (result.rowCount !== 1) {
    return null;
  }

  return result.rows[0];
};

// 6️⃣ POST /client/:id/topup
//    ➤ Purpose: Add funds to a client’s wallet.
//    ➤ Body: { amount }
//    ➤ Response: { id, oldBalance, newBalance }
const topUp = async (clientId, amount) => {
  const { rows } = await db.query(`SELECT balance FROM client WHERE id = $1`, [clientId]);
  
  if (rows.length === 0) {
    return { success: false, message: "Client not found" };
  }
  const oldBalance = parseFloat(rows[0].balance);
  const newBalance = oldBalance + parseFloat(amount);

  await db.query(`UPDATE client SET balance = $1 WHERE id = $2`, [newBalance, clientId]);

  return { success: true, id: clientId, oldBalance, newBalance };
};

module.exports = {
  register,
  login,
  getBalance,
  topUp,
};
