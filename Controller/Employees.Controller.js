const express = require("express");
const router = express.Router();

const services = require("../services/employee.services");

// http://localhost:3500/api/employees

router.get("/", async (req, res) => {
  const employees=await services.getAllEmployees();
  res.send(employees);
});

router.get("/:id", async (req, res) => {
  const employee=await services.getEmployee(req.params.id);
  res.send(employee);
});

router.delete("/:id", async (req, res) => {
  const employee=await services.DeleteEmployee(req.params.id);
  res.send(employee);
  res.send('deleted successfully')
});


router.post("/insert", async (req, res) => {

  const { name, employeeCode, salary } = req.body;

  if (!name || !employeeCode || !salary) {
    return res.status(400).send("Please provide all required data");
  }

  try {
    const result = await services.addEmployee(name, employeeCode, salary);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "An error occurred during connection" });
  }
});



router.put("/update/:employeeId", async (req, res) => {
  const employeeId=req.params.employeeId;
  const {name, employeeCode, salary } = req.body;

  if (!employeeId || !name || !employeeCode || !salary) {
    return res.status(400).send("يرجى توفير جميع البيانات المطلوبة");
  }

  try {
    const result = await services.UpdateEmployee(employeeId, name, employeeCode, salary);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "حدث خطأ أثناء معالجة الطلب" });
  }
});

module.exports = router;