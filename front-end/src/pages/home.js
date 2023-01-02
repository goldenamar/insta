import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hotbar">
      <div className="logo">Facegram</div>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
      <Link to="/signin">Sign in</Link>
    </div>
  );
}

export default Home;
