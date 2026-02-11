// Local data store (acts as our database)
let todos = [];

export const TodoModel = {
  getAll: () => todos,
  
  getById: (id) => todos.find(t => t.id === parseInt(id)),
  
  create: (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    return newTodo;
  },
  
  update: (id, data) => {
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index === -1) return null;
    
    todos[index] = { ...todos[index], ...data };
    return todos[index];
  },
  
  delete: (id) => {
    const index = todos.findIndex(t => t.id === parseInt(id));
    if (index === -1) return false;
    todos.splice(index, 1);
    return true;
  }
};