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

    findAllRoles(){
        return this.con.query("SELECT * FROM roles")
    }

    createEmp(employee){
        return this.con.query("INSERT INTO employees SET ?",employee)
    }

    createDept(department){
        return this.con.query("INSERT INTO departments SET ?", department)
    }

    createRole(role){
        return this.con.query("INSERT INTO roles SET ?", role)
    }

    updateEmp(){
        return this.con.query("UPDATE employees SET role_id = ? Where id = ?")
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

