import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hotbar">
      <div className="logo">Blackberry</div>
      <Link to="/posts">Posts</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default Home;
