import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="App">
            <nav className="side-drawer">
                <ul className='nav-links'>
                    <h4><Link to="home">Home</Link></h4>
                    {/* <h6 id="home">Home</h6> */}
                    <h4><Link to="exercises">Exercises</Link></h4>
                    {/* <h6 id="about">Exercises</h6> */}
                    <h4><Link to="nutrition">Nutrition</Link></h4>
                    {/* <h6 id="projects">Nutrition</h6> */}
                    <h4><Link to="routine">Routine</Link></h4>
                    {/* <h6 id="contact">Routine</h6> */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar