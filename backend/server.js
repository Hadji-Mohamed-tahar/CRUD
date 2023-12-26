const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_students",
});

app.get("/", (req, res) => {
  const sql = "select * from users";
  db.query(sql, (err, data) => {
    if (err) return res.send(err);
    return res.send(data);
  });
});

app.post("/Create", (req, res) => {
  const sql = "INSERT INTO users(name,phone,email) VALUES (?)";
  const values = [req.body.name, req.body.phone, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Created !");
  });
});

app.put("/Update/:id", (req, res) => {
  const sql = "UPDATE users SET name=?, phone=?, email=? WHERE id=?";
  const values = [req.body.name, req.body.phone, req.body.email,req.params.id];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Updated !");
  });
});

app.delete("/Delete/:id", (req, res) => {
  const sql = "Delete from users WHERE id=?";
  const values = [req.params.id];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json("Deleted !");
  });
});


app.listen(8081, () => {
  console.log("server run");
});
