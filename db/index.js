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

    createEmp(){
        return this.con.query("INSERT INTO employees")
    }

    createDept(){
        return this.con.query("INSERT INTO departments")
    }

    createRole(){
        return this.con.query("INSERT INTO roles")
    }

    updateEmp(){
        return this.con.query("UPDATE employees SET role_id = ?")
    }

    deleteDept(){
        return this.con.query("DELETE FROM departments WHERE id = ?")
    }

    deleteEmp(){
        return this.con.query("DELETE FROM employees WHERE id = ?")
    }

    deleteRole(){
        return this.con.query("Delete FROM roles WHERE id = ?")
    }
};

module.exports = new DB(con);

