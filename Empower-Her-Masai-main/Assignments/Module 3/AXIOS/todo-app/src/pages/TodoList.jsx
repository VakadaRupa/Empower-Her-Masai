import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  return (
    <div>
      <h1>Todos</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            {todo.title}
          </Link>
          <p>Status: {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
