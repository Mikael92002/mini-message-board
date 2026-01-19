const pool = require("./pool");

exports.getAllRows = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

exports.insertMessage = async (username, message, date) => {
  const query = await pool.query(
    "INSERT INTO messages (name, text, added) VALUES($1,$2,$3)",
    [username, message, date],
  );
  
};
