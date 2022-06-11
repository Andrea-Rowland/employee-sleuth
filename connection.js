
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

