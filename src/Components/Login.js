import React, {Component} from "react";
import axios from 'axios'

class Login extends Component{
    state={
        email: '',
        password: ''
    }
    componentDidUpdate=()=>{
        console.log(this.state.email)
    }
    handleSubmit=(e)=>{
        e.preventDefault()

        const data={
            email: this.email,
            password: this.password
        }
        axios.post('login', data)
            .then(res=>{
                localStorage.setItem('token', res.data.token)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="login-form">
                <h3>Login</h3>

                <div className="email">
                    <label>
                        <span>Email</span>
                        <input type="email" placeholder="Email" onChange={(e)=>this.setState({email: e.target.value})}/>
                    </label>
                </div>
                <div className="password">
                    <label>
                        <span>Password</span>
                        <input type="password" placeholder="Password" onChange={(e)=>this.setState({password: e.target.value})}/>
                    </label>
                </div>

                <button className="lgn-btn">Login</button>
            </form>
        )
    }
}

export default Login;