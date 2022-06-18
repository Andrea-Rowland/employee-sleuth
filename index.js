const inquirer = require('inquirer');
require("console.table");

const db = require('./db');



function menu() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'What would you like to do?',
      choices: [
          'view all departments', 
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee']
    },
  ])
  .then((answer) => {
    // console.log(answer.userChoice);
    var userChoice = answer.userChoice;
    // SWITCH CASE LOGIC
  switch (userChoice) {
    case 'view all departments':
      viewAllDeps();
      break;
    case "view all roles":
      viewAllRoles();
      break;
    case "view all employees":
      viewAllEmps();
      break;      
    case "add a department":
      createDept();
      break;
    case "add a role":
      createRole();
      break;
    case "add an employee":
      createEmployee();
      break;
    case "update an employee":
      updateEmp();
    default:
      //Statements executed when none of
      //the values match the value of the expression
      break;
  }
  });
}

menu();



  async function viewAllDeps() {
    const departments = await db.findAllDepts();

    console.table(departments);

    menu();
  }

  async function viewAllRoles() {
    const roles = await db.findAllRoles();

    console.table(roles);

    menu();
  }

  async function viewAllEmps() {
    const employees = await db.findAllEmps();

    console.table(employees);

    menu();
  }

  async function createDept() {
    const department = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please type the name of the department you want to add." 
      }
    ])

    await db.createDept(department);

    console.log("Department was added!!");
    menu();
  }

  async function createRole() {
    const role = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please type the name of the role you want to add." 
      },
      {
        type: "input",
        name: "salary",
        message: "Please type the salary you want to add."
      },
      {
        type: "input",
        name: "department_id",
        message: "Please type the department id the role will be associated with."
    }
    ])

    await db.createRole(role);

    console.log("Role was added!!");
    menu();
  }

  async function createEmployee() {
    const employee = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "Please type the first name of the employee to be added." 
      },
      {
        type: "input",
        name: "last_name",
        message: "Please type the last name of the employee to be added."
      },
      {
        type: "input",
        name: "role_id",
        message: "Please type the role id the employee will be associated with."
      }
    ])

    await db.createEmp(employee);

    console.log("Employee was added!!");
    menu();
  }

  async function updateEmp() {
    const employees = await db.findAllEmps();
    const roles = await db.findAllRoles();
    const employee = await inquirer.prompt([
      {
        type: "list",
        name: "choose_emp",
        message: "Which employee would you like to update?" ,
        choices: employees.map(employee => employee.first_name + ' ' + employee.last_name)
      },
      {
        type: "list",
        name: "choose_role",
        message: "Which role do you want to update to?",
        choices: roles.map(role => role.title) 
      }

    ])
    console.log(employee);
    const empId = employees.filter(emp => (emp.first_name + ' ' + emp.last_name)=== employee.choose_emp)[0].id;
    console.log(empId);
    const roleId = roles.filter(role => role.title === employee.choose_role)[0].id;
    console.log(roleId);    // await db.updateEmp(employee);

    console.log("Employee was updated!!");
    menu();
  }

  


 