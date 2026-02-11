import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";

function PostCard({ post }) {
  const { deletePost, updatePost } = useContext(PostsContext);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      {edit ? (
        <>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <br />
          <textarea value={body} onChange={e => setBody(e.target.value)} />
          <br />
          <button onClick={() => {
            updatePost(post.id, title, body);
            setEdit(false);
          }}>
            Save
          </button>
        </>
      ) : (
        <>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default PostCard;
