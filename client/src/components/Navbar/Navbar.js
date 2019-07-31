import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react'
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
    </Sidebar>
  )
  
  VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
  }
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
        const vertical = direction === 'bottom' || direction === 'top'
    
        return (
          <div>
            <div className="btn-group">
                <Button.Group>
                    <Button className="semantic-btn" active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
                        Left
                    </Button>
                    <Button className="semantic-btn" active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
                        Right
                    </Button>
                    <Button className="semantic-btn" active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
                        Bottom
                    </Button>
                </Button.Group>
                <Button className="semantic-btn semantic-toggle" onClick={this.handleAnimationChange('push')}>Toggle Navbar</Button>
            </div>
    
              {vertical ? (
                <VerticalSidebar animation={animation} direction={direction} visible={visible} />
              ) : null}
              {vertical ? null : (
                <VerticalSidebar animation={animation} direction={direction} visible={visible} />
              )}

          </div>
        )
      }
    }

export default Navbar