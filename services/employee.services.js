const db = require("../db");

module.exports.getAllEmployees = async () => {
  const [rows] = await db
    .query("select * from employees")
    .catch((err) => console.log(err));
  return rows;
};

module.exports.getEmployee = async (id) => {
  const [rows] = await db
    .query("select * from employees where id= ?", id)
    .catch((err) => console.log(err));
  return rows;
};


module.exports.addEmployee = async (name, employee_Code, salary) => {
  try {
    // let query;
    // if (!id) {
    //    query="INSERT INTO employees (name, employee_code, salary) VALUES (?, ?, ?)";
    // }else{
    //    query="UPDATE employees SET name = ?, employee_code = ?, salary = ? WHERE id = ?";
    // }
    const query="INSERT INTO employees (name, employee_code, salary) VALUES (?, ?, ?)";

    const params = [name, employee_Code, salary];
    const [rows] = await db.query(query, params);

    return rows;

  } catch (error) {
    console.error(error);
    throw error;
  }
};


module.exports.UpdateEmployee = async (id,name, employee_Code, salary) => {
  try {
    const query="UPDATE employees SET name = ?, employee_code = ?, salary = ? WHERE id = ?";

    const params = [name, employee_Code, salary,id];
    const [rows] = await db.query(query, params);

    return rows;

  } catch (error) {
    console.error(error);
    throw error;
  }
};
