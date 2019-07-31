import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import './Modal.css'

export default class Modal2 extends Component {
  state = { modalOpen: false }

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {this.setState({ modalOpen: false })}

  render() {
    return (
      <Modal
        trigger={<Button id="logout-button" onClick={this.handleOpen}><span>Na</span></Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content id="logout-modal-content">
          <h3 id="logout-response">YOU AIN'T SHIT</h3>
        </Modal.Content>
        <Modal.Actions id="cancel-logout">
          <Button color='blue' onClick={this.props.handleLogout} inverted>
            <Icon name='checkmark' /> I know
          </Button>
          <h4>*Click anywhere outside the text section to cancel*</h4>
        </Modal.Actions>
      </Modal>
    )
  }
}