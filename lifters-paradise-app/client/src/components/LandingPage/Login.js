import React from 'react';
import { Redirect } from "react-router-dom"
import './LandingPage.css'

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            myUsername: "fahad",
            myPassword: "idk",
            isUsername: false,
            isPassword: false,
            isLoggedIn: false,
            login: true
        }
        this.validatePassword = this.validatePassword.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateCredentials = this.validateCredentials.bind(this);
        this.showRegisterForm = this.showRegisterForm.bind(this);
    }

    validateUsername(e) {
        if(e.target.value === this.state.myUsername) 
            this.setState({
                isUsername: true
            })
            this.validatePassword(e);
    }

    validatePassword(e) {
        if(e.target.value === this.state.myPassword) 
            this.setState({
                isPassword: true
            })
    }

    validateCredentials(e) {
        e.preventDefault();
        if(!!this.state.isUsername && !!this.state.isPassword) {
            this.setState({
                isLoggedIn: true
            })
        } else {
            alert("WRONG");
        }
    }

    loginButton(e) {
        e.preventDefault();
    }

    showRegisterForm() {
        this.setState({
            login: false
        })
    }

    render() {
        const { isLoggedIn, login } = this.state
        if(isLoggedIn) {
            return <Redirect to="/home"/>
        }

        if(!login) return <Redirect to="/register"/>

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container"> 
                        <div className="login-register"> 
                            <div className="login">Log In</div>            
                            <div className="register" onClick={this.showRegisterForm}>Register</div>
                        </div>  

                        <div className="login-form">
                            <input type="text" placeholder="Username" className="input" onChange={this.validateUsername}/>
                            <input type="password" placeholder="Password" className="input" onChange={this.validatePassword}/>
                            <div className="btn" onClick={this.validateCredentials}>log in</div>
                        </div>   
                    </div>
                </div>          
            </div>
        );
    }
}

export default Login