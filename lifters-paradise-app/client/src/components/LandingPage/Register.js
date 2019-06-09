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
        const { handleChange, handleRegister } = this.props
        if(this.state.register) return <Redirect to="/" />

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container">    
                        <div className="login-register"> 
                            <div className="login" onClick={this.showLoginForm}>Log In</div>              
                            <div className="register">Register</div>
                        </div>  

                        <div className="register-form">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="What is your name newbie?" 
                                className="input"
                                onChange={handleChange}
                            />

                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Pick another name to be called by" 
                                className="input"
                                onChange={handleChange}
                            />

                            <input 
                                type="password" 
                                name="password"
                                placeholder="Choose a password" 
                                className="input"
                                onChange={handleChange}
                            />
                            <button 
                                onClick={(e) => {
                                e.preventDefault();
                                handleRegister();}}
                                className="btn">Create account</button>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Register