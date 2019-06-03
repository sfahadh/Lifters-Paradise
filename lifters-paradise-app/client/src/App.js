import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Exercises from './components/Exercises/Exercises'
import Nutrition from './components/Nutrition/Nutrition'
import Routine from './components/Routine/Routine'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <h1>YERRRRR</h1>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/exercises" component={ Exercises }></Route>
          <Route path="/nutrition" component={ Nutrition }></Route>
          <Route path="/routine" component={ Routine }></Route>
        </Switch>
    </div>
  );
}

export default App;
