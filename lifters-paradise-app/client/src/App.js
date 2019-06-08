import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Exercises from './components/Exercises/Exercises'
import Nutrition from './components/Nutrition/Nutrition'
import Routine from './components/Routine/Routine'
import Login from './components/LandingPage/Login'
import Register from './components/LandingPage/Register'

function App(props) {
  return (
    <div className="App">
        <Switch>
          <Route 
            exact path="/" 
            render={() => 
            <Login 
              handleLogin={props.handleLogin} 
              handleChange={props.authHandleChange} 
              formData={props.authFormData} 
              handleLoginButton={props.handleLoginButton} 
            />} 
          />
          
          <Route 
            exact path="/register" 
            render={() => 
            <Register 
              handleRegister={props.handleRegister} 
              handleChange={props.authHandleChange} 
              formData={props.authFormData} 
            />} 
          />

          <Route path="/home" component={ Home }/>
          <Route path="/exercises" component={ Exercises }/>
          <Route path="/nutrition" component={ Nutrition }/>
          <Route path="/routine" component={ Routine }/>
        </Switch>
    </div>
  );
}

export default App;
