import React from 'react';
import { Redirect } from "react-router-dom"
import './LandingPage.css'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            myUsername: "fahad",
            myPassword: "idk",
            isUsername: false,
            isPassword: false,
            open: true,
            isLoggedIn: false
        }
        this.validatePassword = this.validatePassword.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateCredentials = this.validateCredentials.bind(this);
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

    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to="/home"/>
        }

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container">    
                        <div className="login">Log In</div>              
                        <div className="signup">Sign Up</div>

                        <div className="login-form">
                            <input type="text" placeholder="Email or Username" className="input" />
                            <input type="password" placeholder="Password" className="input" />
                            <div className="btn">log in</div>
                        </div>   
                        
                        <div className="signup-form">
                            <input type="text" placeholder="Your Email Address" className="input"/>
                            <input type="text" placeholder="Choose a Username" className="input"/>
                            <input type="password" placeholder="Choose a Password" className="input"/>
                            <div className="btn">Create account</div>
                        </div>     
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn