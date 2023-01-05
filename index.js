const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    // MySQL username,
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employees_db database.`)
);
