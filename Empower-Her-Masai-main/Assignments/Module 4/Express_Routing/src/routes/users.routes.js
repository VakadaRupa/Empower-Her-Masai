const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, '../db.json');

// Helper function to read/write database
const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const saveDB = (data) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

// POST /users/add
router.post('/add', (req, res) => {
    const db = getDB();
    const newUser = { id: Date.now().toString(), ...req.body };
    db.users.push(newUser);
    saveDB(db);
    res.status(201).send({ message: "User added", user: newUser });
});

// GET /users
router.get('/', (req, res) => {
    const db = getDB();
    res.status(200).json(db.users);
});

// GET /users/:userId
router.get('/:userId', (req, res) => {
    const db = getDB();
    const user = db.users.find(u => u.id === req.params.userId);
    user ? res.json(user) : res.status(404).send("User not found");
});

// PUT /users/update/:userId
router.put('/update/:userId', (req, res) => {
    const db = getDB();
    const index = db.users.findIndex(u => u.id === req.params.userId);
    if (index !== -1) {
        db.users[index] = { ...db.users[index], ...req.body };
        saveDB(db);
        res.send("User updated successfully");
    } else {
        res.status(404).send("User not found");
    }
});

// DELETE /users/delete/:userId
router.delete('/delete/:userId', (req, res) => {
    let db = getDB();
    const exists = db.users.some(u => u.id === req.params.userId);
    if (exists) {
        db.users = db.users.filter(u => u.id !== req.params.userId);
        saveDB(db);
        res.send("User deleted");
    } else {
        res.status(404).send("User not found");
    }
});

module.exports = router;