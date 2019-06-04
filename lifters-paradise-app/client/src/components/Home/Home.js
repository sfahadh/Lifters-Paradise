import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Home.css'

function Home() {
    return (
        <div className="App">
            <Navbar />
            <div id="intro">
                <h1>Online Exercise Tracker and Programming (Prototype)</h1>
                <button>START NOW</button>
            </div>
        </div>
    );
}

export default Home