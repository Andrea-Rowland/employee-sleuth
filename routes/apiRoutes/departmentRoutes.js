const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all departments
router.get('/api/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
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

// Add a department
router.post('/department', ({ body }, res) => {
    const errors = InputCheck(
        body,
        'id',
        'name'
    );
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO departments (id, name)`;
    const params = [
        body.id,
        body.name
    ];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});