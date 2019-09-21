require('dotenv').config()
const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 4000;

const publicPath = path.join(__dirname,"..", "client", "build",);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'arcsurf_db',
  password : process.env.DB_PASSWORD,
});

app.use(express.static(publicPath));

app.get("/api", (req, res) => {
  
  res.send("hey")
})

// app.get("*", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });


app.listen(port, () => `Listening on port ${port}...`);
