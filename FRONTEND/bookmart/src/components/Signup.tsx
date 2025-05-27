import React from "react";



//custom Logic
function Handle(){
    // logic



}

//Tsc Based
const Signup = ()=> {
    return(
       <>
            <div id = "signup">
                <div className="signup">
                    <input type = "text" placeholder="FullName"/>
                </div>
                    
                <div className="signup">
                    <input type = "email" placeholder="Email"/>
                </div>

                <div className="signup">
                    <input type = "password" placeholder="Email" required/>
                </div>
                <button className="signup" >SignUp</button>
                <style>
                    #signup{
                        height :600 px;
                        width: 600 px;

                    }
                </style>
            </div>

                

            
       </>
    )
}


export default Signup;