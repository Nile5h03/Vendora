import React  from "react";
import './CSS/Login.css'
export default function LoginSignup(){
    return(
        <div className="login">
            <div className="logincontainer">
                <h1>Sign Up</h1>
                <div className="loginsignupfields">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Enail Address" />
                    <input type="text" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignuplogin">
                    Already Have A coount ? <span>Login here</span>
                </p>
                <div className="loginagree">
                    <input type="checkbox" name = '' id="" />
                    <p>By Continuing, i agree to term and policy</p>
                </div>
            </div>
        </div>
    )
}