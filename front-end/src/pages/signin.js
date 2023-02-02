import "./signin.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function SignIn() {
    // const navigate = useNavigate;
    // let signedin = "no"

    function signin(){
        localStorage.setItem('id',"hello")
        signedin = "yes";
        return signedin
    }

    // useEffect(() => {
    //     if(localStorage.getItem('id') === "hello"){                                                                                                                  "){
    //       navigate("/")
    //     }
    //   })

    return(
        <div className="main">
            <div classname="box">
                <p>Sign in</p>
                <Link onClick={signin()} to="/">Sign in</Link>
            <Link to='/signup'>Sign up</Link>
            </div>
        </div>
    )
}

export default SignIn;