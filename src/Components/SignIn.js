import React, {Component} from "react";

class SignIn extends Component{
    render(){
        return(
            <form>
                <h3>Sign Up</h3>

                <div>
                    <label>
                        <span>First Name</span>
                        <input type="text" placeholder="First Name"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Last Name</span>
                        <input type="text" placeholder="Last Name"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Email</span>
                        <input type="email" placeholder="Email"/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password</span>
                        <input type="password" placeholder="Password"/>
                    </label>
                </div>

                <button>Sign Up</button>
            </form>
        )
    }
}

export default SignIn;