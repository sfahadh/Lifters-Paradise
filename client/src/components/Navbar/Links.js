import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'
import Modal2 from '../Modal/Modal'
  
  const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width='thin'
    >
      <Link className="link" to='home'>
        <Icon name='home' />
        Home
      </Link>
      <Link className="link" to='exercises'>
        <Icon name='heart' />
        Exercises
      </Link>
      <Link className="link" to='nutrition'>
        <Icon name='nutritionix' />
        Nutrition
      </Link>
      <Link className="link" to='routine'>
        <Icon name='table' />
        Routine
      </Link>

      { this.props.currentUser ? 
                <div id="welcome-user">
                    <p><span>{(this.props.currentUser.username).charAt(0).toUpperCase() + this.props.currentUser.username.slice(1)}</span> Are ready to make some gainz? or </p> 
                </div> : <p>did not work</p> } 
                <div className="link-box" as='a'>
                    <Modal2 handleLogout={this.props.handleLogout}/>
                    <p>(logout)</p>
                </div>

    </Sidebar>
  )

export default VerticalSidebar