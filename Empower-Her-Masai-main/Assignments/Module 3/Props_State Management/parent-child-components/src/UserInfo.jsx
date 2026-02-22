function UserInfo({ name, age }) {
  return (
    <div style={{ padding: '10px', backgroundColor: '#eef', borderRadius: '5px' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;