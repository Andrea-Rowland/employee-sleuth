const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// View all roles
router.get('api/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
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

// Add a role
router.post('/roles', ({ body }, res) => {
    const errors = inputCheck(
        body,
        'id',
        'title',
        'salary',
        'department_id'
    );
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO roles (id, title, salary, department_id)
    VALUES (?,?,?,?)`;
    const params = [
        body.id,
        body.title,
        body.salary,
        body.department_id
    ];
    db.query(sql, params, (err, result) => {
        if (err); {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


