import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Home Page</h1>
      <Link to="/login">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>Go to Login</button>
      </Link>
    </div>
  );
};

export default Home;