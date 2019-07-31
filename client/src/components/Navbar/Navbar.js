import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {
    Button,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import Modal2 from '../Modal/Modal'

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
      <Grid textAlign='center'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header as='h3'>New Content Awaits</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid columns={3} divided>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          </Grid.Column>
        </Grid>
      </Grid>
    </Sidebar>
  )
  
  HorizontalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
  }
  
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
  )
  
  VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
  }
class Navbar extends Component {
    state = {
        animation: 'overlay',
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
            <Button.Group style={{ marginLeft: "300px"}}>
              <Button active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
                Left
              </Button>
              <Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
                Right
              </Button>
              <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
                Top
              </Button>
              <Button active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
                Bottom
              </Button>
            </Button.Group>
    
            <div style={{ marginLeft: "300px"}}>
                <Button onClick={this.handleAnimationChange('push')}>Show Navbar</Button>
            </div>
    
              {vertical ? (
                <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
              ) : null}
              {vertical ? null : (
                <VerticalSidebar animation={animation} direction={direction} visible={visible} />
              )}

          </div>
        )
      }
    }

export default Navbar