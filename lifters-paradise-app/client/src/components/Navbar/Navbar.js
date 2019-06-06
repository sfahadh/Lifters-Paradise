import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

function Navbar() {
    return (
        <div className="App">
            <nav className="side-drawer">
                <ul className='nav-links'>
                    <h4><Link to="home">Home</Link></h4>
                    <h4><Link to="exercises">Exercises</Link></h4>
                    <h4><Link to="nutrition">Nutrition</Link></h4>
                    <h4><Link to="routine">Routine</Link></h4>
                </ul>
            </nav> 
            
            <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                <Menu.Item as='a'>
                    <h4><Link to="home">Home</Link></h4>
                </Menu.Item>

                <Menu.Item as='a'>
                    <h4><Link to="exercises">Exercises</Link></h4>
                </Menu.Item>

                <Menu.Item as='a'>
                    <h4><Link to="nutrition">Nutrition</Link></h4>
                </Menu.Item>

                <Menu.Item as='a'>
                    <h4><Link to="routine">Routine</Link></h4>
                </Menu.Item>
            </Sidebar>

      </div>
    );
}

export default Navbar