import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import {  Menu, Sidebar } from 'semantic-ui-react'

function Navbar(props) {
    return (
        <div className="App">
            {/* <nav className="side-drawer">
                <img id="logo-image" src={require("./logo.png")} alt="profile"/>
            </nav>  */}

            <Sidebar style={ { width: "200px" } } as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
            { props.currentUser ? 
                <div id="welcome-user">
                    <p><span>{(props.currentUser.username).charAt(0).toUpperCase() + props.currentUser.username.slice(1)}</span> are ready to make some gainz? or </p> 
                </div> : <p>did not work</p> } 
                <Menu.Item className="link-box" as='a'>
                    <button id="logout-button" onClick={props.handleLogout}>Na</button>
                    <p>(logout)</p>
                </Menu.Item>

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