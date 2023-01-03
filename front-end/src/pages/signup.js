import "./signup.css";
import { Link } from "react-router-dom";

function SignUp() {
    return(
        <div className="main">
            <p>Sign Up</p>
            <Link to="/">Sign up</Link>
        </div>
    )
}

export default SignUp;