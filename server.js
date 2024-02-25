const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mydatabase",
  password: "sala4492",
  port: 5432,
});

app.use(express.urlencoded({ extended: false }));

// Handle form submission
app.post("/users", async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;
    const query = `
      INSERT INTO users(name, username, email, phone, password)
      VALUES($1, $2, $3, $4, $5)
    `;
  //;;;;;;;;;;;;;;;;;sa `const values = [name, username, email, phone, password];
    const result = await pool.query(query, values);
    console.log("Data inserted successfully:", result.rowCount);
    res.send("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
