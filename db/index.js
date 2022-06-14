const con = require('./connection');

class DB {
    constructor(con) {
        this.con = con
    }

    findAllEmps(){
        return this.con.query("SELECT * FROM employees")
    }

    findAllDepts(){
        return this.con.query("SELECT * FROM departments")
    }

    findALLRoles(){
        return this.con.query("SELECT * FROM roles")
    }

    
};

module.exports = new DB(con);

