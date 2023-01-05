const mysql = require("mysql2");
const inquirer = require("inquirer");
const express = require("express");
const PORT = process.env.PORT || 3001;
const cTable = require("console.table");
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

// Query database
db.query("SELECT * FROM employees", function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function start() {
  inquirer
    .prompt({
      type: "list",
      message: "Welcome to Employee Tracker. What would you like to do?",
      name: "choices",
      choices: [
        {
          name: "View all employees",
          value: "viewEmployees",
        },
        {
          name: "View all departments",
          value: "viewDepartments",
        },
        {
          name: "View all roles",
          value: "viewRoles",
        },
        {
          name: "Add employee",
          value: "addEmployee",
        },
        {
          name: "Add department",
          value: "addDept",
        },
        {
          name: "Add role",
          value: "addRole",
        },
        {
          name: "Update role",
          value: "updateRole",
        },
        {
          name: "Quit",
          value: "quit",
        },
      ],
    })
    .then(function (res) {
      // console.log(res);
      menu(res.choices);
    });
}

function menu(option) {
  switch (option) {
    case "viewEmployees":
      viewAllEmployees();
      break;
    case "viewDepartments":
      viewAllDepartments();
      break;
    case "viewRoles":
      viewAllRoles();
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "addDept":
      addDept();
      break;
    case "addRole":
      addRole();
      break;
    case "updateRole":
      updateRole();
      break;
    case "quit":
      end();
  }
}

function viewAllEmployees() {
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
    function (err, res) {
      if (err) throw err;

      console.table(res);
      start();
    }
  );
}

start();
