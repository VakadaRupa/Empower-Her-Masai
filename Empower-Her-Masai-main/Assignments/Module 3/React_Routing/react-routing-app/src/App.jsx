import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// --- Navbar Component ---
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">ViteRouter</div>
    <div className="nav-links">
      <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/aboutus" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
      <NavLink to="/todos" className={({ isActive }) => isActive ? "active" : ""}>Todos</NavLink>
    </div>
  </nav>
);

// --- Page Components ---
const Home = () => <div className="content"><h1>This is Home Page</h1></div>;

const AboutUs = () => <div className="content"><h1>This is About Us Page</h1></div>;

const NotFound = () => <div className="content"><h1>404 - Page Not Found</h1></div>;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data.slice(0, 10)); // Fetch first 10
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="content">Loading...</div>;

  return (
    <div className="content">
      <h1>Todo List</h1>
      <div className="todo-grid">
        {todos.map(todo => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.title}</h3>
            <div className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}>
              {todo.completed ? 'Completed' : 'Not Completed'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/todos" element={<Todos />} />
          {/* Wildcard for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;