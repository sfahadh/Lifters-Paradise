import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Nutrition.css'

function Nutrition() {
    return (
        <div id="home">
            <Navbar />
            <div id="intro">
                <h1>Nutrition Tracker (Prototype)</h1>
                <h3>Track your nutrient intake and set body composition goals</h3>
                <button><a href="https://food-database-app.herokuapp.com">Learn More</a></button>
            </div>
            <h3 id="credit">Photo Credit: Cai Yang</h3>
      </div>
    );
}

export default Nutrition