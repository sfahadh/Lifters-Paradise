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
        const { handleChange, handleRegisterButton } = this.props
        if(this.state.register) return <Redirect to="/" />

        return (
            <div className='register-background'>
                <div className="border-page">
                    <h1 className="title">Welcome To Lifter's Paradise</h1>
                    <div className="wrapper">
                        <img id="popeye-face" src={require("./popeye.png")} alt=""/>
                        <div className="container">    
                            <div className="login-register"> 
                                <div className="login" onClick={this.showLoginForm}>Log In</div>              
                                <div className="register" id="color-switch">Register</div>
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
                                <button onClick={handleRegisterButton} className="btn">Create account</button>
                            </div>  
                        </div>
                        <img id="bluto-face" src={require("./bluto.png")} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register