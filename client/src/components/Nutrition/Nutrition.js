import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Nutrition.css'

function Nutrition(props) {
    return (
        <div id="home">
            <Navbar handleLogout={props.handleLogout} currentUser={props.currentUser} />
            <div id="intro">
                <h1>Nutrition Tracker (Prototype)</h1>
                <h3>Track your nutrient intake and set body composition goals</h3>
                <button><a href="https://food-database-app.herokuapp.com">Learn More</a></button>
            </div>
      </div>
    );
}

export default Nutrition