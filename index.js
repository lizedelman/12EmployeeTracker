const mysql = require("mysql2");
const inquirer = require("inquirer");
const PORT = process.env.PORT || 3001;
const cTable = require("console.table");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);

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
