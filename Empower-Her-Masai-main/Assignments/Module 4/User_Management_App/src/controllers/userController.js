const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const userService = require('../services/userService');

exports.createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, age, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await userService.createUser({
      name,
      email,
      password: hashedPassword,
      age,
      role
    });

    if (error && error.code === '23505') {
      return res.status(409).json({ message: 'Email already exists' });
    }

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const { data } = await userService.getAllUsers();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { data } = await userService.getUserById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { data } = await userService.updateUser(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
};
