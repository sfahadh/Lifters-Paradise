import React from 'react';
import { Redirect } from "react-router-dom"
import './LandingPage.css'

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            login: false
        }
        this.showRegisterForm = this.showRegisterForm.bind(this);
    }

    showRegisterForm() {
        this.setState({
            login: true
        })
    }

    render() {
        const { handleChange, handleLoginButton } = this.props
        if(this.state.login) return <Redirect to="/register"/>

        return (
            <div className='App'>
                <div className="wrapper">
                    <div className="container"> 
                        <div className="login-register"> 
                            <div className="login">Log In</div>            
                            <div className="register" onClick={this.showRegisterForm}>Register</div>
                        </div>  

                        <div className="login-form">
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                className="input"
                                onChange={handleChange}
                                // value={formData.username}
                            />

                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                className="input"
                                onChange={handleChange}
                                // value={formData.password}
                            />
                            <button 
                                onClick={handleLoginButton}
                                className="btn">log in
                            </button>
                        </div>   
                    </div>
                </div>          
            </div>
        );
    }
}

export default Login