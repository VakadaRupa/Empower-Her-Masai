import UserInfo from './UserInfo';

function UserProfile() {
  const userData = {
    name: "Aisha Sharma",
    age: 24
  };

  return (
    <div style={{ border: '2px solid #333', padding: '20px', width: '300px' }}>
      <h2>User Profile</h2>
      <UserInfo name={userData.name} age={userData.age} />
    </div>
  );
}

export default UserProfile;