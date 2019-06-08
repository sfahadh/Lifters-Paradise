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
        if(this.state.register) return <Redirect to="/" />

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container">    
                        <div className="login-register"> 
                            <div className="login" onClick={this.showLoginForm}>Log In</div>              
                            <div className="register">Register</div>
                        </div>  

                        <form className="register-form">
                            <input 
                                type="text" 
                                name="first_name" 
                                placeholder="First Name" 
                                className="input"
                            />

                            <input 
                                type="text" 
                                name="last_name" 
                                placeholder="Last Name" 
                                className="input"
                            />

                            <input 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                className="input"
                            />

                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Your Email Address" 
                                className="input"
                            />

                            <input 
                                type="password" 
                                name="password"
                                placeholder="Choose a Password" 
                                className="input"
                            />
                            <div className="btn">Create account</div>
                        </form>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Register