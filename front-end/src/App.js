import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />  
      </Routes>
    </div>
  );
}

export default App;
