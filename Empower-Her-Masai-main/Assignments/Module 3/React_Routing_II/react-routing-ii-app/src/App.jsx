import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/todos" element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        } />
        <Route path="/todos/:todoId" element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;