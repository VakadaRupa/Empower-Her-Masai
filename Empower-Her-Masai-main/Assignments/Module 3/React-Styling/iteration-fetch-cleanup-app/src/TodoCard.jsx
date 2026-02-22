function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "10px" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {completed ? "Completed ✅" : "Not Completed ❌"}
      </p>
    </div>
  );
}

export default TodoCard;
