import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
    function signin(){
        // localStorage.setItem('id',"hello");
    }

    return(
        <div className="main">
            <p>Sign in</p>
            <Link onClick={signin()} to="/">Sign in</Link>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

export default SignIn;