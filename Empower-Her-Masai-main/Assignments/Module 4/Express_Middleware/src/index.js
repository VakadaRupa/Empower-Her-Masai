const express = require('express');
const loggerMiddleware = require('./middleware/logger.middleware');
const todoRouter = require('./routes/todos.routes');

const app = express();
const PORT = 3000;


app.use(express.json());

// 2. App-level Logger Middleware (Runs for every request)
app.use(loggerMiddleware);

// 3. Registering the Todo Router
app.use('/todos', todoRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});