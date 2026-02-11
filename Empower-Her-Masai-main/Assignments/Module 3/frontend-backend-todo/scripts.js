// -------------------------------
// Fetch first 20 todos from API
// -------------------------------
async function fetchTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const first20 = data.slice(0, 20);

    localStorage.setItem("todos", JSON.stringify(first20));

    renderTodos();
}

// -------------------------------
// Get todos from LocalStorage
// -------------------------------
function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

// -------------------------------
// Save todos back to LocalStorage
// -------------------------------
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// -------------------------------
// Delete a todo
// -------------------------------
function deleteTodo(id) {
    let todos = getTodos();
    const updated = todos.filter(todo => todo.id !== id);

    saveTodos(updated);
    renderTodos();
}

// -------------------------------
// Toggle complete status
// -------------------------------
function toggleTodo(id) {
    let todos = getTodos();

    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });

    saveTodos(todos);
    renderTodos();
}

// -------------------------------
// Render todos on UI
// -------------------------------
function renderTodos() {
    const listDiv = document.getElementById("todo-list");
    const emptyMsg = document.getElementById("empty-message");

    const todos = getTodos();

    listDiv.innerHTML = "";

    if (todos.length === 0) {
        emptyMsg.style.display = "block";
        return;
    }
    
    emptyMsg.style.display = "none";

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = `todo ${todo.completed ? "completed" : ""}`;

        div.innerHTML = `
            <span class="title">${todo.title}</span>
            <div>
                <button class="toggle-btn" onclick="toggleTodo(${todo.id})">
                    ${todo.completed ? "Undo" : "Done"}
                </button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        listDiv.appendChild(div);
    });
}

// -------------------------------
// App Initialization
// -------------------------------
if (!localStorage.getItem("todos")) {
    fetchTodos();
} else {
    renderTodos();
}
