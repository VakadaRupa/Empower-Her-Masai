export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  if (!container) return;

  container.innerHTML = "";

  const list = Array.isArray(data) ? data.slice(0, 50) : [];

  list.forEach(todo => {
    const item = document.createElement("div");
    item.className = "todo-item";
    item.innerHTML = `
      <div class="todo-left">
        <input type="checkbox" ${todo.completed ? "checked" : ""} disabled />
      </div>
      <div class="todo-body">
        <p class="todo-title">${escapeHtml(todo.title)}</p>
        <small class="todo-meta">User ID: ${todo.userId} • ID: ${todo.id}</small>
      </div>
    `;
    container.appendChild(item);
  });
}
function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
