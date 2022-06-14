const inquirer = require('inquirer');

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vegas!JMOMarluna",
  database: "sleuth"
});

con.connect(function(err) {
  if (err) throw err;
  
});

inquirer
  .prompt([
    {
      type: 'list',
      name: 'viewType',
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
  //TA helped with this and I don't think it's correct
  // .then(answers => {
  //   console.info('Answer:', answers.viewType);

  //   if (answers.viewType === 'view all departments'){
  //       con.query('Select * from departments', function(err, result) {
  //           if(err) throw err;
  //           console.info(result);
  //       })
  //   } else if (answers.viewType === 'view all roles'){
  //       con.query('Select * from roles', function(err, result) {
  //           if(err) throw err;
  //           console.info(result);
  //       })
  //   } else if (answers.viewType === 'view all employees'){
  //       con.query('Select * from employees', function(err, result) {
  //           if(err) throw err;
  //           console.info(result);
  //       })
  //   }
  //   })