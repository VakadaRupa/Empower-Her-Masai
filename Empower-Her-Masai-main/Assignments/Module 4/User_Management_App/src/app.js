require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));
app.use(require('./middleware/errorHandler'));

module.exports = app;
