import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import PostList from "./components/PostList.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <ThemeToggle />
      <h2>Posts App</h2>
      <PostList />
    </div>
  );
}

export default App;
