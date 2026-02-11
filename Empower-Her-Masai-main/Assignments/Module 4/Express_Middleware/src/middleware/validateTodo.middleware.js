const validateTodo = (req, res, next) => {
    const bodyKeys = Object.keys(req.body);
    
    // Rule: Must have exactly 1 key named 'title' and it must be a string
    const hasTitle = bodyKeys.includes('title');
    const isOnlyTitle = bodyKeys.length === 1;
    const isString = typeof req.body.title === 'string';

    if (hasTitle && isOnlyTitle && isString) {
        next();
    } else {
        res.status(400).json({ 
            error: "Invalid request body. Only 'title' is allowed" 
        });
    }
};

module.exports = validateTodo;