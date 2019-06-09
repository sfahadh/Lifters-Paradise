import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Exercises from './components/Exercises/Exercises'
import Nutrition from './components/Nutrition/Nutrition'
import Routine from './components/Routine/Routine'
import decode from 'jwt-decode'
import { loginUser, registerUser } from './services/apiHelper'
import Login from './components/LandingPage/Login'
import Register from './components/LandingPage/Register'
import Modal2 from './components/Modal/Modal'

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
        currentUser: null,
        loggedIn: false,
        authFormData: {
          name: '',
          username: '',
          password: ''
        },
        openModal: false
      }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.authHandleChange = this.authHandleChange.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentDidMount() {
    await this.checkLogin()
  }

  async checkLogin() {
    try {
      const checkUser = localStorage.getItem("jwt")
      if (checkUser) {
        const user = decode(checkUser);
        await this.setState({
          currentUser: user
        });
      } else {
        this.props.history.push('/')
      }
    } catch (err) {console.log(err.message)}
  }

  async handleLogin() {
    const userData = await loginUser(this.state.authFormData)
    if (userData) {
      this.setState({
        currentUser: decode(userData.token),
      })
      localStorage.setItem("jwt", userData.token)
    } 
    else {
      this.props.history.push('/')
      alert("failed to login or register")
    }
  }

  async handleRegister() {
    await registerUser({ "user": this.state.authFormData })
    this.handleLogin();
    this.props.history.push('/home')
  }

  async handleLogout() {
    localStorage.removeItem("jwt")
    await this.setState({
      currentUser: null,
      openModal: true

    })
    this.props.history.push('/')
  }

  async authHandleChange(e) {
    const { name, value } = e.target;
    await this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  handleLoginButton(e) {
    e.preventDefault();
    if (this.handleLogin()) {
      this.props.history.push('/home');
    }
  }

  render() {
    const { currentUser, openModal } = this.state
    // let modal = openModal ? <Modal2 /> : null
    return (
      <div id="home-page">
        {/* { currentUser ? 
        <div id="welcome-user">
          <p>{(currentUser.username).charAt(0).toUpperCase() + currentUser.username.slice(1)}, are ready to make some gainz? or </p> 

          <button 
                className="logout-button" 
                type="button" 
                onClick={this.handleLogout}>Na 
          </button> 
        </div> : null } */}
  
        <Switch>          
          <Route 
            exact path="/" 
            render={() => 
            <Login 
              handleLogin={this.handleLogin} 
              handleChange={this.authHandleChange} 
              formData={this.authFormData} 
              handleLoginButton={this.handleLoginButton} 
            />} 
          />

          <Route 
            path="/register" 
            render={() => 
            <Register 
              handleRegister={this.handleRegister} 
              handleChange={this.authHandleChange} 
              formData={this.authFormData} 
            />} 
          />

          <Route 
            path="/home" 
            render={() => 
            <Home
              handleLogout={this.handleLogout}
              currentUser={currentUser} 
            />} 
          />
          
          <Route 
            path="/exercises" 
            render={() => 
            <Exercises
              handleLogout={this.handleLogout}
              currentUser={currentUser} 
            />} 
          />

          <Route 
            path="/nutrition" 
            render={() => 
            <Nutrition
              handleLogout={this.handleLogout}
              currentUser={currentUser} 
            />} 
          />
          
          <Route 
            path="/routine" 
            render={() => 
            <Routine
              handleLogout={this.handleLogout}
              currentUser={currentUser} 
            />} 
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
