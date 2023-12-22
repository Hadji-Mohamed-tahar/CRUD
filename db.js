const mysql = require("mysql2/promise");

const mysqlPoll = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});



  module.exports = mysqlPoll;

