INSERT INTO department (department)
VALUE ("Sales");
INSERT INTO department (department)
VALUE ("Engineering");
INSERT INTO department (department)
VALUE ("Finance");
INSERT INTO department (department)
VALUE ("Legal");
INSERT INTO role (title, salary, department_id)
VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 190000, 4);f
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Priya", "Patel", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mara", "Boychek", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jah","Roderdamn",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Juan", "Leon", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Katarina", "Blogovich", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Pamala", "Johnson", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Tomeseo", "Gionovino", 2, 7);