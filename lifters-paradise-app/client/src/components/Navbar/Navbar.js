import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

function Navbar() {
    return (
        <div className="App">
            <nav className="side-drawer">
                <img id="logo-image" src={require("./logo.png")} alt="profile"></img>
            </nav> 

            <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                <Menu.Item className="link-box" as='a'>
                    <h4><Link to="home">Home</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box" as='a'>
                    <h4><Link to="exercises">Exercises</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box" as='a'>
                    <h4><Link to="nutrition">Nutrition</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box" as='a'>
                    <h4><Link to="routine">Routine</Link></h4>
                </Menu.Item>
            </Sidebar>

      </div>
    );
}

export default Navbar