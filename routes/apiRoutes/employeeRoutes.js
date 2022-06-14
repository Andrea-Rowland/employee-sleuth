const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// View all employees
router.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// Add an employee
router.post('/employee', ({ body }, res) => {
    const errors = InputCheck(
        body,
        'id',
        'first_name',
        'last_name',
        'role_id',
        'manager_id'
    );
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?,?)`;
    const params = [
        body.id,
        body.first_name,
        body.last_name,
        body.role_id,
        body.manager_id
    ];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message })
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


// Update an employee