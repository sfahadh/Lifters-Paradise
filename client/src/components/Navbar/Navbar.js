import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Modal2 from '../Modal/Modal'

class Navbar extends Component {
    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state
        return (
            <div className="App">
                        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
            { this.props.currentUser ? 
                    <div id="welcome-user">
                        <p><span>{(this.props.currentUser.username).charAt(0).toUpperCase() + this.props.currentUser.username.slice(1)}</span> Are ready to make some gainz? or </p> 
                    </div> : <p style={{ color: "white"}}>Ready to make some Gainz ori</p> } 
                    <div className="link-box" as='a'>
                        <Modal2 handleLogout={this.props.handleLogout}/>
                        <p>(logout)</p>
                    </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

    
          </div>
        );
    }
}

export default Navbar