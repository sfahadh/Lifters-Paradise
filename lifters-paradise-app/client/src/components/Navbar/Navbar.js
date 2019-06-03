import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <h4><Link to="/">Home</Link></h4>

                    <h4><Link to="exercises">Exercises</Link></h4>

                    <h4><Link to="nutrition">Nutrition</Link></h4>

                    <h4><Link to="routine">Routine</Link></h4>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar