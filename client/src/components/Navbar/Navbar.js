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
        const { handleLogout, currentUser } = this.props
        const { animation, direction, visible } = this.state
        const vertical = direction === 'bottom' || direction === 'top'
    
        return (
          <div>
            <div className="btn-group">
                <Button.Group>
                    <Button className="semantic-btn" active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
                        Bottom
                    </Button>
                    <Button className="semantic-btn" active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
                        Top
                    </Button>
                </Button.Group>
                <Button className="semantic-btn semantic-toggle" onClick={this.handleAnimationChange('push')}>Toggle Navbar</Button>
            </div>
    
              {vertical ? (
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
              ) : null}
          </div>
        )
      }
    }

export default Navbar