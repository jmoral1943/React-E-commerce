require("dotenv").config();
const router = require("express").Router();
const mysql = require("mysql2");

// db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "arcsurf_db",
  password: process.env.DB_PASSWORD
});

router.get("/products", (req, res) => {
  if (req.query.name) {
    let sql =
      "SELECT * FROM products LEFT JOIN pricing ON products.productID=pricing.productID WHERE name LIKE ?;";
    const inserts = "%" + req.query.name + "%";
    sql = mysql.format(sql, inserts);
    connection.execute(sql, (err, results, fields) => {
      res.json(results);
    });
  } else if (req.query.tags) {
    let sql =
      "SELECT * FROM products LEFT JOIN pricing ON products.productID=pricing.productID WHERE tags LIKE ?;";
    const inserts = "%" + req.query.tags + "%";
    sql = mysql.format(sql, inserts);
    connection.execute(sql, (err, results, fields) => {
      res.json(results);
    });
  } else {
    connection.execute(
      "SELECT * FROM products LEFT JOIN pricing ON products.productID=pricing.productID;",
      (err, results, fields) => {
        res.json(results);
      }
    );
  }
});

router.get("/contacts", (req, res) => {
  connection.execute('SELECT * FROM contacts', (err, results, fields) => {
    res.json(results)
  })
})

module.exports = router;
