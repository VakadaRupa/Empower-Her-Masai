const { body, param } = require('express-validator');

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 8 }).withMessage('Password too short'),
  body('age').optional().isInt({ min: 18 }).withMessage('Age must be ≥ 18')
];

exports.idValidation = [
  param('id').isUUID().withMessage('Invalid user ID')
];
