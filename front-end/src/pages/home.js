import "./home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  // const navigate = useNavigate();
  // let signedin = "no"

  // if(signedin === "yes"){
  //   console.log("Signed in")
  // } else {
  localStorage.setItem('id',"hi");
  // }

  useEffect(()=> {
    if(localStorage.getItem('id') === "hi"){
      navigate("/signin")
    }
  })

  return (
    <div className="main">
      <div className="hotbar">
        <div className="logo">Facegram</div>
        <div className="link">
          <Link to="/posts">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/signin">Sign in</Link>
          <div className="account"></div>
        </div>
      </div>
      <div className="mid">
        <h1 className="greetings">Welcome to Facegram! Look at other people’s Posts and all the Users there are in Facegram.</h1>
      </div>
    </div>
  );
}

export default Home;
