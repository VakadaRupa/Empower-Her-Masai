const express = require('express');
const fs = require('fs');
const path = require('path');
const rateLimiter = require('../middleware/rateLimiter.middleware');
const validateTodo = require('../middleware/validateTodo.middleware');

const router = express.Router();
const dbPath = path.join(__dirname, '../db.json');

// Helper functions to manage JSON file
const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// GET /todos (With Rate Limiting)
router.get('/', rateLimiter, (req, res) => {
    const db = getDB();
    res.status(200).json(db.todos);
});

// POST /todos/add (With Validation)
router.post('/add', validateTodo, (req, res) => {
    const db = getDB();
    const newTodo = {
        id: Date.now().toString(),
        title: req.body.title
    };
    db.todos.push(newTodo);
    saveDB(db);
    res.status(201).json({ message: "Todo created", todo: newTodo });
});

// GET /todos/:todoId
router.get('/:todoId', (req, res) => {
    const todo = getDB().todos.find(t => t.id === req.params.todoId);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
});

// PUT /todos/update/:todoId
router.put('/update/:todoId', (req, res) => {
    const db = getDB();
    const index = db.todos.findIndex(t => t.id === req.params.todoId);
    if (index === -1) return res.status(404).json({ error: "Todo not found" });

    db.todos[index] = { ...db.todos[index], ...req.body };
    saveDB(db);
    res.json({ message: "Todo updated successfully" });
});

// DELETE /todos/delete/:todoId
router.delete('/delete/:todoId', (req, res) => {
    let db = getDB();
    const initialLength = db.todos.length;
    db.todos = db.todos.filter(t => t.id !== req.params.todoId);

    if (db.todos.length === initialLength) {
        return res.status(404).json({ error: "Todo not found" });
    }

    saveDB(db);
    res.json({ message: "Todo deleted successfully" });
});

module.exports = router;