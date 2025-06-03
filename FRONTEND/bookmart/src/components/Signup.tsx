import React, {useState} from "react";
import{useNavigate} from "react-router-dom";
import "./Signup.css"
import seller from "../pages/SellerHome";


//custom Logic
function Handle(){
    // logic



}

//Tsc Based
const signup = ()=> {
    const navigate = useNavigate();
    const handleListener = () =>{
        //Login Logic
        navigate('/seller')
    }
    
    return(
       <>   
            
            <div className="container">
                {/* Signup Form */}
                <div className="form-box" id="signup-box">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button onClick={handleListener} type="submit">Sign Up</button>
                    </form>
                </div>

                {/* Login Form */}
                <div className="form-box" id="login-box">
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" onClick={handleListener} >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default signup;