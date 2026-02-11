import { TodoModel } from '../models/todoModel.js';

export const getTodos = (req, res) => {
  try {
    const todos = TodoModel.getAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error: error.message });
  }
};

export const createTodo = (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTodo = TodoModel.create(title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

export const updateTodo = (req, res) => {
  try {
    const updatedTodo = TodoModel.update(req.params.id, req.body);
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

export const deleteTodo = (req, res) => {
  try {
    const deleted = TodoModel.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};