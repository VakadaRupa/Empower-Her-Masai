import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 20)));
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const updatePost = (id, title, body) => {
    setPosts(
      posts.map(p =>
        p.id === id ? { ...p, title, body } : p
      )
    );
  };

  return (
    <PostsContext.Provider value={{ posts, deletePost, updatePost }}>
      {children}
    </PostsContext.Provider>
  );
};
