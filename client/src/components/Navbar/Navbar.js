import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react'
import Modal2 from '../Modal/Modal'
  
class Navbar extends Component {
    state = {
        direction: 'left',
        visible: false,
    }
    
    handleAnimationChange = animation => () =>
        this.setState(prevState => ({ animation, visible: !prevState.visible }))

    handleDirectionChange = direction => () => this.setState({ direction, visible: false })
    
    render() {
        const { animation, direction, visible } = this.state
        const { currentUser, handleLogout } = this.props
        const vertical = direction === 'bottom' || direction === 'left' || direction === 'right'
    
        return (
          <div>
            <div className="btn-group">
                <Button.Group>
                    <Button className="semantic-btn" active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
                        Bottom
                    </Button>
                    <Button className="semantic-btn" active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
                        Left
                    </Button>
                    <Button className="semantic-btn" active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
                        Right
                    </Button>
                </Button.Group>
                <Button className="semantic-btn semantic-toggle" onClick={this.handleAnimationChange('push')}>Toggle Navbar</Button>
            </div>
    
              {vertical ? (
                    <Sidebar
                    className="side-drawer"
                    as={Menu}
                    animation={animation}
                    direction={direction}
                    icon='labeled'
                    inverted
                    vertical
                    visible={visible}
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
              
                    { currentUser ? 
                        <div style={{ height: "200px", border: "2px solid red"}}>
                            <p style={{ color: "white"}}><span>{(currentUser.username).charAt(0).toUpperCase() + currentUser.username.slice(1)}</span> Are ready to make some gainz? or </p> 
                        </div> : <p style={{ marginTop: "12px", color: "white"}}>Want to make some Gainz</p> } 

                        <div style={{ marginTop: "-5px"}} className="link-box" as='a'>
                            <Modal2 handleLogout={handleLogout}/>
                            <p style={{ marginTop: "-33px"}}>(logout)</p>
                        </div>
                  </Sidebar>
              ) : null}
          </div>
        )
      }
    }

export default Navbar