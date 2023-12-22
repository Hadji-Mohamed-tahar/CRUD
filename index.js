const express = require("express");
const app = express();
const db = require("./db");
const EmployeesRouter= require("./Controller/Employees.Controller");


//middleware
// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employees',EmployeesRouter);

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(err.status||500).send("Something went wrong!");
})

db.query("select * from employees")
  .then((data) => {
    console.log("connection succeeded");
    app.listen(3500, () => {
      console.log("listen port 3500");
    });
  })
  .catch((err) => {
    console.log("eror" + err);
  });

  // 15:00
