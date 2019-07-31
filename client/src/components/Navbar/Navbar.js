import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import {  Menu, Sidebar } from 'semantic-ui-react'
import Modal2 from '../Modal/Modal'

function Navbar(props) {
    return (
        <div className="App">
            <Sidebar style={ { width: "200px" } } as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
                <Menu.Item className="link-box">
                    <h4><Link to="home">Home</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box">
                    <h4><Link to="exercises">Exercises</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box">
                    <h4><Link to="nutrition">Nutrition</Link></h4>
                </Menu.Item>

                <Menu.Item className="link-box">
                    <h4><Link to="routine">Routine</Link></h4>
                </Menu.Item>

                { props.currentUser ? 
                <div id="welcome-user">
                    <p><span>{(props.currentUser.username).charAt(0).toUpperCase() + props.currentUser.username.slice(1)}</span> Are ready to make some gainz? or </p> 
                </div> : <p style={{ color: "white"}}>Ready to make some Gainz or</p> } 
                <div className="link-box" as='a'>
                    <Modal2 handleLogout={props.handleLogout}/>
                    <p>(logout)</p>
                </div>

            </Sidebar>

      </div>
    );
}

export default Navbar