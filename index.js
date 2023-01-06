const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
require(`dotenv`).config();

const connection = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((res) => {
      console.log(res.menu);
      switch (res.menu) {
        case "View all Departments":
          viewAllDepartments();
          break;
        case "View all Roles":
          viewAllRoles();
          break;
        case "View all Employees":
          viewAllEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          break;
        default:
          console.log("Error has occurred");
          connection.end();
          break;
      }
    })
    .catch((err) => {
      if (err) throw err;
    });
}
function viewAllDepartments() {
  let query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewAllEmployees() {
  let query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}
function viewAllRoles() {
  let query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}
