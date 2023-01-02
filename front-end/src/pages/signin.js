import "./signin.css";
import { Link } from "react-router-dom";

function SignIn() {
    return(
        <div className="main">
            <p>Sign in</p>
            <Link to='/signup'>Sign up</Link>
        </div>
    )
}

export default SignIn;