function MessageCard({ title, message }) {
  const cardStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#333', marginTop: 0 }}>{title}</h2>
      <p style={{ color: '#666' }}>{message}</p>
    </div>
  );
}

export default MessageCard;