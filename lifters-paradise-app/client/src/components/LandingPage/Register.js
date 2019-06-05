import React from 'react';
import { Redirect } from "react-router-dom"
import './LandingPage.css'

class Register extends React.Component {
    constructor() {
        super()

        this.state = {
            register: false
        }
        this.showLoginForm = this.showLoginForm.bind(this);
    }

    showLoginForm() {
        this.setState({
            register: true
        })
    }

    render() {
        const { isLoggedIn, register } = this.state
        if(isLoggedIn) {
            return <Redirect to="/"/>
        }

        if(register) return <Redirect to="/" />

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container">    
                        <div className="login-register"> 
                            <div className="login" onClick={this.showLoginForm}>Log In</div>              
                            <div className="register">Register</div>
                        </div>  

                        <div class="register-form">
                            <input type="text" placeholder="Your Name" className="input"/>
                            <input type="text" placeholder="Your Email Address" className="input"/>
                            <input type="password" placeholder="Choose a Password" className="input"/>
                            <div className="btn">Create account</div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Register