const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PW,
  port: process.env.DB_PORT || 3000,
});
