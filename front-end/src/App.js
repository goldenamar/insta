import "./App.css";
import { Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Users from "./pages/users";
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
