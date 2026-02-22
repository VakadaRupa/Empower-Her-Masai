import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Todos <button onClick={logout}>Logout</button></h2>
      <ul>
        {todos.map(t => (
          <li key={t.id}><Link to={`/todos/${t.id}`}>{t.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;