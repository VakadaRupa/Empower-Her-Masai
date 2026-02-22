import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PostsProvider } from "./context/PostsContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </ThemeProvider>
);
