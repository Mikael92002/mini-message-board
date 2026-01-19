const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR(15),
text VARCHAR(250),
added TIMESTAMP
);

INSERT INTO messages (name, text, added)
VALUES
    ('LeGanderson', 'Hoopin shootin', '2025-01-18 14:30:15'),
    ('bigFella', 'Off work tomorrow please?', '2025-01-18 14:30:16');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PW}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
