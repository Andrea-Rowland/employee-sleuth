const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// View all departments
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
    const sql = `INSERT INTO departments (id, name)
    VALUES (?,?)`;
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

// Delete a department
router.delete('/api/department/:id', (req, res) => {
    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
        // checks if anything was deleted
      } else if (!result.affectedRows) {
        res.json({
          message: 'Department not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });

  module.exports = router