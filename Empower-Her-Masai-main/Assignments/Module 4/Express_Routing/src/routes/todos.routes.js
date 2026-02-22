const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, '../db.json');
const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// POST /todos/add
router.post('/add', (req, res) => {
    const db = getDB();
    const newTodo = { id: Date.now().toString(), ...req.body };
    db.todos.push(newTodo);
    saveDB(db);
    res.status(201).json(newTodo);
});

// GET /todos
router.get('/', (req, res) => {
    res.json(getDB().todos);
});

// GET /todos/:todoId
router.get('/:todoId', (req, res) => {
    const todo = getDB().todos.find(t => t.id === req.params.todoId);
    todo ? res.json(todo) : res.status(404).send("Todo not found");
});

// PUT /todos/update/:todoId
router.put('/update/:todoId', (req, res) => {
    const db = getDB();
    const index = db.todos.findIndex(t => t.id === req.params.todoId);
    if (index !== -1) {
        db.todos[index] = { ...db.todos[index], ...req.body };
        saveDB(db);
        res.send("Todo updated");
    } else {
        res.status(404).send("Todo not found");
    }
});


router.delete('/delete/:todoId', (req, res) => {
    let db = getDB();
    db.todos = db.todos.filter(t => t.id !== req.params.todoId);
    saveDB(db);
    res.send("Todo deleted");
});

module.exports = router;